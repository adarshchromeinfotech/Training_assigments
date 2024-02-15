$(document).ready(function() {
  const $icon = $('#togglePassword');
  const $password = $('#password');
  
  // Initially hide the icon button
  $icon.hide();
  
  // Event fired when <i> is clicked
  $icon.on('click', function() {
    if ($password.attr('type') === 'password') {
      $password.attr('type', 'text');
      $icon.removeClass('fa-eye').addClass('fa-eye-slash');
    } else {
      $password.attr('type', 'password');
      $icon.removeClass('fa-eye-slash').addClass('fa-eye');
    }
  });
  
  // Show/hide icon button based on input value
  $password.on('input', function() {
    if ($(this).val().trim() !== '') {
      $icon.show();
    } else {
      $icon.hide();
    }
  });
});
