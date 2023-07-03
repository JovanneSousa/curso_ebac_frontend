$(document).ready(function(){
    $('#cpf').mask('000.000.000-00', {
        placeholder: '___.___.___-__'
    });
    $('#telefone').mask('(99) 99999-9999', {
        placeholder: '(__) _____-____'
    });
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            telefone:{
                required: true
            },
            cpf:{
                required: true 
            },
            adress:{
                required: true
            }
        },
        messages:{
            nome: 'Por favor, insira seu nome',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira o seu CPF',
            adress: 'Por favor, insira o seu endereço'
        },
        submitHandler: function(form){
            if(form){
                function validaNomeCompleto(){
                    const nomeCompleto = $('#nome').val().split(' ');
                    return nomeCompleto.length >= 2;
                }
                if(!validaNomeCompleto()){
                    alert('Insira seu nome completo')
                }else{
                    alert('Cadastro realizado')
                }
            }
        },
        invalidHandler: function(evento, validador){
        let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){ 
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
})