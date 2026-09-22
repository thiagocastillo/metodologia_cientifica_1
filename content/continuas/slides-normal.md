> Fuente: `Distribucion NORMAL.pdf` (diapositivas de clase)

# Distribución Normal I

## Introducción

La distribución normal es una distribución de probabilidad para **variables aleatorias continuas**. Es la curva en forma de campana (campana de Gauss) más utilizada en estadística y bioestadística.

## Parámetros de la distribución normal

La distribución normal queda definida por dos parámetros:

- $\mu$: media (coincide con la mediana, el percentil 50 y la moda: $\mu = \text{mediana} = P_{50} = \text{moda}$)
- $\sigma$: desvío o desviación estándar

Propiedades fundamentales:

- El área bajo la curva es igual a $1$.
- Es una distribución **simétrica respecto a** $\mu$: a cada lado de la media queda exactamente el 50% del área ($0{,}5$ y $0{,}5$).
- En los extremos de la curva quedan las **colas**, regiones de baja probabilidad alejadas de la media.

La variable $x$ es una variable continua, y su comportamiento se representa mediante la campana de Gauss centrada en $\mu$, con las colas extendiéndose simétricamente hacia ambos lados.

## Estandarización: la variable Z

Para poder usar las tablas de probabilidad, cualquier valor $x$ de una distribución normal se transforma en un valor de la **variable normal tipificada (o estandarizada) Z**:

$$Z = \frac{x - \mu}{\sigma}$$

donde:

- $x$: es una variable continua
- $Z$: variable normal tipificada (indica a cuántos desvíos estándar está $x$ de la media $\mu$)

El esquema general de trabajo es:

$$x \;\longleftrightarrow\; Z \;\longleftrightarrow\; \text{Tabla} \;\longleftrightarrow\; \text{Probabilidad}$$

Es decir: se parte de un valor $x$, se lo transforma en $Z$, se busca ese valor de $Z$ en la tabla de la distribución normal estándar, y se obtiene la probabilidad (o viceversa, si se parte de una probabilidad se busca en la tabla el $Z$ correspondiente y luego se despeja $x$).

## Reglas para buscar en la tabla

La tabla de la distribución normal estándar da, para cada valor de $Z$, la probabilidad acumulada "cuerpo" $P(Z \le z)$. A partir de esa tabla se pueden calcular distintos tipos de probabilidades siguiendo estas reglas:

1. $P(x \le a) \rightarrow$ se busca **directo en la tabla**.
2. $P(x \ge a) = 1 - P(x \le a)$
3. $P(a \le x \le b) = P(x \le b) - P(x \le a)$
4. $P(x = a) = 0$ (para cualquier distribución continua, la probabilidad de un valor puntual exacto es siempre $0$, ya que el área bajo un único punto de la curva es nula)

## Ejemplo resuelto: búsqueda de probabilidades en la tabla

Para todos los casos siguientes se usa la misma distribución con parámetros:

$$\mu = 3{,}4 \qquad \sigma = 0{,}8$$

### a) $P(x \le 3{,}8)$

Se aplica la regla 1 (directo en tabla).

$$Z = \frac{3{,}8 - 3{,}4}{0{,}8} = 0{,}50$$

En la tabla, se busca la fila correspondiente a la primera cifra decimal de $Z$ ($0{,}5$) y la columna correspondiente a la segunda cifra decimal ($0$). El valor de tabla obtenido es:

$$P(x \le 3{,}8) = 0{,}6915$$

(Gráficamente, la región sombreada bajo la curva desde $-\infty$ hasta $x = 3{,}8$ representa esta probabilidad "cuerpo".)

### b) $P(x \ge 4)$

Se aplica la regla 2.

$$Z = \frac{4 - 3{,}4}{0{,}8} = 0{,}75$$

El valor en la tabla para $Z = 0{,}75$ es $0{,}7734$, que corresponde a $P(x \le 4)$. Entonces:

$$P(x \ge 4) = 1 - P(x \le 4) = 1 - 0{,}7734 = 0{,}2266$$

(En el gráfico, la zona verde hasta $x=4$ equivale a $0{,}7734$, y la cola rayada a la derecha de $x=4$ equivale a $0{,}2266$.)

### c) $P(2{,}9 \le x \le 3{,}6)$

Se aplica la regla 3: $P(a \le x \le b) = P(x \le b) - P(x \le a)$, con $a = 2{,}9$ y $b = 3{,}6$.

$$Z_b = \frac{3{,}6 - 3{,}4}{0{,}8} = 0{,}25 \qquad Z_a = \frac{2{,}9 - 3{,}4}{0{,}8} = -0{,}63$$

