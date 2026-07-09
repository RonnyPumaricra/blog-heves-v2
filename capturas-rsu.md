# Guía de Capturas de Pantalla — Informe RSU

**Informe:** "Uso de PMBOK para la planificación e ITIL para el diseño de procesos de gestión de incidencias aplicado a un hospital de la ciudad de Lima, Perú"

Listado de secciones/páginas de la web (React/TypeScript) a capturar como evidencia visual, con su ruta para abrirlas en el navegador (`pnpm dev`).

---

## 1. Evidencias de Planificación con PMBOK (6ta Edición)

### Acta de Constitución del Proyecto
- **Archivo:** `src/app/pages/ActaSalidasPage.tsx` — ruta `/acta/salidas`
- **Qué muestra en pantalla:** El Acta de Constitución completa en tablas: datos generales (título, alta dirección, equipo), propósito/justificación y una tabla de **Hitos del Proyecto**.
- **Por qué tomar la captura:** Artefacto de inicio por excelencia del PMBOK (Grupo de Procesos de Inicio). Demuestra la autorización formal del proyecto mediante el *Project Charter* con datos reales.

### Registro de Interesados
- **Archivo:** `src/app/pages/InteresadosSalidasPage.tsx` — ruta `/interesados/salidas`
- **Qué muestra en pantalla:** Registro de **22 interesados** clasificados (16 personal HEVES, 4 equipo UNTELS, 2 externos) con nivel de influencia, poder y grado de interés.
- **Por qué tomar la captura:** Evidencia el proceso *Identificar a los Interesados*. La cuantificación y clasificación por poder/interés demuestran rigor en la Gestión de Interesados.

### Plan de Participación de Interesados
- **Archivo:** `src/app/pages/PlanParticipacionSalidasPage.tsx` — ruta `/gestion-interesados/salidas`
- **Qué muestra en pantalla:** Matriz de estrategias de participación (reuniones ejecutivas, validación de hitos, frecuencias de comunicación).
- **Por qué tomar la captura:** Complementa la Gestión de Interesados con el *Plan de Involucramiento*, mostrando cómo se gestiona activamente a cada actor.

### Árbol de Problemas y Árbol de Objetivos
- **Archivos:** `src/app/pages/ArbolProblemasPage.tsx` (`/eml/arbol-problemas`) y `src/app/pages/ArbolObjetivosPage.tsx` (`/eml/arbol-objetivos`)
- **Qué muestra en pantalla:** Diagramas de árbol causa-efecto (problemas) y medios-fines (objetivos) renderizados como componentes visuales.
- **Por qué tomar la captura:** Sustentan el diagnóstico bajo el Enfoque de Marco Lógico que precede a la planificación. Visualmente potentes para justificar el abordaje de la gestión de incidencias.

### Matriz de Marco Lógico
- **Archivo:** `src/app/pages/MatrizMarcoLogicoPage.tsx` — ruta `/eml/matriz-marco-logico`
- **Qué muestra en pantalla:** Matriz de Marco Lógico interactiva (Fin → Propósito → Componentes → Actividades) con sliders de indicadores (MTTR, adopción) que evalúan cumplimiento de metas.
- **Por qué tomar la captura:** Vincula objetivos con indicadores medibles (reducción de MTTR ≥ 20%); el componente interactivo aporta un carácter técnico y verificable.

### Declaración del Alcance
- **Archivo:** `src/app/pages/DefinirAlcanceSalidasPage.tsx` — rutas `/definir-alcance/salidas` y `/alcance/declaracion`
- **Qué muestra en pantalla:** Declaración del Alcance con inclusiones/exclusiones (diagnóstico AS-IS, diseño TO-BE ITIL v3, despliegue GLPI en Sandbox).
- **Por qué tomar la captura:** Evidencia el proceso *Definir el Alcance*. Delimita formalmente qué entra y qué no en el proyecto.

### EDT / WBS ⭐
- **Archivo:** `src/app/pages/CrearEdtSalidasPage.tsx` — rutas `/crear-edt/salidas` y `/alcance/edt`
- **Qué muestra en pantalla:** La **EDT/WBS** completa con 5 paquetes (Gestión, Diagnóstico, Implementación, Capacitación, Cierre) renderizada por `EdtDiagram.tsx`, más el diccionario de la EDT con responsables y criterios.
- **Por qué tomar la captura:** Artefacto de descomposición del trabajo más representativo del PMBOK. La jerarquía codificada (1.0, 2.3, 3.2…) demuestra dominio del proceso *Crear la EDT*. **Captura obligatoria.**

### Lista de Actividades ⭐
- **Archivo:** `src/app/pages/CronogramaActividadesPage.tsx` — ruta `/cronograma/actividades`
- **Qué muestra en pantalla:** Actividades A1–A8 con descripción, responsable, vínculo a la EDT y predecesoras. La última actividad contiene el hito de cierre y transición a Operación del Servicio (ver sección ITIL).
- **Por qué tomar la captura:** Muestra el proceso *Definir/Secuenciar Actividades* y sirve de puente entre PMBOK e ITIL.

### Diagrama de Gantt ⭐
- **Archivo:** `src/app/pages/CronogramaGanttPage.tsx` — ruta `/cronograma/gantt`
- **Qué muestra en pantalla:** Diagrama de Gantt gráfico de las 8 actividades sobre una línea de tiempo de 14 días, con duraciones y solapamientos.
- **Por qué tomar la captura:** Representación icónica del cronograma en gestión de proyectos. Visualmente contundente como evidencia de planificación temporal.

