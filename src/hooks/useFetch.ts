export const helpFetch = async (url: string, token?: string, method?: "POST" | "GET" | "Put" | "DELET" | "PATCH" , headers?: Object ) => {
      let header = {
            Authorization: 'Bearer ' + token,
            ...headers
      }
      return await fetch(url, {
            headers: {...header as any},
            method
      })
}