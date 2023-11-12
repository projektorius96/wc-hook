import { setComponent, encodeBASE64/* , decodeBASE64 */} from "./src/index";

console.log(
    globalThis.wc_matrix = setComponent({
        wc_name: 'wc-matrix',
        props: [],
        observings: new Map([
            /* notifier : [property, oldValue/newValue] */
            ['age', 64],
            ['encodings', encodeBASE64([8, 16, 32, 64])],
        ]),
        notifier,
    })
)

function notifier(property, oldValue, newValue) {
    // DEV_NOTE # you would need to use decodeBASE64 somewhere inside switch depending on your case;
    switch (property) {
        /* DEV_NOTE # each case value is what you registered at === static get observedAttributes === in your web component base_class */
        case 'age':
            if (setComponent.hasChanged(oldValue, newValue)){
                console.log(`${property} has changed from ${oldValue} to ${newValue}`)
                // DEV_NOTE # instead of console.log write your own custom event dispatcher...
            }
            break;
        case 'name':
            if (setComponent.hasChanged(oldValue, newValue)){
                console.log(`${property} has changed from ${oldValue} to ${newValue}`)
                // DEV_NOTE # instead of console.log write your own custom event dispatcher...
            }
            break;
        default:;
    }
}