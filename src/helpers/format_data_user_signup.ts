import { IField } from "@/types/auth"

export const Format_User_SignUp_Data = (data: IField) => {
      const { code, email, first_name, last_name, password, phone_no: phone_number } = data


      return {
            first_name,
            last_name,
            phone_number,
            password,
            email,
            phone_country: {
                  flag: code.split("_")[1],
                  code: code.split("_")[0],
                  dial_code: code.split("_")[2]

            }
            
      }
}