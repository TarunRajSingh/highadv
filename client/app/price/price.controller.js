'use strict';


$(document).ready(function(){

  

});



(function(){

class PriceComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.Room;
    this.RoomData;
  }


  $onInit() {
    document.getElementById('UserEmail').value="final@gmail.com";
    this.Room=sessionStorage.getItem("RoomToView");
    console.log(this.Room);
    this.$http.get('/api/rooms/'+this.Room)
      .then(response => {
        this.RoomData = response.data;
        document.getElementById('RoomId').value=response.data._id;
        document.getElementById('RoomNumber').value=response.data.NoOfRoom;
         console.log(this.RoomData);
      });
  }



  backpage()
  {
    window.alert("price added successfully");
    window.location.href="/allrooms";
  }
  //class end
}

angular.module('roompapaApp')
  .component('price', {
    templateUrl: 'app/price/price.html',
    controller: PriceComponent,
    controllerAs: 'priceCtrl'
  });

})();
