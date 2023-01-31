import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        result: 0,
        value: ''
    },
    //Tạo ra những chiếc xe
    getters: {
        tenResult: state => {
            return state.result * 10;
        },
        nameResult: state => {
            return state.result + ' name product';
        },
        value: state => {
            return state.value;
        }
    },
    //Tạo ra những giải pháp nếu khách yêu cầu hoạt động khi chỉ khi commit một sự kiện nào đó lên
    mutations: {
        increment(state) {
            state.result++;
        },
        decrement(state) {
            state.result--;
        },
        updateValue(state, payload) {
            state.value = payload;
        }
    },
    //Những hoạt động của nhân viên với hàng hóa
    actions: {
        increment: ({ commit }) => {
            commit('increment')
        },
        asyncDecrement: ({ commit }) => {
            setTimeout(() => {
                commit('decrement');
            }, 2000);
        },
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    }
});
