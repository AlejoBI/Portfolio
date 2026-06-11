\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{minimal}[2026/06/11 Minimal CV]

\LoadClass[11pt]{article}

\RequirePackage[utf8]{inputenc}
\RequirePackage[T1]{fontenc}
\RequirePackage{lmodern}
\RequirePackage[lm]{sfmath}
\RequirePackage{geometry}
\RequirePackage{hyperref}
\RequirePackage{titlesec}
\RequirePackage{enumitem}
\RequirePackage{tabularx}

\geometry{margin=1.8cm, top=1cm, bottom=1.2cm}
\pagestyle{empty}
\setlength{\parindent}{0pt}

\renewcommand{\familydefault}{\sfdefault}

\hypersetup{colorlinks=true, urlcolor=black}

\setlist{nosep, leftmargin=1.2em}
\setlist[itemize]{label=\textbullet}

\titleformat{\section}
  {\Large\bfseries}
  {}{0em}{}[\vspace{-0.2em}{\rule{\textwidth}{0.4pt}}]
\titlespacing{\section}{0pt}{0.6em}{0.2em}

\newcommand{\cventry}[6]{%
  \noindent\begin{tabularx}{\textwidth}{@{}p{2.4cm} X@{}}
    {\small\textbf{#1}} &
    \textbf{#2} \newline
    {\small #3\if\relax\detokenize{#4}\relax\else\ /\ #4\fi}%
    \if\relax\detokenize{#5}\relax\else\newline{\small #5}\fi
    \if\relax\detokenize{#6}\relax\else\newline\small #6\fi
    \unskip
  \end{tabularx}
  \vspace{0.5em}
}

\newcommand{\certentry}[4]{%
  \noindent\begin{tabularx}{\textwidth}{@{}X r@{}}
    \textbf{#1} \newline
    {\small #2\ |\ #3} &
    \small #4
  \end{tabularx}
  \vspace{0.3em}
}

\newcommand{\skillcategory}[2]{%
  \noindent\textbf{#1:} #2\newline
  \vspace{0.15em}
}

\newcommand{\langentry}[2]{%
  \textbf{#1:} #2\newline
}

\newcommand{\makecvheader}{%
  \noindent
  {\huge\bfseries\cvname\par}
  {\large\cvtitle\par}
  \vspace{0.3em}
  {\small
    \cvemail \hspace{1em}
    \cvphone \hspace{1em}
    \cvlinkedin \hspace{1em}
    \cvgithub
  }
  \par\vspace{0.8em}
}

\endinput
