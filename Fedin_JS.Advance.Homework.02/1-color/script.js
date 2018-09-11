let reg = /#[0-9a-f]{6}/ig
let color = prompt('Write color code')
if (reg.test(color)) {
    alert('Ok!')
} else {
    alert("Wrong")
}
