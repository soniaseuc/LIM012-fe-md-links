# Markdown Links

## Introducción

- Este proyecto presenta una libreria que verifica los links dentro de archivos tipo Markdown y permite validar dichos links y realizar algunas estadisticas. 

- La librería esta implementada en JavaScript para ser ejecutada con
Node.js.

- El modulo es instalable via `npm install <soniaseuc>/LIM012-fe-md-links`. Este
módulo incluye tanto un _ejecutable_ a invocar en la línea de
comando como una interfaz que podemos importar con `require` para usarlo
programáticamente.

Necesidad del usuario:

- Instalar la libreria via `npm install --global soniaseuc/LIM012-fe-md-links`

### `README.md`

- *Diagrama de flujo* con el algoritmo que
  soluciona el problema.

![Untitled Diagram](https://user-images.githubusercontent.com/60791273/86290192-a381ff80-bbb2-11ea-95fb-5b9bdf525302.jpg)

- Boilerplate

```
.
├── README.md
├── package.json
├── package-lock.json
├── .gitignore
├── src
|  ├── main.js
|  ├── mdLinks.js
|  ├── validate.js|
|  └── cli.js
└── test
   ├── main.spec.js
   ├── mdLinks.spec.js
   └── validate.spec.js
```
### CLI

- Expone ejecutable `md-links` en el path (configurado en `package.json`)
- El ejecutable implementa `--validate`.
- El ejecutable implementa `--stats`.
- El ejecutable implementa `--validate` y `--stats` juntos.

### CLI (Command Line Interface - Interfaz de Línea de Comando)

El ejecutable de la aplicación se ejecuta de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Por ejemplo:

```sh
$ md-links ./some/example.md
./some/example.md http://algo.com/2/3/ Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html algún doc
./some/example.md http://google.com/ Google
```

#### Options

##### `--validate`

Si pasamos la opción `--validate`, el módulo hace una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

Por ejemplo:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://algo.com/2/3/ ok 200 Link a algo
./some/example.md https://otra-cosa.net/algun-doc.html fail 404 algún doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

## Objetivos de aprendizaje

### Javascript
- [ ] Uso de callbacks
- [ ] Consumo de Promesas
- [ ] Creacion de Promesas
- [ ] Modulos de Js
- [ ] Recursión

### Node
- [ ] Sistema de archivos
- [ ] package.json
- [ ] crear modules
- [ ] Instalar y usar modules
- [ ] npm scripts
- [ ] CLI (Command Line Interface - Interfaz de Línea de Comando)

### Testing
- [ ] Testeo de tus funciones
- [ ] Testeo asíncrono
- [ ] Uso de librerias de Mock
- [ ] Mocks manuales
- [ ] Testeo para multiples Sistemas Operativos

### Git y Github
- [ ] Organización en Github

### Buenas prácticas de desarrollo
- [ ] Modularización
- [ ] Nomenclatura / Semántica
- [ ] Linting

***