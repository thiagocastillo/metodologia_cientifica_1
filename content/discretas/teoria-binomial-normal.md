> Fuente: `2.0.Distribuciones Binomial y Normal.pdf`

# Distribuciones de Probabilidad: Binomial y Normal

*Material de apoyo al Ciclo de Metodología I — Métodos Cuantitativos. Definición de variable aleatoria, distribuciones de probabilidad, distribución binomial, distribución normal. Lic. Alicia Varela, Dr. Juan Gil.*

## Introducción

En el presente material de apoyo, nos interesa enfocar el estudio de algunas funciones que nos permitirán relacionar nuestras observaciones con sus correspondientes valores de probabilidad. Trataremos en este capítulo las distribuciones de probabilidad de mayor utilización o implicancias en el área bio-médica.

## Variable aleatoria

Cualquier característica que pueda medirse o clasificarse se denomina variable. En el artículo anteriormente citado identificamos por ejemplo anemia, apgar, edad, paridad, morbilidad, etc. Si una variable toma valores tales que cualquier resultado particular se produzca al azar, se trata de una **variable aleatoria**. Los resultados posibles de estos procesos no siempre son números, por lo tanto denominaremos variable aleatoria (VA) a la función que a cada elemento del espacio de resultados le asigna un único número real.

La VA hace corresponder un número real a los distintos sucesos elementales que son el resultado de un fenómeno estadístico.

Las variables aleatorias pueden clasificarse en **discretas** o **continuas** por los valores numéricos que puedan tomar. Una variable aleatoria discreta será aquella que tenga como imágenes al conjunto de los números enteros ($-\infty, \ldots, -1, 0, 1, \ldots, \infty$). En el caso de una variable aleatoria continua el conjunto de imágenes son los números reales.

Algunos ejemplos de variables aleatorias pueden ser: el número de veces que se obtiene un "éxito" al aplicar un tratamiento en seis pacientes con una misma patología; el número de llamadas que recibe durante una hora el teléfono de un servicio de emergencia; o el tiempo medio que permanecen ocupadas las camas de un servicio de salud.

## Distribución de una VA

Toda VA posee una distribución de probabilidad correspondiente. Una distribución de probabilidad aplica la teoría de probabilidades para describir el comportamiento de la VA. El concepto de distribución de una VA es análogo al concepto de distribución de frecuencias que ya hemos visto. En el caso de una VA discreta, se especifican todos los valores posibles de la VA junto con la probabilidad de que cada uno ocurra. En el caso de una VA continua, nos permite determinar las probabilidades asociadas con intervalos de valores específicos. De esta forma podemos hablar de una función de distribución de probabilidad $f(x)$ representada por:

$$f(x_i) = P(X=x_i) \qquad i=1,2,\ldots,n$$

Donde $x_i$ corresponde a un determinado suceso u observación en el espacio muestral ($\Omega$). Dicha función cumple con todos los axiomas de probabilidad ya vistos anteriormente.

**Ejemplo 1**: Supongamos que la variable aleatoria $x$ expresa el número de caras que se obtienen al lanzar tres veces una moneda.

El espacio muestral es:

$$\{ccc;\ ccn;\ cnc;\ cnn;\ ncc;\ ncn;\ nnc;\ nnn\}$$

El conjunto de los resultados posibles para la variable $x$ es $\{x=0;\ x=1;\ x=2;\ x=3\}$.

La función de probabilidad es:

$$P_0 = P\{x=0\} = 1/8$$
$$P_1 = P\{x=1\} = 3/8$$
$$P_2 = P\{x=2\} = 3/8$$
$$P_3 = P\{x=3\} = 1/8$$

| X | P(X=x) |
| --- | --- |
| 0 | 0,13 |
| 1 | 0,38 |
| 2 | 0,38 |
| 3 | 0,13 |
| **Total** | **1,00** |

*(El original incluye un gráfico de barras de P(X=x) para el número de caras en tres lanzamientos de una moneda.)*

El estudio de la distribución de probabilidad de variables aleatorias continuas es similar, representándose la probabilidad a través de la **función de densidad** de la variable $X$, que se verá más adelante en este capítulo.

