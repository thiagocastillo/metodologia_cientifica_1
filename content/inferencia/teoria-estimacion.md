> Fuente: `3.0. Inferencia estadistica - Estimación.pdf`

# Inferencia Estadística: Estimación

*Material de apoyo al Ciclo de Metodología I — Métodos Cuantitativos. Inferencia Estadística. Distribución muestral. Estimación puntual y por intervalo. Cálculo de tamaño de muestra. Ing. Rafael Alonso, Prof. Enrique Barrios.*

## 1. Introducción

Es común encontrar en la literatura biomédica estudios como el siguiente:

**Ejemplo 1**

*Satisfacción y expectativas de las mujeres participantes y no participantes en el Programa de Detección Precoz de Cáncer de Mama de Barcelona tras 10 años de funcionamiento.* Gemma Serral Cano y col. Rev Esp Salud Pública 2010; 84: 717-729.

> Fundamentos: … se plantea describir las características sociodemográficas de las mujeres según su participación o no en el Programa de Detección Precoz de Cáncer de Mama (PDPCM) en Barcelona (2007)…
>
> Métodos: Estudio transversal en una muestra de 600 mujeres de 50 a 69 años empadronadas en Barcelona. Se realizó una entrevista telefónica con un cuestionario de 35 preguntas…
>
> Resultados: De las 244 (40,7%) mujeres entrevistadas que no participaron en el PDPCM, 160 (65,6%) tenían estudios medios o superiores y 163 (66,8%) eran de clase social aventajada…

En esta situación podemos identificar que interesa conocer características sociodemográficas de las mujeres en Barcelona que participan o no en un programa de detección de cáncer de mama. Por ejemplo, puede interesar la proporción de mujeres que no participaron del programa de detección. La solución a este problema es encuestar a la totalidad de las mujeres de la ciudad entre 50 y 69 años (la "población"). Esto en general no es posible, por lo que los investigadores tomaron una muestra de 600 mujeres y encontraron que de las 244 mujeres que no participaban en el programa de prevención PDPCM (40.7%). Podemos plantearnos ciertas preguntas:

1. Si la encuesta incluyera la totalidad de las mujeres de Barcelona entre 50 y 69 años, ¿puedo afirmar que exactamente el 40.7% no participa en el programa?
2. Si otro investigador repite la encuesta en otra muestra, ¿se obtendrá nuevamente el mismo porcentaje?

Luego de pensar intuitivamente en la respuesta puedo preguntarme: si en la población no hay exactamente 40.7% que no participan, ¿puedo cuantificar el error que se está cometiendo? ¿Entre qué valores esperaría que estuviera este porcentaje? ¿Qué características debe tener esta muestra para poderlo calcular?

Con la primer pregunta nos introducimos en la característica principal de lo que llamamos **inferencia estadística**. La inferencia estadística trata de cómo obtener información (inferir) sobre parámetros poblacionales de las distribuciones de la variable de interés, a partir de subconjuntos de valores (muestras) de la variable. Esta inferencia puede consistir en la estimación del valor o en la verificación estadística de una hipótesis sobre el parámetro.

En este caso estamos tratando de inferir cuánto valdrá la "proporción de mujeres que no participan del programa de prevención" en la población.

## 2. Estimación

Supongamos que la población está integrada por elementos que presentan un cierto carácter o cualidad, en una proporción $p$, la cual buscamos conocer (como en el estudio anterior fue la $p$ = "proporción de mujeres participantes del programa en toda la población").

En la inmensa mayoría de los casos, no es posible considerar el análisis de toda la población, porque ésta puede ser muy grande, por lo que tomamos una muestra y calculamos en ella el valor que más se podría "parecer" a la proporción en la población. Esta proporción calculada en la muestra es el **estimador** de la proporción en la población. En el ejemplo anterior fue la proporción en la muestra de 600 mujeres, y la llamamos $p^*$.

Otra situación posible sería si nos interesáramos en la probabilidad de mejoría de cierta enfermedad grave. Si en un determinado momento pudiéramos establecer la lista de todos los enfermos y seguirlos para ver su eventual mejoría, este grupo, aun en esta situación, no podría ser considerado como la población de enfermos, sino simplemente como una muestra, extraída de la población teórica de los enfermos presentes y futuros. No podemos asegurar que si seguimos a otro grupo de pacientes similar, los resultados sean exactamente iguales. Estaría afectada por cierto error aleatorio.

Veremos a continuación cómo podríamos calcular ese error y las condiciones que deben darse para poder realizar este cálculo.

La situación anterior la podemos ejemplificar mediante una figura en donde $N$ correspondería a toda la población de mujeres de Barcelona en las edades de interés y el $n$ de la muestra sería 600 (Figura 1. Población y muestra).

Puede interesarnos el valor de algún parámetro poblacional, como puede ser la media, la varianza o la proporción de cierta patología. En este caso también estaríamos estimando el valor poblacional a partir de los valores tomados de una muestra, como puede ser la media o la varianza en la muestra.

Podríamos llamar $\theta$ (theta) al parámetro poblacional desconocido. Generalizamos la notación con esta letra, pero nos referimos a cualquier parámetro poblacional, como la media, la varianza o una proporción, del cual queremos "estimar" el valor.

Cuando calculamos la proporción estamos refiriéndonos a una variable cualitativa, pero también podemos calcular parámetros para variables cuantitativas, como en la siguiente situación que refiere al screening de aneurisma de aorta abdominal.

**Ejemplo 2**

