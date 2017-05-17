(function() {
    function HistoryCtrl(Task) {
        this.tasks = Task.all;

        this.expired = function(task) {
          return (task.status == "expired");
        }

        this.completed = function(task) {
          return (task.status == "completed");
        }
    }

    angular
        .module('listPop')
        .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
