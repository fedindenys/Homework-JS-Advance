let name = prompt('Write your name & sName');
let reg = /\b\w/ig;
let newName = name.replace(reg, 'Z');
alert('Your new name is: '+newName)
