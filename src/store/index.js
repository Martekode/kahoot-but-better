import { configureStore } from '@reduxjs/toolkit'
const initialState = {
    isLoading : false,
    answers : []
}
const reducer = (state = initialState ,action)=>{

}
const store = configureStore({
  reducer
})
export default store;