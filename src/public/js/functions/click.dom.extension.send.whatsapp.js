
// Info:
//     document = DOM de la web
//     chrome = SI definido

if ( isDraftOrderShokys(l) ) {

    if (!linkDrafOrder) {
        let input = document.querySelector('input.Polaris-TextField__Input_30ock[disabled]');
        if (!!input) {
            linkDrafOrder = input.value;
        }
    }

    let telefono = processMobilePhone(whatsappData.ordenData.phone);
    let mensaje = `*Hola ${whatsappData.ordenData.firstName}*%0ATe dejaste tu *rizador* en el carrito.%0AYa puedes terminar tu pedido 🛒%0AClic aquí para confirmar 👇%0A${linkDrafOrder}`;
    let url = `https://web.whatsapp.com/send/?phone=${telefono}&text=${mensaje}`;
    window.open(url, "_new");
}
