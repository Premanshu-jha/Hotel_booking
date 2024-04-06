const lists = document.querySelectorAll('li');
const hotels = document.querySelector('#hotels');
const mapview = document.querySelector('#map-view');

lists[0].addEventListener('click',()=>{

    lists[0].style.backgroundColor = 'aqua';
    lists[0].style.padding = '0.5%';
    lists[0].style.borderRadius = '10%';
    lists[1].style.backgroundColor = '#e0e0e0';


    hotels.style.display = 'flex';
    hotels.style.flexWrap = 'wrap';
    hotels.style.gap = '5%';

    mapview.style.display = 'none';
});

lists[1].addEventListener('click',()=>{

    lists[1].style.backgroundColor = 'aqua';
    lists[1].style.padding = '0.5%';
    lists[1].style.borderRadius = '10%';
    lists[0].style.backgroundColor = '#e0e0e0';

    hotels.style.display = 'none';
    mapview.style.display = 'block';
});