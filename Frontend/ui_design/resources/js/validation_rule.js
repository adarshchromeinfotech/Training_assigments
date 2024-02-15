
        $().ready(function() {		
		// validate form on keyup and submit
            $("#loginForm").validate({
                rules: {
                    
                    email: {
                        required: true,
                        email: true,
                        // minlength: 10,
                        // maxlength: 80
                    },
                    password: {
                        required: true,
                        // minlength: 3,
                        // maxlength: 80
                    },                                         
                },
                messages: {
                    email: {
                        required: "Please enter a email.",
                        minlength: "Your email must consist of at least 10 characters.",
                        email: "Please enter a valid email address.",
                    },
                    password: {
                        required: "Please provide a password.",
                        minlength: "Your password must be at least 3 characters long."
                    },                 
                },
                errorPlacement: function(error, element) {
                    if (element.attr("name") == "email") {
                        error.insertAfter(element.closest('.form-floating')); // Insert error message after the closest form-floating div
                    } else if (element.attr("name") == "password") {
                        error.insertAfter(element.closest('.form-floating')); // Insert error message after the closest form-floating div
                    } else if (element.attr("name") == "captcha") {
                        return;
                        // var container = element.closest('.form-floating');
                        // container.append(error); // Append error after the div at the bottom
                        // container.css('position', 'relative'); // Ensure container has relative positioning                
                    } else  {
                        error.insertAfter(element); // Default placement
                    }
                    error.addClass('text-danger'); // Add text-danger class to error messages
                }
            });
        });    
      