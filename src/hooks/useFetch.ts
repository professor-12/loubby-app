export const helpFetch =  async (url: string, token: string) => {
      return await fetch(url, {
            headers: {
                  Authorization: 'Bearer ' + token
            }
      })
}