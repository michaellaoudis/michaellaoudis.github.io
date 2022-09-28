var themeDots = document.getElementsByClassName('theme-dot');
var theme = localStorage.getItem('theme');

isShow = false;
// Adv TCP/IP
function showHideTcpPage() {
    manSection = document.querySelector(".toggle-TCP-content");
    var arrow = document.getElementById('tcp-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}
// Contingency Planning
function showHideContinPage() {
    manSection = document.querySelector(".toggle-Contin-content");
    var arrow = document.getElementById('contin-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}

// Attack Techniques
function showHideAttackPage() {
    manSection = document.querySelector(".toggle-Attack-content");
    var arrow = document.getElementById('atk-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}
// Sec Cisco Routers
function showHideCiscoPage() {
    manSection = document.querySelector(".toggle-Cisco-content");
    var arrow = document.getElementById('cisco-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}
// Harden Windows
function showHideWinPage() {
    manSection = document.querySelector(".toggle-Win-content");
    var arrow = document.getElementById('win-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}
// Harden Linux
function showHideLinPage() {
    manSection = document.querySelector(".toggle-Lin-content");
    var arrow = document.getElementById('lin-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}
// Internet Security WWW
function showHideWWWPage() {
    manSection = document.querySelector(".toggle-WWW-content");
    var arrow = document.getElementById('www-arrow')
    if(isShow){
        arrow.className = 'fa fa-arrow-down';
        manSection.style.display = "none";
        isShow = false;
    } else{
        arrow.className = 'fa fa-arrow-down open';
        manSection.style.display = "block";
        isShow = true;
    }
}


if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

for (var i=0; themeDots.length>i; i++){
    themeDots[i].addEventListener('click', function(){
        var mode = this.dataset.mode
        console.log('Option clicked', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode == 'light'){
        document.getElementById('theme-style').href = 'default.css'
    }
    
    if(mode == 'blue'){
        document.getElementById('theme-style').href = 'blue.css'
    }

    if(mode == 'green'){
        document.getElementById('theme-style').href = 'green.css'
    }

    if(mode == 'purple'){
        document.getElementById('theme-style').href = 'purple.css'
    }

    localStorage.setItem('theme', mode)
}