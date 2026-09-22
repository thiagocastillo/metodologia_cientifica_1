> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 4)

# Muestras Pareadas e Independientes

Cuando se comparan medias entre dos grupos, el primer paso es determinar si las muestras son independientes (grupos formados por personas distintas) o pareadas/dependientes (las mismas personas medidas en dos momentos o condiciones). Esta distinción es fundamental, ya que define el estadístico adecuado a utilizar y previene interpretaciones erróneas de los resultados.

El procedimiento general de un contraste de hipótesis sigue una secuencia lógica y estandarizada: primero se formulan la hipótesis nula (H₀) y la hipótesis alternativa (H₁); luego se fija el nivel de significación (α), que representa la probabilidad de cometer un error tipo I. A continuación, se elige el estadístico de prueba apropiado, se calcula con los datos observados y, finalmente, se toma la decisión de rechazar o no rechazar H₀ según la evidencia obtenida.

## Muestras pareadas

Se utiliza cuando los mismos individuos son medidos en dos momentos o condiciones (por ejemplo, antes y después de una intervención). En este diseño, cada persona actúa como su propio control, lo que reduce la variabilidad, mejora la precisión de la estimación y aumenta la potencia estadística.

Ejemplo: peso corporal antes y después de una dieta.

### Procedimiento de análisis

**1. Calcular la diferencia en cada par**

$$d_i = x_i - y_i$$

**2. Calcular la media de esas diferencias y se analiza si es distinta a 0**

$$\bar{d} = \frac{\sum d_i}{n}$$

**3. Calculamos el desvío estándar de las diferencias (en caso de que no lo den)**

$$S_d = \sqrt{\frac{\sum (d_i - \bar{d})^2}{n-1}}$$

**4. Plantear las hipótesis**

- $H_0: \mu_d = 0$ (no hay cambio)
- $H_1$: depende del objetivo del ejercicio

**5. Calcular el estadístico t**

Este nos dice cuán improbable es el efecto observado ($\bar{d}$) asumiendo que H₀ es cierta.

$$t = \frac{\bar{d} - 0}{S_d / \sqrt{n}}$$

**6. Grados de libertad**

$$gl = n - 1$$

**7. Y por último se debe concluir**

Hay dos formas para saber si rechazar o no la hipótesis nula (H₀), con el valor crítico o la probabilidad (valor-P).

- **Valor crítico**: se busca en la tabla t según gl y α.
  - t crítico unilateral (α, gl)
  - t crítico bilateral (α/2, gl)

  El resultado se compara con el valor t observado:

  $$t_{obs} > t_{crítico} \Rightarrow \text{rechazo } H_0$$

  $$t_{obs} < t_{crítico} \Rightarrow \text{no rechazo } H_0$$

- **Probabilidad (valor-P)**: se busca en la tabla el intervalo donde cae el t observado, allí se obtiene un rango para p. Ejemplo: p < 0.005, p < 0.0025

  $$p < \alpha \Rightarrow \text{rechazo } H_0$$

  $$p \geq \alpha \Rightarrow \text{no rechazo } H_0$$

  p indica cuán raro es el valor observado si H₀ fuera cierta. Un p chico dice que el resultado es muy raro si H₀ fuera cierta, por lo que se rechaza H₀.

## Muestras independientes

Se utiliza cuando se comparan medias de dos grupos formados por personas distintas, sin relación entre sí (por ejemplo, grupo tratado vs. grupo control). A diferencia de las muestras pareadas, cada individuo pertenece a un solo grupo y no actúa como su propio control.

Ejemplo: comparar la presión arterial media entre pacientes que reciben un fármaco y pacientes que reciben placebo.

### Procedimiento de análisis

**1. Definir los grupos**

- Grupo 1: $\bar{x}_1, S_1, n_1$
- Grupo 2: $\bar{x}_2, S_2, n_2$

**2. Plantear la hipótesis**

