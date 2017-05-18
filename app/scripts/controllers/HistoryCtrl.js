(function() {
    function HistoryCtrl(Task) {
        this.tasks = Task.all;

        this.expired = function(task) {
          var d = new Date();
          return ((task.status != "completed") && ((d.getTime() - task.dateCreated) > 300))
        };

        this.completed = function(task) {
          return (task.status == "completed");
        };
    }

    angular
        .module('listPop')
        .controller('HistoryCtrl', ['Task', HistoryCtrl]);
})();