*Screening del aneurisma de aorta abdominal mediante ecocardiografía transtorácica* (Gentille-Lorente, Salvado-Usach).

> Introducción y objetivos: La creciente incidencia del aneurisma de la aorta abdominal (AAA), principalmente por el envejecimiento de la población, y su mortalidad del 85-90% en caso de rotura, justifican su diagnóstico precoz y un tratamiento reparador electivo. El objetivo principal del presente trabajo es analizar la utilidad de la ecocardiografía transtorácica (ETT) para el estudio de la aorta infrarrenal y el cribado del AAA.
>
> Métodos: Se estudió a 512 pacientes (309 varones y 203 mujeres)…
>
> Resultados: En 25 pacientes (5.1%) se detectó un AAA; la edad mínima al diagnóstico era 55 años; la razón varones:mujeres, 7.3:1, y el diámetro promedio de los aneurismas, 39.5…
>
> Conclusiones: Completar la ETT convencional con el estudio de la aorta infrarrenal (acceso paraumbilical) resulta útil y válido…

En este ejemplo el diámetro promedio de los aneurismas es de 39.5mm en una muestra de 512 pacientes, con el cual estaríamos estimando el promedio poblacional de todos los pacientes que están representados en esta muestra.

### Características de la muestra

En lo sucesivo hablaremos de muestras, las cuales es deseable que tengan ciertas características:

**Representatividad**: Las muestras tomadas deberían ser representativas de la población de interés. Para que una muestra sea representativa, y por lo tanto útil, debe reflejar las similitudes y diferencias encontradas en la población y ejemplificar las características de la misma. Cuando decimos que una muestra es representativa, indicamos que reúne aproximadamente las características de la población que son importantes para la investigación.

**Aleatoriedad**: Una muestra aleatoria es aquella en la cual cada individuo perteneciente a la población tiene la misma probabilidad de ser elegido para formar parte de la misma. Este enfoque metodológico permite minimizar los sesgos de selección de estos individuos, intentando maximizar la representatividad de la muestra en relación a la población de donde fue extraída.

**Resumen**

- En estimación intentamos inferir sobre el valor del parámetro a partir de los datos de una muestra aleatoria.
- El muestreo debe ser aleatorio para ser válido en las condiciones que lo estudiamos.
- En esas condiciones podemos cuantificar el error aleatorio.
- La muestra debe ser por lo menos aleatoria y representativa.

### 2.1. Estadístico

Un término que usaremos frecuentemente es lo que llamamos **estadístico**, que corresponde a cualquier resultado obtenido de operar con los datos muestrales y que sigue una distribución de probabilidad que usualmente es conocida. Los estimadores que veremos son casos particulares de estadísticos.

### 2.2. Propiedades de un estimador

Las cualidades de un estimador dependen de la fórmula utilizada para calcularlo y del tipo de muestreo utilizado. Según la forma de muestreo utilizada, se pueden usar fórmulas de estimación distintas para el mismo parámetro poblacional. En lo siguiente nos limitaremos a muestras obtenidas a partir de un muestreo aleatorio simple. Veremos entonces las propiedades que hacen de un estimador un buen estimador. Entre estas características encontramos la varianza del estimador, el sesgo y la convergencia.

Cuando se dice convergencia, se refiere a la convergencia hacia el verdadero valor desconocido del parámetro. Esto significa que a mayor tamaño muestral, la estimación $\hat{\theta}$ se aproxima al valor del parámetro estimado $\theta$. En el caso de la media de la muestra $\bar{x} = \dfrac{\sum x_i}{n}$, decimos que se aproxima al valor de la media poblacional $\mu$.

**Ejemplo gráfico**

Para ilustrar estas características podemos imaginarnos al "estimador" como un tirador, al valor verdadero poblacional (o valor teórico) como el centro del blanco, y los tiros como diferentes estimaciones (Figura 2.0. Analogía del estimador con el tirador). Algunas de las situaciones que se pueden dar son las siguientes:

- **Caso A**: los disparos están dispersos pero centrados en el blanco; esto correspondería al caso de un estimador sin varianza mínima e insesgado (los valores se concentran alrededor del blanco).
- **Caso B**: sesgado, sin varianza mínima.
- **Caso C**: corresponde al estimador insesgado de varianza mínima.
- **Caso D**: los disparos están concentrados pero no aciertan en el centro del blanco; esto correspondería al caso de un estimador con varianza mínima (los valores obtenidos por el estimador no se alejan demasiado entre sí) pero sesgado (los valores se concentran alrededor de un punto que no es el blanco, hay una diferencia sistemática).

**Ejemplo**

En el caso de la media aritmética muestral, es un ejemplo de un estimador insesgado y con mínima varianza:

$$\bar{x} = \frac{\sum x_i}{n}$$

Tiende a la media poblacional a medida que se toman $n$ mayores, con mínima dispersión.

## 3. Estimación puntual

En la estimación puntual, lo que hacemos es atribuirle al valor poblacional desconocido el valor que calculamos en la muestra.

### 3.1. Estimación puntual de una media o promedio

Como vimos anteriormente, el estimador "media aritmética" es insesgado y convergente; por lo tanto es un buen estimador, y la estimación de la media de una distribución se calcula a partir de:

$$\bar{x} = \frac{\sum x_i}{n}$$

**Ejemplo**: En el fragmento de artículo del ejemplo 2, considerando la muestra aleatoria de tamaño 512, resulta una media muestral de $\bar{x}=39.5$ mm. Entonces suponemos que la media poblacional del diámetro del aneurisma abdominal es 39.5 mm.

