> Fuente: `Clase DN III.pdf` (diapositivas de clase)

# Distribución Normal: Aplicaciones y Ejercicios Integradores

## 1. Repaso de la distribución normal

Una variable continua $X$ sigue una distribución normal, $X \sim N(\mu,\sigma)$, con dos parámetros: $\mu$ (media = moda = mediana = percentil 50) y $\sigma$ (desvío estándar).

*(Gráfico: campana de Gauss simétrica centrada en $\mu$, con marcas en $\mu \pm \sigma$, $\mu \pm 2\sigma$ y $\mu \pm 3\sigma$ sobre el eje $x$; el área total bajo la curva es igual a 1, es decir, la probabilidad del universo completo.)*

**Características:**

- Distribución simétrica respecto a la media.
- La media, mediana y moda coinciden ($\mu$).
- La desviación estándar ($\sigma$) determina la dispersión.
- El área bajo la curva vale 1 (probabilidad total).

**Reglas de cálculo de probabilidades:**

1. $P(X \le a) = P(X < a)$: se obtiene de la tabla Z.
2. $P(X > a) = 1 - P(X \le a)$
3. $P(a < X < b) = P(X < b) - P(X < a)$
4. $P(X = a) = 0$

**Estandarización:** para poder usar la tabla Z, cualquier variable normal se transforma en la variable normal tipificada (o estandarizada) $Z$:

$$Z = \frac{x-\mu}{\sigma} \qquad Z \sim N(0,1)$$

**Cálculo de percentiles:** dado un percentil expresado como porcentaje, se busca en la tabla Z el valor $Z$ que deja esa proporción por debajo de él, y luego se despeja el valor $x$ correspondiente en la escala original:

$$x = \mu + Z \cdot \sigma$$

## 2. Regla empírica (68-95-99,7)

En toda distribución normal:

- El **68%** de los valores se encuentra entre $\mu-\sigma$ y $\mu+\sigma$.
- El **95%** de los valores se encuentra entre $\mu-2\sigma$ y $\mu+2\sigma$.
- El **99,7%** de los valores se encuentra entre $\mu-3\sigma$ y $\mu+3\sigma$.

*(Gráfico: campana de Gauss con tres bandas de color anidadas que ilustran estos tres rangos: la banda central celeste cubre 68%, la banda verde hasta $\mu\pm2\sigma$ acumula 95%, y la banda amarilla hasta $\mu\pm3\sigma$ acumula 99,7%.)*

A partir de estos tres porcentajes puede deducirse que cada "franja" entre desvíos sucesivos tiene un porcentaje fijo: 34% entre $\mu$ y $\mu\pm\sigma$, 13,5% entre $\mu\pm\sigma$ y $\mu\pm2\sigma$, y 2,35% entre $\mu\pm2\sigma$ y $\mu\pm3\sigma$.

### Ejercicio resuelto

**a) ¿Cuál es la probabilidad de encontrar valores entre $\mu-\sigma$ y $\mu+2\sigma$?**

$$P(\mu-\sigma \le X \le \mu+2\sigma) = P(\mu-\sigma \le X \le \mu+\sigma) + P(\mu+\sigma \le X \le \mu+2\sigma)$$
$$= 68\% + 13.5\% = 81.5\%$$

$$P(\mu-\sigma \le X \le \mu+2\sigma) = 0.815 \ (81.5\%)$$

**b) ¿Cuál es la probabilidad de encontrar valores entre $\mu-3\sigma$ y $\mu-\sigma$?**

$$P(\mu-3\sigma \le X \le \mu-\sigma) = P(\mu-3\sigma \le X \le \mu-2\sigma) + P(\mu-2\sigma \le X \le \mu-\sigma)$$
$$= 2.35\% + 13.5\% = 15.85\%$$

$$P(\mu-3\sigma \le X \le \mu-\sigma) = 0.1585 \ (15.85\%)$$

**c) ¿Cuál es la probabilidad de encontrar valores entre $\mu-\sigma$ y $\mu+2\sigma$, dado que el sujeto es superado por el cuartil 3?**

Se sabe que $Q_3 = \mu + 0.674\sigma$ y $P(X<Q_3) = 0.75$.

$$P(\mu-\sigma<X<\mu+2\sigma \mid X<Q_3) = \frac{P(\mu-\sigma<X<Q_3)}{P(X<Q_3)} = \frac{0.75-0.1585}{0.75} = 0.7887 \ (78.87\%)$$

**d) ¿Cuál es la probabilidad de encontrar valores inferiores a $\mu+\sigma$ dado que el sujeto presenta valores entre $\mu \pm 2\sigma$?**

