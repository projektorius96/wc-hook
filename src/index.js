import { registerAttrs, registerGetterSetter, hasChanged, encodeBASE64, decodeBASE64} from './Utils/index.js';
function setHTMLElement({wc_name, observings, life_cycling = {isObserved: ()=>false, isMounted: ()=>Boolean(!null), isDestroyed: ()=>Boolean(!!null)}, props = []}){

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
            life_cycling.isObserved.call(this, ...params)
        }

        connectedCallback(){
            life_cycling.isMounted()
        }

        disconnectedCallback(){
            life_cycling.isDestroyed()
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

