// /*
//
// My Custom JS
// ============
//
// Author:  Brad Hussey
// Updated: August 2013
// Notes:	 Hand coded for Udemy.com
//
// */
(function(){
$('#usersearch input').click(function(){
	var value=$('#valformovie').val();
$.ajax({
  url: "http://www.omdbapi.com/?s="+value,
  success: function(data){
  console.log(data.Search.length);
  var arr=data.Search;
  console.log(arr);
  for(var i=0;i<arr.length;i++)
  {
  	$("<img></img>",{
             height:"100px",
             src:arr[i].Poster,
             class:"col-lg-2"
         }).insertAfter("#details");
         
          $("<p></p>",{
             height:"100px",
             text:arr[i].imdbID,
             class:"col-lg-2"
         }).insertAfter("#details");
         
          $("<p></p>",{
              height:"100px",
             text:arr[i].Year,
             class:"col-lg-2"
         }).insertAfter("#details");
         
         $("<p></p>",{
             height:"100px",
             text:arr[i].Title,
             class:"col-lg-3"
         }).insertAfter("#details");
          
         $("<p></p>",{
             height:"100px",
             text:arr[i].Type,
             class:"col-lg-3"
         }).insertAfter("#details");
  }
  },
  dataType:"json"
});
});

})();
