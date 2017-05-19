(function() {
    function HomeCtrl($firebaseObject, $scope, Task, $firebaseArray ) {
        this.tasks = Task.all;

        var ref = firebase.database().ref().child("tasks");
        var syncObject = $firebaseObject(ref);
        syncObject.$bindTo($scope, "tasks");

        this.newTask = {};

    		this.createTask = function() {
    			Task.create(this.newTask.name, this.newTask.priority);
          this.newTask.name = "";
          this.newTask.priority = "";
    		}

        this.expiredOrCompleted = function(task) {
          var d = new Date();
          return ((task.status == "completed") || ((d.getTime() - task.dateCreated) > 604800000))
        };

        this.markAsCompleted = function(taskId, name, priority) {
          var currentTask = $firebaseObject(firebase.database().ref("tasks").child(taskId));
          currentTask.status = "completed";
          currentTask.name = name;
          currentTask.priority = priority;
          currentTask.dateCompleted = firebase.database.ServerValue.TIMESTAMP;
          currentTask.$save();
        }

        this.hasPriority = function(task) {
          return (task.priority != "");
        }
    }

    angular
        .module('listPop')
        .controller('HomeCtrl', ['$firebaseObject', '$scope', 'Task', '$firebaseArray',HomeCtrl]);
})();
