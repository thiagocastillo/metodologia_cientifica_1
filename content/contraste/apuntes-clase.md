> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 2)

# Contraste de Hipótesis para Medias

Una prueba de hipótesis es un procedimiento estadístico que permite tomar una decisión sobre un parámetro poblacional (media, proporción, etc.) utilizando información de una muestra, considerando explícitamente el azar del muestreo.

El objetivo es evaluar si los datos muestrales aportan evidencia suficiente para rechazar una afirmación inicial sobre la población.

En otras palabras, es el proceso mediante el cual se evalúa si una hipótesis sobre una población es compatible con los datos de una muestra.

## Elementos de una prueba de hipótesis

**1. Hipótesis nula (H₀)**

La hipótesis nula es la afirmación que se pone a prueba. Generalmente representa:

- ausencia de efecto
- ausencia de diferencia
- igualdad con un valor teórico

**2. Hipótesis alternativa (H₁ o Hₐ)**

La hipótesis alternativa es lo que se quiere demostrar. Plantea que existe:

- diferencia
- efecto
- cambio

**3. Nivel de significación (α)**

El nivel de significación es la probabilidad máxima de cometer un error tipo I (rechazar H₀ cuando es verdadera). Usualmente α = 0.05.

**4. Estadístico de prueba**

Es un valor calculado a partir de la muestra que mide cuánto se alejan los datos de lo que plantea H₀. Los cuales pueden ser:

- Z (σ conocida o n grande y proporciones)
- t-Student (σ desconocida, n pequeño)
- χ² (otros contextos)

Prueba Z (σ conocida):

$$Z = \frac{\bar{x} - \mu_0}{\sigma / \sqrt{n}}$$

Prueba t-Student (σ desconocida y muestra pequeña):

$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$

Proporciones:

$$Z = \frac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}$$

**5. Valor p**

El valor p es la probabilidad, suponiendo que H₀ es verdadera, de obtener un resultado tan extremo o más que el observado. Este valor se obtiene gracias a las tablas Z, t o chi cuadrado.

- Si $p \leq \alpha$ (nivel de significación) → se rechaza H₀. Esto significa que, asumiendo que H₀ es verdadera, la probabilidad de obtener un resultado tan extremo o más extremo que el observado es tan baja que se considera incompatible con H₀, por lo que se decide rechazarla.
- Si $p > \alpha$ → no se rechaza H₀. Esto indica que, asumiendo que H₀ es verdadera, el resultado observado no es lo suficientemente extremo como para considerarlo incompatible con H₀, por lo que no se cuenta con evidencia estadística suficiente para rechazarla.

## Errores en pruebas de hipótesis

En una prueba de hipótesis los errores se refieren a decisiones incorrectas que se toman al contrastar la hipótesis nula con la evidencia muestral. Existen dos tipos clásicos de error:

**Error Tipo I (α)**: rechazar H₀ cuando en realidad es verdadera.

- Es un falso positivo.
- Su probabilidad está controlada por el nivel de significación (α), que suele fijarse antes del análisis (por ejemplo, α = 0,05).
- Interpretación práctica: se concluye que hay efecto, diferencia o asociación cuando no la hay.

**Error Tipo II (β)**: no rechazar H₀ cuando en realidad es falsa.

- Es un falso negativo.
- Su probabilidad es β.
- Interpretación práctica: no detectar un efecto que sí existe.

## Pasos de la prueba de hipótesis

- Plantear H₀ y H₁
- Elegir α
- Elegir el estadístico (Z, t o χ²)
- Calcular el estadístico
- Calcular p o comparar con valor crítico
- Decidir
- Interpretar en contexto

## Distribución t-Student

La distribución t de Student se utiliza para la inferencia sobre la media poblacional cuando el tamaño muestral es pequeño (n < 30) y la desviación estándar poblacional (σ) es desconocida. En estas situaciones no es apropiado utilizar la distribución normal estándar (Z), ya que la variabilidad debe estimarse a partir de la muestra, lo que introduce una mayor incertidumbre.

La distribución t incorpora esta incertidumbre adicional mediante una curva más aplanada y con colas más anchas que la normal, lo que se traduce en intervalos de confianza más amplios y pruebas más conservadoras. A medida que el tamaño muestral aumenta, la distribución t converge a la distribución normal.

En la práctica, la t de Student se aplica utilizando el desvío estándar muestral (s) y los grados de libertad (gl):

