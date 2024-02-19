
    $(document).ready(function() {		
        // Validate login form
        $("#loginForm").validate({
            rules: {
                username: {
                    required: true,
                },
                password: {
                    required: true,
                },
            },
            messages: {
                username: {
                    required: "Please enter your username.",
                },
                password: {
                    required: "Please enter your password.",
                },
            },
            
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.form-group')); // Insert error message after the closest form-group div
                error.addClass('text-danger'); // Add text-danger class to error messages
            },
           
        });

        // Validate signup form
        $("#signupForm").validate({
            rules: {
                fullname: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 6,
                },
                rpassword: {
                    required: true,
                    equalTo: "#password",
                },
                agree: {
                    required: true,
                }
            },
            messages: {
                fullname: {
                    required: "Please enter your full name.",
                },
                email: {
                    required: "Please enter your email.",
                    email: "Please enter a valid email address.",
                },
                password: {
                    required: "Please provide a password.",
                    minlength: "Your password must be at least 6 characters long.",
                },
                rpassword: {
                    required: "Please confirm your password.",
                    equalTo: "Passwords do not match.",
                },
                agree: {
                    required: "You must agree to the terms and conditions.",
                }
            },
            errorPlacement: function(error, element) {
                error.insertAfter(element.closest('.form-group')); // Insert error message after the closest form-group div
                error.addClass('text-danger'); // Add text-danger class to error messages
            },
           
        });

       

    }); 

