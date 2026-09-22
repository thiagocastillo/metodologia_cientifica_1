> Fuente: `Probabilidad MC1 2026.pdf` (diapositivas de clase)

# Repaso de Probabilidad

## 1. Definición y axiomas de probabilidad

### Definición

$$Probabilidad = P = \frac{\text{casos favorables}}{\text{casos posibles o totales}}$$

$$Probabilidad = \text{frecuencia relativa} = \text{proporción} = \frac{\%}{100}$$

### Axiomas

- $0 \le P \le 1$
- **Complemento de A:** $P(A^c) = 1 - P(A)$
- $P(Universo) = 1$

### Ejemplo introductorio

Se lanza una moneda (de 100 pesos colombianos) con dos casos posibles: **CARA** y **NÚMERO**.

$$P(cara) = \frac{1}{2} = 0,5 = P(A)$$

$$P(n\acute{u}mero) = \frac{1}{2} = 0,5 = P(A^c)$$

- El evento CARA y el evento NÚMERO son eventos **complementarios** (la suma vale 1 y son incompatibles).
- Son eventos **equiprobables** (mismo valor de probabilidad).

## 2. Reglas de probabilidad

### Regla de la independencia

$$P(A \cap B) = P(A) \cdot P(B) \Leftrightarrow A \text{ y } B \text{ son independientes}$$

Palabras clave: **y, e**

### Regla de la suma o adición

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

Palabras clave: **u, o**

### Regla de la probabilidad condicional

$$P(A/B) = \frac{P(A \cap B)}{P(B)}$$

Palabras clave: *dado que, tal que, si, dentro, siendo*

Donde **A** es lo que buscamos y **B** es la condición.

## 3. Tipos de eventos

Dos diagramas de Venn ilustran las operaciones básicas entre dos eventos $A$ y $B$: en el de **intersección** ($A \cap B$) solo se sombrea la zona común a ambos círculos; en el de **unión** ($A \cup B$) se sombrean ambos círculos completos.

- **Intersección** ($A \cap B$, palabras clave: *y, e*): son todos los elementos que ambos conjuntos tienen en común.
- **Unión** ($A \cup B$, palabras clave: *o, u*): son todos los elementos de ambos conjuntos.

### Eventos compatibles

Poseen elementos en común, por lo tanto la intersección es diferente de 0.

$$P(A \cap B) \neq 0$$

### Eventos incompatibles

No poseen elementos en común, por lo tanto la intersección es igual a 0.

$$P(A \cap B) = 0$$

### Eventos independientes

Un evento $A$ es independiente de otro $B$ si el resultado de uno **no influye** sobre el resultado del otro. Siempre se cumplen dos situaciones:

$$P(A/B) = P(A) \qquad P(A \cap B) = P(A) \cdot P(B)$$

### Eventos complementarios

Un evento $A$ es complementario respecto a otro $B$ si se cumplen dos condiciones:

1. $P(A) + P(B) = 1$
2. $A$ y $B$ son incompatibles

## 4. Tablas de doble entrada (tablas 2×2 o tetracóricas)

Una tabla de contingencia 2×2 organiza dos eventos y sus complementos:

| | B | B$^c$ | TOTAL |
|---|---|---|---|
| **A** | $A \cap B$ | $A \cap B^c$ | |
| **A$^c$** | $A^c \cap B$ | $A^c \cap B^c$ | |
| **TOTAL** | | | U |

Donde A y B son eventos, A$^c$ y B$^c$ son sus complementos, y U es el universo (total general).

### Ejemplo 1 (Asma y bronquitis crónica)

A partir de la siguiente tabla se desea calcular distintas probabilidades. Definiciones: **A**: Asma, **No A**: No Asma, **BC**: Bronquitis crónica, **No BC**: No Bronquitis crónica.

| | Bronquitis crónica | No Bronquitis crónica | total |
|---|---|---|---|
| **Asma** | 45 | 50 | 95 |
| **No Asma** | 25 | 80 | 105 |
| **total** | 70 | 130 | 200 |

