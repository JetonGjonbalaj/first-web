var prej1;
var ne1;
var vleraNeInt;
var alert = document.getElementById("alert");

function convert(prej, ne){
	if(prej == "Celsius" && ne == "Farenhajt"){
		return 32 + 1.8 * vleraNeInt;
	} else if(prej == "Farenhajt" && ne == "Celsius"){
		return (vleraNeInt - 32) / 1.8;
	} else if(prej == "Celsius" && ne == "Kelvin") {
		return vleraNeInt * 1.0 + 273.15;
	} else if(prej == "Kelvin" && ne == "Celsius") {
		return vleraNeInt - 273.15;
	} else if(prej == "Kelvin" && ne == "Farenhajt") {
		return vleraNeInt * 1.8 - 459.67;
	} else if(prej == "Farenhajt" && ne == "Kelvin") {
		return (vleraNeInt + 459.67) * 5 / 9;
	} else {
		return vleraNeInt;
	}
}

function prejVleres(vlera){
	prej1 = vlera;
	document.getElementById("prej").textContent = prej1;
	document.getElementById("vlera").value = "";
	document.getElementById("konvertimi").value = "";
	alert.classList.remove("show");
	alert.classList.add("hide");
}

function neVleren(vlera){
	ne1 = vlera;
	document.getElementById("ne").textContent = ne1;
	document.getElementById("vlera").value = "";
	document.getElementById("konvertimi").value = "";
	alert.classList.remove("show");
	alert.classList.add("hide");
}

function convertTo(){
	if(prej1 == null || ne1 == null)
	{
		alert.classList.remove("hide");
		alert.classList.add("show");
	}

	vleraNeInt = document.getElementById("vlera").value;

	if(isNaN(vleraNeInt))
	{
		path.classList.remove('hide-path');
		path.classList.add('show-path');
		document.getElementById("konvertimi").value = "";
	}
	else
	{
		path.classList.remove("show-path");
		path.classList.add("hide-path");
		if(document.getElementById("vlera").value != "")
		{
			var vleraParaqitur = convert(prej1, ne1);
			if(vleraParaqitur - vleraParaqitur.toFixed() < 0 && vleraParaqitur - vleraParaqitur.toFixed() > -0.00001 || vleraParaqitur - vleraParaqitur.toFixed() > 0 && vleraParaqitur - vleraParaqitur.toFixed() < 0.00001)
			{
				document.getElementById('konvertimi').value = vleraParaqitur.toFixed();
			}
			else
			{
				document.getElementById("konvertimi").value = vleraParaqitur.toFixed(3);
			}
		}
		else{

			document.getElementById("konvertimi").value = "";
		}
	}
}
