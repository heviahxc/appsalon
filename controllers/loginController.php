<?php

namespace Controllers;

use MVC\Router;

class LoginController{
    public static function login(Router $router){
        $router->render('auth/login');
    }
    public static function logout(){
        echo "logout";
    }
    public static function olvide(){
        echo "olvide";
    }
    public static function recuperar(){
        echo "recuperar";
    }
    public static function crear(){
        echo "recuperar";
    }
}