> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 1)

# Revisión de Contenidos Previos

## Variables

En los métodos cuantitativos, las variables son el eje central del análisis. Una variable es toda característica que puede asumir distintos valores entre los individuos de una población. Por ejemplo: la edad, la presión arterial, el sexo o el color de ojos.

### Clasificación de las variables

**1. Según los valores que asumen**

- **Cualitativas**: describen cualidades o categorías, sin expresar cantidad. Se expresan con palabras o códigos, no con números. Ejemplo: sexo, color de ojos, grupo sanguíneo.
- **Cuantitativas**: expresan cantidades medibles. Se dividen en:
  - **Discretas**: toman valores enteros (no fraccionarios). Ejemplo: número de partos, cantidad de hijos, internaciones (números sin coma).
  - **Continuas**: pueden asumir cualquier valor dentro de un rango, incluyendo fracciones. Ejemplo: glicemia, peso, edad, presión arterial → entre dos valores siempre puede existir otro intermedio (números con coma).

Toda variable que depende del tiempo (como la edad) es continua, porque el tiempo es continuo.

**2. Según su función en una proposición o relación**

- **Variable independiente**: es la causa o el factor que se manipula o analiza para ver su efecto.
- **Variable dependiente**: es el resultado o efecto que se observa.
- **Variable interviniente**: influye o modifica la relación entre la independiente y la dependiente.

## Escalas de medida

Las escalas de medida son formas de asignar valores a las variables para poder analizarlas e interpretarlas correctamente. Cada tipo de escala determina qué operaciones matemáticas o comparaciones pueden hacerse con los datos. Tipos:

- **Nominal**: solo identifica o clasifica categorías sin orden entre ellas. Representa una relación de equivalencia, no de jerarquía. Ejemplo: sexo (masculino/femenino), grupo sanguíneo, color de ojos.
- **Ordinal**: establece un orden o jerarquía entre categorías, pero sin medir diferencias exactas. Indica relaciones de desigualdad ("más que" o "menos que"), pero no cuánto más. Ejemplo: estadio de una enfermedad (leve, moderado, grave).
- **De intervalo**: las distancias entre los valores son iguales y medibles, pero el cero es relativo (no implica ausencia total). Permite sumar y restar valores, pero no multiplicar ni dividir. Ejemplo: temperatura en grados Celsius o Fahrenheit (0 °C no significa ausencia de temperatura).
- **De razón**: posee todas las propiedades anteriores y además un cero absoluto (ausencia real de la magnitud). Permite realizar todas las operaciones matemáticas. No admite valores negativos. Ejemplo: temperatura en Kelvin, peso, talla, edad.

### Relación con las variables

Las escalas nominal y ordinal se aplican generalmente a variables cualitativas. Las escalas de intervalo y de razón se usan en variables cuantitativas.

Una misma variable puede medirse con diferentes escalas según el objetivo del estudio. Por ejemplo, el dolor puede medirse ordinalmente (leve, moderado, severo) o con una escala numérica (de razón).

## Tablas de frecuencia

Las tablas de frecuencia son una forma ordenada de resumir y organizar los datos de una variable. Permiten observar de un vistazo cuántas veces aparece cada valor o intervalo, qué proporción representa dentro del total y cómo se acumulan los casos.

### Frecuencia absoluta (fa)

Es el número de veces que se repite un determinado valor o categoría en el conjunto de datos. Ejemplo: si 10 personas tienen la misma presión arterial de 120 mmHg, la frecuencia absoluta de ese valor es fa = 10.

### Frecuencia relativa (fr)

Indica la proporción que representa cada valor respecto al total de casos. Se calcula dividiendo la frecuencia absoluta por el total de observaciones (n):

$$fr = \frac{fa}{n}$$

Ejemplo: si 10 de 100 personas tienen 120 mmHg, fr = 0,10. Esto significa que el 10 % de los individuos presenta ese valor.

### Frecuencia relativa porcentual (fr%)

Es simplemente la frecuencia relativa expresada en porcentaje:

$$fr\% = fr \times 100$$

### Frecuencia relativa acumulada porcentual (fra%)

Muestra el porcentaje total acumulado de observaciones hasta un determinado valor o intervalo. Se obtiene sumando los porcentajes de todas las categorías anteriores. Sirve para identificar qué proporción de casos está por debajo o igual a cierto valor.

Ejemplo: imaginá que estás midiendo presión arterial en un grupo de personas:

| Presión (mmHg) | % en ese rango | % acumulado |
|---|---|---|
| ≤ 110 | 20 % | 20 % |
| ≤ 120 | 30 % | 50 % |
| ≤ 130 | 30 % | 80 % |
| ≤ 140 | 20 % | 100 % |