$$P(X<\mu+\sigma \mid \mu-2\sigma \le X \le \mu+2\sigma) = \frac{P(\mu-2\sigma \le X < \mu+\sigma)}{P(\mu-2\sigma \le X \le \mu+2\sigma)} = \frac{0.475}{0.95} = 0.50$$

$$P(X<\mu+\sigma \mid \mu-2\sigma \le X \le \mu+2\sigma) = 0.50 \ (50\%)$$

## 3. Ejercicio integrador: metabolito "J" en sangre

Un metabolito "J" en sangre presenta distribución **normal** con media igual a 47 mg y desvío igual a 6 mg: $X \sim N(\mu=47, \sigma=6)$.

*(Gráfico: campana de Gauss con el eje marcado en los valores 29, 35, 41, 47, 53, 59 y 65, correspondientes a $\mu-3\sigma, \mu-2\sigma, \mu-\sigma, \mu, \mu+\sigma, \mu+2\sigma, \mu+3\sigma$.)*

¿Cuál es la probabilidad de que un sujeto elegido al azar tenga valores de "J":

**a) Menores que 43 mg**

$$z = \frac{43-47}{6} = -0.67 \qquad P(X<43) = 0.2514$$

**b) Mayores que 41 mg**

$$z = \frac{41-47}{6} = -1.00 \qquad P(X>41) = 0.8413$$

**c) Entre 50 mg y 58 mg**

$$z_1 = \frac{50-47}{6} = 0.50 \qquad z_2 = \frac{58-47}{6} = 1.83$$
$$P(50<X<58) = 0.9671-0.6915 = 0.2756$$

**d) Iguales a 44 mg**

$$P(X=44) = 0.0000$$

**e) ¿Cuál es el valor del percentil 10? ¿Y cuál es su simétrico?**

$$z = -1.28$$
$$P_{10} = 47 + (-1.28)\cdot 6 = 39.32 \text{ mg}$$
Simétrico ($P_{90}$): $47 + 1.28\cdot 6 = 54.68$ mg

**f) ¿Cuál es el valor del cuartil 3? ¿Y cuál es su simétrico?**

$$z = 0.67$$
$$Q_3 = 47 + 0.67\cdot 6 = 51.02 \text{ mg}$$
Simétrico ($Q_1$): $47 - 0.67\cdot 6 = 42.98$ mg

**g) ¿Qué valor es superado por un 40% de la distribución?**

$$P(X>x)=0.40 \rightarrow P(X\le x)=0.60 \qquad z=0.25$$
$$x = 47 + 0.25\cdot 6 = 48.50 \text{ mg}$$

**h) ¿Qué valor supera un 12% de la distribución?**

$$P(X>x)=0.12 \rightarrow P(X\le x)=0.88 \qquad z=1.17$$
$$x = 47 + 1.17\cdot 6 = 54.02 \text{ mg}$$

**i) ¿Cuál es la probabilidad de tener valores por encima de 45 mg dado que está por debajo de 50 mg?**

$$P(X>45 \mid X<50) = \frac{P(45<X<50)}{P(X<50)}$$
$$z_1 = \frac{45-47}{6} = -0.33 \qquad z_2 = \frac{50-47}{6} = 0.50$$
$$P = \frac{0.6915-0.3707}{0.6915} = 0.4639$$

**j) ¿Cuál es la probabilidad de tener valores por debajo de 52 si la persona presenta valores entre 40 mg y 50 mg?**

$$P(X<52 \mid 40<X<50) = \frac{P(40<X<50)}{P(40<X<50)}$$
$$z_1 = \frac{40-47}{6} = -1.17 \qquad z_2 = \frac{50-47}{6} = 0.50$$
$$P = \frac{0.6915-0.1210}{0.6915-0.1210} = 1.0000$$

(Dado que 50 < 52, todo valor menor a 50 es automáticamente menor a 52, por eso la probabilidad condicional da 1.)

**k) ¿Cuál es la probabilidad de superar el percentil 20 si la persona presenta valores entre el 70% central de la distribución?**

Entre 70% central: $P_{15}<X<P_{85}$.

$$P(X>P_{20} \mid P_{15}<X<P_{85}) = \frac{P(P_{20}<X<P_{85})}{P(P_{15}<X<P_{85})} = \frac{0.85-0.20}{0.85-0.15} = 0.9286$$

**l) ¿Cuál es la probabilidad de tener valores entre los percentiles 15 y 60, si la persona supera el percentil 32?**

$$P(P_{15}<X<P_{60} \mid X>P_{32}) = \frac{P(P_{32}<X<P_{60})}{P(X>P_{32})} = \frac{0.60-0.32}{1-0.32} = 0.4118$$

## 4. Combinación de la Normal con la Binomial: valores de TSH

