<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\FleetController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [UserController::class, 'login']);
Route::post('/reset', [UserController::class, 'sendResetToken']);
Route::put('/reset/{token}', [UserController::class, 'verifyResetPassword']);

Route::group(['middleware' => 'auth:api'], function () {
    Route::get('/login', [UserController::class, 'getUserLogin']);
    Route::get('/logout', [UserController::class, 'logout']);
    Route::group(['prefix' => '/users'], function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/', [UserController::class, 'store']);
        Route::get('/{id}', [UserController::class, 'edit']);
        Route::patch('{id}', [UserController::class, 'update']);
        Route::delete('/{id}', [UserController::class, 'destroy']);
    });
    Route::resource('categories', CategoryController::class)->except(['create', 'show']);
    Route::resource('fleets', FleetController::class)->except(['create']);\
});
