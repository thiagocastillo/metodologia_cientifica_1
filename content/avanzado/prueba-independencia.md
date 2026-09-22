> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 5)

# Prueba de Independencia

La prueba de independencia se utiliza para determinar si dos variables cualitativas están relacionadas entre sí o si son independientes.

Para analizar esta relación, la información se organiza en una tabla de contingencia, donde se comparan las frecuencias observadas con las frecuencias esperadas bajo el supuesto de independencia.

## Procedimiento general

**1. Identificar las frecuencias observadas (O)**

Corresponden a los valores reales obtenidos en cada celda de la tabla.

**2. Calcular las frecuencias esperadas (E)**

Representan los valores que se esperarían si las variables fueran independientes.

**3. Elegir la prueba estadística adecuada**

- Si las frecuencias esperadas son suficientes (en general ≥ 5): Chi-cuadrado (χ²) de independencia.
- Si hay frecuencias esperadas pequeñas (especialmente en tablas 2×2): Test exacto de Fisher.

Las pruebas de independencia comparan lo que realmente ocurrió (O) con lo que se esperaría (E) si las variables fueran independientes.

- Si O ≈ E → es compatible con independencia
- Si O es muy distinto de E → existe asociación entre las variables

### Tabla de contingencia

| | Evento SÍ | Evento NO | TOTAL |
|---|---|---|---|
| Expuesto | | | |
| NO expuesto | | | |
| TOTAL | | | |

**Independencia**: la distribución de una variable no cambia según la otra.

**Asociación**: la frecuencia de una categoría depende de la otra variable.

Importante: la prueba detecta asociación, no demuestra causalidad.

### Frecuencias esperadas (E)

Las frecuencias esperadas representan los valores que se esperarían observar si las variables fueran independientes.

$$E = \frac{(\text{total fila})(\text{total columna})}{\text{Total general}}$$

Una vez calculadas, se construye la tabla con valores esperados para compararla con la tabla de valores observados.

## Prueba Chi-cuadrado (χ²) de independencia

Se utiliza cuando las frecuencias esperadas son suficientemente grandes. La prueba compara las frecuencias observadas (O) con las frecuencias esperadas (E) mediante el estadístico:

$$\chi^2 = \sum \frac{(O-E)^2}{E}$$

El resultado es un valor χ² observado, que no se interpreta directamente, sino que debe compararse utilizando la tabla de la distribución Chi-cuadrado, ya que esta prueba tiene su propia distribución (no normal ni t).

### Conclusión de la prueba χ²

**Valor crítico**: el valor crítico de χ² depende de los grados de libertad (gl):

$$gl = (\text{filas}-1)(\text{columnas}-1)$$

Ejemplos:

- Tabla 2×2 → gl = 1
- Tabla 3×3 → gl = 4

Para α = 0,05 y gl = 1, $\chi^2_{crítico} = 3,84$

Si $\chi^2_{obs} > \chi^2_{crítico}$ → se rechaza la hipótesis de independencia → hay asociación.

**Valor-p**: se busca el valor $\chi^2_{obs}$ en la tabla de χ² y se identifica el p correspondiente.

- Cuanto mayor es $\chi^2_{obs}$, menor es el valor p.
- Si p < α, se concluye que hay asociación entre las variables.

### Reglas para usar Chi-cuadrado

- Todas las frecuencias esperadas deben ser ≥ 1.
- Al menos 80% de las frecuencias esperadas ≥ 5.
- En tablas 2×2, esto implica que las 4 celdas deben cumplir el criterio.

Si alguna celda tiene FE < 5, se debe considerar el test exacto de Fisher.

### Corrección de Yates (tablas 2×2)

Se aplica solo en tablas 2×2, cuando las frecuencias esperadas son bajas (aproximadamente < 10).

$$\chi^2 = \sum \frac{(|O-E| - 0.5)^2}{E}$$

Es una corrección más conservadora, que reduce el riesgo de rechazar incorrectamente la hipótesis nula.

## Test exacto de Fisher

Se utiliza para evaluar la asociación entre dos variables cualitativas cuando alguna frecuencia esperada es menor que 5.

- Fisher calcula la probabilidad exacta de obtener la tabla observada (y otras más extremas) bajo el supuesto de independencia.
- No depende de aproximaciones, por lo que es adecuado para muestras pequeñas.

## Ejercicio de ejemplo

**Se estudia si fumar se asocia con tos crónica.**

Tabla observada (O)

| | Tos SÍ | Tos NO | TOTAL |
|---|---|---|---|
| Fuma (E) | 40 | 60 | 100 |
| No fuma (NE) | 20 | 80 | 100 |
| TOTAL | 60 | 140 | 200 |

**Calcular esperadas (E)**

$$E_{Fuma,\,Tos Si} = \frac{100 \times 60}{200} = 30 \qquad E_{Fuma,\,Tos No} = \frac{100 \times 140}{200} = 70$$

$$E_{NoFuma,\,Tos Si} = \frac{100 \times 60}{200} = 30 \qquad E_{NoFuma,\,Tos No} = \frac{100 \times 140}{200} = 70$$

Tabla esperada (E)

| | Tos SÍ | Tos NO |
|---|---|---|
| Fuma (E) | 30 | 70 |
| No fuma (NE) | 30 | 70 |

**Calcular χ²**

$$\chi^2 = \sum \frac{(O-E)^2}{E} = \frac{(40-30)^2}{30} + \frac{(60-70)^2}{70} + \frac{(20-30)^2}{30} + \frac{(80-70)^2}{70}$$

Cálculo por celda:

$$(40-30)^2/30 = 100/30 = 3.333$$
$$(60-70)^2/70 = 100/70 = 1.429$$
$$(20-30)^2/30 = 100/30 = 3.333$$
$$(80-70)^2/70 = 100/70 = 1.429$$

Suma:

$$\chi^2_{obs} = 3.333 + 1.429 + 3.333 + 1.429 = 9.524$$

**Decisión con tabla (gl=1, α=0,05)**

$$\chi^2_{obs} = 9.524 > 3.84 \Rightarrow \text{rechazo } H_0 \Rightarrow \text{hay asociación}$$

## Fórmulas

$$E = \frac{(\text{total fila})(\text{total columna})}{\text{Total general}}$$

$$\chi^2 = \sum \frac{(O-E)^2}{E} \qquad \chi^2_{Yates} = \sum \frac{(|O-E|-0.5)^2}{E}$$

$$gl = (\text{filas}-1)(\text{columnas}-1)$$

Tabla 2×2 → gl = 1; Tabla 3×3 → gl = 4
