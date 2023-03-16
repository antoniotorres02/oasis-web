function mostrar(id){
    id.style.display = "initial";
}
function ocultar(id){
    id.style.display = "none";
}

function continuar(id){
    var div_s_categories = document.getElementById('s-categories');
    var div_s_historial = document.getElementById('s-historial');
    var div_delivery_options = document.getElementById('delivery-options');
    var div_payment = document.getElementById('payment');
    var div_resume = document.getElementById('resume');

    const arrayIds = [div_cest, div_shipment_directions, div_delivery_options, div_payment, div_resume];
    arrayIds.forEach(ocultar);

    if(id == 'shipment-directions'){
        div_shipment_directions.style.display = "inline-flex"
    }
    else if(id == 'resume'){
        div_resume.style.display = "inline-flex"
    }
    else{
        mostrar(document.getElementById(id));
    }
}

