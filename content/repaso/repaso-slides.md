> Fuente: `PDF 1. Repaso.pdf` (diapositivas de clase)

# Repaso de conceptos estadísticos

## 1. Variables

### 1.1 Definición

Las variables son características que pueden adoptar distintos valores entre los individuos de una muestra o población.

- **Entre individuos**: la variable toma distintos valores al comparar diferentes sujetos. Ejemplos: peso, azoemia, hemoglobinemia y hematocrito.
- **En un mismo individuo**: la variable también puede variar en un mismo individuo en diferentes momentos. Ejemplo: los niveles de cortisol durante la madrugada, al mediodía y a la medianoche de un mismo día, reflejando la variabilidad del ciclo circadiano (el cortisol sigue un patrón cíclico de 24 h, con un pico hacia el mediodía y valores más bajos durante la madrugada/medianoche).

### 1.2 Clasificación general de variables

Las variables se clasifican en dos grandes grupos:

**1. Cualitativas o categóricas**: expresan cualidades, atributos o categorías, sin asociarse directamente a valores numéricos. Ejemplos:
- Sexo: masculino / femenino
- Estado sanitario: sano / enfermo
- Etnia: caucásico / afrodescendiente / asiático / indígena
- Cobertura médica: pública (ASSE) / privada
- Grado de enfermedad: leve / moderado / severo

**2. Cuantitativas**: representan cantidades y se expresan mediante números. Se subdividen en:
- **Continuas**: pueden tomar infinitos valores dentro de un intervalo. Ejemplos: volumen, masa, temperatura, presión, longitud, concentración.
- **Discretas**: solo pueden asumir valores enteros contables, incluyendo el cero. Ejemplos: número de hijos, internaciones anuales, convulsiones, consultas médicas.

**Resumen:**
- Cualitativas → categorías, cualidades o atributos
- Cuantitativas → continuas o discretas

### 1.3 Clasificación según escala de medida

#### Variables cualitativas o categóricas

| Escala | Descripción | Ejemplos |
|---|---|---|
| **Nominal** | Nombra o identifica categorías según una cualidad específica, sin establecer orden entre ellas. | Tipo de mutación genética en cáncer de pulmón; grupo sanguíneo: A / B / AB / O; tipo de incisión abdominal: mediana / subcostal / transversal |
| **Ordinal** | Nombra las categorías y permite ordenarlas o jerarquizarlas según una condición preestablecida. | Deshidratación: leve / moderada / severa; estadificación tumoral TNM: I / II / III / IV; nivel de instrucción: primaria / secundaria / terciaria / posgrado / maestría / doctorado |

- **Nominal** → categorías **sin orden** (ej.: grupo sanguíneo, sexo)
- **Ordinal** → categorías **con orden jerárquico** (ej.: grado de deshidratación)

#### Variables cuantitativas

| Escala | Descripción | Ejemplos |
|---|---|---|
| **Discretas** | Se expresan mediante valores enteros. Entre dos valores consecutivos no existen otros posibles. | |
| — Subtipo **razón** | El cero implica ausencia de cantidad. | Número de metástasis; crisis broncoespásticas en los últimos 6 meses |
| — Subtipo **intervalo** | En medicina habitualmente no se utilizan ejemplos de este subtipo. | — |
| **Continuas** | Pueden tomar infinitos valores dentro de un intervalo; se expresan en el campo de los números reales. | |
| — Subtipo **razón** (cero absoluto) | El cero implica ausencia de cantidad. | Creatininemia (mg/dl); glicemia (mg/dl); altura (m); diámetro craneal neonatal (cm) |
| — Subtipo **intervalo** (cero relativo) | El cero no implica ausencia de cantidad. | Temperatura en grados Celsius |

**Resumen:**
- Discretas → valores enteros contables
- Continuas → infinitos valores dentro de un rango
- Razón → cero = ausencia de cantidad
- Intervalo → cero relativo (ej.: temperatura en °C)

