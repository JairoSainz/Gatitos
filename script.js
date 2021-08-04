var fotoMostrada = "descarga";

	function funcion(){
		var elemento = document.getElementById("foto");
		if (fotoMostrada == "img/descarga") {
			elemento.src = "img/descarga2.jfif";
			fotoMostrada = "img/descarga2";
		}
		else if (fotoMostrada == "img/descarga2") {
			elemento.src = "img/triste.jpg";
			fotoMostrada = "img/triste";
		}
		else{
			elemento.src = "img/descarga.png";
			fotoMostrada = "img/descarga";
		}
	}