export function FormatSignUpEmployee(data:any) {
      const {
            company_name,
            code,
            cpassword,
            email,
            first_name,
            last_name,
            password,
            phone_no,
        } = data;
        const formatted_data = {
            confirm_password: cpassword,
            company_name,
            email,
            first_name,
            last_name,
            password,
            phone_number: phone_no,
            phone_country: {
                code: code?.split("_")[0],
                flag: code?.split("_")[1],
                dial_code: code?.split("_")[2],
            },
            thirdPartyNumber: "",
            thirdPartyNumberCountry: {
                code: code?.split("_")[0],
                flag: code?.split("_")[1],
                dial_code: code?.split("_")[2],
            },
            phonenumber: phone_no,
        };
      return formatted_data
}