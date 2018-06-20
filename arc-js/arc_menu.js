
function side_menu_s_i(){
	$("#arc_mb").addClass("menu_on");
    $("#arc_mb").removeClass("menu_off");
    $("#arc_main").animate({right:'200px',left:"-200px"});
	$("#arc_side").animate({right: '0px'});
}

function side_menu_s_o(){
	$("#arc_mb").addClass("menu_off");
    $("#arc_mb").removeClass("menu_on");
    $("#arc_main").animate({right:0,left:0});
	$("#arc_side").animate({right: '-200px'});
}

$(document).ready(function(){
    $("#arc_mb").click(function() {

			if (document.getElementById("arc_mb").classList.contains('menu_off')) {
    			side_menu_s_i();
			}
			else if (document.getElementById("arc_mb").classList.contains('menu_on')) {
    			side_menu_s_o();
			}

		});

		$("#arc_hb").click(function(){

			$('#arc_main').load("content/pages/static/rezumat/index.html");

		});

		$("#arc_cb").click(function(){

			$('#arc_main').load("content/pages/static/contact/index.html");

		});

		$("#arc_ab").click(function(){

			$('#arc_main').load("content/pages/static/activitati/index.html");

		});

		$("#arc_ob").click(function(){

			$('#arc_main').load("content/pages/static/obiective/index.html");

		});

		$("#plus_aroundy").click(function(){

			$('#arc_main').load("content/pages/dynamic/efm_dpage.html");
		});



		$('#arc_main').load("content/pages/static/rezumat/index.html");
});
