> Fuente: `DOC-20260703-WA0055.pdf` — apuntes de clase, Métodos Cuantitativos (Semana 1)

# Distribuciones Discretas

Describen variables que solo pueden tomar valores aislados (0,1,2,…). Se utilizan para contar sucesos individuales. Ejemplo: número de llamadas recibidas, cantidad de mutaciones o eventos que ocurren en un intervalo.

Las principales son:

- **Binomial**: cuenta éxitos en n ensayos con probabilidad fija.
- **Poisson**: modela eventos raros o poco frecuentes en un intervalo de tiempo o espacio.

## Distribución Binomial

Modelo que calcula la probabilidad de obtener un número específico de éxitos en una serie de ensayos independientes, donde cada intento tiene dos resultados posibles (éxito o fracaso) y la probabilidad de éxito permanece constante en todos ellos.

La fórmula general de la distribución binomial es:

$$P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}$$

Donde:

- $n$: número total de ensayos
- $x$: número de éxitos
- $p$: probabilidad de éxito en un ensayo
- $\binom{n}{x}$ coeficiente binomial: número de combinaciones posibles de x éxitos en n ensayos. Calculado de la siguiente manera:

$$\binom{n}{x} = \frac{n!}{x!(n-x)!}$$

! = factorial, operación que multiplica un número entero positivo por todos los enteros que le anteceden hasta llegar a 1. Ejemplo: $5! = 5 \times 4 \times 3 \times 2 \times 1$.

### Ejercicios de ejemplo

**Si tenés 3 hijos y la probabilidad de que uno tenga ojos azules es 0.25, ¿cuál es la probabilidad de que exactamente 2 los tengan?**

$$P(X = 2) = \binom{3}{2}(0.25)^2 \times (0.75)^1 = 0.140625\ (14.06\%)$$

**Un test detecta correctamente a un paciente 70% de las veces. Si se hacen 3 repeticiones, ¿cuál es la probabilidad de que el resultado sea positivo al menos 2 veces?**

La expresión "al menos" significa "como mínimo". En este caso, se pide que el resultado sea positivo dos veces o más. Por lo tanto, debemos sumar las probabilidades de obtener exactamente 2 positivos y de obtener exactamente 3 positivos:

$$P(\geq 2) = P(2) + P(3)$$

$$P(X = 2) = \binom{3}{2}(0.7)^2 \times (0.3)^1 = 0.441$$

$$P(X = 3) = \binom{3}{3}(0.7)^3 \times (0.3)^0 = 0.343$$

$$P(\geq 2) = 0.441 + 0.343 = 0.784$$

Es decir, 78.4% de que el test dé resultado positivo al menos 2 veces en 3 repeticiones.

**En una vacuna con eficacia 80%, aplicás 5 dosis. ¿Cuál es la probabilidad de que a lo sumo 1 falle?**

La expresión "a lo sumo" significa "como máximo". En este caso, pedir que falle a lo sumo 1 dosis implica considerar las situaciones en que no falla ninguna (0 fallos) o falla exactamente una (1 fallo):

$$P(X \leq 1) = P(0) + P(1)$$

$$P(X = 0) = \binom{5}{0}(0.20)^0 \times (0.80)^5 = 0.32768$$

$$P(X = 1) = \binom{5}{1}(0.7)^1 \times (0.3)^4 = 0.4096$$

$$P(X \leq 1) = 0.32768 + 0.4096 = 0.73728$$

Aproximadamente 73.7% de que falle 0 o 1 de las 5 dosis.

**Probabilidad de que un fármaco cause efectos adversos es 0.05. Si se administra a 10 pacientes, ¿cuál es la probabilidad de que al menos uno tenga efectos adversos?**

La expresión "al menos uno" significa "como mínimo uno". En este caso, se pide que al menos un paciente presente efectos adversos. Esto equivale a calcular la probabilidad complementaria de que no ocurra ninguno:

$$P(\geq 1) = 1 - P(0)$$