Describiremos ahora las distribuciones de probabilidad mayormente utilizadas en las ciencias médicas: el caso de la **Binomial** para las VA discretas y la **Normal** para las VA continuas.

## Distribución Binomial

La distribución binomial permite calcular las probabilidades de una variable aleatoria discreta y tiene múltiples aplicaciones en el área biomédica.

Por ejemplo, consideremos 5 pacientes que están realizando una dieta para controlar la hipertensión arterial (HTA). La probabilidad de éxito en el control de HTA a través de esta dieta es $p=0.6$.

Si tenemos en cuenta la variable aleatoria $X$, que cuenta el número de éxitos, vemos que la probabilidad de que los 5 pacientes tengan éxito, por tratarse de sucesos independientes, es el producto de la probabilidad de éxito de cada uno de ellos, que como ya vimos, es la misma para todos los pacientes:

$$P(x=5) = (0.6)^5 = 0.0778$$

La probabilidad de que sólo "un paciente tenga éxito" implica que los otros cuatro pacientes no lo tengan, correspondiendo por lo tanto a la probabilidad de éxito de un paciente por la probabilidad de fracaso de los otros 4 pacientes. Como además esta situación (obtener un éxito entre los 5 pacientes) puede darse para cualquiera de los 5 pacientes, tenemos entonces que:

$$P(x=1) = 5 \cdot (0.6)^1 \cdot (1-0.6)^4 = 0.0768$$

Si quisiéramos calcular ahora la probabilidad de que "exactamente dos pacientes tengan éxito", razonamos en forma análoga a lo anterior, es decir la probabilidad de estos dos éxitos por la probabilidad de fracaso de los otros 3 pacientes. Ahora bien, esos éxitos pueden darse en los dos primeros pacientes, en el primero y el tercero, etc., en general en todas las combinaciones posibles de 2 pacientes, tomados entre los 5:

$$P(x=2) = C_2^5 \cdot (0.6)^2 \cdot (1-0.6)^{5-2} = \frac{5!}{2!(5-2)!} \cdot (0.6)^2 \cdot (0.4)^3 = 0.2304$$

La expresión matemática de estos fenómenos puede resultar engorrosa, pero es sólo cuestión de familiarizarse un poco con el manejo de estas fórmulas. Recordemos que el símbolo "!" representa el "factorial", o sea $n!$ se lee factorial de $n$ (o bien $n$ factorial) y representa el producto de los $n$ primeros números naturales.

Por ejemplo: $5! = 1 \times 2 \times 3 \times 4 \times 5 = 120$; $\quad 2! = 1 \times 2 = 2$; $\quad 3! = 1 \times 2 \times 3 = 6$.

Pasemos ahora a la generalización del ejemplo anterior. Consideremos un experimento que tiene sólo dos resultados posibles, los cuales son excluyentes; hablamos de una variable de tipo **Bernoulli**. Llamaremos "éxito" a la ocurrencia del evento de interés y "fracaso" a la no ocurrencia.

Cada vez que se realiza el experimento, la probabilidad de éxito es $p$, que permanece constante en todos los ensayos; la probabilidad de fracaso $q$, por ser el suceso complementario, es $1-p$.

Los ensayos se repiten en forma idéntica $n$ veces, siempre con la misma probabilidad de éxito y el resultado de cada prueba se da con independencia de los resultados ya obtenidos. Sea $X$ la variable aleatoria que representa el número de éxitos en los $n$ ensayos. Nos interesa calcular la probabilidad de obtener exactamente $x$ éxitos en los $n$ ensayos.

Sea $X$ una variable aleatoria que representa el número de éxitos en $n$ ensayos y $p$ la probabilidad de éxito en cualquiera de éstos. Se dice que $X$ tiene una distribución binomial con función de probabilidad:

$$B(X;n,p) = \frac{n!}{x!(n-x)!}\, p^x q^{n-x}, \qquad x=0,1,2,\ldots,n$$

y $B(X;n,p) = 0$ para cualquier otro valor, con $0 \le p \le 1$ para $n$ entero.

Los parámetros de la familia de variables aleatorias con distribución binomial son el número de ensayos $n$ y la probabilidad de éxito en cada uno de esos ensayos, $p$.

