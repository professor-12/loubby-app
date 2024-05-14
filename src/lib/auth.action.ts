import { Zod } from "@/app/onboarding/login/page";

export async function login(payload:Zod): Promise<Response> {
      const response =  await fetch(
            "https://api.loubby.ai/api/v1/employer/login",
            {
                method: "POST",
                body: JSON.stringify({
                      email: payload.email.trim(),
                    user_password: payload.password.trim(),
                }),
                headers: {
                      "Content-Type": "application/json",
                  },
            }
      );


      return response
      
}


export async function signup<T>(payload:T | any) {
      const response = await fetch(
            "https://api.loubby.ai/api/v1/user/signup",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: payload as any,
            }
        );

      return response
}
 