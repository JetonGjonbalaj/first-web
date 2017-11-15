var Prej = {
    Sekond: 1,
    Minut: 60,
    Ore: 3600,
    Dite: 86400,
    Jave: 604800,
    Muaj: 2628000,
    Vit: 31536000
}

var Ne = {
    Sekond: 1,
    Minut: 60,
    Ore: 3600,
    Dite: 86400,
    Jave: 604800,
    Muaj: 2628000,
    Vit: 31536000
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
