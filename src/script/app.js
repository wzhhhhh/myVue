import Vue from 'vue';

let vm = new Vue({
	el: "#root",
	data: {
		lis: ['wzh','rr'],
		text: null
	},
	methods: {
		addToList: function(text){
			this.lis = this.lis.concat(text);
			// this.lis.push(text)
			this.text = '';
		},
		// delete: function(index){
		// 	this.lis = this.lis.splice(index, 1)
		// }
		getDate: function(){
			return new Date().getTime()
		}
	},
	computed: {
		getDate1: function(){
			return new Date().getTime()
		}
	}
})
window.vm = vm;
