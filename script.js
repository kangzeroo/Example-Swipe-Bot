(function loop() {
    var rand = Math.round(Math.random() * 5000);
    const like = document.evaluate(`//*[@id="o-738591094"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div/div[5]/div/div[4]/button`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    const dislike = document.evaluate(`//*[@id="q-2020625691"]/div/div[1]/div/main/div[1]/div/div/div[1]/div/div/div[5]/div/div[2]/button`, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue
    setTimeout(function() {
        const randomNumber = Math.floor(Math.random() * 100) + 1
        if (randomNumber > 10) {
            like.click()
        } else {
            dislike.click()
        }
        loop();
    }, rand);
}());


