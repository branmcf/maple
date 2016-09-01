<?php
// process.php

$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

// validate the variables ========
if (empty($_POST['email']))
  $errors['email'] = 'Email is required.';

if (empty($_POST['username']))
  $errors['username'] = 'Username is required.';

if (empty($_POST['password']))
  $errors['password'] = 'Password is required.';

if (empty($_POST['passwordRe']))
  $errors['passwordRe'] = 'Password is required.';

// return a response ==============

// response if there are errors
if ( ! empty($errors)) {

  // if there are items in our errors array, return those errors
  $data['success'] = false;
  $data['errors']  = $errors;
} else {

  // if there are no errors, return a message
  $data['success'] = true;
  $data['message'] = 'Success!';
}

// return all our data to an AJAX call
echo json_encode($data);