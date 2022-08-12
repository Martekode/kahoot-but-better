import { configureStore } from '@reduxjs/toolkit'
const initialState = {
    isLoading : false,
    answers : []
}
const reducer = (state = initialState ,action)=>{
    switch (action.type) {
        case 'ANSWER_REQUEST':
            return Object.assign({}, state, {
                isLoading: action.payload.isLoading
            })
        case 'ANSWER_REQUEST_SUCCESS':
            return Object.assign({}, state, {
                answers: state.answers.concat(action.answers),
                isLoading: action.isLoading
            })
        default:
            return state;
        }
}
const store = configureStore({
    reducer
})
export default store;