app.factory('ProjectFactory', function ($http) {

var projectFactory = {};

var baseUrl = '/api/project/'
var getData = function (res){
    return res.data;
};

//creates project
projectFactory.create = function (obj){
    return $http.post(baseUrl, obj)
    .then(getData);
};

//retrieves project
projectFactory.getAll = function(){
    return $http.get(baseUrl)
    .then(getData);
};

projectFactory.getOne = function(id) {
    return $http.get(baseUrl + id)
    .then(getData)
}

return projectFactory;

});