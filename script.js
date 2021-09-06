(function loop() {
    var rand = Math.round(Math.random() * 5000);
    const like = document.evaluate(`//*[@id="o-738591094"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div/div[5]/div/div[4]/button`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    setTimeout(function() {
            like.click()
            loop();
    }, rand);
}());
