> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 2)

# Distribuciones Continuas

Describe variables cuyos valores pueden tomar infinitas posibilidades dentro de un intervalo, como peso, altura, presión arterial, tiempo o temperatura.

En este tipo de distribución, la probabilidad de que la variable tome un valor exacto es 0, porque un solo punto dentro de un conjunto infinito no tiene peso probabilístico. Por eso no se calcula $P(X = x)$.

En cambio, se trabaja con probabilidades en intervalos, del tipo: $P(a < X < b)$, que representan la probabilidad de que la variable continua se encuentre entre dos valores específicos.

## Curva de densidad

Las distribuciones continuas se representan mediante una curva de densidad de probabilidad. Esta curva muestra cómo se reparten los valores posibles de una variable. No te dice la probabilidad exacta de un valor, sino qué tan probable es estar cerca de ese valor. Esta curva tiene dos propiedades esenciales:

1. Siempre está por encima o igual a cero.
2. El área total bajo la curva es 1 (es decir, representa el 100% de todas las posibilidades).

La probabilidad de que X esté entre dos valores es el área bajo la curva entre esos puntos. Por eso, en una variable continua, hablamos de probabilidades como áreas y no como valores puntuales.

Una función de densidad continua puede tener forma de campana, siempre que el área total bajo la curva sea igual a 1. Esto garantiza que toda la probabilidad está contenida: no falta ni sobra nada.

### Función de distribución acumulada F(x)

Es una función que suma toda la probabilidad desde el inicio (−∞) hasta un punto específico a. Sirve para saber cuánta probabilidad hay acumulada hasta cierto valor.

Imaginá que vas pintando el área bajo la curva desde la izquierda hasta llegar a "a". Ese área pintada es la probabilidad acumulada hasta ese punto; cuanto más a la derecha esté "a", más área acumulás (más probabilidad).

Y para la probabilidad de que X esté entre dos puntos se pinta el área entre a y b bajo la curva. Se calcula restando la acumulada hasta a de la acumulada hasta b.

## Distribución Normal

También llamada curva normal o campana de Gauss, es una distribución continua, simétrica y con forma de campana. Está completamente definida por dos parámetros fundamentales:

- **Media (μ)**: indica el centro de la distribución.
- **Desvío estándar (σ)**: mide la dispersión de los valores alrededor de la media.

Si σ es pequeño → la campana es angosta (todos cerca del promedio). Si σ es grande → la campana es ancha (más variedad).

### Propiedades clave

- La curva es simétrica respecto a μ.
- Media = Moda = Mediana → el valor central es el más representativo (μ).
- El área total bajo la curva es igual a 1, lo que representa el 100 % de las probabilidades posibles.

### Regla empírica (68–95–99.7)

La regla empírica describe cómo se distribuyen los datos en una distribución normal estándar. Permite estimar probabilidades y detectar valores atípicos sin necesidad de cálculos complejos.

Valores clave:

- **±1σ**: alrededor del 68% de las observaciones caen entre μ − 1σ y μ + 1σ.
- **±2σ**: aproximadamente el 95% de las observaciones están dentro de μ ± 2σ.
- **±3σ**: cerca del 99.7% se ubica dentro de μ ± 3σ.

La mayoría de los datos reales (altura, peso, presión arterial) tienden a agruparse cerca de la media (centro de la curva). Valores fuera de ±2σ se consideran inusuales, y fuera de ±3σ, extremadamente raros.

### Distribución normal estándar

La distribución normal estándar es una forma particular de la distribución normal que permite calcular probabilidades de manera universal, independientemente de las unidades originales de la variable. Se obtiene transformando cualquier variable normal a su valor z mediante estandarización. Sus características son:

- Media (μ) = 0
- Desvío estándar (σ) = 1

### Distribución Z

Cualquier variable que siga una distribución normal puede transformarse en esta forma estándar mediante el valor z, que expresa cuántos desvíos estándar se aleja un dato de la media:

$$Z = \frac{x - \mu}{\sigma}$$

### Tablas Z

Las tablas z contienen las probabilidades (áreas bajo la curva) asociadas a cada valor z. Como todos los valores estandarizados siguen esta misma distribución, las tablas permiten:

- Calcular la probabilidad de que una variable tome valores por encima o por debajo de cierto z.
- Determinar áreas entre dos valores z.
- Identificar valores críticos para intervalos de confianza y pruebas de hipótesis.

Como la distribución normal estándar es simétrica y está centrada en 0, sus valores se interpretan así: los valores positivos (z > 0) se ubican a la derecha de la media → representan valores por encima del promedio. Los valores negativos (z < 0) se ubican a la izquierda → representan valores por debajo del promedio.

### Ejercicios de ejemplo

**La altura de los adultos en una población sigue una distribución normal con media 170 cm y desvío estándar 8 cm. ¿Cuál es el valor z para una persona que mide 186 cm?**

$$Z = \frac{186 - 170}{8} = \frac{16}{8} = 2$$

La persona está a 2 desvíos estándar por encima del promedio.

**Suponga que el colesterol LDL en una población es normal con media 130 mg/dL y desvío estándar 20 mg/dL. ¿Cuál es la probabilidad de que una persona tenga un LDL mayor a 160 mg/dL?**

