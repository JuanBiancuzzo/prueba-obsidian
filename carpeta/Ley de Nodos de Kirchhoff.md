---
dia: 2023-01-23
materia: intro
capitulo: 1
---
### Definición
---
La suma de todas las [[Corriente eléctrica|corrientes]] eléctricas entrantes a un [[Nodo]] es igual a la suma de todas las corrientes salientes. Esta parte del principio de [[Conservación de carga]]

```tikz
\usepackage{circuitikz} 
\begin{document} 
	\begin{circuitikz}[voltage shift=0.5, scale=2, transform shape, thick]
		\draw (-1, 1) to[short, i=I2, european, o-*] (0, 0);
		\draw (-1, -1) to[short, i=I1, european, o-] (0, 0);
		\draw (0, 0) to[short, i_=I3, european, -o] (1, 1);
		\draw (0, 0) to[short, i_=I4, european, -o] (1, -1);
	\end{circuitikz}
\end{document}
```

Entonces $$ \sum^n i_\text{entrante} = \sum^m i_\text{saliente} $$