### 1.4 Esquema general de clasificación

```
VARIABLES
├── CUALITATIVAS / CATEGÓRICAS
│   ├── NOMINAL — categorías sin orden (ej.: grupo sanguíneo)
│   └── ORDINAL — categorías ordenadas (ej.: grado de deshidratación)
└── CUANTITATIVAS
    ├── DISCRETAS — valores enteros
    │   ├── RAZÓN · cero absoluto (ej.: número de metástasis)
    │   └── INTERVALO (poco usado en medicina)
    └── CONTINUAS — valores reales infinitos
        ├── RAZÓN · cero absoluto (ej.: glicemia, altura)
        └── INTERVALO · cero relativo (ej.: temperatura °C)
```

## 2. Tabulación y gráficos para variables cualitativas

### 2.1 Frecuencias absolutas, relativas y porcentajes

Las variables cualitativas se resumen mediante frecuencias absolutas, frecuencias relativas y porcentajes:

- **Frecuencia absoluta ($n$)**: número de observaciones.
- **Frecuencia relativa** ($f_R$): $f_R = \dfrac{n}{N}$
- **Porcentaje**: $\text{Porcentaje} = f_R \times 100$

La suma de las frecuencias relativas es 1; la suma de los porcentajes es 100%.

**Ejemplo: estado sanitario ($N = 100$)**

| Categoría | $n$ | $f_R$ | % |
|---|---|---|---|
| Sano | 68 | 0,68 | 68% |
| Enfermo | 32 | 0,32 | 32% |
| **Total** | **100** | **1,00** | **100%** |

El gráfico de barras horizontales correspondiente muestra "Sano" con 68% y "Enfermo" con 32%.

En publicaciones científicas se recomienda informar: $n$ (%). Ejemplo: Sano: 68 (68%).

Formas de representación gráfica para variables cualitativas: barras simples, barras agrupadas, barras apiladas y diagrama sectorial.

### 2.2 Gráfico de barras simples (una sola variable cualitativa)

La altura de cada barra representa la frecuencia absoluta ($n$), la frecuencia relativa ($f_r$) o el porcentaje (%).

**Construcción correcta:**
- Eje vertical desde cero
- Barras separadas
- Igual ancho y espaciado
- Categorías mutuamente excluyentes

**Ejemplo 1 — Método referido para la detección del cáncer de mama:**

| Método | Porcentaje de mujeres |
|---|---|
| Autoexamen | 17% |
| Examen clínico | 16% |
| Mamografía | 34% |
| Biopsia | 15% |
| Ecografía | 10% |
| Resonancia | 8% |

Interpretación: la mamografía fue el método más referido (34%).

> En variables nominales, el orden de las categorías puede modificarse; ordenarlas por frecuencia facilita la comparación.

**Ejemplo 2 — Factor de riesgo conductual asociado a muertes estimadas en el mundo, 2019** (fuente de los datos de la imagen original: IHME, Global Burden of Disease 2019):

| Factor de riesgo | Muertes estimadas (millones) |
|---|---|
| Tabaquismo | 7,69 |
| Consumo de alcohol | 2,44 |
| Dieta alta en sodio | 1,89 |
| Dieta baja en granos integrales | 1,85 |

Lectura del gráfico: la variable "factor de riesgo" es cualitativa nominal; las categorías se representan con barras separadas cuya altura equivale a la frecuencia absoluta estimada. La mayor categoría es tabaquismo, con 7,69 millones.

> Interpretación responsable: son estimaciones poblacionales de muertes asociadas a enfermedades relacionadas; no representan causalidad individual directa.

### 2.3 Diagrama sectorial o de torta (una sola variable cualitativa)

Cada sector representa una proporción del total. La suma de todos los sectores debe ser 100%. Puede construirse a partir de $n$, $f_r$ o %, pero el área de cada sector siempre expresa la proporción respecto del total.

**Ejemplo 1 — Tipo de cáncer diagnosticado ($N = 256$):**

