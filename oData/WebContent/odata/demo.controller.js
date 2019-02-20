sap.ui.controller("odata.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf odata.demo
*/
onInit: function() {

	// create a oModel with this oData
	var sURL = "http://services.odata.org/V4/(S(3q5cdlo5xol5mevqq3hw1dgz))/TripPinServiceRW/";
	var oModel = new sap.ui.model.json.JSONModel(sURL);
	
	sap.ui.getCore().setModel(oModel,"list");

	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf odata.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf odata.demo
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf odata.demo
*/
//	onExit: function() {
//
//	}

});