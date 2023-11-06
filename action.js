function myFunction(containerClothes)
{
    var menu = document.getElementById("containerClothes");
    if (menu.classList.contains('hideClothes')) {
        menu.classList.add('showClothes');
        menu.classList.remove('hideClothes');
        document.documentElement.style.overflowY =  "hidden";
        document.documentElement.style.overflowX =  "hidden";  
    }else{
        menu.classList.add('hideClothes');
        menu.classList.remove('showClothes');
        document.documentElement.style.overflowY =  "auto"; 
        document.documentElement.style.overflowX =  "hidden";
    }
}

function myFunction2(containerAnimacao) {
    var display = document.getElementById("containerAnimacao");
    if (display.classList.contains('hide')){ 
    display.classList.add("show");
    display.classList.remove("hide");
    document.documentElement.style.overflowY =  "hidden";
    document.documentElement.style.overflowX =  "hidden";     
    }else{
        display.classList.add("hide");
    display.classList.remove("show");
    document.documentElement.style.overflowY =  "auto"; 
    document.documentElement.style.overflowX =  "hidden"; 
    }
    
 
}


function myFunction3(containerFaleConosco) {
    var display = document.getElementById("containerFaleConosco");
    if (display.classList.contains('hideFaleConosco')){ 
    display.classList.add("showFaleConosco");
    display.classList.remove("hideFaleConosco");
    document.documentElement.style.overflowY =  "hidden"; 
    document.documentElement.style.overflowX =  "hidden";    
    }else{
        display.classList.add("hideFaleConosco");
    display.classList.remove("showFaleConosco");
    document.documentElement.style.overflowY =  "auto"; 
    document.documentElement.style.overflowX =  "hidden"; 
    }
    
 
}

function myFunction4(containerPesquisa) {
    var display = document.getElementById("containerPesquisa");
    if (display.classList.contains('hidePesquisa')){ 
    display.classList.add("showPesquisa");
    display.classList.remove("hidePesquisa");
    document.documentElement.style.overflowY =  "hidden"; 
    document.documentElement.style.overflowX =  "hidden"; 

    }else{
        display.classList.add("hidePesquisa");
    display.classList.remove("showPesquisa");
    document.documentElement.style.overflowY =  "auto"; 
    document.documentElement.style.overflowX =  "hidden";

    }
    
 
}
