$.getJSON("https://covid-api.mmediagroup.fr/v1/cases?country=India", function(data){
    console.log(Object.keys(data).length);
    confirmCases=data.All.confirmed;
    recovered=data.All.recovered;
    deaths=data.All.deaths;
    $('.confirmed-cases').append(confirmCases).css("color","blue");
    $('.recovered').append(recovered).css("color","green");
    $('.deaths').append(deaths).css("color","red");

    var count=1;
    $('.container').append('<div class="row"><div class="state'+(count)+' col-md"><h3>State name</h3><p>Confirmed Cases:&nbsp;<span class="regionConfirm"></span></p><p>Recovered:&nbsp;<span class="regionRecovered"></span></p><p>Deaths:&nbsp;<span class="regionDeath"></span></p></div><div class="state'+(count+1)+' col-md"><h3>State name</h3><p>Confirmed Cases:&nbsp;<span class="regionConfirm"></span></p><p>Recovered:&nbsp;<span class="regionRecovered"></span></p><p>Deaths:&nbsp;<span class="regionDeath"></span></p></div><div class="state'+(count+2)+' col-md"><h3>State name</h3><p>Confirmed Cases:&nbsp;<span class="regionConfirm"></span></p><p>Recovered:&nbsp;<span class="regionRecovered"></span></p><p>Deaths:&nbsp;<span class="regionDeath"></span></p></div></div>'); 
    $(document).ready(function(){
        for(var state in data){
          if(state=="Unknown")
            continue;
          
          //$('.container').append('<div class="state'+(count)+' col-md"><h3>State name</h3><p class="regionConfirm">Confirm</p><p class="regionRecovered">Recovered</p><p class="regionDeath">Death</p></div>');
          $('.state'+count+' h3').text(state);
          $('.state'+count+' .regionConfirm').append(data[state].confirmed).css("color","blue");
          $('.state'+count+' .regionRecovered').append(data[state].recovered).css("color","green");
          $('.state'+count+' .regionDeath').append(data[state].deaths).css("color","red");
          if(count%3==0){
            $('.container').append('<div class="row"><div class="state'+(count+1)+' col-md"><h3></h3><p>Confirmed Cases:&nbsp;<span class="regionConfirm"></span></p><p>Recovered:&nbsp;<span class="regionRecovered"></span></p><p>Deaths:&nbsp;<span class="regionDeath"></span></p></div><div class="state'+(count+2)+' col-md"><h3></h3><p>Confirmed Cases:&nbsp;<span class="regionConfirm"></span></p><p>Recovered:&nbsp;<span class="regionRecovered"></span></p><p>Deaths:&nbsp;<span class="regionDeath"></span></p></div><div class="state'+(count+3)+' col-md"><h3></h3><p>Confirmed Cases:&nbsp;<span class="regionConfirm"></span></p><p>Recovered:&nbsp;<span class="regionRecovered"></span></p><p>Deaths:&nbsp;<span class="regionDeath"></span></p></div></div>'); 
          }
          count++;
        }
      });
      $('.state9 h3').text("Dadra, Nagar Haveli, Daman and Diu");
});

