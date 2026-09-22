> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 4)

# Comparación de Proporciones

Los tests de proporciones se utilizan cuando el interés está en comparar porcentajes o proporciones asociados a una variable cualitativa dicotómica (sí/no, éxito/fracaso, enfermo/sano). Existen dos situaciones clásicas: trabajar con una sola proporción o comparar dos proporciones.

## Test de proporción única

Se utiliza para comparar una proporción muestral con una proporción poblacional conocida o teórica. Permite responder preguntas del tipo: ¿La proporción observada en mi muestra es compatible con la proporción poblacional esperada?

**Proporción muestral**

$$\hat{p} = \frac{x}{n}$$

Donde x es el número de éxitos y n el tamaño muestral.

**Proporción poblacional esperada**: $p_0$

### Procedimiento de análisis

**1. Planteo de hipótesis (según la pregunta)**

- Hipótesis nula: $H_0: p = p_0$
- Hipótesis alternativa: $H_1: p \neq p_0$ (bilateral) o $H_1: p > p_0$ o $p < p_0$ (unilateral)

**2. Cálculo del error estándar (bajo H₀)**

Se utiliza la proporción poblacional teórica:

$$SE = \sqrt{\frac{p_0(1-p_0)}{n}}$$

**3. Estadístico de prueba Z**

$$Z = \frac{\hat{p} - p_0}{SE}$$

**4. Conclusión**

Se decide comparando el Z calculado con el valor crítico Z, o calculando el valor p.

## Comparación de dos proporciones

Se utiliza para evaluar si dos proporciones poblacionales, correspondientes a dos grupos independientes, son iguales o diferentes.

Responde preguntas como: ¿La proporción del evento es distinta entre dos grupos?

Ejemplos:

- Enfermedad en expuestos vs no expuestos
- Éxito de tratamiento A vs tratamiento B
- Vacunados vs no vacunados

### Procedimiento de análisis

**1. Definir los grupos**

- Grupo 1: $x_1, n_1$
- Grupo 2: $x_2, n_2$

**2. Calcular proporciones muestrales**

$$\hat{p}_1 = \frac{x_1}{n_1} \qquad \hat{p}_2 = \frac{x_2}{n_2}$$

**3. Planteo de hipótesis**

- $H_0: p_1 = p_2$
- $H_1: p_1 \neq p_2$ (bilateral) o $H_1: p_1 > p_2$ o $p_1 < p_2$ (unilateral)

**4. Calcular la proporción combinada bajo H₀**

$$\hat{p} = \frac{x_1 + x_2}{n_1 + n_2}$$

Esta es la proporción combinada que entra en la fórmula de error estándar.

**5. Calcular error estándar**

$$SE = \sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}$$

**6. Calcular el estadístico Z**

$$Z = \frac{\hat{p}_1 - \hat{p}_2}{SE}$$

**7. Conclusión**

## Fórmulas

**Proporción única**

$$\hat{p} = \frac{x}{n} \qquad p_0 = \text{prop. esperada}$$

$$SE = \sqrt{\frac{p_0(1-p_0)}{n}} \qquad Z = \frac{\hat{p} - p_0}{SE}$$

**Dos proporciones**

$$\hat{p}_1 = \frac{x_1}{n_1} \qquad \hat{p}_2 = \frac{x_2}{n_2} \qquad \hat{p} = \frac{x_1+x_2}{n_1+n_2}$$

$$SE = \sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1}+\frac{1}{n_2}\right)} \qquad Z = \frac{\hat{p}_1 - \hat{p}_2}{SE}$$
