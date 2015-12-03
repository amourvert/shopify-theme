	$(document).ready(function() {
 	$(".video").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		autoResize	: true,
		autoSize	: true,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none'
	});

	$('a[href^="mailto:"]').attr('target','_blank');
	
	});