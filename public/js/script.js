$(function() {
    $('input:text').first().focus();
} );

// submetendo o formulário
$('form').submit(function(){

    var formulario = $(this);

    var obrigatorio = $('.obrigatorio');
    var campo = $(obrigatorio).closest('input');

    var conteudo = verificaVazio($(campo));

    if ( ! conteudo ) {

        $.ajax({
            url: '/ajax',
            type: 'POST',
            data: $('form').serialize(),
            dataType: 'json',
            success: function( data ) {
                $('.recebeDados').html(data.usuario + data.senha);
            },
            complete: function() {
                limpaCampo();
                focoText();
            },
        });
    }
    return false; 
} );

// verifica se o campo está vazio
var verificaVazio = function(texto) {
    var valor = undefined;
    for (var i = 0; i < texto.length; i++) {
        if ( $(texto[i]).val() == "" ) {
            $(texto[i]).addClass('vazio');
            valor = true;
        }
        else if ( $(texto[i]).val() !== "" && $(texto[i]).attr('class') == 'obrigatorio vazio' ) {
            $(texto[i]).removeClass('vazio');
            valor = false;
        }
    }
    return valor == true ? true : false;
};

// limpa o campo após o submit
var limpaCampo = function() {
    $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
    $(':checkbox, :radio').prop('checked', false);
};
    
// dá o foco no primeiro campo texto
var focoText = function() {
    $('input:text').first().focus();
};
