import { configureStore } from "@reduxjs/toolkit";
import carrinhoSlice from './reducers/carrinho'

const store = configureStore({
    reducer: {
        carrinho: carrinhoSlice
    }
})

export default store