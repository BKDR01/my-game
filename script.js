
let body = document.querySelector('body')
let ken = document.querySelector('.kengi');

function showAlert() {
    alert("Siz notog'ri javob tanladingiz (Trixni oqing :)");
}
function showAlert2() {
    alert("Siz tog'ri javob tanladingiz");
    ken.style.display = 'block';
}
function showAlert4() {
    alert("Siz notog'ri javob tanladingiz");
}
function kon() {
    alert("Siz hamma savollarni tugattingiz shuning uchun boshiga qaytasiz")
}
function none(){
    a.style.display = 'none';
}
none();
function bir() {
    a.style.display = 'block';
    h3.style.display = 'none';
}
function swich() {
    let javob = Number(prompt("Nechinchi savolga javob kerak?"));
    switch (javob) {
        case 1:
            alert("javob: C)");
            break;
        case 2:
            alert("javob: A)");
            break;
        case 3:
            alert("javob: B)");
            break;
        case 4:
            alert("javob: C)");
            break;
        default:
            alert("bunday uraven yo'q");
            break;
    }
}
