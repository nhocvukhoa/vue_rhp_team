import Vue from 'vue'
import Vuex from 'vuex'
import Result from './modules/Result'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        value: ''
    },
    //Tạo ra những chiếc xe
    getters,
    //Tạo ra những giải pháp nếu khách yêu cầu hoạt động khi chỉ khi commit một sự kiện nào đó lên
    mutations,
    //Những hoạt động của nhân viên với hàng hóa
    actions,
    modules: {
        Result
    }
});
