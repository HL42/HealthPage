<?php

$dsn = "mysql:host = localhost; dbname = patient";

try{
    $pdo = new PDO(&dsn);
    $pdo -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e){
    echo "Connection fail: " . $e->getMessage();
}