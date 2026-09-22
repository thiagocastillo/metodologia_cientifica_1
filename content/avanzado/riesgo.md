> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 5)

# Riesgo: Odds Ratio y Riesgo Relativo

El riesgo, también denominado incidencia acumulada, es la probabilidad de que una persona inicialmente sana desarrolle un evento de interés (por ejemplo, una enfermedad) durante un período de tiempo definido, dentro de una población determinada.

Se expresa como una proporción (valor entre 0 y 1, o en porcentaje) y asume que todos los individuos están libres del evento al inicio del seguimiento y que son observados a lo largo del mismo intervalo temporal.

$$Riesgo = \frac{\text{Número de casos nuevos en el período}}{\text{Número de personas sanas al inicio}}$$

Ejemplo: en un período de 1 año, se registran 30 casos nuevos de la enfermedad en una población de 300 personas inicialmente sanas.

$$Riesgo = \frac{30}{300} = 0,10$$

Esto indica un riesgo anual del 10 %, es decir, que 10 de cada 100 personas desarrollaron el evento durante ese año.

## Medidas de asociación

Cuantifican la relación entre una exposición y un evento, comparando las medidas de frecuencia de la enfermedad entre expuestos y no expuestos, generalmente mediante una tabla de contingencia 2×2.

| | Evento SÍ | Evento NO |
|---|---|---|
| Expuestos | a | b |
| No expuestos | c | d |

### Riesgo relativo (RR)

Compara el riesgo en expuestos vs. no expuestos:

$$RR = \frac{R_{Expuestos}}{R_{No\,expuestos}} = \frac{a/(a+b)}{c/(c+d)}$$

- RR = 1 → no asociación (no hay pruebas para confirmar si la exposición aumenta el riesgo o no)
- RR > 1 → factor de riesgo
- RR < 1 → factor protector

Se utiliza principalmente en estudios de cohorte y en ensayos clínicos, ambos de carácter prospectivo (es decir, con seguimiento hacia adelante en el tiempo). Permite comparar la incidencia del evento en el grupo expuesto frente al grupo no expuesto.

### Razón de prevalencias (RP)

Expresa cuántas veces es más frecuente el evento en los expuestos respecto de los no expuestos.

$$RP = \frac{P_{Expuestos}}{P_{No\,expuestos}} = \frac{\text{Casos presentes}}{\text{Población total}}$$

Se interpreta como el RR; se usa en estudios transversales, donde no se mide incidencia, para comparar la prevalencia de enfermedad entre expuestos y no expuestos.

### Odds Ratio (OR)

Compara las odds o chances de ocurrencia de un evento entre dos grupos. Expresa cuántas veces son mayores o menores las chances del evento en los expuestos en comparación con los no expuestos.

$$OR = \frac{a \times d}{b \times c}$$

- OR = 1 → No hay asociación.
- OR > 1 → La exposición se asocia con mayor probabilidad del evento.
- OR < 1 → La exposición se asocia con menor probabilidad del evento.

Se utiliza principalmente en estudios de casos y controles, donde no es posible calcular directamente el riesgo relativo porque no se conoce la incidencia del evento. También puede emplearse en estudios de cohorte y ensayos clínicos, especialmente en análisis estadísticos como la regresión logística.

## Intervalos de confianza

Cuando calculamos el Riesgo Relativo (RR), la Razón de Prevalencias (RP) o el Odds Ratio (OR), el valor puntual no es suficiente por sí solo. Es imprescindible acompañarlo de su intervalo de confianza (habitualmente al 95 %), que expresa la precisión de la estimación y la incertidumbre muestral.

El IC 95 % indica que, si repitiéramos el estudio muchas veces en muestras similares, el 95 % de los intervalos construidos contendrían el valor verdadero del parámetro poblacional.

Un IC estrecho = estimación precisa. Un IC amplio = mayor imprecisión (muestras pequeñas o eventos raros).

Para RR, RP y OR, el valor de no asociación es 1, por lo que:

- IC que incluye 1 → no hay asociación estadísticamente significativa
- IC completamente > 1 → asociación positiva (factor de riesgo)
- IC completamente < 1 → asociación negativa (factor protector)

**1. Calcular la medida de asociación**

Obtener el valor puntual correspondiente (RR, RP u OR) a partir de la tabla 2×2.

**2. Transformar la medida a escala logarítmica**

Dado que RR, RP y OR no siguen una distribución normal, sino asimétrica, el intervalo de confianza se construye sobre su logaritmo natural: $\ln(RR)$, $\ln(RP)$, $\ln(OR)$

Esta transformación se utiliza porque estas medidas no son simétricas alrededor del valor nulo (1), mientras que sus logaritmos sí presentan simetría, lo que permite aplicar métodos basados en la distribución normal.

