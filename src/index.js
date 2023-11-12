import { registerAttrs, registerGetterSetter, hasChanged, encodeBASE64, decodeBASE64} from './Utils/index.js';
export function setComponent({wc_name, observings, notifier, props = []}, _HTMLInterface = HTMLElement){

    customElements.define(String(wc_name), class extends _HTMLInterface {

        static get observedAttributes(){
            return [
                ...registerAttrs(observings?.entries())
            ]
        }
    
        constructor() {
            super();
            registerGetterSetter(this);
        }
    
        attributeChangedCallback(...params) {
            notifier.bind(this, ...params);
        }
    
    });

    return (
        Reflect.construct( customElements.get( String( wc_name ) ) , [ ...props ] )
    )

}
setComponent[hasChanged.name] = hasChanged;

export {
    encodeBASE64,
    decodeBASE64
}

// const M1 = new Map([
//     ['age', 64],
//     ['encodings', encodeBASE64([8, 16, 32, 64])],
// ])

// globalThis.wc_matrix = Reflect.construct(setComponent( 'wc-matrix', M1.entries() ), [])
// document.body.appendChild(
//     globalThis.wc_matrix 
// )

///*  === EXAMPLES # HOW TO USE GETTER/SETTER PAIRS FOR EACH OF ATTRIBUTES OBSERVED === */
/* globalThis.wc_matrix.age */// # GETTER EXAMPLE
/* globalThis.wc_matrix.age = Math.random() */// SETTER EXAMPLE
/* globalThis.wc_matrix.encodings */// # GETTER EXAMPLE
/* globalThis.wc_matrix.encodings = [] */// SETTER EXAMPLE