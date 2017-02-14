function changeText(filterOption) { 
	$('.input-option').text(filterOption);
	$('#searchForm').attr("action", "/" + filterOption);
	console.log(filterOption);
}