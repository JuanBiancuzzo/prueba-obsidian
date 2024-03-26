Lista de todas las materias dividido por los cuatrimestres que los hice

```dataviewjs
function nombre_cuatrimestre(cuatrimestre) {
	let pagina = cuatrimestre.rows[0];
	let [anio, cuatri] = pagina.cuatri.split("C");
	cuatri += (parseInt(cuatri) == 1) ? "er" : "do";
	return cuatri + " cuatrimestre del 20" + anio;
}

function nombre_materia(materia) {
	return materia.file.name.replace(`(${materia.codigo})`, "").trim();
}

let materiasXcuatri = dv.pages("#materia")
	.groupBy(pagina => {
		return pagina.cuatri
	}).sort(cuatrimestre => {
		let [anio, cuatri] = cuatrimestre.key.split("C");
		anio = parseInt(anio);
		cuatri = parseInt(cuatri) - 1;
		return anio + 0.5 * cuatri;
	}, 'desc');

dv.list([["hola", "tanto", "tiempo"], ["soy", "una", "multi"], ["lista"]]);

dv.list(materiasXcuatri.flatMap(cuatri => cuatri.rows.file.name));

for (let cuatri of materiasXcuatri) {
	dv.table([nombre_cuatrimestre(cuatri), "Código", "Estado", "Plan"], cuatri.rows.map(materia => {
		let nombre = nombre_materia(materia);
		let path = materia.file.path;
		return [
			nombre + " [[" + path + "|?]]",
			materia.codigo,
			materia.estado,
			materia.plan
		]
	}));
	dv.el("br", "")
}
```
