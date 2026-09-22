> Fuente: `3.1. Aclaraciones sobre estimación de proporciones.pdf`

# Aclaraciones sobre Estimación de Proporciones

*Fiorella Cavalleri.*

Si definimos $X$ como una variable aleatoria que solo puede tomar dos valores posibles, 1 y 0, donde 1 representa a quienes tienen la característica de interés y 0 a los que no la tienen, asignándole una probabilidad de $p$ y $1-p$ a cada uno:

$$X \sim Bernoulli(p)$$

| X | Probabilidad |
| --- | --- |
| 1 | $p$ |
| 0 | $1-p$ |

$$E(X) = 1\cdot p + 0\cdot(1-p) = p$$

$$V(X) = p\cdot(1-p)$$

$X$, por ejemplo, podría ser la variable $X=$"Diabetes", donde vale 1 si tiene la enfermedad y 0 si no la tiene.

Si se define la variable $Y=$"cantidad de diabéticos en $n$ pruebas", si cada individuo es independiente y la probabilidad de ser diabético es constante, entonces:

$$Y = \sum_{i=1}^{n} X_i \sim Binomial(n,p)$$

Tal que:

$$E(Y) = np \qquad V(Y) = np(1-p)$$

Obsérvese que para determinada relación entre $n$ y $p$, es decir:

$$np>5 \quad \text{y} \quad n(1-p)>5$$

la distribución Binomial se aproxima a una distribución normal, es decir:

$$Y \underset{aprox}{\approx} N\big(np;\ np(1-p)\big)$$

Si se define como parámetro de interés $p$, que será una proporción poblacional, tal que se define proporción como un cociente en el que en el numerador están todos los casos con las características de interés y en el denominador la población (los que tienen la característica de interés y los que no).

Ahora bien, siguiendo con el ejemplo de los diabéticos, la proporción de diabéticos será:

$$p = \frac{\text{total\_de\_diabéticos}}{\text{población\_total (diabéticos y no diabéticos)}}$$

Pero ocurre que este parámetro es desconocido, y por tanto el interés se centra en poder estimarlo, y para ello se debe definir un estimador:

$$\hat{P} = \frac{Y}{n} = \frac{\sum_{i=1}^{n} X_i}{n}$$

Por lo tanto tenemos definido un estimador para $p$ que es una variable aleatoria Binomial sobre $n$. Obsérvese que:

$$E(\hat{P}) = E\left(\frac{Y}{n}\right) = \frac{1}{n}E(Y) = \frac{1}{n}np = p$$

$$V(\hat{P}) = V\left(\frac{Y}{n}\right) = \frac{1}{n^2}V(Y) = \frac{1}{n^2}np(1-p) = \frac{p(1-p)}{n}$$

Puede demostrarse que $\hat{P}$ distribuye aproximadamente normal con los parámetros antes mencionados, es decir:

$$\hat{P} \underset{aprox}{\approx} N\left(p;\ \frac{p(1-p)}{n}\right)$$

Teniendo definido el estadístico para $p$, si se extrajera una muestra de tamaño $n$, supongamos $n=100$, y de esos 100 a cada uno le preguntáramos si tiene diabetes y anotáramos 1 si tiene la enfermedad y 0 si no la tiene, entonces podríamos realizar una estimación puntual para $p$ (que es la proporción de diabéticos). Supongamos que de los 100, 7 respondieron tener diabetes:

$$\hat{p} = \frac{\sum_{i=1}^{100} x_i}{100} = \frac{7}{100} = 0{,}07$$

Si ahora quisiéramos acompañar la estimación puntual para $p$ con un intervalo de confianza, entonces deberíamos preguntarnos por:

$$P(a<P<b) = 1-\alpha$$

Para poder resolver esta probabilidad, primero debemos observar que la variable aleatoria $\hat{P}$ distribuye aproximadamente como una Normal (si $np>5$ y $n(1-p)>5$); si es válida la aproximación entonces:

$$\hat{P} \underset{aprox}{\approx} Normal\left(p;\ \frac{p(1-p)}{n}\right)$$

Como no conozco $p$, entonces $\sigma$ lo aproximo por:

$$\sqrt{\frac{p(1-p)}{n}}$$

Por tanto:

$$Z = \frac{\hat{P}-p}{\sqrt{\dfrac{p(1-p)}{n}}} \sim N(0;1)$$

Luego de algunas cuentas, se llega a que un intervalo de confianza para $p$ al $(1-\alpha)\%$ de confianza será de la forma:

$$\hat{p} \pm Z_{\alpha/2}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$
