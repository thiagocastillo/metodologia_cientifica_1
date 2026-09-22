> Fuente: `5.0 Contraste de Hipotesis I.pdf`

# Contraste de Hipótesis I

*Material de apoyo al Ciclo de Metodología I — Métodos Cuantitativos. Ing. Rafael Alonso, Prof. Enrique Barrios.*

## 1. Introducción

En general los estudios recogen datos para responder preguntas específicas del tipo i) ¿los obreros de cierta industria tienen la función pulmonar reducida frente a un grupo control? ii) ¿es el nuevo tratamiento beneficioso respecto al tratamiento usual para aquellos pacientes enfermos? iii) ¿es más frecuente la enfermedad en aquellos individuos expuestos a cierto factor de riesgo que en aquellos no expuestos?

Tales cuestiones pueden ser respondidas estableciendo hipótesis y usando los datos para probar dichas hipótesis.

El propósito de las pruebas de hipótesis es ayudar al médico o investigador a tomar una decisión con respecto a una población a partir de valores tomados de una muestra de ésta. Se basa en el enunciado de una hipótesis o proposición acerca de una o más poblaciones. En los casos que veremos, dichas hipótesis se refieren a parámetros poblacionales (y las llamamos hipótesis estadísticas).

Las hipótesis estadísticas, que son las que usaremos, surgen en general a partir de hipótesis de investigación que son la motivación del investigador para responder a esas preguntas específicas:

$$\text{hipótesis de investigación} \longrightarrow \text{hipótesis estadísticas expresadas respecto a parámetros}$$

Analizando las conjeturas y suposiciones planteadas por el investigador, se llega al planteo formal de hipótesis de tipo estadístico, que pueden ser contrastadas a través de test de hipótesis, también llamados test de significación estadística.

Este proceso implica el planteo de una hipótesis que se desea rechazar y que llamamos **hipótesis nula**, y otra que deseamos comprobar estadísticamente, que llamamos **hipótesis alternativa**.

En el test de hipótesis se pone a prueba la hipótesis nula y se concluye rechazándola o no.

La aplicación de las pruebas de hipótesis que veremos dependerá de qué es lo que interesa comprobar, de las características de las variables, y de la información disponible.

Como el parámetro poblacional sobre el cual se plantean las hipótesis es desconocido, nunca sabremos con certeza si estamos tomando la decisión correcta, pero podemos calcular la probabilidad de equivocarnos.

Así como en la estimación determinamos el nivel de confianza, en el contraste de hipótesis deberemos determinar la probabilidad que estamos dispuestos a permitir para el rechazo de una hipótesis de manera errónea.

En general el proceso de prueba de hipótesis lleva varios pasos, a saber:

1. Planteo de las hipótesis.
2. Definición del estadístico de prueba y su distribución.
3. Definición de la región de rechazo de la hipótesis nula.
4. Cálculo del estadístico de prueba para la muestra obtenida.
5. Decisión estadística en cuanto al rechazo o no de la hipótesis nula.
6. Conclusión.

*(El esquema del original resume el proceso: partiendo de la hipótesis de investigación y la identificación de variables de interés, se llega a 1. las hipótesis estadísticas sobre los parámetros, 2. la definición del estadístico de prueba y su distribución, 3. la definición de la región de rechazo de la hipótesis nula, 4. el cálculo del estadístico de prueba, 5. la decisión estadística en cuanto al rechazo o no de la hipótesis nula, y 6. la conclusión.)*

### Ejemplo 1

Supóngase la siguiente situación: considerando el estudio "Prevalencia de anemia en niños de 6 a 24 meses de edad de tres centros de salud de la ciudad de La Paz", del cual tomamos el siguiente extracto:

Se aprecia que la anemia promedio para la muestra de 55 niños de Centro Materno Infantil Bella Vista es tal que la Hb (hemoglobina) promedio es de 11.8 con una desviación estándar de 1.6. Si se asume que los 55 niños son una muestra aleatoria del total de niños de ese barrio, se infiere sobre los resultados para todos los niños de ese barrio.

A partir de esa muestra de 55 niños, ¿se puede decir que en promedio los niños de ese barrio tienen hemoglobina inferior a la de la población general (13 g/dl)?

En estas situaciones se puede concluir sobre la población a partir de los datos de la muestra. Ya se vio cómo hacerlo mediante un intervalo de confianza; en este caso se postulará una hipótesis. Como se sabe que la media muestral es un estimador de la media poblacional, se puede postular como hipótesis que la media poblacional de Hb para los niños de Bella Vista es:

$$H_0)\ \mu = \mu_0 = 13\text{g/dl}$$

