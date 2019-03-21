(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// 初始化vue
	const vm = new Vue({
		el: '#app',
		data:{
			list:[
				{'id':1 , 'name': '刚刚' , 'done' :true},
				{'id':2 , 'name': '玮玮' , 'done' :false},
				{'id':3 , 'name': '荣荣' , 'done' :false}
			],
			todoname:'',
			eidtid:-1
		},
		methods:{
			delApp(id){
				this.list = this.list.filter(v=>v.id!=id)
			},
			addApp(){
				console.log(123);
				
				let obj = {}
				// 给obj添加属性
				obj.id = this.list[this.list.length-1].id+1
				obj.name = this.todoname				
				obj.done = false
				// 将obj添加到list中,同时清零内容
				this.list.push(obj)
				this.todoname = ''				
			},
			eidtShow(id){
				this.eidtid = id
			},
			eidtHide(){
				this.eidtid= -1
			}

		},
		computed:{
			isFootShow(){
				console.log('计算属性被调用');
				return this.length>0
			}
		}
	})

})(window);
