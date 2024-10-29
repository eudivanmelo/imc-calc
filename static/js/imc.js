

function calcular_imc() {
    try{
        const peso = document.querySelector('#peso').value;
        const altura = document.querySelector('#altura').value;

        if (!peso){
            alert('Informe o peso!')
            return;
        }
        
        if (!altura){
            alert('Informe a altura!');
            return;
        }

        const imc = peso / (altura * altura);

        var r = document.querySelector('#resultado');
        /* 
        Abaixo do Peso (IMC abaixo de 18,5) ...
        Peso Normal (IMC entre 18,5 e 24,9) ...
        Sobrepeso (IMC entre 25 e 29,9) ...
        Obesidade (IMC entre 30 e 34,9) ...
        Obesidade Grau II (IMC entre 35 e 39,9) ...
        Obesidade Grau III (IMC acima de 40) ou obesidade mórbida.
        */
        if (imc < 18.5)
            r.innerHTML = '<p class="t-0">Abaixo do Peso</p>';
        else if (imc >= 18.5 && imc < 25)
            r.innerHTML = '<p class="t-1">Peso Normal</p>';
        else if (imc >= 25 && imc < 30)
            r.innerHTML = '<p class="t-2">Sobrepeso</p>';
        else if (imc >= 30 && imc < 35)
            r.innerHTML = '<p class="t-3">Obesidade</p>';
        else if (imc >= 35 && imc < 40)
            r.innerHTML = '<p class="t-4">Obesidade Grau II</p>';
        else
            r.innerHTML = '<p class="t-5">Obesidade Grau III</p>';
        
    }catch (error){
        console.log(error);
    }
}