Queremos hallar la probabilidad de que una persona tenga un LDL mayor a 160 mg/dL: $P(X > 160)$

Primero transformamos (estandarización) el valor 160 a su valor z, usando la fórmula Z:

$$Z = \frac{160 - 130}{20} = \frac{30}{20} = 1.5$$

Esto nos dice que un LDL de 160 mg/dL está 1.5 desvíos estándar por encima de la media poblacional. El área que buscamos es la "cola derecha" a partir de ese punto. Pero la tabla Z siempre te da el área acumulada desde −∞ hasta Z, o sea: $P(Z \leq 1.5)$.

Como el total bajo la curva es 1, si queremos saber $P(Z > 1.5)$ lo correcto sería:

$$P(Z > 1.5) = 1 - P(Z \leq 1.5)$$

En este caso debemos buscar en la tabla Z el valor 1.5 y ver su valor: esto dice que el 93.32% de la población está por debajo de z = 1.5. Pero como queremos $P(Z > 1.5)$ realizamos la resta:

$$P(Z > 1.5) = 1 - 0.9332 = 0.0668$$

La probabilidad de tener LDL > 160 mg/dL es aproximadamente 0,067 (6,7%). O sea, solo alrededor del 7% de la población tiene un LDL tan alto o mayor.

**La presión sistólica tiene media 120 mmHg y desvío estándar 10 mmHg. ¿Cuál es la probabilidad de que una persona tenga PS menor a 100 mmHg?**

$$Z = \frac{100 - 120}{10} = \frac{-20}{10} = -2$$

El valor de $P(Z \leq -2)$ en la tabla indica que la probabilidad de que una persona tenga PS menor a 100 mmHg es de 2.3 %.

**El peso de recién nacidos normales se distribuye normalmente con μ = 3.300 g y σ = 400 g. Calcular la probabilidad de que un recién nacido pese entre 2.800 g y 3.800 g.**

Aquí queremos hallar la probabilidad de X entre dos valores: $P(2800 < X < 3800)$

Para eso calculamos el valor Z para los dos valores (2800 y 3800):

$$Z_1 = \frac{2800 - 3300}{400} = \frac{-500}{400} = -1.25$$

$$Z_2 = \frac{3800 - 3300}{400} = \frac{500}{400} = 1.25$$

La primera columna de la tabla Z nos permite ubicar el valor correspondiente a -1,2. La primera fila, por su parte, nos indica el valor adicional de -0,05. Al combinar la columna y la fila, localizamos el valor exacto en la tabla: -1,25.

$$P(2800 < X < 3800) = \Phi(1.25) - \Phi(-1.25)$$

Se resta el área acumulada hasta el de la derecha (1.25) por el área acumulada hasta el de la izquierda (-1.25):

$$P(2800 < X < 3800) = 0.8944 - 0.1056 = 0.7888$$

La probabilidad de que un recién nacido pese entre 2.800 g y 3.800 g es de 79 %.

### Percentiles

Los percentiles indican la posición relativa de un valor dentro de una distribución. El percentil p corresponde al punto por debajo del cual se encuentra el p% de la población.

En una distribución normal estándar, los percentiles se obtienen directamente desde la tabla Z, porque la tabla muestra el área acumulada desde −∞ hasta un valor Z y esa área acumulada es exactamente lo que un percentil representa.

En una variable normal, cada percentil se escribe como:

$$X_p = \mu + z_p \times \sigma$$

### Ejercicios de ejemplo

**Percentil 10**

Si quiero $P_{10} = 10\%$, debo buscar en la tabla Z el valor más cercano a 0.1000:

$$Z_{p_{0.10}} = -1.28 \to 0.1003$$

**Una variable normal tiene media μ = 70 y desvío estándar σ = 10. Queremos encontrar X₉₀, es decir, el valor por debajo del cual se encuentra el 90% de la población.**

Si quiero $P_{90} = 90\%$, busco el valor más cercano a 0.9000, el cual corresponde a:

$$Z_{0.90} = 1.28 \to 0.8997$$

Aplicando la fórmula de percentiles:

$$X_{90} = \mu + z_{0.90} \times \sigma = 70 + (1.28)(10) = 70 + 12.8 = 82.8$$

El percentil 90 de esta distribución es: $X_{90} = 82.8$. El 90% de la población tiene valores menores a 82,8, y el 10% restante valores superiores.

## Aproximación de la binomial a la normal

La distribución binomial puede aproximarse mediante una distribución normal cuando el número de ensayos es grande y la probabilidad de éxito no es extrema. Esto permite calcular probabilidades sin usar sumas largas o tablas binomiales.

### Condiciones para usar la aproximación normal

La aproximación es válida cuando se cumplen ambos criterios:

$$np \geq 5 \quad \text{y} \quad n(1-p) \geq 5$$

Estas condiciones garantizan que la binomial tenga forma aproximadamente simétrica y continua, lo suficientemente parecida a una normal. Si la aproximación es válida:

- $\mu = np$
- Varianza $\sigma^2 = np(1-p)$
- Desvío estándar $\sigma = \sqrt{np(1-p)}$

Con esto ya se puede estandarizar X a Z y luego se usan las tablas Z como si fuera una normal común.

## Fórmulas

$$Z = \frac{x - \mu}{\sigma} \qquad X_p = \mu + z_p \times \sigma$$
