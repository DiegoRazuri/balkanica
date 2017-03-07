$(document).ready(function(){
	
	$(".btnC").on("click", function(e){
		e.preventDefault();
		let idBtn = $(this).attr("id");
		
		let idCollectionSelected = "";
		switch(idBtn){
			case "btnC1": idCollectionSelected = "#c1";
				break;
			case "btnC2": idCollectionSelected = "#c2";
				break;
			case "btnC3": idCollectionSelected = "#c3";
				break;
			case "btnC4": idCollectionSelected = "#c4";
				break;
			case "btnC5": idCollectionSelected = "#c5";
				break;
			case "btnC6": idCollectionSelected = "#c6";
				break;
				
			case "btnC7": idCollectionSelected = "#c7";
				break;
		}

		$(".galleryGrid").each(function(){
			if($(this).hasClass("galleryGridSelected") ){
				$(this).fadeOut();
				$(this).removeClass("galleryGridSelected");
				
			}
		});
		$(".btnCollectionList").each(function(){
			if($(this).hasClass("collectionSelected") ){
				$(this).removeClass("collectionSelected");
				
			}
		});

		idListSelection = idCollectionSelected.substr(2,1)

		$("#btnC"+ idListSelection).parent().addClass("collectionSelected");

		$(idCollectionSelected).fadeIn();
		$(idCollectionSelected).addClass("galleryGridSelected")


	});

	$("#btnMenu").on("click", function(){
		$(".navDisplay").slideToggle();
	});


	$('#btnCollections').on('click', function(){
		idBtn = this.id;
		s = -20;
		scroller(idBtn, s)
	});
	$('#btnLifestyle').on('click', function(){
		idBtn = this.id;
		s = -20;
		scroller(idBtn, s)
	});
	$('#btnAboutus').on('click', function(){
		idBtn = this.id;
		s = -100;
		scroller(idBtn, s)
	});
	$('#btnContact').on('click', function(){
		idBtn = this.id;
		s = -20;
		scroller(idBtn, s)
	});


	function scroller(idBtn, s){
		var strAncla = $("#"+idBtn).attr('data-direct');
		var presize = $(strAncla).offset().top
		
		if (screen.width <500){
			var size = presize-50;
		}else{

			var size = presize + s;
		}

		$(".navDisplay").slideToggle();

		$('body, html').stop(true, true).animate({
			scrollTop: size
		}, 1000);

	}
/*
	if(screen.width < 769){
		$(".galleryGrid").click(function(){

		})
	}
*/
	let pagFlag = 0;

	$("#btnCarruselForward").click(function(){
		if( pagFlag < 2){
			console.log(pagFlag)
			$(".wrapperThumb").animate({
				left : "-=100%"
			}, 1000, function(){
				pagFlag += 1;

			});
		}else{
			console.log("ya no se avanza")
			pagFlag = 0;
			$(".wrapperThumb").animate({
				left : "+=200%"
			}, 1000);
		}
		
	});

	$("#btnCarruselBack").click(function(){
		if(pagFlag >0){
			$(".wrapperThumb").animate({
				left : "+=100%"
			}, 1000, function(){
				pagFlag -= 1;

			});
		}
	
	});
});