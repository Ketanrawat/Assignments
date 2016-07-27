// My Custom JS
// Author:  Ketan Rawat
// dated: 
// Notes:  Hand coded 


(function(){
	$('#entryform').hide();
	// $('#empdbtableheader').hide();
	$('#viewbutton').on('click',function(){
		getData();
	});

//getALLEmployees
var getData=function(){
	$.ajax({
		method:"GET",
		url:"http://localhost:8080/employees",
		success:function(data){
			alert("data returned succesfully");
			console.log(data);
			var t='';
			console.log(t+"hello");
			data.forEach(function(d) {
				t='<tr><td>'+(parseInt(d.id))+'</td><td>'+d.name+'</td><td>'+d.age+'</td><td>'+d.email+'</td><td>'+d.company+'</td><td>'+d.phone+'</td><td>'+'<button type="button" style="margin-right:10px" class="btn btn-success">Update</button><button type="button" class="btn btn-danger">Delete</button>'+'</td></tr>';
				$('table').append(t);
			});


		},
		error:function(err,message){
			console.log("Error found",message)
		}

	});
}

//Update Of Employee Record

$('#empdbtable').on('click','.btn-success',function(){
	alert("update button clicked");
	console.log($('this').siblings(button));
});
})();