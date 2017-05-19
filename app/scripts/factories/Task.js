(function() {
	function Task($firebaseArray, $firebaseObject) {

		var ref = firebase.database().ref().child("tasks");

		var tasks = $firebaseArray(ref);

		var createTask = function(taskName, taskPriority) {
			if (taskPriority === undefined) {
				taskPriority = "";
			}
			tasks.$add({
				name: taskName,
        priority: taskPriority,
        status: "active",
				dateCreated: firebase.database.ServerValue.TIMESTAMP
			});
		}

		var del = function(task) {
			tasks.$remove(task);
		}

		var restore = function(taskId, name, priority) {
			var currentTask = $firebaseObject(firebase.database().ref("tasks").child(taskId));
			currentTask.status = "active";
			currentTask.name = name;
			currentTask.priority = priority;
			currentTask.dateRestored = firebase.database.ServerValue.TIMESTAMP;
			currentTask.$save();
		}

		return {
			all: tasks,
      create: createTask,
			deleteTask: del,
			restoreTask: restore
		};
	}

	angular
		.module('listPop')
		.factory('Task', ['$firebaseArray', '$firebaseObject', Task]);
})();
