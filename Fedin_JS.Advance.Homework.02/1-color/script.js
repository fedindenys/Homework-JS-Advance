//let reg = /#[0-9a-f]{6}/ig
//let color = "color:#ABCDEF; background-color:#111111; bad-colors:f#fddee #fd2";
//alert (color.match(reg))

//let name = prompt('Write your name');
//let reg = /\b\w/ig;
//let newName = name.replace(reg, 'Z');
//alert('Your new name is: '+newName)

let passport = prompt('Write your passport code');
let reg = /^[А-Яа-я]{2}[0-9]{6}$/;
if(reg.test(passport)){
    alert('Yes')
}
else{
    alert('No')
}