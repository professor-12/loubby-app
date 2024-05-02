"use server"
import fs from 'fs/promises';

export const getWhat = async (module: any) => {
      await fs.appendFile("./public/index.ts",JSON.stringify(module))
}