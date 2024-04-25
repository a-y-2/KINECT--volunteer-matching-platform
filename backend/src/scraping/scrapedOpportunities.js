import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  // Read the JSON file
  const filePath = path.join(process.cwd(), 'cardData.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  // Pagination logic
  const page = parseInt(req.query.page) || 1;
  const pageSize = 9;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(data.length / pageSize);

  // Extract data for the current page
  const opportunities = data.slice(startIndex, endIndex);

  // Return the data
  res.status(200).json({ opportunities, totalPages });
}