a) $P(\text{No BC}) = \dfrac{130}{200} = 0,65$

b) $P(A \cap BC) = \dfrac{45}{200} = 0,225$

c) $P(A \cup \text{No BC}) = P(A) + P(\text{No BC}) - P(A \cap \text{No BC}) = \dfrac{95}{200} + \dfrac{130}{200} - \dfrac{50}{200} = 0,875$

d) $P(\text{No BC}/A) = \dfrac{50}{95} = 0,526$

e) $P(\text{No A}/\text{No BC}) = \dfrac{80}{130} = 0,615$

f) $P(A/BC) = \dfrac{45}{70} = 0,64$

g) $P(BC/\text{No A}) = \dfrac{25}{105} = 0,24$

h) ¿El asma es independiente de la BC?

$$P(A \cap BC) = P(A) \cdot P(BC) \;\rightarrow\; \frac{45}{200} \neq \frac{95}{200} \cdot \frac{70}{200}$$

**Conclusión: NO** son independientes.

### Ejemplo 2 (Fumador e infarto agudo de miocardio)

Definiciones: **F**: Fumador, **No F**: No Fumador, **IAM**: Infarto agudo de miocardio, **No IAM**: No IAM.

| | IAM (infarto agudo de miocardio) | No IAM | total |
|---|---|---|---|
| **Fumador** | 20 | 40 | 60 |
| **No Fumador** | 14 | 126 | 140 |
| **total** | 34 | 166 | 200 |

a) $P(F) = \dfrac{60}{200} = 0,30$

b) $P(F \cap IAM) = \dfrac{20}{200} = 0,10$

c) $P(\text{No F} \cup \text{No IAM}) = P(\text{No F}) + P(\text{No IAM}) - P(\text{No F} \cap \text{No IAM}) = \dfrac{140}{200} + \dfrac{166}{200} - \dfrac{126}{200} = 0,90$

d) $P(F/IAM) = \dfrac{20}{34} = 0,588$

e) $P(IAM/F) = \dfrac{20}{60} = 0,333$

f) $P(\text{No IAM}/\text{No F}) = \dfrac{126}{140} = 0,90$

g) $P(F/\text{No IAM}) = \dfrac{40}{166} = 0,241$

h) ¿El IAM es independiente del tabaquismo?

$$P(IAM \cap F) = P(IAM) \cdot P(F) \;\rightarrow\; \frac{20}{200} \neq \frac{34}{200} \cdot \frac{60}{200}$$

**Conclusión: NO** son independientes.

### Ejemplo 3 (Diabetes e insuficiencia renal)

Se realizó un estudio en 500 pacientes de los cuales 120 eran diabéticos y de estos 70 insuficientes renales (IR). El total de insuficientes renales fue 90.

Definiciones: **D**: Diabético, **No D**: No Diabético, **IR**: Insuficiencia Renal, **No IR**: No Insuficiencia Renal.

| | Insuficiencia Renal (IR) | No IR | total |
|---|---|---|---|
| **Diabetes** | 70 | 50 | 120 |
| **No Diabetes** | 20 | 360 | 380 |
| **total** | 90 | 410 | 500 |

a) Elegir un sujeto que no sea diabético ni insuficiente renal:

$$P(\text{No D} \cap \text{No IR}) = \frac{360}{500} = 0,72$$

b) Elegir un sujeto diabético o insuficiente renal:

$$P(D \cup IR) = P(D) + P(IR) - P(D \cap IR) = \frac{120}{500} + \frac{90}{500} - \frac{70}{500} = 0,280$$

c) Elegir un sujeto diabético dado que es No IR:

$$P(D/\text{No IR}) = \frac{50}{410} = 0,122$$

d) Elegir un sujeto sin IR si el mismo es diabético:

$$P(\text{No IR}/D) = \frac{50}{120} = 0,417$$

### Ejemplo 4 (Corticoides y efectos colaterales)

