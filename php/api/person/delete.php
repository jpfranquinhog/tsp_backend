<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods:POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-headers, Authorization, X-Requested-with");

// include database and object files
include_once '../config/database.php';
include_once '../objects/person.php';

// instantiate database and person object
$database = new Database();
$db = $database->getConnection();

// initialize object
$person = new Person($db);

$data=json_decode(file_get_contents("php://input"));

echo"ID".$data->id;

$person->id=$data->id;
$result=$person->delete();
if($result==true){
    echo"{";
        echo'"message" : "o utilizador foi apagado"';
    echo"}";
}else{
    echo"{";
        echo'"message" : "o utilizador nao foi apagado"';
    echo"}";
}