$$gl = n - 1$$

### Intervalo de confianza con t de Student

Cuando σ es desconocida, el intervalo de confianza para la media se construye como:

$$IC = \bar{x} \pm t_{\alpha/2,\,gl} \times SE$$

- $t_{\alpha/2,\,gl}$ = valor crítico de la t de Student

### Tablas t

Las tablas t cumplen la misma función que las tablas Z: permiten obtener valores críticos y probabilidades asociados a la distribución de un estadístico.

La diferencia central es que la distribución t no es única, sino que depende de los grados de libertad.

Las tablas t presentan los valores críticos de la distribución t asociados a determinadas probabilidades (p-valores). Estos valores pueden corresponder a un solo extremo de la distribución (pruebas unilaterales) o a dos extremos (pruebas bilaterales).

La elección de cuál valor crítico utilizar no es arbitraria: depende directamente de la hipótesis alternativa (H₁), que indica dónde se busca la evidencia para rechazar la hipótesis nula. En consecuencia, H₁ determina la ubicación de la región crítica en la distribución del estadístico de prueba y, por lo tanto, si debe utilizarse un valor crítico de una cola o de dos colas de la tabla t.

- Si H₁ plantea "mayor que" (>), la evidencia se busca en valores grandes del estadístico, por lo que la región crítica se ubica en la cola derecha. En este caso se utiliza una prueba unilateral, y las tablas t proporcionan el valor crítico asociado a un solo extremo de la distribución.
- Si H₁ plantea "menor que" (<), la evidencia se busca en valores pequeños del estadístico, ubicándose la región crítica en la cola izquierda. También se trata de una prueba unilateral, y un único extremo.
- Si H₁ plantea "distinto de" (≠), la evidencia se busca en valores extremos en ambas direcciones, por lo que la región crítica se reparte en dos colas. En este caso se utiliza una prueba bilateral, y las tablas t entregan el valor crítico correspondiente a dos extremos de la distribución.

### Ejercicio de ejemplo

**Una población tiene, según registros previos, una media de 50. Se toma una muestra de n = 16 observaciones y se obtiene x̄ = 53, s = 4. Se desea evaluar si la media poblacional es mayor que 50, usando α = 0.05.**

Primero planteamos las hipótesis:

$$H_0: \mu = 50 \qquad H_1: \mu > 50$$

Como se busca saber si la media es mayor que 50, hablamos de una prueba unilateral.

$$gl = 16 - 1 = 15$$

Valor crítico de $t_{0.05}$

Calculamos el error estándar:

$$SE = \frac{4}{\sqrt{16}} = \frac{4}{4} = 1$$

Calculamos el estadístico t:

$$t = \frac{\bar{x} - \mu_0}{SE} = \frac{53 - 50}{1} = 3$$

**Decisión**:

- Si el estadístico t es mayor que el valor crítico t, se rechaza la hipótesis nula.
- Si el valor p es menor que el nivel de significación (α), la hipótesis también se rechaza.

$$t_{obs} > t_{crit} \Rightarrow \text{rechazo } H_0$$

$$3 > 1.75 \Rightarrow \text{rechazo } H_0$$

Para encontrar el valor p, debemos comparar la probabilidad asociada al t observado (p-valor) con el nivel de significación.

$$\text{Valor-P} < \alpha \Rightarrow \text{rechazo } H_0$$

$$0.005 < 0.05 \Rightarrow \text{rechazo } H_0$$

Esto confirma que la media poblacional es significativamente mayor que 50.

## Fórmulas

**Estimación de parámetros**

$$IC = \bar{x} \pm Z_{\alpha/2} \times SE \qquad Var(\bar{x}) = \frac{\sigma^2}{n} \qquad SE = \frac{\sigma}{\sqrt{n}} \qquad L = 2 \times Z_{\alpha/2} \times SE$$

**t-Student**

$$IC = \bar{x} \pm t_{\alpha/2,\,gl} \times SE \qquad gl = n - 1 \qquad t = \frac{\bar{x} - \mu_0}{SE}$$

**Hipótesis**

$$Z_{obs} > Z_{crit} \Rightarrow \text{rechazo } H_0 \qquad t_{obs} > t_{crit} \Rightarrow \text{rechazo } H_0 \qquad \text{Valor-P} < \alpha \Rightarrow \text{rechazo } H_0$$
