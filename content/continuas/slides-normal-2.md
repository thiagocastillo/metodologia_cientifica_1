> Fuente: `Distribucion NORMAL 2.pdf` (diapositivas de clase)

# Distribución de Probabilidades para Variables Contínuas — Distribución Normal II

## Función de densidad

Una **función de densidad** es una función *positiva* cuya integral total vale 1. Se puede pensar como la generalización del histograma de densidad de frecuencias para variables contínuas: el histograma de barras se "suaviza" en una curva continua.

En este contexto, el **área bajo la curva equivale a una probabilidad**:

$$P(a \le x \le b) = \int_a^b f(x)\, dx$$

(En el gráfico de referencia se muestra un histograma de densidad de frecuencias con una curva superpuesta; el área roja bajo la curva entre los valores $a$ y $b$ representa la probabilidad $P(a \le x \le b)$.)

### La función de densidad normal (gaussiana)

La curva normal adopta un número infinito de formas, determinadas por sus parámetros, y se expresa mediante la función de densidad:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\; e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}$$

donde:

- $\mu$ (media) y $\sigma$ (desviación típica) son los **parámetros** de la distribución.
- $e = 2.718$ (base del logaritmo natural, Ln).
- $x$ = valores observados de la variable en estudio.

## Variables contínuas con distribución normal en la población

En el ámbito biomédico, numerosas variables contínuas se distribuyen de forma aproximadamente normal en la población. Algunos ejemplos:

- Talla de recién nacido
- Peso de recién nacido
- Perímetro craneano
- Presión arterial sistólica
- Presión arterial diastólica
- Glicemia en pacientes no diabéticos
- Concentración de hormona tiroidea en sujetos normales
- Electrolitos en plasma: natremia, cloremia, kaliemia, calcemia, etc.

### Ejemplos de situaciones con distribución normal

**A.** La presión arterial diastólica de sujetos jóvenes se distribuye normalmente con media igual a 68 mmHg y desvío estándar igual a 7 mmHg. ¿Cuál es la probabilidad de elegir un sujeto joven y que su presión arterial diastólica sea inferior a 60 mmHg?

**B.** En la población de pacientes con hepatitis viral B, los niveles de enzima TGO (oxalacetato-piruvato deshidrogenasa) se distribuyen con parámetros igual a 76 UI e igual a 22 UI. ¿Qué porcentaje de esta población presenta valores enzimáticos de TGO entre 80 y 105 UI?

## Características de la distribución normal

- Tiene **forma de campana** (gaussiana) y es asintótica al eje de las abscisas (para $x = \pm\infty$).
- Es **simétrica** con respecto a la media ($\mu$), donde coinciden la mediana (Mn) y la moda (Mo): $\mu = Mo = Mn = P_{50}$.
- Los **puntos de inflexión** tienen como abscisas los valores $\mu \pm \sigma$.
- El **68% central** de la distribución queda comprendido entre $\mu - \sigma$ y $\mu + \sigma$ (con un 16% en cada cola restante).

### Parámetros de la distribución normal

- $\mu$: esperanza (media), coincide con la mediana (P50) y la moda.
- $\sigma$: desviación o desvío estándar.
- $\sigma^2$: varianza.

## Estandarización: la variable Z

Dado que existen infinitas variables, existen infinitos valores posibles de $\mu$ y de $\sigma$, lo que hace impracticable tabular las probabilidades para todas las posibles distribuciones normales. Por ello es necesario utilizar la **distribución normal tipificada**.

Se define una variable $Z$:

$$Z = \frac{X - \mu}{\sigma}$$

$Z$ se denomina **"variable normal tipificada"**; se trata de un cambio de variable o estandarización. $Z$ tiene como parámetros:

$$\mu = 0 \quad \text{y} \quad \sigma = 1$$

Es decir, la nueva variable $Z$ se distribuye como una **normal** con media $\mu = 0$ y desviación típica $\sigma = 1$.

## Tabla de distribución normal acumulativa

Hay varios tipos de tablas de la distribución normal. La tabla que se utiliza en el curso representa las **áreas** para los diferentes valores de $Z$, desde 0 hasta $\pm\infty$. Como la curva es simétrica respecto de 0, cada mitad de la curva acumula una probabilidad de 0,50:

- Área a la izquierda de $Z = 0$: 0,50
- Área a la derecha de $Z = 0$: 0,50

### Reglas para buscar en la tabla normal acumulativa

1. $P(x \le a)$ = directamente en la tabla.
2. $P(x \ge a) = 1 - P(x \le a)$
3. $P(a \le x \le b) = P(x \le b) - P(x \le a)$
4. $P(x = a) = 0$

El esquema general de trabajo es:

$$x \;\rightarrow\; Z \;\rightarrow\; \text{Tabla} \;\rightarrow\; \text{Probabilidad}$$

