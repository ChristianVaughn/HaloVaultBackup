$( document ).ready(function() {
console.log('START SCRIPT');
 $.getJSON("https://raw.githubusercontent.com/cvaughn55/HaloVaultBackup/master/data.json?token=AEbY1FQQDsT2s0HL1CoOz143kI0XwAQfks5cnGY9wA%3D%3D", function(data) {    $.each(data, function(index, element) {
	 console.log(element.MapName.toLowerCase().charAt(0));

    const card = document.createElement('a');
    card.setAttribute('class', 'card');
    card.href = element.Dlink

    const mapImage = document.createElement('figure');
    mapImage.setAttribute('class', element.BaseMap);
    
    const mapName = document.createElement('article');
    mapName.setAttribute('class', 'text');
	
    const h2 = document.createElement('h2');
    h2.textContent = element.MapName

    if ('0123456789'.includes(element.MapName.charAt(0))) {
        var app = document.getElementById('aa');
    }
    else {
        var app = document.getElementById(element.MapName.toLowerCase().charAt(0));
    }
	 

    app.appendChild(card);
    card.appendChild(mapImage);
    card.appendChild(mapName);
    mapName.appendChild(h2);

    });
});

    
});