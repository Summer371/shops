import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin: false,
		userId: '',
		token:''
	},
	mutations: {
		login(state, {phoneId,token}) {
			state.hasLogin = true;
			state.userId = phoneId;
			state.token = token;
			uni.setStorage({//缓存用户登陆状态
			    key: 'userId',  
			    data: phoneId  
			}) 
			uni.setStorage({//缓存用户登陆状态
			    key: 'token',  
			    data: token  
			})
		
		},
		logout(state) {
			state.hasLogin = false;
			state.userId = '';
			state.token = '';
			uni.removeStorage({  
                key: 'userId'  
            })
			uni.removeStorage({
			    key: 'token'  
			})
		}
	},
	actions: {
	
	}
})

export default store
