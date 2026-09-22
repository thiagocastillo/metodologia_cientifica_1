> Fuente: `2.1.Distribucion_Poisson (1).pdf`

# Distribución de Poisson

*Material de apoyo al Ciclo de Metodología I — Métodos Cuantitativos. Lic. Fiorella Cavalleri.*

## Introducción

El presente trabajo refiere al modelo de probabilidad que lleva el nombre del matemático francés del siglo XIX, Siméon Denis Poisson, que fue el primero en describirla.

La distribución de probabilidad de Poisson, al igual que la de Bernoulli, la Binomial, entre otras, forma parte del conjunto de modelos discretos de probabilidad.

### ¿Cuál es el experimento aleatorio que puede dar lugar a este modelo de probabilidad?

En este modelo la variable aleatoria "X" representa el número de eventos independientes que ocurren a una velocidad constante $\eta$ (eta) en el tiempo o espacio.

Por ejemplo $X$ = "Cantidad de ambulancias que llegan a la puerta de una emergencia en una hora".

La distribución de Poisson es el modelo de probabilidad empleado para estudiar problemas de líneas de espera. Pero además es una muy buena aproximación a la función de probabilidad Binomial cuando $p$ es pequeño y $n$ es grande.

Si se define una variable aleatoria $X$ que representa el número de eventos independientes que ocurren a una velocidad constante en el tiempo o espacio, se dice que la variable aleatoria $X$ sigue una distribución de Poisson y su función de probabilidad es:

$$P(X=x) = \frac{e^{-\eta h}(\eta h)^x}{x!}\ ;\quad \forall x=0,1,2,\ldots;\ \eta>0$$

Donde:

- $X$ = Variable aleatoria "número de eventos"
- $x$ = número (cantidad de eventos, para los cuales quiero calcular la probabilidad)
- $\eta$ = número de eventos por unidad de tiempo
- $h$ = tiempo o espacio considerado en el experimento
- $\lambda = \eta h$, es el parámetro de la distribución

El parámetro de la distribución de Poisson es $\lambda$, que representa el número promedio de ocurrencias del evento aleatorio en un intervalo de longitud $h$.

Nótese que, dado que la variable aleatoria $X$ representa el número de eventos que ocurren en un intervalo de tiempo o espacio, en dicho intervalo podrán ocurrir 0,1,2,3…. hasta infinitos eventos, por lo tanto $X$ es una variable aleatoria discreta.

Así como vimos en las anteriores distribuciones, la distribución se puede caracterizar por su esperanza y su varianza.

La esperanza matemática de la variable aleatoria $X$ es:

$$E(X) = \lambda$$

que representa el número esperado de ocurrencias en un intervalo de longitud $h$.

La varianza de la variable $X$ también es $\lambda$:

$$V(X) = \lambda$$

Por lo que vemos que una característica particular de esta distribución es que su media (o esperanza) y su varianza coinciden.

### Resumiendo

La probabilidad de $x$ ocurrencias en un intervalo de tiempo, volumen, área, etc., para una variable aleatoria $X$, donde $\lambda$ es el promedio (valor esperado) de ocurrencias por unidad de tiempo, volumen, área, etc., es:

$$P(X=x) = \frac{e^{-\lambda}(\lambda)^x}{x!}\ ;\quad \forall x=0,1,2,\ldots;\ \lambda>0$$

Donde $\lambda=\eta h$ es el parámetro de la distribución.

## Experimento de Poisson

La distribución de probabilidad de Poisson describe un experimento que consiste en contar la cantidad de ocurrencias de un cierto evento en un intervalo de longitud $h$, el cual ocurre en promedio $\lambda$ veces en dicho intervalo. Los supuestos del modelo son:

1. El número de ocurrencias que suceden en dos intervalos que no se solapan son variables aleatorias independientes.
2. La probabilidad de que se produzcan dos o más ocurrencias en un intervalo suficientemente breve es nula.
3. La probabilidad de que se produzca exactamente una ocurrencia en un intervalo suficientemente corto es proporcional a la longitud del intervalo.

### Ejemplo 1

