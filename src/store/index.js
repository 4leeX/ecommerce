import { createStore } from 'vuex';

export default createStore({
    strict: true,
    state: {
        user: {
            first_name: 'Alex',
            last_name: 'Ricardo',
            email: 'teste@gmail.com'
        },
        carrinho: {
            open: false
        },
        menu: {
            open: false
        }
    },
    mutations: {
        toggleOpenCart(state, value){
            state.carrinho.open = value;
        },
        toggleOpenMenu(state, value){
            state.menu.open = value;
        }
    },
})