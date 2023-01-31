import Vue from 'vue'
import Vuex from 'vuex'
import Result from './modules/Result'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        value: ''
    },
    //Tạo ra những chiếc xe
    getters: {
        value: state => {
            return state.value;
        }
    },
    //Tạo ra những giải pháp nếu khách yêu cầu hoạt động khi chỉ khi commit một sự kiện nào đó lên
    mutations: {
       
        updateValue(state, payload) {
            state.value = payload;
        }
    },
    //Những hoạt động của nhân viên với hàng hóa
    actions: {
        updateValue: ({ commit }, payload) => {
            commit('updateValue', payload);
        }
    },
    modules: {
        Result
    }
});
