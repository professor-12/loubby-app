
import { SignUpData } from "@/types/form"

export const signUpEmployer = async (payload: SignUpData) => {
      const serialized_data = JSON.stringify(payload as SignUpData)
      return await fetch("https://api.loubby.ai/api/v1/employer/signup", {
            method: "POST",
            body: serialized_data,
            headers: {
                  "Content-Type": "application/json"
            }
      })


}