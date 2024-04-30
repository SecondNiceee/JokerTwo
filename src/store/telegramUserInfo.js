import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserInfo = createAsyncThunk(
    'telegramUserInfo/fetchUserInfo',
    async function(){
        let firstName = await window.Telegram.WebApp.initDataUnsafe.user.first_name 
        let lastName =  await window.Telegram.WebApp.initDataUnsafe.user.last_name
        let UserId = await window.Telegram.WebApp.initDataUnsafe.user.id
        let photo = await axios.get( 'http://localhost:5000/user/findOne' ,  {
            params : {
              id : UserId
            }
          })
        return {firstName : firstName, lastName : lastName , id : UserId , photo : photo}
    }


)

const telegramUserInfo = createSlice(  {
    name : 'telegramUserInfo',
    initialState : {
        state : null,
        id : '',
        photo : '',
        firstName : '',
        lastName : '',
    },
    extraReducers : builder => {
        builder.addCase( fetchUserInfo.pending, (state => {state.status = 'loading'} )  )
        builder.addCase( fetchUserInfo.fulfilled, ( (state ,action) => {state.status = 'loading' 
        state.id = action.payload.id 
        state.firstName = action.payload.firstName 
        state.lastName = action.payload.lastName 
        state.photo = action.payload.photo 
        builder.addCase(fetchUserInfo.rejected, ( (state , action) => {state.status = 'error'} )  )
     } )  )
    }
}   )

export default telegramUserInfo.reducer;