Esta hipótesis es la que llamamos hipótesis nula. Por otro lado, la hipótesis que se desea probar, que es:

$$H_a)\ \mu < 13\text{g/dl}$$

corresponde a la hipótesis alternativa.

Asumiendo que la distribución de Hb es Normal (gaussiana) en la población de todo el barrio, se puede graficar la situación (Figura 1.1), en donde la hipótesis nula indica que la media poblacional es 13 y la alternativa sugiere que la media poblacional es otra cualquiera menor.

En la muestra de $n=55$ del Barrio Bella Vista se obtuvo una media de 11.8 g/dl, que puede provenir de una distribución (correspondiente a la totalidad del Barrio Bella Vista) con una media $\mu=13$g/dl, similar a la población general, o de otra distribución con una media menor, que estaría indicando que ese barrio tiene niveles inferiores de hemoglobina que el resto de la población.

A partir del estadístico calculado en la muestra (que correspondería a la evidencia estadística proporcionada por la muestra) se podrá decidir por rechazar la hipótesis nula o no.

Para poder concluir se volverá a considerar la distribución de medias muestrales, ya que la media muestral será usada para calcular el estadístico y tomar la decisión.

A partir de la distribución de medias muestrales, se puede determinar cuál sería el valor de media muestral "mínimo aceptable" para que el promedio obtenido provenga de una población de media 13g/dl: si se obtienen valores menores a ese "mínimo aceptable" se considerará que no es compatible con la hipótesis de que la muestra proviene de una población de media 13.

## 2. Tipos de errores

Como hemos dicho anteriormente, se cuenta con 2 hipótesis:

**Hipótesis nula**: Es la hipótesis que se pretende rechazar. Es la hipótesis de la no diferencia o no efecto. Usualmente es llamada $H_0$. La calificación "nula" corresponde a la intención de rechazarla o anularla.

**Hipótesis alternativa**: Es la hipótesis que se acepta en caso de rechazar la hipótesis nula. En general corresponde a alguna característica del valor del parámetro, y en caso de ser aceptada, brinda un resultado no conocido antes de hacer la prueba. Usualmente es llamada $H_a$ o $H_1$.

Con ambas hipótesis se incluyen todas las situaciones posibles; es seguro que alguna de las afirmaciones se cumple.

Pero las hipótesis son suposiciones sobre la realidad, que al contrastarlas con la misma pueden dar lugar a diferentes situaciones, a saber:

| Decisión | $H_0$ cierta | $H_0$ falsa |
| --- | --- | --- |
| No se rechaza $H_0$ | Decisión correcta | Error tipo II (prob $\beta$) |
| Se rechaza $H_0$ | Error tipo I (prob $\alpha$) | Decisión correcta |

Donde se puede identificar las probabilidades de cometer los errores de tipo I y II.

### Error de Tipo I

El error de tipo I corresponde a rechazar la hipótesis nula cuando ésta es verdadera. La probabilidad de cometer este tipo de error la llamamos $\alpha$ (alfa) y se puede escribir como:

$$\alpha = \text{Probabilidad de cometer un error de tipo I} = Prob(\text{rechazar } H_0 \text{ dado que } H_0 \text{ cierta})$$

A la probabilidad de error de tipo I, llamada $\alpha$, también se le llama **nivel de significación**. Este nivel de significación se debe definir previamente a la realización del test y va a permitir decidir sobre las hipótesis planteadas.

Haciendo una analogía con la situación que se da con las pruebas diagnósticas, se podría ver como el equivalente a la probabilidad de un "falso positivo", en el sentido de rechazar la hipótesis nula de no enfermedad y aceptar la alternativa de que el individuo está enfermo, en un individuo sano. Corresponde al error de detectar equivocadamente una diferencia inexistente.

Si se realizaran pruebas de hipótesis de manera repetida e independiente, estableciendo en cada una de ellas un nivel de significación de 0.05, se esperaría rechazar erróneamente la hipótesis nula en el 5% de los test.

### Error de tipo II

El otro tipo de error posible es el error de tipo II, que corresponde a la probabilidad de no rechazar la hipótesis nula, siendo que ésta es falsa (haciendo la analogía con las pruebas diagnósticas, sería el equivalente a la probabilidad de un "falso negativo"), y se puede escribir como:

$$\beta = \text{Probabilidad de cometer un error de tipo II} = Prob(\text{No rechazar } H_0 \text{ dado que } H_0 \text{ falsa})$$

Corresponde al error de no detectar una diferencia existente. Este tipo de error en general se controla mediante la elección de un buen estadístico y mediante el tamaño de muestra elegido.