### Técnicas de Cronograma (PERT / CPM / Secuenciación)
- **Archivos:**
  - `src/app/pages/CronogramaSecuenciacionPage.tsx` (`/cronograma/secuenciacion`) — diagrama de red de precedencias.
  - `src/app/pages/CronogramaPertPage.tsx` (`/cronograma/pert`) — **Estimación PERT** (optimista/probable/pesimista).
  - `src/app/pages/CronogramaCpmPage.tsx` (`/cronograma/cpm`) — **Ruta Crítica (CPM)** con holguras y cierre en el Día 13.
- **Por qué tomar la captura:** Demuestran el uso de técnicas cuantitativas formales del PMBOK (PERT y CPM), elevando el rigor académico más allá de un cronograma descriptivo.

---

## 2. Evidencias del Diseño del Proceso ITIL v3

### Prototipo, SLA y Flujograma del Proceso de Incidencias ⭐⭐ (archivo central de ITIL)
- **Archivo:** `src/app/pages/DtPrototiparPage.tsx` — ruta `/design-thinking/prototipar`

Recomendado tomar **varias capturas del mismo archivo**:

- **Captura A — Prototipo móvil de SLA:**
  - *Qué muestra:* Simulación de smartphone con el micro-portal de reporte de incidencias (escaneo QR → 3 campos) que **autocalcula el SLA institucional** (< 15 min para UCI/Emergencia, < 2 h para el resto) según la criticidad.
  - *Por qué:* Evidencia tangible del **Acuerdo de Nivel de Servicio (SLA)** institucional, pilar del Diseño del Servicio en ITIL. El cálculo automático demuestra aplicación práctica.

- **Captura B — Ficha técnica y reglas de SLA coercitivos:**
  - *Qué muestra:* Especificación de infraestructura (GLPI v10, VLAN aislada), reglas de SLA (Alta < 15 min / Media < 2 h) y tabla de criterios de ingeniería con métricas de aceptación y método de auditoría.
  - *Por qué:* Formaliza los SLA institucionales con métricas cuantitativas y base normativa (**RS N° 063-2020-MINSA**).

- **Captura C — Flujograma del proceso PS05.03:**
  - *Qué muestra:* Secuencia visual del **flujo del subproceso PS05.03 — Gestión de Incidentes de Servicios TI HEVES** (diseño TO-BE tras implementar GLPI), con navegación paso a paso.
  - *Por qué:* Es *el diseño del flujo del proceso de incidencias*, corazón de la aplicación de ITIL v3. Captura imprescindible.

### Diseño TO-BE ITIL dentro del Alcance
- **Archivo:** `src/app/pages/DefinirAlcanceSalidasPage.tsx` — ruta `/definir-alcance/salidas`
- **Qué muestra en pantalla:** La inclusión "Diseño del Proceso TO-BE bajo ITIL v3" y el modelado del subproceso PS05.03 dentro del alcance.
- **Por qué tomar la captura:** Conecta explícitamente el alcance PMBOK con el diseño de procesos ITIL, mostrando la integración de ambos marcos (tesis central del informe).

### Modelado ITIL en el Diccionario de la EDT
- **Archivo:** `src/app/pages/CrearEdtSalidasPage.tsx` — ruta `/crear-edt/salidas` (diccionario, paquete 2.3)
- **Qué muestra en pantalla:** El ítem "2.3 Modelado de Procesos de Soporte ITIL v3" con responsable, recursos (Bizagi Modeler, ITIL v3) y criterio de alineación 100% a la RS N° 063-2020-MINSA.
- **Por qué tomar la captura:** Evidencia que el modelado ITIL está formalmente integrado como entregable dentro de la estructura de trabajo PMBOK.

### Hito de Transición a la fase de Operación del Servicio ⭐
- **Archivo:** `src/app/pages/CronogramaActividadesPage.tsx` — ruta `/cronograma/actividades` (actividad A8 / hito final)
- **Qué muestra en pantalla:** La descripción del hito de despliegue piloto: *"…se cierra el proyecto (PMBOK) y el proceso de Gestión de Incidencias **transiciona a la fase de Operación del Servicio** bajo el ciclo de vida de ITIL v3"*.
- **Por qué tomar la captura:** Es exactamente el **hito de transición a la fase de Operación del Servicio**. Documenta el paso del ciclo de vida PMBOK al ciclo de vida ITIL: el punto de articulación entre ambos marcos.

---

## Resumen de prioridad

| Prioridad | Captura | Ruta | Marco |
|---|---|---|---|
| ⭐⭐ | Prototipo SLA + ficha + flujograma PS05.03 | `/design-thinking/prototipar` | ITIL |
| ⭐ | EDT/WBS visual | `/crear-edt/salidas` | PMBOK |
| ⭐ | Diagrama de Gantt | `/cronograma/gantt` | PMBOK |
| ⭐ | Hito de transición a Operación del Servicio | `/cronograma/actividades` | PMBOK↔ITIL |
| ⭐ | Acta de Constitución | `/acta/salidas` | PMBOK |

> **Nota práctica:** levanta el servidor con `pnpm dev` y navega por las rutas indicadas usando el sidebar izquierdo (Gestión de Interesados, Marco Lógico, Alcance, Cronograma). Captura cada sección con su encabezado visible para reforzar el contexto en el informe.