### 3.2. Estimación puntual de una proporción

Para obtener una estimación puntual $\hat{p}$ (proporción o probabilidad) de la proporción poblacional $p$, tomamos una muestra de tamaño $n$. Entonces la estimación es:

$$\hat{p} = \frac{\text{número de observaciones con la condición de interés}}{\text{número total}} = \frac{x}{n}$$

En el fragmento de artículo del Ejemplo 1, la estimación de la proporción de mujeres de la ciudad que no participa del programa de prevención es $\hat{p}=0.407$, entonces estamos infiriendo que la proporción en la población total de la ciudad es $p=0.407$.

## 4. Distribución de la media muestral

En las definiciones y procedimientos de la sección anterior, no hemos hecho ninguna referencia particular a qué ocurriría si se obtuvieran varias muestras aleatorias simples del mismo tamaño desde una misma población. Esta información nos permitiría decir qué valores toma el estimador que usamos y de qué manera. A lo que nos referimos es a la **distribución muestral de la media**.

La distribución muestral de la media es la distribución de todos los valores posibles que puede asumir la media muestral, calculados a partir de muestras del mismo tamaño, extraídas aleatoriamente de la misma población.

### 4.1 Distribución muestral para la media

Algunas preguntas que podemos hacernos con referencia a los artículos vistos son:

i) En una muestra aleatoria de 600 mujeres, la edad promedio resulta ser 55 años. ¿Qué valor promedio esperaría obtener si tomo otra muestra de 600 mujeres?

ii) En una muestra aleatoria de 600 mujeres, 40% no participan del programa de prevención. ¿Qué porcentaje no participará del programa de prevención en otra muestra de 600 mujeres? ¿Qué valor obtendré?

iii) En una muestra aleatoria de 25 individuos, el diámetro de aneurismas resultó ser 35. ¿Qué podría ocurrir si obtengo otra muestra de tamaño 25? ¿Qué valor obtendré?

Los valores pueden ser diferentes, pero veremos cómo se distribuyen.

Supongamos que extraigo varias muestras aleatorias del mismo tamaño, de una población. Consideramos que si elegimos una observación en una de las muestras, la retornamos a la población de tal manera que puede ser elegida nuevamente (lo que llamamos **muestreo con reemplazo**).

Al obtener muestras del mismo tamaño y calcular el promedio en cada una de ellas, obtengo ciertos valores. Si hacemos un histograma con los valores obtendremos un gráfico de tipo "campana". Si obtenemos un número importante de muestras y graficamos la densidad obtenemos un gráfico similar a una distribución normal. Este resultado es el descrito por el **Teorema Central del Límite**.

### 4.2 Teorema Central del Límite (TCL)

Dada la distribución de densidad de una variable aleatoria $X$, con media $\mu$ y varianza $\sigma^2$, la distribución muestral de la media (o distribución de $\bar{X}$), basada en muestras aleatorias de tamaño $n$, tiene las siguientes características:

1. La media de la distribución muestral es $\mu$.
2. La varianza de la distribución muestral es $\sigma^2/n$.
3. Si la distribución de la variable $X$ es gaussiana normal, entonces la distribución de las medias muestrales también lo es.
4. Si la distribución de la variable no es normal, la forma de la distribución muestral tiende a ser gaussiana normal si el tamaño muestral $n$ es suficientemente grande.

En el caso que la distribución muestral sea gaussiana, ésta va a tener media $\mu$ y desvío estándar:

$$\sigma_{\bar{x}} = \frac{\sigma}{\sqrt{n}}$$

A $\sigma_{\bar{x}}$ se le llama usualmente **error estándar**.

Se tiene representada la distribución de una variable $X$ normal y la distribución de las posibles medias muestrales correspondientes a muestras de tamaño $n$ tomadas de esa población ($\bar{X}$). Sabemos que el desvío de la "distribución de medias muestrales" es $\sigma_{\bar{x}}=\sigma/\sqrt{n}$ y el desvío poblacional es $\sigma$.

Como se puede apreciar de la expresión para el error estándar ($\sigma_{\bar{x}}$, también abreviado E.E.), la dispersión para la distribución de las $\bar{X}$ es menor a la distribución de la $X$.

Lo que también nos indica el TCL es que, cualquiera sea la distribución de la variable, la distribución de las posibles medias muestrales del mismo tamaño tiene forma aproximadamente normal. Si la distribución es normal, la distribución de medias muestrales es exactamente normal.

### Aplicaciones del Teorema Central del Límite

Podemos deducir algunas características a partir de la forma de la curva: a partir de la expresión para el error estándar vemos que cuanto más grande es $n$, más pequeño es el error estándar, lo que también ocurre cuanto más pequeño es $\sigma$.

En este momento, podemos repasar y verificar algunas de las propiedades de los estimadores. El estimador media aritmética, que estima la media poblacional $\mu$, cumple con las propiedades de convergencia, sin sesgo y varianza mínima.

Si resulta que $X$ sigue una distribución normal de media $\mu$ y varianza $\sigma^2$, la distribución de

$$z = \frac{\bar{x}-\mu}{\sigma/\sqrt{n}}$$

es normal con media cero y desvío estándar uno, que usualmente llamamos $z$ o normal tipificada. Suponiendo ciertos valores para los parámetros poblacionales podemos calcular la probabilidad de encontrar los valores en la muestra que efectivamente obtuve.

Por otro lado, este teorema nos permite luego calcular el error aleatorio que estamos cometiendo al estimar un valor poblacional a partir de una única muestra.

