import { setHTMLElement, encodeBASE64/* , decodeBASE64 */} from "./src/index";

function notifier(property, oldValue, newValue) {
    //   DEV_NOTE # you would need to use decodeBASE64 somewhere inside switch depending on your case;
    switch (property) {
        /* DEV_NOTE # each case value is what you registered at setHTMLElement "observings" property */
        case 'version':
            if (setHTMLElement.hasChanged(oldValue, newValue)){
                console.log(`${property} has changed from ${oldValue} to ${newValue}`)
                // DEV_NOTE # instead of console.log you could write your own custom event dispatcher...
            }
            break;
        case 'encodings':
            if (setHTMLElement.hasChanged(oldValue, newValue)){
                console.log(`${property} has changed from ${oldValue} to ${newValue}`)
                // DEV_NOTE # instead of console.log you could write your own custom event dispatcher...
            }
            break;
        default:;
    }
}

document.body.appendChild(
    globalThis.wc_matrix = setHTMLElement('captain-hook', {
        observings: new Map([
            ['version', 1],
            ['encodings', encodeBASE64([8, 16, 32, 64])],
        ]),
        lifecycles: {
            isObserved: notifier,
            /* DEV_NOTE # isMounted console.logs on the very first load of component */
            isMounted: ()=> console.log("isMounted"),
            /* DEV_NOTE # Remove from DevTools to observe the following console.log message */
            isDestroyed: ()=> console.log("isDestroyed")
        }
    })
)

///*  === EXAMPLES # HOW TO USE GETTER/SETTER PAIRS FOR EACH OF ATTRIBUTES OBSERVED === */
/* globalThis.wc_matrix.version */// # GETTER EXAMPLE
/* globalThis.wc_matrix.version = Math.random() */// SETTER EXAMPLE
/* globalThis.wc_matrix.encodings */// # GETTER EXAMPLE
/* globalThis.wc_matrix.encodings = [] */// SETTER EXAMPLE