| Tipo | Porcentaje |
|---|---|
| Pulmón | 23% |
| Mama | 22% |
| Colorrectal | 19% |
| Próstata | 14% |
| Estómago | 11% |
| Piel | 11% |

**Ejemplo 2 — Sexo ($n = 19$):**

| Sexo | n (%) |
|---|---|
| Masculino | 10 (52,6%) |
| Femenino | 9 (47,4%) |

**Uso correcto:** una sola variable cualitativa; categorías exhaustivas y mutuamente excluyentes; mostrar porcentajes en cada sector; preferible con pocas categorías.

**Limitación:** cuando existen muchas categorías o diferencias pequeñas, el gráfico de barras permite comparar mejor.

### 2.4 Dos variables cualitativas: barras agrupadas (o apareadas)

Permiten comparar la distribución porcentual de una variable entre las categorías de otra.

**Ejemplo — Distribución del sexo según sección:**

| Sección | Masculino | Femenino |
|---|---|---|
| A | 62% | 38% |
| B | 36% | 64% |
| C | 45% | 55% |
| D | 70% | 30% |

Variables analizadas: Sexo → cualitativa nominal; Sección → cualitativa nominal. Cada par suma 100%.

Lectura: mayor proporción masculina en Sección D (70%); mayor proporción femenina en Sección B (64%).

> Si los tamaños de los grupos son diferentes, comparar porcentajes dentro de cada sección evita interpretaciones engañosas basadas en frecuencias absolutas.

### 2.5 Dos variables cualitativas: barras apiladas al 100%

Cada barra representa el 100% de una institución y muestra la composición porcentual del motivo de consulta.

**Ejemplo — Motivo de consulta en emergencia según institución:**

| Institución | Hipertensión | Diabetes | Asma |
|---|---|---|---|
| Maciel | 50% | 30% | 20% |
| HC | 47% | 23% | 30% |
| Pasteur | 42% | 23% | 35% |
| CASMU | 50% | 38% | 12% |

Variables: Institución → cualitativa nominal; Motivo de consulta → cualitativa nominal; cada barra suma 100%.

Lectura: Asma tiene mayor proporción en Pasteur (35%); Diabetes tiene mayor proporción en CASMU (38%); Hipertensión es 50% tanto en Maciel como en CASMU.

**Limitación:** los segmentos intermedios son difíciles de comparar; para diferencias pequeñas es preferible usar barras agrupadas. Las barras apiladas al 100% comparan composiciones relativas, pero no muestran el tamaño absoluto de cada institución.

## 3. Variables cuantitativas: tabulación y medidas de resumen

### 3.1 Tipos de medidas de resumen

**1. Tendencia central**
- Media: $\bar{x} = \dfrac{\sum x_i}{n}$
- Mediana: $P_{50}$; divide la distribución en dos mitades
- Moda: valor con mayor frecuencia

> La media es sensible a valores extremos; la mediana es más robusta.

**2. Dispersión o variabilidad**
- Desviación estándar (DE): dispersión alrededor de la media
- Varianza: $s^2$
- Rango: máximo − mínimo
- Rango intercuartílico (RIC): $Q_3 - Q_1$
- Coeficiente de variación: $CV = DE / \bar{x} \times 100\%$

> DE acompaña a la media; RIC acompaña a la mediana.

**3. Medidas de posición**
- Percentil $P_x$: deja por debajo el $x\%$ de los datos
- Cuartiles: $Q_1 = P_{25}$, $Q_2 = P_{50}$, $Q_3 = P_{75}$
- Deciles: dividen la distribución en 10 partes

> Permiten ubicar una observación dentro de la distribución.

### 3.2 ¿Cómo presentar los datos?

- **Distribución aproximadamente simétrica** → Media ± DE
- **Distribución asimétrica o con valores extremos** → Mediana [$Q_1$–$Q_3$] o mediana [RIC]

> Antes de resumir, inspeccionar la distribución con histograma, box-plot y medidas de asimetría.