Como la media muestral será usada para concluir, corresponde usar la distribución de medias muestrales para concluir y para determinar los distintos tipos de errores. En la figura del original se puede apreciar que la probabilidad de error de tipo I (alfa) corresponde al área bajo la curva de la distribución de $H_0$ a partir de un cierto valor que se llama **valor crítico**, que se explicará más adelante. Por otro lado, la probabilidad de error de tipo II (beta) corresponde al área bajo la curva de la hipótesis alternativa desde el valor crítico hacia valores mayores (en valor absoluto).

Como se puede apreciar, al desplazar el valor crítico hacia un lado u otro, al crecer alfa disminuye beta y viceversa.

### Potencia del Test

Por otro lado, tenemos la probabilidad de rechazar la hipótesis nula correctamente (rechazar $H_0$ siendo $H_0$ falsa). Corresponde a detectar una diferencia existente. Esta probabilidad vale $1-\beta$ y se llama **poder o potencia del test**.

### Ejemplo 2

La Hb promedio para la muestra de 55 niños de Centro Materno Infantil Bella Vista es de 11.8g/dl con una desviación estándar de 1.6g/dl. Se asume que los 55 niños son una muestra aleatoria del total de niños de ese barrio, y que la distribución de la hemoglobina en la población es normal con desvío estándar poblacional de 1.6 g/dl.

¿Se puede decir que en promedio los niños de ese barrio tienen hemoglobinemia inferior a la de la población general (13 g/dl), a partir de esa muestra de 55 niños?

Como se puede apreciar, se extrajo una única muestra de la población de niños de Bella Vista y, por otro lado, se cuenta con un valor de referencia correspondiente al promedio en la población general, que sería el llamado "valor teórico".

Se presentan en general dos situaciones que consideraremos separadamente, similares a la situación presentada con los intervalos de confianza:

a) Cuando se conoce la varianza en la población.

b) Cuando no se conoce la varianza en la población.

Ambas situaciones se verán separadamente.

## 3.1 Contraste de Hipótesis para la media y un valor teórico (Varianza poblacional conocida)

Se ejemplifican algunos conceptos con la comparación de la media poblacional contra un valor teórico. El parámetro de interés es la media poblacional $\mu$. Se considera el caso en que se contrasta dicha media poblacional con un valor dado (valor teórico). En todos los casos que se verán, se asume que la distribución de la variable de interés es normal con media $\mu$ y desvío $\sigma$.

### 3.1.1 Planteo de las hipótesis

Sabemos que el valor de la media para los niños de la población general es 13g/dl. La pregunta a resolver corresponde a poner a prueba si la hemoglobina puede ser un valor de 13 o superior para los niños de Bella Vista.

Se debe convertir este enunciado en un enunciado que involucre los parámetros de una distribución. Se asume que la distribución de Hb es gaussiana normal, por lo que queda definida por la media y el desvío estándar.

La variable de interés (Hb) es continua y se desea saber si es menor a un "valor teórico". El parámetro poblacional de interés es la media poblacional y el estimador es la media muestral.

Al valor teórico se lo llama $\mu_0$ y las hipótesis que corresponde plantear son:

$$H_0)\ \mu = \mu_0 \text{ o } \mu \geq \mu_0$$
$$H_a)\ \mu < \mu_0$$

Usando los datos del problema resulta:

$$H_0)\ \mu=13 \text{ ó } \mu\geq13$$
$$H_a)\ \mu<13$$

### 3.1.2 Definición del estadístico de prueba y su distribución

Las hipótesis planteadas son:

$$H_0)\ \mu=13 \qquad H_a)\ \mu<13$$

En donde la hipótesis nula establece que la media poblacional de valores de Hb es de 13, y la hipótesis alternativa es que es otro valor cualquiera menor a 13. Este tipo de desigualdad, en el que se espera probar que la media es menor que cierto valor, se conoce como **contraste unilateral con cola a la izquierda**.

El test de hipótesis consiste en un procedimiento que permite tomar la decisión entre ambas. Como no se puede estar seguro si la decisión fue correcta o no, se debe establecer un valor de corte a partir del cual decidir rechazar o no la hipótesis nula. Este valor de corte se establece eligiendo el nivel de significación, que usualmente es de 0.05, aunque puede ser 0.10 o 0.01.

En términos no formales, el contraste consiste en evaluar un estadístico en el supuesto de que la hipótesis nula es cierta, y decidir qué tan compatible es el resultado obtenido con la hipótesis nula; en el caso de no serlo, rechazar la hipótesis nula. Si el valor obtenido para el estadístico resulta muy poco probable en el caso de que la hipótesis nula sea cierta, entonces se debe rechazar esta hipótesis y aceptar la hipótesis alternativa.

