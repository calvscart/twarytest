import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { list } = req.query;

  if (!list) {
    return res.status(400).json({ error: 'Missing ?list=name parameter' });
  }

  try {
    const filePath = path.join(process.cwd(), 'api', 'lists', `${list}.json`);
    const fileContents = await fs.readFile(filePath, 'utf-8');
    const words = JSON.parse(fileContents);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.status(200).json({ word: randomWord });
  } catch (err) {
    res.status(404).json({ error: `List "${list}" not found or failed to load.` });
  }
}
