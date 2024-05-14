export interface IField {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    c_password: string;
    check: string;
    code: string;
    phone_no: string;
}

export type InputType = {
    company_name: string;
    email: string;
    first_name: string;
    last_name: string;
    phone_no: string;
    password: string;
    cpassword: string;
    check: boolean;
    code: string;
};