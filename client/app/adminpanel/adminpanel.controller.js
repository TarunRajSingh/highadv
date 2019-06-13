'use strict';

(function(){

  var allHotel={};
  var allCity={};
  var citychangeid="";
class AdminpanelComponent {

  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.allCity={};
    this.AllHotel={};
    this.AllRoom={};
  }

  $onInit(){
    this.HotelDetails();
    this.RoomDetails();
    this.Statistics();
    // this.getcitylist();

  }

  Statistics(){
    console.log("Statistics");
    this.HideAll();
    document.getElementById("StatisticsShow").style.display = "block";
  }

  StateCity(){
    console.log("StateCity");
    this.HideAll();
    document.getElementById("StateCityShow").style.display = "block";
  }

  Hotel(){
    console.log("Hotel");
    this.HideAll();
    document.getElementById("HotelShow").style.display = "block";
  }

  HotelAdv(){
    console.log("HotelAdvShow");
    this.HideAll();
    document.getElementById("HotelAdvShow").style.display = "block";
  }

  Room(){
    console.log("Room");
    this.HideAll();
    document.getElementById("RoomShow").style.display = "block";
  }

  Price(){
    console.log("Price");
    this.HideAll();
    document.getElementById("PriceShow").style.display = "block";
  }

  FrontPage(){
    console.log("FrontPage");
    this.HideAll();
    document.getElementById("FrontPageShow").style.display = "block";
  }

  HideAll()
  {
    document.getElementById("StatisticsShow").style.display = "none";
    document.getElementById("StateCityShow").style.display = "none";
    document.getElementById("HotelShow").style.display = "none";
    document.getElementById("HotelAdvShow").style.display = "none";
    document.getElementById("RoomShow").style.display = "none";
    document.getElementById("PriceShow").style.display = "none";
    document.getElementById("FrontPageShow").style.display = "none";
  }


  HotelDetails(){
    this.$http.get('/api/hotels/')
      .then(response => {
        this.AllHotel=response.data;
        console.log(this.AllHotel);
        document.getElementById('HotelCount').innerHTML=this.AllHotel.length;

      });
  }

  RoomDetails(){
    this.$http.get('/api/rooms/')
      .then(response => {
        this.AllRoom=response.data;
        console.log(this.AllRoom);
        document.getElementById('RoomCount').innerHTML=this.AllRoom.length;
      });
  }

  UpdateHotel(hotel){
    log
  }

  // getcitylist(){
  //   this.$http.get('/api/citylists/')
  //     .then(response => {
  //       allCity = response.data;
  //       this.allCity=allCity;
  //       console.log(allCity);
  //     });
  // }

  // addcity(){
  //   console.log("1");
  //   this.$http.post('/api/citylists',{
  //     State:document.getElementById("stateinput").value.toLowerCase(),
  //     City:document.getElementById("cityinput").value.toLowerCase()
  //   });
  //   window.alert("successfully added");
  //   location.reload();
  // }

  // getValue(x){
  //   document.getElementById("stateinput").value=x.State;
  //   document.getElementById("cityinput").value=x.City;
  //   citychangeid=x._id;
  //   document.getElementById('updatecity').style.visibility = 'visible';
  //   document.getElementById('addcity').style.visibility = 'hidden';
  // }

  // updatestatecity(){
  //   this.$http.put('/api/citylists/'+citychangeid,{
  //     State:document.getElementById("stateinput").value.toLowerCase(),
  //     City:document.getElementById("cityinput").value.toLowerCase()
  //   });
  //   document.getElementById('updatecity').style.visibility = 'hidden';
  //   document.getElementById('addcity').style.visibility = 'visible';
  //   document.getElementById("stateinput").value="";
  //   document.getElementById("cityinput").value="";
  //   window.alert("successfully updated");
  //   location.reload();
  // }

  // openhoteledit(hotel)
  // {
  //   sessionStorage.setItem("UserEmail",hotel.UserEmail);
  //   console.log(hotel);
  //   // console.log(hotel.UserEmail);
  //   // window.open("/hotel");
  //
  // }
  //
  // edithotel(hotel)
  // {
  //   console.log("calledithotel");
  //   window.open("/hotel");
  //
  // }
}

angular.module('roompapaApp')
  .component('adminpanel', {
    templateUrl: 'app/adminpanel/adminpanel.html',
    controller: AdminpanelComponent,
    controllerAs: 'adminpanelCtrl'
  });

})();
