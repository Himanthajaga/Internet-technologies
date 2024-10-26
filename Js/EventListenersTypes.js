console.log("Event Listeners Types file is loaded");

const box = document.querySelector('.box');

box.addEventListener('click', function () {
    console.log('box clicked');
})

box.addEventListener('dblclick', function () {
    console.log('box double clicked');
})

box.addEventListener('mousedown', function () {
    console.log('mouse pressed');
})

box.addEventListener('mouseup', function () {
    console.log('box mouseup');
})
box.addEventListener('mouseover', function () {
    console.log('Mouse over');
})
box.addEventListener('mouseout', function () {
    console.log('Mouse mouseout');
})
box.addEventListener('mousemove', function () {
    console.log('mouse move');
})
   