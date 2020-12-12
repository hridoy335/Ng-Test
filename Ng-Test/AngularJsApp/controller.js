﻿myapp.controller('student_controller', function ($scope, student_service) {
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


    $scope.save = function () {

        var student = {
            StudentName: $scope.StudentName,
            Role: $scope.Role,
            Address: $scope.Address,
        };
        var saverecord = student_service.insertdata(student);
        saverecord.then(function (d) {
            if (d.data.success == true) {
                loadstudent();
                alert("Data Insert successfully...");
                $scope.resatesave();
            }
            else {
                alert("Data not insert ...");
            }
        }, function () {
            alert("Error occured while adding student.")
        });
    }

    $scope.resatesave = function () {
        $scope.StudentName = "";
        $scope.Role = "";
        $scope.Address = "";
    }

});
