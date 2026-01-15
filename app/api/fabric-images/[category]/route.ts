import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> } // Next 15 uses Promise for params
) {
  const { category } = await params;
  
  // Path to your public folder for this category
  const directoryPath = path.join(process.cwd(), 'public', category);

  try {
    // Check if the folder exists
    if (!fs.existsSync(directoryPath)) {
      return NextResponse.json([]);
    }

    // Read all files in the directory
    const files = fs.readdirSync(directoryPath);

    // Filter for images and sort them correctly
    const images = files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map(file => `/${category}/${file}`)
      .sort((a, b) => {
        // Custom sort: category.jpg comes before category1.jpg
        const aNum = a.match(/\d+/);
        const bNum = b.match(/\d+/);
        
        if (!aNum && bNum) return -1;
        if (aNum && !bNum) return 1;
        if (!aNum && !bNum) return a.localeCompare(b);
        
        return parseInt(aNum![0]) - parseInt(bNum![0]);
      });

    return NextResponse.json(images);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Failed to read images" }, { status: 500 });
  }
}