<?php

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group(['middleware' => 'auth'], function () use ($router) {
    $router->get('users', 'UserController@index');
    $router->post('/users', 'UserController@store');
    $router->get('/users/{id}', 'UserController@edit');
    $router->put('/users/{id}', 'UserController@update');
    $router->delete('/users/{id}', 'UserController@destroy');
});
