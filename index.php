<?php

ini_set('display_errors', 'On');
error_reporting(0);

include_once 'vendor/autoload.php';

use Simcify\Application;

$app = new Application();
$app->route();
