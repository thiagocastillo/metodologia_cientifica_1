> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 2)

# Inferencia Estadística

La inferencia estadística es el conjunto de métodos que permiten obtener conclusiones sobre una población a partir de la información obtenida en una muestra. Dado que estudiar a toda la población suele ser imposible, la inferencia utiliza técnicas probabilísticas para estimar parámetros, tomar decisiones y cuantificar la incertidumbre asociada a esas conclusiones.

La inferencia estadística se apoya en dos pilares fundamentales:

- **Estimación de parámetros**: consiste en calcular valores que aproximen los verdaderos parámetros poblacionales (media, proporción, varianza, etc.).
- **Pruebas de hipótesis**: métodos formales para decidir si los datos de la muestra aportan evidencia suficiente para aceptar o rechazar afirmaciones sobre la población.

## Estimación de parámetros

La estimación de parámetros es el proceso mediante el cual calculamos, a partir de una muestra, valores que aproximan características verdaderas pero desconocidas de la población. Para comprender esta etapa de la inferencia estadística, es fundamental distinguir los conceptos de parámetro, estadístico y estimador.

### Parámetro

Un parámetro es una característica numérica de la población completa. Es un valor fijo pero desconocido, porque rara vez es posible medir a todos los individuos.

Ejemplos:

- Media poblacional μ
- Proporción real p
- Varianza poblacional σ²
- Desvío estándar poblacional σ

Los parámetros representan la "verdad" de la población, aunque no podamos observarlos directamente.

### Estadístico

Un estadístico es cualquier medida calculada a partir de los datos de una muestra.

Ejemplos:

- Media muestral x̄
- Proporción muestral p̂
- Varianza muestral s²
- Desvío estándar muestral s

Un estadístico varía de muestra en muestra (variabilidad muestral). No es fijo como un parámetro: está sujeto al azar del muestreo.

### Estimador

Un estimador es un estadístico usado específicamente para estimar un parámetro. Es decir:

- Estadístico = número calculado en la muestra
- Estimador = estadístico considerado como "regla" para estimar un parámetro

Ejemplos:

- x̄ actúa como estimador de μ
- p̂ actúa como estimador de p
- s² actúa como estimador de σ²

Cuando aplicamos el estimador a una muestra concreta obtenemos un estimado (el valor numérico).

A la hora de evaluar la calidad de un estimador, no alcanza con saber si es sesgado o no. También importa cuánta variabilidad tiene entre muestras. Por eso se analizan sesgo y varianza en conjunto.

1. **Estimador sesgado**: un estimador es sesgado si su valor esperado no coincide con el parámetro poblacional. En promedio, el estimador se aleja del valor verdadero, aunque puede ser muy preciso (baja varianza).
2. **Estimador no sesgado con alta varianza**: el estimador acierta en promedio, pero sus valores fluctúan mucho de una muestra a otra. Es poco preciso, especialmente con tamaños muestrales pequeños.
3. **Estimador no sesgado y de varianza mínima (estimador óptimo)**: este tipo de estimador es el ideal. Acierta en promedio y es el más preciso posible entre todos los estimadores insesgados.

### Distribución muestral

La distribución muestral describe cómo se comporta un estadístico (por ejemplo, la media o la proporción muestral) cuando se consideran todas las muestras posibles de un mismo tamaño extraídas de una población.

No describe a los individuos, sino a los valores que toma el estadístico de muestra en muestra. En otras palabras: si de una población extraemos muchas muestras y calculamos la media de cada una, obtendremos una serie de medias. La distribución de esos valores constituye la distribución muestral de la media.

Entonces, la distribución muestral de la media tiene propiedades fundamentales:

1. La media de las medias muestrales es igual a la media poblacional:

$$E(\bar{x}) = \mu$$

2. La variabilidad de las medias muestrales es menor que la de los datos individuales y está dada por la varianza:

$$Var(\bar{x}) = \frac{\sigma^2}{n}$$

3. El error estándar de la media (SE) mide esa variabilidad entre muestras:

$$SE_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

Esto explica por qué, a mayor tamaño muestral, menor es la dispersión de las medias y mayor la precisión del estimador.

### Teorema Central del Límite

Si se toman muestras al azar de tamaño suficientemente grande y calculamos la media muestral de cada una, la distribución de esas medias será aproximadamente normal, sin importar la distribución original de la población.

### Ejercicios de ejemplo

**¿Cuál es la probabilidad de que al tomar una muestra de 10 personas la media muestral sea mayor a 190 mm?**

Datos: μ = 185.6, σ = 12.7

El error estándar nos dice cuánto puede variar el promedio muestral, por lo que será lo primero a calcular:

$$SE = \frac{\sigma}{\sqrt{n}} = \frac{12.7}{\sqrt{10}} = 4.02$$

Nosotros queremos: $P(\bar{x} > 190)$. Para eso estandarizamos con Z:

$$Z = \frac{\bar{x} - \mu}{SE} = \frac{190 - 185.6}{4.02} = 1.09$$

Una vez hecho esto, pasamos a probabilidad mediante las tablas Z:

$$P(Z \leq 1.09) = 0.8621$$

$$P(Z > 1.09) = 1 - 0.8621 = 0.1379$$

Hay una probabilidad de 13,6% de que el promedio muestral sea mayor a 190 mm.

**Una población tiene μ = 500 y σ = 50. Se extraen muestras de tamaño n = 100. Calcule la probabilidad de que la media muestral esté entre 490 y 510.**

Se pide calcular $P(490 < \bar{x} < 510)$