- $H_0: \mu_1 = \mu_2$ (no hay cambio)
- $H_1: \mu_1 \neq \mu_2$, > o < según el objetivo (bilateral o unilateral).

**3. Elegir el modelo según varianzas**

- Varianzas iguales: t de Student clásica (varianza conjunta).
- Varianzas distintas: t de Welch (recomendado si hay duda).

**Usando varianza conjunta**

Si $S_1$ y $S_2$ son parecidas se asume que son varianzas iguales. Esto se evalúa dividiendo las varianzas: si el resultado es menor a 2, se usa varianza conjunta:

$$\frac{S_1^2}{S_2^2} < 2$$

$$s_p^2 = \frac{(n_1 - 1)s_1^2 + (n_2 - 1)s_2^2}{n_1 + n_2 - 2}$$

Luego calcular el desvío conjunto:

$$s_p = \sqrt{s_p^2}$$

Calcular el error estándar:

$$SE = s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}$$

Grados de libertad:

$$gl = n_1 + n_2 - 2$$

**Usando Welch**

Si $S_1$ y $S_2$ son diferentes se usa Welch (este método es más rápido):

$$SE = \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}$$

Grados de libertad, el valor más pequeño de estas dos restas:

$$gl = \min(n_1 - 1,\ n_2 - 1)$$

**4. Luego de usar Welch o Varianza conjunta se calcula el estadístico t**

$$t = \frac{\bar{x}_1 - \bar{x}_2}{SE}$$

**5. Concluir**, con valor crítico o valor p.

### Prueba de Mann–Whitney U

La prueba de Mann–Whitney U es una alternativa no paramétrica a la t de Student para dos muestras independientes. Se utiliza cuando no se cumple la normalidad, hay outliers importantes o la variable es ordinal.

Compara los rangos de los valores entre ambos grupos, no las medias, y evalúa si sus distribuciones (o tendencia central) difieren. No requiere normalidad ni igualdad de varianzas.

Ejemplo: se compara el número de hijos entre:

- Grupo A: mujeres con empleo formal.
- Grupo B: mujeres sin empleo formal.

Como los datos no siguen una distribución normal, se aplica Mann–Whitney U para comparar los rangos del número de hijos entre ambos grupos.

Variables de conteo como el número de hijos son candidatas frecuentes para pruebas como Mann–Whitney U cuando se comparan dos grupos independientes.

## Ejercicios de ejemplo

### Muestras pareadas

**Un nutricionista mide el peso (kg) de 8 personas antes y después de 4 semanas de dieta. Pregunta: ¿La dieta reduce el peso promedio? Usa α = 0.05**

| Persona | Antes | Después |
|---|---|---|
| 1 | 82 | 80 |
| 2 | 75 | 74 |
| 3 | 90 | 87 |
| 4 | 68 | 67 |
| 5 | 85 | 83 |
| 6 | 77 | 76 |
| 7 | 72 | 71 |
| 8 | 88 | 86 |

**Definir diferencias**

Tomar $d_i$ = Antes – Después

Diferencias: 2, 1, 3, 1, 2, 1, 1, 2

**Plantear hipótesis**

$$H_0: \mu_d = 0\ (\text{no hay cambio promedio})$$

$$H_1: \mu_d > 0\ (\text{baja el peso: antes} - \text{después es positivo})$$

**Media de diferencias**

$$\bar{d} = \frac{2+1+3+1+2+1+1+2}{8} = \frac{13}{8} = 1.625$$

**Desvío estándar de las diferencias**

$$S_d = \sqrt{\frac{\sum(d_i - \bar{d})^2}{n-1}}$$

Primero calcular $(d_i - \bar{d})$: 0.375, -0.625, 1.375, -0.625, 0.375, -0.625, -0.625, 0.375

Cuadrados: 0.1406, 0.3906, 1.8906, 0.3906, 0.1406, 0.3906, 0.3906, 0.1406