Supóngase que en Estados Unidos la cantidad de casos de tétano esperados por mes durante 1989 fue de 4,5. Suponga que el número de casos por mes sigue una distribución de Poisson.

¿Cuál es la probabilidad de que se informe solo un caso de tétano durante un mes determinado? (adaptado de Pagano y Gauvreau, ejercicio 14, pág. 193).

En este caso la variable aleatoria es $X$ = "Cantidad de casos de tétano en un mes". Sabemos que en promedio ocurren 4,5 casos por mes, entonces $\eta=4{,}5$ casos en un mes, $h=1$ mes, por lo tanto el parámetro de la distribución vale:

$$\lambda = \eta h = 4{,}5 \times 1 = 4{,}5\ \text{casos}$$

Obsérvese que la cantidad media de casos de tétano esperados en un mes corresponde a $E(X)=4{,}5$.

Interesa calcular la probabilidad de que la variable aleatoria tome el valor 1:

$$P(X=1,\lambda=4{,}5) = \frac{e^{-\lambda}(\lambda)^x}{x!} = \frac{e^{-4{,}5}(4{,}5)^1}{1!} = e^{-4{,}5}(4{,}5) = 0{,}04999$$

La probabilidad de ocurrencia de un caso de tétano en un mes cualquiera, siendo que en promedio ocurren 4,5 por mes, es de aproximadamente 0,05 o 5%.

### Ejemplo 2

En una clínica, en promedio se atienden 16 pacientes cada 4 horas.

**a) ¿Cuál es la probabilidad de que en 30 minutos se atiendan menos de 3 personas?**

Para responder a la pregunta a), debe observarse que se pregunta por la ocurrencia del evento en media hora, por lo tanto se debe definir la variable aleatoria:

$X$ = "Cantidad de pacientes que se atienden en una clínica en media hora"

Para este problema los datos están expresados en la unidad de tiempo "4 hrs.", teniendo como información la cantidad de eventos en 4 horas. Como la pregunta se refiere a otro intervalo de tiempo, debemos convertir los datos a la misma unidad de tal manera de obtener la cantidad promedio de casos en 30 minutos, por lo que expresamos:

$$\eta = \text{número de eventos en 4hrs} = 16\ \text{pacientes}/4\text{hrs} = 16\ \text{pac}/240\text{min} = \frac{16}{240}\ \text{pac/min}$$

$$h = \text{tiempo considerado en el experimento} = 30\ \text{minutos}$$

$$\lambda = \eta h = \frac{16}{240} \times 30 = 2\ \text{pacientes (en 30 minutos)}$$

Por tanto, $X \approx \text{Poisson}(\lambda=2)$.

Interesa calcular la probabilidad para "menos de 3 personas en media hora", entonces:

$$P(X<3) = P(X\le2) = P(X=0)+P(X=1)+P(X=2)$$

$$P(X\le2) = \frac{e^{-2}(2)^0}{0!} + \frac{e^{-2}(2)^1}{1!} + \frac{e^{-2}(2)^2}{2!} = 0{,}1353+0{,}2707+0{,}2707 = 0{,}6767$$

**b) ¿Cuál es la probabilidad de que en 180 minutos (3 hrs.) se atiendan 10 pacientes?**

Se define $X$ = "Cantidad de pacientes que se atienden en una clínica en 180 minutos" o $X$ = "Cantidad de pacientes que se atienden en 3 horas":

$$\eta = \text{número de eventos por unidad de tiempo} = 16\ \text{pacientes}/4\text{hrs} = 4\ \text{pacientes/hr}$$

$$h = \text{tiempo considerado en el experimento} = 3\ \text{horas}$$

$$\lambda = \eta h = 4 \times 3 = 12\ \text{pacientes (para el intervalo de 3 horas)}$$

Por tanto $X \approx \text{Poisson}(\lambda=12)$.

La probabilidad a calcular es:

$$P(X=10) = \frac{e^{-12}(12)^{10}}{10!} = 0{,}1048$$

Entonces la probabilidad de atender 10 pacientes en 3 horas, cuando en promedio se atienden 4 por hora, es de 0,1048 o 10,48%.

