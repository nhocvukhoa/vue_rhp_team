import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        result: 0
    },
    //Tạo ra những chiếc xe
    getters: {
        tenResult: state => {
            return state.result * 10;
        },
        nameResult: state => {
            return state.result + ' name product';
        }
    },
    //Tạo ra những giải pháp nếu khách yêu cầu
    mutations: {
        increment(state) {
            state.result++;
        },
        decrement(state) {
            state.result--;
        }
    },
    actions: {
        increment: ({ commit }) => {
            commit('increment')
        },
        asyncDecrement: ({ commit }) => {
            setTimeout(() => {
                commit('decrement');
            }, 2000);
        }
    }
});
