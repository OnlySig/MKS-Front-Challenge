import { createSlice } from "@reduxjs/toolkit"
import { IProdutos } from "../../interface/IProdutos"

const initialState :IProdutos[] = []

const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const temItem = state.some(item => item.id === payload.id)
            if(!temItem) {
                state.push({
                    id: payload.id,
                    quantidade: 1
                })
            } else {
                state.map(stateCarrinho => {
                    if(stateCarrinho.id === payload.id) {
                        if(stateCarrinho.quantidade){
                            return stateCarrinho.quantidade++
                        }
                    }
                })
            }
                
        }
    }
})

export const { mudarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer