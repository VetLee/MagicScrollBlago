//= glfx.js

window.onload = function() {
  
  try {
    var canvas = fx.canvas();
  } catch (e) {
    alert(e);
    return;
  }

  var image = document.getElementById('image');
  var texture = canvas.texture(image);
  canvas.draw(texture).update();
  image.parentNode.insertBefore(canvas, image);
  image.parentNode.removeChild(image);


  var controller = new ScrollMagic.Controller();


	new ScrollMagic.Scene({offset: 1})
		.setClassToggle("#header", "white")
		.addTo(controller);


  var scaleTween = TweenMax.to("#wallpapers", 0.3, {scale: 1, ease: Linear.linear});

  new ScrollMagic.Scene({offset: 0, duration: 1400})
		.setTween(scaleTween)
		.addTo(controller);


  var blurElement = {a:10};

  var blurTween = TweenMax.to(blurElement, 3, {
    a:0,
    onUpdate:applyBlurEffects
  });

  new ScrollMagic.Scene({offset: 0, duration: 600})
    .setTween(blurTween)
    .addTo(controller);

  function applyBlurEffects() {
    TweenMax.set('.blur', {
      webkitFilter:"blur(" + blurElement.a + "px)",
      filter:"blur(" + blurElement.a + "px)"
    });
  };

};
