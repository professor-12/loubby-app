import { createSlice } from "@reduxjs/toolkit"


const user = createSlice({
      initialState: {},
      name: "user",
      reducers: {
            getUser(state, { payload }) {
                 return {...state,...payload}
            }
      }
})


export  default user.reducer

export const { getUser  } = user.actions