# Hoja de Fórmulas — Métodos Cuantitativos

> Fuente: `Hoja_Formulas_MC1_2023_Completa_EVA.pdf`. Formulario de referencia rápida para todo el curso.

## Medidas de resumen

$$\bar{x} = \frac{\sum_{i=1}^{i=n} x_i}{n} \qquad s^2 = \frac{\sum_{i=1}^{i=n} (x_i - \bar{x})^2}{n-1} \qquad CV = \frac{s}{\bar{x}} \times 100\%$$

$$Md = l_i + \frac{0.5 - F_i}{F_{i+1} - F_i} \times (l_{i+1} - l_i) = l_i + \frac{0.5 - F_i}{f_i} \times (l_{i+1} - l_i)$$

**Donde:**

| Símbolo | Significado |
|---|---|
| $l_i$ | Límite inferior del intervalo mediano |
| $l_{i+1}$ | Límite superior del intervalo mediano |
| $F_i$ | Frecuencia relativa acumulada del intervalo anterior |
| $F_{i+1}$ | Frecuencia relativa acumulada del intervalo mediano |
| $f_i$ | Frecuencia relativa del intervalo mediano |
| $A_i$ | Amplitud del intervalo mediano |

## Probabilidad — Teorema de Bayes

$$P(A|B) = \frac{P(B|A) \times P(A)}{P(B|A) \times P(A) + P(B|A^c) \times P(A^c)}$$

## Distribuciones

$$X \sim Binom(n,p) \rightarrow P(X=x) = C^n_x \times p^x \times (1-p)^{n-x} = \frac{n!}{x!\times(n-x)!} \times p^x \times (1-p)^{n-x}$$

$$X \sim Poisson(\lambda) \rightarrow P(X=x) = \frac{e^{-\lambda} \times \lambda^x}{x!}$$

$$X \sim N(\mu,\sigma); \quad Z = \frac{X-\mu}{\sigma} \rightarrow Z \sim N(0,1)$$

## Procedimientos diagnósticos

$$VPP = \frac{s \times prevalencia}{s \times prevalencia + \alpha \times (1-prevalencia)} \qquad VPN = \frac{e \times (1-prevalencia)}{e \times (1-prevalencia) + \beta \times prevalencia}$$

$$Odds = \frac{p}{1-p} \qquad p = \frac{Odds}{1+Odds} \qquad LR^+ = \frac{s}{1-e} \qquad LR^- = \frac{1-s}{e}$$

## Inferencia — Intervalos de confianza y tamaño de muestra

$$IC_{1-\alpha} = \bar{x} \pm z_{\alpha/2} \times \frac{\sigma}{\sqrt{n}} \qquad IC_{1-\alpha} = \bar{x} \pm t_{\alpha/2,\,n-1} \times \frac{s}{\sqrt{n}} \qquad IC_{1-\alpha} = \hat{p} \pm z_{\alpha/2} \times \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

$$n = \frac{(z_{\alpha/2})^2 \times \sigma^2}{I^2} \qquad n = \frac{(z_{\alpha/2})^2 \times \hat{p}(1-\hat{p})}{I^2}$$

## Riesgo

$$\widehat{OR} = \frac{a \times d}{b \times c} \qquad IC_{1-\alpha} = e^{\ln\widehat{OR} \pm z_{\alpha/2} \times EE(\ln\widehat{OR})} \qquad EE(\ln\widehat{OR}) = \sqrt{\frac{1}{a}+\frac{1}{b}+\frac{1}{c}+\frac{1}{d}}$$

$$\widehat{RR} = \frac{P(Enf|Exp)}{P(Enf|No\ exp)} \qquad IC_{1-\alpha} = e^{\ln\widehat{RR} \pm z_{\alpha/2} \times EE(\ln\widehat{RR})}$$

$$EE(\ln\widehat{RR}) = \sqrt{\frac{1}{Expuestos\ enfermos} - \frac{1}{Expuestos} + \frac{1}{No\ expuestos\ enfermos} - \frac{1}{No\ expuestos}}$$

## Contraste de hipótesis

**Estadísticos de prueba para medias:**

$$z = \frac{\bar{x}-\mu_0}{\sigma/\sqrt{n}} \qquad t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}} \qquad t = \frac{\overline{x_d}-\mu_d}{s_d/\sqrt{n}} \qquad n = \left(\frac{(|z_\beta|+|z_\alpha|)\times\sigma}{(\mu_1-\mu_2)}\right)^2$$

**Comparación de dos medias (muestras independientes):**

$$s_p = \sqrt{\frac{(n_1-1)\times s_1^2 + (n_2-1)\times s_2^2}{n_1+n_2-2}} \qquad t = \frac{\bar{x}-\bar{y}}{s_p \times \sqrt{\frac{1}{n_1}+\frac{1}{n_2}}}$$

**Proporciones:**

$$z = \frac{\hat{p}-p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}} \qquad \hat{p} = \frac{n_1\times\hat{p_1}+n_2\times\hat{p_2}}{n_1+n_2} = \frac{x_1+x_2}{n_1+n_2} \qquad z = \frac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1}+\frac{1}{n_2}\right)}}$$

**Chi-cuadrado (prueba de independencia / bondad de ajuste):**

$$\chi^2 = \sum_{i=1}^{k} \frac{(O_i-E_i)^2}{E_i} \qquad \chi^2 = \sum_{i=1}^{k} \frac{(|O_i-E_i|-0.5)^2}{E_i}$$

*(la segunda fórmula es la corrección por continuidad de Yates)*

**Correlación:**

$$r_p = \frac{\sum_{i=1}^{N}(x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum_{i=1}^{N}(x_i-\bar{x})^2 \times \sum_{i=1}^{N}(y_i-\bar{y})^2}} \qquad t = \frac{r}{\sqrt{\frac{1-r^2}{n-2}}}$$
