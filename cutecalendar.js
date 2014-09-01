(function($) {
    $.fn.BlaCalender = function(Options) {
        function pad(d) {
            return (d < 10) ? '0' + d.toString() : d.toString();
        }
        if (Options.DefaultDate == "undefined") {
            DefaultDate = new Date().today();
        }
        var DefaultDate = new Date(Options.DefaultDate);
        Year = DefaultDate.getFullYear();
        Month = DefaultDate.getMonth()+1;
        Day = DefaultDate.getDate();
        var CountDate = new Date(Year, Month, 0).getDate();
        
        StartDate = new Date(Year + "-" + Month + "-01").getDay();
        var innerTable = "<thead> <tr><th>Pazartesi</th><th>SalÄ±</th><th>Ã‡arÅŸamba</th><th>PerÅŸembe</th><th>Cuma</th><th>Cumartesi</th><th>Pazar</th></tr></thead>";
        innerTable += "<tbody>";
        var counter = 01;
        for (i = 1; i <= 40; i++) {
            if ((i + 7) % 8 == 0) {
                innerTable += "<tr>";
            } else {
                if ((i <= StartDate) || (counter > CountDate)) {
                    innerTable += "<td />";
                } else {
                    innerTable += '<td data-date="' + Year + '-' + pad(Month) + '-' + pad(counter) + '"';
                    if (counter == Day) {
                        innerTable += ' class="current-day"';
                    }
                    innerTable += '><div class="evt"><b>' + counter + "</b></div></td>";
                    counter++;
                }
            }

            if ((i + 7) % 8 == 0) {
                innerTable += "</tr>";

            }
            if (i % 8 == 0) {
                innerTable = innerTable.substring(0, innerTable.length - 9);
            }
        }
        innerTable += "</tbody>";
        this.append(innerTable);
        var EventList = Options.Events.Event;
        for (var i in EventList) {
            var insider_title = EventList[i].Title;
            var insider_content = EventList[i].Content;
            var insider_image = EventList[i].Image;
            var insider_date = EventList[i].Date
            var a_title_inside = "<img class='col-1-1' src='" + insider_image + "'/><h5 class='tt-tile'>" + insider_title + "</h5><h6 class='tt-date'>" + insider_date + "</h6><p>" + insider_content + "</p>"
            var href_insider = EventList[i].Url;
            var link_inside = '<a class="tooltip" title="' + a_title_inside + '" href="' + href_insider + '">' + insider_title + '</a>';

            $("td[data-date='" + EventList[i].Date + "'] > div.evt").append(link_inside);
            $("td[data-date='" + EventList[i].Date + "']").addClass("active-time");

        }
    };

})(jQuery);
