var app = new Vue({
	el: '#app',
	data: {
		message: 'Hello Vue!'
	}
});

var app2 = new Vue({
  	el: '#app-2',
  	data: {
    	message: 'You loaded this page on ' + new Date().toLocaleString()
  	}
});

var app3 = new Vue({
  	el: '.app-3',
  	data: {
    	seen: true
  	}
})

var app4 = new Vue({
  	el: '#app-4',
  	data: {
    	todos: [
    	 	{ 
    	 		text: 'Learn JavaScript',
    	 		note: 'Learn\'t, be better.'
    	 	},
      		{ 
      			text: 'Learn Vue', 
      			note: 'Learning'
      		},
      		{ 
      			text: 'Build something awesome', 
      			note: 'Working on it'
      		}
    	]
  	}
})

var app5 = new Vue({
  	el: '#app-5',
  	data: {
    	message: 'This is a string'
  	},
  	methods: {
    	hypenMessage: function () {
      		this.message = this.message.replace(/\s+/g, '-').toLowerCase();
    	}
  	}
})

var app6 = new Vue({
  	el: '#app-6',
  	data: {
    	message: 'Hello Vue!'
  	}
})

