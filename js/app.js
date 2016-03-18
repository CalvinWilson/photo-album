$(document).ready(function(){
  var $app = $("#app");
  var homepage = $("#homepage").text();
  var albumpage = $("#albumpage").text();
  var overlayTemplate = $("#overlayTemplate").text();
  var $overlay = $(".overlay");

  $app.on('click', '.home .album', function(e) {
    var albumTitle = $(this).find('.caption').text().trim();
    renderAlbum(albumTitle);
  });

  $app.on('click', '#navbar li', function(e){
    var albumTitle = $(this).text().trim();
    renderAlbum(albumTitle);
  });

  renderDefault();

  function renderDefault() {
    $app.html(Mustache.render(homepage, data));
  }

  function renderAlbum(albumTitle) {
    var albumData = data.albums.filter(function(value){
      return value.name === albumTitle ? true : false;
    })[0];
    
    albumData.albums = data.albums.map(function(value){
      return value.name;
    });

    $app.html(Mustache.render(albumpage, albumData));
  }


});