export const useLocalStorage = () => {
      const get = (item: string) =>  ""
      const set = (name: string, value: any) => JSON.stringify(localStorage.setItem(name, value)) 

      return {get,set}

}