Para poder hacer el test se debe definir un estadístico de prueba, que permite luego tomar la decisión. Como se conoce el desvío estándar poblacional, dicho estadístico resulta:

$$z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}$$

siendo $z$ la variable normal tipificada. En dicho estadístico aparece el parámetro poblacional $\mu_0$, o sea que estamos considerando una distribución normal con media $\mu_0$ y desvío $\sigma$.

El estadístico en este caso consiste en estandarizar (o tipificar) dicha distribución, obteniendo la normal tipificada (media 0 y desvío 1). El estadístico toma un valor en cada muestra particular y se debe elegir un criterio para decidir a partir del valor hallado.

### 3.1.3 Definición de la región de rechazo de la hipótesis nula

**Zona de rechazo de la hipótesis nula**

Para definir la zona de valores del estadístico que permiten rechazar la hipótesis nula, utilizaremos el nivel de significación $\alpha$. Esta zona o región es llamada también región crítica. En el caso de un test unilateral, depende de la dirección de la desigualdad considerada. Para el ejemplo consideramos $\alpha=0.05$, y como la hipótesis alternativa considera $\mu<\mu_0$, la zona de rechazo se encuentra del lado izquierdo de la distribución.

Corresponde a la región de los valores de $z$ tal que $P(z<z_c)=0.05$. A dicho valor de $z$ se le llama **valor crítico**.

Si buscamos en la tabla de la distribución normal tipificada, encontramos que el valor que deja un área de 0.05 a la izquierda es $z=-1.65$.

Zona de rechazo (caso unilateral a la izquierda): $Z_c=-1.65$

### 3.1.4 Cálculo del estadístico de prueba para la muestra obtenida

A continuación evaluamos el estadístico con:

$$\bar{x}=11.8 \qquad \sigma=1.6 \qquad \mu_0=13 \qquad n=55 \qquad \text{Nivel de significación}=5\%$$

$$z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}} = \frac{11.8-13}{1.6/\sqrt{55}} = \frac{-1.2}{0.216} = -5.56$$

Por lo que $z_{obs}=-5.56$.

### 3.1.5 Decisión estadística en cuanto al rechazo o no de la hipótesis nula

El valor de $z$ hallado es inferior al valor crítico de $-1.65$, por lo tanto podemos rechazar la hipótesis nula y aceptar la hipótesis alternativa.

Se concluye que tenemos evidencia para probar que la media poblacional de distribución de hemoglobina de los niños de Bella Vista es diferente a la de la población de niños de la población general, a un nivel de significación de 0.05.

La probabilidad de obtener un valor del estadístico de $-5.56$ o inferior es menor a 0.05.

Estamos limitando la probabilidad de cometer un error de tipo I a 0.05 (o 5%). En otros términos, podemos decir que si se repitiera este test 100 veces, se esperaría tener a lo sumo sólo 5 rechazos erróneos de la hipótesis nula. Se debe notar que si cambiamos el nivel de significación puede cambiar la decisión tomada.

La probabilidad de rechazar la hipótesis nula, si ésta fuera cierta, antes de hacer el test, es a lo sumo de 0.05.

### 3.1.6 Valor-p

Corresponde a la probabilidad de encontrar un valor para el estadístico como el observado en la muestra, o más extremo, bajo el supuesto de que la hipótesis nula es cierta.

En este caso corresponde a la $P(z<z_{obs})$, en donde $z_{obs}=-5.56$ es el valor hallado para esta muestra particular. Esta probabilidad es el valor-p.

El valor-p para este ejemplo es menor a 0.0002, y se puede hallar buscando en la tabla de la distribución normal tipificada el valor más cercano a $-5.56$ (en este caso dicho valor es el primero de la tabla, $-3.49$).

Por lo tanto, valor-p$<0.0002$. Este corresponde al de una distribución con media $\mu_0$ indicada en la hipótesis nula, o sea que estamos calculando la probabilidad de obtener un valor para el estadístico igual o más extremo al que obtuvimos, suponiendo que la hipótesis nula es cierta.

### 3.1.7 Prueba unilateral con cola a la derecha

Se consideró en el ejemplo anterior la prueba unilateral con $\mu<\mu_0$ porque así lo sugiere el problema, pero en otra situación también puede plantearse la desigualdad en el otro sentido, y las hipótesis serían:

$$H_0)\ \mu=\mu_0\ (\text{ó}\ \mu\leq\mu_0) \qquad H_a)\ \mu>\mu_0$$