### 3.3 Presentación en tablas científicas

Buena práctica: informar la unidad, el número de observaciones válidas y una medida de centro acompañada por su medida de dispersión.

**Ejemplo ilustrativo ($N = 120$):**

| Variable | n válido | Medida de resumen | Rango |
|---|---|---|---|
| Edad (años) | 120 | 58,4 ± 12,6 | 31–82 |
| Índice de masa corporal (kg/m²) | 118 | 27,3 ± 4,5 | 18,6–39,8 |
| Creatininemia (mg/dl) | 116 | 1,10 [0,88; 1,42] | 0,55–4,20 |
| Días de internación | 120 | 6 [4; 9] | 1–28 |

- Datos aproximadamente simétricos: media ± DE (edad, IMC)
- Datos asimétricos: mediana [$Q_1$; $Q_3$] (creatininemia, días de internación)

**Elección del resumen:**
- Simétrica → media ± DE
- Asimétrica o con valores extremos → mediana [$Q_1$; $Q_3$]
- Rango mínimo–máximo → información complementaria

**Buena práctica:** indicar unidades; informar $n$ válido por variable; mantener decimales coherentes; declarar datos faltantes.

> No mezclar media con RIC ni mediana con DE: la medida de centro debe corresponder a su medida de dispersión.

## 4. Gráficos para variables cuantitativas discretas

### 4.1 Gráfico de bastones y gráfico en escalera

**Ejemplo:** número de ingresos en emergencia durante el último año ($N = 8$)

| $x$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| $f_i$ | 1 | 3 | 3 | 1 |
| $F_i$ (acumulada) | 1 | 4 | 7 | 8 |

**Gráfico de bastones**: representa frecuencias simples, no acumuladas. Un bastón vertical en cada valor de $x$ con altura igual a $f_i$. Los valores 1 y 2 fueron los más frecuentes: 3 pacientes cada uno.

**Gráfico en escalera**: representa frecuencias acumuladas ($F_i$). Se muestra como una función escalonada que sube en cada valor observado. Hasta 2 ingresos se acumulan 7 de los 8 pacientes.

- BASTONES → frecuencia en cada valor
- ESCALERA → frecuencia acumulada hasta cada valor

> La función acumulada nunca disminuye y finaliza en $N$ —o en 1 / 100% si se usan frecuencias relativas acumuladas—.

## 5. Gráficos para variables cuantitativas continuas

### 5.1 Histograma de densidad de frecuencia

En un histograma de densidad, la **proporción** está representada por el **área** de cada barra.

$$\text{densidad}_i = \frac{f_{ri}}{a_i}$$
$$\text{área}_i = \text{densidad}_i \times a_i = f_{ri}$$
$$\sum \text{área}_i = 1 \ (\text{o } 100\%)$$

**Claves:**
- La base representa el intervalo de clase.
- La altura representa la densidad.
- Las barras deben estar contiguas.
- Es esencial usar densidad si las amplitudes son diferentes.

> Atención: la altura aislada no es la frecuencia. Con intervalos desiguales, deben compararse las áreas.

**Ejemplo ilustrativo** — distribución de altura (cm), amplitud de clase = 10 cm:

| Intervalo (cm) | Densidad (por cm) |
|---|---|
| 140–150 | 0,005 |
| 150–160 | 0,015 |
| 160–170 | 0,025 |
| 170–180 | 0,030 |
| 180–190 | 0,018 |
| 190–200 | 0,007 |

### 5.2 Polígono de densidad de frecuencia

**¿Cómo se construye?**
1. Calcular el punto medio de cada intervalo.
2. Representar su densidad de frecuencia.
3. Unir los puntos consecutivos con segmentos.
4. Añadir extremos con densidad cero para cerrar el polígono.

$$\text{densidad}_i = \frac{f_{ri}}{a_i}$$

**Interpretación:** el polígono permite visualizar la forma de la distribución y facilita la comparación entre grupos.

