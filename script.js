  const buttons = document.body.getElementsByTagName("button");
  let likeButton;
  let dislikeButton;
  let maxSwipes = 100
  let swipeCount = 0
  for (var i = 0; i < buttons.length; i++) {
    if (buttons[i].className.indexOf("c-like-green") > -1) {
      likeButton = buttons[i];
    }
    if (buttons[i].className.indexOf("c-pink") > -1) {
      dislikeButton = buttons[i];
    }
  }
  (function loop() {
    var rand = Math.round(Math.random() * 5000);
    setTimeout(function () {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      if (randomNumber > 10) {
        likeButton.click();
      } else {
        dislikeButton.click();
      }
      swipeCount = swipeCount+1
      if (swipeCount < maxSwipes) {
        loop();
      }
    }, rand);
  })();
