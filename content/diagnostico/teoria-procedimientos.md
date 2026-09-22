> Fuente: `4. Procedimientos diagnósticos.pdf`

# Aplicaciones de la Probabilidad a los Procedimientos Diagnósticos

*Material de apoyo al Ciclo de Metodología I — Métodos Cuantitativos. Dra. Mariela Garau.*

En las fases del proceso diagnóstico intervienen la historia clínica, la exploración física y la realización de pruebas complementarias. Cuando existen varias hipótesis diagnósticas, se realizará el diagnóstico diferencial y las pruebas complementarias tratarán de aclarar las dudas existentes. Si solamente hay una sospecha diagnóstica, las pruebas complementarias tratarán de confirmarla. En este contexto, es imprescindible conocer detalladamente la exactitud de las distintas pruebas diagnósticas, es decir, su capacidad para clasificar correctamente a los pacientes en categorías o estados en relación con la enfermedad (típicamente dos: estar o no estar enfermo, respuesta positiva o negativa a la terapia, etc.).

El artículo muestra un estudio realizado para determinar la validez interna de la palidez palmo plantar para el diagnóstico de anemia en niños en Colombia. ¿Por qué se realiza este estudio? En lugares con pocos recursos, este "test" podría permitirnos detectar niños con anemia, a los que luego realizaríamos una prueba confirmatoria (hemograma). Para comprender los resultados debemos tener claros los conceptos de validez interna, sensibilidad y especificidad, que desarrollamos a continuación. Es evidente que una buena prueba diagnóstica es la que ofrece resultados positivos en enfermos y negativos en sanos. Por lo tanto, las condiciones que deben ser exigidas a un test son:

**Validez interna**: Es el grado en que un test mide lo que se supone que debe medir. ¿Con qué frecuencia el resultado del test es confirmado por procedimientos diagnósticos más complejos y rigurosos? La sensibilidad y la especificidad de un test son medidas de su validez.

**Reproductividad**: es la capacidad del test para ofrecer los mismos resultados cuando se repite su aplicación en circunstancias similares. La variabilidad biológica del hecho observado, la introducida por el propio observador y la derivada del propio test determinan su reproductividad.

**Seguridad o validez externa**: La seguridad viene determinada por el valor predictivo de un resultado positivo o negativo. ¿Con qué seguridad un test predecirá la presencia o ausencia de enfermedad? Ante un resultado positivo de un test, ¿qué probabilidad existe de que este resultado indique presencia de la enfermedad? Veremos posteriormente que esta probabilidad se verá modificada por la prevalencia de la patología en el conjunto de individuos a los que se les aplica la prueba.

A su vez, es conveniente que el test sea sencillo de aplicar, aceptado por los pacientes o la población general, que tenga los mínimos efectos adversos y que económicamente sea soportable.

## I. Validez interna: Sensibilidad y especificidad

El caso más sencillo que se nos puede plantear es el de una prueba dicotómica, que clasifica a cada paciente como sano o enfermo en función de que el resultado de la prueba sea positivo o negativo. En casos como éste, generalmente un resultado positivo se asocia con la presencia de enfermedad y un resultado negativo con la ausencia de la misma.

Cuando se estudia una muestra de pacientes, los datos obtenidos permiten clasificar a los sujetos en cuatro grupos según una tabla 2x2 (Tabla 1). En ella, se enfrenta el resultado de la prueba diagnóstica (en filas) con el estado real de los pacientes (en columnas) o, en su defecto, el resultado de la prueba de referencia o "gold standard" que vayamos a utilizar. El resultado de la prueba puede ser correcto (verdadero positivo y verdadero negativo) o incorrecto (falso positivo y falso negativo). El análisis de su validez puede obtenerse calculando los valores de sensibilidad y especificidad.

Cuando aplicamos un test a una muestra de $N$ pacientes, pueden darse 4 situaciones que se resumen en la tabla:

| | Enfermo | No enfermo | Total |
| --- | --- | --- | --- |
| **Test +** | Resultado correcto | Error | Total de resultados + |
| **Test −** | Error | Resultado correcto | Total de resultados − |
| **Total** | Total de enfermos | Total de no enfermos | N |

La **sensibilidad** ($s$) es la probabilidad de que a un individuo realmente enfermo el test le dé positivo, que podemos estimar a partir de una muestra como:

