$.fn.slider = function(option) {
	var settings = {
		'width': 500,
		'height': 250
	};
	option = $.extend(settings, option);

	var jslider = $('.slider');
	var jul = $('.slides');
	var length = jul.find('li').length;
	jul.after("<ul class='slider-page'></ul>");

	var jpage = $('.slider-page');
	for(var i = 0; i < length; i++) {
		jpage.append("<li><a></a></li>");
	}
	jpage.find('li').eq(0).find('a').attr('class', 'active');

	jul.after("<a class='slider-pre'></a><a class='slider-next'></a>");
	jslider.width(option.width);
	jslider.height(option.height);
	jul.width(jslider.width() * length);
	jul.find('li').width(jslider.width());
	jul.attr('current', '1');

	var jpre = $('.slider-pre');
	var jnext = $('.slider-next');
	jpre.on('click', function() {
		if(jul.attr('current') != 1) {
			var left = jul.css('left').substr(0, jul.css('left').length - 2) * 1 + jslider.width();
			jul.css('left', left + 'px');
			jul.attr('current', jul.attr('current') * 1 - 1);
			jpage.find('li').find('a').attr('class', '');
			jpage.find('li').eq(jul.attr('current') * 1 - 1).find('a').attr('class', 'active');
		}
	});
	jnext.on('click', function() {
		if(jul.attr('current') != length) {
			var left = jul.css('left').substr(0, jul.css('left').length - 2) * 1 - jslider.width();
			var current = jul.attr('current') * 1;
			jul.css('left', left + 'px');
			jul.attr('current', jul.attr('current') * 1 + 1);
			jpage.find('li').find('a').attr('class', '');
			jpage.find('li').eq(jul.attr('current') * 1 - 1).find('a').attr('class', 'active');
		}
	});

	return this;
};