**Ejemplo** (tomado de Daniel, ver ref.):

En cierta población humana, el diámetro craneal sigue una distribución normal con media 185.6 mm y desviación estándar de 12.7 mm. ¿Cuál es la probabilidad de que de una muestra aleatoria de tamaño 10 se obtenga una media muestral mayor a 192 mm?

Tenemos que:

$$\mu=185.6 \qquad \sigma=12.7 \qquad \bar{x}=192 \qquad n=10$$

**Solución**: El procedimiento se realiza de manera análoga a cuando se buscaba la probabilidad de que la variable $X$ fuera mayor que un determinado valor $x_0$. En este caso sabemos que la distribución de $\bar{X}$ es normal, por lo que podemos estandarizar y usar la variable normal tipificada $Z$:

$$P(\bar{X}>192) = P\left(\frac{\bar{X}-\mu}{\sigma/\sqrt{n}} > \frac{192-185.6}{12.7/\sqrt{10}}\right) = P(z>1.59) = 1-P(z<1.59)$$

Consultando la tabla de la distribución normal tipificada, se encuentra una probabilidad igual a $1-0.9441=0.0559$ (equivalente al área rayada bajo la curva, a la derecha del valor $z=1.59$).

Se verá más adelante cómo la distribución muestral permite también calcular la estimación por intervalo de confianza para la media aritmética.

### 4.3 Distribución muestral para proporciones

Tomamos una muestra de tamaño $n$ y calculamos el estimador utilizando las observaciones de la muestra. Al parámetro a estimar $p$ lo llamamos proporción poblacional, y a la estimación $\hat{p}$, proporción observada.

Como deseamos estimar una proporción, entonces parece intuitivo definir $\hat{P} = \dfrac{X}{n}$, en donde $X$ es una variable aleatoria discreta que indica la "cantidad de observaciones que cumplen con la condición de interés". Dicho de otra manera, cuenta la cantidad de éxitos en $n$ observaciones independientes.

En el Ejemplo 1 interesa saber la proporción poblacional de mujeres que participan en el programa de detección precoz en la ciudad de Barcelona. Estimar la proporción de mujeres que participan en el programa de detección precoz en una población es similar a calcular la probabilidad de seleccionar al azar (de entre las mujeres de Barcelona) una mujer que participa del programa de detección en esa población.

Si suponemos que todas tienen la misma probabilidad de ser elegidas y que las observaciones son independientes (la probabilidad de participación de una mujer no afecta la de otra), estamos ante una variable de Bernoulli.

La variable aleatoria $X$ podría entonces verse como la "cantidad de éxitos en $n$ pruebas independientes" (la cantidad de mujeres que participan del programa de una muestra de mujeres tomada al azar), y recordando capítulos anteriores se ajusta a la definición de una variable con distribución binomial.

Siendo $X$ una variable aleatoria binomial, $E(X)=np$ y $Var(X)=np(1-p)$.

### Aplicaciones de la distribución muestral

**Ejemplo 1**

Supongamos que la proporción "real" de mujeres que participan en el programa de prevención es de 0.2. Extraigo una muestra al azar de tamaño 10. ¿Cuál es la probabilidad de que la proporción muestral sea igual a 0.3?

**Solución**: La variable es discreta y, al ser una proporción, se usa distribución binomial.

Información disponible:

$$p=0.2 \qquad p_0=0.3 \qquad n=10$$

Para esto calculamos la cantidad de éxitos que se tendría si en la muestra tenemos una proporción de 0.3. Entonces en 10 se esperaría 0.3×10=3, 3 mujeres participantes del programa.

La distribución es la binomial $Bin(n,\pi)=Bin(10,0.2)$ y podemos modificar el enunciado de la pregunta, que se convierte en: ¿cuál es la probabilidad de 3 éxitos en una distribución $Bin(10,0.2)$?

$$P(X=3)=?$$

Buscando en la tabla de la distribución binomial, para $n=10$, $x=3$ y $p=0.2$, encontramos una probabilidad de:

$$P(X\le3)-P(X\le2)=0.8791-0.6778=0.2013$$

**Ejemplo 2**

Supongamos que la proporción "real" de mujeres que no participan en el programa de prevención es de 0.35. Pero de la muestra de 600 mujeres, se obtiene una proporción de 0.40. ¿Qué tan probable es obtener una proporción de 0.4 o mayor en la muestra si en la población la proporción es de 0.35?

Para esto usamos la aproximación de la binomial a la normal:

$$P\left(z > \frac{\hat{p}-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}\right) = P\left(z > \frac{0.4-0.35}{\sqrt{\dfrac{0.35(1-0.35)}{600}}}\right) = P\left(z > \frac{0.05}{0.019}\right) = P(z>2.63) = 1-P(z<2.63) = 0.004$$

Se verá más adelante cómo la distribución muestral permite también calcular la estimación por intervalo de confianza para una proporción.

### Aspectos a tener en cuenta

- Es deseable que los estimadores sean insesgados y con varianza mínima.
- La distribución muestral de los estadísticos es la distribución de todos los valores posibles que puede asumir un estadístico, calculados a partir de muestras del mismo tamaño, extraídas aleatoriamente de la misma población.
- El teorema central del límite nos indica cómo es la distribución de medias muestrales.
- Cualquiera sea la distribución de la variable, la distribución de medias muestrales es cercana a la normal gaussiana.
- El desvío estándar cuantifica la dispersión en los valores de la variable.
- El error estándar cuantifica la dispersión de la distribución de medias muestrales y corresponde al desvío estándar del estimador.
- La estimación puede ser puntual o por intervalo.
- La distribución de medias muestrales permite obtener las fórmulas para el cálculo de los intervalos de confianza.

