$(document).ready(function(){
	//ready-pronto
    //função é chamada quando o documentp terminar de renderizar (exibir todos os componentes)	
    //$ - construtor (seletor)

	$("#f1").click(function(){
	
	//$("#f1") - sselecionei componente com id f1
	// # - id, . - class, sem nada é um componente HTML
	//.click - tornei sensivel a ser clicado
	
	$("#cor").css("color","red");
	
	
	});
	
	$("#f2").click(function(){
		$("#area").css("width", "500px");
	});
	
	$("#f3").click(function(){
        $("p", $("#area")).css("background", "black");	
	});
	
	$("#l1").click (function(){
		$("li:first").css("background", "blue");
	});
	
	$("#l2").click (function(){
		$("li:last").css("background", "green");
	});
	
	$("#l3").click (function(){
		$("li:odd").css("background", "purple");
	});
	
	$("#l4").click (function(){
		$("li:even").css("background", "pink");
	});
	
	$("#l5").click (function(){
		$("li:eq(3)").css("background", "yellow");
	});

    $("#foto").click(function(){
		var arquivo = $("#foto").attr("src");
		//le um atributo do componente
		$("#foto").fadeOut("slow");
		alert (arquivo);
		
		$("#foto").attr("src", "cachorrinho.jpg");
		$("#foto").slideDown("slow");
	});
	
	$("#foto").mouseover(function(){
		$("#foto").addClass("destaqueFoto");
	});
	
});