Y la zona de rechazo $z>z_c$.

El procedimiento es similar al caso anterior.

### 3.1.8 Contraste bilateral o de dos colas

En el caso de que no se pueda establecer a priori una dirección para la diferencia, se usa un contraste de tipo bilateral. Las hipótesis que se plantean contrastan la igualdad versus la desigualdad con el valor teórico:

$$H_0)\ \mu=\mu_0 \qquad H_a)\ \mu\neq\mu_0$$

Aplicando estas hipótesis al ejemplo y colocando los valores, resulta:

$$H_0)\ \mu=13 \qquad H_a)\ \mu\neq13$$

Como el desvío poblacional es conocido, el estadístico es el mismo y el valor observado no cambia porque la muestra es la misma:

$$z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}} = \frac{11.8-13}{1.6/\sqrt{55}} = \frac{-1.2}{0.216} = -5.56$$

Entonces $Z_{obs}=-5.56$.

Se sigue considerando el nivel de significación de 0.05. La zona de rechazo cambia y corresponde a los valores de $z$ tal que $P(z>|z_c|)=0.05$. El valor absoluto indica que $P(z>|z_c|)=P(z<-z_c)+P(z>z_c)=0.05$, o sea que hay dos valores críticos, iguales en valor absoluto y de signo opuesto; la probabilidad se divide en partes iguales de tal manera que $P(z<-z_c)=0.025$ y $P(z>z_c)=0.025$. Si buscamos en la tabla de la distribución normal tipificada, vemos que dicho valor corresponde a 1.96.

Rechazaremos la hipótesis nula si $z<-1.96$ o $z>1.96$. En el ejemplo, $-5.56<-1.96$, entonces rechazamos la hipótesis nula considerando un contraste de 2 colas con un nivel de significación de 0.05 o 5%. Concluimos que la hemoglobinemia difiere de 13 g/dl.

Al igual que en el caso anterior, podemos encontrar el valor-p para este contraste: la probabilidad de obtener valores más extremos que el hallado en esta muestra, o sea $P(|z|>z_{obs})$. En este caso el valor-p es $P(|z|>5.56)$. Como estamos considerando los valores de $z$ tanto positivos como negativos, entonces:

$$P(|z|>5.56) = P(z>5.56)+P(z<-5.56) < 0.0002+0.0002 = 0.0004$$

En este ejemplo, podemos asegurar que el valor-p es menor a 0.0004.

### 3.1.9 Potencia

Si $\beta$ es la probabilidad de error de tipo II, $1-\beta$ es la potencia del test. La potencia es la probabilidad de rechazar la hipótesis $H_0$ cuando $H_0$ es falsa. La potencia puede ser interpretada como la verosimilitud de que un estudio detecte una diferencia cuando esta diferencia existe realmente. Al igual que para $\beta$, para poder calcular la potencia debe determinarse un valor para la hipótesis alternativa $\mu_1$.

¿Cuál sería el valor de beta asociado al test unilateral de la hipótesis nula ($H_0$) $\mu\geq13$, a partir de una muestra de tamaño 55?

Primero se debe determinar el valor de la media muestral a partir del cual se rechazaría la hipótesis nula con una prueba unilateral usando un nivel de significación de 0.05:

$$z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}}$$

$$-1.64 = \frac{\bar{x}_{crit}-13}{1.6/\sqrt{55}}$$

$$\bar{x}_{crit} = 13-\frac{1.64\times1.6}{\sqrt{55}} = 13-0.35 = 12.65$$

Si en una muestra de tamaño 55 se obtiene una media menor a 12.65g/dl de Hb, se rechaza la hipótesis $\mu\geq13$. En la hipótesis nula, la probabilidad de valores menores a 12.65 es de 0.05.

Para poder calcular la potencia se debe determinar una hipótesis alternativa. Supongo la hipótesis alternativa $\mu_1=12$g/dl. Recordando que el beta es la probabilidad de no rechazar la hipótesis nula siendo ésta falsa, se puede calcular beta como la probabilidad de obtener una media muestral de 12.65 o mayor, dado que la media verdadera de la población es 12 g/dl:

$$\beta = P(\bar{x}>12.65;\ \mu=12)$$

$$z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}} = \frac{12.65-12}{1.6/\sqrt{55}} = \frac{0.65}{0.216} = 3.0$$

$$\beta = P(\bar{x}>12.65;\ \mu=12) = 0.01$$

Entonces la probabilidad de fallar en rechazar ($H_0$) $\mu\geq13$, cuando la verdadera media poblacional es $\mu_1=12$g/dl, es 0.01, y la potencia del test es de 0.99.