## 5. Estimación por intervalo

La estimación puntual pierde interés si no la completamos con la imprecisión con la que consideramos el valor estimado. En la estimación por intervalo de un parámetro poblacional $\theta$ determinamos los límites de ese intervalo, de tal manera que exista una cierta confianza de que incluya el valor poblacional.

### 5.1. Intervalo de confianza para la media poblacional

A partir de la distribución de medias muestrales obtenemos un gráfico correspondiente. En el caso de la estimación de la media poblacional, esto quedaría:

$$P(\bar{X}-I<\mu<\bar{X}+I) = 1-\alpha$$

En donde $I$ la llamamos **imprecisión**.

Este intervalo es llamado intervalo de confianza al $1-\alpha$. Niveles de confianza usuales son 0.90, 0.95 y 0.99. Alfa ($\alpha$) es el error que estamos dispuestos a cometer. En este caso la variable aleatoria que cambia de muestra a muestra es la media muestral.

Para ilustrar el hecho de que el intervalo no siempre es el mismo, supóngase que se obtienen diferentes muestras de igual tamaño desde la población y se calcula la media de cierta variable en cada una de ellas. Los valores no van a ser necesariamente los mismos como ya hemos visto, pero mediante fórmulas se puede calcular el error y determinar los intervalos.

Si cada una de las líneas de la figura correspondiente del original representa un intervalo de confianza, se puede apreciar que no todos incluyen a la media poblacional. Si el intervalo se calcula "al 95% de confianza" significa que si pudiéramos calcular 100 intervalos de confianza obtenidos de la misma población, se esperaría que 95 de ellos incluyeran a la media poblacional buscada. En la realidad no se puede saber si, al obtener una única muestra, el intervalo incluirá a la media poblacional, pero existe una alta probabilidad de que así sea.

Encontrar el intervalo de confianza al 95% para la media poblacional consistió en encontrar 2 variables aleatorias $L_1$ y $L_2$ (son variables aleatorias porque dependen de $\bar{X}$, que es una variable aleatoria), tal que $P(L_1<\mu<L_2)=0.95$. Esta probabilidad significa que si se extrajeran de la población un número importante de muestras con reemplazo independientes de tamaño $n$, y se calculara el intervalo de confianza para la media para cada una de estas muestras, se esperaría que 95% de estos intervalos incluyeran a $\mu$ y 5% no lo hicieran.

Para su cálculo se pueden dar dos situaciones: que se conozca o que no se conozca el desvío estándar poblacional.

#### 5.1.1. Varianza poblacional conocida

Deseamos encontrar un intervalo de confianza para la media poblacional $\mu$ de una variable aleatoria $X$ que sigue una distribución con $Var(X)=\sigma^2$ conocida. Para esto usaremos la distribución de medias muestrales.

Expresemos la probabilidad anterior como:

$$P(L_1<\mu<L_2)=0.95$$

Esto significa que la probabilidad de que el intervalo aleatorio $[L_1;L_2]$ incluya la media poblacional buscada es 0.95.

Se debe recordar siempre que la media poblacional es fija y que el intervalo de confianza calculado depende de la muestra que se haya tomado.

También sabemos que $P(-1.96<z<1.96)=0.95$. Este resultado lo podemos obtener de la tabla de la distribución normal tipificada, encontrando los valores que determinan el 95% central de la distribución, dejando 2.5% en cada uno de los extremos.

Sabiendo que $z = \dfrac{\bar{X}-\mu}{\sigma/\sqrt{n}}$ tiene una distribución normal con media 0 y varianza 1, y dado que $P(-1.96<z<1.96)=0.95$, a partir de la distribución de medias muestrales se obtiene que:

$$P\left(-1.96<\frac{\bar{X}-\mu}{\sigma/\sqrt{n}}<1.96\right) = P\left(-1.96\cdot\frac{\sigma}{\sqrt{n}}<\bar{X}-\mu<1.96\cdot\frac{\sigma}{\sqrt{n}}\right) = P\left(\bar{X}-1.96\cdot\frac{\sigma}{\sqrt{n}}<\mu<\bar{X}+1.96\cdot\frac{\sigma}{\sqrt{n}}\right)$$

Entonces:

$$L_1 = \bar{X}-1.96\frac{\sigma}{\sqrt{n}} \qquad L_2 = \bar{X}+1.96\frac{\sigma}{\sqrt{n}}$$

El ejemplo anterior fue para el caso de un 95% de confianza; en general los límites del intervalo de confianza se expresan:

$$L_1 = \bar{x}-z_{\alpha/2}\frac{\sigma}{\sqrt{n}} \qquad L_2 = \bar{x}+z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$

En donde $z_{\alpha/2}$ corresponde a los valores de la distribución Normal tipificada $Z$ para la confianza considerada.

Siendo la imprecisión $I$:

$$I = z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$

**Ejemplo**: Deseamos estimar el promedio de edad de cierta población. Tomamos una muestra de tamaño 100 en la cual se obtuvo una media muestral de 35. La variable considerada tiene distribución normal con una varianza poblacional igual a 3. Calcular el intervalo de confianza al 95% e indicar la imprecisión.

**Solución**: Aplicando simplemente la fórmula para calcular los límites del intervalo de confianza (IC), tenemos:

