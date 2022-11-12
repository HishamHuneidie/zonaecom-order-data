
// Define variables
l = location;
if (typeof whatsappData === "undefined") {
    var whatsappData = {};
}
if (typeof linkDrafOrder === "undefined") {
    var linkDrafOrder = '';
}


// DEfine methods

function getName (key) {
    switch (key) {
        case 'country':
            return '[name="countryCode"]';
        case 'zip':
            return '[name="postalCode"]';
        case 'province':
            return '[name="zone"]';
        default:
            return `[name="${key}"]`;
    }
}

function pasteData (input, value) {
    input.focus();
    input.value = '';
    if ( input.localName === 'select' ) {
        setValueInSelect(input, value);
    } else {
        document.execCommand('insertText', false, value);
    }
    throwChange(input);
}

function setValueInSelect (select, value) {
    let opts = select.querySelectorAll('option');
    for ( let opt of opts ) {
        if ( opt.value === value ) opt.setAttribute('selected', 'selected');
        else opt.removeAttribute('selected');
    }
}

function throwChange (input) {
    if ( "createEvent" in document ) {
        let e = document.createEvent('HTMLEvents');
        e.initEvent('change', false, true);
        input.dispatchEvent(e);
    } else {
        input.fireEvent('onchange');
    }
}

function isZonaecomCheckout (l) {
    return l.host === 'app.zonaecom.com' && l.pathname.indexOf('/checkouts') != -1;
}

function isOrderShokys (l) {
    return l.host === 'voldercom.myshopify.com' && (l.pathname.indexOf('/admin/orders') != -1 || l.pathname.indexOf('/admin/draft_orders') != -1);
}

function isDraftOrderShokys (l) {
    return l.host === 'voldercom.myshopify.com' && (l.pathname.indexOf('/admin/draft_orders') != -1 || l.pathname.indexOf('/admin/draft_orders') != -1);
}

function processMobilePhone (text) {
    let number = text.replace('+', '').trim();
    if ( number.indexOf('34') !== 0 ) number = `34${number}`;

    return number;
}