Mientras que alfa, la probabilidad de cometer un error de tipo 1, está determinada cuando $H_0$ se considera verdadera, el beta se encuentra considerando que la $H_0$ es falsa y que la verdadera es la $H_1$. Como existen infinitos valores posibles para $H_1$, el error de tipo 2 y la potencia se calculan para cada valor específico de la hipótesis alternativa $\mu_1$, como en el ejemplo anterior, en el cual $\mu_1=12$.

Se puede concluir en este caso que para un test con un nivel de significación de 0.05, usando una muestra de tamaño 55, hay un 99% de probabilidad de rechazar la hipótesis ($H_0$) $\mu\geq13$, cuando la $H_0$ es falsa y la verdadera media poblacional es $\mu_1=12$.

Este valor se puede calcular para diferentes hipótesis alternativas. A medida que los valores de la hipótesis alternativa se alejan de 13g/dl, la potencia crece.

La situación encontrada con las probabilidades alfa y beta es similar a lo que ocurre en los test diagnósticos con la sensibilidad y la especificidad: cuando uno aumenta, el otro coeficiente disminuye.

La única manera de lograr disminuir alfa y beta simultáneamente es reducir el solapamiento entre las distribuciones de medias muestrales de la hipótesis nula y de la hipótesis alternativa. Esto se puede lograr aumentando el tamaño de la muestra, de tal manera que el error estándar sea menor, las curvas se vuelvan más angostas y se solapen menos. Otra posibilidad es elegir otro test más "potente".

## 3.2 Contraste de Hipótesis para la media y un valor teórico (Varianza poblacional desconocida)

En el caso de que no se conozca la varianza poblacional $\sigma^2$, la mejor estimación disponible es la varianza $s^2$ de la muestra. En esa situación el estadístico a utilizar es el estadístico $t$, que sigue una distribución T de Student.

### Ejemplo 3 (ref. Pagano y Gauvreau)

Se obtiene una muestra de 10 observaciones de 10 niños que reciben antiácidos que contienen aluminio. Estos antiácidos se usan a menudo para tratar desórdenes de tipo digestivo. La distribución de niveles de aluminio en plasma se supone normal, pero con media $\mu$ y desvío $\sigma$ desconocidos.

En la muestra de los diez niños se obtuvo $\bar{x}=37.2\mu g/l$ y la desviación estándar muestral fue $s=7.13\mu g/l$. Interesa saber si los niños tratados con antiácidos tienen un nivel de aluminio mayor a 4.13microgr/l, que corresponde a los niños que no reciben antiácidos. Se considera como nivel de significación un 5%.

Datos:

$$\mu_0=4.13 \qquad n=10 \qquad \bar{x}=37.2 \qquad s=7.13$$

Hipótesis:

$$H_0)\ \mu=4.13 \qquad H_a)\ \mu>4.13$$

Como no se conoce el desvío poblacional, el estadístico a usar es:

$$t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}$$

Se puede apreciar que en el numerador se encuentra la media de la muestra y en el denominador el desvío de la muestra $s$, que puede cambiar según la muestra obtenida; en este caso tanto el numerador como el denominador dependen de las observaciones de la muestra obtenida, a diferencia del caso de varianza poblacional conocida, en el cual sólo el numerador podía cambiar según la muestra.

**Zona de rechazo de la hipótesis nula**

Es un test unilateral o de una cola; la zona de rechazo en este caso se encuentra en el extremo derecho de la distribución $t$, correspondiente a los valores de $t$ tal que $P(t>t_c)=0.05$. El valor crítico que delimita la zona de rechazo es aquel que es superado por el 5% de la distribución. Buscando en la tabla de distribución $t$, considerando 5% y 9 grados de libertad, $t_c=1.833$.

**Evaluación del estadístico**

$$t_{obs} = \frac{\bar{x}-\mu_0}{s/\sqrt{n}} = \frac{37.2-4.13}{7.13/\sqrt{10}} = 14.66$$

**Decisión estadística en cuanto al rechazo o no de la hipótesis nula**

El valor de $t$ hallado se encuentra en la zona de rechazo, por lo tanto se rechaza la hipótesis nula, y se puede afirmar que el nivel de aluminio en los niños a los que se les administra antiácido es mayor a 4.13microgr/l, a un nivel de significación de 5%.

**Valor-p**

El valor-p es la $P(t>t_{obs})$, en donde $t_{obs}$ es el valor observado para esta muestra, $t_{obs}=14.66$. Esta probabilidad no se puede calcular exactamente con la tabla que disponemos, pero se puede obtener una cota superior usando el valor más próximo a 14.66 que se encuentra en la tabla.

