// Esse script adiciona um parametro ao final da url ?Parms por link que houver no site com dominion externo
//exp : https://domain.com.br?user01
  
  //Wordpress
  jQuery(document).ready(function($) {
    var parameter ="?utm_source=organico&utm_medium=blog&utm_campaign=conversao";//parametro ao final
    var url;//variavel que aloca o url
    var domain = jQuery('a[href*="https://domain.com.br"]');//dominio que sera adicionado o parametro
    domain.each(function() {
      url = jQuery(this).prop("href");// inseri a url na variavel
      jQuery(this).prop("href", url + parameter); //adiciona o parametro 
    });
  });



  //Nativo
  var parameter ="?utm_source=organico&utm_medium=blog&utm_campaign=conversao";
  var url;
  var domain = $('a[href*="https://domain.com.br"]');
  domain.each(function() {
    url = $(this).prop("href");
    $(this).prop("href", url + parameter);
  });
