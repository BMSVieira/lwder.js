
/*-------------------------
Lwder.js
Made by: Bruno Vieira
--------------------------- */

class Lwder {

    constructor(options) {

        const defaults = {
            selector : 'defaultId'
        };      

        this.selector = options.selector || defaults.selector;

        // Global
        let _this = this;

        /*
        ** Animation Structure
        */
        var dotAnimation = this.dotAnimation = function dotAnimation(dom, lwder, speed) {

            // Turn into array
            const dotsArray = lwder.split("");
            // Length
            const dotsLength = dotsArray.length;
            // Count Positon
            var count = 0;

            var int = setInterval(function() {
                if(count >= dotsLength)
                {
                    dom.innerHTML = dom.innerHTML.substring(0, dom.innerHTML.length - dotsLength);
                    count = 0;
                } else {
                    dom.innerHTML += dotsArray[count];
                    count = count+1; 
                }
            }, speed);
        }

        /*
        ** Build Structure
        */
        var SetupLwder = this.SetupLwder = function SetupLwder() {
            // Get All elements
            var selectorElements = document.querySelectorAll(this.selector); 

            for (var i = 0; i < selectorElements.length; i++) {

                // Specific Element
                let specificElement = selectorElements[i];
                // Dots content 
                let lwder = specificElement.attributes.lwder.value;
                let lwderSpeed = specificElement.attributes.lwderspeed.value
                // Start animation
                this.dotAnimation(specificElement, lwder, lwderSpeed);
            }
        }
        // Init
        this.SetupLwder();
    }
}

// Export module to use it in browser and NodeJS
try {
   module.exports = exports = Lwder;
} catch (e) {}