$$\text{sensibilidad} = P(\text{test}+\,|\,\text{individuo enfermo}) = \frac{N°\ \text{de enfermos con test positivo}}{N°\ \text{total de enfermos}}$$

Es la probabilidad de clasificar correctamente a un individuo enfermo. La sensibilidad es, por lo tanto, la capacidad del test para detectar la enfermedad. La probabilidad de que el test dé un resultado incorrecto en un individuo enfermo es $1-s$, conocido como $\beta$, "coeficiente falso negativo".

La **especificidad** ($e$) es la probabilidad de que a un individuo que no tiene la enfermedad se le obtenga un resultado negativo en el test:

$$\text{especificidad} = P(\text{test}-\,|\,\text{individuo no enfermo}) = \frac{N°\ \text{de no enfermos con test negativo}}{N°\ \text{total de no enfermos}}$$

Es la probabilidad de clasificar correctamente a un individuo sano. En otras palabras, se puede definir la especificidad como la capacidad para detectar a los sanos. La probabilidad de que el test dé un resultado incorrecto en un individuo sano es $1-e$, conocido como $\alpha$, "coeficiente falso positivo".

Lo ideal sería trabajar con pruebas diagnósticas de alta sensibilidad y especificidad, pero esto no siempre es posible. En general, las pruebas de screening deben ser de alta sensibilidad para poder captar a todos los enfermos. Una prueba muy sensible será especialmente adecuada en aquellos casos en los que el no diagnosticar la enfermedad puede resultar fatal para los enfermos, como ocurre con enfermedades peligrosas pero tratables, como los linfomas o la tuberculosis, o en enfermedades en las que un falso positivo no produzca serios trastornos psicológicos o económicos para el paciente (por ejemplo, la realización de mamografía en el cáncer de mama).

Por otra parte, la especificidad se refiere, como se señaló previamente, a la probabilidad de que un sujeto sano sea clasificado adecuadamente. En general, las pruebas confirmatorias del diagnóstico deben ser de alta especificidad, para evitar falsos positivos. Los tests de alta especificidad son necesarios en enfermedades graves pero sin tratamiento disponible que las haga curables, cuando exista gran interés por conocer la ausencia de enfermedad o cuando diagnosticar a un paciente de un mal que realmente no padece pueda acarrear graves consecuencias, ya sean físicas, psicológicas o económicas (por ejemplo, en el caso del SIDA).

La realización simultánea de varias pruebas complementarias se denomina **pruebas complementarias en paralelo**, y la realización de pruebas complementarias según los resultados de otras previas se denomina **pruebas complementarias en serie**. Al realizar pruebas en paralelo aumenta la probabilidad de diagnosticar a un enfermo, pero también aumenta la probabilidad de considerar como enfermo a un sano. El riesgo de la realización de pruebas en serie es no diagnosticar a algunos enfermos. En cambio, pocos sanos serán considerados como enfermos.

**Ejemplo 4.1)** Evaluación de la gammagrafía de perfusión en el diagnóstico de embolismo pulmonar (datos tomados de McNeil). Uno de los problemas de estos estudios es la definición del "gold standard". En éste, se usó la arteriografía pulmonar.

| Prueba | No enfermo | Enfermo | Total |
| --- | --- | --- | --- |
| Negativo | 2 | 0 | 2 |
| Positivo | 78 | 54 | 132 |
| **Total** | **80** | **54** | **134** |

$$Sen = 54/54 = 1 \qquad Esp = 2/80 = 0{,}02$$

Es una prueba extraordinariamente sensible (en todos los enfermos da positivo) pero no muy específica (también da positivo en muchos individuos no enfermos). Es una situación extrema de un hecho habitual.

## II. Validez externa: valores predictivos

Los conceptos de sensibilidad y especificidad permiten valorar la validez de una prueba diagnóstica. Sin embargo, carecen de utilidad en la práctica clínica. Tanto la sensibilidad como la especificidad proporcionan información acerca de la probabilidad de obtener un resultado concreto (positivo o negativo) en función de la verdadera condición del enfermo con respecto a la enfermedad. Sin embargo, cuando a un paciente se le realiza alguna prueba, el médico carece de información a priori acerca de su verdadero diagnóstico, y la pregunta se plantea en sentido contrario: ante un resultado positivo (negativo) en la prueba, ¿cuál es la probabilidad de que el paciente esté realmente enfermo (sano)? Así pues, resulta obvio que hasta el momento sólo hemos abordado el problema en una dirección. Por medio de los valores predictivos completaremos esta información.

