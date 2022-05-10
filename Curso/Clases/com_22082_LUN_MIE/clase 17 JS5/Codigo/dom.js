function mostrarAlerta(){
    alert('Hizo click');
}
function hacerClick(){
    document.getElementsByTagName('p') [0].onclick=mostrarAlerta();
}
window.onload=hacerClick;