$$35\pm1.96\cdot\frac{\sqrt{3}}{\sqrt{100}} = [34.66;35.34]$$

$L_1=34.66$ y $L_2=35.34$, y la imprecisión es $I=0.339$.

Se podría interpretar el intervalo de la manera siguiente: la confianza en que la media poblacional de edad esté incluida en el intervalo $[34.66;35.34]$ es de 95%, o podemos decir entonces que existe una confianza de 95% de que el intervalo $[34.66;35.34]$ incluya a la verdadera media poblacional de edad de la población de interés.

Los supuestos para el uso de esta forma de calcular el intervalo son:

1. La distribución de la variable es gaussiana normal.
2. La varianza poblacional es conocida.

#### 5.1.2. Varianza poblacional desconocida – Variables con distribución normal

#### 5.1.3. Uso de la distribución t

Cuando no conocemos la varianza poblacional para el cálculo del intervalo de confianza, no podemos usar el estadístico $z=\dfrac{\bar{X}-\mu}{\sigma/\sqrt{n}}$, por lo que tenemos que estimar la varianza poblacional a partir de la varianza de la muestra:

$$s^2 = \frac{\sum_{i=1}^{n}(x_i-\bar{x})^2}{n-1}$$

y entonces $s=\sqrt{s^2}$ es una estimación de $\sigma$.

Cuando el $n$ es grande (mayor de 30) podríamos usar $s$ como una buena estimación de $\sigma$ y usar la distribución Normal. Pero cuando $n$ es más pequeño debemos recurrir a otra distribución para construir los intervalos de confianza para la media.

Se puede probar entonces que:

$$t = \frac{\bar{X}-\mu}{s/\sqrt{n}}$$

sigue una distribución que llamamos **distribución t de Student**.

**5.1.3.1 Propiedades de la distribución t**

1. Su media es cero.
2. Es simétrica en torno a la media.
3. En general su varianza es uno, pero se aproxima a uno a medida que los grados de libertad son mayores.
4. La variable $t$ puede tomar valores desde $-\infty$ a $+\infty$.
5. Es una familia de distribuciones, con una distribución diferente según los grados de libertad ("GL").
6. Comparada a la distribución normal, resulta un poco más achatada y con los extremos más altos.
7. La distribución $t$ se aproxima a la normal a medida que $n$ aumenta.

Para buscar los valores de la distribución $t$ usamos una tabla (Tabla 5.1, disponible en el Anexo).

Para encontrar el valor de $t$ para un intervalo de confianza al 95% con 9 grados de libertad, se debe buscar los grados de libertad en "gl" y 0.05 en el valor correspondiente a "dos extremos", obteniendo $t_{0.025,9}=2.26$.

La tabla completa se encuentra en el Anexo.

#### 5.1.4. Cálculo del Intervalo de confianza cuando la varianza poblacional es desconocida

En el punto 5.1.1 se vio la situación en la cual se conocía la varianza poblacional, lo que nos permitía usar la distribución normal para el cálculo de intervalos de confianza. En esta segunda situación la distribución de la variable se sigue considerando normal, pero en este caso no se conoce $\sigma^2$. La estimamos a partir de la varianza de la muestra de tamaño $n$ mediante la fórmula:

$$S^2 = \frac{\sum(X_i-\bar{X})^2}{n-1}$$

Pero en la situación de varianza desconocida, si la variable $X$ sigue una distribución normal gaussiana, el estadístico:

$$T = \frac{\bar{X}-\mu}{S/\sqrt{n}}$$

sigue una distribución $T$ de Student con $n-1$ grados de libertad.

Haciendo las mismas operaciones que para el caso de varianza conocida, llegamos a la expresión final:

$$L_1 = \bar{X}-t_{\alpha/2,n-1}\frac{s}{\sqrt{n}} \qquad L_2 = \bar{X}+t_{\alpha/2,n-1}\frac{s}{\sqrt{n}}$$

para los extremos del intervalo de confianza. En donde $t_{\alpha/2}$ corresponde a los valores del 95% central de la distribución $T$, con $n-1$ grados de libertad.

**Ejemplo**: Deseamos estimar la presión sistólica promedio de cierta población. Tomamos una muestra de tamaño 20 en la cual se obtuvo una media muestral de 150 mmHg con una varianza muestral igual a 9. La variable considerada tiene distribución normal. Calcular el intervalo de confianza al 95 por ciento para la media poblacional, e indicar la imprecisión.

**Solución**: Dado que se desea un nivel de confianza del 95%, el error $\alpha=0.05$ y por lo tanto tenemos:

$$\bar{x}\pm t_{0.025}\cdot\frac{s}{\sqrt{n}}$$

Reemplazando por los valores, según $t_{0.025}=2.086$ (buscado en la tabla de la distribución $T$, para $\alpha=0.05$ y 19 grados de libertad):

$$150\pm2.086\cdot\frac{\sqrt{9}}{\sqrt{20}} = [148.60;151.39]$$

Entonces, $L_1=148.6$ y $L_2=151.4$.

Podemos decir entonces que existe una confianza de 95% de que el intervalo $[148.6;151.4]$ incluya a la verdadera media poblacional de presión sistólica.

**Supuestos de uso**: Los supuestos para el uso de esta forma de calcular el intervalo son:

1. La distribución de la variable es gaussiana normal.
2. La varianza poblacional es desconocida.

#### 5.1.5. Variable X no normal, varianza desconocida