### Amplitud del intervalo (h)

Cuando los datos son numéricos continuos, se agrupan en intervalos de clase, como por ejemplo: [40 ; 50). La amplitud indica el ancho de cada intervalo y se calcula como:

$$h = \text{Límite superior} - \text{Límite inferior}$$

Ejemplo: usando los intervalos anteriores: 50 – 40 = 10

### Marca de clase

Es el punto medio de cada intervalo y representa el valor promedio de ese rango. Se calcula como:

$$\text{Marca de clase} = \frac{\text{Límite superior} + \text{Límite inferior}}{2}$$

Ejemplo: si un intervalo va de 100 a 110 mmHg, la marca de clase será 105 mmHg.

### Densidad de frecuencia (γ) o (d)

Cuando los intervalos no tienen la misma amplitud, no se puede comparar solo la frecuencia. Por eso se usa la densidad de frecuencia, que ajusta la frecuencia según el ancho del intervalo:

$$\gamma = \frac{fr}{h}$$

Entonces, un ejemplo de cómo debería verse una tabla de frecuencia es este:

| x | fa | fr | fr% | fra% | γ |
|---|---|---|---|---|---|
| [40 ; 50) | | | | | |
| [50 ; 60) | | | | | |
| [60 ; 70) | | | | | |
| [70 ; 80) | | | | | |
| [80 ; 90) | | | | | |
| [90 ; 100) | | | | | |
| **TOTAL** | | | | | |

## Medidas de resumen

Las medidas de resumen permiten describir de manera sintética cómo se distribuyen los datos de una variable. Se dividen en tres grupos: medidas de tendencia central, de dispersión y de posición.

### Medidas de tendencia central

Indican el valor típico o representativo de una distribución; aquel en torno al cual se agrupan los datos.

#### Moda

Es el valor más frecuente en el conjunto de datos, el que más se repite.

- Puede aplicarse a variables cualitativas o cuantitativas.
- Si hay dos valores con igual frecuencia máxima, la distribución es bimodal; si hay más, multimodal.
- Si todos los valores aparecen con igual frecuencia, no hay moda.

**Moda para datos no agrupados**

Ejemplo: Variable cualitativa: sexo → F F F F F F M M M M M M → Moda = Masculino

Ejemplo: Variable cuantitativa discreta → 12 15 13 12 14 16 12 14 14 12 14 → Moda = 12 y 14 (distribución bimodal)

**Moda para datos agrupados**

Para datos agrupados no es el valor más repetido "exacto", sino el punto dentro del intervalo más frecuente. Se usa la siguiente fórmula:

$$Moda = L_i + \frac{(fa - fa_{ant})}{(fa - fa_{ant}) + (fa - fa_{sig})} \times h$$

Donde:

- $L_i$: límite inferior del intervalo modal
- $fa$: frecuencia absoluta del intervalo modal
- $fa_{ant}$: frecuencia absoluta del intervalo anterior
- $fa_{sig}$: frecuencia absoluta del intervalo siguiente

Para identificar el intervalo modal, se busca aquel con mayor frecuencia absoluta. Si se requiere mayor precisión, se considera el que presenta la mayor densidad de frecuencia (γ), que refleja la concentración relativa por unidad de amplitud.

Ejemplo: usemos una tabla de frecuencia donde la fila señalada es la que cuenta con mayor frecuencia absoluta y mayor densidad de frecuencia (γ). Por lo tanto ya tenemos el intervalo modal. Ahora realizar los cálculos:

$$Moda = 3 + \frac{(25 - 10)}{(25-10) + (25-20)} \times 3 = 5.25$$

Moda = 5,25 meses

#### Mediana

Es el valor central (en el medio de la distribución) que divide el conjunto ordenado de datos en dos partes iguales: el 50 % de los datos está por debajo y el otro 50 % por encima.

- Si el número de datos es impar, la mediana es el valor del medio.
- Si es par, se promedian los dos valores centrales.
- En distribuciones simétricas, la media y la mediana coinciden; si hay asimetría, se separan.
- La única escala donde la mediana no se puede usar es la Nominal, ya que sus categorías no tienen un orden lógico.

Ejemplo: distribución impar → 10, 12, 13, 15, 18 → Md = 13

Ejemplo: distribución par → 10, 12, 13, 15 → $Md = \frac{12+13}{2} = 12,5$

**Mediana para datos agrupados**

En datos agrupados, no se puede identificar directamente el valor "del medio", por lo que se estima dentro del intervalo donde se acumula el 50 % de los casos.

