(function() {
    function HomeCtrl(Task) {
        this.tasks = Task.all;
        this.newTask = {};

    		this.createTask = function() {
    			// Pass this to Firebase
    			Task.create(this.newTask.name);
          this.newTask.name = "";
    		}
    }

    angular
        .module('listPop')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
