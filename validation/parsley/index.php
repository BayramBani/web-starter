<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--Import materialize.css-->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link type="text/css" rel="stylesheet" href="css/control.css"/>

    <!--Let browser know website is optimized for mobile-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
</head>
<body>

<div class="container">
    <div class="row">
        <div class="col l6 offset-l3">
            <form id="form" class="row" action="index.php" method="POST">
                <div class="col l12">
                    <h4 class="teal-text center">Formulaire</h4>
                </div>
                <div class="input-field col l12">
                    <div class="divider"></div>
                    <br>
                </div>

                <div class="col l12">
                    <label>civilité</label>
                    <p>
                        <label>
                            <input id="r1" name="civilite" type="radio" required />
                            <span>Mr</span>
                        </label>
                        <label>
                            <input id="r2" name="civilite" type="radio"  />
                            <span>Melle</span>
                        </label>
                        <label>
                            <input id="r3" name="civilite" type="radio"  />
                            <span>Mme</span>
                        </label>

                    </p>
                </div>
                <div class="input-field col l12">
                    <input type="text" id="nom" name="nom" required>
                    <label for="nom">nom</label>
                </div>
                <div class="input-field col l12">
                    <input type="text" id="prenom" name="prenom" required>
                    <label for="prenom">prénom</label>
                </div>
                <div class="input-field col l12">
                    <input type="date" class="datepicker" class="validate">
                    <label>date de naissance</label>
                </div>
                <div class="input-field col l12">
                    <input type="email" id="email" name="email" required>
                    <label for="email">email</label>
                </div>
                <div class="input-field col l12">
                    <input type="tel" id="tel" name="tel">
                    <label for="email">tél</label>
                </div>
                <div class="input-field col l12">
                    <input type="password" id="password" name="password">
                    <label for="password"> mot de passe</label>
                </div>

                <div class="input-field col l12">
                    <select required>
                        <option value="" disabled selected>Formation</option>
                        <option value="1">Licence</option>
                        <option value="2">Master</option>
                        <option value="3">Doctorat</option>
                        <option value="3">Ingénierie</option>
                    </select>
                    <label>Formation</label>
                </div>

                <div class="input-field col l12">
                    <textarea class="materialize-textarea" id="cmt" name="cmt" required></textarea>
                    <label for="cmt">commentaire</label>
                </div>
                <div class="col l12">
                    <label>Sport</label>
                    <br>
                    <p required>
                        <input type="checkbox" id="chk1" value=""/>
                        <label for="chk1">Football</label>

                        <input type="checkbox" id="chk2" value=""/>
                        <label for="chk2">Handball</label>

                        <input type="checkbox" id="chk3" value=""/>
                        <label for="chk3">Basketball</label>
                    </p>
                </div>
                <div class="col l12">
                    <br>
                    <div class="switch">
                        <label>
                            Off
                            <input type="checkbox">
                            <span class="lever"></span>
                            On
                        </label>
                    </div>
                </div>

                <div class="col l12">
                    <br>
                    <div class="divider"></div>
                </div>
                <div class="col l12">
                    <p class="right">
                        <button type="submit" class="btn" id="ajouter" name="ajouter">ajouter</button>
                        <a class="btn grey" href="index.php">annuler</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>

<!--Import jQuery before materialize.js-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
<script type="text/javascript" src="js/parsley.js"></script>
<script type="text/javascript" src="js/validation.js"></script>
<script>  M.AutoInit();</script>


</body>
</html>
