<!DOCTYPE html>
<html lang="fr">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <title>Validation</title>

  <!--Import Google Icon Font-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!-- Compiled and minified CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

<div class="container">
  <div class="row">
    <form id="login-form" class="col l6 offset-l3" action="target.php" method="POST">
      <div class="card-panel">
        <div class="row ">
          <div class="col l12 center">
            <h3 class="flow-text teal-text ">S'identifier</h3>
          </div>
        </div>
        <div class="row ">
          <div class="input-field col l12">
            <i class="mdi-social-person-outline prefix"></i>
            <input id="user" name="user" type="text" class="validate" required autofocus>
            <label for="user">Nom d'utilisateur</label>

          </div>
        </div>

        <div class="row ">
          <div class="input-field col l12">
            <i class="mdi-action-lock-outline prefix"></i>
            <input id="pass" name="pass" type="password" required>
            <label for="pass">Mot de passe</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col l12 center">
            <button class="waves-effect waves-light btn" type="submit" id="submit" name="submit">Connexion</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>

<!--  Scripts-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<!-- Compiled and minified JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>

<script src="js/jquery.validate.js"></script>
<script src="js/validation.js"></script>

</body>
</html>
