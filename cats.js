document.addEventListener('DOMContentLoaded', function (){


var kitten_button = document.querySelector('.summon-cats');
kitten_button.addEventListener('click', function(event){

  event.preventDefault();
  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType: 'json'
  }).done(function(){
    var details = document.querySelector('#cat1')
    details.innerHTML = "Photo of cat name "

  })

    var catPic = "/finish.png"

    var img = document.createElement('img')
    img.src = catPic;


    // <div id="cat1" class="cat-box"></div>


//
});
// .done(function(responseData){
//
//   var catPhoto = document.querySelector('#cat1');
//
//
//
//
//   var profilePicSrc = "httpLrobohash.org/" + responseData.alt
//
//
//
//   CatPhoto.appendChild(img);
// })
//
//
});
