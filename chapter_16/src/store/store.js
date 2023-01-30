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
        incrementOption(state, n) {
            state.result += n;
        },
        decrement(state) {
            state.result--;
        }
    }
});
