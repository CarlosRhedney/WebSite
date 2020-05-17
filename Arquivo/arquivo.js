/* Trecho de codigo que traz a div float-menu, quando clicado no botao */
jQuery(document).ready(function(){
	jQuery("#btn_menu").click(function(){
		jQuery("#float_menu").toggleClass("active");
	});
	jQuery("#btn_close").click(function(){
		jQuery("#float_menu").toggleClass("active");
	});
});
/* Fim float-menu */