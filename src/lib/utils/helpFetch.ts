export const helperFetch = async (url: string, token?: string, method?: string) => {
    let request: Response | any;
    if (token) {
        console.log(token);
        request = await fetch(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            method: method ?? "GET",
        });
    } else {
        request = await fetch(url, {
            method: method ?? "GET",
        });
    }
    if (!request.ok) {
        const respost = await request.json();
        return { status: request.status, message: respost.message };
    }

    return request.json();
};