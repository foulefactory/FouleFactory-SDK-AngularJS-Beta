FouleFactoryApiLib V 1.1.100
============================
This API SDK was automatically generated by APIMATIC v2.0

How To Configure:
=================
The generated code might need to be configured with your API credentials. To do that,
open the file "Configuration.js" and edit it's contents.

How To Build: 
=============
The generated code relies on AngularJS framework being available . 

How To Use:
===========
The following shows how import the controllers and use:

1) Add the folder 'FouleFactoryApiLib' into your to your scripts folder e.g scripts.
   
2) Import the reference to these files inside the appropriate html file such as index.html. 
   The Configuration.js file should be imported before the other files.


    <!-- Helper files -->
    <script src="scripts/FouleFactoryApiLib/Configuration.js"></script>
    <script src="scripts/FouleFactoryApiLib/APIHelper.js"></script>
    <script src="scripts/FouleFactoryApiLib/Http/Client/HttpContext.js"></script>
    <script src="scripts/FouleFactoryApiLib/Http/Client/RequestClient.js"></script>
    <script src="scripts/FouleFactoryApiLib/Http/Request/HttpRequest.js"></script>
    <script src="scripts/FouleFactoryApiLib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="scripts/FouleFactoryApiLib/Controllers/TaskAnswerTextsController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/TaskAnswerChoicesController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/ProjectsController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/CsvFilesController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/AccountController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/TemplatesController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/TasksController.js"></script>
    <script src="scripts/FouleFactoryApiLib/Controllers/TaskLinesController.js"></script>

    <!-- Models -->
    <script src="scripts/FouleFactoryApiLib/Models/BaseModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/AccountWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/PayinServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/CsvFileWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/ProjectWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/TaskLinesWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/TaskValidationWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/TemplateNewWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/TemplateInstructionWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/TemplateColumnWriterServiceModel.js"></script>
    <script src="scripts/FouleFactoryApiLib/Models/TemplateQuestionWriterServiceModel.js"></script>
	
				----	or with CDN	----

    <!-- Helper files -->
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Configuration.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/APIHelper.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Http/Client/HttpContext.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Http/Client/RequestClient.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Http/Request/HttpRequest.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Http/Response/HttpResponse.js"></script>

    <!-- API Controllers -->
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/TaskAnswerTextsController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/TaskAnswerChoicesController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/ProjectsController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/CsvFilesController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/AccountController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/TemplatesController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/TasksController.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Controllers/TaskLinesController.js"></script>

    <!-- Models -->
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/BaseModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/AccountWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/PayinServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/CsvFileWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/ProjectWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/TaskLinesWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/TaskValidationWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/TemplateNewWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/TemplateInstructionWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/TemplateColumnWriterServiceModel.js"></script>
    <script src="https://cdn.100.foulefactory.com/sdk/FouleFactory-SDK-AngularJS/v1.1.100/FouleFactoryApiLib/Models/TemplateQuestionWriterServiceModel.js"></script>

3) Inject the module into your main module e.g:

    var myApp = angular.module('myApp', ['FouleFactoryApiLib'])

4) To use a generated factory in your controller, injection could be as follows : 
 
    myApp.controller('PageCtrl',function($scope,TaskAnswerTextsController) {

    }
