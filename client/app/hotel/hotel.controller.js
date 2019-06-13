'use strict';

(function(){

class HotelComponent {

  constructor($http,$scope,socket,Auth) {
    this.$http = $http;
    this.socket = socket;
    this.isAdmin = Auth.isAdmin;
    this.images=[];
    this.HotelId;
    this.Priority;
    this.Show;
  }

  $onInit() {
    var x;
    var useremail=sessionStorage.getItem("UserEmail");
    useremail="final@gmail.com";
    this.$http.get('/api/hotels/UserEmail/'+useremail)
      .then(response => {
        x = response.data;
        this.fill(x);
      });
      if(this.isAdmin())
        this.enableall();
  }

  enableall(){
    document.getElementById('HotelName').disabled=false;
    document.getElementById('HotelType').disabled=false;
    document.getElementById('ChainName').disabled=false;
    document.getElementById('Floor').disabled=false;
    document.getElementById('Currency').disabled=false;
    document.getElementById('Rating').disabled=false;
    document.getElementById('Year').disabled=false;
    document.getElementById('CheckInTimeFromHour').disabled=false;
    document.getElementById('CheckInTimeFromMinute').disabled=false;
    document.getElementById('CheckInTimeFromAmPm').disabled=false;
    document.getElementById('CheckInTimeToHour').disabled=false;
    document.getElementById('CheckInTimeToMinute').disabled=false;
    document.getElementById('CheckInTimeToAmPm').disabled=false;
    document.getElementById('CheckOutTimeFromHour').disabled=false;
    document.getElementById('CheckOutTimeFromMinute').disabled=false;
    document.getElementById('CheckOutTimeFromAmPm').disabled=false;
    document.getElementById('CheckOutTimeToHour').disabled=false;
    document.getElementById('CheckOutTimeToMinute').disabled=false;
    document.getElementById('CheckOutTimeToAmPm').disabled=false;
    document.getElementById('StreetName').disabled=false;
    document.getElementById('BuildingName').disabled=false;
    document.getElementById('Landmark').disabled=false;
    document.getElementById('City').disabled=false;
    document.getElementById('State').disabled=false;
    document.getElementById('Country').disabled=false;
    document.getElementById('ZipCode').disabled=false;
    document.getElementById('Description').disabled=false;
    document.getElementById('Policies').disabled=false;
    // //images:"Some Images"=detail;
    document.getElementById('PhoneNumber').disabled=false;
    document.getElementById('Email').disabled=false;
    document.getElementById('AccountHolersName').disabled=false;
    document.getElementById('AccountNumber').disabled=false;
    document.getElementById('GSTNumber').disabled=false;
    document.getElementById('IFSCCode').disabled=false;
    document.getElementById('PANNumber').disabled=false;
    document.getElementById('AccomodationTax').disabled=false;
    document.getElementById('FoodTax').disabled=false;
  }

  fill(detail){
    document.getElementById('UserEmail').value=sessionStorage.getItem("UserEmail");
    document.getElementById('UserEmail').value="final@gmail.com";
    document.getElementById('HotelName').value=detail.name;
    document.getElementById('HotelType').value=detail.type;
    document.getElementById('ChainName').value=detail.chainname;
    document.getElementById('Floor').value=detail.floor;
    document.getElementById('Currency').value=detail.currency;
    document.getElementById('Rating').value=detail.rating;
    document.getElementById('Year').value=detail.year;
    document.getElementById('CheckInTimeFromHour').value=detail.checkinhrsfrom;
    document.getElementById('CheckInTimeFromMinute').value=detail.checkinminfrom;
    document.getElementById('CheckInTimeFromAmPm').value=detail.checkinampmfrom;
    document.getElementById('CheckInTimeToHour').value=detail.checkinhrsto;
    document.getElementById('CheckInTimeToMinute').value=detail.checkinminto;
    document.getElementById('CheckInTimeToAmPm').value=detail.checkinampmto;
    document.getElementById('CheckOutTimeFromHour').value=detail.checkouthrsfrom;
    document.getElementById('CheckOutTimeFromMinute').value=detail.checkoutminfrom;
    document.getElementById('CheckOutTimeFromAmPm').value=detail.checkoutampmfrom;
    document.getElementById('CheckOutTimeToHour').value=detail.checkouthrsto;
    document.getElementById('CheckOutTimeToMinute').value=detail.checkoutminto;
    document.getElementById('CheckOutTimeToAmPm').value=detail.checkoutampmto;
    document.getElementById('StreetName').value=detail.streetname;
    document.getElementById('BuildingName').value=detail.buildingname;
    document.getElementById('Landmark').value=detail.landmark;
    document.getElementById('City').value=detail.city;
    document.getElementById('State').value=detail.state;
    document.getElementById('Country').value=detail.country;
    document.getElementById('ZipCode').value=detail.zipcode;
    document.getElementById("Bar").checked=detail.bar;
    document.getElementById("Gym").checked=detail.gym;
    document.getElementById("Lift").checked=detail.lift;
    document.getElementById("Parking").checked=detail.parking;
    document.getElementById("Restaurant").checked=detail.restaurant;
    document.getElementById("Spa").checked=detail.spa;
    document.getElementById("SwimmingPool").checked=detail.swimmingpool;
    document.getElementById("BluRayPlayer").checked=detail.BluRayPlayer;
    document.getElementById("CableChannels").checked=detail.CableChannels;
    document.getElementById("CDplayer").checked=detail.CDPlayer;
    document.getElementById("Computer").checked=detail.Computer;
    document.getElementById("DVDPlayer").checked=detail.DVDPlayer;
    document.getElementById("Fax").checked=detail.Fax;
    document.getElementById("FlatScreenTV").checked=detail.FlatScreen;
    document.getElementById("GamingConsole").checked=detail.GamingConsole;
    document.getElementById("iPad").checked=detail.iPad;
    document.getElementById("Laptop").checked=detail.Laptop;
    document.getElementById("LaptopSafe").checked=detail.LaptopSafe;
    document.getElementById("NintendoWii").checked=detail.NintendoWii;
    document.getElementById("PS2").checked=detail.PS2;
    document.getElementById("PS3").checked=detail.PS3;
    document.getElementById("PS4").checked=detail.PS4;
    document.getElementById("Radio").checked=detail.Radio;
    document.getElementById("SatelliteChannels").checked=detail.SatelliteChannels;
    document.getElementById("Telephone").checked=detail.Telephone;
    document.getElementById("Telivision").checked=detail.Telivision;
    document.getElementById("VideoGames").checked=detail.VideoGames;
    document.getElementById("Xbox360").checked=detail.XBox360;
    document.getElementById("Barbeque").checked=detail.Barbeque;
    document.getElementById("CoffeeMachine").checked=detail.CoffeeMachine;
    document.getElementById("DiningArea").checked=detail.DiningArea;
    document.getElementById("DiningTable").checked=detail.DiningTable;
    document.getElementById("HighChair").checked=detail.HighChair;
    document.getElementById("Kitchenette").checked=detail.Kitchenette;
    document.getElementById("Kitchenware").checked=detail.Kitchenware;
    document.getElementById("Microwave").checked=detail.Microwave;
    document.getElementById("OutdoorDiningArea").checked=detail.OutdoorDiningArea;
    document.getElementById("OutdoorFurniture").checked=detail.OutdoorFurniture;
    document.getElementById("Refrigerator").checked=detail.Refrigerator;
    document.getElementById("Stovetop").checked=detail.Stovetop;
    document.getElementById("TeaCoffeeMachine").checked=detail.TeaCoffeeMachine;
    document.getElementById("Toaster").checked=detail.Toaster;
    document.getElementById("Elevator").checked=detail.Elevator;
    document.getElementById("GrabRailsToilet").checked=detail.GrabRailsToilet;
    document.getElementById("StaircaseOnly").checked=detail.StaircaseOnly;
    document.getElementById("GroundFloorOnly").checked=detail.GroundFloorOnly;
    document.getElementById("Wheelchair").checked=detail.Wheelchair;
    document.getElementById("BabySafetyGlasses").checked=detail.BabySafetyGlasses;
    document.getElementById("BoardGamePuzzles").checked=detail.BoardGamePuzzles;
    document.getElementById("Books").checked=detail.Books;
    document.getElementById("SafetySockets").checked=detail.SafetySockets;
    document.getElementById('Description').value=detail.description;
    document.getElementById('Policies').value=detail.policies;
    this.images=detail.images;
    // //images:"Some Images"=detail;
    document.getElementById('PhoneNumber').value=detail.phnno1;
    document.getElementById('AlternateNumber').value=detail.phnno2;
    document.getElementById('Landline').value=detail.landline;
    document.getElementById('Email').value=detail.email;
    document.getElementById('AccountHolersName').value=detail.accholder;
    document.getElementById('AccountNumber').value=detail.accno;
    document.getElementById('GSTNumber').value=detail.gstno;
    document.getElementById('IFSCCode').value=detail.ifsccode;
    document.getElementById('PANNumber').value=detail.panno;
    document.getElementById('AccomodationTax').value=detail.tax;
    document.getElementById('FoodTax').value=detail.foodtaxsame;
    this.HotelId=detail._id;
    this.Priority=detail.priority;
    this.Show=detail.show;
    console.log(this.images);
  }


 update(){
   console.log("updatecall");
   this.$http.put('/api/hotels/'+this.HotelId,{
     UserEmail:document.getElementById('UserEmail').value.toLowerCase(),
     name: document.getElementById('HotelName').value.toLowerCase(),
     type:  document.getElementById('HotelType').value.toLowerCase(),
     chainname:  document.getElementById('ChainName').value.toLowerCase(),
     floor: document.getElementById('Floor').value.toLowerCase(),
     currency:  document.getElementById('Currency').value.toLowerCase(),
     rating:  document.getElementById('Rating').value.toLowerCase(),
     year: document.getElementById('Year').value.toLowerCase(),
     checkinhrsfrom: document.getElementById('CheckInTimeFromHour').value,
     checkinminfrom: document.getElementById('CheckInTimeFromMinute').value,
     checkinampmfrom: document.getElementById('CheckInTimeFromAmPm').value,
     checkinhrsto: document.getElementById('CheckInTimeToHour').value,
     checkinminto: document.getElementById('CheckInTimeToMinute').value,
     checkinampmto: document.getElementById('CheckInTimeToAmPm').value,
     checkouthrsfrom: document.getElementById('CheckOutTimeFromHour').value,
     checkoutminfrom: document.getElementById('CheckOutTimeFromMinute').value,
     checkoutampmfrom: document.getElementById('CheckOutTimeFromAmPm').value,
     checkouthrsto: document.getElementById('CheckOutTimeToHour').value,
     checkoutminto: document.getElementById('CheckOutTimeToMinute').value,
     checkoutampmto: document.getElementById('CheckOutTimeToAmPm').value,
     streetname: document.getElementById('StreetName').value.toLowerCase(),
     buildingname: document.getElementById('BuildingName').value.toLowerCase(),
     landmark: document.getElementById('Landmark').value.toLowerCase(),
     city: document.getElementById('City').value.toLowerCase(),
     state: document.getElementById('State').value.toLowerCase(),
     country: document.getElementById('Country').value.toLowerCase(),
     zipcode: document.getElementById('ZipCode').value.toLowerCase(),
     bar:document.getElementById("Bar").checked,
     gym:document.getElementById("Gym").checked,
     lift:document.getElementById("Lift").checked,
     parking:document.getElementById("Parking").checked,
     restaurant:document.getElementById("Restaurant").checked,
     spa:document.getElementById("Spa").checked,
     swimmingpool:document.getElementById("SwimmingPool").checked,
     BluRayPlayer:document.getElementById("BluRayPlayer").checked,
     CableChannels:document.getElementById("CableChannels").checked,
     CDPlayer:document.getElementById("CDplayer").checked,
     Computer:document.getElementById("Computer").checked,
     DVDPlayer:document.getElementById("DVDPlayer").checked,
     Fax:document.getElementById("Fax").checked,
     FlatScreen:document.getElementById("FlatScreenTV").checked,
     GamingConsole:document.getElementById("GamingConsole").checked,
     iPad:document.getElementById("iPad").checked,
     Laptop:document.getElementById("Laptop").checked,
     LaptopSafe:document.getElementById("LaptopSafe").checked,
     NintendoWii:document.getElementById("NintendoWii").checked,
     PS2:document.getElementById("PS2").checked,
     PS3:document.getElementById("PS3").checked,
     PS4:document.getElementById("PS4").checked,
     Radio:document.getElementById("Radio").checked,
     SatelliteChannels:document.getElementById("SatelliteChannels").checked,
     Telephone:document.getElementById("Telephone").checked,
     Telivision:document.getElementById("Telivision").checked,
     VideoGames:document.getElementById("VideoGames").checked,
     XBox360:document.getElementById("Xbox360").checked,
     Barbeque:document.getElementById("Barbeque").checked,
     CoffeeMachine:document.getElementById("CoffeeMachine").checked,
     DiningArea:document.getElementById("DiningArea").checked,
     DiningTable:document.getElementById("DiningTable").checked,
     HighChair:document.getElementById("HighChair").checked,
     Kitchenette:document.getElementById("Kitchenette").checked,
     Kitchenware:document.getElementById("Kitchenware").checked,
     Microwave:document.getElementById("Microwave").checked,
     OutdoorDiningArea:document.getElementById("OutdoorDiningArea").checked,
     OutdoorFurniture:document.getElementById("OutdoorFurniture").checked,
     Refrigerator:document.getElementById("Refrigerator").checked,
     Stovetop:document.getElementById("Stovetop").checked,
     TeaCoffeeMachine:document.getElementById("TeaCoffeeMachine").checked,
     Toaster:document.getElementById("Toaster").checked,
     Elevator:document.getElementById("Elevator").checked,
     GrabRailsToilet:document.getElementById("GrabRailsToilet").checked,
     StaircaseOnly:document.getElementById("StaircaseOnly").checked,
     GroundFloorOnly:document.getElementById("GroundFloorOnly").checked,
     Wheelchair:document.getElementById("Wheelchair").checked,
     BabySafetyGlasses:document.getElementById("BabySafetyGlasses").checked,
     BoardGamePuzzles:document.getElementById("BoardGamePuzzles").checked,
     Books:document.getElementById("Books").checked,
     SafetySockets:document.getElementById("SafetySockets").checked,
     description:document.getElementById('Description').value.toLowerCase(),
     policies:document.getElementById('Policies').value.toLowerCase(),
     images:this.images,
     phnno1:document.getElementById('PhoneNumber').value.toLowerCase(),
     phnno2:document.getElementById('AlternateNumber').value.toLowerCase(),
     landline:document.getElementById('Landline').value.toLowerCase(),
     email:document.getElementById('Email').value.toLowerCase(),
     accholder:document.getElementById('AccountHolersName').value.toLowerCase(),
     accno:document.getElementById('AccountNumber').value.toLowerCase(),
     gstno:document.getElementById('GSTNumber').value.toLowerCase(),
     ifsccode:document.getElementById('IFSCCode').value.toLowerCase(),
     panno:document.getElementById('PANNumber').value.toLowerCase(),
     tax:document.getElementById('AccomodationTax').value.toLowerCase(),
     foodtaxsame:document.getElementById('FoodTax').value.toLowerCase(),
     priority:1,
     show:false,
   });
 }

}



angular.module('roompapaApp')
  .component('hotel', {
    templateUrl: 'app/hotel/hotel.html',
    controller: HotelComponent,
    controllerAs: 'hotelCtrl'
  });

})();
