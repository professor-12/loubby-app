"use client";
const useLogin = (
    url: URL,
    payload?: Object,
    method?: "POST" | "GET" | "PUT" | "DELETE" | "PATCH",
    headers?: any
) => {
    const Fetch = async () => {
        let request;
        if (method == "GET" || !method) {
            request = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
            });
        } else {
            request = await fetch(url, {
                method: method ?? "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                    ...headers,
                },
            });
        }
        if (!request.ok) {
            return {
                error: request.status,
            };
        }
        const res = await request.json();

        return res;
    };

    return { Fetch };
};

export default useLogin;