**Claves:**
- Cada vértice corresponde al centro de una clase.
- La altura representa densidad, no frecuencia absoluta.
- Con intervalos de igual amplitud, conserva la forma del histograma.
- Puede mostrarse solo o superpuesto al histograma.

**Ejemplo — histograma y polígono de densidad para la altura (cm)** (amplitud de clase = 10 cm), con puntos medios en 135, 140, 150, 160, 170, 180, 200 y 205:

| Punto medio (cm) | Densidad |
|---|---|
| 135 | 0,000 |
| 140 | 0,005 |
| 150 | 0,015 |
| 160 | 0,025 |
| 170 | 0,030 |
| 180 | 0,018 |
| 200 | 0,007 |
| 205 | 0,000 |

> Precisión: la propiedad $\sum \text{área} = 1$ corresponde al histograma de densidad. No debe interpretarse el área bajo el polígono como la frecuencia relativa de cada clase.

**Ejemplo clínico — distribución de TSH** (amplitud entre puntos = 5 ng/ml):

| TSH (ng/ml) | Densidad porcentual (% por ng/ml) |
|---|---|
| 5 | 0,000 |
| 10 | 0,946 |
| 15 | 1,486 |
| 20 | 2,432 |
| 25 | 4,865 |
| 30 | 6,216 (máxima densidad) |
| 35 | 2,703 |
| 40 | 1,081 |
| 45 | 0,270 |
| 50 | 0,000 |

Lectura del gráfico: la distribución presenta un único pico; la mayor densidad se observa alrededor de 30 ng/ml; a partir del máximo, la densidad disminuye hacia valores más altos.

Área total = $5 \times (0{,}946 + 1{,}486 + 2{,}432 + 4{,}865 + 6{,}216 + 2{,}703 + 1{,}081 + 0{,}270)$

Área total = 100%

> En este ejemplo, los puntos están igualmente espaciados y los extremos tienen densidad cero; por eso el área total bajo el polígono coincide con 100%.
>
> Importante: el área de cada segmento del polígono no debe interpretarse como la frecuencia de una clase individual.

### 5.3 Ojiva o polígono de frecuencia relativa acumulada

**¿Qué muestra la ojiva?**
- Representa el porcentaje de observaciones acumuladas hasta cada valor.
- Siempre es no decreciente.
- Finaliza en 100%.
- Una meseta indica ausencia de nuevas observaciones en ese intervalo.

**Ejemplo clínico — distribución de TGO:**

| TGO (UI/L) | Frecuencia relativa acumulada |
|---|---|
| 3 | 0,000% |
| 6 | 12,857% |
| 9 | 28,571% |
| 12 | 57,143% |
| 15 | 57,143% (sin nuevas observaciones en el intervalo 12–15) |
| 18 | 64,286% |
| 21 | 75,000% |
| 24 | 92,857% |
| 27 | 100,000% |

**Estimación de percentiles a partir de la ojiva:**
1. Elegir el porcentaje en el eje Y.
2. Trazar una línea horizontal hasta la ojiva.
3. Proyectar verticalmente hacia el eje X.

| Percentil | Valor estimado |
|---|---|
| $P_{50}$ | ≈ 11,25 UI/L |
| $P_{75}$ | = 21 UI/L |
| $P_{90}$ | ≈ 23,52 UI/L |

($P_{50}$ y $P_{90}$ estimados mediante interpolación lineal.)

> Clave: la ordenada indica el porcentaje de individuos con valores menores o iguales al valor observado en el eje X.

**Estimación detallada de percentiles:**

*Percentil 75*: el 75% acumulado coincide con un punto observado de la ojiva.
$$P_{75} = Q_3 = 21 \text{ UI/L}$$

*Percentil 20*: el 20% se encuentra entre 12,857% y 28,571%; por eso se interpola.
$$P_{20} = 6 + \left[\frac{(20 - 12{,}857)}{(28{,}571 - 12{,}857)}\right] \times (9 - 6)$$
$$P_{20} \approx 7{,}36 \text{ UI/L}$$

