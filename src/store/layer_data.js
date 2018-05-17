import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
    },
    state: {
        json: Object       
    },
    mutations: {
        setJson (state, data) {
            // 变更状态
            state.json = data.json;
        }
    }
}) 