Definimos **valor predictivo positivo (VPP)** como la probabilidad de que un individuo esté enfermo dado que el test ha resultado positivo. A partir de datos muestrales podríamos calcular el VPP:

$$VPP = P(\text{individuo}+\,|\,\text{test}+) = \frac{N°\ \text{de enfermos con test positivo}}{N°\ \text{total de resultados positivos}}$$

El **valor predictivo negativo (VPN)** es la probabilidad de que un individuo al que el test dio resultado negativo, efectivamente no esté enfermo:

$$VPN = P(\text{individuo}-\,|\,\text{test}-) = \frac{N°\ \text{de no enfermos con test negativo}}{N°\ \text{total de resultados negativos}}$$

Hemos visto cómo los valores de sensibilidad y especificidad, a pesar de definir completamente la validez de la prueba diagnóstica, presentan la desventaja de que no proporcionan información relevante a la hora de tomar una decisión clínica ante un determinado resultado de la prueba. Sin embargo, tienen la ventaja adicional de que son propiedades intrínsecas a la prueba diagnóstica, y definen su validez independientemente de cuál sea la prevalencia de la enfermedad en la población a la cual se aplica. Por el contrario, el concepto de valores predictivos, a pesar de ser de enorme utilidad a la hora de tomar decisiones clínicas y transmitir a los pacientes información sobre su diagnóstico, presenta la limitación de que dependen en gran medida de lo frecuente que sea la enfermedad a diagnosticar en la población objeto de estudio y a veces de las características de la población a la que se aplica. Por ejemplo, la palidez palmo plantar como test diagnóstico de anemia, a la que hace referencia el estudio citado, no necesariamente tendría en Uruguay el mismo valor predictivo que en Colombia: por una parte, porque la prevalencia de anemia no necesariamente es igual, y por otra parte, porque las características étnicas de la población son distintas, y el color de la piel podría afectar la sensibilidad y especificidad del test.

### Utilizando el teorema de Bayes

$$P(A_1|B) = \frac{P(B|A_1)\cdot P(A_1)}{P(B|A_1)\cdot P(A_1) + P(B|A_2)\cdot P(A_2)}$$

En el caso del VPP, tomando $A_1$="El individuo está enfermo" y $A_2$="El individuo no está enfermo", y como suceso $B$="El test dio positivo", tenemos:

$$VPP = P(\text{Individuo enfermo}\,|\,\text{test}+)$$

$$VPP = \frac{P(\text{test}+\,|\,\text{Ind enfermo})\cdot P(\text{ind enfermo})}{P(\text{test}+\,|\,\text{ind enfermo})\cdot P(\text{ind enfermo}) + P(\text{test}+\,|\,\text{ind no enfermo})\cdot P(\text{Ind no enfermo})}$$

Recordando la definición de sensibilidad y especificidad, y considerando que la probabilidad de que el individuo esté enfermo es la prevalencia de la enfermedad en la población, tenemos:

$$VPP = \frac{s\cdot\text{prevalencia}}{s\cdot\text{prevalencia} + \alpha\cdot(1-\text{prevalencia})}$$

Análogamente, el VPN es:

$$VPN = \frac{e\cdot(1-\text{prevalencia})}{e\cdot(1-\text{prevalencia}) + \beta\cdot\text{prevalencia}}$$

Cuando la prevalencia de la enfermedad es baja, un resultado negativo permitirá descartar la enfermedad con mayor seguridad, siendo así el valor predictivo negativo mayor. Por el contrario, un resultado positivo no permitirá confirmar el diagnóstico, resultando en un bajo valor predictivo positivo.

**Ejemplo 4.2)** Calcular los VPP y VPN de la gammagrafía de perfusión (del ejemplo 4.1, con $s=1$ y $e=0{,}02$) para un paciente cuya probabilidad de padecer tromboembolismo pulmonar previa a la prueba es de 0,7.

$$VPP = \frac{1\times0{,}7}{1\times0{,}7 + 0{,}98\times0{,}3} = 0{,}7$$

$$VPN = \frac{0{,}02\times0{,}3}{0{,}02\times0{,}3 + 0\times0{,}7} = 1$$

Es decir, no obtenemos ninguna información si la prueba da positivo, y sin embargo, si da negativa estamos seguros de que no tiene la enfermedad (porque la prueba tiene $S=1$).

