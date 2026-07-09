# Auditoría de Contenido — Gestión de Incidencias TI (HEVES)
### ITIL 4 · PMBOK · Design Thinking

**Fecha:** 2026-07-04
**Alcance de la revisión:** Todo el contenido enrutado del sitio (`src/app/pages/**`, `src/app/components/**`) y `src/app/App.tsx`.

---

## Veredicto general

El proyecto maneja **bien** la frontera en la sección de Alcance (excluye explícitamente el soporte post-cierre y la Gestión de Cambios), pero comete **tres errores conceptuales sistemáticos**:

1. Trata a ITIL 4 como un conjunto de *"procesos"* (terminología de ITIL v3).
2. Presenta los tiempos de SLA como *"normativos de ITIL 4"*, cuando ITIL no dicta valores de SLA.
3. La portada promete un alcance (incidentes **y cambios**) que el resto del sitio excluye.

Además, el vocabulario nuclear de ITIL 4 (**Sistema de Valor del Servicio, cadena de valor, co-creación de valor, principios guía**) está totalmente ausente.

---

## 🔴 SEVERIDAD ALTA

### Hallazgo 1 — Contradicción de alcance: la portada promete "cambios", el proyecto los excluye

**Archivo:** `src/app/components/MainSections.tsx` · línea 16

**Texto actual:**
```
Implementación de procesos ITIL 4 para la gestión de incidentes y cambios,
gestionado bajo el marco PMBOK 6ta Edición
```

**Por qué es incorrecto:** Esta es la promesa de valor principal del sitio, pero **contradice frontalmente** el alcance definido en el resto del proyecto:

- `DefinirAlcanceSalidasPage.tsx:60-66` → excluye "Gestión de Cambios (PS05.04)".
- `DobleDiamantePredictivoPage.tsx:42` → "Se elimina la 'Gestión de Cambios' para asegurar la viabilidad".
- `ActaSalidasPage.tsx:175` → excluye "Implementación de los subprocesos de Gestión de Problemas y Gestión de Cambios".
- El Objetivo Central (`ArbolObjetivosTree.tsx:21`) es **exclusivamente** de incidencias.

Además, "procesos ITIL 4" es un error terminológico (ver Hallazgo 3).

**Texto corregido (reemplazo directo):**
```
Implementación de la práctica de Gestión de Incidencias de ITIL 4,
gestionada como proyecto bajo el marco PMBOK 6.ª Edición
```

---

### Hallazgo 2 — Frontera Proyecto/Operación: el objetivo central mide desempeño operativo, no la entrega del proyecto

**Archivo:** `src/app/components/ArbolObjetivosTree.tsx` · línea 21 (Objetivo Central) — se replica en `FD1` (línea 20) y `FI1` (línea 18)

**Texto actual:**
```
Implementar el subproceso formal de gestión de incidencias TI (PS05.03) con marco
ITIL 4 y herramienta GLPI [...], logrando que el 95% de los incidentes TI se registren
y resuelvan a través de GLPI en un plazo de 6 meses.
```

**Por qué es incorrecto:** "Que el 95 % de los incidentes se **registren y resuelvan**" es un **indicador de operación del servicio (ITIL)**, no un entregable del proyecto (PMBOK). Un proyecto entrega una **capacidad** (subproceso formalizado + GLPI en producción + personal capacitado); *resolver los tickets del día a día* es trabajo operativo continuo que ocurre **después** del cierre —fase que el propio proyecto declara fuera de alcance en `DefinirAlcanceSalidasPage.tsx:87-94` ("Soporte en Producción Post-Cierre [...] quedan fuera del alcance").

Se agrava porque el proyecto dura **4 meses** (`MainSections.tsx:26`, "Sept–Dic 2026") pero estas metas se miden a "6 meses posteriores a la implementación": literalmente son horizontes post-proyecto.

La solución **no** es borrar la meta del 95 %, sino ubicarla en el nivel lógico correcto: en Marco Lógico es un **Fin/Propósito** (resultado esperado de la operación), no el objetivo de ejecución del proyecto. El objetivo del proyecto debe ser la **puesta en marcha de la capacidad**.

**Texto corregido (reemplazo directo):**
```
Implementar y dejar en operación el subproceso formal de Gestión de Incidencias de TI
(PS05.03), materializando la práctica de Gestión de Incidencias de ITIL 4 sobre la
herramienta GLPI [...], de modo que al cierre del proyecto la capacidad quede operativa
y adoptada (personal capacitado y ≥90% de incidentes canalizados por GLPI). La meta de
resolución del 95% constituye el resultado operativo esperado (Fin) a los 6 meses de
operación del servicio.
```

