export interface PhoneNumber {
      name?: string;
      flag: any;
      code: string;
      dial_code: string  | number
}

export interface ThirdPArtyNumberCountry {
      flag: any;
      code: string;
      dial_code: string;
}
export interface SignUpData {
      company_name: String;
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
      password: string;
      phone_country: PhoneNumber;
      is3p?: boolean;
      phonenumber: string;
      thirdPartyEmail?: string;
      thirdPartyNumber?: string;
      thirdPartyNumberCountry: ThirdPArtyNumberCountry;
      confirm_password: string
}


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