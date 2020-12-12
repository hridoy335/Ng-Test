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

});