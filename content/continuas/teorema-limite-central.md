> Fuente: `TLC 2026.pdf` (diapositivas de clase)

# Teorema del Límite Central

## Definición

El Teorema del Límite Central (TLC) establece que, cuando se toman muchas muestras aleatorias de tamaño $n$ suficientemente grande de una población con media $\mu$ y desvío estándar $\sigma$, la distribución de las medias muestrales tiende a ser aproximadamente normal, independientemente de la forma de la distribución original.

### Parámetros de la distribución de las medias muestrales

**Media de las medias muestrales:**

$$\mu_{\bar{x}} = \mu$$

**Error estándar (o error típico, EE):**

$$\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

## Idea intuitiva: de la variable original a la media muestral

Supongamos una variable $x$ (por ejemplo, la glicemia) que tiene forma gaussiana, es decir, se distribuye normalmente, con parámetros $\mu$ y $\sigma$.

- Si tomamos muestras de $n=5$ personas y calculamos la media muestral de la glicemia en cada muestra, obtenemos una **nueva variable en estudio**: la media muestral de la glicemia en muestras de $n=5$.
- Si tomamos muestras de $n=10$ personas y calculamos la media muestral de cada grupo, y graficamos esas medias muestrales, se obtiene otra distribución.
- Si tomamos grupos de $n=20$ personas y calculamos la media muestral de cada grupo, graficando esas medias muestrales, se obtiene una distribución aún más concentrada.

Se concluye que la distribución de las medias muestrales es una Distribución Normal (DN), con parámetros:

$$\mu_{\bar{x}} = \mu \qquad \qquad \sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}} \ \text{(EE, error estándar o error típico)}$$

**Descripción del gráfico:** se muestra la distribución de la variable original glicemia ($x$) junto con las distribuciones de las medias muestrales para $n=1$, $n=5$, $n=10$ y $n=20$, todas centradas en $\mu$. A medida que aumenta el tamaño de la muestra $n$, la distribución de las medias muestrales se concentra más hacia el centro ($\mu$) y se vuelve más angosta (menor dispersión), aunque siempre mantiene forma normal.

**Conclusión:** a medida que aumenta el tamaño de la muestra $n$, la distribución de las medias muestrales tiende hacia el centro y lo hace de manera normal, con parámetros $\mu_{\bar{x}}$ y $\sigma_{\bar{x}}$.

## Aplicación

- Permite trabajar con medias muestrales aun cuando la variable original no sea normal.
- Es la base de muchos intervalos de confianza y pruebas de hipótesis.
- A mayor tamaño muestral, menor error estándar y mayor concentración de $\bar{x}$ alrededor de $\mu$.

**Descripción del gráfico:** distribución de las medias muestrales para distintos tamaños muestrales ($n=5$, $n=20$, $n=50$), todas centradas en $\mu$. Cuanto mayor es $n$, más alta y angosta es la curva (menor dispersión alrededor de $\mu$).

### Ejemplo introductorio

Supongamos una población con $\mu = 100$ y $\sigma = 20$. Si tomamos muestras de $n = 25$:

$$\mu_{\bar{x}} = 100$$

$$\sigma_{\bar{x}} = \frac{20}{\sqrt{25}} = 4$$

Entonces la distribución de las medias muestrales será aproximadamente normal, centrada en 100 y con menor dispersión que la población original.

**Conclusión:** las medias muestrales varían menos que los valores individuales.

## Tipificación: Distribución Normal vs. Teorema del Límite Central

Para trabajar con probabilidades, tanto para un valor individual de la variable como para la media muestral, se tipifica (se calcula $Z$) y se busca en la tabla de la Distribución Normal.

**Distribución Normal (para un valor individual $x$):**

$$Z = \frac{X - \mu}{\sigma}$$

Proceso: $X \rightarrow Z \rightarrow \text{tabla} \rightarrow \text{probabilidad}$

**Teorema del Límite Central (para la media muestral $\bar{x}$):**

$$Z = \frac{\bar{X} - \mu}{\left(\sigma / \sqrt{n}\right)}$$

donde $\sigma / \sqrt{n}$ es el EE (error estándar).

Proceso: $\bar{X} \rightarrow Z \rightarrow \text{tabla} \rightarrow \text{probabilidad}$

Cada vez que se tenga una situación donde exista:

a) una variable con Distribución Normal (DN),
b) se dé el tamaño de muestra "$n$", y
c) se pida la probabilidad de que la media muestral sea menor o mayor que un valor,

se resuelve como un ejercicio de TLC (que en la práctica se calcula igual que un ejercicio de DN, pero usando el error estándar $\sigma/\sqrt{n}$ en lugar de $\sigma$).

## Ejemplos resueltos

### Ejemplo 1: Peso de recién nacidos

Una variable con DN, en este caso el peso de recién nacidos, tiene parámetros $\mu = 3{,}3\text{kg}$ y $\sigma = 0{,}6\text{kg}$.

**a) ¿Cuál es la probabilidad de encontrar en la población recién nacidos con pesos inferiores a 3,1kg?**

*Ejercicio de DN.* Datos: $\mu = 3{,}3$; $\sigma = 0{,}6$.

