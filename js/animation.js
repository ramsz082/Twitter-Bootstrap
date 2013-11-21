$(document).ready(function(){
	$("#click-me-btn").click(function(){
		$('#myModal').modal('toggle');
		$('#alert-me-btn').removeAttr('disabled');
		$('#alert-me-btn').html('Alert Me Now');
		$('#alert-me-btn').removeClass('btn-warning').addClass('btn-primary');
	});
	$(".tooltip-hover").tooltip();
	$('#alert-me-btn').popover();
	$('.items-align .dropdown-menu li').click(function(){
		var linkId = $(this).attr('id');
		$('.badge-component, .button-component, .button-styles, .input-groups, .progress-bars, .glyph-images, .alert-boxes').hide();
		$('.'+ linkId).fadeIn();
	});
	$('.navbar-style li').click(function(){
		var index = $(this).index();
		if(index == 0)
		{
		$('.collapse-tabs').fadeOut();
		$('.tab-align ul').removeClass('nav-pills').addClass('nav-tabs');
		$('.tab-align').fadeIn();
		$('.tab-align').css('background-color','#998D83');
		}
		else if(index == 1)
		{
		$('.collapse-tabs').fadeOut();
		$('.tab-align ul').removeClass('nav-tabs').addClass('nav-pills');
		$('.tab-align').fadeIn();
		$('.tab-align').css('background-color','#A9C7B6');
		}
		else
		{
		$('.tab-align').fadeOut();
		$('.collapse-tabs').fadeIn();
		}
	});
});

