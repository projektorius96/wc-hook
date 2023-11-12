export function encodeBASE64(...params){
    return btoa(...params)
}

export function decodeBASE64(...params){
    return atob(...params)
}

export function registerAttrs(list){
    return (
        Array.from(
            new Map(list)
        )
    )
}

export function registerGetterSetter(_thisArg){
    const _attrs = _thisArg.constructor.observedAttributes;
    return (
        [...new Array(_attrs.length)].forEach((_, i)=>{

            _thisArg.setAttribute(_attrs[i][0], _attrs[i][1])
                Object.defineProperty(_thisArg, String(_attrs[i][0]), {
                    get() {
                        return _thisArg.getAttribute(String(_attrs[i][0]));
                    }
                    ,
                    set(newValue) {
                        return _thisArg.setAttribute(String(_attrs[i][0]), newValue);
                    }
                })

        })
    )
}

export function hasChanged(oldValue, newValue){
    if (oldValue !== newValue){
        return true;
    }
    else {
        return false;
    }
}