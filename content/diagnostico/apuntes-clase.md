> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 3)

# Procedimiento Diagnóstico

El procedimiento diagnóstico busca identificar una enfermedad mediante la integración de información clínica y pruebas complementarias.

Se basa en tres fuentes principales: interrogatorio (síntomas, antecedentes y factores de riesgo), examen físico (signos clínicos) y pruebas paraclínicas solicitadas según los diagnósticos presuntivos.

Una buena prueba diagnóstica debe ser:

- Válida internamente: distingue bien enfermos de sanos (sensibilidad y especificidad).
- Reproducible: entrega resultados similares al repetirse en las mismas condiciones.
- Válida externamente o segura: sus resultados predicen correctamente la realidad del paciente (VPP y VPN), valores que dependen de la prevalencia de la enfermedad.

El criterio diagnóstico define cuándo una persona se considera enferma. Puede basarse en un gold standard o en la combinación de varias pruebas positivas, según la enfermedad.

## Validez interna

En una prueba diagnóstica dicotómica, cada individuo se clasifica como enfermo o sano según el resultado del test (positivo o negativo). Esta clasificación se representa mediante una tabla 2×2, que cruza el estado real del paciente con el resultado del test.

| Condición real | Test positivo (+) | Test negativo (−) |
|---|---|---|
| Enfermo | Verdadero positivo (VP) | Falso negativo (FN) |
| Sano | Falso positivo (FP) | Verdadero negativo (VN) |

Los verdaderos positivos y verdaderos negativos corresponden a clasificaciones correctas, mientras que los falsos positivos y falsos negativos reflejan errores de la prueba.

La validez interna expresa qué tan bien el test distingue entre enfermos y sanos y se evalúa mediante dos indicadores fundamentales: sensibilidad y especificidad.

$$Sensibilidad = \frac{VP}{VP + FN} \qquad Especificidad = \frac{VN}{VN + FP}$$

### Coeficientes de error

- **Coeficiente de falso positivo (α)**: probabilidad de que una persona sana sea clasificada erróneamente como positiva por el test.
- **Coeficiente de falso negativo (β)**: probabilidad de que una persona enferma sea clasificada erróneamente como negativa por el test.

Ambos coeficientes cuantifican los errores diagnósticos y son complementarios de la especificidad (α) y la sensibilidad (β), respectivamente.

$$\alpha = \frac{FP}{FP + VN} = 1 - Especificidad$$

$$\beta = \frac{FN}{FN + VP} = 1 - Sensibilidad$$

Cuanto menores sean α y β, mayor será la confiabilidad del test.

### Razones de verosimilitud (Likelihood Ratios, LR)

Las razones de verosimilitud integran la sensibilidad y la especificidad en un único indicador y permiten estimar cuánto cambia la probabilidad de enfermedad luego de conocer el resultado de un test. En esencia, comparan cómo se comporta la prueba en enfermos versus sanos.

- **Razón de verosimilitud positiva (LR+)**: expresa cuántas veces es más probable obtener un resultado positivo en un enfermo que en un sano.
- **Razón de verosimilitud negativa (LR−)**: expresa cuántas veces es más probable obtener un resultado negativo en un enfermo que en un sano.

$$LR+ = \frac{Sensibilidad}{\alpha} \qquad LR- = \frac{\beta}{Especificidad}$$

Así, las LR cuantifican la utilidad clínica del test:

- LR+ alta → aumenta notablemente la probabilidad de enfermedad (ayuda a confirmar).
- LR− baja → reduce marcadamente la probabilidad de enfermedad (ayuda a descartar).

### Probabilidad a priori y a posteriori

Todo paciente tiene una probabilidad a priori de enfermedad antes del test, basada en la clínica y los antecedentes. Tras realizar una prueba diagnóstica, esa estimación se actualiza y se obtiene la probabilidad a posteriori, que refleja mejor la situación real.

Este cambio se realiza mediante las razones de verosimilitud (LR), que combinan la información previa del paciente con la precisión del test. Para aplicarlas, la probabilidad se transforma en odds, se ajusta con la LR y luego se reconvierte en probabilidad.

## Validez externa

Mientras que la sensibilidad y la especificidad evalúan la validez interna de una prueba (su capacidad para detectar enfermos y descartar sanos), la validez externa indica qué tan útiles son los resultados en la práctica clínica, es decir, qué tan bien reflejan la situación real del paciente.

En términos simples, la validez externa responde a dos preguntas clave: si el test es positivo, ¿cuál es la probabilidad de que el paciente esté realmente enfermo? Si el test es negativo, ¿cuál es la probabilidad de que esté realmente sano?

- **Valor Predictivo Positivo (VPP)**: es la probabilidad de enfermedad en una persona con resultado positivo.
- **Valor Predictivo Negativo (VPN)**: es la probabilidad de salud en una persona con resultado negativo.

$$VPP = \frac{VP}{VP + FP} \qquad VPN = \frac{VN}{VN + FN}$$

Los valores predictivos dependen de la prevalencia de la enfermedad en la población:

- Mayor prevalencia → aumenta el VPP (los positivos son más confiables).
- Menor prevalencia → aumenta el VPN (los negativos son más confiables).

### Teorema de Bayes

El teorema de Bayes vincula sensibilidad, especificidad y prevalencia, y permite calcular los valores predictivos y comprender cómo el contexto poblacional modifica la utilidad clínica de un test.

$$VPP = \frac{Sensibilidad \times Prevalencia}{(Sensibilidad \times Prevalencia) + (\alpha \times (1 - Prevalencia))}$$

$$VPN = \frac{Especificidad \times (1 - Prevalencia)}{(Especificidad \times (1 - Prevalencia)) + (\beta \times Prevalencia)}$$

## Fórmulas

$$Sensibilidad = \frac{P(\text{verdadero positivo})}{P(\text{sujeto enfermo})} \qquad Especificidad = \frac{P(\text{verdadero negativo})}{P(\text{sujeto sano})}$$

$$\alpha = \frac{FP}{FP+VN} = 1-Esp. \qquad \beta = \frac{FN}{FN+VP} = 1-Sens.$$

$$LR+ = \frac{Sensibilidad}{\alpha} \qquad LR- = \frac{\beta}{Especificidad}$$

$$VPP = \frac{VP}{VP+FP} \qquad VPN = \frac{VN}{VN+FN}$$

$$VPP = \frac{Sensibilidad \times Prevalencia}{(Sensibilidad \times Prevalencia) + (\alpha \times (1 - Prevalencia))}$$

$$VPN = \frac{Especificidad \times (1 - Prevalencia)}{(Especificidad \times (1 - Prevalencia)) + (\beta \times Prevalencia)}$$
