
$(document).ready(function() {

	var submitContact = $('#submit_contact');

	submitContact.on('click', function(e){

			e.preventDefault();
			
			 var name =$('#name').val();
			 var email = $('#email').val()
			 var message = $('#message').val()
			
			if (name == null || name == "") {
				 $('#name').addClass('error');
				 $('#name').focus();
				 $('#name').attr("placeholder", "How may we call you?"); 
				return false;
			}
			if (email == null || email == "") {
				$('#email').addClass('error');
				$('#email').focus();
				$('#email').attr("placeholder", "We need to reach you somewhere"); 
				return false;
			}
			
			if (IsEmail(email)==false) 
			{
			   	alert("The email you provided seems incorrect")
			   	$('#email').addClass('error');
			  	$('#email').focus();
			    return false;
			 }
			
			if (message == null || message == "") {
				$('#message').addClass('error');
				 $('#message').focus();
				 $('#message').attr("placeholder", "Tell us something to remember you"); 
				return false;
			}
			
		 var frm = $('#contact-form');
			$.ajax({
				type: "POST",
				url: frm.attr('action'),
				cache: false,
				data: $('#contact-form').serialize(),
				success: function(data) {
					if(data.info !== 'error'){
						$(this).parents('form').find('input[type=text],textarea,select').removeClass('error');
						$(".response").show();
						$(".response").delay(5000).fadeOut(2500);
					} else {
						message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(5000).fadeOut('slow');
					}
			}
		});
	});
	
	function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
           return false;
        }else{
           return true;
        }
      }

});