### Propiedades de las variables con distribución Binomial

Además de las probabilidades de los resultados individuales podemos también calcular las medidas numéricas de resumen asociadas con una distribución de probabilidad. Así podemos conocer, por ejemplo, cuál es el número de casos favorables ($x$) esperado en función del valor de $n$ y $p$; este valor es conocido como la **esperanza** de la distribución binomial $E(X)$, estando determinado por el producto $np$.

$$X \approx B(x,n,p) \implies E(X) = n \cdot p$$

De forma similar podemos estar interesados en conocer la dispersión del número de casos favorables por medio de la **varianza** $V(X)$, que se define como el producto $npq$.

$$X \approx B(x,n,p) \implies V(X) = n \cdot p \cdot q$$

### Cálculo de probabilidades a partir del uso de tablas

Para el cálculo de probabilidades de VA con distribución binomial, existen tablas que simplifican nuestra tarea (Anexo). Debido a su utilidad, optamos por la Tabla de Distribución Binomial Acumulada. Para la lectura de los valores en la tabla debemos tener en cuenta los tres parámetros que consideramos para nuestros cálculos, es decir, $n$, $p$ y $x$.

La tabla que presentamos en anexos tiene valores tabulados para $n=5$, $n=10$, $n=15$, $n=20$ y valores de $p$ de 0,1, 0,2, 0,25, 0,3 hasta 0,9; si el $n$ o el $p$ que consideramos es diferente, haremos los cálculos en base a las fórmulas vistas anteriormente. Veremos a continuación un ejemplo que puede resolverse con el uso de la tabla.

**Ejemplo 2**: Consideremos el caso de un médico que atiende la consulta de pacientes en Policlínica. Se anotan 15 pacientes cada día y se sabe que la probabilidad de que un paciente anotado finalmente concurra a la consulta es 0,8. El médico quiere respuestas para las siguientes preguntas.

- **¿Cuál sería la probabilidad de tener que atender hasta 9 pacientes en un día?**

  En este ejemplo el número de pacientes (15) corresponde a $n$, la probabilidad de 0,8 a $p$ y el número de éxitos $x$ a 9. Casos como éste se resuelven mediante la consulta de la tabla de distribución acumulada de la ley Binomial, para $n=15$, $p=0,8$ y $x=9$. Debido a que la tabla muestra la probabilidad acumulada hasta un determinado número de éxitos (para un $n$ y $p$ determinados), la probabilidad resultante es la que se lee en la intersección de la fila $x=9$ y la columna $p=0,8$ (para $n=15$), resultando ser $P(x\le9) = 0{,}0611$.

- **¿Cuál sería la probabilidad de atender exactamente 9 pacientes en un día?**

  Al valor de probabilidad obtenido en el caso precedente, debemos restarle la probabilidad acumulada de los éxitos que no estaríamos considerando ($x=1,2,\ldots,8$). La probabilidad deseada sería entonces:

  $$P(x=9) = P(x\le9) - P(x\le8) = 0{,}0611 - 0{,}0181 = 0{,}043$$

- **¿Cuál es la probabilidad de tener que atender más de 10 pacientes en un día?**

  Utilizando la tabla de igual forma, tendríamos que:

  $$P(x>10) = 1 - P(x\le10) = 1 - 0{,}1642 = 0{,}8358$$

- **¿Cuál es el número esperado de pacientes a atender en un día? ¿Y su varianza?**

  Considerando que el valor esperado o esperanza se calcula como el producto $n.p$, en este caso tendríamos, para un $n=15$ y $p=0,8$, una $E(x) = (15)(0,8) = 12$ pacientes y una varianza $n.p.q$: $V(x) = (15)(0,8)(0,2) = 2{,}4$.

**Ejemplo 3**: Un laboratorio afirma que una determinada droga provoca efectos secundarios en 3 de cada 100 pacientes. Para contrastar esta afirmación, se eligen al azar 5 pacientes a los que se les aplica la droga. ¿Cuál es la probabilidad de los siguientes sucesos?