$$Mediana = L_i + \frac{50 - fra\%_{anterior}}{fr\ del\ intervalo} \times h$$

$L_i$ = límite inferior del intervalo donde cae la mediana

**Cómo ubicar el intervalo mediano**

1. Si te dan el total (n), este se divide entre 2 y se busca en la columna de frecuencia acumulada el primer intervalo que sea igual o supere n/2 → ese es el intervalo mediano.
2. Si no te dan el total solo buscas en la tabla de frecuencia acumulada el valor que sea igual o sobrepase el 50%.

#### Media (x̄ o μ)

Es el promedio aritmético de todos los valores. Se calcula sumando todos los datos y dividiéndolos entre el número total de observaciones. Es aplicable solo a variables cuantitativas. Existen dos términos clave para distinguir la media según si se refiere al conjunto completo o a una parte de él:

**Media poblacional (μ)**

Se calcula usando todos los datos de la población, es decir, el conjunto completo de individuos.

$$\mu = \frac{\sum x_i}{N}$$

Donde: $x_i$: cada valor individual; $N$: número total de elementos en la población.

**Media muestral (x̄)**

Se calcula usando solo una muestra (una parte representativa de la población).

$$\bar{x} = \frac{\sum x_i}{n}$$

Donde: $x_i$: cada valor observado en la muestra; $n$: número de datos en la muestra.

**Media para datos no agrupados**

Cuando los datos se presentan uno por uno (sin intervalos), la media se calcula directamente. Ejemplo: 5, 5, 8, 8, 9

$$\mu / \bar{x} = \frac{5\times2 + 8\times2 + 9}{5} = 7$$

**Media para datos agrupados**

Cuando los datos están agrupados en intervalos (como clases de edad, tiempo o peso), no conocemos cada valor individual, solo cuántos casos hay en cada intervalo (frecuencia). Por eso, usamos la marca de clase como valor representativo del intervalo. La media agrupada se calcula así:

$$\mu / \bar{x} = \frac{\sum m_i\, fa_i}{n} = \sum m_i\, fr_i$$

Donde: $m_i$: marca de clase del intervalo; $N$: número total de elementos en la población; $fa_i$: frecuencia absoluta del intervalo.

Cuando calculamos una media agrupada, siempre buscamos ponderar cada marca de clase ($m_i$) según cuántos datos representa. Esa "ponderación" se puede hacer de dos maneras:

1. Contando los casos directamente → con frecuencia absoluta (fa).
2. Usando proporciones o porcentajes → con frecuencia relativa (fr).

En el fondo, las dos fórmulas hacen lo mismo: ambas pesan cada valor según su importancia dentro del total. La diferencia es solo dónde se hace la división por el total (n).

### Medidas de dispersión

Una vez entendidas las medidas de tendencia central podemos pasar a las medidas de dispersión. Estas miden cuánto se alejan los datos del valor central. Si la dispersión es baja, los valores son homogéneos; si es alta, los datos están muy separados entre sí.

#### Varianza (σ² o s²)

Mide la variabilidad promedio al cuadrado respecto a la media. Cuanto mayor es la varianza, más dispersos o heterogéneos son los valores. Si todos los datos fueran iguales, la varianza sería 0 (no hay variación).

En otras palabras, la varianza nos dice qué tan "extendidos" o "compactos" están los datos alrededor del promedio.

**Varianza en datos no agrupados**

Varianza poblacional (σ²) — conjunto de datos de todos los individuos de la población:

$$\sigma^2 = \frac{\sum (x_i - \mu)^2}{N}$$

Varianza muestral (s²) — conjunto de datos de solo una muestra de la población:

$$s^2 = \frac{\sum (x_i - \bar{x})^2}{n - 1}$$

En ambos métodos para calcular la varianza, se resta cada valor individual ($x_i$) de la media correspondiente: la media poblacional (μ) si se trata de una población completa, o la media muestral (x̄) si se trabaja con una muestra.

**Varianza en datos agrupados**

En ese caso, usamos una fórmula adaptada:

Varianza poblacional (σ²):

$$\sigma^2 = \frac{\sum (m_i - \mu)^2 \times fa_i}{N}$$

Varianza muestral (s²):

$$s^2 = \frac{\sum (m_i - \bar{x})^2 \times fa_i}{n - 1}$$

Cuando es con datos agrupados pasamos a usar la marca de clase ($m_i$) y multiplicar por la frecuencia absoluta (fa). También se puede obtener con la frecuencia relativa (fr), la estructura es la misma, solo cambia el divisor (no se divide):

$$\sigma^2 / s^2 = \sum (m_i - \mu/\bar{x})^2 \times fr_i$$

#### Desvío estándar (s o σ)