De tabla: $P(x \le 3{,}6) = 0{,}5987$ y $P(x \le 2{,}9) = 0{,}2643$.

$$P(2{,}9 \le x \le 3{,}6) = 0{,}5987 - 0{,}2643 = 0{,}3344$$

(El gráfico muestra la región entre $x=2{,}9$ y $x=3{,}6$, alrededor de $\mu = 3{,}4$, como el área buscada.)

### d) $P(x = 3{,}2)$

Se aplica la regla 4. Para cualquier distribución continua, la probabilidad de un valor exacto puntual es siempre $0$ (el área en un único punto de la curva es nula).

$$P(x = 3{,}2) = 0$$

### e) Percentil 10 ($P_{10}$)

Se busca el valor de $x$ tal que deja el 10% del área por debajo (cola izquierda) y, por simetría, el percentil 90 deja el 10% por encima (cola derecha).

El valor de $Z$ asociado al percentil 10 es $Z = -1{,}28$. Despejando $x$ de la fórmula de estandarización:

$$-1{,}28 = \frac{x - 3{,}4}{0{,}8} \;\Rightarrow\; x = -1{,}28 \cdot 0{,}8 + 3{,}4 = 2{,}38$$

Por simetría respecto a $\mu$, $P_{10}$ y $P_{90}$ son simétricos:

$$P_{10} = -1{,}28 \cdot 0{,}8 + 3{,}4 = 2{,}38 \qquad P_{90} = 1{,}28 \cdot 0{,}8 + 3{,}4 = 4{,}42$$

**Respuesta:** $P_{10} = 2{,}38$ y $P_{90} = 4{,}42$.

**Interpretación:** hay 10% de los valores por debajo de $2{,}38$ y 10% por encima de $4{,}42$.

### f) Cuartil 3 ($Q_3 = P_{75}$)

$Q_1$ y $Q_3$ son simétricos respecto a $\mu$. El valor de $Z$ para el percentil 75 es $Z = 0{,}67$.

$$0{,}67 = \frac{x - 3{,}4}{0{,}8} \;\Rightarrow\; x = 0{,}67 \cdot 0{,}8 + 3{,}4 = 3{,}94$$

Por simetría:

$$Q_1 = -0{,}67 \cdot 0{,}8 + 3{,}4 = 2{,}86 \qquad Q_3 = 0{,}67 \cdot 0{,}8 + 3{,}4 = 3{,}94$$

**Resultados:** $Q_1 = P_{25} = 2{,}86$ y $Q_3 = P_{75} = 3{,}94$.

**Interpretación:** hay 75% de los valores por debajo de $3{,}94$ y 25% por encima de $3{,}94$.

### g) Percentil 60 ($P_{60}$)

Se busca en la tabla el valor de $Z$ cuya probabilidad acumulada es aproximadamente $0{,}60$ (en tabla: $0{,}5987$, correspondiente a $Z = 0{,}25$).

$$0{,}25 = \frac{x - 3{,}4}{0{,}8} \;\Rightarrow\; x = 0{,}25 \cdot 0{,}8 + 3{,}4 = 3{,}6$$

$$P_{60} = 3{,}6$$

(El gráfico ilustra que a la izquierda de $P_{60}=3{,}6$ queda el 60% del área, y a la derecha el 40% restante.)

## Ejercicio complementario: niveles de TGO en sangre

**Enunciado:** los niveles de TGO (Oxalato Glutamato Transaminasa) en sangre presentan distribución normal en una población, con parámetros: media $\mu = 21$ UI y desvío $\sigma = 6$ UI. Si tomamos un sujeto al azar, ¿cuál es la probabilidad de encontrar valores de TGO:

a) Menores que 29 UI
b) Mayores que 33 UI
c) Entre 16 y 28 UI
d) Igual a 23 UI
e) ¿Cuál es el valor del percentil 20 ($P_{20}$) de la distribución de niveles de TGO en sangre?
f) ¿Cuál es el valor del Cuartil 3 ($Q_3$) de la distribución de niveles de TGO en sangre?

Parámetros: Media ($\mu$) = 21 UI; Desvío estándar ($\sigma$) = 6 UI.

### a) $P(X < 29)$

$$Z = \frac{X - \mu}{\sigma} = \frac{29 - 21}{6} = 1{,}33$$

$$P(Z < 1{,}33) = 0{,}908$$

### b) $P(X > 33)$

$$Z = \frac{33 - 21}{6} = 2{,}00$$

$$P(Z > 2) = 1 - P(Z \le 2) = 1 - 0{,}9772 = 0{,}0228$$

### c) $P(16 < X < 28)$

$$Z_1 = \frac{16 - 21}{6} = -0{,}83 \;\Rightarrow\; P(Z < -0{,}83) = 0{,}203$$

