<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

## Run application

```bash
php artisan serve
```

## Steps followed

Create the model and migrations
```bash
php artisan make:model DailyCheck -m
```


Create the Controller and API resources
```bash
php artisan make:controller Api/DailyCheckController --resource --api --model=DailyCheck
php artisan make:resource DailyCheckResource
```

```bash
php artisan make:request DailyCheckRequest
```