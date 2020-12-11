myapp.service('student_service', function ($http) {
    this.getstudent = function () {
        return $http.get('../Home/GetStudent');
    }
});