Si se hubiera expresado en minutos, llegaríamos al mismo resultado:

$$\eta = \text{número de eventos por unidad de tiempo} = 16\ \text{pacientes}/4\text{hrs} = \frac{16}{240}\ \text{pac/min}$$

$$h = \text{tiempo considerado en el experimento} = 180\ \text{minutos}$$

$$\lambda = \eta h = \frac{16}{240} \times 180 = 12\ \text{pacientes (para el intervalo de 180 minutos)}$$

Por tanto $X \approx \text{Poisson}(\lambda=12)$, y se obtiene la misma $P(X=10)$.

### Ejemplo 3

Cierta enfermedad tiene una probabilidad muy baja de ocurrir, $p=1/100.000$. Calcular la probabilidad de que en una ciudad con 500.000 habitantes haya más de 3 personas con dicha enfermedad. Calcular el número esperado de habitantes que la padecen.

En este caso la variable aleatoria sería $X$ = "Cantidad de personas con la enfermedad en una ciudad de 500000 personas", considerando que cada persona es independiente de las demás y que la probabilidad de enfermar es la misma. Podríamos decir que:

$$X \approx \text{Binomial}(p=0{,}00001;\ n=500000)$$

Sin embargo, dado que estamos ante un evento "raro" (su probabilidad de ocurrencia es baja) y que el $n$ es grande, es en estas condiciones razonable aproximar los valores de la distribución Binomial a los de una distribución de Poisson.

**Observación**: en este curso se considerará "$n$ grande" cuando sea mayor a 30, y "$p$ pequeño" cuando sea menor o igual a 0,1.

Por tanto la variable aleatoria $X$ se modelizará con una distribución aproximada de Poisson:

$$X \underset{aprox}{\approx} \text{POISSON}(\lambda = np = 0{,}00001 \times 500000 = 5)$$

Por lo tanto la probabilidad de encontrar más de 3 personas con la enfermedad se resuelve de la siguiente manera:

$$P(X>3) = 1-P(X\le3) = 1-[P(X=0)+P(X=1)+P(X=2)+P(X=3)]$$

$$= 1-\left[\frac{e^{-5}5^0}{0!}+\frac{e^{-5}5^1}{1!}+\frac{e^{-5}5^2}{2!}+\frac{e^{-5}5^3}{3!}\right] = 1-0{,}2650 = 0{,}735$$

**Recordar que**: $e^0=1$, $x^0=1$, $0!=1$.

Al igual que ocurría con la distribución Binomial, para la distribución de Poisson también hay tablas de distribución acumulada; la misma funciona de la siguiente manera (ver Anexo):

| x | λ=5 | Probabilidad acumulada |
| --- | --- | --- |
| 0 | 0,0067 | P(X=0) |
| 1 | 0,0404 | P(X=0)+P(X=1) |
| 2 | 0,1247 | P(X=0)+P(X=1)+P(X=2) |
| 3 | 0,2650 | P(X=0)+P(X=1)+P(X=2)+P(X=3) |
| 4 | 0,4405 | P(X=0)+P(X=1)+P(X=2)+P(X=3)+P(X=4) |

Como puede observarse, la tabla para los distintos valores del parámetro acumula valores de probabilidad comenzando desde la probabilidad de que $X$ tome el valor 0. La tabla completa para distintos valores de $\lambda$ y $x$ se encuentra en el Anexo.

Respecto al valor esperado de habitantes que padecen la enfermedad, corresponde a la esperanza de la variable aleatoria $X$, a saber: $E(X)=5$.

## Referencias Bibliográficas

1. Novales A. Estadística y Econometría. España. 1998.
2. Pagano M. et. al. Fundamentos de Bioestadística. México. 2003.
3. Ketzoian C. et. al. Estadística Médica. Uruguay. 2004.
4. Canavos G. Probabilidad y Estadística. México. 1996.
5. Álvarez R. Estadística aplicada a las ciencias de la salud. España. 2007.

## Anexo

*(El documento original incluye en anexo la Tabla de Distribución de Poisson Acumulada — Fuente: Ref. 3.)*
