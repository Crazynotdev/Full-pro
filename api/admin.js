import { readMessages } from './utils.js';

export default async function handler(req, res) {
  const all = await readMessages('__all__');
  const usernames = Object.keys(all);
  let total = 0;
  usernames.forEach(u => {
    total += all[u].length;
  });
  res.status(200).json({
    users: usernames.length,
    total,
    usernames
  });
}