"Al menos 1" incluye todas estas posibilidades: 1 paciente con efectos adversos, 2 pacientes, 3 pacientes … hasta 10 pacientes. Es decir:

$$P(\geq 1) = P(1) + P(2) + P(3) + \cdots + P(10)$$

Calcular "al menos 1" exige sumar muchos términos, lo cual complica el proceso. En lugar de eso, se aprovecha que todos esos escenarios representan el complemento del único caso sin efectos adversos, P(0). Por lo tanto, resulta más eficiente obtener la probabilidad de al menos un caso como $1 - P(0)$:

$$P(X = 0) = \binom{10}{0}(0.05)^0 \times (0.95)^{10} = 0.59874$$

$$P(\geq 1) = 1 - 0.59874 = 0.40126$$

Aproximadamente 40.1% de que al menos un paciente presente efectos adversos.

### Parámetros clave de la distribución binomial

**Media esperada**

$$E(X) = n \times p$$

Indica cuántos éxitos se espera obtener, en promedio, si el experimento se repitiera muchas veces.

**Varianza**

$$Var(X) = n \times p \times (1-p)$$

Mide cuánto varían los resultados respecto al valor esperado. Es mayor cuando p está cerca de 0.5 y menor cuando p está muy cerca de 0 o de 1.

### Tablas de la distribución binomial

Las tablas binomiales son herramientas que permiten consultar rápidamente probabilidades acumuladas o exactas sin tener que calcularlas una por una.

- Los valores posibles de n (número de ensayos).
- Distintos valores de p (probabilidad de éxito).
- Y para cada combinación de n y p, los valores acumulados de $P(X \leq x)$.

Es decir, las tablas muestran la probabilidad de obtener hasta x éxitos (no solo exactamente x). Por eso, al consultarlas debemos distinguir si necesitamos una probabilidad puntual (exactamente x) o una probabilidad acumulada (X ≤ x).

La probabilidad puntual se obtiene mediante:

$$P(X = x) = P(X \leq x) - P(X \leq x-1)$$

Ejemplo: si quiero el valor exacto de $P(X = 4) = P(X \leq 4) - P(X \leq 3)$

### Ejercicios de ejemplo

En una población, 1 de cada 5 niños tiene asma, es decir, la probabilidad de que un niño tenga asma es 0.2, y la de no tenerla es 0.8.

**¿Cuál es la probabilidad de que exactamente 2 niños tengan asma?**

$$P(X = 2) = P(X \leq 2) - P(X \leq 1) = 0.9421 - 0.7373 = 0.2048$$

La probabilidad exacta de tener 2 niños con asma es del 20.48%.

**¿Cuál es la probabilidad para menos de 3 niños con asma?**

Queremos saber la probabilidad de que haya 0, 1 o 2 niños con asma. Eso se llama probabilidad acumulada hasta 2:

$$P(X < 3) = P(X \leq 2) = P(0) + P(1) + P(2)$$

La tabla ya nos da ese valor directamente, se busca el valor acumulado para X = 2. Hay un 94,21% de probabilidad de tener menos de 3 niños asmáticos.

**¿Cuál es la probabilidad para más de 3 niños con asma?**

Queremos saber la probabilidad de que haya 4 o 5 niños con asma. En vez de calcularlo directamente, usamos el complemento:

$$P(X > 3) = 1 - P(X \leq 3)$$

$$P(X > 3) = 1 - 0.9933 = 0.0067$$

Solo hay un 0,67% de probabilidad de que más de tres niños sean asmáticos.

## Distribución de Poisson

Modelo que permite calcular la probabilidad de que ocurra un número determinado de eventos dentro de un intervalo fijo de tiempo, espacio o área de oportunidad.

Ejemplos: cantidad de ambulancias que llegan por hora, número de errores de impresión por página, mails recibidos por hora, etc.

La distribución de Poisson es adecuada cuando:

- Los eventos ocurren de manera independiente entre sí y ocurren al azar.
- La probabilidad de que dos eventos coincidan exactamente en el mismo instante es muy baja.
- Se conoce el promedio de ocurrencias por intervalo, llamado λ (lambda), la cual debe mantenerse constante.

