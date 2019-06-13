'use strict';

(function(){
var ShowRooms=[];

class AllroomsComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.Rooms=[];
  }

  $onInit() {
    var x;
    var useremail=sessionStorage.getItem("UserEmail");
    useremail="final@gmail.com";
    this.$http.get('/api/rooms/UserEmailHotel/'+useremail)
      .then(response => {
        x = response.data;
        this.ShowAllRooms(x);
         console.log(x);
      });
  }
  ShowAllRooms(x){
    this.Rooms=x;
  }

  ShowRoom(x)
  {
    console.log(x._id);
    sessionStorage.setItem("RoomToView",x._id);
    location.href="/room";
  }

  Price(x)
  {
    sessionStorage.setItem("RoomToView",x._id);
      location.href="price";
  }

  AddRoomPage(){
    location.href='/newroom';
  }
}

angular.module('roompapaApp')
  .component('allrooms', {
    templateUrl: 'app/allrooms/allrooms.html',
    controller: AllroomsComponent,
    controllerAs: 'allroomsCtrl'
  });

})();
