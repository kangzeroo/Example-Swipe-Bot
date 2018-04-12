(function loop() {
    var rand = Math.round(Math.random() * 5000);
    const like = document.evaluate(`//*[@id="content"]/div/span/div/div[1]/div/main/div[1]/div/div/div[1]/div/div[2]/button[4]`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    setTimeout(function() {
            like.click()
            loop();
    }, rand);
}());