$$Z_2 = \frac{28 - 21}{6} = 1{,}17 \;\Rightarrow\; P(Z < 1{,}17) = 0{,}879$$

$$P(16 < X < 28) = P(Z < 1{,}17) - P(Z < -0{,}83) = 0{,}879 - 0{,}203 = 0{,}676$$

### d) $P(X = 23)$

En una distribución normal continua, la probabilidad de un valor exacto es $0$.

$$P(X = 23) = 0$$

### e) Percentil 20 ($P_{20}$)

El valor de $Z$ para el percentil 20 es $Z = -0{,}84$.

$$X = \mu + Z \cdot \sigma = 21 + (-0{,}84)(6) = 15{,}96$$

### f) Cuartil 3 ($Q_3$, percentil 75)

El valor de $Z$ para el percentil 75 es $Z = 0{,}67$.

$$X = \mu + Z \cdot \sigma = 21 + (0{,}67)(6) = 25{,}02$$

### Resumen de resultados

| Ítem | Resultado |
|---|---|
| a) | $0{,}908$ |
| b) | $0{,}0228$ |
| c) | $0{,}676$ |
| d) | $0$ |
| e) | $P_{20} = 15{,}96$ |
| f) | $Q_3 = 25{,}02$ |

## Ejercicio complementario II: glicemia en Montevideo

**Enunciado:** la glicemia presenta una distribución normal en la población de Montevideo, con media igual a $0{,}98$ g/l y desvío estándar igual a $0{,}14$ g/l. Si los valores de glicemia superan los $1{,}26$ g/l, el sujeto recibe el diagnóstico de diabetes. Si tomamos un sujeto de Montevideo al azar, ¿cuál es la probabilidad de encontrar valores de glicemia:

a) Menores que $0{,}77$ g/l
b) Mayores que $0{,}82$ g/l
c) Entre $1{,}14$ g/l y $1{,}40$ g/l
d) Igual a $0{,}94$ g/l
e) ¿Cuál es el valor del percentil 15 (P15) de la distribución de glicemia y cuál es el valor de su simétrico?
f) ¿Cuál es el valor del decil 3 (D3) de la distribución de glicemia y cuál es el valor de su simétrico?

Parámetros: Media ($\mu$) = $0{,}98$ g/l; Desvío estándar ($\sigma$) = $0{,}14$ g/l.

### a) $P(X < 0{,}77)$

$$Z = \frac{0{,}77 - 0{,}98}{0{,}14} = -1{,}5$$

$$P(Z < -1{,}5) = 0{,}067$$

### b) $P(X > 0{,}82)$

$$Z = \frac{0{,}82 - 0{,}98}{0{,}14} = -1{,}14$$

$$P(Z > -1{,}14) = 1 - P(Z < -1{,}14) = 1 - 0{,}127 = 0{,}873$$

### c) $P(1{,}14 < X < 1{,}40)$

$$Z_1 = \frac{1{,}14 - 0{,}98}{0{,}14} = 1{,}14 \;\Rightarrow\; P(Z < 1{,}14) = 0{,}873$$

$$Z_2 = \frac{1{,}40 - 0{,}98}{0{,}14} = 3{,}0 \;\Rightarrow\; P(Z < 3{,}0) = 0{,}9987$$

$$P(1{,}14 < X < 1{,}40) = 0{,}9987 - 0{,}873 = 0{,}126$$

### d) $P(X = 0{,}94)$

En una distribución normal continua, la probabilidad de un valor exacto es $0$.

$$P(X = 0{,}94) = 0$$

### e) Percentil 15 (P15) y su simétrico

Valor de $Z$ para P15: $Z = -1{,}04$.

$$X = 0{,}98 + (-1{,}04)(0{,}14) = 0{,}84$$

El simétrico (percentil 85, $Z = +1{,}04$):

$$X = 0{,}98 + (1{,}04)(0{,}14) = 1{,}13$$

### f) Decil 3 (D3, percentil 30) y su simétrico

Valor de $Z$ para P30: $Z = -0{,}52$.

$$X = 0{,}98 + (-0{,}52)(0{,}14) = 0{,}91$$

El simétrico (percentil 70, $Z = +0{,}52$):

$$X = 0{,}98 + (0{,}52)(0{,}14) = 1{,}05$$

### Resumen de resultados

| Ítem | Resultado |
|---|---|
| a) | $0{,}067$ |
| b) | $0{,}873$ |
| c) | $0{,}126$ |
| d) | $0$ |
| e) | $P_{15} = 0{,}84$; simétrico = $1{,}13$ |
| f) | $D_3 = 0{,}91$; simétrico = $1{,}05$ |
