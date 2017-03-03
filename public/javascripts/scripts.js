function changeText(filterOption) { 
	$('.input-option').text(filterOption);
	$('#searchForm').attr("action", "/" + filterOption);
	console.log(filterOption);
	// if ($('#searchForm').attr('action', '/' + filterOption == '/Title') {
	// $('a').attr('href', filterOption);
	// })
}