- **Que ningún paciente tenga efectos secundarios:**

  Tratándose de una variable aleatoria con distribución binomial, de parámetros $n=5$ y $p=0.03$, que ningún paciente tenga efectos secundarios significa que $x=0$. Para esto debemos entonces sustituir en la fórmula de cálculo vista precedentemente y obtenemos:

  $$P(x=0) = \frac{5!}{0!(5-0)!}\, (0.03)^0 (0.97)^5 = (0.97)^5 = 0{,}8587$$

- **Al menos dos tengan efectos secundarios.**

  Que al menos dos tengan efectos secundarios quiere decir que $x$ puede tomar los valores 2, 3, 4 o 5. Para facilitar los cálculos, a la probabilidad de $\Omega$ (1), le restamos la probabilidad correspondiente a valores de $x$ iguales a 0 y 1.

  $$P(x\ge2) = P(x=2)+P(x=3)+P(x=4)+P(x=5) = 1 - \{P(x=0)+P(x=1)\}$$

  $$= 1 - (0.8587 + 0.1328) = 0.0085$$

- **¿Cuál es el número medio de pacientes en los que se esperaría encontrar efectos secundarios si se eligiese una muestra de 100 pacientes al azar?**

  El valor esperado en este caso sería la esperanza matemática $E(X) = n.p$:

  $$E(X) = 100 \times 0.03 = 3\ \text{pacientes}$$

## Distribución Normal

Cuando una VA $X$ sigue una distribución binomial queda restringida a valores enteros exclusivamente. No obstante, en diferentes situaciones los resultados de una VA pueden no limitarse a enteros. Cuando estudiamos en una población la concentración de Hb, la edad o el crecimiento fetal, entre dos posibles valores cualesquiera de $X$ podemos encontrar siempre un tercer valor.

La distribución continua más común es la **distribución normal**, también conocida como distribución o campana de Gauss. Su densidad de probabilidad está dada por la ecuación:

$$f_X(x) = \frac{1}{\sigma\sqrt{2\pi}}\, e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2} \qquad \forall x \in \mathbb{R}$$

La curva normal que esta ecuación representa es unimodal y simétrica con respecto a su media ($\mu$), su mediana y su moda, que son idénticas para esta distribución. La desviación estándar $\sigma$ (sigma) representa el grado de dispersión respecto a ese valor central. Los parámetros $\mu$ y $\sigma$ juntos definen por completo la curva normal de la población en estudio.

Para comprender mejor este tipo de modelos, recordemos algunos conceptos que ya conocemos. Cuando estudiamos una VA continua $X$ y deseamos determinar la probabilidad de que esa variable asuma valores dentro de algún intervalo, podemos representar gráficamente la distribución de frecuencias relativas por medio de un histograma y un polígono de densidad de frecuencia.

El área comprendida bajo el polígono de densidad de frecuencia entre dos valores cualesquiera, por ejemplo $x_a$ y $x_b$, es proporcional a la frecuencia relativa de la ocurrencia de los valores de la variable estudiada entre $x_a$ y $x_b$.

Sabemos que si los datos de que disponemos son una muestra extraída de una población, esas frecuencias relativas pueden interpretarse como estimaciones de las verdaderas probabilidades correspondientes.

Si nuestra muestra de valores de $X$ fuera cada vez más grande, los intervalos de clase cada vez más pequeños, el histograma así construido se iría asemejando cada vez más a una curva suave, como vemos en la figura correspondiente del original.

Esta curva representa la distribución de probabilidad de una variable continua si tuviéramos un número de observaciones muy elevado. Como ya sabemos, el área total bajo dicha curva representa la probabilidad de $\Omega$, siendo por lo tanto igual a 1. Sabemos además que una VA continua puede tomar infinitos valores, siendo la probabilidad de un valor en particular igual a 0.

Podemos además notar que una distribución normal, según su media y desvío estándar cambien, va a tener infinidad de valores posibles. Esto implica que no es posible tabular el área asociada con cada una de estas curvas normales. Para facilitar esto, sólo se tabula una única distribución normal, con $\mu$ igual a 0 y $\sigma$ igual a 1, curva conocida como **distribución normal estándar**.

Para realizar la transformación de cualquier distribución de una VA continua ($\mu,\sigma$) en una distribución normal estándar se aplica un cambio de variable mediante la fórmula:

$$Z = \frac{X-\mu}{\sigma}$$

Donde $X$ es un valor cualquiera de la población en estudio y $\mu$ y $\sigma$ son la media y desvío estándar de la distribución normal a la que pertenece el punto $x$. La resta de la media tiene como objetivo centrar todos los valores de la variable en 0, y al dividirlo por la desviación estándar convierte a cada punto de la distribución en una distancia que equivale a un número de desvíos. De esta forma la distribución en estudio pasa de $N(\mu,\sigma^2)$ a $N(0,1)$.

De esta forma podemos utilizar la tabla de distribución normal estándar (Anexo) y, mediante la transformación, conocer la probabilidad de cualquier intervalo de la distribución normal en estudio.

**Notación**:

$X$ tiene distribución normal general $\implies X \sim N(\mu,\sigma^2)$

$X$ tiene distribución normal estándar $\implies X \sim N(0,1)$

Observemos el gráfico de la función de densidad de una distribución normal con media $\mu$ y varianza $\sigma^2$: es de forma acampanada, como muestra la figura del original (la "campana de Gauss"). En el eje de las abscisas se representa la variable aleatoria $X$ y las áreas bajo la curva representan probabilidades. La curva normal es simétrica y se extiende sin restricción en el sentido de las X.

### Características importantes de la distribución normal

- El área total comprendida bajo la curva y por encima del eje horizontal es igual a 1.
- La distribución es simétrica respecto a su media.
- La media, mediana y moda coinciden.
- La distancia horizontal que hay desde el punto de inflexión de la curva (el punto donde la curva deja de ser cóncava hacia abajo y empieza a ser cóncava hacia arriba) hasta una perpendicular levantada sobre la media es igual a la desviación típica $\sigma$.
- Para cada par de valores $\mu$ y $\sigma$, obtenemos una distribución diferente, por lo cual hablamos de una "familia" de distribuciones, que comparte características comunes.

Para calcular probabilidades bajo una distribución Normal es necesario calcular el área por debajo de la densidad. En este caso el cálculo es complicado por la forma de la función de densidad Normal. Por eso se han elaborado tablas que permiten calcular el área acumulada entre la curva y el eje Ox para diferentes valores de "x", pero sólo para el caso particular de la distribución Normal estándar.

La tabla que se anexa al final de estas notas proporciona la probabilidad acumulada de la variable Normal estándar —la función de distribución acumulada— en los valores de "x" desde 0,00 hasta 3,49 a intervalos centesimales.

Para calcular $P(a \le X \le b)$ cuando $X \sim N(0,1)$, alcanza con buscar en la tabla Normal dos valores, $P(X\le a)$ y $P(X\le b)$, y luego hacer la diferencia.

Para calcular probabilidades acumuladas bajo la curva Normal cuando alguno de los extremos del intervalo es negativo, se utiliza la simetría de la densidad.

### Propiedades de las variables con distribución normal

1. $X \approx N(\mu,\sigma^2) \implies E(X)=\mu$ y la varianza es $V(X)=\sigma^2$

   Estas dos primeras propiedades indican la interpretación de los dos parámetros de la distribución Normal: $\mu$ y $\sigma^2$ son respectivamente la esperanza y la varianza de la variable Normal.

2. $X \approx N(\mu,\sigma^2) \implies Z = \dfrac{X-\mu}{\sigma} \approx N(0,1)$

   Esta propiedad refiere a la estandarización de una variable Normal. La variable estandarizada también es normal con media 0 y varianza 1; en otras palabras, la estandarización de una variable Normal cualquiera la transforma en una Normal Estándar.

3. $Z \approx N(0,1)$, entonces:

   $$P(-1 \le Z \le +1) = 0{,}68$$
   $$P(-2 \le Z \le +2) = 0{,}95$$
   $$P(-3 \le Z \le +3) = 0{,}997$$

4. $X \approx N(\mu,\sigma^2)$, entonces:

   $$P(\mu-\sigma \le X \le \mu+\sigma) = 0{,}68$$
   $$P(\mu-2\sigma \le X \le \mu+2\sigma) = 0{,}95$$
   $$P(\mu-3\sigma \le X \le \mu+3\sigma) = 0{,}997$$

