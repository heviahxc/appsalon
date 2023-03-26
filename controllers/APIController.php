<?php

namespace Controllers;

use Model\Cita;
use Model\CitaServicio;
use Model\Servicio;

class APIController{
        public static function index(){
            $servicios = Servicio::all();
            echo json_encode($servicios);
        }

        public static function guardar(){

           $cita = new Cita($_POST);
        
           $resultado = $cita->guardar();

           $id = $resultado['id'];
 
           $idServicios = explode(",",$_POST['servicios']);

           foreach ($idServicios as $idServicio) {
                    $arg = [
                        'citaId' => $id,
                        'servicioId' => $idServicio
                    ];

                    $citaServicio = new CitaServicio($arg);
                    $citaServicio->guardar();
           }
           $respuesta = [
            'resultado' => $resultado
           ];

           echo json_encode(['resultado' => $resultado]);

        }
    }
?>