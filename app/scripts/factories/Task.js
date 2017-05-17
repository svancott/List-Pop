(function() {
	function Task($firebaseArray) {
		var ref = firebase.database().ref().child("tasks");
		var tasks = $firebaseArray(ref);

		var createTask = function(taskName, taskPriority) {
			tasks.$add({
				name: taskName,
        priority: taskPriority,
        status: "active",
				dateCreated: firebase.database.ServerValue.TIMESTAMP
			});
		};

		return {
			all: tasks,
      create: createTask
		};
	}

	angular
		.module('listPop')
		.factory('Task', ['$firebaseArray', Task]);
})();
