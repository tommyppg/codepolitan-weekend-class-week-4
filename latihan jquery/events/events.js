$('#btn_click').click(function(){
	alert("Tombol berhasil di click!");
});

$('#btn_dbl_click').dblclick(function(){
	alert("Tombol berhasil di double click!");
});

$('#select_change').change(function(){
	var nilai = $('#select_change').val();
	alert("Select telah berganti nilai (changed) menjadi "+nilai);
});

$('#input_keyup').keyup(function(){
	alert("Keyboard di tekan!");
});

$('#h1_mouse_over').mouseover(function(){
	console.log("Text di hover (mouseover)");
});