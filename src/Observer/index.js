// function hasChanged(oldValue, newValue){
//     if (oldValue !== newValue){
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// export function setObserver(decoder ,property, oldValue, newValue) {
//     // DEV_NOTE # use decoder before passing it as 2nd argument at attributeChangedCallback() in your base_class
//     switch (property) {
//         /* DEV_NOTE # each case value is what you registered at === static get observedAttributes === in your web component base_class */
//         case 'age':
//             if (hasChanged(oldValue, newValue)){
//                 console.log(`${property} has changed from ${oldValue} to ${newValue}`)
//                 // DEV_NOTE # instead of console.log write your own custom event dispatcher...
//             }
//             break;
//         case 'name':
//             if (hasChanged(oldValue, newValue)){
//                 console.log(`${property} has changed from ${oldValue} to ${newValue}`)
//                 // DEV_NOTE # instead of console.log write your own custom event dispatcher...
//             }
//             break;
//         default:;
//     }
// }