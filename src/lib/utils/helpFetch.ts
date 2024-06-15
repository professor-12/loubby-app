export const helperFetch = async (url: string, token?: string, method?: string) => {
    let request: Response | any;
    const header = {
        "Content-Type": "application/json"
    } as any;
    if (token) {
        header["Authorization"] = `Bearer ${token}`
    }
        request = await fetch(url, {
            headers: header,
            method: method ?? "GET",
        });

    if (!request.ok) {
        const respost = await request.json();
        return { status: request.status, message: respost.message };
    }
    return request.json();
};