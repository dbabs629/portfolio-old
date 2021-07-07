<?php
// altered from https://www.php.net/manual/en/function.mail.php, https://www.w3schools.com/php/php_form_url_email.asp and https://code.tutsplus.com/tutorials/how-to-redirect-with-php--cms-34680
    $to = 'daniel.l.babin@gmail.com';
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $header = 'From: '. $name . ' <' . $email . '>\r\n';
    if (empty($_POST["name"])) {
      $nameErr = "Name is required <br>";
      echo $nameErr;
    } else {
      $name = $_POST["name"];
      // check if name only contains letters and whitespace
      if (!preg_match("/^[a-zA-Z-' ]*$/",$name)) {
        $nameErr = "Only letters and white space allowed <br>";
      }
    }
  
    if (empty($_POST["email"])) {
      $emailErr = "Email is required <br>";
      echo $emailErr;
    } else {
      $email = $_POST["email"];
      // check if e-mail address is well-formed
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format <br>";
      }
    }
    
    if (empty($_POST["subject"])) {
      $subjectErr = "A subject is required <br>";
      echo $subjectErr;
    } else {
      $subject = $_POST["subject"];
    }
  
    if (empty($_POST["message"])) {
      $messageErr = "A message is required <br>";
      echo $messageErr;
    } else {
      $message = $_POST["message"];
    }
  
    if(mail($to, $subject, $message, $header)){
        header("Location: https://getdaniel.me/portfolio/", TRUE, 301);
        echo "Your email was sent!";
        exit();
    } else {
        echo "Unable to send email.";
    };
?>
