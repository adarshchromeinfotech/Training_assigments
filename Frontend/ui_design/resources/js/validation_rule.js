
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
                        required: "Please enter a email",
                        minlength: "Your email must consist of at least 10 characters",
                        email: "Please enter a valid email address",
                    },
                    password: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 3 characters long"
                    },                 
                }
            });
        });    
      