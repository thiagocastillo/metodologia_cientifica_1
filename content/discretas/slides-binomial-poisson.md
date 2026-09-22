> Fuente: `Binomial y Poisson.pdf` (diapositivas de clase)

# Distribución de Probabilidades Discretas: Binomial y Poisson

## Criterios para elegir entre Binomial y Poisson

Si en una situación determinada tenemos los parámetros $n$ y $p$, siendo:

- $n$: tamaño muestral o número de ensayos independientes.
- $p$: probabilidad de que ocurra cierto evento.

puede tratarse de:

- **Distribución Binomial**: si $n$ es reducido ($n \leq 30$, valor arbitrario) en un muestreo con reposición.
- **Distribución Poisson**: si $n$ es muy grande ($n \to \infty$) en un muestreo con reposición y $p$ es muy pequeña ($p \to 0$).

### Tabla de escenarios según $n$ y $p$

| | $p$ (grande) | $p$ (muy pequeña) |
|---|---|---|
| $n$ (reducido) | Binomial | Binomial |
| $n$ (muy grande) | Binomial | Poisson * |

\* La mejor aproximación para utilizar la distribución de Poisson es cuando se cumple que:

$$n \to \infty \qquad p \to 0$$

### Cómo detectar si un problema se resuelve aplicando Binomial o Poisson

Debemos leer con atención la letra del ejercicio, haciendo énfasis en los datos (parámetros) y en lo que se solicita calcular.

## Distribución Binomial

### Ensayo de Bernoulli

La distribución binomial se caracteriza porque cada experimento o individuo se denomina **"ensayo de Bernoulli"**.

Cada "ensayo de Bernoulli" presenta dos posibles resultados excluyentes o disjuntos (resultado binario de una variable cualitativa) con probabilidades:

- $p$ (probabilidad de éxito)
- $q$ (probabilidad de fracaso)

siendo $p + q = 1$, dicho de otra forma:

$$q = 1 - p$$

### Condiciones para tener una distribución Binomial

Tenemos una distribución Binomial si se cumple:

- **"$n$" ensayos de Bernoulli con reposición e independientes entre sí** (reducido, arbitrariamente menor o igual que 20).
- Donde cada ensayo de Bernoulli presenta dos posibles resultados excluyentes o disjuntos (resultado dicotómico o binario) con probabilidades $p$ y $q$ en cada ensayo ($p+q=1$), complementarias entre sí.
- $p$ y $q$ se mantienen **constantes** en cada ensayo.

En el caso de tener "$n$" ensayos de Bernoulli, estos son **independientes** entre sí, y de esta manera es posible obtener un número finito y discreto de éxitos (el conjunto de posibles resultados de éxitos se denomina **espacio muestral o universo**).

### Parámetros de la distribución Binomial

Los parámetros de la distribución Binomial son $n$ y $p$:

- $n$: número de ensayos de Bernoulli o pruebas independientes.
- $p$: probabilidad de obtener un éxito en un ensayo de Bernoulli.
- $\mu$: esperanza (media) o número esperado de éxitos.
- $\sigma^2$: varianza.

Recordemos que $q = 1-p$ ($q$ es el complemento de $p$).

### Función de probabilidad

Cada resultado tiene asociado una probabilidad que se denota por la fórmula:

$$P(x) = C_x^n \times p^{(x)} \times q^{(n-x)}$$

Recordar:

$$\sum P(x) = 1 \quad \text{(universo)}$$

### Media y varianza

$$\mu = n \times p$$

$$\sigma^2 = n \times p \times q$$

### Ejemplos de situaciones con distribución Binomial

**A.** Se lanzan cuatro dados, el jugador gana si salen exactamente 3 dados con el número 6. ¿Qué probabilidad tiene el jugador de ganar?

**B.** En Uruguay existe una prevalencia de diabetes Mellitus del 9%, si tomamos al azar 20 personas, ¿cuál es la probabilidad de que por lo menos 3 sean diabéticos?

**C.** Los corticoides tienen un 70% de chances de producir eventos adversos (EA). Si tratamos 10 pacientes con corticoides, ¿cuál es la probabilidad de que a lo sumo 4 tengan EA?

