
// Info:
//     document = DOM de la web
//     chrome = SI definido

if ( isDraftOrderShokys(l) ) {

    if (!whatsappData.ordenData) {
        let input = document.querySelector('[name="country"]');
        if (!!input) {
            whatsappData.ordenData = {
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
        }
    }
}
