(function() {
    function HistoryCtrl(Task) {
        this.tasks = Task.all;

        this.expired = function(task) {
          var d = new Date();
          return ((task.status != "completed") && ((d.getTime() - task.dateCreated) > 604800000))
        };

        this.completed = function(task) {
          return (task.status == "completed");
        };

        this.del = function(task) {
          Task.deleteTask(task)
        }

        this.restore = function(taskId, name, priority) {
          Task.restoreTask(taskId, name, priority)
        }
    }

    angular
        .module('listPop')
        .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
