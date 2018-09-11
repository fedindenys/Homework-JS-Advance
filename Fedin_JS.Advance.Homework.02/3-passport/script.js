let passport = prompt('Write your passport code');
let reg = /^[А-Яа-я]{2}[0-9]{6}$/;
if (reg.test(passport)) {
    alert('Yes')
} else {
    alert('No')
}