$$SE = \frac{50}{\sqrt{100}} = \frac{50}{10} = 5$$

Ahora transformamos ambos valores a Z:

$$Z_1 = \frac{490 - 500}{5} = \frac{-10}{5} = -2$$

$$Z_2 = \frac{510 - 500}{5} = \frac{10}{5} = 2$$

Entonces:

$$P(490 < \bar{x} < 510) = P(-2 < Z < 2)$$

Usando la tabla Z: $P(Z < -2) = 0.0228$, $P(Z < 2) = 0.9772$

$$P(-2 < Z < 2) = \Phi(2) - \Phi(-2) = 0.9772 - 0.0228 = 0.9544$$

Hay aproximadamente un 95% de probabilidad de que la media muestral de una muestra de 100 observaciones se encuentre entre 490 y 510.

## Estimación por intervalo

Al calcular el promedio muestral obtenemos únicamente un número, que puede estar cerca o lejos del valor real del parámetro poblacional. Para superar esa limitación, utilizamos la estimación por intervalo, un método que en lugar de dar un único valor, entrega un rango dentro del cual se espera que se encuentre el verdadero parámetro, con un nivel de confianza previamente determinado.

Forma general del intervalo de confianza:

$$IC = \bar{x} \pm Z_{\alpha/2} \times SE$$

- $Z_{\alpha/2}$: valor crítico de la normal estándar según nivel de confianza.
- $\alpha$: probabilidad de error; si el nivel de confianza es 95% (0.95), la probabilidad de error es 5% (0.05).
- $SE$: error estándar $= \dfrac{\sigma}{\sqrt{n}}$

Cuando construimos un intervalo de confianza, necesitamos un valor crítico de Z que marque hasta dónde debemos ir en la curva normal estándar para cubrir cierto porcentaje del área (probabilidad). Ese valor crítico depende del nivel de confianza elegido: 90%, 95%, 99%, etc.

Valores típicos:

| Nivel de confianza | $Z_{\alpha/2}$ |
|---|---|
| 90% | $Z_{0.05} = 1.64$ |
| 95% | $Z_{0.025} = 1.96$ |
| 99% | $Z_{0.005} = 2.58$ |

Ejemplo: un intervalo de confianza del 90% deja un 10% de probabilidad fuera (5% en cada cola). Entonces debemos buscar el punto de corte, tal que a su izquierda haya 95% y a su derecha un 5%:

$$95\% \Rightarrow Z_{\alpha/2} = Z_{0.05}$$

$Z_{0.05}$: buscar en la tabla el valor más cercano a 0.9500 (95%) = 1.64

### Ejercicio de ejemplo

**En una población con desvío estándar conocido σ = 10, se toma una muestra aleatoria de tamaño n = 64. La media muestral es x̄ = 120. Construya el intervalo de confianza del 95% para la media poblacional e interprete el resultado.**

Calculamos el error estándar:

$$SE = \frac{10}{\sqrt{64}} = \frac{10}{8} = 1.25$$

Ahora calculamos el margen de error:

$$IC = \bar{x} \pm Z_{\alpha/2} \times SE$$

En este caso: $Z_{\alpha/2} = Z_{0.025} = 1.96$

$$Z_{\alpha/2} \times SE = 1.96 \times 1.25 = 2.45$$

Una vez hecho esto construimos el intervalo:

$$IC_{95\%} = 120 \pm 2.45$$

Límite inferior: $120 - 2.45 = 117.55$

Límite superior: $120 + 2.45 = 122.45$

Si repitiéramos el muestreo muchas veces y construyéramos un IC del 95% cada vez, aproximadamente el 95% de esos intervalos contendrían la verdadera media poblacional μ.

En este caso, el método produjo el intervalo (117.55, 122.45), que es el rango plausible para μ con 95% de confianza.

### Longitud de intervalo

La longitud del intervalo (o ancho del intervalo) es la medida de cuán amplio es un intervalo de confianza. Representa el grado de precisión de la estimación: cuanto menor es la longitud, mayor es la precisión.

$$L = 2 \times Z_{\alpha/2} \times SE \quad \text{o} \quad L = 2 \times \text{Margen de error}$$

**Cambios de longitud**

Si se mantienen constantes el nivel de confianza (valor crítico $Z_{\alpha/2}$) y la variabilidad poblacional (σ), la longitud del intervalo de confianza depende exclusivamente del tamaño muestral.

Ejemplo: Supongamos:

- Longitud original del intervalo: $L_1 = 4.7$
- Tamaño muestral original: $n_1 = 25$
- Se desea reducir la longitud a un tercio del valor original

$$L_2 = \frac{L_1}{k} = \frac{4.7}{3} = 1.56$$

- $k$ es el factor de reducción de la longitud. Si quiero que la longitud original se reduzca a un tercio, entonces k será igual a 3.

Este resultado indica cuál es la nueva longitud deseada, pero aún falta determinar el nuevo tamaño muestral. Para eso aplicamos la siguiente fórmula:

$$n_2 = k^2 \times n_1$$

$$n_2 = 3^2 \times 25 = 225$$

Esto nos dice que para que el intervalo de confianza sea 3 veces más angosto, es necesario aumentar el tamaño muestral de 25 a 225.

## Fórmulas

$$Var(\bar{x}) = \frac{\sigma^2}{n} \qquad SE_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

$$IC = \bar{x} \pm Z_{\alpha/2} \times SE$$

$$L = 2 \times Z_{\alpha/2} \times SE$$

$$n_2 = k^2 \times n_1$$
