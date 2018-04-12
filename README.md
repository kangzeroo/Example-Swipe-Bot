# Example-Swipe-Bot
By popular request

## Steps
1. Go to your favorite swipable app <br/>
2. Find the like button and right click > inspect element > right click the button HTML > copy > Copy XPath <br/>
3. Replace the 'const like = `...xpath`' in script.js with your own XPath (paste from clipboard) <br/>
4. Copy the script.js code to clipboard <br/>
5. Go back to your swipable app and right click > inspect element > Console tab <br/>
6. Within the Javascript console, paste your script.js code and press enter <br/>

## Features
- Includes a randomized time interval from 0 - 5 seconds to avoid anti-bot detection code <br/>

## Limitations
- Does not account for the pop-up modal when a match is made. Additional code is required to close the pop-up modal, so it is best to run this script after you have exhausted any potential matches <br/>
