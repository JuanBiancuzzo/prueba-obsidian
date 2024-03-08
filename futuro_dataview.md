Aca deberia verse dataview

```dataviewjs
const lista = "Hola tanto tiempo".split(" ");
dv.list(lista);
```

```tikz
\begin{document}
    \begin{tikzpicture}[
			scale = 4, 
			transform shape,
		]
		\draw[step=0.5, gray, thin] (-1.2, -0.2) grid (1.2, 1.2);
		\draw[step=0.1, gray, very thin] (-1.2, -0.2) grid (1.2, 1.2);

		\path (0, 0) -- (0, 1) 
			node[pos=0, below left, scale=0.3] {$0$}
			node[pos=0.5, left, scale=0.3] {$0.5$}
			node[pos=1, left, scale=0.3] {$1$};
		
		\path (-1, 0) -- (1, 0) 
			node[pos=0, below, scale=0.3] {$-1$}
			node[pos=0.25, below, scale=0.3] {$-0.5$}
			node[pos=0.75, below, scale=0.3] {$0.5$}
			node[pos=1, below, scale=0.3] {$1$};

		\draw[->, thick] (0, -0.2) -- (0, 1.2);
		\draw[->, thick] (-1.2, 0) -- (1.2, 0);

		\draw (1, 0) arc (0:180:1);
		
		\filldraw[color=blue!70, fill=blue!50] (0, 0) -- (0.3, 0) arc (0:50.42:0.3) -- (0, 0);
		\draw (0, 0) node[above=2.5pt, right=1.5pt, scale = 0.5] {$\alpha$};
		
		\draw[->, thick] (0, 0) -- (0.637, 0.77);
		\draw[dashed] (0.637, 0) -- (0.637, 0.77);
		\draw[dashed] (0, 0.77) -- (0.637, 0.77);

		\filldraw[color=blue!70, fill=blue!50] (0, 0) -- (0, 0.3) arc (90:140.42:0.3) -- (0, 0);
		\draw (-0.075, 0) node[above=1.5pt, scale = 0.5] {$\beta$};
		
		\draw[->, thick] (0, 0) -- (-0.77, 0.637);
		\draw[dashed] (-0.77, 0) -- (-0.77, 0.637);
		\draw[dashed] (0, 0.637) -- (-0.77, 0.637);

	\end{tikzpicture}
\end{document}
```

```tikz
\begin{document}
    \begin{tikzpicture}
		\draw[step=0.5, gray, thin] (-1.2, -0.2) grid (1.2, 1.2);
		\draw[step=0.1, gray, very thin] (-1.2, -0.2) grid (1.2, 1.2);
	\end{tikzpicture}
\end{document}
```
