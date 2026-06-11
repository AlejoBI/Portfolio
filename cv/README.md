# CV — Currículum en LaTeX

Sistema de CV en LaTeX, minimalista (B/N, sin foto), compilado con MiKTeX y pdflatex.
Apto para ATS (sistemas de tracking) y exportación a PDF plano.

## Requisitos (ya instalados)

| Herramienta | Ruta |
|---|---|
| **MiKTeX 25.12** | `C:\Users\Gamer\AppData\Local\Programs\MiKTeX` |
| **pdflatex** | `...\MiKTeX\miktex\bin\x64\pdflatex.exe` |

Los paquetes faltantes se instalan automáticamente gracias a `MIKTEX_AUTOINSTALL=1`.

## Estructura

```
cv/
├── cv.tex           ← perfil principal
├── minimal.cls      ← clase LaTeX (B/N, sin foto)
├── build.ps1        ← script de compilación
├── data/
│   ├── profile.tex         → \cvname, \cvtitle, \cvemail, \cvphone, \cvlinkedin, \cvgithub, \cvabout
│   ├── education.tex       → \cveducation (llamados a \cventry)
│   ├── experience.tex      → \cvexperience (llamados a \cventry)
│   ├── projects.tex        → \cvprojects (llamados a \cventry)
│   ├── certifications.tex  → \cvcertifications (llamados a \certentry)
│   ├── skills.tex          → \cvskills (llamados a \skillcategory)
│   └── languages.tex       → \cvlanguages (llamados a \langentry)
├── output/          ← PDF generado (ignorado por git)
└── README.md
```

## Uso

```bash
pnpm cv
# o: cd cv && .\build.ps1
```

## Personalizar

Editar archivos en `data/`. Cada uno define comandos LaTeX que `cv.tex` incluye.

### Comandos disponibles

| Comando | Args | Descripción |
|---|---|---|
| `\cventry` | `{año}{título}{org}{ubicación}{descripción}{detalles}` | Entrada de experiencia/educación/proyecto |
| `\certentry` | `{nombre}{emisor}{fecha}{enlace}` | Certificación con link |
| `\skillcategory` | `{categoría}{lista}` | Grupo de habilidades |
| `\langentry` | `{idioma}{nivel}` | Entrada de idioma |

### Ejemplo de `\cventry`

```latex
\cventry{2025--2026}
  {Microservicios Reactivos con WebFlux y Kafka}
  {Smart Financial SAS}{Cali, Colombia}{
  \begin{itemize}
    \item Desarrollo con Spring WebFlux y Project Reactor
    \item Orquestación con Kubernetes
  \end{itemize}
}{}
```

Los argumentos 5 y 6 son opcionales (se omiten si están vacíos).
