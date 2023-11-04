import './global.css';
import { registerAttrs, registerGetterSetter, encodeBASE64/* , decodeBASE64 */} from './src/Utils/index.js';
import { setObserver } from './src/Observer/index.js';

customElements.define('wc-matrix', class extends HTMLElement {

    static get observedAttributes(){
        return [
            ...registerAttrs([
                ['age', 64],
                ['encodings', encodeBASE64([8, 16, 32, 64])],
            ])
        ]
    }

    constructor() {
        super();
        registerGetterSetter(this);
    }

    attributeChangedCallback(...params) {
        setObserver.call(this, /* decodeBASE64,  */...params);
    }

});
globalThis.wc_matrix = Reflect.construct(customElements.get('wc-matrix'), [])
document.body.appendChild(
    globalThis.wc_matrix 
)

///*  === EXAMPLES # HOW TO USE GETTER/SETTER PAIRS FOR EACH OF ATTRIBUTES OBSERVED === */
/* globalThis.wc_matrix.age */// # GETTER EXAMPLE
/* globalThis.wc_matrix.age = Math.random() */// SETTER EXAMPLE
/* globalThis.wc_matrix.encodings */// # GETTER EXAMPLE
/* globalThis.wc_matrix.encodings = [] */// SETTER EXAMPLE