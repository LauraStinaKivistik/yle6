(function() {
    "use strict";
    
    //clock
  document.addEventListener("DOMContentLoaded", function () {
    let c = document.getElementById("clock");

    //setTimeout(updateClock, 2000);
    setInterval(updateClock, 1000);

    function updateClock() {
      let date = new Date();
      let h = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      let am_pm = date.Time;

      if (h > 12) {
        h -= 12;
        am_pm = "PM";
      }
      if (h == 0) {
        hr = 12;
        am_pm = "AM";
      }

      if (h < 10) {
        h = "0" + h;
      }

      if (m < 10) {
        m = "0" + m;
      }

      if (s < 10) {
        s = "0" + s;
      }

      c.innerHTML = h + ":" + m + ":" + s;
    }
  });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    let e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    

	
    function estimateDelivery(event) {
        event.preventDefault();
		
        
        let linn = document.getElementById("linn");
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
            
            return;}

         let value = 0   
         if (linn.value ==="tln") value = 0
         if (linn.value ==="trt") value = 2.5
         if (linn.value ==="nrv") value = 2.5
         if (linn.value ==="prn") value = 3

   
            e.innerHTML = value + "&euro;";
            
                
        
        console.log("Tarne hind on arvutatud");
    }
	
    
})();

// map

let mapAPIKey = "AqLLRE37SJGqIxXEYxezPUa6fF2oCzl3cvG4n05FtFIVBrotBYxchpMYYpwuxBak";

let map;

function GetMap() {
    
    "use strict";

let centerPoint = new Microsoft.Maps.Location(
            58.266667, 
			26.033333
        );
	
	let Point1 = new Microsoft.Maps.Location(
            58.38104, 
            26.71992
        );
		
let Point2 = new Microsoft.Maps.Location(
            58.362768, 
			25.600807
        );
		
	
    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 8,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    let pushpin1 = new Microsoft.Maps.Pushpin(Point1, {
            title: 'Tartu Ülikool',
            //subTitle: 'Hea koht',
            //text: 'UT'
        });
		
	let pushpin2 = new Microsoft.Maps.Pushpin(Point2, {
            title: 'Viljandi veetorn',
            //subTitle: 'Veetorn',
            //text: 'VT'
        });
		
		var infobox1 = new Microsoft.Maps.Infobox(Point1, {
            title: 'Tartu Ülikool',
            description: 'Tartu Ülikooli peahoone asub Tartu kesklinnas aadressil Ülikooli tänav 18.'
        });
		
		var infobox2 = new Microsoft.Maps.Infobox(Point2, {
            title: 'Viljandi veetorn',
            description: 'Viljandi vana veetorn on endine veetorn Viljandi linnas, mis tänapäeval on kasutusel vaatetornina.'
        });

    map.entities.push(pushpin1);
map.entities.push(pushpin2);
infobox1.setMap(map);
infobox2.setMap(map);
}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE