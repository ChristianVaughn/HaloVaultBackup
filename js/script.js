$( document ).ready(function() {

$.getJSON('./data.json', { get_param: 'value' }, function(data) {
    $.each(data, function(index, element) {
        const card = document.createElement('a');
    card.setAttribute('class', 'card');
    card.href = element.Dlink

    const mapImage = document.createElement('figure');
    mapImage.class = element.BaseMap;
    
    const mapName = document.createElement('article');
    mapName.setAttribute('class', 'text');

    const h2 = document.createElement('h2');
    h2.textContent = element.title.MapName

    if ('0123456789'.includes(element.MapName.charAt(0))) {
        const app = document.getElementById('a');
    }
    else {
        const app = document.getElementById(element.MapName.toLowerCase().charAt(0));
    }

    app.appendChild(card);
    card.appendChild(mapImage);
    card.appendChild(mapName);
    mapName.appendChild(h2);

    });
});

    
});