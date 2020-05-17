$(document).ready(function(){
	$(".li").click(function(){
		let carregaUrl = this.id;
		carregaUrl = carregaUrl.concat("_conteudo.php");
		$.ajax({
			url: carregaUrl,
			success: function(data){
				$("#div_conteudo").html(data);
			}
		});
	});
});