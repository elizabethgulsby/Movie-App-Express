function changeText(filterOption) { 
	$('.input-option').text(filterOption);
	$('#searchForm').attr("action", "/" + filterOption);
	console.log(filterOption);
	// if ($('#searchForm').attr('action', '/' + filterOption == '/Title') {
	// $('a').attr('href', filterOption);
	// })
}

// change route in browser based on option selected
// $('a').click(function(filterOption) {
// 	$(this).data('clicked', true);
// 		if ($(this).data('clicked', true)) {
// 		// $(this).attr('href', filterOption)
// 		alert("Yes!")
// 	}
// })