El valor más próximo es 4.78, lo cual resulta en que valor-p$<0.0005$, por lo tanto es menor al 5% que consideramos.

Si la hipótesis hubiera sido bilateral, el procedimiento sería análogo, y se diría que el valor-p$<0.0010$, teniendo la precaución con los signos en los valores críticos.

### Ejemplo 4

En cierto hospital, un grupo de médicos realizó un estudio sobre anemias. Se estudió un grupo de 30 pacientes que consultaron por dicha patología. Con este fin se diseñó una ficha de datos por medio de la cual se recogió la información deseada de cada paciente. Algunas de las variables analizadas fueron: edad, sexo, clasificación morfológica de la anemia, hemoglobinemia (concentración de hemoglobina en sangre) y número de consultas previas a la actual por causa de dicha afección. Nos interesa saber si podemos afirmar que la población atendida por el hospital presenta una anemia promedialmente distinta de 11gr/dl, asumiendo que la distribución de hemoglobinemia en la población considerada se distribuye en forma normal. Los resultados obtenidos para la muestra de 30 pacientes para la media muestral y para el desvío muestral son 10.5 mg/dl y 1.1mg/dl respectivamente.

Datos:

$$\mu_0=11.0 \qquad n=30 \qquad \bar{x}=10.5 \qquad s=1.10$$

Hipótesis:

$$H_0)\ \mu=11.0 \qquad H_a)\ \mu\neq11.0$$

**Zona de rechazo de la hipótesis nula**

Es un test bilateral o de dos colas; la zona de rechazo se encuentra en ambos extremos de la distribución $t$, correspondiente a los valores de $t$ tal que $P(|t|>t_c)=0.05$, en el caso de usar un nivel de significación de 5%. El valor crítico que delimita la zona de rechazo es aquel que considera el 2.5% de la distribución, tanto del lado derecho como del izquierdo. Buscándolo en la tabla de distribución $t$, considerando 2.5% y 29 grados de libertad, resulta $t_c=2.05$ y $-t_c=-2.05$.

Se evalúa el estadístico:

$$t_{obs} = \frac{\bar{x}-\mu_0}{s/\sqrt{n}} = \frac{10.5-11.0}{1.10/\sqrt{30}} = 2.48$$

Como $2.48>2.05$, se rechaza la hipótesis de igualdad, por lo tanto se concluye que la hemoglobinemia poblacional promedio difiere de 11mg/dl.

**Valor-p**

El valor-p corresponde a $P(|t|>2.48) = P(t>2.48)+P(t<-2.48)$. Con la tabla de la distribución $t$ se encuentra que $2.46<2.48<2.76$ para 29 grados de libertad, entonces: $P(t>2.76)<P(t>2.48)<P(t>2.46)$, y por lo tanto $0.005<P(t>2.48)<0.01$. Algo similar ocurre con la $P(t<-2.48)$. Se concluye que $0.01<\text{valor-p}<0.02$.

## 4. Cálculo de tamaño muestral

Considere la situación siguiente, en la cual se tiene una hipótesis nula y una hipótesis alternativa específica.

El valor crítico del estadístico para rechazar la hipótesis nula a un nivel de 0.05 en un contraste unilateral a la izquierda es $z_\alpha=-1.64$.

Despejando de:

$$z_\alpha = \frac{\bar{x}_{crit}-\mu_0}{\sigma/\sqrt{n}}$$

se puede obtener:

$$\bar{x}_{crit} = \mu_0+\frac{z_\alpha\times\sigma}{\sqrt{n}}$$

Por otro lado, usando la hipótesis alternativa, a partir de la definición de beta se puede encontrar el mismo valor crítico para la media muestral usando la hipótesis alternativa:

$$z_\beta = \frac{\bar{x}_{crit}-\mu_1}{\sigma/\sqrt{n}}$$

$$\bar{x}_{crit} = \mu_1+\frac{z_\beta\times\sigma}{\sqrt{n}}$$

Si se quiere una potencia de 0.8, a partir de la tabla de distribución normal se obtiene $z_\beta=0.84$.

Igualando ambos valores:

$$\mu_1+\frac{z_\beta\times\sigma}{\sqrt{n}} = \mu_0+\frac{z_\alpha\times\sigma}{\sqrt{n}}$$

Despejando el $n$:

$$\frac{(z_\beta-z_\alpha)\times\sigma}{\sqrt{n}} = \mu_0-\mu_1$$

