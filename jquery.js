$(function(){
	//body
	$('body').css({"background-color":""});

	//body end
	//header
	$('#h1').html("JQuery Sample by Crashantrax");
	$('#h1').css({"color":"blue","text-align":"center",});
	$('.ui.dropdown')
	  .dropdown({
	    values: [
		      {
		        name: 'Male',
		        value: 'male'
		      },
		      {
		        name     : 'Female',
		        value    : 'female',
		        selected : true
		      }
	    	]
	  	});
});