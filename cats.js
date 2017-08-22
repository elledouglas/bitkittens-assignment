document.addEventListener('DOMContentLoaded', function (){


var kitten_button = document.querySelector('.summon-cats');
kitten_button.addEventListener('click', function(event){

  event.preventDefault();
  $.ajax({
    url: 'http://bitkittens.herokuapp.com/cats.json',
    method: 'GET',
    dataType: 'json'
  }).done(function(responseData){

var catJSON = responseData
var catList = catJSON["cats"];
catList[0]["name"]
    // var details = document.querySelector('.cat-box')
    // details.innerHTML = "Photo of cat #{name "
    //
    var img = document.createElement('img')
    img.src = catList[0]["photo"]
    img.alt = " Photo of" +  catList[0]["name"]

  var catDiv = document.querySelector('#cat1')
  catDiv.append(img)[0]

    //
    // var catPic = "https://s3.amazonaws.com/bitmakerhq/resources/web-development/bitkittens/20160731_124229.jpeg"
    //
    //     var img = document.createElement('img')
    //     img.src = catPic;

  })





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