Si la variable $X$ tiene una distribución que no es normal, o que la desconocemos, pero el tamaño muestral es lo suficientemente grande (convencionalmente >30), entonces la distribución de las $\bar{X}$ es normal (teorema central del límite). Reemplazando el valor de $t$ por $z$ obtenemos los límites del IC de la siguiente manera:

$$\bar{x} \pm z_{\alpha/2}\cdot\frac{s}{\sqrt{n}}$$

### 5.2. Intervalo de confianza para una proporción

#### 5.2.1. Muestras grandes

Análogamente al caso de la media poblacional, consideramos la situación en la cual se busca un intervalo tal que se cumpla la proposición que sigue:

$$P(\hat{P}-I<p<\hat{P}+I) = 1-\alpha$$

En donde $I$ corresponde a la imprecisión.

A partir de la distribución de $\hat{P}$ vimos que $Var(\hat{P}) = \dfrac{p(1-p)}{n}$; esta varianza depende del valor de $p$ poblacional que no se conoce, entonces se usa su estimación, resultando $Var(\hat{P}) = \dfrac{\hat{P}(1-\hat{P})}{n}$.

Como se usa la aproximación de la binomial a la normal, entonces resulta para una muestra la expresión siguiente:

$$L_1 = \hat{p}-Z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}} \qquad L_2 = \hat{p}+Z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

La mitad del intervalo de confianza la definimos como la imprecisión. En este caso la imprecisión de una estimación dada corresponde a:

$$I = Z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Para que sea posible la aproximación normal, es necesario que los productos $np$ y $n(1-p)$ sean ambos $\geq5$; como no se conoce $p$ (que estamos tratando de estimar), una regla práctica es verificar que $n\hat{p}_i$, $n\hat{p}_s$, $n\hat{q}_i$, $n\hat{q}_s$ sean todos $\geq5$ (donde $\hat{p}_i$ y $\hat{p}_s$ son los límites inferior y superior del intervalo de confianza y $\hat{q}=1-\hat{p}$).

**Ejemplo 1**: En una determinada población, se desea estimar la proporción de fumadores. Para ello se extrae una muestra aleatoria de tamaño $n=100$ en la cual se observó que 30 individuos eran fumadores. Calcular el intervalo al 95% de confianza para estimar la proporción poblacional de fumadores e indicar la imprecisión $I$.

Tenemos entonces:

$$\hat{p} = 30/100 = 0.3 \qquad n=100$$

El nivel de confianza es de 95% (0.95 si lo pensamos en probabilidad), por lo tanto alfa=0.05. Encontramos que, a partir de la tabla de la normal tipificada, se obtiene $Z_{0.025}=1.96$.

Sustituyendo en la fórmula $\hat{p}\pm Z_{\alpha/2}\sqrt{\hat{p}(1-\hat{p})/n}$, obtenemos:

$$L_2 = 0.3+1.96\sqrt{\frac{0.3(1-0.3)}{100}} = 0.39$$

$$L_1 = 0.3-1.96\sqrt{\frac{0.3(1-0.3)}{100}} = 0.21$$

La imprecisión es:

$$I = 1.96\sqrt{\frac{0.3(1-0.3)}{100}} = 0.09$$

Podemos decir entonces que tenemos una confianza de 0.95 de que el intervalo $[0.21;0.39]$ incluya a la verdadera proporción de fumadores (y se verifica que $0.21\times100\geq5$, $0.39\times100\geq5$, $(1-0.21)\times100\geq5$ y $(1-0.39)\times100\geq5$).

**Ejemplo 2**: Cierta prueba diagnóstica fue ensayada en 356 pacientes, resultando en una sensibilidad de 80% y una especificidad de 35%. Calcular el intervalo al 95% de confianza para la sensibilidad de la prueba.

Tenemos entonces:

$$\hat{p}=0.8 \qquad n=356$$

El nivel de confianza es de 95%, por lo tanto $\alpha=0.05$. Encontramos que, a partir de la tabla de la normal tipificada, se obtiene $Z_{0.025}=1.96$.

Sustituyendo en la fórmula $\hat{p}\pm Z_{\alpha/2}\sqrt{\hat{p}(1-\hat{p})/n}$, obtenemos:

$$L_1 = 0.8-1.96\sqrt{\frac{0.8(1-0.8)}{356}} = 0.76$$

$$L_2 = 0.8+1.96\sqrt{\frac{0.8(1-0.8)}{356}} = 0.84$$

Podemos decir entonces que la sensibilidad puede estar entre $[0.76;0.84]$ con una confianza de 95%.

#### 5.2.2. Muestras pequeñas

En este caso no vale la aproximación de la binomial a la normal (cuando $np$ o $nq \leq5$). La distribución binomial no siempre es simétrica respecto a su valor medio, por lo tanto el intervalo de confianza tampoco tiene que serlo. Como este cálculo resulta bastante tedioso, se puede recurrir a tablas diseñadas para calcular el intervalo de confianza en situaciones en las que no se pueda realizar la aproximación normal.

#### 5.2.3. Conceptos finales

Los intervalos de confianza permiten calcular la precisión del estimador, en el caso en que las muestras hubieran sido obtenidas de manera aleatoria. A cada estimador se le puede calcular el intervalo de confianza correspondiente. Vimos en esta ocasión los intervalos para medias y proporciones, pero otros estimadores vistos en cursos anteriores, como el odds ratio (OR) y el riesgo relativo (RR), también tienen su intervalo de confianza y la interpretación es similar a la vista para medias y proporciones, como veremos en el capítulo siguiente.

### Aspectos a tener en cuenta