---

## 🟠 SEVERIDAD MEDIA

### Hallazgo 3 — Terminología ITIL v3 obsoleta: "procesos ITIL" en lugar de "prácticas"

ITIL 4 abandonó los "26 procesos" de v3 y los reemplazó por **34 prácticas** (*practices*). Llamar "proceso ITIL" a la Gestión de Incidencias es el error de terminología más frecuente del sitio.

> ⚠️ **Matiz importante — no purgar "proceso" a ciegas:** El término **"subproceso PS05.03"** es *correcto* cuando se refiere al **Mapa de Procesos institucional** del hospital (marco de *Gestión por Procesos* del Estado peruano / MINSA, RS N° 063-2020). Ese es un marco distinto de ITIL. La regla es: **"subproceso PS05.03"** para el artefacto institucional (correcto), y **"práctica"** cuando se atribuye la disciplina a ITIL 4. El puente conceptual ideal es: *"materializar la **práctica** de Gestión de Incidencias de ITIL 4 en el **subproceso** institucional PS05.03"*.

Correcciones puntuales donde se atribuye "proceso" **a ITIL**:

| Archivo:línea | Texto actual | Reemplazo |
|---|---|---|
| `MainSections.tsx:16` | "Implementación de procesos ITIL 4…" | "Implementación de la práctica de Gestión de Incidencias de ITIL 4…" (ver Hallazgo 1) |
| `MainSections.tsx:76` | "Implementación de procesos ITIL 4 en la Unidad de TI" | "Implementación de la práctica de Gestión de Incidencias (ITIL 4) en la Unidad de TI" |
| `CrearEdtSalidasPage.tsx:12` y `:32` | "Modelado de Procesos de Soporte ITIL 4" | "Modelado de la Práctica de Gestión de Incidencias (ITIL 4)" |
| `InteresadosSalidasPage.tsx:40` | "dueños directos del proceso ITIL" | "responsables de la práctica de Gestión de Incidencias" |
| `ArbolObjetivosTree.tsx:26` | "aprobación del nuevo subproceso ITIL" | "aprobación del subproceso institucional PS05.03 (que implementa la práctica ITIL 4)" |

---

### Hallazgo 4 — "SLA ITIL 4 Normativo": ITIL 4 no dicta valores de SLA

**Archivos:**

- `DtPrototiparPage.tsx:221` → `⏱️ SLA ITIL 4 Normativo: Atención < 15 minutos / < 2 horas`
- `DefinirAlcanceSalidasPage.tsx:111` → "asignación automática de SLAs menores a 15 minutos"
- `CrearEdtSalidasPage.tsx:44` → "forzando un SLA de atención estricto menor a 15 minutos"

**Por qué es incorrecto:** Un **SLA (Acuerdo de Nivel de Servicio)** es un **acuerdo negociado entre el proveedor y el cliente/negocio** según las necesidades del servicio. ITIL 4 aporta la **práctica de Gestión de Niveles de Servicio** (el *cómo* gestionarlos), pero **no prescribe** tiempos concretos como "15 minutos". Llamarlo *"SLA ITIL 4 Normativo"* presenta erróneamente a ITIL como una norma técnica prescriptiva (tipo ISO/NTP). Los 15 minutos son una **decisión institucional del HEVES**, no un mandato de ITIL.

**Texto corregido:**

- `DtPrototiparPage.tsx:221`:
```
⏱️ SLA institucional HEVES: Atención {priority === 'Alta' ? '< 15 minutos' : '< 2 horas'} asignada.
```
- `DefinirAlcanceSalidasPage.tsx:111`: "…comprobando la asignación automática de los **SLA institucionales acordados** (menores a 15 minutos en tickets críticos)."
- **Regla general:** reemplazar "SLA ITIL 4 Normativo" → **"SLA institucional / Objetivo de Nivel de Servicio acordado"**, y reservar "ITIL 4" para nombrar la *práctica de Gestión de Niveles de Servicio*.

---

## 🟡 SEVERIDAD BAJA (mejoras de coherencia)

### Hallazgo 5 — Ausencia del vocabulario nuclear de ITIL 4 (Sistema de Valor del Servicio / co-creación de valor)

En todo el sitio **no aparece** ni una vez: *Sistema de Valor del Servicio (SVS)*, *cadena de valor del servicio*, *co-creación de valor* ni *principios guía*. La adopción de ITIL 4 es hoy nominal ("marco ITIL 4" + SLAs).

