<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;
// use App\Repositories\AuthRepository;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // $this->app->singleton(Connection::class, function ($app) {
        //     return new Connection($app['config']['riak']);
        // });
        // $this->app->bind(AuthRepository::class, function ($app) {
        //     return new AuthRepository();
        // });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Schema::defaultStringLength(191);
    }
}