Las propiedades tercera y cuarta exponen el mismo resultado: que la probabilidad que concentra la distribución Normal (cualquiera sea) en su parte central es aproximadamente el 68% en el intervalo $(\mu-\sigma,\mu+\sigma)$, 95% en $(\mu-2\sigma,\mu+2\sigma)$ y 99,7% en el intervalo $(\mu-3\sigma,\mu+3\sigma)$. Esta propiedad se conoce con el nombre de **"Regla Empírica"**.

**Ejercicio de aplicación**: Calcular las siguientes probabilidades sabiendo que $X \sim N(0,1)$, utilizando para ello la tabla de distribución Normal acumulada.

$$P(X \le 0);\quad P(X \le 1);\quad P(X \le 2{,}33);\quad P(1 \le X \le 2);\quad P(X > 3);\quad P(X \le -1{,}5);\quad P(-2{,}5 \le X \le -1)$$

**Soluciones**:

$$P(X \le 0) = 0{,}5$$
$$P(X \le 1) = 0{,}8413$$
$$P(X \le 2{,}33) = 0{,}9901$$
$$P(1 \le X \le 2) = 0{,}9772 - 0{,}8413 = 0{,}1359$$
$$P(X > 3) = 1 - P(X \le 3) = 1 - 0{,}9987 = 0{,}0013$$
$$P(X \le -1{,}5) = 0{,}0668$$
$$P(-2{,}5 \le X \le -1) = 0{,}1587 - 0{,}0062 = 0{,}1525$$

## Caso de uso: Aproximación normal a la binomial

En determinadas situaciones, siendo $X$ una variable aleatoria Binomial, cuando $np$ y $n(1-p)$ son ambos mayores que 5, la variable

$$Z = \frac{X-E(X)}{\sqrt{Var(X)}} = \frac{X-np}{\sqrt{np(1-p)}}$$

sigue aproximadamente una distribución normal, con media 0 y desvío estándar 1. Se dispone así de un recurso, llamado "aproximación normal a la binomial", para resolver determinadas situaciones relativas a variables binomiales utilizando la distribución normal.

Como consecuencia, la pregunta "¿cuál es la probabilidad de encontrar valores de $X$ mayores que $x_0$?" tiene aproximadamente la misma respuesta que la pregunta "¿cuál es la probabilidad de encontrar valores de $Z$ mayores que

$$z_0 = \frac{x_0-np}{\sqrt{np(1-p)}}\ ?"$$

Esta pregunta se responde consultando la tabla de la distribución normal estándar o normal tipificada Z.

**Ejemplo**: En cierta población, el 9% de las gestaciones terminan en aborto espontáneo. Esta información fue obtenida considerando gran cantidad de gestaciones. ¿Cuál es la probabilidad de que, en una muestra de 80 gestaciones, ocurran más de 13 abortos?

**Solución 1**: si utilizáramos la distribución binomial para resolver esta situación deberíamos calcular (para $n=80$ y $p=0,09$):

$$P(X>13) = 1 - P(X\le13) = 1 - [P(X=1)+P(X=2)+\ldots+P(X=13)]$$

que, omitiendo el detalle de los cálculos, da como resultado:

$$P(X>13) = 1 - 0{,}988 = 0{,}012$$

**Solución 2**: si utilizáramos ahora la aproximación normal a la binomial como fue definida precedentemente, tendríamos que:

$$P(X>13) = P\left(Z > \frac{13-80 \times 0{,}09}{\sqrt{80 \times 0{,}09 \times (1-0{,}09)}}\right) = P(Z>2{,}27) = 0{,}0116$$

Este resultado es obtenido de la tabla de distribución normal estándar. Debemos resaltar que se trata de un valor "aproximado" de la probabilidad buscada, dado que el valor exacto es obtenido mediante la solución 1 a este problema (0,012). De todas formas se trata de una buena aproximación.

Vamos a ver más adelante en el curso que la aproximación normal a la binomial sirve de fundamento para la estimación por intervalo de una proporción y para la comparación de proporciones.

## Anexos

*(El documento original incluye en anexo las tablas de Distribución Binomial Acumulada y de Distribución Normal Estándar Acumulada.)*
