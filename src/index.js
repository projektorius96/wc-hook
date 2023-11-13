import { registerAttrs, registerGetterSetter, hasChanged, encodeBASE64, decodeBASE64} from './Utils/index.js';
function setHTMLElement({wc_name, observings, observer, mount, props = []}){

    customElements.define(String( wc_name ), class extends HTMLElement {

        static get observedAttributes(){
            return [
                ...registerAttrs(observings)
            ]
        }
    
        constructor() {
            super();
            registerGetterSetter(this);
        }

        attributeChangedCallback(...params) {
            observer.call(this, ...params)
        }
    
    });

    return (
        Reflect.construct( customElements.get( String( wc_name ) ) , props )
    )

}

setHTMLElement[hasChanged.name] = hasChanged;
export {
    setHTMLElement,
    encodeBASE64,
    decodeBASE64
}