## III. Razón de verosimilitudes

La razón de verosimilitudes, razón de probabilidad, o cociente de probabilidades permite valorar cuánto más probable es un resultado concreto (positivo o negativo) según la presencia o ausencia de enfermedad:

**Razón de verosimilitudes positiva (LR+, por *likelihood ratio* +)** o cociente de probabilidades positivo: expresa cuántas veces es más (o menos) probable que se identifique la enfermedad en individuos enfermos comparados con los no enfermos. Es la probabilidad de que los resultados de la prueba sean positivos en individuos con la enfermedad, dividida entre la probabilidad de que el resultado de la prueba sea positivo en individuos sin enfermedad. La probabilidad de obtener un resultado positivo para un paciente que está enfermo es la sensibilidad; la probabilidad de que un individuo que no está enfermo tenga un resultado positivo es el coeficiente falso positivo ($\alpha$); por lo tanto, el LR+ se calcula dividiendo sensibilidad entre alfa:

$$LR+ = \frac{P(\text{test}+\,|\,\text{individuo enfermo})}{P(\text{test}+\,|\,\text{individuo no enfermo})} = \frac{\text{sensibilidad}}{1-\text{especificidad}} = \frac{s}{\alpha}$$

**Razón de verosimilitudes negativa (LR-)**: El cociente de probabilidades negativo expresa cuánto más probable es obtener un resultado negativo entre los enfermos que entre los no enfermos. Es la probabilidad de que los resultados de la prueba sean negativos en individuos con la enfermedad, dividida entre la probabilidad de que el resultado de la prueba sea negativo en individuos sin enfermedad. La probabilidad de obtener un resultado negativo para un paciente que está enfermo es el coeficiente falso negativo ($\beta$); la probabilidad de que un individuo que no está enfermo tenga un resultado negativo es la especificidad; por lo tanto, el LR- se calcula dividiendo beta entre la especificidad:

$$LR- = \frac{P(\text{test}-\,|\,\text{individuo enfermo})}{P(\text{test}-\,|\,\text{individuo no enfermo})} = \frac{1-\text{sensibilidad}}{\text{especificidad}} = \frac{\beta}{e}$$

La razón de probabilidades ofrece la ventaja de que relaciona la sensibilidad y la especificidad de una prueba en un solo índice. Un buen test tendrá un alto LR+ y un LR- muy cercano a 0. La siguiente tabla muestra una referencia para catalogar los LR:

| Valores LR+ | Valores LR- | Capacidad |
| --- | --- | --- |
| LR+ ≥ 10 | LR- ≤ 0.1 | Suficiente |
| 5 ≤ LR+ < 10 | 0.1 ≤ LR- ≤ 0.2 | Moderada |
| 2 ≤ LR+ < 5 | 0.2 ≤ LR- ≤ 0.5 | Escasa |
| 1 ≤ LR+ < 2 | 0.5 ≤ LR- ≤ 1 | Insignificante |

Además de permitirnos "catalogar" al procedimiento diagnóstico, el LR tiene otro uso que requiere de algunas definiciones previas.

Una forma de medir la probabilidad de ocurrencia de un evento es mediante el cociente entre la probabilidad de que ocurra el evento y la probabilidad de que no ocurra. Este cociente, que en inglés se denomina "odds" y para el que no hay una traducción española comúnmente aceptada, indica cuánto más probable es la ocurrencia del evento que su no ocurrencia.

Si designamos con $p$ a la probabilidad de que ocurra un evento, su odds será:

$$odds = \frac{p}{1-p}$$

Despejando, podemos obtener una expresión para $p$ a partir del odds.

Cuando un paciente llega a la consulta aquejado de ciertos síntomas, y encontramos ciertos signos al examen, planteamos un diagnóstico presuntivo que trataremos de "confirmar" mediante pruebas. Aunque no lo tengamos presente, el proceso de diagnóstico es el planteo de una o varias hipótesis que pensamos tienen una alta probabilidad de ser ciertas, seguido de la realización de pruebas cuyo resultado modifica la probabilidad de que nuestro razonamiento sea cierto. Llamaremos "probabilidad pre-prueba" a la probabilidad que tenemos inicialmente de que nuestro planteo diagnóstico sea correcto, a la que asociamos un "odds pre-prueba". Aplicamos un procedimiento diagnóstico cuyo resultado modifica la probabilidad de que nuestro diagnóstico sea correcto, que ahora asume otro valor, al que se asocia un "odds post-prueba".

