/**
  *FouleFactoryApiLib
  *
  * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 09/16/2016
  */

'use strict';
angular.module('FouleFactoryApiLib').factory('AccountController',function($q,Configuration,HttpClient,APIHelper){
    return{
        /**
         * TODO: type endpoint description here
         * @param {string} transactionId    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        getAccountValidateTransaction : function(transactionId, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/accounts/validateTransaction";
            
            //Process query parameters
            _queryBuilder = APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
                "transactionId" : transactionId
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
         * Payin
         * @param {PayinServiceModel} payin    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        createAccountPayIn : function(payin, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/accounts/payin";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "content-type" : "application/json; charset=utf-8",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //Remove null values
            APIHelper.cleanObject(payin);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                username: Configuration.basicAuthUserName,
                password: Configuration.basicAuthPassword,
                body : payin
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
         * Get wallet
         *
         * @return {promise<mixed>}
         */
        getAccountGetWallet : function(){

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/accounts/wallet";
            
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
         * Create new account
         * @param {AccountWriterServiceModel} account    Required parameter: Example: 
         * @param {string|null} acceptLanguage    Optional parameter: Example: fr
         *
         * @return {promise<mixed>}
         */
        createAccountCreateAccount : function(account, acceptLanguage){
            //Assign default values
            acceptLanguage = acceptLanguage || "fr";

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/accounts";
            
            //validate and preprocess url
            var _queryUrl = APIHelper.cleanUrl(_queryBuilder);
            
            //prepare headers
            var _headers = {
                "accept" : "application/json",
                "content-type" : "application/json; charset=utf-8",
                "Accept-Language" : (null != acceptLanguage)? acceptLanguage: "fr"
            };

            //Remove null values
            APIHelper.cleanObject(account);

            //prepare and invoke the API call request to fetch the response
            var _config = {
                method : "POST",
                queryUrl : _queryUrl,
                headers: _headers,
                body : account
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
         * Get my account
         *
         * @return {promise<mixed>}
         */
        getAccountGet : function(){

            //Create promise to return
            var _deffered= $q.defer();
            
            //prepare query string for API call
            var _baseUri = Configuration.BASEURI
            var _queryBuilder = _baseUri + "/v1.1/accounts";
            
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
        }
    }
});