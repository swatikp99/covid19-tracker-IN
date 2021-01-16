$.getJSON("https://covid-api.mmediagroup.fr/v1/cases?country=India", function(data){
    console.log(Object.keys(data).length);
    confirmCases=data.All.confirmed;
    recovered=data.All.recovered;
    deaths=data.All.deaths;
    $('.covid-container .confirmed-cases').text("Confirmed Cases: "+confirmCases);
    $('.recovered').text("Recovered: "+recovered);
    $('.deaths').text("Deaths: "+deaths);

    var count=1;
    $('.container').append('<div class="row"><div class="state'+(count)+' col-md"><h3>State name</h3><p class="regionConfirm">Confirm</p><p class="regionRecovered">Recovered</p><p class="regionDeath">Death</p></div><div class="state'+(count+1)+' col-md"><h3>State name</h3><p class="regionConfirm">Confirm</p><p class="regionRecovered">Recovered</p><p class="regionDeath">Death</p></div><div class="state'+(count+2)+' col-md"><h3>State name</h3><p class="regionConfirm">Confirm</p><p class="regionRecovered">Recovered</p><p class="regionDeath">Death</p></div></div>'); 
    $(document).ready(function(){
        for(var state in data){
          if(state=="Unknown")
            continue;
          
          //$('.container').append('<div class="state'+(count)+' col-md"><h3>State name</h3><p class="regionConfirm">Confirm</p><p class="regionRecovered">Recovered</p><p class="regionDeath">Death</p></div>');
          $('.state'+count+' h3').text(state);
          $('.state'+count+' .regionConfirm').text("Confirmed Cases: "+data[state].confirmed);
          $('.state'+count+' .regionRecovered').text("Recovered: "+data[state].recovered);
          $('.state'+count+' .regionDeath').text("Deaths: "+data[state].deaths);
          if(count%3==0){
            $('.container').append('<div class="row"><div class="state'+(count+1)+' col-md"><h3></h3><p class="regionConfirm"></p><p class="regionRecovered"></p><p class="regionDeath"></p></div><div class="state'+(count+2)+' col-md"><h3></h3><p class="regionConfirm"></p><p class="regionRecovered"></p><p class="regionDeath"></p></div><div class="state'+(count+3)+' col-md"><h3></h3><p class="regionConfirm"></p><p class="regionRecovered"></p><p class="regionDeath"></p></div></div>'); 
          }
          count++;
        }
      });
      $('.state9 h3').text("Dadra, Nagar Haveli, Daman and Diu");
});

