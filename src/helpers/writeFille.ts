"use server"
import fs from 'fs/promises';

export const getWhat = async (module: any) => {
      await fs.appendFile("./public/index.ts",JSON.stringify(module))
}



export default async function readFileContent(filePath: string) {
      console.log(filePath)
      
  try {
    const data = await fs.readFile(filePath, 'utf8');
    console.log(data);
  } catch (err) {
    console.error('Error reading file:', err);
  }
}

