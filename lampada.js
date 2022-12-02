const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function lampOn (){

    lamp.src = './images/ligada.jpg';

}

turnOn.addEventListener ( 'click', lampOn );

function lampOff (){

    lamp.src = './images/desligada.jpg';

}

turnOff.addEventListener ( 'click', lampOff );