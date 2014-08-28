(function( $ ){
   $.fn.BlaCalender = function(Year,Month,Day,Events) {
      function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }    
    CountDate = new Date(Year,Month,0).getDate();
    StartDate = new Date(Year+"-"+Month+"-01").getDay();
    var innerTable = "<thead> <tr><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th></th>Perşembe</th><th>Cuma</th><th>Cumartesi</th><th>Pazar</th></tr></thead>";
    innerTable += "<tbody>";
    var counter=01;
    for(i=1;i<=40;i++){
        if((i+7)%8==0){
            innerTable += "<tr>";
        }else{
            if((i<StartDate) || (counter > CountDate)){
                innerTable += "<td />";
            }else{
                innerTable += '<td data-date="'+Year+'-'+pad(Month)+'-'+pad(counter)+'"';    
                if(counter==Day){
                    innerTable += ' class="current-day"';
                }
                innerTable += '><div class="evt"><b>'+counter+"</b></div></td>";
                counter++;
            }
        }
        if((i+7)%8==0){
            innerTable += "</tr>";
        }
    }
    innerTable += "</tbody>";
    this.append(innerTable);
   var EventList = Events.Events.Event;
       for(var i in EventList){
           $("td[data-date='"+EventList[i].Date+"'] > div.evt").append('<div events>'+EventList[i].Content+'</div>');
           $("td[data-date='"+EventList[i].Date+"']").addClass("active-time");
           
       }
   }; 
})(jQuery);
