let menuItem = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0],
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv')[0],
    menuItemLi = document.createElement('li'),
    prompti = document.getElementById('prompt');

    document.body.style.backgroundImage = "url('img/apple_true.jpg')";

    menu.insertBefore(menuItem[2], menuItem[1]); 

    title.textContent = "Мы продаем только подлинную технику Apple";

    adv.remove(); 

    menuItemLi.classList.add("menu-item");                          
    menuItemLi.textContent = "Пятый элемент";                       
    menu.appendChild(menuItemLi);  

    //prompti.innerHTML = "Ваше отношение к технике Apple?"; 

    let yourOpinion = prompt("Ваше отношение к технике Apple?");   
    prompti.textContent = yourOpinion;










