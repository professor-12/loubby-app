"use server"
import fs from 'fs/promises';

const baseDir = __dirname

export const getWhat = async (module: any) => {
      await fs.appendFile("./public/index.ts",JSON.stringify(module))
}