En cierto tipo de enfermedades renales los corticoides son efectivos en un 20% de los casos, y tienen efectos colaterales en un 60% de los casos. En el 12% de los casos los corticoides son efectivos y tienen efectos colaterales simultáneamente.

**a) Tabla completa (en proporciones):**

| | Mejora | No mejora | total |
|---|---|---|---|
| **Efectos colaterales** | 0,12 | 0,48 | 0,60 |
| **SIN ef. colaterales** | 0,08 | 0,32 | 0,40 |
| **total** | 0,20 | 0,80 | 1 |

b) La probabilidad de que un paciente tratado con corticoides no mejore y al mismo tiempo tampoco sufra de efectos colaterales:

$$P(\text{no mejore} \cap \text{sin ef.col}) = 0,32$$

c) Dado que un paciente No mejoró con el tratamiento, la probabilidad de que se presenten efectos colaterales:

$$P(\text{Ef.col}/\text{NO mejoró}) = \frac{0,48}{0,80} = 0,60$$

d) ¿La efectividad y la presencia de efectos colaterales son independientes?

$$P(\text{Mejora} \cap \text{Efectos Col}) = P(\text{Mejora}) \cdot P(\text{Efectos Col}) \;\rightarrow\; 0,12 = 0,20 \times 0,60$$

**Son independientes.**

### Ejercicio complementario (Enfermedad y factor de riesgo)

En una población el 14% presenta cierta enfermedad. También se sabe que el 40% está expuesto a cierto factor de riesgo (FR), y como información adicional que el 8% de la misma presenta la enfermedad y el factor de riesgo.

**Datos:** $P(Enf) = 0,14$; $P(FR) = 0,40$; $P(Enf \cap FR) = 0,08$

| | ENF. | No Enf. | Total |
|---|---|---|---|
| **FR** | 0,08 | 0,32 | 0,40 |
| **no FR** | 0,06 | 0,54 | 0,60 |
| **Total** | 0,14 | 0,86 | 1 (universo) |

a) ¿Probabilidad de no presentar el FR si la persona no está enferma?

$$P(\text{no FR}/\text{no Enf}) = \frac{0,54}{0,86} = 0,62$$

b) ¿Probabilidad de presentar el FR dado que el sujeto está enfermo?

$$P(FR/Enf) = \frac{0,08}{0,14} = 0,57$$

c) ¿Probabilidad de no estar enfermo si la persona presenta el FR?

$$P(\text{no Enf}/FR) = \frac{0,32}{0,40} = 0,80$$

d) ¿La enfermedad y el FR son independientes?

$$P(Enf \cap FR) = P(Enf) \times P(FR) \;\rightarrow\; 0,08 \neq 0,14 \times 0,40 = 0,056$$

**Como son distintos, NO SON INDEPENDIENTES.**

### Ejercicio complementario (Asma y antecedentes familiares)

Se estudiaron 500 sujetos de los cuales 350 eran asmáticos, y de estos 250 tienen antecedentes familiares de asma (AF). El total de personas con AF fue 280.

| | Asma | No Asma | Total |
|---|---|---|---|
| **AF** | 250 | 30 | 280 |
| **sin AF** | 100 | 120 | 220 |
| **Total** | 350 | 150 | 500 |

*Cómo se obtuvo la tabla:* Asmáticos totales 350 → con AF = 250, sin AF = 100. AF totales 280 → No asmáticos con AF = 280 − 250 = 30. Total sujetos 500 → No asmáticos totales = 500 − 350 = 150 → No asmáticos sin AF = 150 − 30 = 120.

a) Elegir al azar un sujeto con asma y sin AF:

$$P(Asma \cap \text{sin } AF) = \frac{100}{500} = 0,20$$

b) Elegir al azar un sujeto sin asma o sin AF:

$$P(\text{sin Asma} \cup \text{sin } AF) = P(\text{sin Asma}) + P(\text{sin }AF) - P(\text{sin Asma} \cap \text{sin }AF) = \frac{150}{500} + \frac{220}{500} - \frac{120}{500} = \frac{250}{500} = 0,50$$

