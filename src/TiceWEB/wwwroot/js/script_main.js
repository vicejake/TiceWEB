$(document).ready(function() {
    /*
    alert('listo');
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
    	alert('hola');
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
	*/
    $.ajax({
		url: "http://rest-service.guides.spring.io/greeting",
		dataType: 'json',
		context: document.body
	}).done(function(data) {
		$('.greeting-id').append(data.id);
		$('.greeting-content').append(data.content);
	});

});