var Prej = {
    Miligrami: 1,
    Grami: 1000,
    Dekagrami: 10000,
    Hektagrami: 100000,
    Kilogrami: 1000000,
    Tonelata: 1000000000,
    Karati: 200
}

var Ne = {
    Miligrami: 1,
    Grami: 1000,
    Dekagrami: 10000,
    Hektagrami: 100000,
    Kilogrami: 1000000,
    Tonelata: 1000000000,
    Karati: 200
}

// Prej[vleres]
var vleres;
// Ne[vleren]
var vleren;

var alert = document.getElementById("alert");
var path = document.getElementById("path");

function vlera(vler){
    vleres = vler;
    document.getElementById("prej").textContent = vleres;
    document.getElementById("vlera").value = "";
    document.getElementById("konvertimi").value = "";
    alert.classList.remove("show");
    alert.classList.add("hide");
}

function konvertimi(vler){
    vleren = vler;
    document.getElementById("ne").textContent = vleren;
    document.getElementById("vlera").value = "";
    document.getElementById("konvertimi").value = "";
    alert.classList.remove("show");
    alert.classList.add("hide");
}

function convertTo(){
    if(vleres == null || vleren == null)
	{
		alert.classList.remove("hide");
		alert.classList.add("show");
	}

    var vleraNeInt = document.getElementById("vlera").value;

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
        var vleraParaqitur = vleraNeInt * Prej[vleres] / Ne[vleren];
        if(document.getElementById("vlera").value != "")
            document.getElementById("konvertimi").value = vleraParaqitur;
        else
            document.getElementById("konvertimi").value = "";
    }
}