### Ejemplo resuelto: eficacia de un analgésico opioide

**Situación problema:** Un nuevo medicamento —analgésico opiáceo— utilizado en pacientes con cáncer de cabeza y cuello presenta una eficacia comprobada (alivio del dolor) del 60%.

Si tratamos un paciente con cáncer de cabeza y cuello con el medicamento mencionado, ¿cuál es la probabilidad de que alivie el dolor?

$$P(\text{aliviar}) = 0,60$$

**Si tratamos 5 pacientes** con cáncer de cabeza y cuello con el medicamento mencionado, ¿cuál es la probabilidad de que exactamente dos pacientes tratados con el analgésico opiáceo alivien el dolor?

Datos del ejercicio: $n = 5$, $p(\text{Aliviar}) = 0,6$, $q(\text{No Aliviar}) = 1 - 0,6 = 0,4$, $P(x=2) = ?$

Utilizando la fórmula:

$$P(x) = C_x^n \times p^{(x)} \times q^{(n-x)}$$

$$P(x=2) = C_2^5 \times 0,6^2 \times 0,4^3 = 0,2304$$

**Interpretación:** Si tratamos cinco pacientes con cáncer de cabeza y cuello con el analgésico opiáceo en estudio, la probabilidad de que exactamente dos alivien el dolor es 0,2304 (o sea 23,04%).

**¿Cuál es la probabilidad de que por lo menos un sujeto alivie?**

En este caso sería:

$$P(x \geq 1) = P(x=1) + P(x=2) + \ldots + P(x=5)$$

Sabiendo que 1 es la probabilidad de universo y que éste se representa como:

$$\sum P(x) = 1 = P(x=0) + P(x=1) + \ldots + P(x=5) \quad \text{"universo"}$$

Entonces es posible representar:

$$P(x \geq 1) = 1 - P(x=0)$$

$$P(x=0) = C_0^5 \times 0,6^0 \times 0,4^5 = 0,01024$$

Finalmente:

$$P(x \geq 1) = 1 - 0,01024 = 0,98976$$

### Uso de la tabla binomial acumulativa

El ejercicio anterior es posible de realizarlo a través del uso de la tabla de probabilidades **acumulativas** de la distribución Binomial. Para poder utilizar esta tabla es necesario tener los parámetros $n$ y $p$, y los mismos deben aparecer en la tabla; en el caso de que no aparezca la probabilidad y/o el número de pruebas, la tabla no será de utilidad.

Ejemplo: con $n=5$ y $p=0,60$, en la tabla de probabilidad acumulada se busca la fila $x=0$ y la columna $p=0,60$, obteniéndose:

$$P(X \leq 0) = 0,0102$$

Finalmente:

$$P(X \geq 1) = 1 - 0,0102 = 0,9898$$

**Otro caso:** probabilidad de encontrar al menos 4 sujetos con alivio del dolor (con $n=5$ y $p=0,60$). Se busca en la tabla la fila $x=3$, obteniéndose:

$$P(x \leq 3) = 0,6630$$

Entonces es posible representar:

$$P(x \geq 4) = 1 - P(x \leq 3)$$

Finalmente:

$$P(x \geq 4) = 1 - 0,6630 = 0,3370$$

### Reglas para buscar en la tabla binomial acumulativa

1. $P(x \leq a) = $ directamente en tabla.
2. $P(x \geq a) = 1 - P(x \leq a-1)$
3. $P(a \leq x \leq b) = P(x \leq b) - P(x \leq a-1)$
4. $P(x=a) = P(x \leq a) - P(x \leq a-1)$

### Ejercicios resueltos

**Ejercicio 1.** Una población presenta una proporción de enfermos igual a 0,30. Se toma una muestra al azar de 10 pacientes, ¿cuál es la probabilidad de:

a) Encontrar exactamente 4 casos de la enfermedad.
b) Encontrar por lo menos 1 caso de la enfermedad.
c) Encontrar más de 9 casos.
d) Encontrar menos de 9 casos.
e) Hallar la media ($\mu$) y el desvío ($\sigma$) de la distribución.

