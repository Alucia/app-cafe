/*filtro del input*/
var cafeterias = [{
	nombre:"El dorado",
	coordenada: 250,
	ubicacion:"Lima",
	descripcion:"Ensaladas, Postres y emparedados."
}, {
	nombre:"El sol",
	coordenada: 200,
	ubicacion:"Ica",
	descripcion:"Ensaladas, Postres y menu."
}, {
	nombre:"Juanita",
	coordenada: 2,
	ubicacion:"Ica",
	descripcion:"Ensaladas, Postres y sopas."
}, {
	nombre:"Orgánica Lucia ",
	coordenada: 100,
	ubicacion:"Ica",
	descripcion:"Ensaladas, Postres y menu."
}, {
	nombre:"Marilyn",
	coordenada: 90,
	ubicacion:"Ica",
	descripcion:"Ensaladas, Postres y sopas."
}, {
	nombre:"María",
	coordenada: 50,
	ubicacion:"Ica",
	descripcion:"Cafe, anis."
}];

$(document).ready(function(){	
	//pinta las cafeterias
	$.each(cafeterias,function(index,cafeteria) { 
		$('.cafeterias').append(pintarCafeterias(cafeteria));
	});

	//haremos el filtrado de datos
	$('#buscar').click(function() {	

		var searchText = $("#texto").val();
		console.log(searchText);
		$('.cafeterias').html("");
		$.each(cafeterias,function(index,cafeteria) {
			var tmpSearch = searchText.toLowerCase();
			var tmpNombre = cafeteria.nombre.toLowerCase();
			var tmpUbicacion = cafeteria.ubicacion.toLowerCase();
			var tmpDescripcion = cafeteria.descripcion.toLowerCase();
			var contar = 0;
			if ((tmpNombre+tmpUbicacion+tmpDescripcion).indexOf(tmpSearch) >= 0) {
				$('.cafeterias').append(pintarCafeterias(cafeteria));	
				console.log("entra if");
				console.log(cafeteria.ubicacion);
				console.log(cafeterias[1]);
				contar = contar + 1;
			}
		});
		if(contar == 0) {
			$('.cafeterias').append('<li>No se encontraron coincidencias.</li>')
		}

	});
});

function pintarCafeterias(cafeteria) {
	return  '<li class="cafeteria">'+
	'<img src="img/img.jpg" alt="taza de cafe">'+
	'<h3>'+cafeteria.nombre+' <i class="fa fa-map-marker">'+cafeteria.coordenada+'mts</i></h3>'+
	'&#9733;&#9733;&#9733;&#9733;&#9733;'+
	'<h4>'+cafeteria.ubicacion+'</h4>'+
	'<p>'+cafeteria.descripcion+'</p>'+
	'<hr>'+
	'<h4>Tonights availability</h4>'+
	'<span class="fa fa-clock-o clock"></span>'+
	'<a href="#">5:30PM</a><a href="#">7:30PM</a><a href="#">9:00PM</a>'+
	'<br><br>'+
	'<a href="#" class="btn btn-primary">RESERVE</a>'+
	'</li>'
}