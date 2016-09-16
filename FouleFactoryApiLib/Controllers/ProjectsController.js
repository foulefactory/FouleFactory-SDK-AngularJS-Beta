/**
  *FouleFactoryApiLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/16/2016
  */

'use strict';
angular.module('FouleFactoryApiLib').factory('ProjectsController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * Create new project
         * @param {ProjectWriterServiceModel} project    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        createProjectsCreateProject : function(project, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/projects";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "content-type" : "application/json; charset=utf-8",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //Remove null values
            APIHelper.cleanObject(project);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                body : project
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get All projects
         *
         * @return {promise<mixed>}
         */
        getProjectsGetUserProjects : function(){

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/projects";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get csv files by project id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getProjectsGetProjectFiles : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/projects/{id}/urlCsvFiles";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "id" : id
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get task lines by project id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getProjectsGetProjectTaskLines : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/projects/{id}/taskLines";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "id" : id
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get tasks by project id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getProjectsGetProjectTasks : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/projects/{id}/tasks";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "id" : id
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        },
        /**
         * Get project by id
         * @param {int} id    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getProjectsGet : function(id, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/projects/{id}";
            
            //Process template parameters
            _queryBuilder = APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
                "id" : id
            });

            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "GET",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
            };
            
            var _response = HttpClient(_config);
            
            //process response
            _response.then(function(_result){
                var _result =_result.body;
            	
                _deffered.resolve(_result);
            },function(_result){
                //Error handling for custom HTTP status codes
                _deffered.reject(APIHelper.appendContext({errorMessage:"HTTP Response Not OK", errorCode: _result.code, errorResponse: _result.message},_result.getContext()));
            });
            
            return _deffered.promise;
        }
    }
});