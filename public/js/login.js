'use strict';

$(function(){
  $('#login').click(login);
})

function login(e) {
  e.preventDefault();

  var username = $('#username').val();
  var pw = $('#pw').val();

  $.post('/users/login', {username: username, password: pw})
  .done(function(data){
    window.location.replace('/profile');
  })
  .fail(function(err){
    $('#username').val("");
    $('#pw').val("");
    swal('Error:', "Unknown Login.", 'error');
  });
}