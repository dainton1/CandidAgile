

  console.log('It works! Now what should I do, I want some Java that does something? This just shows up on the Dom under console as message?');

  var headers = document.getElementsByTagName("h1");

  for (var i in headers)
  {
      headers[i].onmouseover = function()
      {
          this.style.color = 'black';
      }
    }

    var headers = document.getElementsByTagName("h1");

    for (var i in headers)
    {
        headers[i].onmouseout = function()
        {
            this.style.color = '';
        }
      }

/*let headers = document.getElementsByTagName("h1");
for (headers).onmouseout = function() {
    this.style.color = 'blue';
} */
    
  
  

  // Wrap every letter in a span
//use this link to get to the animation https://tobiasahlin.com/moving-letters/#2
/*var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='the_title'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  }); */