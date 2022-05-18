var themeDots = document.getElementsByClassName('theme-dot')

var theme = localStorage.getItem('theme')

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