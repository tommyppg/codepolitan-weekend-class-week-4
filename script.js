$('#kotak button').click(function(){
	$([document.documentElement, document.body]).animate({
        scrollTop: $("#bottom").offset().top
    }, 2000);
});

$("#btn_hasil").click(function(){
	//definisi variabel input user
	var angka1 = parseInt($("#angka1").val()); //parse dr string ke integer
	var angka2 = parseInt($("#angka2").val());
	var operator = $("#operator").val();

	//kondisi operator +
	if(operator == "+"){
		var hasil = angka1 + angka2;
	}

	//kondisi operator -
	if(operator == "-"){
		var hasil = angka1 - angka2;
	}

	//kondisi operator *
	if(operator == "*"){
		var hasil = angka1 * angka2;
	}

	//kondisi operator /
	if(operator == "/"){
		var hasil = angka1 / angka2;
	}

	//jquery set hasil ke input box
	$("#hasil").val(hasil);
});