Si una variable aleatoria X sigue una distribución de Poisson, su función de probabilidad es:

$$P(X = x) = \frac{e^{-\lambda} \times \lambda^x}{x!}$$

Donde:

- $X$: número de eventos que ocurren (por ejemplo, ambulancias que llegan).
- $x$: valor específico que querés calcular (por ejemplo, 3 ambulancias).
- $\lambda$: promedio de eventos por intervalo (por ejemplo, 2 ambulancias por hora).
- $e$: número de Euler ≈ 2.718
- $x!$: factorial de x

### Cálculo de λ

**1. Cuando conocés la tasa media directamente**

Si te dicen "ocurren 5 eventos por hora", entonces: $\lambda = 5$ (eventos por hora)

**2. Cuando te dan la cantidad total de eventos en varios intervalos**

Si observaste k eventos en T intervalos, entonces:

$$\lambda = \frac{k}{T}$$

Ejemplo: 50 errores en 25 páginas

$$\lambda = \frac{50}{25} = 2\ \text{errores por página}$$

**3. Cuando cambias el tamaño del intervalo**

Si conocés λ para un intervalo y querés otro, multiplicás o dividís. Ejemplo: Si λ = 4 eventos por hora, ¿cuál es λ por 30 minutos?

$$\lambda_{30\,min} = 4 \times 0.5 = 2$$

### Ejercicios de ejemplo

En una clínica se atienden, en promedio, 16 pacientes cada 4 horas.

**¿Cuál es la probabilidad de que en 30 minutos (0,5 h) se atiendan menos de 3 personas?**

$$\frac{16\ pacientes}{4\ horas} = 4\ pacientes\ por\ hora$$

Queremos saber lo que pasa en media hora (0.5 h), entonces:

$$\lambda = \text{tasa promedio de eventos por unidad de tiempo} \times \text{duración del intervalo}$$

$$\lambda = 4 \times 0.5 = 2$$

Esto significa que esperamos 2 pacientes en promedio en 30 minutos.

Ya sabemos que λ = 2, ahora lo que queremos saber es la probabilidad de que haya menos de 3 pacientes. Eso se escribe como:

$$P(X < 3) = P(X \leq 2) = P(0) + P(1) + P(2)$$

Usamos la fórmula de Poisson, con λ = 2, calculamos:

$$P(0) = \frac{e^{-2} \times 2^0}{0!} = 0.1353 \qquad P(1) = \frac{e^{-2} \times 2^1}{1!} = 0.2707$$

$$P(2) = \frac{e^{-2} \times 2^2}{2!} = 0.2707$$

Sumar todo:

$$P(X \leq 2) = 0.1353 + 0.2707 + 0.2707 = 0.6767$$

Hay un 67.67% de probabilidad de que se atiendan menos de 3 pacientes en 30 minutos.

### Tablas de la distribución de Poisson

Las tablas de Poisson muestran valores acumulados $P(X \leq x)$ para distintos valores de λ. En caso de querer el valor exacto se hace lo mismo que en binomial:

$$P(X = x) = P(X \leq x) - P(X \leq x-1)$$

### ¿Cuándo se puede usar Poisson en lugar de binomial?

Cuando se cumplen estas dos condiciones:

1. n es muy grande (muchos intentos)
2. p es muy pequeño (evento raro)

En ese caso, calcular con binomial se vuelve pesado, y Poisson lo puede aproximar muy bien. Se usa esta fórmula para obtener el parámetro de Poisson:

$$\lambda = n \times p$$

## Fórmulas

**Binomial**

$$P(X = x) = \binom{n}{x} p^x (1-p)^{n-x} \qquad \binom{n}{x} = \frac{n!}{x!(n-x)!}$$

**Poisson**

$$P(X = x) = \frac{e^{-\lambda} \times \lambda^x}{x!} \qquad e \approx 2.718$$
