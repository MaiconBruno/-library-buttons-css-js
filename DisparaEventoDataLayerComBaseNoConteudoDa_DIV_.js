
  $( document ).ajaxSuccess(function( event, xhr, settings ) {

    console.log( "Triggered ajaxSuccess handler. The Ajax response was: " +
      xhr.responseText );
    if(xhr.responseText == '<div class="blocoSucesso">Mensagem enviada com sucesso!<br></div>'){
		dataLayer.push({'event': 'EnvioOrcamento'});
    }

});
