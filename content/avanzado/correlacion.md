> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 5)

# Correlación

La correlación es una herramienta estadística que permite evaluar en qué medida dos variables cuantitativas varían conjuntamente. Indica qué tan "acompañadas" están ambas variables y si existe entre ellas una asociación de tipo lineal.

Su objetivo es determinar si, al variar una variable, la otra también lo hace, ya sea en el mismo sentido o en sentido opuesto. Ejemplos: peso ↔ talla u horas de estudio ↔ rendimiento académico.

## Coeficiente de correlación de Pearson (r)

La relación entre ambas variables se resume mediante un único valor numérico, denominado coeficiente de correlación de Pearson (r), que expresa la intensidad y la dirección de la relación lineal.

- Toma valores entre −1 y +1
- $r = +1$: correlación positiva perfecta, al aumentar la variable X, la variable Y aumenta de manera proporcional.
- $r = -1$: correlación negativa perfecta, al aumentar X, Y disminuye de forma proporcional.
- $r = 0$: ausencia de correlación lineal

$$r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \times \sum (y_i - \bar{y})^2}}$$

## De r (muestral) a ρ (poblacional)

Cuando calculamos una correlación de Pearson en una muestra, obtenemos r, que es solo una estimación del verdadero coeficiente de correlación poblacional ρ. Para evaluar si la correlación poblacional es distinta de cero, se utiliza una prueba t.

$$t = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}}$$

Este estadístico sigue una distribución t de Student con:

$$gl = n - 2$$

Con el t observado y gl buscamos el valor p en la tabla.

- Si $p < \alpha$ → correlación significativa (se rechaza H₀)
- Si $p \geq \alpha$ → no hay evidencia suficiente de correlación (no se rechaza H₀)

## Consideraciones clave sobre la correlación (r → ρ)

- En el contraste de hipótesis de la correlación de Pearson, se utiliza siempre una prueba bilateral, ya que se evalúa si el coeficiente de correlación poblacional (ρ) es distinto de cero, sin asumir previamente la dirección de la relación.
- La correlación de Pearson se aplica a variables cuantitativas continuas y evalúa específicamente relaciones de tipo lineal.
- La existencia de correlación no implica causalidad: dos variables pueden estar correlacionadas sin que una sea causa de la otra, ya sea por la influencia de variables confundentes, relaciones indirectas o coincidencia.

## Fórmulas

$$r = \frac{\sum (x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum (x_i - \bar{x})^2 \times \sum (y_i - \bar{y})^2}}$$

$$t = \frac{r\sqrt{n-2}}{\sqrt{1-r^2}} \qquad gl = n - 2$$
