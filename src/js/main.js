
$(function() {

  var scrollMagicController = new ScrollMagic();

  // Блюр фона
  var blurElement = {a:8, b:0.7};
  var blurTween = TweenMax.to(blurElement, 3, {a:0, b:0.7, onUpdate:applyBlurEffects});
  var blurScene = new ScrollScene({
    offset: 30,
    duration: 300
  })
  .setTween(blurTween)
  .addTo(scrollMagicController);

  function applyBlurEffects() {
      TweenMax.set(['.blur'], {
        webkitFilter:"blur(" + blurElement.a + "px) brightness(" + blurElement.b + ")",
        filter:"blur(" + blurElement.a + "px) brightness(" + blurElement.b + ")"
      });
  };



  // header
  var headerTween = TweenMax.to('#header', 0, {
    'background-color': 'rgba(255, 255, 255, 0.9)',
    'color': '#1f233a'
  });
  var headerScene = new ScrollScene({
    offset: 1
  })
  .setTween(headerTween)
  .addTo(scrollMagicController);



  // zoom-out
  var zoomOutElement = {a:2};
  var zoomOutTween = TweenMax.to(zoomOutElement, 9, {a:1, onUpdate:applyZoomOutAnim});
  var zoomOutScene = new ScrollScene({
    offset: 1,
    duration: 700
  })
  .setTween(zoomOutTween)
  .addTo(scrollMagicController);

  function applyZoomOutAnim() {
      TweenMax.set(['#background'], {
        transform: 'scale3d(' + zoomOutElement.a + ', ' + zoomOutElement.a + ', 1)'
      });
  };



  // block-with-text
  var blockWithTextElement = {a:35};
  var blockWithTextTween = TweenMax.to(blockWithTextElement, 3, {a:-30, onUpdate:applyTopPos});
  var blockWithTextScene = new ScrollScene({
    offset: 20,
    duration: 500
  })
  .setTween(blockWithTextTween)
  .addTo(scrollMagicController);

  function applyTopPos() {
      TweenMax.set(['#block-with-text'], {
        top: blockWithTextElement.a + "%"
      });
  };



  //zoomOutScene.addIndicators();
});