$$Z = \frac{3{,}1 - 3{,}3}{0{,}6} = -0{,}33$$

Tabla: $-0{,}3 \rightarrow 0{,}3707$

$$P(x < 3{,}1) = 0{,}3707$$

**b) Si tomamos al azar una muestra de 9 recién nacidos, ¿cuál es la probabilidad de que la media muestral del peso de recién nacidos sea inferior a 3,1kg?**

*Ejercicio de TLC.* Datos:
- DN ($\mu = 3{,}3$ y $\sigma = 0{,}6$)
- $n$ ($n=9$, muestra de 9 recién nacidos)
- $P(\bar{X} < 3{,}1) = ?$

$$Z = \frac{3{,}1 - 3{,}3}{0{,}6/\sqrt{9}} = -1{,}00$$

Tabla: $-1{,}0 \rightarrow 0{,}1587$

$$P(\bar{X} < 3{,}1) = 0{,}1587$$

### Ejemplo 2: Presión arterial sistólica (PAS)

La PAS se distribuye normalmente en la población con parámetros $\mu = 135\text{mmHg}$ y $\sigma = 25\text{mmHg}$.

**a) ¿Cuál es la probabilidad de elegir un sujeto con PAS menor que 145mmHg?**

Datos: $\mu = 135$; $\sigma = 25$.

$$Z = \frac{145 - 135}{25} = 0{,}40$$

Tabla: $0{,}4 \rightarrow 0{,}6554$

$$P(x < 145) = 0{,}6554$$

**c) Si tomamos una muestra de 25 personas, ¿cuál es la probabilidad de que la media muestral supere el valor 132mmHg?**

Se trata de un ejercicio del Teorema del Límite Central (se resuelve como un ejercicio de DN, usando $EE = \sigma/\sqrt{n}$).

$$P(\bar{X} > 132) = 1 - P(\bar{X} < 132)$$

$$Z = \frac{\bar{X} - \mu}{EE} = \frac{132 - 135}{25/\sqrt{25}} = -0{,}60$$

Tabla: $-0{,}6 \rightarrow 0{,}2743$

$$P(\bar{X} > 132) = 1 - 0{,}2743 = 0{,}7257$$

### Ejercicio: TLC e inferencia — puntos de inflexión

**Enunciado:** los puntos de inflexión de la distribución de medias de una variable aleatoria continua son 34 y 38. Además se sabe que el percentil 16 de dicha variable vale 28.

**Descripción de los gráficos:** se muestran dos campanas de Gauss con la regla empírica 16%–68%–16%. La primera corresponde a la distribución de las medias muestrales ($\bar{x}$), con los puntos de inflexión ubicados en $\mu - EE$ y $\mu + EE$ (es decir, 34 y 38, con el centro $\mu = 36$). La segunda corresponde a la distribución de la variable original "$x$", con los puntos de inflexión en $\mu - \sigma$ y $\mu + \sigma$.

**a) ¿Cuál es el valor de los parámetros de la distribución de medias muestrales?**

Como los puntos de inflexión de la distribución de medias son 34 y 38, y estos corresponden a $\mu - EE$ y $\mu + EE$:

$$\mu = 36 \qquad \qquad EE = \sigma_{\bar{x}} = 2$$

**b) ¿Cuál es el valor de los parámetros de la distribución de la variable continua en estudio?**

Usando el percentil 16 de la variable "$x$" (que corresponde a $\mu - \sigma$):

$$\mu - \sigma = P_{16} = 28$$
$$36 - \sigma = 28$$
$$\sigma = 36 - 28 = 8$$

Por lo tanto:

$$\mu = 36 \qquad \qquad \sigma = 8$$

**c) ¿Cuál es el tamaño muestral de la distribución de medias muestrales?**

$$EE = \frac{\sigma}{\sqrt{n}} \quad \Rightarrow \quad 2 = \frac{8}{\sqrt{n}}$$

$$\sqrt{n} = \frac{8}{2} = 4 \quad \Rightarrow \quad n = 4^2 = 16$$

**d) ¿Cuál es la probabilidad de que al tomar al azar una muestra de 25 sujetos, la media muestral supere el valor 39,2?**

Datos: $n=25$, DN ($\mu = 36$ y $\sigma = 8$).

$$P(\bar{X} > 39{,}2) = 1 - P(\bar{X} < 39{,}2)$$

$$Z = \frac{39{,}2 - 36}{8/\sqrt{25}} = 2{,}00$$

Tabla: $2{,}00 \rightarrow 0{,}9772$

$$P(\bar{X} > 39{,}2) = 1 - 0{,}9772 = 0{,}0228$$

**e) ¿Cuál es la probabilidad de que al tomar al azar una muestra de 25 sujetos, la media muestral sea superada por el valor 34,4?**

Datos: $n=25$, DN ($\mu = 36$ y $\sigma = 8$).

$$Z = \frac{34{,}4 - 36}{8/\sqrt{25}} = -1{,}00$$

Tabla: $-1{,}00 \rightarrow 0{,}1587$

$$P(\bar{X} < 34{,}4) = 0{,}1587$$
