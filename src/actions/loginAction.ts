"use server"
import fs from "fs/promises"
export const loginAction = async (formdata: FormData) => {
      const path = await fs.mkdir("public/products") as any
      await fs.writeFile(`public${path}`,Buffer.from(""))

      const email = formdata.values()

      console.log(email)
}