*(El original indica que si el resultado del test fue positivo, el odds post-prueba se obtiene multiplicando el odds pre-prueba por el LR+; observación análoga para un resultado negativo con el LR-.)*

**Ejemplo**: Un hombre fumador de 39 años consulta por dolor precordial. La probabilidad "a priori" de que el diagnóstico sea de coronariopatía es de 12%. Se solicita una ergometría, que tiene una sensibilidad del 52% y especificidad del 92% para el diagnóstico de enfermedad coronaria.

a) ¿Cuál es el odds pre-prueba para la coronariopatía?

b) ¿Cuánto vale el LR+ para esta prueba? ¿El LR-?

c) Si el resultado del test es positivo, ¿cuál es el odds post-prueba?

d) Dado que el test dio positivo, ¿cuál es la probabilidad de que el paciente tenga enfermedad coronaria?

*(Nota: el documento original de origen no conserva los valores numéricos calculados para este ejercicio — probablemente se presentaban en una imagen o tabla que la conversión no pudo extraer.)*

Obsérvese que hemos visto dos caminos para obtener la probabilidad post-prueba: uno, el valor predictivo; otro, el uso del odds y del LR.

Para evitar realizar tantas operaciones, se suelen utilizar **nomogramas** como el de la Figura 1 (Nomograma de Fanagan), que permiten calcular la probabilidad post-test a partir de la probabilidad pre-test y del LR+.

## IV. Pruebas con más de dos resultados. Curvas ROC

Hasta ahora hemos abordado el caso de una prueba con un resultado dicotómico (positivo o negativo), o simplificado la situación refiriéndonos a valores "por encima" o "por debajo" de lo normal, pero en muchas situaciones la confirmación de un diagnóstico debe hacerse a partir de un valor de una variable continua, sobre todo cuando éste se realiza a partir de determinaciones analíticas. En esos casos, se consigue mediante la elección de distintos valores de corte que permitan una clasificación dicotómica de los valores de la prueba según sean superiores o inferiores al valor elegido. Según el punto de corte que elijamos, tendremos distinta sensibilidad y especificidad.

Las **curvas ROC** son instrumentos que ayudan a determinar el punto de corte, y a su vez permiten comparar la eficacia de distintos procedimientos. La sigla ROC deriva de las palabras inglesas "*Receiver Operating Characteristic*", usada especialmente en el campo de la detección de señales de radar. Su uso en las ciencias médicas comenzó en la década del 50, en particular en la psicología experimental.

La curva ROC es una descripción gráfica del compromiso entre aciertos y errores al variar las condiciones (punto de corte) de la prueba diagnóstica. Ejemplos típicos de variación en la decisión diagnóstica son la variación del límite entre lo patológico y lo fisiológico de una concentración de una sustancia en sangre, o de una medida antropométrica como la ganancia de peso materno durante la gestación en relación al bajo peso del recién nacido.

La estrategia consiste en representar gráficamente los pares $(1-\text{especificidad}$ (abscisas), $\text{sensibilidad}$ (ordenadas)$)$ obtenidos al considerar distintos puntos de corte de la prueba, obteniéndose la llamada curva ROC (Figura 2).

El **área bajo dicha curva (ABC)** es el mejor indicador de la capacidad predictiva del test, independiente de la prevalencia de la enfermedad en la población de referencia, y en base al cual se podrán establecer comparaciones entre diferentes pruebas diagnósticas.

La curva ROC es necesariamente creciente, propiedad que refleja el compromiso existente entre sensibilidad y especificidad: si se modifica el valor de corte para obtener mayor sensibilidad, sólo puede hacerse a expensas de disminuir al mismo tiempo la especificidad. Si la prueba no permitiera discriminar entre grupos, la curva ROC sería la diagonal que une los vértices inferior izquierdo y superior derecho. La exactitud de la prueba aumenta a medida que la curva se desplaza desde la diagonal hacia el vértice superior izquierdo. Si la discriminación fuera perfecta (100% de sensibilidad y 100% de especificidad) pasaría por dicho punto. Esto sugiere que el área bajo la curva ROC (ABC) se puede emplear como un índice conveniente de la exactitud global de la prueba: la exactitud máxima correspondería a un valor de ABC de 1 y la mínima a uno de 0.5 (si fuera menor de 0.5 debería invertirse el criterio de positividad de la prueba). El punto de corte a elegir depende de la enfermedad a diagnosticar, el tipo de tratamiento, los recursos disponibles y la relación entre costos y beneficios.

