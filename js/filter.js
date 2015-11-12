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
		var searchText = $("#input").val();
		
		$.each(cafeterias,function(index,cafeteria) {
			if (searchText == cafeteria.nombre) {
				$('.cafeterias').append(pintarCafeterias(cafeteria));	
			}
		});
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