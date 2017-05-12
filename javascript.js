$.getJSON('/sesion/sesion.json', function(data){
  data.forEach(function(sesion){
    $fragment = $('\
      <article data-number="' + sesion.fotos + '" style="background-image: url(\'/sesion/' + sesion.nombre + '/portada.jpg\');">\
        <span class="image" style="display: none;">\
          <img src="/sesion/' + sesion.nombre + '/portada.jpg" alt="' + sesion.nombre + '">\
        </span>\
        <header class="major">\
          <h3><a href="#' + sesion.nombre + '" class="link">' + sesion.nombre + '</a></h3>\
          <p>' + sesion.modelo + '</p>\
        </header>\
        <a href="#' + sesion.nombre + '" class="link primary"></a>\
      </article>\
    ');
    var items = [{ src: '/sesion/' + sesion.nombre + '/portada.jpg' }];
    for (var i = 1; i <= sesion.fotos; i++) {
      items.push({ src: '/sesion/' + sesion.nombre + '/' + i + '.jpg' });
    }
    $fragment.magnificPopup({
      items: items,
      gallery: { enabled: true },
      type: 'image' // this is default type
    });
    $('#one').append($fragment);
  });
});
