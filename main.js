const form = document.getElementById('form');
let formSubmitted = false;


form.addEventListener('submit', function(event){
    event.preventDefault();
    
    const res = document.getElementById('resultado');
    const campoA = parseFloat(document.getElementById('campo-a').value);
    const campoB = parseFloat(document.getElementById('campo-b').value);

    if(campoB > campoA){
        
        res.textContent= 'Validação feita com sucesso. Campo A é menor que Campo B'
        campoA.value ='';
        campoB.value ='';
        
    } else {
        res.textContent = "ERRO: Campo A precisa ter valor menor que Campo B"
    }

})