c) Elegir al azar un sujeto con asma dado que tiene AF:

$$P(Asma/AF) = \frac{250}{280} = 0,89$$

d) ¿El asma y los AF son independientes?

$$P(Asma \cap AF) = P(Asma) \times P(AF) \;\rightarrow\; \frac{250}{500} = 0,50 \quad\text{vs.}\quad \frac{350}{500} \times \frac{280}{500} = 0,70 \times 0,56 = 0,39$$

Como $0,50 \neq 0,39$, entonces **el asma y los AF no son independientes**.

## 5. Probabilidad con y sin reposición

Cuando se seleccionan varios elementos sucesivos de una población y cada elección es **independiente** de la anterior (porque el elemento se repone o porque se asume reposición), las probabilidades de cada extracción se **multiplican** manteniéndose constantes. Cuando la selección es **sin reposición**, las probabilidades de las extracciones sucesivas cambian porque disminuye el número de casos posibles.

### Ejercicio complementario 1 (Osteoporosis)

La osteoporosis (OP) afecta 4 veces más a mujeres que a hombres. El 8% de las mujeres padece OP en una población donde hay tantos hombres como mujeres.

**Datos:** $P(OP/mujer) = 0,08$; $P(OP/hombre) = 0,02$ (la cuarta parte que en las mujeres); $P(mujer) = P(hombre) = 0,5$

a) ¿Cuál es la probabilidad para un individuo tomado al azar de padecer OP?

$$P(OP/mujer) = 0,08 = \frac{P(OP \cap mujer)}{P(mujer)} \;\rightarrow\; 0,08 = \frac{P(OP \cap mujer)}{0,5} \;\rightarrow\; P(OP \cap mujer) = 0,08 \times 0,5 = 0,04$$

$$P(OP/hombre) = 0,02 = \frac{P(OP \cap hombre)}{P(hombre)} \;\rightarrow\; 0,02 = \frac{P(OP \cap hombre)}{0,5} \;\rightarrow\; P(OP \cap hombre) = 0,02 \times 0,5 = 0,01$$

$$P(OP) = P(OP \cap mujer) + P(OP \cap hombre) = 0,04 + 0,01 = 0,05$$

**¿Cuál es la probabilidad de elegir tres hombres con reposición y que el primero tenga OP y los dos restantes no tengan OP?**

Dato: existe la condición "ser hombre", y por complementariedad $P(\text{SIN OP}/hombre) = 0,98$. Dado que cada hombre es independiente uno del otro, las probabilidades se multiplican:

$$\underbrace{OP}_{1\text{er hombre}} \times \underbrace{\text{SIN OP}}_{2\text{do hombre}} \times \underbrace{\text{SIN OP}}_{3\text{er hombre}} = 0,02 \times 0,98 \times 0,98 = 0,019208$$

Como los eventos son independientes (por reposición), la probabilidad conjunta es el producto de las probabilidades individuales.

**¿Cuál es la probabilidad de elegir cuatro mujeres con reposición y que solo una tenga OP y las restantes no tengan OP?**

Se seleccionan 4 mujeres (como no especifica, se supone que se trata de con reposición). $P(OP/mujer) = 0,08 \rightarrow P(\text{SIN OP}/mujer) = 1 - 0,08 = 0,92$.

Dado que cada mujer es independiente una de otra, se deben multiplicar las probabilidades, existiendo 4 posibilidades (que la mujer con OP sea la 1ª, la 2ª, la 3ª o la 4ª):

$$0,08 \times 0,92 \times 0,92 \times 0,92 \times 4 = 0,24918$$

### Ejercicio complementario 2 (Camas de CTI)

En una sala de CTI hay 8 camas, en 3 de ellas hay pacientes con diabetes mellitus (DM), en las restantes 5 no padecen DM (SIN DM).

**Datos:** Total de camas: 8; Camas con DM: 3; Camas sin DM: 5; $P(DM) = 3/8$; $P(\text{SIN DM}) = 5/8$

a) ¿Cuál es la probabilidad de que al elegir tres camas al azar **con reposición**, en todas no haya personas con DM?

