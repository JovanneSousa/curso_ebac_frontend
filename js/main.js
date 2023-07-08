$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000',{
    placeholder: '(__) _____-____'
    })
    $('#cep').mask('00000-000', {
        placeholder: '_____-___'
    })
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            tel:{
                required: true
            },
            ok: {
                required:true
            }
        },
        messages:{
            nome: 'Por favor insira seu nome',
            email: 'Por favor insira seu email',
            tel: 'Por favor, insira seu telefone',
            ok: 'É necessário aceitar os termos'
        },
        submitHandler: function(form){
            $('form').submit(function(e){
                e.preventDefault();

                $('.alert-success').addClass('visible');
                $('.alert-danger').removeClass('visible');
                $('#nome').val(' ');
                $('#email').val(' ');
                $('#tel').val(' ');
                $('#addres').val(' ');
                $('#cep').val(' ');
            })
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){ 
            $('.alert-danger').addClass('visible');
            $('.alert-success').removeClass('visible');
            }
        }
    })
})