Interpretación:
- $P_{75}$: el 75% de los individuos presenta TGO ≤ 21 UI/L.
- $P_{20}$: el 20% presenta TGO ≤ 7,36 UI/L.

> Clave: si el porcentaje buscado no coincide con un punto de la ojiva, se estima mediante interpolación lineal entre los puntos adyacentes.

### 5.4 Comparación de dos polígonos de densidad

Objetivo: comparar la forma, localización y dispersión de dos distribuciones.

**Ejemplo ilustrativo** — tiempo de reacción (ms) según sexo:

Lectura comparativa:
- **Masculino**: pico más temprano (550 ms); distribución más concentrada; menor extensión hacia tiempos altos.
- **Femenino**: pico desplazado hacia 650 ms; distribución más amplia; mayor presencia de valores elevados; pequeño segundo pico alrededor de 1050 ms.

Lo que se puede comparar entre dos polígonos: localización, dispersión y forma.

> Importante: la diferencia visual entre las curvas es descriptiva. Para evaluar evidencia estadística deben considerarse el diseño, el tamaño muestral y un análisis inferencial apropiado.

### 5.5 Comparación de dos ojivas

Objetivo: comparar la distribución acumulada de dos muestras o poblaciones.

**Ejemplo** — tiempo de reacción (ms) según sexo (mismo ejemplo que 5.4, en versión acumulada):

Lectura comparativa: la ojiva masculina está desplazada hacia la izquierda, lo que indica tiempos generalmente menores en el grupo masculino. La ojiva femenina asciende más lentamente y se extiende hacia tiempos mayores. Las mesetas indican intervalos sin nuevas observaciones.

A los 650 ms: Masculino: 100% presenta valores ≤ 650 ms. Femenino: ≈42% presenta valores ≤ 650 ms.

**Mediana**: la curva que cruza el 50% más a la izquierda presenta una mediana menor.

> Importante: la separación visual entre las ojivas es descriptiva. La comparación inferencial requiere considerar el diseño, el tamaño muestral y una prueba apropiada.

### 5.6 Box plot o diagrama de caja y bigotes

Resume posición, dispersión, asimetría y posibles valores atípicos.

**¿Qué representa?**
- La caja contiene el 50% central de los datos.
- La línea interior señala la mediana.
- El RIC cuantifica la dispersión central.
- La posición de la mediana y la longitud de los bigotes sugieren asimetría.
- Los puntos aislados pueden indicar valores atípicos.

**Ejemplo de box plot (Tukey):**

Mínimo = 2, $Q_1$ = 18, Mediana ($Q_2$) = 29, $Q_3$ = 37, Máximo = 48

$$RIC = Q_3 - Q_1 = 37 - 18 = 19$$
$$\text{Rango} = \text{Máximo} - \text{Mínimo} = 48 - 2 = 46$$

**Regla de Tukey:**
$$\text{Límite inferior} = Q_1 - 1{,}5 \times RIC$$
$$\text{Límite superior} = Q_3 + 1{,}5 \times RIC$$

Los bigotes alcanzan los valores extremos dentro de esos límites.

Para este ejemplo: Límite inferior = −10,5; Límite superior = 65,5. Como 2 y 48 están dentro de los límites, no hay valores atípicos y los bigotes coinciden con el mínimo y el máximo.

> Atención: los bigotes no siempre representan directamente el mínimo y el máximo; depende de la convención utilizada. En la representación conceptual, un valor atípico se muestra como un punto separado del bigote y no forma parte de los datos del ejemplo anterior.

### 5.7 Box plot: comparación entre dos grupos

**Ejemplo** — concentración intracelular de lactato (vía hsa00620, metabolismo del piruvato), tejido normal versus tejido tumoral:

| Grupo | Mediana |
|---|---|
| Normal | ≈ 2,1 |
| Tumoral | ≈ 2,9 |