- La estimación por intervalo permite cuantificar el error que se comete por haber trabajado con una muestra en lugar de toda la población.
- Se debe recordar siempre que la media poblacional es fija y que el intervalo de confianza calculado depende de la muestra que se hubiera tomado.
- Un intervalo al 95% de confianza para la media muestral indica que la probabilidad de que el intervalo aleatorio $[L_1;L_2]$ incluya la media poblacional buscada es 0.95.
- Para la estimación de la media aritmética la distribución muestral es normal gaussiana.
- Para la estimación de una proporción usualmente se usa la aproximación normal a la binomial.
- Cuando construimos un intervalo de confianza del 95% podemos decir que si se eligieran muchas muestras, se puede esperar que el 95% de los intervalos de confianza generados a partir de estas muestras contengan a la media poblacional.
- Recordemos que $\mu$ es una constante (es fija, aunque desconocida), no es una variable aleatoria, y que el intervalo aleatorio depende de la muestra y, en particular, de la media muestral.
- Una vez elegida al azar la muestra, el intervalo es fijo y como $\mu$ también, no es correcto decir que la probabilidad de que $\mu$ esté dentro del intervalo es de 95%: un número fijo $\mu$ está o no está dentro de un intervalo fijo. Por ello se habla de confianza y se puede interpretar de la siguiente forma: si se eligieran muchas muestras, se puede esperar que el 95% de los intervalos aleatorios contengan a la media poblacional $\mu$. Con una confianza de 95% esperamos que el intervalo incluya a la media poblacional.

## 6. Cálculo del tamaño muestral

Antes de la extracción de la muestra, en general es necesario saber cuál es la cantidad de observaciones que deberían obtenerse para obtener una estimación con cierta confiabilidad o precisión. Para su cálculo es necesario tener en cuenta:

- La precisión deseada en la estimación del parámetro desconocido.
- El nivel de confianza que tendrá la muestra a extraer, o también, dicho de otra manera, la probabilidad de error que se está dispuesto a asumir.
- Puede ser conveniente saber algún otro parámetro poblacional, como puede ser el desvío estándar o alguna proporción previa.
- El cálculo depende de la estrategia de muestreo utilizada. En primera instancia nos referimos al cálculo según un muestreo aleatorio simple.

### 6.1. Tamaño muestral para estimar una media

Supongamos que deseamos tener una imprecisión $I$ en la estimación de la media con un nivel de confianza $1-\alpha$ y deseamos encontrar $n$. En este caso la imprecisión corresponde a:

$$I = z_{\alpha/2}\frac{\sigma}{\sqrt{n}}$$

Despejando $n$ resulta:

$$n = \frac{(z_{\alpha/2})^2 \cdot \sigma^2}{I^2}$$

**Ejemplo**: Calcular el tamaño muestral si se desea estimar la edad promedio en cierta población, mediante un muestreo aleatorio simple, con una imprecisión de 1 año y una confianza de 95%, sabiendo que el desvío poblacional es de 2 años.

**Resolución**: Tengo 95% de confianza, entonces $\alpha=0.05$ y $Z_{0.025}=1.96$. $\sigma=2$ años. Imprecisión $I=1$ año.

$$n = \frac{(1.96)^2\cdot2^2}{1^2} = 16$$

### 6.2 Tamaño muestral para estimar una proporción

Suponemos que aceptamos tener una imprecisión $I$ en la estimación, con un nivel de confianza dado $(1-\alpha)\%$, y deseamos encontrar $n$. En este caso la imprecisión se calcula:

$$I = Z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Despejando $n$ resulta:

$$n = \frac{(z_{\alpha/2})^2\cdot\hat{p}(1-\hat{p})}{I^2}$$

Vemos que necesitamos conocer $\hat{p}$, que corresponde a una estimación previa sobre la proporción buscada, que puede haber surgido, por ejemplo, de alguna investigación anterior de esa proporción sobre la misma población.

En el caso de no tener ninguna estimación previa, se considera el valor del producto $p(1-p)$ que daría el mayor número muestral. Esto se da cuando $p(1-p)$ es máximo, o sea cuando $p=0.5$. En ese caso la fórmula se simplifica a:

$$n = \frac{(z_{\alpha/2})^2}{4I^2}$$

**Ejemplo**: Calcular el tamaño muestral si se desea estimar la proporción de ancianos en cierta población, mediante un muestreo aleatorio simple, con una imprecisión de 0.03 y una confianza de 95%. Calcularlo:

1) Sabiendo que en estudios anteriores esta proporción fue de 0.40.
2) Sin conocer ningún estudio anterior.

**Resolución**: Con 95% de confianza, entonces $\alpha=0.05$ y $Z_{0.025}=1.96$. Imprecisión $I=0.03$.

**1)**

$$n = \frac{(1.96)^2\cdot(0.4)(0.6)}{(0.03)^2} = 1025$$

$n=1025$ individuos.

**2)** Se asume $p=0.5$:

$$n = \frac{(1.96)^2}{4\cdot(0.03)^2} = 1068$$

## Bibliografía

- Pagano M, Gauvreau K. Principles of biostatistics. Second Ed. Belmont, California: Duxbury Press; 2000.
- Ketzoian C y cols. Estadística Médica. Conceptos y aplicaciones el inicio de la formación médica. Oficina del Libro: Montevideo, 2004.
- Daniel. Biostatistics. A foundation for analysis in health sciences. 6ed. John Wiley & Sons.

## Anexo

*(El documento original incluye en anexo la tabla de la distribución t de Student.)*