Suma: $\sum(d_i - \bar{d})^2 = 3.875$

$$S_d = \sqrt{\frac{3.875}{8-1}} = \sqrt{0.5536} = 0.744$$

**Estadístico t**

$$t = \frac{\bar{d} - 0}{S_d/\sqrt{n}} = \frac{1.625}{0.744/\sqrt{8}} = \frac{1.625}{0.263} = 6.18$$

**Grados de libertad**

$$gl = n - 1 = 7$$

**Decisión**

Para α = 0.05 unilateral y gl = 7, $t_{crítico} \approx 1.895$

Como 6.18 > 1.895, rechazo H₀

Hay evidencia de que la dieta reduce el peso promedio.

### Muestras independientes

**Se quiere comparar la presión arterial sistólica (mmHg) entre dos grupos independientes:**

- Grupo A (tratamiento): 122, 125, 120, 118, 126, 121, 123, 119
- Grupo B (control): 130, 128, 135, 132, 129, 131, 134, 133

Pregunta: ¿Difieren las medias? Usa α = 0.05 (bilateral)

**Resúmenes de cada grupo**

$$\bar{x}_A = \frac{974}{8} = 121.75 \qquad \bar{x}_B = \frac{1052}{8} = 131.50$$

**Varianzas muestrales**

$$S_A^2 = \frac{\sum(x_i - \bar{x})^2}{n-1} = \frac{55.5}{7} = 7.9286$$

$$S_B^2 = \frac{\sum(x_i - \bar{x})^2}{n-1} = \frac{42}{7} = 6.0000$$

**Desvío estándar**

$$S_A = \sqrt{7.9286} = 2.8165 \qquad S_B = \sqrt{6} = 2.4495$$

**Elegir el modelo según varianzas**

$$\frac{S_A^2}{S_B^2} = \frac{7.9286}{6.0} = 1.32$$

Como el valor al dividir las varianzas es menor a 2, se consideran varianzas iguales.

**Test t de Student (varianza conjunta)**

$$s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2} = \frac{7 \times 7.9286 + 7 \times 6.0}{14} = 6.9643$$

**Desvío estándar conjunto**

$$s_p = \sqrt{6.9643} = 2.640$$

**Error estándar de la diferencia**

$$SE = s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}} = 2.640 \times \sqrt{0.25} = 1.320$$

**Estadístico t**

$$t = \frac{\bar{x}_1 - \bar{x}_2}{SE} = \frac{-9.75}{1.320} = -7.386$$

**Grados de libertad**

$$gl = n_A + n_B - 2 = 14$$

**Decisión**

Para α = 0.05 bilateral y gl = 14, $t_{crítico} \approx 2.145$

Como -7.45 > 2.145 (en valor absoluto), rechazo H₀

Las medias difieren; el grupo tratamiento tiene presión media menor.

Dato: el signo (−) solo indica dirección (qué grupo tiene mayor media). La decisión estadística depende del tamaño del efecto, no del signo. Por eso -7.45 → 7.45.

## Fórmulas

**Pareadas**

$$d_i = x_i - y_i \qquad \bar{d} = \frac{\sum d_i}{n} \qquad S_d = \sqrt{\frac{\sum(d_i - \bar{d})^2}{n-1}}$$

$$t = \frac{\bar{d} - 0}{S_d/\sqrt{n}} \qquad gl = n - 1$$

**Independientes**

1. Varianza conjunta:

$$s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1+n_2-2} \qquad s_p = \sqrt{s_p^2} \qquad SE = s_p\sqrt{\frac{1}{n_1}+\frac{1}{n_2}} \qquad gl = n_1+n_2-2$$

2. Welch:

$$SE = \sqrt{\frac{S_1^2}{n_1}+\frac{S_2^2}{n_2}} \qquad gl = \min(n_1-1,\ n_2-1)$$

$$t = \frac{\bar{x}_1 - \bar{x}_2}{SE}$$
