$.validator.setDefaults({
  onkeyup: false,
  errorClass: 'invalid',
  validClass: 'valid',
  submitHandler: function(form) {
    $(form).find("input[type='submit']").prop('disabled', true);
    $(form).find("button[type='submit']").addClass("disabled");
    $(form).find("button[type='submit']").prop('disabled', true);
    form.submit();
  },
  errorPlacement: function(error, element) {
    error.insertAfter($(element).siblings('label'));
  }
});


$(function(){

	$("#login-form").validate({

		rules:{
			user:  {
				required: true
			},
			pass:{
				required: true
			}
		},
		messages:{
			user:{
				required:'veuillez entrer un nom d\'utilisateur!'
			},
			pass:{
				required: 'veuillez entrer votre mot de passe'
			}
		}
	});
});
