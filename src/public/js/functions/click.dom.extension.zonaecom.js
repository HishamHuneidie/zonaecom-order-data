
// Info:
//     document = DOM de la web
//     chrome = SI definido
ms = 400;

if ( isZonaecomCheckout(l) ) {

    window.focus();

    // Paste data in inputs
    chrome.storage.sync.get(['data'], (result) => {
        let jsonData = result.data;
        let countryKey = 'country';
        let countryNode = document.querySelector(getName(countryKey));
        if (countryNode) {
            pasteData(countryNode, jsonData[countryKey]);
        }
        setTimeout(() => {
            for ( let k in jsonData ) {
                if (k !== countryKey) {
                    let node = document.querySelector(getName(k));
                    if (node) {
                        pasteData(node, jsonData[k]);
                    }
                }
            }
            if (document.activeElement) document.activeElement.blur();
        }, ms);
    });
} else if ( isOrderShokys(l) ) {

    // Copy data from client modal
    let jsonData = {
        country: document.querySelector('[name="country"]').value,
        firstName: document.querySelector('[name="firstName"]').value,
        lastName: document.querySelector('[name="lastName"]').value,
        company: document.querySelector('[name="company"]').value,
        address1: document.querySelector('[name="address1"]').value,
        address2: document.querySelector('[name="address2"]').value,
        zip: document.querySelector('[name="zip"]').value,
        city: document.querySelector('[name="city"]').value,
        province: document.querySelector('[name="province"]').value,
        phone: document.querySelector('[name="phone"]').value,
    };
    chrome.storage.sync.set({data: jsonData});
} else {
    // Nata por hacer
}