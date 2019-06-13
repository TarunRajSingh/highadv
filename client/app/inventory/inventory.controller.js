'use strict';

(function(){

class InventoryComponent {
  constructor($http) {
    this.message = 'Hello';
    this.$http=$http;
    this.RoomData;
    this.PriceData=[];
    this.Seven=[0,1,2,3,4,5,6];
    // this.RpUserEmail=sessionStorage.getItem("UserEmail");
    this.RpUserEmail="final@gmail.com";
    this.DataToShow=[];
    this.DataToUpdate=[];
    this.Today;
  }


  $onInit() {

    var startdate=new Date();
    startdate=new Date(startdate.getFullYear(),startdate.getMonth(),startdate.getDate());
    startdate=startdate.getTime();
    var startdate=parseInt(startdate);



    // this.$http.get("/justcheck", function(data, status){
    //   console.log(data+" " + status);
    // });



    this.$http.get('/api/rooms/UserEmailHotel/'+this.RpUserEmail)
      .then(response => {
        this.RoomData = response.data;
          // console.log(this.RoomData.length);
         for (var i = 0; i < this.RoomData.length; i++) {
           this.$http.get('/api/prices/UserPrice/'+this.RoomData[i]._id)
             .then(response => {
               var x=response.data;
               this.PriceData.push(x);
                // console.log(this.PriceData);
                if(i==this.RoomData.length)
                {
                  var today=new Date();
                  today=new Date(today.getFullYear(),today.getMonth(),today.getDate());
                  today=today.getTime();
                  today=parseInt(today);
                  this.TableStartDate=today;
                  this.GetData(this.PriceData,this.TableStartDate);
                }
             });
         }
      });
  }


  GetData(PriceData,Date)
  {
    this.DataToShow=[];
      for(var i=0;i<PriceData.length;i++)
        {
          for(var j=0;j<7;j++)
          {
            var x = PriceData[i].findIndex(i => i.StartDate == Date+j*24*60*60*1000);
            // console.log(x);
            // console.log(PriceData[i][x]);
            this.DataToShow.push(PriceData[i][x]);
          }
        }
        // console.log(this.DataToShow);
        this.TableGenerate(this.RoomData,this.DataToShow);

  }

  checkid()
  {
    console.log("called");
  }

  NextSevenDays(){
    this.TableStartDate=this.TableStartDate+(7*24*60*60*1000);
    this.GetData(this.PriceData,this.TableStartDate);
  }

  PrevSevenDays(){
    this.TableStartDate=this.TableStartDate-(7*24*60*60*1000);
    this.GetData(this.PriceData,this.TableStartDate);
  }

  TableGenerate(RoomData,DataToShow)
  {
    console.log(DataToShow);
    var x='';
        x=x+'<div class="RoomInventory">';
        for (var i = 0; i < RoomData.length; i++) {
          x=x+'<tr>';
          x=x+'<th>'+RoomData[i].RoomType+'</th>';
          x=x+'<div style="text-align: center;">';
          for (var j = 0; j < 7; j++) {
            var somevar =i*7+j;

            document.getElementById('check').innerHTML=DataToShow;
            if(DataToShow[somevar]!==undefined)
            {
              // x=x+'<td>';
              // x=x+"nodata";
              // x=x+'</td>';
              x=x+'<td id="';
              x=x+DataToShow[somevar]._id;
              x=x+'" ng-click="this.checkid()">';
              x=x+'<sup><input readonly="true" class="RoomFilledNumber disabled" type="number" name="" value="'+DataToShow[somevar].BookRoom+'"></sup>';
              x=x+'<input class="RoomEmptyNumber" type="number" value="'+DataToShow[somevar].RoomAvailable+'">';
              x=x+'<sub><i class="fa fa-ban" style="color:red;cursor: pointer;font-size: 15px;"></i></sub>';
              x=x+'</td>';
            }
            else {
              x=x+'<td>';
              x=x+"No data for this date";
              x=x+'</td>';
              // x=x+'<td id="'+DataToShow[somevar]._id+'" ng-click="this.checkid()">';
              // x=x+'<sup><input readonly="true" class="RoomFilledNumber disabled" type="number" name="" value="'+DataToShow[somevar].BookRoom+'"></sup>';
              // x=x+'<input class="RoomEmptyNumber" type="number" value="'+DataToShow[somevar].RoomAvailable+'">';
              // x=x+'<sub><i class="fa fa-ban" style="color:red;cursor: pointer;font-size: 15px;"></i></sub>';
              // x=x+'</td>';
            }
          }
          x=x+'</div>';
          x=x+'</tr>';
        }
        x=x+'</div>';
        document.getElementById('tablecontent').innerHTML=x;
  }


}

angular.module('roompapaApp')
  .component('inventory', {
    templateUrl: 'app/inventory/inventory.html',
    controller: InventoryComponent,
    controllerAs: 'inventoryCtrl'
  });

})();
