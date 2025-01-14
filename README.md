# dekita-laravelreact
A to-do list app built with Laravel 11 and React 18, which I use as a template for my other Laravel+React projects. Work in progress.

![image](https://github.com/user-attachments/assets/c1d5fe8e-7e4d-4848-98aa-ba72bf0bdc2a)

## Installation
1. Create a database
2. From the root directory of this repo, navigate to ```src/api```
3. Copy the ```.env.example``` file and rename it to ```.env```
4. Edit the ```.env``` file to match your environment configuration
5. Execute
```bash
composer update
php artisan migrate:fresh --seed
php artisan key:generate
php artisan storage:link
```
6. From the root directory of this repo, navigate to ```src/app```
7. Execute
```bash
npm install
```

## Usage
From the root directory of this repo, in a terminal pointed to ```src/api```, execute
```bash
php artisan serve
```
Then, from the root directory of this repo, in another terminal pointed to ```src/app```, execute
```bash
npm run dev
```
Then visit http://localhost:3000 (or whichever port ```npm``` serves on) on your browser.

## Contributing
Read the following files in order and see where you can help:
1. [doc/description.md](doc/description.md)
2. [doc/end-tree.md](doc/end-tree.md)
