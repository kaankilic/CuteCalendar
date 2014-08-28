(function( $ ){
   $.fn.BlaCalender = function(Year,Month,Day,Events,Options) {
      function pad(d) {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }    
       if(Events.DefaultDate=="undefined"){
           DefaultDate = new Date().today();
           console.log(DefaultDate);
       }
    CountDate = new Date(Year,Month,0).getDate();
    StartDate = new Date(Year+"-"+Month+"-01").getDay();
    var innerTable = "<thead> <tr><th>Pazartesi</th><th>Salı</th><th>Çarşamba</th></th>Perşembe</th><th>Cuma</th><th>Cumartesi</th><th>Pazar</th></tr></thead>";
    innerTable += "<tbody>";
    var counter=01;
    for(i=1;i<=40;i++){
        if((i+7)%8==0){
            innerTable += "<tr>";
            var isEmpty = false;
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
            isEmpty = true;
        }
        if((i+7)%8==0 && isEmpty!=true){
            innerTable += "</tr>";
        }
        if(isEmpty!=true){
            innerTable = innerTable.substring(0,innerTable.length-5);
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