$$\sqrt{n} = \frac{(z_\beta-z_\alpha)\times\sigma}{(\mu_0-\mu_1)}$$

$$n = \frac{(z_\beta-z_\alpha)^2\times\sigma^2}{(\mu_0-\mu_1)^2}$$

Donde, por lo general, los coeficientes $Z$ tienen signos diferentes. Como ejemplo, para $z_\beta=0.84$ y $z_\alpha=-1.64$, resulta:

$$n = \frac{(0.84-(-1.64))^2\times\sigma^2}{(\mu_0-\mu_1)^2}$$

Por lo que la fórmula se puede enunciar de forma general con los valores absolutos:

$$n = \frac{(|z_\beta|+|z_\alpha|)^2\times\sigma^2}{(\mu_0-\mu_1)^2}$$

En donde la diferencia entre las medias poblacionales es la llamada **"diferencia a detectar"**.

**Ejemplo** (ref. Pagano y Gauvreau)

Calcular el tamaño necesario para una muestra, sabiendo que el desvío poblacional vale 46g/dl, y se desea tener en cuenta un error de tipo 1 de 0.01, potencia de 0.95, y detectar una diferencia de 31g/dl en un test unilateral.

De la tabla de la distribución normal se obtiene $|z_\alpha|=2.32$ y $|z_\beta|=1.64$.

$$n = \frac{(|1.64|+|2.32|)^2\times46^2}{31^2} = 34.6 \approx 35$$

Se necesita una muestra de 35 individuos.

## Resumen

En las secciones anteriores hemos introducido conceptos básicos en los tests de hipótesis, ejemplificándolos luego en el contraste para la media poblacional.

Algunos conceptos generales que se seguirán utilizando en los siguientes tests que veremos: en los test de hipótesis se contrasta la hipótesis nula que nos interesa rechazar, con la hipótesis alternativa planteada. Previamente a la realización del test se debe decidir el nivel de significación $\alpha$, que permite definir la zona crítica o región de rechazo de la hipótesis nula. Este nivel de significación también puede verse como la probabilidad máxima de error de tipo I que estamos dispuestos a admitir. Si el valor del estadístico calculado pertenece a la zona de rechazo, se debe rechazar la hipótesis nula. En el caso de rechazar la hipótesis nula, la probabilidad de error está limitada por $\alpha$, que es conocida y determinada por el investigador.

En caso de no rechazar la hipótesis nula, la probabilidad de error está dada por $\beta$, que es desconocida. El valor-p consiste en la probabilidad de obtener un valor mayor o igual (en valor absoluto) al que obtuvimos para el estadístico, en el supuesto de que la hipótesis nula es cierta.

Si el valor-p obtenido es menor al nivel $\alpha$ fijado previamente, se debe rechazar la hipótesis nula.

El hecho de no rechazar la hipótesis nula no implica aceptarla como cierta, sino sólo aceptar que no encontramos hasta el momento evidencia suficiente para rechazarla. Por ejemplo, puede ocurrir que si tomáramos una muestra mayor, los resultados muestrales obtenidos pudieran llegar a cambiar de tal manera que el valor del estadístico estuviera en la zona de rechazo. El valor-p, a veces, se interpreta equivocadamente como la probabilidad de que la hipótesis nula sea cierta, pero ésta es una interpretación equivocada, dado que es la probabilidad de obtener un valor para el estadístico como el observado o superior, en caso de que la hipótesis nula sea cierta.

En general es difícil conocer el valor del desvío poblacional $\sigma$, pero debido a que la distribución del estadístico $t$ toma valores similares a la distribución normal para el caso de muestras grandes, se adopta como criterio que en caso de tener un tamaño muestral mayor a 30 se use el estadístico $z$ para efectuar el contraste, aproximando el desvío poblacional $\sigma$ por el desvío muestral $s$.

## 5. Bibliografía Recomendada

- Armitage P, Berry G. Estadística para la investigación biomédica. 1ª ed; Ediciones Doyma S.A.; 1992.
- Daniel W. Bioestadística. Base para el análisis de las ciencias de la salud. 3ª ed; Editorial Limusa, Grupo Noriega Editores; 1997.
- Ketzoian C y cols. Estadística Médica. Conceptos y aplicaciones el inicio de la formación médica. Oficina del Libro: Montevideo, 2004.
- Mendenhall W, Wackerly D, Scheaffer R. Estadística matemática con aplicaciones. 2ª Edición; Grupo Editorial Iberoamérica S.A.; 1994.
- Pagano M, Gauvreau K. Principles of Biostatistics. 2nd ed; Duxbury-Thomson Learning; 2000.