Datos: $n=10$, $p=0,30$ ("parámetros"). Como $n$ es reducido: **distribución Binomial**.

a) $P(4) = C_4^{10} \cdot 0,3^4 \cdot (1-0,3)^{(10-4)} = \mathbf{0,200}$

b) $P(x \geq 1) = 1 - P(0) = 1 - C_0^{10} \cdot 0,3^0 \cdot (1-0,3)^{(10-0)} = \mathbf{0,972}$

c) $P(x > 9) = P(10) = C_{10}^{10} \cdot 0,3^{10} \cdot (1-0,3)^{(10-10)} = \mathbf{0,000006}$

d) $P(x < 9) = 1 - [P(9)+P(10)] = 1 - \left[C_9^{10} \cdot 0,3^9 \cdot (1-0,3)^{(10-9)} + 0,000006\right] = \mathbf{0,9999}$

e) $\mu = n \cdot p = 10 \cdot 0,3 = 3 \qquad \sigma = \sqrt{\sigma^2} = \sqrt{n \cdot p \cdot (1-p)} = \sqrt{10 \cdot 0,3 \cdot 0,7} = \mathbf{1,449}$

**Ejercicio 2.** Una enfermedad se distribuye binomialmente con media igual 8 y varianza igual 1,6.

a) ¿Cuáles son los parámetros de la distribución?
b) ¿Cuál es la probabilidad de encontrar 2 enfermos en esa muestra?
c) ¿Cuál es la probabilidad de encontrar más de 1 enfermo en esa muestra?
d) ¿Cuál es la probabilidad de encontrar más de 2 enfermos?

a) $\mu = 8$, $\sigma^2 = 1,6$, $\mu = n \cdot p = 8$, $\sigma^2 = n \cdot p \cdot (1-p) = 1,6$

$\mu = n \cdot p = 8 \quad \sigma^2 = 8 \cdot (1-p) = 1,6 \Rightarrow (1-p) = 1,6/8 = 0,2$

$(1-p) = 0,2 \Rightarrow p = 0,8 \qquad \mu = n \cdot 0,8 = 8 \Rightarrow n = 8/0,8 = 10$

**Parámetros:** $n=10$ y $p=0,8$

b) $P(2) = C_2^{10} \cdot 0,8^2 \cdot (1-0,2)^{(10-2)} = \mathbf{0,000074}$

c) $P(x>1) = P(x \geq 2) = 1 - [P(0)+P(1)] = \mathbf{0,99999}$

$P(0) = C_0^{10} \cdot 0,8^0 \cdot (1-0,2)^{10} = 0,107374$

$P(1) = C_1^{10} \cdot 0,8^1 \cdot (1-0,2)^{9} = 0,419430$

d) $P(x>2) = P(x \geq 3) = 1 - [P(0)+P(1)+P(2)] = \mathbf{0,99999}$

$P(2) = 0,000074$ (calculado en el ítem b).

## Distribución de Poisson

### Definición

Se trata de una **distribución de probabilidad discreta** que expresa, a partir de una frecuencia de ocurrencia media o promedio o esperanza, la probabilidad de que ocurra un determinado número de eventos (éxitos) durante cierto período de tiempo o espacio, asumiendo que esta ocurrencia media es constante.

En la distribución de Poisson solamente existe un único parámetro **"lambda"** ($\lambda$).

Y se cumple que:

$$\mu = \text{esperanza} = n \times p = \lambda = \sigma^2$$

### Función de probabilidad

La fórmula asociada al cálculo de probabilidades para esta distribución es:

$$P(x) = \frac{\lambda^x \cdot e^{-\lambda}}{x!}$$

siendo $x$ la frecuencia de ocurrencia del evento en estudio.

En general la distribución de Poisson es aplicable cuando $n \to \infty$ y $p \to 0$.

### Ejemplos de situaciones con distribución de Poisson

**A.** Una vacuna contra la gripe establece que el 0,2% de los pacientes presentan shock anafiláctico. Si vacunamos una ciudad entera de 4000 habitantes, ¿cuál es la probabilidad de que exactamente 10 sujetos presenten shock anafiláctico?

