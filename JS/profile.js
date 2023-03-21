function mostrar(id){
    id.style.display = "initial";
}
function ocultar(id){
    id.style.display = "none";
}

const div_s_categories = document.getElementById('s_categories');
const div_s_historial = document.getElementById('s_historial');
const div_s_wishlist = document.getElementById('s_wishlist');
const div_s_queries = document.getElementById('s_queries');
const div_s_profileData = document.getElementById('s_profileData');

function cambiar(id){
    const arrayIds = [div_s_categories, div_s_historial, div_s_wishlist, div_s_queries, div_s_profileData];
    arrayIds.forEach(ocultar);
    arrayIds.forEach(ocultar);
    
    if(id == div_s_categories){
        id.style.display="initial";
    }
    else if(id == div_s_historial){
        id.style.display = "initial";
    }
    else if(id == div_s_wishlist){
        id.style.display = "initial";
    }
    else if(id == div_s_queries){
        id.style.display = "initial";
    }
    else if(id == div_s_profileData){
        id.style.display = "initial";
    }  
    else{
        id.style.display = "initial";
    } 
}

