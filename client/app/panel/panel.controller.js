'use strict';

(function(){

class PanelComponent {
  constructor($http) {
    this.message = 'Hello';
    // this.RpUserEmail=sessionStorage.getItem("UserEmail");
    this.RpUserEmail="final@gmail.com";
    this.$http=$http;
  }
  HotelPage(){
    console.log("Hotel");
    var x;

    this.$http.get('/api/hotels/UserEmail/'+this.RpUserEmail)
      .then(response => {
        x = response.data;
        if(x.UserEmail==this.RpUserEmail)
          location.href='/hotel';
      },err=>{
        location.href="/newhotel";
      });
  }

  RoomPage(){
    console.log("Room");
    location.href='/allrooms';
  }

  InventoryPage(){
    console.log("Inventory");
    location.href='/inventory';

  }

  PricingPage(){
    console.log("Pricing");
    location.href='/price';
  }

  BookingPage(){
    console.log("Booking");
  }

}

angular.module('roompapaApp')
  .component('panel', {
    templateUrl: 'app/panel/panel.html',
    controller: PanelComponent,
    controllerAs: 'panelCtrl'
  });

})();
