'use strict';


(function(){

class PricechangeComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.price;
    //this.ChangePrice={};
  }

  $onInit() {
    var x;
    var useremail=sessionStorage.getItem("UserEmail");
    useremail="final@gmail.com";
     useremail="5cdadcba2464c706c446ed2b";

    this.$http.get('/api/prices/'+useremail)
      .then(response => {
        x = response.data;
        this.price=x.Price;
      });

  }

  pushdate(NewPrice,Price)
  {
      var temp={};
      temp=Price;
      temp.push(NewPrice);
      alert("done");
      location.href="/allrooms";
  }


  update(){

    var startdate =document.getElementById("fromdate").value;
    var startdate=new Date(startdate.split("-"));
    startdate=startdate.getTime();
    var enddate =document.getElementById("todate").value;
    var enddate=new Date(enddate.split("-"));
    enddate=enddate.getTime();

      var newprice={
                   StartDate: startdate,
                   EndDate:enddate,
                   MainPrice:{
                      PulishedPrice:80,
                      BasePriceSingle:80,
                      BasePriceDouble:90,
                      ExtraAdultCost:96,
                      ExtraChildCost:80,
                      AdultBreakfastRate:90,
                      AdultLunchRate:80,
                      AdultDinnerRate:41,
                      ChildBreakfastRate:92,
                      ChildLunchRate:85,
                      ChildDinnerRate:85,
                   }
                 }

    // var newprice={
    //              StartDate:startdate,
    //              EndDate:enddate,
    //              MainPrice:{
    //                 PulishedPrice:document.getElementById('published_price').value,
    //                 BasePriceSingle:document.getElementById('base_1').value,
    //                 BasePriceDouble:document.getElementById('base_2').value,
    //                 ExtraAdultCost:document.getElementById('extraadult').value,
    //                 ExtraChildCost:document.getElementById('extrachild').value,
    //                 AdultBreakfastRate:document.getElementById('adult_breakfast').value,
    //                 AdultLunchRate:document.getElementById('adult_lunch').value,
    //                 AdultDinnerRate:document.getElementById('adult_dinner').value,
    //                 ChildBreakfastRate:document.getElementById('child_breakfast').value,
    //                 ChildLunchRate:document.getElementById('child_lunch').value,
    //                 ChildDinnerRate:document.getElementById('child_dinner').value,
    //              }
    //            }

      if(isNaN(startdate)&&isNaN(enddate))
        console.log("Please enter a date");
      else if(enddate<=startdate)
         console.log("invalid date or range is wrong!");
      else
        this.pushdate(newprice,this.price);
  }


}

angular.module('roompapaApp')
  .component('pricechange', {
    templateUrl: 'app/pricechange/pricechange.html',
    controller: PricechangeComponent,
    controllerAs: 'pricechangeCtrl'
  });

})();