Los valores de TSH (hormona estimulante de la tiroides) presentan una distribución normal en la población de sujetos saludables, con un 80% central comprendido entre los valores 1,3 mU/l y 3,8 mU/l.

**Determinación de los parámetros a partir del 80% central:**

$$P(1.3 \le X \le 3.8) = 0.80 \rightarrow \text{colas} = 0.10 \text{ y } 0.10 \rightarrow z = 1.2816$$
$$\mu = \frac{1.3+3.8}{2} = 2.55 \text{ mU/l}$$
$$\sigma = \frac{3.8-2.55}{1.2816} = 0.975 \approx 0.98 \text{ mU/l}$$

**a) ¿Cuáles son los parámetros de la distribución de TSH?**

$$\mu = 2.55 \text{ mU/l} \qquad \sigma = 0.975 \approx 0.98 \text{ mU/l}$$

**b) Si tomamos al azar un sujeto de la población, ¿cuál es la probabilidad de encontrar valores inferiores al percentil 28?**

Por definición, $P(X<P_{28}) = 0.28$.

$$0.28 = 28\%$$

**c) ¿Cuál es la probabilidad de encontrar valores inferiores a 2,0 mU/l?**

$$z = \frac{2.0-2.55}{0.975} = -0.564$$

Tabla Z: $P(Z<-0.564) \approx 0.2864$

$$0.2864 = 28.64\%$$

**d) Si tomamos al azar 5 sujetos de la población, ¿cuál es la probabilidad de que al menos 3 sujetos tengan valores entre 1,3 mU/l y 3,8 mU/l?**

$$Y \sim \text{Bin}(5, 0.80)$$
$$P(Y\ge3) = P(3)+P(4)+P(5) = \binom{5}{3}(0.8)^3(0.2)^2 + \binom{5}{4}(0.8)^4(0.2) + (0.8)^5 = 0.9421$$

$$0.9421 = 94.21\%$$

**e) Si tomamos al azar 10 sujetos de la población, ¿cuál es la probabilidad de encontrar menos de 7 sujetos con valores inferiores a 3,8 mU/l?**

$$P(X<3.8) = 0.90 \qquad Y \sim \text{Bin}(10, 0.90)$$
$$P(Y<7) = \sum_{k=0}^{6} \binom{10}{k}(0.9)^k(0.1)^{10-k} = 0.1209$$

$$0.1209 = 12.09\%$$

**f) Si tomamos al azar 1000 sujetos de la población, ¿cuál es la probabilidad de encontrar más de 2 sujetos con valores inferiores a 0,09 mU/l?**

$$z = \frac{0.09-2.55}{0.975} = -2.522$$

Tabla Z: $P(X<0.09) \approx 0.0058$

$$Y \sim \text{Bin}(1000, 0.0058)$$
$$P(Y>2) = 1 - [P(0)+P(1)+P(2)] \approx 0.9307$$

$$0.9307 = 93.07\%$$

## 5. Obtención de parámetros a partir de dos percentiles conocidos

Una variable presenta distribución normal en la población de manera que el **percentil 10 vale 3,5 kg** y el **percentil 70 vale 5,2 kg**.

Valores de la tabla Z usados: $z_{0.10} = -1.28$ y $z_{0.70} = 0.52$.

**a) ¿Cuál es el valor de los parámetros?**

Planteando el sistema de ecuaciones con $x = \mu + Z\cdot\sigma$:

$$P_{10} = \mu + (-1.28)\sigma = 3.5 \quad (1)$$
$$P_{70} = \mu + 0.52\sigma = 5.2 \quad (2)$$

Restando (2) − (1):

$$1.80\sigma = 1.7 \rightarrow \sigma = 0.94 \text{ kg}$$
$$\mu = 5.2 - 0.52\cdot 0.94 = 4.711 \text{ kg}$$

$$\mu = 4.71 \text{ kg} \qquad \sigma = 0.94 \text{ kg}$$

**b) Si tomamos de la población 5 personas al azar, ¿cuál es la probabilidad de que exactamente una tenga valores por debajo del percentil 10?**

Sea $X \sim \text{Binomial}(n=5, p=0.10)$:

$$P(X=1) = \binom{5}{1}\cdot0.10^1\cdot0.90^4 = 5\cdot0.10\cdot0.6561$$

$$P = 0.3281$$

**c) Si tomamos de la población 10 personas al azar, ¿cuál es la probabilidad de que por lo menos una supere el percentil 80?**

$$P(X>P_{80}) = 0.20$$

Sea $X \sim \text{Binomial}(n=10, p=0.20)$:

$$P(\text{al menos una}) = 1 - P(X=0) = 1 - 0.80^{10}$$

$$P = 0.8926$$

