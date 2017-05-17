(function() {
	function Task($firebaseArray) {
		var ref = firebase.database().ref().child("tasks");
		var tasks = $firebaseArray(ref);

		var createTask = function(taskName) {
			tasks.$add({
				name: taskName,
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
