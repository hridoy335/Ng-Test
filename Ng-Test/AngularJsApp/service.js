myapp.service('student_service', function ($http) {

    // get student information .............
    this.getstudent = function () {
        return $http.get('../Home/GetStudent');
    }

    // Insert student data ...........
    this.insertdata = function (Studentdata) {
        var request = $http({
            method: 'post',
            url: '../Home/InserStudent',
            data:Studentdata

        });
        return request;
    }

    // Update student data
    this.updatedata = function (student)
    {
        var request = $http({
            method: 'post',
            url: '../Home/UpdateStudent',
            data: student

        });
        return request;
    }

    // Get Course Data
    this.getcourse = function (course) {
        return $http.get('../Course/GetCourse');
    }


    // Insert course data
    this.Insercourse = function (course) {
        var request = $http({
            method: 'post',
            url: '../Course/InserCourse',
            data: course
        });
        return request;
    }

    //update course data
    this.courseupdate = function (course) {
        var request = $http({
            method: 'post',
            url: '../Course/CourseUpdate',
            data: course
        });
        return request;
    }

});