**e) Si tomamos de la población 4 personas al azar, ¿cuál es la probabilidad de que exactamente tres tengan valores por debajo de 3,9 kg?**

$$z = \frac{3.9-4.71}{0.94} = -0.86 \rightarrow P(X<3.9) = 0.1949$$

Sea $X \sim \text{Binomial}(n=4, p=0.1949)$:

$$P(X=3) = \binom{4}{3}\cdot0.1949^3\cdot0.8051^1 = 4\cdot0.00740\cdot0.8051$$

$$P = 0.0239$$

**f) Si tomamos de la población 1000 personas al azar, ¿cuál es la probabilidad de que exactamente dos tengan valores por debajo del percentil 1?**

$$P_1 = 0.01$$

Sea $X \sim \text{Binomial}(n=1000, p=0.01)$:

$$P(X=2) = \binom{1000}{2}\cdot0.01^2\cdot0.99^{998} = \left(\frac{1000\cdot999}{2}\right)\cdot0.0001\cdot0.99^{998} = 49950\cdot0.0001\cdot0.0000437$$

$$P = 0.000218$$

**g) Si tomamos de la población 1000 personas al azar, ¿cuál es la probabilidad de que por lo menos 4 tengan valores por debajo del percentil 2?**

$$P_2 = 0.02$$

Sea $X \sim \text{Binomial}(n=1000, p=0.02)$:

$$P(X\le3) = P(0)+P(1)+P(2)+P(3)$$
$$P(0) = 0.98^{1000} = 0.000000020$$
$$P(1) = 1000\cdot0.02\cdot0.98^{999} = 0.000000408$$
$$P(2) = 499500\cdot0.0004\cdot0.98^{998} = 0.000004158$$
$$P(3) = 166167000\cdot0.000008\cdot0.98^{997} = 0.000028232$$
$$P(X\le3) = 0.000000020+0.000000408+0.000004158+0.000028232 = 0.000032818$$
$$P(X\ge4) = 1 - 0.000032818$$

$$P = 0.999967$$

## 6. Ejercicios con la variable normal tipificada Z

A partir de la variable normal tipificada o estandarizada "Z" ($Z \sim N(0,1)$), ¿cuál es la probabilidad de encontrar valores de la misma?

**Reglas útiles:**

- $P(Z<a) = $ tabla Z
- $P(Z>a) = 1-P(Z<a)$
- $P(a<Z<b) = P(Z<b)-P(Z<a)$
- $P(Z=a) = 0$
- Simetría: $P(Z<-a) = 1-P(Z<a)$

**a) Inferiores a −1,18**

$$P(Z<-1.18) = 0.1190$$

**b) Superiores a 0,12**

$$P(Z>0.12) = 1-P(Z<0.12) = 1-0.5478 = 0.4522$$

**c) Entre −0,92 y −0,15**

$$P(-0.92<Z<-0.15) = P(Z<-0.15)-P(Z<-0.92) = 0.4404-0.1788 = 0.2616$$

**e) Mayores a 0,34 dado que es inferior a 0,61**

$$P(Z>0.34 \mid Z<0.61) = \frac{P(0.34<Z<0.61)}{P(Z<0.61)} = \frac{0.7291-0.6331}{0.7291} = 0.1316$$

**f) Mayores a −0,23 dado que es mayor a −0,78**

$$P(Z>-0.23 \mid Z>-0.78) = \frac{P(Z>-0.23)}{P(Z>-0.78)} = \frac{0.5910}{0.7823} = 0.7555$$

**g) ¿Cuál es el valor del percentil 28?**

$$z_{0.28} = -0.58 \quad (\text{porque } P(Z<-0.58) = 0.2801)$$

**h) ¿Cuál es el valor del decil 4?**

El decil 4 equivale al percentil 40.

$$z_{0.40} = -0.25 \quad (\text{porque } P(Z<-0.25) = 0.4013)$$

**i) ¿Cuál es el intervalo que deja un 60% central?**

Un 60% central deja 20% en cada cola ($\alpha = 0.20$).

$$z_{0.80} = 0.84 \quad (\text{porque } P(Z<0.84) = 0.7995)$$

Intervalo: $-0.84 < Z < 0.84$

**j) ¿Qué valor de Z es superado por un 80%?**

$$P(Z>z) = 0.80 \Rightarrow P(Z<z) = 0.20$$
$$z_{0.20} = -0.84 \quad (\text{porque } P(Z<-0.84) = 0.2005)$$

**k) ¿Qué valor de Z supera un 70% de la distribución?**

$$P(Z>z) = 0.70 \Rightarrow P(Z<z) = 0.30$$
$$z_{0.30} = -0.52 \quad (\text{porque } P(Z<-0.52) = 0.3015)$$
