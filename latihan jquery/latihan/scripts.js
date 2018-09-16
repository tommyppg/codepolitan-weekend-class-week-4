$('#btn_hasil').click(function(){
	//ambil data dari html
	var angka1 = parseInt($('#angka1').val());
	var angka2 = parseInt($('#angka2').val());
	var operator = $('#operator').val();

	//bilah kondisi operator
	if(operator == "+"){
		var hasil = angka1 + angka2;
	}else if(operator == "-"){
		var hasil = angka1 - angka2;
	}else if(operator == "*"){
		var hasil = angka1 * angka2;
	}else if(operator == "/"){
		var hasil = angka1 / angka2;
	}

	//tampilkan hasil
	$('#hasil').val(hasil);
});