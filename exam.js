let el,elTerm,elCheck;
el = document.getElementById('form')
elTerm = document.getElementById('term');
elCheck = document.getElementById('checkbox');

function checkValid(){
    if (!elTerm.checked){
        elCheck.innerHTML = ' * you must agree to the term';
    }
}
el.addEventListener('submit',checkValid,false);