Dado que cada cama es independiente una de otra, se deben multiplicar las probabilidades:

$$\underbrace{\text{SIN DM}}_{1\text{era cama}} \times \underbrace{\text{SIN DM}}_{2\text{da cama}} \times \underbrace{\text{SIN DM}}_{3\text{era cama}} = \frac{5}{8} \times \frac{5}{8} \times \frac{5}{8} = 0,3075$$

b) ¿Cuál es la probabilidad de que al elegir tres camas al azar **sin reposición**, en todas no haya personas con DM?

Hay 5 camas sin DM de 8 totales. Después de elegir la 1ª, quedan 4 camas sin DM de 7 restantes. Después de elegir la 2ª, quedan 3 camas sin DM de 6 restantes. Dado que cada elección es dependiente de la anterior (sin reposición), se multiplican las probabilidades:

$$\frac{5}{8} \times \frac{4}{7} \times \frac{3}{6} = 0,1786$$

### Ejercicio complementario 3 (Distribución etaria — adenocarcinoma pancreático)

A partir de la siguiente tabla de distribución etaria de pacientes con adenocarcinoma pancreático:

| Edad (años) | fabs |
|---|---|
| 35 – 40 | 4 |
| 40 – 45 | 7 |
| 45 – 50 | 8 |
| 50 – 55 | 18 |
| 55 – 60 | 10 |
| 60 – 65 | 3 |

$N = 50$

a) ¿Probabilidad de que al elegir un sujeto al azar este tenga más de 40 años y a su vez menos de 60 años? Incluye los intervalos 40–45, 45–50, 50–55 y 55–60 (suma de frecuencias: $7+8+18+10=43$).

$$P(x>40 \cap x<60) = \frac{7+8+18+10}{50} = \frac{43}{50} = 0,86$$

b) ¿Probabilidad de que tenga más de 40 y menos de 60 años, si supera los 50 años? Es la probabilidad condicional $P(40<x<60 \mid x>50)$.

- Evento A ($40<x<60$): frecuencia $43$.
- Evento B ($x>50$): incluye 50–55, 55–60 y 60–65, frecuencia $18+10+3=31$.
- Intersección A∩B (incluye 50–55 y 55–60): frecuencia $18+10=28$.

$$P[(40<x<60)/(x>50)] = \frac{18+10}{18+10+3} = \frac{28}{31} = 0,903$$

c) ¿Probabilidad de elegir un sujeto con menos de 40 años dado que supera los 50 años? Es $P(x<40 \mid x>50)$.

- Evento A ($x<40$): incluye 35–40, frecuencia $4$.
- Evento B ($x>50$): frecuencia $31$.
- Intersección A∩B: no existe ningún intervalo que cumpla ambas condiciones, frecuencia $0$.

$$P(x<40 \mid x>50) = \frac{0}{18+10+3} = \frac{0}{31} = 0$$

d) ¿Probabilidad de elegir un sujeto con edad entre 45 y 55 años si es superado por los 50 años? Es $P(45<x<55 \mid x>50)$.

- Evento A ($45<x<55$): incluye 45–50 y 50–55, frecuencia $8+18=26$.
- Evento B ($x>50$): frecuencia $31$.
- Intersección A∩B (45<x<55 y x>50): solo el intervalo 50–55, frecuencia $18$.

$$P(45<x<55 \mid x>50) = \frac{18}{4+7+8+18+10+3} = \frac{18}{31} = 0,421$$

### Ejercicio complementario 4 (Niveles enzimáticos de TGO)

A partir de la siguiente tabla sobre la distribución de niveles enzimáticos de TGO (oxalato-glutamato-transaminasa) de pacientes sin patologías, según el sexo:

| TGO (UI) | fabs femenino | fabs masculino | Total |
|---|---|---|---|
| 5 – 11 | 3 | 7 | 10 |
| 12 – 18 | 5 | 3 | 8 |
| 19 – 25 | 5 | 8 | 13 |
| 26 – 32 | 11 | 3 | 14 |
| 33 – 39 | 2 | 2 | 4 |
| 40 – 46 | 1 | 2 | 3 |
| **Total** | **27** | **25** | **52** |

