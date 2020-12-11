myapp.controller('student_controller', function ($scope, student_service) {
    loadstudent();
    function loadstudent() {
        var studentrecord = student_service.getstudent();

        studentrecord.then(function (d) {

            $scope.student = d.data;
        },
            function () {
                alert("error occured");
            }
        );
    }

});
