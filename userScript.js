const params = new URLSearchParams(window.location.search);

console.log(params.get('userName')); 
console.log(params.get('password'));
console.log(params.get('email'));
console.log(params.get('positionCheck'));

document.write(params.get('userName'));