**3. Calcular el error estándar**

Calcular el error estándar del logaritmo de la medida, el cual varía según se trate de RR, RP u OR y depende de las frecuencias de la tabla 2×2. Este error estándar cuantifica la variabilidad de la estimación y es el insumo para construir el intervalo de confianza.

Para RR y RP:

$$SE(\ln RR) = \sqrt{\frac{1}{a} - \frac{1}{a+b} + \frac{1}{c} - \frac{1}{c+d}}$$

Para OR:

$$SE(\ln OR) = \sqrt{\frac{1}{a} + \frac{1}{b} + \frac{1}{c} + \frac{1}{d}}$$

**4. Construir IC en escala logarítmica**

$$IC_{\log} = \ln(OR, RR, RP) \pm Z_{\alpha/2} \times SE$$

**5. Exponenciar límites**

Finalmente, se transforman los límites del intervalo a la escala original:

$$IC = (e^{\text{límite inferior}},\ e^{\text{límite superior}})$$

Dato: cuando alguna celda de la tabla de contingencia 2×2 tiene valor 0, no es posible calcular correctamente el OR (y tampoco su intervalo de confianza), ya que implica divisiones por cero. En estos casos, se aplica la **corrección de Haldane–Anscombe**, que consiste en sumar 0,5 a todas las celdas de la tabla antes de realizar los cálculos.

## Ejercicio de ejemplo

**En un estudio de casos y controles se evalúa si la exposición X se asocia con una enfermedad.**

| | Enfermedad | Sin enfermedad |
|---|---|---|
| Expuestos | 12 | 3 |
| No expuestos | 0 | 10 |

Se pide: calcular OR e IC 95%.

**Verificar si hay celda 0**

Sí: c = 0. Entonces aplicamos Haldane–Anscombe: sumar 0,5 a todas las celdas.

Tabla corregida (sumar 0,5 a todas)

| | Enfermedad | Sin enfermedad |
|---|---|---|
| Expuestos | 12.5 | 3.5 |
| No expuestos | 0.5 | 10.5 |

**Calcular el OR**

$$OR = \frac{a \times d}{b \times c} = \frac{12.5 \times 10.5}{3.5 \times 0.5} = 75$$

**Pasar a escala logarítmica**

$$\ln(OR) = \ln(75) \approx 4.317$$

**Calcular el error estándar de ln(OR)**

$$SE(\ln OR) = \sqrt{\frac{1}{12.5}+\frac{1}{3.5}+\frac{1}{0.5}+\frac{1}{10.5}}$$

Calculamos cada término y sumamos:

$$0.08 + 0.2857 + 2 + 0.0952 = 2.4609$$

Raíz:

$$SE = \sqrt{2.4609} \approx 1.569$$

**Construir el IC 95% en escala logarítmica**

Para 95%: $Z_{0.025} = 1.96$

$$IC_{\log} = \ln(OR) \pm 1.96 \times SE = 4.317 \pm 1.96 \times 1.569$$

$$1.96 \times 1.569 \approx 3.075$$

Límites:

- Límite inferior log: $4.317 - 3.075 = 1.242$
- Límite superior log: $4.317 + 3.075 = 7.392$

**Exponenciar para volver a la escala original**

$$IC_{95\%} = (e^{1.242},\ e^{7.392})$$

- $e^{1.242} \approx 3.46$
- $e^{7.392} \approx 3.46$

$$IC_{95\%} \approx (3.46;\ 1618.6)$$

Como el IC no incluye 1, la asociación es estadísticamente significativa.

El intervalo es muy amplio, lo que sugiere baja precisión (típico cuando hay celdas con 0 y tamaños muestrales pequeños).

## Fórmulas

$$Riesgo = \frac{\text{Número de casos nuevos en el período}}{\text{Número de personas sanas al inicio}}$$

$$RR = \frac{R_{Expuestos}}{R_{No\,expuestos}} = \frac{a/(a+b)}{c/(c+d)}$$

$$RP = \frac{P_{Expuestos}}{P_{No\,expuestos}} = \frac{\text{Casos presentes}}{\text{Población total}}$$

$$OR = \frac{a \times d}{b \times c}$$

$$SE(\ln RR) = \sqrt{\frac{1}{a} - \frac{1}{a+b} + \frac{1}{c} - \frac{1}{c+d}}$$

$$SE(\ln OR) = \sqrt{\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}}$$

$$IC = \ln(OR, RR, RP) \pm Z_{\alpha/2} \times SE$$

$$IC = (e^{\text{límite inferior}},\ e^{\text{límite superior}})$$
