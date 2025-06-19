import fs from 'fs/promises';
import path from 'path';

const FILE = path.resolve('./data/messages.json');

export async function readMessages(user) {
  try {
    const raw = await fs.readFile(FILE, 'utf-8');
    const data = JSON.parse(raw);
    return data[user] || [];
  } catch (e) {
    return [];
  }
}

export async function writeMessage(user, message) {
  let data = {};
  try {
    const raw = await fs.readFile(FILE, 'utf-8');
    data = JSON.parse(raw);
  } catch {}
  if (!data[user]) data[user] = [];
  data[user].push({ message, date: new Date().toISOString() });
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  await fs.writeFile(FILE, JSON.stringify(data, null, 2));
}