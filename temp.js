'use strict';
var Price = require("../api/price/price.model")
(function(){

class PricechangeComponent {
  constructor() {
    this.message = 'Hello';
  }
  update(){
    var newPrice = document.getElementById("published_price")
    SetPrice(){
      SetRate(newPrice)
    }
    function SetRate(Price,newPrice){
      var StartDate = document.getElementById("startdate");
      var EndDate = document.getElementById("endate");
      var NewPrice = {
        UserEmail = //ye dekh lena kaise karna hai session se uthana
        HotelId = //
        RoomId = //
        Price = {
          StartDate = StartDate,
          EndDate = EndDate,
          PublishedPrice = newPrice,
          BasePriceSingle = document.getElementById("base_1"),
          BasePriceDouble = document.getElementById("base_2"),
          ExtraAdultCost = document.getElementById("extraadult"),
          ExtraChildCost = document.getElementById("extrachild"),
          AdultBreakfastRate = document.getElementById("adult_breakfast"),
          AdultLunchRate = document.getElementById("adult_lunch"),
          AdultDinnerRate = document.getElementById("adult_dinner"),
          ChildBreakfastRate = document.getElementById("child_breakfast"),
          ChildLunchRate = document.getElementById("child_lunch"),
          ChildDinnerRate = document.getElementById("child_dinner"),
        }
      }
      var StartBlock = 0;
      var EndBlock = 0;
      for (var i = 0; i < Price.length; i++)
      {
        if((Price[i].start.getTime()<=StartDate.getTime())&&(StartDate.getTime()<=Price[i].end.getTime()))
          {
              StartBlock=i;
          }
          if((Price[i].start.getTime()<=EndDate.getTime())&&(EndDate.getTime()<=Price[i].end.getTime()))
          {
              EndBlock=i;
          }
      }
      var NextPrevDate = new Date();
      if (StartBlock==EndBlock)
      {
        if (Price[StartBlock].start.getTime()==StartDate.getTime())
        {
            if (Price[EndBlock].end.getTime()==EndDate.getTime())
            {
              AddPrice(0,Price.length-1);
              ChangePrice[StartBlock].price=NewPrice.price.PublishedPrice;
            }
            else
            {
              AddPrice(0,StartBlock-1);
              ChangePrice.push(NewPrice.price);
              NextPrevDate=new Date((NewPrice.endDate.getTime())+( 24 * 60 * 60 * 1000));
              // NextPrevDate.setDate(NewPrice.end.getDate()+1);
              ChangePrice.push({
                                  'start':NextPrevDate,
                                  'end':Price[StartBlock].end,
                                  'price':Price[StartBlock].price});
              AddPrice((StartBlock+1),Price.length-1);
            }
        }
        else
        {
            if (Price[EndBlock].end.getTime()==EndDate.getTime())
            {
              AddPrice(0,StartBlock-1);
              NextPrevDate=new Date((NewPrice.startDate.getTime())-( 24 * 60 * 60 * 1000));
              // NextPrevDate.setDate(NewPrice.start.getDate()-1);
              ChangePrice.push({
                                  'start':Price[StartBlock].start,
                                  'end':NextPrevDate,
                                  'price':Price[StartBlock].price});
              ChangePrice.push(NewPrice.price);
              AddPrice(StartBlock+1,Price.length-1);
            }
            else
            {
              AddPrice(0,StartBlock-1);
              NextPrevDate=new Date((NewPrice.startDate.getTime())-( 24 * 60 * 60 * 1000));
              // NextPrevDate.setDate(NewPrice.start.getDate()-1);
              ChangePrice.push({
                                  'start':Price[StartBlock].start,
                                  'end':NextPrevDate,
                                  'price':Price[StartBlock].price});
              ChangePrice.push(NewPrice.price);
              NextPrevDate=new Date((NewPrice.endDate.getTime())+( 24 * 60 * 60 * 1000));
              // NextPrevDate.setDate(NewPrice.start.getDate()+1);
              ChangePrice.push({
                                  'start':NextPrevDate,
                                  'end':Price[StartBlock].end,
                                  'price':Price[StartBlock].price
                                });
              AddPrice(StartBlock+1,Price.length-1);
            }
        }
      }
      else
      {
        if(Price[StartBlock].start.getTime()==StartDate.getTime())
          {
              if(Price[EndBlock].end.getTime()==EndDate.getTime())
              {
                AddPrice(0,StartBlock-1);
                ChangePrice.push(NewPrice.price);
                AddPrice(EndBlock+1,Price.length-1);
              }
              else
              {
                AddPrice(0,StartBlock-1);
                ChangePrice.push(NewPrice.price);
                NextPrevDate=new Date((NewPrice.endDate.getTime())+( 24 * 60 * 60 * 1000));
                ChangePrice.push({
                                    'start':NextPrevDate,
                                    'end':Price[EndBlock].end,
                                    'price':Price[EndBlock].price
                                  });
                AddPrice(EndBlock+1,Price.length-1);
              }
          }
          else
          {
            if(Price[EndBlock].end.getTime()==EndDate.getTime())
            {
              AddPrice(0,StartBlock-1);
              NextPrevDate=new Date((NewPrice.startDate.getTime())-( 24 * 60 * 60 * 1000));
              ChangePrice.push({
                                  'start':Price[StartBlock].start,
                                  'end':NextPrevDate,
                                  'price':Price[StartBlock].price
                                });
              ChangePrice.push(NewPrice.price);
              AddPrice(EndBlock+1,Price.length-1);
            }
            else
            {
              AddPrice(0,StartBlock-1);
              NextPrevDate=new Date((NewPrice.startDate.getTime())-( 24 * 60 * 60 * 1000));
              ChangePrice.push({
                                  'start':Price[StartBlock].start,
                                  'end':NextPrevDate,
                                  'price':Price[StartBlock].price
                                });
              ChangePrice.push(NewPrice.price);
              NextPrevDate=new Date((NewPrice.endDate.getTime())+( 24 * 60 * 60 * 1000));
              ChangePrice.push({
                                  'start':NextPrevDate,
                                  'end':Price[StartBlock].end,
                                  'price':Price[StartBlock].price
                                });
              AddPrice(EndBlock+1,Price.length-1);
            }
          }
        }
        console.log(ChangePrice);
        return ChangePrice;
    }
  }
}

angular.module('roompapaApp')
  .component('pricechange', {
    templateUrl: 'app/pricechange/pricechange.html',
    controller: PricechangeComponent,
    controllerAs: 'pricechangeCtrl'
  });

})();
