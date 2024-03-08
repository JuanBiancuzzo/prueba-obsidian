---
dia: 2023-01-22
materia: analisis 2
capitulo: 3
---
### Definición
---
La idea de componer funciones, significa "sustituir una función en otra", donde teniendo dos funciones de una variable, $y = f(x)$ y $x = g(u)$ podemos reemplazar una en otra, haciendo $y = f(g(u))$. Obteniendo así la composición de $f$ con $g$, denotado como $f \circ g$

Cuando tenemos [[Función|funciones]], tenemos que tener en cuenta que se corresponda el [[Codominio|codominio]] de una con el [[Dominio|dominio]] de otra

Supongamos que tenemos la función $z = f(x, y)$ entonces como necesito dos funciones (su dominio perteneciendo a $\mathbb{R}^2$), una para cada variable, digamos $g_1$ y $g_2$,

$$ x = g_1(u, v), y = g_2(u, v) $$

Entonces ahora si podemos hacer la composición

$$ z = f(g_1(u, v), g_2(u, v)) $$

Que también podríamos expresar una sola función $g$ tal que $g : U \subseteq \mathbb{R}^2 \to \mathbb{R}^2$, haciendo que la composición sea

$$ z = f(g(u, v)) $$

De cualquier forma, esto se vería, gráficamente como

```tikz
\begin{document} 
	\begin{tikzpicture}

		\coordinate (u) at (0, 0) {};
		\coordinate (x) at (6, 0) {};
		\coordinate (y) at (12, 0) {};
	
		\foreach \coor/\letra in {(u)/u, (x)/x, (y)/y} {
			\draw[thick] \coor circle (2);
			\filldraw \coor circle (0.1)
				node[above left=2pt] {$\letra$};
		}		

		\draw [->, shorten >=20pt, shorten <=10pt] (u) 
			.. controls +(2, 2) and +(-2, 2) .. (x)
			node[midway, above=2pt] {$g$};
		\draw [->, shorten >=20pt, shorten <=10pt] (x) 
			.. controls +(2, 2) and +(-2, 2) .. (y)
			node[midway, above=2pt] {$f$};
		\draw [->, shorten >=10pt, shorten <=10pt] (u) 
			.. controls +(2, -3.8) and +(-2, -3.8) .. (y)
			node[midway, above=1pt] {$f \circ g$};
			
	\end{tikzpicture}
\end{document}
```