---
num_libro: 3
libro: Derechos Personales
listado:
  - "[[Código Civil y Comercial de la Nación, Ley 26.994|Código Civil y Comercial de la Nación]]"
---
### Títulos
---
```dataviewjs
	let grupo = "Título";
	let categoria = grupo.toLowerCase();
	let num_categoria = `num_${categoria}`;
	
	let pagina_actual = dv.current();
	let carpeta = pagina_actual.file.folder;
	const paginas = dv.pages(`"${carpeta}"`)
		.where(pagina => {
			if (pagina.file.name.includes("Art. "))
				return false;
			return pagina[num_categoria];
		})
		.sort(pagina => parseInt(pagina[num_categoria]));

	dv.table([grupo, "Artículos"], paginas.map(pagina => {
		let nombre = pagina.file.name.split(", ");
		nombre = nombre.slice(-2)[0];
		let articulos = dv.pages(`"${carpeta}/${nombre}"`)
			.where(pagina => {
				if (!pagina.file.name.startsWith("Art. "))
					return false;
				return pagina.num_articulo;
			}).sort(pagina => parseInt(pagina.num_articulo, 10));

		nombre = `${nombre}, ${pagina[categoria]} [[${pagina.file.path}|?]]`;
		return [nombre, articulos.map(articulo => {
			let nombre_final = `Art. ${articulo.num_articulo}`;
			if (articulo.art_nombre)
				nombre_final += `, ${articulo.art_nombre}`;
			nombre_final += ` [[${articulo.file.path}|?]]`;
			return nombre_final;
		})];
	}));
```

### Artículos
---
```dataviewjs
	let pagina_actual = dv.current();
	let carpeta = `"${pagina_actual.file.folder}"`;
	const paginas = dv.pages(carpeta)
		.where(pagina => {
			return pagina.file.name != pagina_actual.file.name && pagina.num_articulo;
		})
		.sort(pagina => parseInt(pagina.num_articulo, 10));

	dv.table(["Artículo", "Contenido"], paginas.flatMap(pagina => {
		let articulo = `Art. ${pagina.num_articulo}`;
		if (pagina.art_nombre)
			articulo += `, ${pagina.art_nombre}`;
		articulo += `[[${pagina.file.path}|?]]`;
		let contenido = pagina.art;

		let output = [[articulo, contenido]];

		if (pagina.incisos) { 
			output.push(["", pagina.incisos]);
		}
		if (pagina.cont_art) {
			output.push(["", pagina.cont_art]);
		}
	
		return output;
	}));
```

### Interpretación
---
Este libro se divide en 5 títulos, que se refieren respectivamente a las [[Libro Tercero, Título 1, Obligaciones en general|"Obligaciones en general"]], a los [[Libro Tercero, Título 2, Contratos en general|"Contratos en general"]], a los [[Libro Tercero, Título 3, Contratos de consumo|"Contratos de consumo]], a los [[Libro Tercero, Título 4, Contratos en particular|"Contratos en particular"]] y, finalmente, a [[Libro Tercero, Título 5, Otras fuentes de las obligaciones|"Otras fuentes de las obligaciones"]], en donde se refiere a la responsabilidad civil, la gestión de negocios, el empleo útil, el enriquecimiento sin causa, la declaración unilateral de voluntad y a los títulos valores

Lo más importante del método de nuestro [[Código Civil y Comercial de la Nación, Ley 26.994|Código]] es la reunión de las disposiciones comunes a todos los [[Contrato|contratos]] en un título particular. De todos modos, nos parece importante poner de relieve que esta parte general de los contratos no se agota en el [[Libro Tercero, Título 2, Contratos en general|título II del Libro Tercero]]. En efecto, no podrá prescindirse: 
1. de los contratos de consumo, regulados en el [[Libro Tercero, Título 3, Contratos de consumo|título III de este mismo libro]]
2. De las reglas referidas a la capacidad y a sus restricciones, fijadas en el [[Libro Primero, Título 1, Capítulo 2, Capacidad|Libro Primero, título I, capítulos 2]] y [[Libro Primero, Título 1, Capítulo 3, Derechos y actos personalísimos|capítulo 3]]
3. De lo previsto en materia de [[Hecho jurídico|hechos]] y [[Acto jurídico|actos jurídicos]] ([[Libro Primero, Título 4, Hechos y actos jurídicos|Libro Primero, título IV]]), sobre todo en lo que se trata de los elementos del acto jurídico y de los vicios tanto del consentimiento como del acto jurídico
4. Las disposiciones de derecho internacional privado fijadas en las [[Libro Sexto, Título 4, Capítulo 3, Sección 10, Forma de los actos jurídicos|sección 10]], [[Libro Sexto, Título 4, Capítulo 3, Sección 11, Contratos|sección 11]] y [[Libro Sexto, Título 4, Capítulo 3, Sección 12, Contratos de consumo|sección 12, del capítulo 3, del título IV, del Libro Sexto]].