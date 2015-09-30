// viewModel.js
window.onload = function(){

  function AppViewModel() {
      //fresh yeast converter
      this.freshField = ko.observable(0);

      this.instantFresh = ko.computed(function(){
        return (this.freshField() / 2.5).toFixed(2);
      }, this);

      this.activeFresh = ko.computed(function(){
        return (this.instantFresh() * 1.25).toFixed(2);
      }, this);

      //instant yeast converter
      this.instantField = ko.observable(0);

      this.freshInstant = ko.computed(function(){
        return (this.instantField() * 2.5).toFixed(2);
      }, this);

      this.activeInstant = ko.computed(function(){
        return ((this.freshInstant() / 2.5) * 1.25).toFixed(2);
      }, this);

      //active yeast converter
      this.activeField = ko.observable(0);

      this.instantActive = ko.computed(function(){
        return (this.activeField() / 1.25).toFixed(2);
      }, this);

      this.freshActive = ko.computed(function(){
        return (this.instantActive() * 2.5).toFixed(2);
      }, this);

      //baker's percentages
      this.flour = ko.observable(875);
      this.water = ko.observable(500);
      this.yeast = ko.observable(1.5);
      this.salt = ko.observable(25);

      this.flourPercent = ko.computed(function(){
        return ((this.flour() / this.flour()) * 100).toFixed(1);
      }, this);

      this.waterPercent = ko.computed(function(){
        return ((this.water() / this.flour()) * 100).toFixed(1);
      }, this);

      this.saltPercent = ko.computed(function(){
        return ((this.salt() / this.flour()) * 100).toFixed(1);
      }, this);

      this.yeastPercent = ko.computed(function(){
        return ((this.yeast() / this.flour()) * 100).toFixed(1);
      }, this);

      //ounces to grams
      this.ounces = ko.observable(1);
      this.grams = ko.observable(28.35);

      this.ozToGm = ko.computed(function(){
        return (this.ounces() * 28.35).toFixed(2);
      }, this);

      this.gmToOz = ko.computed(function(){
        return (this.grams() * 0.03495).toFixed(2);
      }, this);

  }

  ko.applyBindings(new AppViewModel);

};
