Aca deberia verse dataview

Esto sigue siendo nada

```dataviewjs
const lista = "Hola tanto tiempo".split(" ");
dv.list(lista);
```

```dataviewjs

dv.header(3, "Paginas");
dv.el("br", "");

let lista = dv.pages();
dv.list(lista.map(archivo => archivo.file.name));
```
