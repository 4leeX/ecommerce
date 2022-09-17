import { createStore } from 'vuex';

export default createStore({
    state: {
        user: {
            first_name: 'Alex',
            last_name: 'Ricardo',
            email: 'teste@gmail.com'
        },
        carrinho: {
            open: false
        },
        products: [
            {
                id: 1,
                name: 'Bola',
                price: 100
            },
            {
                id: 2,
                name: 'Coca-Cola',
                price: 7
            },
        ]
    },
    mutations: {
        toggleOpenCart(state, value){
            state.carrinho.open = value;
        }
    },
})