### Ejemplo resuelto: uso de la tabla

Si los parámetros de una distribución son $\mu = 15$ y $\sigma = 3$. ¿Cuál es la probabilidad de encontrar valores inferiores a 12,5?

$$Z = \frac{12{,}5 - 15}{3} = -0{,}83$$

Para buscar en la tabla, el valor $-0,83$ se descompone en $-0,8$ (fila) y $0,03$ (columna). Ubicando la intersección se obtiene $0,2033$.

Finalmente:

$$P(x \le 12{,}5) = P(z \le -0{,}83) = 0{,}2033$$

## Situación problema: colesterol total sérico

Los niveles de **Colesterol total sérico** en la población de sujetos adultos se distribuyen de forma gaussiana con parámetros $\mu = 185\ \text{mg/dl}$ y $\sigma = 10\ \text{mg/dl}$.

Si tomamos un sujeto al azar de esa población, ¿cuál es la probabilidad de encontrar valores:

a) Inferiores a 170 mg/dl.
b) Superiores a 180 mg/dl.
c) Entre 190 y 210 mg/dl.
d) Igual a 186 mg/dl.
e) Hallar el percentil 10 y su valor simétrico.
f) Hallar el cuartil 3 y su valor simétrico.
g) Hallar la probabilidad de encontrar valores inferiores a 175 mg/dl dado que supera el percentil 10.
h) Hallar la probabilidad de encontrar valores superiores a 205 mg/dl si supera la media.

### Resolución

**a) $P(X < 170)$**

$$Z = \frac{170 - 185}{10} = -1.5$$

$$P(Z < -1.5) = 0.067$$

**b) $P(X > 180)$**

$$Z = \frac{180 - 185}{10} = -0.5$$

$$P(Z > -0.5) = 1 - P(Z < -0.5) = 1 - 0.309 = 0.691$$

**c) $P(190 < X < 210)$**

$$Z_1 = \frac{190 - 185}{10} = 0.5 \qquad Z_2 = \frac{210 - 185}{10} = 2.5$$

$$P(Z < 0.5) = 0.691 \qquad P(Z < 2.5) = 0.9938$$

$$P(190 < X < 210) = 0.9938 - 0.691 = 0.3028$$

**d) $P(X = 186)$**

En una distribución normal contínua, la probabilidad de un valor exacto es **0**.

**e) Percentil 10 y su simétrico**

- Percentil 10 ($P_{10}$): $Z_{0.10} = -1.28$
$$X = 185 + (-1.28)(10) = 172.2\ \text{mg/dl}$$
- Simétrico (Percentil 90, $P_{90}$): $Z_{0.90} = +1.28$
$$X = 185 + (1.28)(10) = 197.8\ \text{mg/dl}$$

**f) Cuartil 3 y su simétrico**

- Cuartil 3 ($Q_3 = P_{75}$): $Z_{0.75} = 0.67$
$$X = 185 + (0.67)(10) = 191.7\ \text{mg/dl}$$
- Simétrico (Cuartil 1, $Q_1 = P_{25}$): $Z_{0.25} = -0.67$
$$X = 185 + (-0.67)(10) = 178.3\ \text{mg/dl}$$

**g) Probabilidad de $X < 175$ dado que $X > P_{10}$**

$$Z = \frac{175 - 185}{10} = -1.0 \qquad P(X < 175) = 0.159$$

$$P(X > P_{10}) = 0.90$$

$$P(X < 175 \mid X > P_{10}) = \frac{P(X < 175) - P(P_{10})}{P(X > P_{10})} = \frac{0.159 - 0.100}{0.90} = 0.066$$

**h) Probabilidad de $X > 205$ dado que $X > \mu$**

$$Z = \frac{205 - 185}{10} = 2.0 \qquad P(X > 205) = 0.0228$$

$$P(X > \mu) = 0.50$$

$$P(X > 205 \mid X > \mu) = \frac{P(X > 205)}{P(X > \mu)} = \frac{0.0228}{0.50} = 0.0456$$

## Regla empírica

La variable $Z$ se distribuye como una **normal** con media $\mu = 0$ y desviación típica $\sigma = 1$.

Una **regla empírica** indica que en cualquier distribución normal las probabilidades delimitadas entre:

- **Primera regla empírica:** $P(\mu - \sigma \le x \le \mu + \sigma) = 68\%$
- **Segunda regla empírica:** $P(\mu - 2\sigma \le x \le \mu + 2\sigma) = 95\%$
- **Tercera regla empírica:** $P(\mu - 3\sigma \le x \le \mu + 3\sigma) = 99\%$

(El gráfico de referencia muestra la curva normal estándar con el eje $z$ de $-3$ a $3$, y tres pares de flechas horizontales que marcan los intervalos correspondientes al 68%, 95% y 99% de la probabilidad, centrados en $z=0$.)