Es la raíz cuadrada de la varianza; expresa la dispersión en las mismas unidades que los datos. Cuanto mayor el desvío, más dispersos están los valores.

$$\sigma = \sqrt{\sigma^2} \qquad s = \sqrt{s^2}$$

#### Coeficiente de variación (CV)

Permite comparar la dispersión entre variables con diferentes unidades o escalas.

$$CV_{poblacion} = \frac{\sigma}{\mu} \qquad CV_{muestra} = \frac{s}{\bar{x}}$$

Como vemos en la fórmula, para calcular el Coeficiente de Variación (CV) necesitamos tener el desvío estándar y la media del conjunto de datos.

#### Rango

Es la diferencia entre el valor máximo y el mínimo.

$$R = X_{max} - X_{min}$$

### Medidas de posición

Las medidas de posición son valores que dividen un conjunto de datos ordenados en partes iguales. Nos indican dónde se ubican los datos dentro de la distribución. Son formas de ver en qué parte del grupo está un dato. Como si dijeras: "¿Estoy entre los mejores, en el medio, o entre los más bajos?"

| Tipo | Partes que divide | Ejemplos (posición) |
|---|---|---|
| Percentil (P) | 100 partes | P10 = 10%, P50 = 50%, P90 = 90% |
| Deciles (D) | 10 partes | D1 = 10%, D5 = 50%, D9 = 90% |
| Cuartiles (C) | 4 partes | Q1 = 25%, Q2 = 50%, Q3 = 75% |

## Probabilidad

La probabilidad permite estimar la posibilidad de que ocurra un evento a partir de la información disponible.

Es una situación cuyo resultado no puede predecirse con certeza, aunque todos los posibles resultados son conocidos.

- Los resultados posibles se llaman eventos o sucesos elementales.
- El conjunto de todos ellos forma el espacio muestral (Ω).

Por ejemplo, al tirar un dado, el espacio muestral es Ω = {1, 2, 3, 4, 5, 6}.

### Operaciones con eventos

**Unión (A ∪ B)**: eventos que pertenecen a "A" o a "B". Ejemplo: pacientes diabéticos o hipertensos.

**Intersección (A ∩ B)**: eventos que pertenecen a "A" y "B" simultáneamente. Ejemplo: pacientes hipertensos y obesos.

### Axiomas de la probabilidad

La probabilidad es una medida numérica (entre 0 y 1) que indica cuán posible es que ocurra un suceso. Se rige por tres principios básicos:

1. **Siempre es positiva o nula.** Ningún evento puede tener probabilidad negativa: $P(A) \geq 0$
2. **El espacio total tiene probabilidad 1.** Es decir, la probabilidad de que ocurra "algo" dentro de todas las posibilidades es 100%: $P(\Omega) = 1$
3. **Si dos sucesos son excluyentes** (no pueden ocurrir juntos), esto es porque no hay superposición entre ellos: $P(A \cup B) = P(A) + P(B)$

### Sucesos excluyentes y no excluyentes

**Excluyentes**: no pueden ocurrir al mismo tiempo.

$$P(A \cup B) = P(A) + P(B)$$

**No excluyentes**: pueden coincidir parcialmente. Se resta la intersección para no contarla 2 veces:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

### Propiedades de la probabilidad

**1. Probabilidad del complemento**

En todo experimento aleatorio, el espacio total de resultados posibles se llama Ω (omega). Si un suceso se llama "A", su complemento ($A^c$) representa la probabilidad de que ese evento no ocurra.

Ambos son excluyentes (no pueden pasar al mismo tiempo), y su unión cubre todo el espacio:

$$P(A) + P(A^c) = P(\Omega) = 1$$

Por lo tanto:

$$P(A^c) = 1 - P(A)$$

**2. Probabilidad condicional**

Expresa la probabilidad de que ocurra un evento A, dado que (ya) ocurrió B:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} \quad \text{o} \quad P(A \cap B) = P(A \mid B) \times P(B)$$

**3. Independencia de sucesos**

Dos sucesos son independientes si conocer que uno ocurrió no cambia la probabilidad del otro:

$$P(A \mid B) = P(A) \quad \text{o} \quad P(B \mid A) = P(B)$$

Cuando son independientes, la probabilidad de que ambos ocurran es:

$$P(A \cap B) = P(A) \times P(B)$$

### Fórmulas

$$P(A \cup B) = P(A) + P(B)$$

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

$$P(A^c) = 1 - P(A)$$

$$P(A \cap B) = P(A) \times P(B)$$

$$P(A \cap B) = P(A \mid B) \times P(B)$$

$$P(A) + P(A^c) = P(\Omega)$$
