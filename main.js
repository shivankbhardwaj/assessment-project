 $(document).ready(function(){
   
   var a;
function show()
{
     var c = $("#cityname").val();    
         var countrycode = $("#countrycode").val();
     console.log(countrycode);
    if(city != '')
      {
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/forecast?q='+c+','+countrycode+'&mode=xml'+'&APPID=d22bdd8f42f4fc713ac197a8cbf0eaec',
            type:"GET",
            dataType:"jsonp",
            success: function(data){
               console.log("hi"+data.city);
               
                document.getElementById("population").innerHTML="Population: "+data.city.population;
            }
        });
    }
      } 
   


    function ab()
       {
        var c = $("#cityname").val();    
          //getting city name
            $.ajax({
                url:"https://api.openweathermap.org/data/2.5/weather?q="+c+"&units="+a+
                "&APPID=4da9127678f5e5737355b756bdd270a4",              // url and key
                type:"GET",
                datatype:"jsonp",           //data type
                success:function(data)
                {
                 console.log(data);
                    document.getElementById("feedback").innerHTML="";                     //printing feedback
                    document.getElementById("value").innerHTML=data.main.temp;         // temperature
                   document.getElementById("cld").innerHTML=data.weather[0].main;         // cloud
                    document.getElementById("city").innerHTML=data.name+" , "+data.sys.country;        //country and place
                var icon="https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png";
                                //getting cloud image link
                document.getElementById("icon").src=icon;  
            

                //console.log(icon);

                    time();                                 //calling time function
                },
                error:function(val)                             // feedback when error
                {
                    document.getElementById("feedback").innerHTML="City not Found";                     //printing feedback
                }
                
            });
        }
        $("#celcius").click(C);                 //calling function to show temperature
       function C()
       {
        $("#farenheit").css("background-color", "grey");                //setting button color
        $("#celcius").css("background-color","grey");
        a="metric";
        ab();    
        show();                                                           //calling main method

       }

       $("#farenheit").click(F);
       function F()
       {
        $("#farenheit").css("background-color", "grey");
        $("#celcius").css("background-color", "grey");
        a="imperial";
        ab();
        show();
       }

         $("#submitBtn").click(C);
       function submit()
       {
     
        ab();
        show();
       }
        
   
});
function time() {                //time function
    var today = new Date();     //time object
    var weekday = new Array(7);                     // to get day
    weekday[0] = "Sunday";
    weekday[1] = "Monday";                          
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[today.getDay()];
    var h = today.getHours();        //hour
    var m = today.getMinutes();      //minutes
    var s = today.getSeconds();      //sec
    var z=today.getDay();
    var x=today.getMonth();
    var y=today.getFullYear();
    m = checkTime(m);        //to add zero when value is below 10
    s = checkTime(s);        //          ""
    document.getElementById("day&time").innerHTML =n+" , "+h + ":" + m + ":" + s;   //time and day
    var t = setTimeout(time, 500);
        }  // 
function checkTime(i) {      //to add zero when value is below 10 
    if (i < 10) {i = "0" + i}; 
    return i;
    }

