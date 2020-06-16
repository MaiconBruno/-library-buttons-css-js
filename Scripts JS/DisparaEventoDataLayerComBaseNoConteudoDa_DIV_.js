// Dispara um evento no datalayer do tagamanger quando um items ou msg espeficica foi exibido na tela.

  $( document ).ajaxSuccess(function( event, xhr, settings ) {
    console.log( "Triggered ajaxSuccess handler. The Ajax response was: " +
      xhr.responseText ); //exibe a resposta no console pra teste
    if(xhr.responseText == '<div class="blocoSucesso">Mensagem enviada com sucesso!<br></div>'){ //se resposta for o conteudo + div
		dataLayer.push({'event': 'EnvioOrcamento'}); // injeta o evento no datalayer do tagamanger
    }
});
