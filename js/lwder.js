
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
        var dotAnimation = this.dotAnimation = function dotAnimation(dom, lwder, speed, type, condition, duration) {

            // Turn into array
            const dotsArray = lwder.split(/.*?/u);

            // Length
            const dotsLength = dotsArray.length;
            // Count Positon
            var count = 0;
            var int;
            var defaultState;
            let originalContent = dom.innerHTML;

            // Remove all the extra content added by Lwder
            function removeLwder(element)
            {
                    // Get current string length
                    var compAtual = element.innerHTML.length;
                    // Get original string length
                    var compOriginal = originalContent.length;
                    // Calculate how much characters are above the original number and remove them
                    var compDeleteSize = Number(compAtual)-Number(compOriginal);
                    element.innerHTML = element.innerHTML.substring(0, element.innerHTML.length - compDeleteSize);
            }

            // Check type of event
            switch (type) {
                case 'default':

                     int = setInterval(function() {
                        if(count >= dotsLength)
                        {
                            removeLwder(dom);
                            count = 0;

                        } else {
                            dom.innerHTML += dotsArray[count];
                            count = count+1; 
                        }
                    }, speed);

                break;
                case 'onclick':

                        // Save original content«
                        dom.addEventListener("click", function() {

                            // Clear all current timeouts/intervals
                            clearTimeout(defaultState);
                            clearTimeout(int);
                            count = 0;

                            // Get current element height and set it as min-height to avoid height collapse
                            let originCss = dom.style.cssText;
                            dom.style.cssText = originCss+' min-height:'+dom.offsetHeight+"px";
                            
                            // Check condition
                            if(condition == 'default')
                            {
                                removeLwder(dom);
                            } else { 
                                dom.innerHTML = "";
                             }

                            // Set Animation
                            int = setInterval(function() {

                                if(count >= dotsLength)
                                {
                                    if(condition == 'default')
                                    {
                                        removeLwder(dom);
                                    } else { 
                                        dom.innerHTML = ""; 
                                    }

                                     count = 0; 
                                } else {
                                    dom.innerHTML += dotsArray[count];
                                    count = count+1; 
                                }

                            }, speed);

                            // Set time out to stop animation
                            defaultState = setTimeout(() => {

                                clearTimeout(int);
                                dom.innerHTML = originalContent;
                                count = 0;

                                // Remove min-height after timeout
                                dom.style.cssText = originCss;

                            }, duration);

                        }); 
               break;
              default:
                
            }
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
                // Dots content * Required * 
                if("lwder" in specificElement.attributes){ var lwder = specificElement.attributes.lwder.value; }
                // Lwder Speed * Required * 
                if("lwderspeed" in specificElement.attributes){ var lwderSpeed = specificElement.attributes.lwderspeed.value; }
                // Lwder Type * Optional * 
                if("lwderspeed" in specificElement.attributes){ var lwderType = specificElement.attributes.lwdertype.value; } else { var lwder = "default"; }
                // Lwder Condition * Optional *
                if("lwdercondition" in specificElement.attributes){ var lwderCondition = specificElement.attributes.lwdercondition.value; } else { var lwderCondition = "default"; }
                // Lwder Duration time * required *
                if("lwderduration" in specificElement.attributes){ var lwderduration = specificElement.attributes.lwderduration.value; } else { var lwderduration = "default"; }
                                              
                // Start animation
                this.dotAnimation(specificElement, lwder, lwderSpeed, lwderType, lwderCondition, lwderduration);
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

