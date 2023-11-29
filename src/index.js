import { registerAttrs, registerGetterSetter, hasChanged, encodeBASE64, decodeBASE64} from './Utils/index.js';
function setHTMLElement(wc_name, {_constructor = {body: null, props : []}, observings, lifecycles = {isObserved: ()=>false, isMounted: ()=>Boolean(!null), isDestroyed: ()=>Boolean(!!null)}}){

    customElements.define(String( wc_name ), class extends HTMLElement {

        static get observedAttributes(){
            return [
                ...registerAttrs(observings)
            ]
        }
    
        constructor(...props) {
            super();
            registerGetterSetter(this);
            
            if (_constructor.body !== null && typeof _constructor.body === 'function'){
                _constructor.body.call(this, ...props)
            }
        }

        attributeChangedCallback(...params) {
            lifecycles.isObserved(...params)
        }

        connectedCallback(){
            lifecycles.isMounted()
        }

        disconnectedCallback(){
            lifecycles.isDestroyed()
        }
    
    });

    return (
        Reflect.construct( customElements.get( String( wc_name ) ) , _constructor.props )
    )

}

setHTMLElement[hasChanged.name] = hasChanged;
export {
    setHTMLElement,
    encodeBASE64,
    decodeBASE64
}

