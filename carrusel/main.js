$(document).ready(function(){

	console.log("codigo cargado");

	//animacion de la navegacion

	$('.actHover0').hover(
    	function(e)
        {      
        	$("#btnNosotros").find("p").css({color: "white"});
        	$("#btnNosotros a").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#btnNosotros").find("p").css({color: "#4d4d4d"});
         	$("#btnNosotros a").css({backgroundColor: ""});
      	}
    );

	$('.actHover1').hover(
    	function(e)
        {      
        	$("#subNavProductos").css({display: "block"});
        	$("#btnProductos").find("p").css({color: "white"});
        	$("#btnProductos a").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavProductos").css({display: "none"});
         	$("#btnProductos").find("p").css({color: "#4d4d4d"});
         	$("#btnProductos a").css({backgroundColor: ""});
      	}
    );

    $('.actHover2').hover(
    	function(e)
        {      
        	$("#subNavServicios").css({display: "block"});
        	$("#btnServicios").find("p").css({color: "white"});
        	$("#btnServicios a").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavServicios").css({display: "none"});
         	$("#btnServicios").find("p").css({color: "#4d4d4d"});
         	$("#btnServicios a").css({backgroundColor: ""});
      	}
    );

    $('.actHover3').hover(
    	function(e)
        {      
        	$("#subNavSoluciones").css({display: "block"});
        	$("#btnSoluciones").find("p").css({color: "white"});
        	$("#btnSoluciones a").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavSoluciones").css({display: "none"});
         	$("#btnSoluciones").find("p").css({color: "#4d4d4d"});
         	$("#btnSoluciones a").css({backgroundColor: ""});
      	}
    );

    $('.actHover4').hover(
    	function(e)
        {      
        	$("#subNavSoporte").css({display: "block"});
        	$("#btnSoporte").find("p").css({color: "white"});
        	$("#btnSoporte a").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#subNavSoporte").css({display: "none"});
         	$("#btnSoporte").find("p").css({color: "#4d4d4d"});
         	$("#btnSoporte a").css({backgroundColor: ""});
      	}
    );

    $('.actHover5').hover(
    	function(e)
        {      
        	$("#btnContacto").find("p").css({color: "white"});
        	$("#btnContacto a").css({backgroundColor: "#0071b5"});
      	},
      	function(e)
      	{
         	$("#btnContacto").find("p").css({color: "#4d4d4d"});
         	$("#btnContacto a").css({backgroundColor: ""});
      	}
    );

    

	//$("#btnProductos").mouseover(desliz);
	//$("#btnProductos").mouseout(deslizFuera);



	//HOVER EN BOTONES DE CRUZ



	function ap (ico){
		return function(){
			$(ico).css("display","block");
		}
	}

	function ds (ico){
		return function(){
			$(ico).css("display","none");
		}
	}

	var apIcoT = ap(".cruzSelect1");
	var dsIcoT = ds(".cruzSelect1");
	var apIcoR = ap(".cruzSelect2");
	var dsIcoR = ds(".cruzSelect2");
	var apIcoG = ap(".cruzSelect3");
	var dsIcoG = ds(".cruzSelect3");
	var apIcoC = ap(".cruzSelect4");
	var dsIcoC = ds(".cruzSelect4");

	$("#btn1").mouseover(apIcoT);
	$("#btn1").mouseout(dsIcoT);
	$("#btn2").mouseover(apIcoR);
	$("#btn2").mouseout(dsIcoR);
	$("#btn3").mouseover(apIcoG);
	$("#btn3").mouseout(dsIcoG);
	$("#btn4").mouseover(apIcoC);
	$("#btn4").mouseout(dsIcoC);


	//HOVER EN BOTONES DE REDES

	function ap (ico){
		return function(){
			$(ico).css("display","block");
		}
	}

	function ds (ico){
		return function(){
			$(ico).css("display","none");
		}
	}

	var apIcoT = ap(".icoFbcolor");
	var dsIcoT = ds(".icoFbcolor");
	var apIcoR = ap(".icoTcolor");
	var dsIcoR = ds(".icoTcolor");
	var apIcoG = ap(".icoLcolor");
	var dsIcoG = ds(".icoLcolor");
	var apIcoC = ap(".icoYcolor");
	var dsIcoC = ds(".icoYcolor");

	$("#btn5").mouseover(apIcoT);
	$("#btn5").mouseout(dsIcoT);
	$("#btn6").mouseover(apIcoR);
	$("#btn6").mouseout(dsIcoR);
	$("#btn7").mouseover(apIcoG);
	$("#btn7").mouseout(dsIcoG);
	$("#btn8").mouseover(apIcoC);
	$("#btn8").mouseout(dsIcoC);

	//HOVER EN BOTONES DE NAVEGACION

	function ap (ico){
		return function(){
			$(ico).css("display","block");
		}
	}

	function ds (ico){
		return function(){
			$(ico).css("display","none");
		}
	}

	var apIcoT = ap(".icoFlechaSelect1");
	var dsIcoT = ds(".icoFlechaSelect1");
	var apIcoR = ap(".icoFlechaSelect2");
	var dsIcoR = ds(".icoFlechaSelect2");
	var apIcoG = ap(".icoFlechaSelect3");
	var dsIcoG = ds(".icoFlechaSelect3");
	var apIcoC = ap(".icoFlechaSelect4");
	var dsIcoC = ds(".icoFlechaSelect4");

	$("#btnProductos").mouseover(apIcoT);
	$("#btnProductos").mouseout(dsIcoT);
	$("#btnServicios").mouseover(apIcoR);
	$("#btnServicios").mouseout(dsIcoR);
	$("#btnSoluciones").mouseover(apIcoG);
	$("#btnSoluciones").mouseout(dsIcoG);
	$("#btnSoporte").mouseover(apIcoC);
	$("#btnSoporte").mouseout(dsIcoC);

	function abreviar  (div, carac){
		
		$(div).each(function(){
			var contenidoPermitido = "";
			var contenido = $(this).text();
			for(i=0; i<= contenido.length; i++){
				if(i < carac){
					contenidoPermitido += contenido[i];
					
				}
			}
			if(contenido.length >contenidoPermitido.length){
			contenidoPermitido += "..."
				
			}
			$(this).html(contenidoPermitido);
		});
		console.log("se abrevio")
		
	}

	// boton de ultima noticia

	function renderear(datos, templateRendear, wrapperInsercion){
		var itemsTemplate = _.template(templateRendear.html());
		var activarRender = itemsTemplate({conexionTemplate : datos});
		wrapperInsercion.html(activarRender);
		
		//funcionalidad de componentes de la seccion
		

	}

	templateRendear = $("#btnNoticiaHome")
	wrapperInsercion = $("#wrapperInsercion")


	$.getJSON("ultimaNoticia.php", function(data){
		console.log(data);
		renderear(data, templateRendear, wrapperInsercion);
		divBtnNoticiasHome = $(".contenidoBtnNoticiasHome");
		titular = $(".wrapperContenidoNoticia").find("h3").html();
		cant_carac = titular.length;

		console.log(cant_carac)
		if(titular.length<45)
		{
			max_carac = 196;
			abreviar(divBtnNoticiasHome, max_carac);
		}else{
			if(titular.length<80)
			{
				max_carac = 149;
				abreviar(divBtnNoticiasHome, max_carac);
				
			}else{
				if(titular.length < 120){
					max_carac = 109;
					abreviar(divBtnNoticiasHome, max_carac);
				}
			}

		}
		//abreviar(divBtnNoticiasHome,max_carac);
	});

	//BTN SOLUCIONES

	templateRendearBtnSoluciones = $("#templateBtnSoluciones");
	wrapperInsercionBtnSoluciones = $("#subNavSoluciones");
	
	
	templateRenderearFooterBtnSoluciones = $("#templateFooterBtnSoluciones");
	wrapperInsercionFooterBtnSoluciones = $("#footersubNavSoluciones");

	templateRenderearCarruselBtnSoluciones = $("#templateVinetaCarrusel");
	wrapperInsercionCarruselBtnSoluciones = $(".ca-wrapper");

	$.getJSON("consultaBtnSoluciones.php", function(data){
		console.log(data);
		renderear(data, templateRendearBtnSoluciones, wrapperInsercionBtnSoluciones);
		renderear(data, templateRenderearFooterBtnSoluciones, wrapperInsercionFooterBtnSoluciones);
		renderear(data, templateRenderearCarruselBtnSoluciones, wrapperInsercionCarruselBtnSoluciones);
	
		divSoluciones = $(".textosDescrip");
		abreviar(divSoluciones, 196);

		$('#ca-container').contentcarousel({

            // speed for the sliding animation
            sliderSpeed     : 500,
            // easing for the sliding animation
            sliderEasing    : 'easeOutExpo',
            // speed for the item animation (open / close)
            itemSpeed       : 500,
            // easing for the item animation (open / close)
            itemEasing      : 'easeOutExpo',
            // number of items to scroll at a time
            scroll          : 1 

        });
	});

	//VALIDACION DE FORM DE SECCION CONTACTO
	function clean_data (){
		$("#txtNombre").val("");
		$("#txtEmpresa").val("");
		$("#txtRuc").val("");
		$("#txtTelf").val("");
		$("#txtCorreo").val("");
		$("#txtMensaje").val("");
	}

	function validarForm(){

		mensaje_validacion_1 = "El campo ";
		mensaje_validacion_2 = " no puede estar vacio, por favor asegurese de ingresar la información completa.";

		if($("#txtNombre").val() == ""){
			$("#mensajeError").css("display", "block");
			$("#mensajeError p").html(mensaje_validacion_1+ "nombre" +mensaje_validacion_2);
			setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
			$("#txtNombre").focus();
			return false;
		}
		if($("#txtEmpresa").val() == ""){
			$("#mensajeError").css("display", "block");
			$("#mensajeError p").html(mensaje_validacion_1+ "empresa" +mensaje_validacion_2);
			setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
			$("#txtEmpresa").focus();
			return false;
		}
		if($("#txtRuc").val() == ""){
			$("#mensajeError").css("display", "block");
			$("#mensajeError p").html(mensaje_validacion_1+ "RUC" +mensaje_validacion_2);
			setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
			$("#txtRuc").focus();
			return false;
		}
		if($("#txtTelf").val() == ""){
			$("#mensajeError").css("display", "block");
			$("#mensajeError p").html(mensaje_validacion_1+ "teléfono" +mensaje_validacion_2);
			setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
			$("#txtTelf").focus();
			return false;
		}
		if($("#txtCorreo").val() == ""){
			$("#mensajeError").css("display", "block");
			$("#mensajeError p").html(mensaje_validacion_1+ "correo" +mensaje_validacion_2);
			setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
			$("#txtCorreo").focus();
			return false;
		}
		if($("#txtMensaje").val() == ""){
			$("#mensajeError").css("display", "block");
			$("#mensajeError p").html(mensaje_validacion_1+ "mensaje" +mensaje_validacion_2);
			setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
			$("#txtMensaje").focus();
			return false;
		}

		return true;		
	}

	$("#boton").click(function(){

		valides = validarForm();
		if(valides == true){

			console.log("formulario validado");

			$.post("enviar.php",$("#formdata").serialize(),function(res){
				if(res==1){
					console.log(res);
					$("#mensajeExito").css("display", "block");
					setTimeout(function(){
						$("#mensajeExito").css("display", "none");
						
					}, 4000);
					
				}else{
					$("#mensajeError").css("display", "block");

					setTimeout(function(){
						$("#mensajeError").css("display", "none");
						
					}, 4000);
				}
			});
			clean_data();
		}
	});


});