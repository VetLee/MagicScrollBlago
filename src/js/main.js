//= glfx.js

window.onload = function() {

  try {
    var canvas1 = fx.canvas();
    var canvas2= fx.canvas();
  } catch (e) {
    alert(e);
    return;
  }


  (function () {
    image = document.getElementById('image');
    texture = canvas1.texture(image);
    canvas1.draw(texture).update();
    image.parentNode.insertBefore(canvas1, image);
    image.parentNode.removeChild(image);
    $(canvas1).attr( "id", "image" )
  }());

  (function () {
    image = document.getElementById('frame');
    texture = canvas2.texture(image);
    canvas2.draw(texture).update();
    image.parentNode.insertBefore(canvas2, image);
    image.parentNode.removeChild(image);
  }());


  var controller = new ScrollMagic.Controller();


	new ScrollMagic.Scene({offset: 1})
		.setClassToggle("#header", "white")
    //.addIndicators({name: "header"})
		.addTo(controller);


  var tween = TweenMax.to("#iphone", 0.3, {scale: 0.5, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 600, duration: 900})
		.setTween(tween)
    //.addIndicators({name: "iphone scale"})
		.addTo(controller);

  var tween = TweenMax.to("#iControll", 0.3, {opacity: 1, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1400})
		.setTween(tween)
    //.addIndicators({name: "iphone scale"})
		.addTo(controller);

  var tween = TweenMax.to("#title", 0.2, {opacity: 1, marginLeft: 0, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1700})
		.setTween(tween)
    //.addIndicators({name: "iphone scale"})
		.addTo(controller);

  var tween = TweenMax.to("#point1", 0.2, {opacity: 1, marginLeft: 0, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1750})
		.setTween(tween)
		.addTo(controller);
  var tween = TweenMax.to("#point2", 0.2, {opacity: 1, marginLeft: 0, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1800})
		.setTween(tween)
		.addTo(controller);
  var tween = TweenMax.to("#point3", 0.2, {opacity: 1, marginLeft: 0, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1850})
		.setTween(tween)
		.addTo(controller);
  var tween = TweenMax.to("#downloads", 0.3, {opacity: 1, marginTop: 70, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1900})
		.setTween(tween)
		.addTo(controller);

  var tween = TweenMax.to("#block-counter", 0.3, {opacity: 1, top: 720, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1950})
		.setTween(tween)
		.addTo(controller);


  var tween = TweenMax.to("#iphone-wrap", 0.3, {left: '-15%', ease: Linear.linear});
  new ScrollMagic.Scene({offset: 1350, duration: 300})
		.setTween(tween)
    //.addIndicators({name: "iphone pos"})
		.addTo(controller);


  var tween = TweenMax.to("#wallpapers", 0.3, {scale: 1, ease: Linear.linear});
  new ScrollMagic.Scene({offset: 30, duration: 530})
		.setTween(tween)
    //.addIndicators({name: "wallpapers scale"})
		.addTo(controller);


  new ScrollMagic.Scene({offset: 0, duration: 2100})
		.setPin("#pin1")
		//.addIndicators({name: "#pin1"})
		.addTo(controller);


  var blurElement = {a:10, b:0.7};
  var tween = TweenMax.to(blurElement, 1, {
    a:0,
    b:0.8,
    onUpdate:applyBlurEffects  });
  new ScrollMagic.Scene({offset: 0, duration: 600})
    .setTween(tween)
    //.addIndicators({name: "blur"})
    .addTo(controller);
  function applyBlurEffects() {
    TweenMax.set(['#image'], {
      webkitFilter:"blur(" + blurElement.a + "px) brightness(" + blurElement.b + ")",
      filter:"blur(" + blurElement.a + "px) brightness(" + blurElement.b + ")",    });
  };

};
