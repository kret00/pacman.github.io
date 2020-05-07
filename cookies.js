  
var setCookie = function (n, val) {
  var exdays = 365;
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = n + "=" + val + "; " + expires;
};

var getCookie = function (n) {
  var name = n + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

document.onclick = function (e) {
  if (e.target.className == 'btn') {
    var favColor = e.target.style.backgroundColor;
    setCookie('color', favColor);
    document.body.style.backgroundColor = favColor;
    console.log(favColor);
  }
  
  if (e.target.id == 'big-cookie') {
    //Change value to experiment with cookie size
    //for example, browser will not allow size more than 5000
    setCookie('longCookie', generateString(4046))
  }
  
  //Change value to experiment with amount of cookies
  if (e.target.id === 'multiple-cookies') {
        generateBigMultipleCookies(100,4040)
  }
};

window.onload = function () {
  var favColor = document.body.style.backgroundColor;
  var color = getCookie('color');
  if (color === '') {
    document.body.style.backgroundColor = favColor;
  } else {
    document.body.style.backgroundColor = color;
  }
};

function generateString(size) {
  return 'x'.repeat(size);
}

function generateBigMultipleCookies(amount,size) {
  for (var i = 0; i < amount; ++i) {
    setCookie('test_'+i, generateString(size));
  }
}
