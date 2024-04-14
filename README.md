# Sismologic_app

Aplicación que obtiene y entrega información relacionada con datos sismológicos en el mundo. El mismo contempla una Task para obtener y persistir datos y una API que expone dos endpoints que serán consultados desde un cliente externo 

## Versión de Ruby

Este proyecto utiliza Ruby versión 2.7.1. Asegúrate de tener la versión correcta instalada. Puedes usar [rbenv](https://github.com/rbenv/rbenv) para manejar tus versiones de Ruby.

## Dependencias del sistema

Este proyecto es una aplicación Rails con React integrado a través de Webpacker. Necesitarás tener instalado Node.js y Yarn para el front-end de React.

## Configuración

Clona el repositorio:

```bash
git clone https://github.com/antu2809/sismologic_app.git
cd sismologic_app
```
Instala las dependencias:

```bash
bundle install
yarn install
```

## Creación de base de datos

Crea la base de datos y ejecuta las migraciones:

```bash
rails db:create
rails db:migrate
```

## Inicialización de base de datos
Puedes inicializar la base de datos con datos de terremotos ejecutando la tarea Rake:

```bash
rails obtain_and_persist_data:execute
```

## Instrucciones de implementación
Para iniciar el servidor Rails:

```bash
rails s
```

Ahora puedes visitar http://localhost:3000 para ver la aplicación.