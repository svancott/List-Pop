(function() {
    function HomeCtrl(Task) {
        this.tasks = Task.all;
        this.newTask = {};

    		this.createTask = function() {
    			// Pass this to Firebase
    			Task.create(this.newTask.name, this.newTask.priority, this.newTask.status);
          this.newTask.name = "";
          this.newTask.priority = "";
          this.newTask.status = "";
    		}

        this.show = function(task) {
          var d = new Date();
          if ((task.status != "completed") && ((d.getTime() - task.dateCreated) > 604800000)) {
            task.status = "expired";
          };
          return ((task.status == "expired") || (task.status == "completed"));
        }
    }

    angular
        .module('listPop')
        .controller('HomeCtrl', ['Task', HomeCtrl]);
})();