$n(\text{femenino}) = 27$; $n(\text{masculino}) = 25$; $N = 52$

a) ¿Probabilidad de elegir pacientes de sexo femenino entre quienes tienen niveles enzimáticos superiores a 25 UI? Es la probabilidad condicional $P(\text{sexo femenino} \mid TGO>25\,UI)$, que corresponde a los intervalos 26–32, 33–39 y 40–46.

- Número de mujeres con TGO > 25 UI: $11+2+1=14$
- Número total de pacientes con TGO > 25 UI: $14+4+3=21$

$$P(\text{sexo femenino}/TGO>25) = \frac{11+2+1}{14+4+3} = \frac{14}{21} = 0,667$$

b) ¿Probabilidad de elegir pacientes de sexo masculino y que presenten niveles enzimáticos entre 5 y 32 UI? Es la probabilidad conjunta $P(\text{sexo masculino} \cap 5<TGO<32\,UI)$, correspondiente a los intervalos 5–11, 12–18, 19–25 y 26–32.

- Número de hombres con TGO entre 5 y 32 UI: $7+3+8+3=21$
- Número total de pacientes: $N=52$

$$P(\text{sexo masculino} \cap 5<TGO<32) = \frac{7+3+8+3}{52} = \frac{21}{52} = 0,404$$

c) ¿Probabilidad de que, eligiendo al azar un paciente de sexo masculino y con valores enzimáticos superiores a 18 UI, este tenga valores de TGO por debajo de 26 UI? Es la probabilidad condicional $P(TGO<26 \mid \text{sexo masculino} \cap TGO>18)$.

- Numerador (A∩B): hombres con TGO < 26 (intervalos 5–11, 12–18 y 19–25): $7+3+8=18$
- Denominador (B): hombres con TGO > 18 (intervalos 19–25, 26–32, 33–39, 40–46): $8+3+2+2=15$

$$P(TGO<26 \mid \text{sexo masculino} \cap TGO>18) = \frac{7+3+8}{8+3+2+2} = \frac{18}{15} = 0,533$$

## 6. Teorema de Bayes

### Fórmula general

Partiendo de la definición de probabilidad condicional, $P(A/B) = \dfrac{P(A \cap B)}{P(B)}$, y expresando $P(A \cap B) = P(B/A) \cdot P(A)$, se obtiene:

$$P(A/B) = \frac{P(B/A) \cdot P(A)}{P(B/A) \cdot P(A) + P(B/\text{No } A) \cdot P(\text{No } A)}$$

Asumiendo que $P(A) + P(\text{No } A) = 1$ (Universo).

**Interpretación de cada término:**

| Término | Significado |
|---|---|
| $P(B/A)$ | Verosimilitud: probabilidad de B si A es verdadera. |
| $P(A)$ | Probabilidad a priori de A. |
| $P(A/B)$ | Probabilidad a posteriori de A dado B. |
| $P(B)$ | Probabilidad total o marginal de B. |
| $P(B/\text{No } A)$ | Verosimilitud: probabilidad de B si A es falsa. |
| $P(\text{No } A)$ | Probabilidad de que A no ocurra. |

El **numerador** $P(B/A) \cdot P(A)$ es la probabilidad conjunta de A y B, expresada como $P(A \cap B)$. El **denominador** $P(B/A)\cdot P(A) + P(B/\text{No }A)\cdot P(\text{No }A)$ es la probabilidad total de B, expresada como $P(B)$.

### Extensión del Teorema de Bayes (a más de dos categorías)

$$P(A_1/B) = \frac{P(B/A_1) \cdot P(A_1)}{P(B/A_1) \cdot P(A_1) + P(B/A_2) \cdot P(A_2) + P(B/A_3) \cdot P(A_3)}$$

Asumiendo que $P(A_1) + P(A_2) + P(A_3) = 1$ (Universo).

