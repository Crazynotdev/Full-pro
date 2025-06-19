import { readMessages } from './utils.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { username } = req.query;
  if (!username) return res.status(400).json({ error: 'Missing username' });
  const messages = await readMessages(username);
  res.status(200).json({ messages });
}