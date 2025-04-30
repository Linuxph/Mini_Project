// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     users:[]
// }

// export const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers:{
//         currentSession: (state, action) => {
//             const user = {
//                 user_id:action.payload.id,
//                 token:action.payload.token,
//             }
//             state.users.push(user);
//         },
//         logout: (state, action) => {
//             state.users = state.users.filter((user) => user.user_id !== action.payload.user_id)
//         },
//     }
// })

// export const {currentSession, logout} = authSlice.actions;

// export default authSlice.reducer;