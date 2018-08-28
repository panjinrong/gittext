import axios from 'axios'
import Vue from 'vue'
import Router from 'vue-router'
const $vue = new Vue()
Vue.use(Router)
export const getDataApi = (action,pars,post) => {
	const data = Object.assign({}, pars)
	console.log(window.REQUEST_URL+action)
		return new Promise((resolve) => {
			axios({
			  	method: post,
			  	url: window.REQUEST_URL+action,
			  	params: data
			}).then((res) => {
			  	resolve(res.data)
				// if(res.data.code == 30006 && action != 'enterprise/yzm'){
				// 	$vue.$message.error(res.data.message);
	   //              setTimeout(()=>{
	   //              	// if($vue.$router){
	   //              	// 	$vue.$router.push('/login');
	   //              	// }else{
	   //              		window.location.href = config.domain+'/tswcClient/com.html#/login';
	   //              	// }
	   //              },1000);
	   //              return
				// }
		})
	})

}