**Recomendación:** añadir en el Acta (`ActaSalidasPage.tsx`, sección Propósito ~línea 71) una frase que ancle la práctica al SVS, p. ej.:

> *"El subproceso se enmarca en el **Sistema de Valor del Servicio (SVS)** de ITIL 4, contribuyendo a la **co-creación de valor** entre la UTI y el personal asistencial mediante la actividad de cadena de valor «Entregar y Dar Soporte»."*

### Hallazgo 6 — Sinergia PMBOK→ITIL: la transición se narra solo en clave de cierre PMBOK

La transición proyecto→operación está bien descrita en términos PMBOK (`CronogramaActividadesPage.tsx:90` "Acta de Conformidad Operativa / pase a producción"; `DobleDiamante` "transfiere el activo al cliente"). Falta nombrar el **lado ITIL** del traspaso: el momento en que la *práctica* entra en operación y **mejora continua**. Es una adición, no una corrección.

**Sugerencia** de una línea en el hito de cierre: *"…momento en que la práctica de Gestión de Incidencias pasa a operación continua bajo el ciclo de mejora de ITIL 4."*

### Hallazgo 7 — Design Thinking: coherente, pero sin puente explícito con "Enfocarse en el valor"

El uso de Design Thinking (Empatizar→Evaluar, mapeado al Doble Diamante sobre Inicio/Planificación de PMBOK) es **conceptualmente correcto y no genera ruido**. La oportunidad perdida: el primer principio guía de ITIL 4, **"Enfocarse en el valor"**, y la co-creación de valor se alinean naturalmente con la empatía/centrado en el usuario de Design Thinking, pero el sitio nunca lo enuncia.

**Sugerencia** de una frase en `DobleDiamantePredictivoPage.tsx` (cabecera, ~línea 164): *"La fase de empatía de Design Thinking operativiza el principio de ITIL 4 «Enfocarse en el valor», identificando el valor real para médicos y enfermeras antes de diseñar la solución."*

### Hallazgo 8 (housekeeping) — Contenido plantilla contradictorio no enrutado

`MethodologyPage.tsx`, `AboutPage.tsx`, `HomePage.tsx`, `BlogPage.tsx`, `ContactPage.tsx` y `OrganizacionSection` (`MainSections.tsx:85-247`, comentada en `App.tsx:411`) contienen contenido genérico de plantilla Figma **en inglés y sobre otro proyecto** ("Patient Support Program", 500 pacientes, $250,000 USD, "Programa de Atención Social Hospitalaria Integral"). No se renderizan, pero conviene **eliminarlos** para evitar que se reactiven por error o confundan una auditoría futura.

### Nota menor — Duración del proyecto inconsistente

"4 Meses" (`MainSections.tsx:26`) vs. "10 Semanas" (`AnalisisAlt1Section.tsx:48`) vs. metas "a 6 meses" (objetivos). Conviene unificar (el desfase alimenta la confusión del Hallazgo 2).

---

## Resumen priorizado

| # | Severidad | Hallazgo | Archivo(s) principal(es) |
|---|---|---|---|
| 1 | 🔴 Alta | Portada promete "cambios" fuera de alcance | `MainSections.tsx:16` |
| 2 | 🔴 Alta | Objetivo mide operación, no entrega del proyecto | `ArbolObjetivosTree.tsx:18,20,21` |
| 3 | 🟠 Media | "proceso ITIL" (v3) → debe ser "práctica" (v4) | `MainSections`, `CrearEdtSalidasPage`, `InteresadosSalidasPage`, `ArbolObjetivosTree` |
| 4 | 🟠 Media | "SLA ITIL 4 Normativo" — ITIL no dicta tiempos | `DtPrototiparPage:221`, `DefinirAlcanceSalidasPage:111`, `CrearEdtSalidasPage:44` |
| 5 | 🟡 Baja | Falta vocabulario nuclear ITIL 4 (SVS/valor) | `ActaSalidasPage` |
| 6 | 🟡 Baja | Transición PMBOK→ITIL sin lado ITIL | `CronogramaActividadesPage`, `DobleDiamante` |
| 7 | 🟡 Baja | Design Thinking sin puente a "Enfocarse en el valor" | `DobleDiamantePredictivoPage` |
| 8 | 🟡 Baja | Contenido plantilla en inglés no enrutado | `MethodologyPage`, `AboutPage`, `HomePage`, `BlogPage`, `ContactPage` |