Supongamos que, tanto para la población sana como para la enferma, la variable de decisión que representa el resultado de la prueba diagnóstica se distribuye normalmente, con media y desviación típica conocidas; entonces podemos calcular el valor teórico de la sensibilidad y la especificidad para cada punto de corte.

**Ejemplo**: Supongamos que queremos utilizar la glicemia como procedimiento diagnóstico para identificar pacientes con diabetes. La Figura 3 muestra las funciones de densidad de probabilidad para la glicemia en pacientes diabéticos y no diabéticos. Para cada valor de glicemia que se quiera considerar como punto de corte, se podrá calcular la sensibilidad y la especificidad del test.

Si tomamos el punto de corte glicemia=1.0g/L, la sensibilidad es la probabilidad de que a un paciente que es diabético se le detecte la enfermedad, o sea la probabilidad de que la glicemia sea mayor a 1, dado que tiene la enfermedad (se ubica en la campana de la derecha, que tiene media 1.1g/L y desvío 0.1g/L).

Análogamente, la especificidad es la probabilidad de que a un individuo no diabético el test le dé negativo. Sabiendo que la distribución de glicemia en los "sanos" tiene media 0.85g/L y desvío estándar 0.07g/L, podemos calcular la especificidad (Figura 4).

Obviamente, el escenario en que hemos presentado la curva ROC es completamente teórico, por dos razones relacionadas entre sí:

- en la práctica no disponemos de las poblaciones (abstractas) de enfermos y sanos, sino simplemente de una muestra de ellas;
- en general, no conocemos las distribuciones de los valores de la prueba diagnóstica en dichas poblaciones.

### Métodos de cálculo de las curvas ROC

Un primer grupo de métodos para construir la curva ROC lo constituyen los llamados **métodos no paramétricos**. Se caracterizan por no hacer ninguna suposición sobre la distribución de los resultados de la prueba diagnóstica. El más simple de estos métodos es el **método empírico**, que consiste simplemente en representar todos los pares $(1-\text{especificidad},\ \text{sensibilidad})$ para varios valores de corte considerados con la muestra particular de que dispongamos. Desde un punto de vista técnico, este método sustituye las funciones de distribución teóricas por una estimación no paramétrica de ellas, a saber, la función de distribución empírica construida a partir de los datos. Informalmente, es como si sustituyéramos las funciones de densidad por histogramas obtenidos a partir de la muestra de pacientes sanos y enfermos.

Los **métodos paramétricos** se basan en postular un determinado tipo de distribución para la variable de decisión en las dos poblaciones que se trata de distinguir. El modelo más frecuentemente utilizado es el **binormal**, que supone la normalidad de las variables tanto en la población sana como en la enferma, pero existen muchos otros modelos posibles que surgen al considerar distintas distribuciones, similares a la normal como la logística (modelo bilogístico) o no, como la exponencial negativa.

## Bibliografía

1. Ketzoian C y cols. Estadística Médica. Conceptos y aplicaciones el inicio de la formación médica. Oficina del Libro: Montevideo, 2004.
2. Material de bioestadística del Hospital Ramón y Cajal, disponible en: http://www.hrc.es/investigacion/bioest/Probabilidad_1.html#P11
3. Fernández Regalado R. El teorema de Bayes y su utilización en la interpretación de las pruebas diagnósticas en el laboratorio clínico. Dpto de Bioquímica. Instituto de Ciencias Básicas y Preclínicas "Victoria de Girón". Universidad de Ciencias Médicas de La Habana. Cuba. Disponible en: http://www.bvs.sld.cu/revistas/ibi/vol28_3_09/ibi13309.htm
4. Fescina RH, Simini F, Belitzky R. Evaluación de los procedimientos diagnósticos. Aspectos metodológicos. Salud Perinatal PP 1985; 2: 39-43.
5. Pita Fernández, S., Pértegas Díaz, S. Pruebas diagnósticas: Sensibilidad y especificidad. Disponible en: http://www.fisterra.com/mbe/investiga/pruebas_diagnosticas/pruebas_diagnosticas.asp
6. López de Ullibarri Galparsoro I, Píta Fernández, S. Curvas ROC. Disponible en: http://www.fisterra.com/mbe/investiga/curvas_roc/curvas_roc.asp
