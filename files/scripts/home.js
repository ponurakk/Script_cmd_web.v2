function divClick1() {
    var x = document.getElementById("htmldiv");
    var arr = document.getElementById("arr1");

    if (x.hasAttribute("hidden")){
        
        x.removeAttribute("hidden");
        arr.setAttribute("style", "animation: downanim .2s forwards;");
        arr.setAttribute("class", "arrow down");

    }else {
        x.setAttribute("hidden", "hidden");
        arr.setAttribute("style", "animation: upanim .2s forwards;");
        arr.setAttribute("class", "arrow up");

    }
    
}

function divClick2() {
    var x = document.getElementById("jsdiv");
    var arr = document.getElementById("arr2");

    if (x.hasAttribute("hidden")){

        x.removeAttribute("hidden");
        arr.setAttribute("style", "animation: downanim .2s forwards;");
        arr.setAttribute("class", "arrow down");
    
    }else {
        x.setAttribute("hidden", "hidden");
        arr.setAttribute("style", "animation: upanim .2s forwards;");
        arr.setAttribute("class", "arrow up");
    
    }
        
}

function divClick3() {
    var x = document.getElementById("cssdiv");
    var arr = document.getElementById("arr3");

    if (x.hasAttribute("hidden")){

        x.removeAttribute("hidden");
        arr.setAttribute("style", "animation: downanim .2s forwards;");
        arr.setAttribute("class", "arrow down");
    
    }else {
        x.setAttribute("hidden", "hidden");
        arr.setAttribute("style", "animation: upanim .2s forwards;");
        arr.setAttribute("class", "arrow up");
    
    }
        
}

function divClick4() {
    var x = document.getElementById("csharpdiv");
    var arr = document.getElementById("arr4");

    if (x.hasAttribute("hidden")){

        x.removeAttribute("hidden");
        arr.setAttribute("style", "animation: downanim .2s forwards;");
        arr.setAttribute("class", "arrow down");
    
    }else {
        x.setAttribute("hidden", "hidden");
        arr.setAttribute("style", "animation: upanim .2s forwards;");
        arr.setAttribute("class", "arrow up");
    
    }
        
}

function divClick5() {
    var x = document.getElementById("cppdiv");
    var arr = document.getElementById("arr5");

    if (x.hasAttribute("hidden")){

        x.removeAttribute("hidden");
        arr.setAttribute("style", "animation: downanim .2s forwards;");
        arr.setAttribute("class", "arrow down");
    
    }else {
        x.setAttribute("hidden", "hidden");
        arr.setAttribute("style", "animation: upanim .2s forwards;");
        arr.setAttribute("class", "arrow up");
    
    }
        
}
function divClick6() {
    var x = document.getElementById("pythondiv");
    var arr = document.getElementById("arr6");

    if (x.hasAttribute("hidden")){

        x.removeAttribute("hidden");
        arr.setAttribute("style", "animation: downanim .2s forwards;");
        arr.setAttribute("class", "arrow down");
    
    }else {
        x.setAttribute("hidden", "hidden");
        arr.setAttribute("style", "animation: upanim .2s forwards;");
        arr.setAttribute("class", "arrow up");
    
    }
        
}

function navShow() {
    var nav = document.getElementById("list");

    if (nav.getAttribute('class') === "nav-hide-id"){

        nav.setAttribute("class", "nav-show-id");

    }else{

        nav.setAttribute("class", "nav-hide-id");

    }
}