Diferencia descriptiva ≈ 0,8 unidades. El 50% central de los valores tumorales se concentra aproximadamente entre 2,6 y 3,3. El grupo normal muestra mayor amplitud intercuartílica. En el grupo tumoral se observan valores atípicos inferiores y superiores.

Lectura del box plot: la mediana es visualmente mayor en el grupo tumoral; la superposición entre distribuciones debe considerarse al interpretar el efecto.

**Interpretación biológica:** el patrón es compatible con una mayor concentración de lactato en tejido tumoral, hallazgo coherente con una actividad glucolítica aumentada. Sin embargo, el gráfico no establece causalidad.

**Para concluir diferencia** se requiere: prueba estadística apropiada, estimación del efecto e IC95%, y considerar el tamaño muestral y supuestos.

> Importante: una diferencia visual entre medianas no demuestra significación estadística ni relevancia clínica.

### 5.8 Box plots agrupados

**Ejemplo** — comparación de NADPH (ng/ml) entre tejido normal y tumoral, distribución por gen: A, B, C, D, E y F.

**¿Qué permite comparar?** La mediana entre condiciones; la amplitud intercuartílica; la extensión de los bigotes; la asimetría y los valores atípicos; la consistencia del patrón entre genes.

**Lectura descriptiva:**
- B y D muestran separación visual entre medianas.
- C presenta medianas muy similares.
- E muestra elevada variabilidad.
- F presenta valores atípicos en el grupo tumoral.
- La superposición de las cajas debe considerarse.

**Seis genes = múltiples comparaciones:**
- Riesgo de error tipo I acumulado.
- Ajustes posibles: Holm, Bonferroni o FDR.
- Reportar efecto + IC95%, no solo valores p.

> Importante: el box plot describe los datos, pero no demuestra diferencias estadísticamente significativas.

## 6. Gráficos para dos variables cuantitativas continuas

### 6.1 Diagrama de dispersión (scatter plot)

Representa pares de valores observados en una misma unidad de análisis.

**¿Cómo se interpreta?**
- Cada punto representa dos mediciones del mismo individuo.
- La dirección puede ser positiva, negativa o nula.
- La proximidad de los puntos a una tendencia refleja la intensidad de la asociación.
- La forma puede ser lineal o no lineal.
- Los valores atípicos pueden modificar considerablemente la correlación.

**Antes de calcular $r$**: verificar linealidad, valores atípicos y rango de los datos.

> Importante: correlación no implica causalidad. Una asociación puede deberse a confusión, sesgo o azar.

$X$ e $Y$ son dos variables cuantitativas; denominarlas independiente y dependiente depende del objetivo analítico.

**Ejemplo — correlación negativa:**

En este ejemplo: dirección negativa; forma aproximadamente lineal; intensidad moderada a fuerte. Correlación negativa: cuando $X$ aumenta, $Y$ tiende a disminuir. Se observa un posible valor atípico (un punto alejado de la nube principal).

**Ejemplo clínico — correlación positiva: relación entre altura y peso corporal:**

Lectura del gráfico: cada punto representa la altura y el peso de un mismo individuo. La nube presenta una tendencia ascendente. La relación es aproximadamente lineal. Existe variabilidad del peso para una misma altura. Los valores atípicos deben investigarse antes del análisis.

En este ejemplo: dirección positiva; forma aproximadamente lineal; intensidad moderada a fuerte. Correlación positiva: cuando $X$ aumenta, $Y$ tiende a aumentar.

**Correlación ≠ pendiente:**
- $r$ describe la fuerza y dirección de la relación lineal.
- La pendiente expresa cuánto cambia $Y$, en promedio, por unidad de $X$.
- Son conceptos relacionados, pero no equivalentes.

> Importante: correlación no implica causalidad. Edad, sexo, composición corporal y selección de la muestra pueden influir en la asociación. Verificar linealidad, valores atípicos y rango de los datos antes de calcular el coeficiente.