> *"La probabilidad no es certeza, es la mejor forma de tomar decisiones con incertidumbre."*

### Ejercicio 1 (Asma e infección respiratoria baja)

La prevalencia del asma en una población es de 20%. Si una persona es asmática, la probabilidad de que tenga infección respiratoria baja es de 70%. El 25% de los pacientes que no tienen asma presentan infección respiratoria baja.

¿Cuál es la probabilidad de tener asma dado que el paciente consulta por un cuadro de infección respiratoria baja?

**Definiciones:** $A$: Tener asma; $\overline{A}$: No tener asma; $B$ (también IRB): Infección respiratoria baja; $\overline{B}$ (o $\overline{IRB}$): No tener infección respiratoria baja.

**Datos:** $P(A) = 0,20$ (prevalencia del asma); $P(\overline{A}) = 1 - P(A) = 0,80$; $P(B/A) = 0,70$ (o $P(IRB/A)$); $P(B/\overline{A}) = 0,25$ (o $P(IRB/\text{no}A)$)

**1. Probabilidad total de B:**

$$P(B) = P(B/A) \cdot P(A) + P(B/\overline{A}) \cdot P(\overline{A}) = (0,70)(0,20) + (0,25)(0,80) = 0,14 + 0,20 = 0,34$$

**2. Teorema de Bayes:**

$$P(A/B) = \frac{P(B/A) \cdot P(A)}{P(B)} = \frac{(0,70)(0,20)}{0,34} = \frac{0,14}{0,34} = 0,4118$$

**Interpretación:** Si un paciente consulta por infección respiratoria baja, la probabilidad de que tenga asma es del **41,18%**.

### Ejercicio 2 (Coronariopatía e insuficiencia cardíaca)

Un paciente fumador de sexo masculino mayor de 60 años tiene 75% de riesgo de padecer coronariopatía (prevalencia de la coronariopatía en la población de hombres fumadores mayores de 60 años). La probabilidad de padecer insuficiencia cardíaca entre los pacientes sin coronariopatía de esta población es de 0,20. Como dato adicional se sabe que la probabilidad de que un sujeto de esta población no tenga insuficiencia dado que posee coronariopatía es del 40%.

¿Cuál es la probabilidad de que, teniendo insuficiencia cardíaca, el paciente padezca coronariopatía?

**Definiciones:** $C$: Padecer coronariopatía (también denotada $CP$); $\overline{C}$: No padecer coronariopatía ($\overline{CP}$ o $NOCP$); $I$: Padecer insuficiencia cardíaca ($IC$); $\overline{I}$: No padecer insuficiencia cardíaca ($NOIC$).

**Datos:** $P(C) = 0,75$; $P(I/\overline{C}) = 0,20$; $P(\overline{I}/C) = 0,40 \;\Rightarrow\; P(I/C) = 1 - 0,40 = 0,60$; $P(\overline{C}) = 1 - P(C) = 1 - 0,75 = 0,25$

**1. Probabilidad total de I (denominador):**

$$P(I) = P(I/C) \cdot P(C) + P(I/\overline{C}) \cdot P(\overline{C}) = (0,60)(0,75) + (0,20)(0,25) = 0,45 + 0,05 = 0,50$$

**2. Teorema de Bayes:**

$$P(C/I) = \frac{P(I/C) \cdot P(C)}{P(I)} = \frac{(0,60)(0,75)}{0,50} = \frac{0,45}{0,50} = 0,90$$

**Interpretación:** Si un paciente de esta población tiene insuficiencia cardíaca, la probabilidad de que padezca coronariopatía es del **90%**.

Equivalentemente, usando la notación $CP$/$IC$:

$$P(CP/IC) = \frac{P(IC/CP) \cdot P(CP)}{P(IC/CP) \cdot P(CP) + P(IC/NOCP) \cdot P(NOCP)} = \frac{0,60 \cdot 0,75}{0,60 \cdot 0,75 + 0,20 \cdot 0,25} = 0,90$$