**B.** Se espera que un laboratorio farmacéutico produzca en promedio tres dispositivos médicos defectuosos por lote. Si se toma un lote cualquiera al azar, ¿cuál es la probabilidad de encontrar ningún dispositivo defectuoso?

**C.** Una emergencia móvil recibe en promedio 5 llamadas por hora, si tomamos dos horas seguidas al azar, ¿cuál es la probabilidad de recibir a lo sumo 7 llamadas?

### Ejemplo resuelto: fármaco con eventos adversos

**Situación problema:** Un fármaco posee una probabilidad de desarrollar eventos adversos en los pacientes que lo consumen igual a 0,1%. Asumiendo que en un muestreo aleatorio realizado en la población de consumidores de dicho fármaco, fueron elegidos 3000 pacientes, ¿cuál es la probabilidad de que exactamente un paciente desarrolle eventos adversos?

Datos: $n = 3000$, $p = 0,1\% = 0,001$, $n \times p = \lambda = 3$

$$P(1) = \frac{3^1 \cdot e^{-3}}{1!} = 0,14936$$

### Ejercicio resuelto: artículos defectuosos (combinando Binomial y Poisson)

Una fábrica produce un artículo defectuoso cada 200 producidos. Si tomamos una muestra al azar de:

a) 5 artículos, ¿cuál es la probabilidad de encontrar ningún defectuoso?
b) 10 artículos, ¿cuál es la probabilidad de encontrar 1 defectuoso?
c) 100 artículos, ¿cuál es la probabilidad de encontrar 2 defectuosos?
d) 900 artículos, ¿cuál es la probabilidad de encontrar por lo menos 2 defectuosos?

Como $p = \text{casos favorables}/\text{casos posibles}$, entonces $p = 1/200 = 0,005$.

a) Como $n=5$ (reducido) → **Binomial** con parámetros $n=5$ y $p=0,005$:

$$P(0) = C_0^5 \cdot (0,005)^0 \cdot (1-0,005)^{(5-0)} = 0,9752$$

b) $$P(1) = C_1^{10} \cdot (0,005)^1 \cdot (1-0,005)^{(10-1)} = 0,0478$$

c) Como $n=100$ y $n \cdot p = 100 \cdot 0,005 = 0,5$ → **Poisson** con $\lambda = 0,5$:

$$P(2) = \frac{0,5^2 \cdot e^{-0,5}}{2!} = 0,0758$$

d) Como $n=900$ y $n \cdot p = 900 \cdot 0,005 = 4,5$ → **Poisson** con parámetro $\lambda = 4,5$:

$$P(x \geq 2) = 1 - P(x \leq 1) = 1 - [P(0)+P(1)] = 0,9389$$

### Ejercicio resuelto: recaídas en pacientes oncológicos

En la población de pacientes oncológicos las recaídas se presentan con una media igual a 2,5 casos por mes (constante en el tiempo).

a) ¿Cuál es la probabilidad de encontrar 2 recaídas en un mes cualquiera?
b) ¿Cuál es la probabilidad de encontrar más de 1 recaída en un mes cualquiera?
c) ¿Cuál es la probabilidad de encontrar más de 2 recaídas en dos meses cualquiera?

Distribución de Poisson con $\lambda = 2,5$ recaídas/mes (constante a lo largo del tiempo).

a) $$P(2) = \frac{2,5^2 \cdot e^{-2,5}}{2!} = 0,2565$$

b) $$P(x>1) = 1 - [P(0)+P(1)] = 0,7127$$

c) $\lambda = 5$ / dos meses:

$$P(x>2) = 1 - [P(0)+P(1)+P(2)] = 1 - 0,1247 = 0,8753$$

### Reglas para buscar en la tabla Poisson acumulativa

(Igual que en Binomial)

1. $P(x \leq a) = $ directamente en tabla.
2. $P(x \geq a) = 1 - P(x \leq a-1)$
3. $P(a \leq x \leq b) = P(x \leq b) - P(x \leq a-1)$
4. $P(x=a) = P(x \leq a) - P(x \leq a-1)$
