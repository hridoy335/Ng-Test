myapp.controller('course_controller', function ($scope, student_service) {
    loadcourse();
    function loadcourse() {
        var courserecord = student_service.getcourse();

        courserecord.then(function (d) {

            $scope.course = d.data;
        },
            function () {
                alert("error occured");
            }
        );
    }

    $scope.courseInsert = function () {
        var coursedata = {
            CourseName: $scope.CourseName,
            CourseCredit: $scope.CourseCredit,
        };
        var saverecord = student_service.Insercourse(coursedata);
        saverecord.then(function (d) {
            if (d.data.success = true) {
                loadcourse();
                alert("Data Insert Successfully....");
                $scope.clear();

            }
            else {
                alert("Data not insert");
            }
        }, function () {
                alert("Error occured while adding Course.");

        });

    }

    $scope.updatecourse = function () {
        var course = {
            CourseId: $scope.CourseId,
            CourseName: $scope.CourseName,
            CourseCredit: $scope.CourseCredit,
        };
        var updaterecord = student_service.courseupdate(course);
        updaterecord.then(function (d) {
            if (d.data.success = true) {
                loadcourse();
                alert("Update Course Info successfully ...");
                $scope.clear();
            }
            else
            {
                alert("Data not update ...");
            }
        }, function () {

                alert("Error occured while update course information...");
        })
    }
    $scope.clear = function () {
        $scope.CourseId = "";
        $scope.CourseName = "";
        $scope.CourseCredit = "";

    }
});