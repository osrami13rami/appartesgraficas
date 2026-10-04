/* ========================================================
   1. BANCO DE PREGUNTAS - TEST GUILLOTINA (POLAR 115)
   ======================================================== */
const questionsGuillotina = [
  // --- Bloque 1: Prevención de Riesgos Laborales y Ergonomía ---
  {
    theme: 1,
    question: "Según el manual de PRL, ¿qué tipo de calzado es de uso imprescindible para trabajar en el taller de corte?",
    options: [
      "Calzado de seguridad con puntera reforzada antimpacto y suela antideslizante",
      "Calzado deportivo ligero de suela blanda",
      "Zapatos de cuero liso para deslizar mejor los pies"
    ],
    correct: 0,
    explanation: "El riesgo de caída de bloques pesados, tacos de madera o piezas mecánicas exige el uso permanente de calzado de seguridad.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "Según el manual, al manipular un bloque de papel de 20 kg con la espalda encorvada unos 30°, la carga real ejercida sobre la columna actúa equivalente a:",
    options: [
      "Un esfuerzo equivalente a 60 kg",
      "Un esfuerzo equivalente a 30 kg",
      "Un esfuerzo equivalente a 80 kg"
    ],
    correct: 0,
    explanation: "El estudio ergonómico del manual indica que una inclinación de 30° con 20 kg de peso triplica la fuerza teórica sobre la columna vertebral, actuando como 60 kg.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Cuál es el procedimiento correcto de agarre manual al levantar una pila de papel de 70 x 100 cm?",
    options: [
      "Sujetar la carga ergonómicamente desde el centro de los laterales",
      "Sujetar únicamente por las dos esquinas superiores con los brazos extendidos",
      "Sujetar mediante pinza digital con una sola mano en el canto frontal"
    ],
    correct: 0,
    explanation: "Para equilibrar el peso y evitar sobrecargar los brazos y la columna, la pila debe tomarse centrada por ambos lados.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Cuál de las siguientes acciones es una medida obligatoria de Prevención de Riesgos en el taller de guillotinas?",
    options: [
      "Utilizar el taco de madera para aproximar o manipular material cerca del pisón",
      "Mover las postetas de papel utilizando siempre una sola mano para acelerar la carga",
      "Ajustar la presión del pisón con la máquina realizando el ciclo de corte automático"
    ],
    correct: 0,
    explanation: "Está strictly indicado no acercar la mano al pisón y utilizar siempre el taco de madera como elemento auxiliar de empuje.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué equipo de protección individual (EPI) se debe usar obligatoriamente en las manos durante la manipulación y sustitución de cuchillas?",
    options: [
      "Guantes de protección anticorte certificados",
      "Guantes de látex desechables de alta sensibilidad",
      "Manoplas térmicas de teflón"
    ],
    correct: 0,
    explanation: "Aunque la cuchilla esté sostenida en su soporte, la manipulación directa exige el uso obligatorio de guantes anticorte.",
    source: "Manual Guillotinero (Pág. 117)"
  },
  {
    theme: 1,
    question: "¿Por qué razón biomecánica la velocidad excesiva de las guillotinas automáticas incrementa el riesgo de fatiga en la columna del operador?",
    options: [
      "Por la aceleración del ritmo de flexiones e inclinaciones continuas del tronco sin pausas de recuperación",
      "Por las vibraciones mecánicas que transmite la mesa de aire",
      "Por la elevación del nivel de decibelios del motor principal"
    ],
    correct: 0,
    explanation: "La repetición rápida de movimientos con flexión lumbar genera microtraumatismos acumulativos en los discos intervertebrales.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Cuánto pesa aproximadamente una resma de 1000 pliegos de papel de cartas de 80 g/m²?",
    options: [
      "Aproximadamente 5 kg",
      "Aproximadamente 12 kg",
      "Aproximadamente 25 kg"
    ],
    correct: 0,
    explanation: "Cálculo de masa teórica para pliegos de papelería administrativa estándar.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Cuál es el peso aproximado de una resma de 1000 pliegos de 8 páginas en papel cromo estucado de 115 g/m²?",
    options: [
      "Alrededor de 28,7 kg",
      "Alrededor de 10,2 kg",
      "Alrededor de 55,0 kg"
    ],
    correct: 0,
    explanation: "El recubrimiento estucado eleva el peso específico del paquete bordeando el límite de manipulabilidad de 30 kg.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿En cuántas partes se divide habitualmente una resma pesada de 30 kg para no sobrepasar límites ergonómicos al apilarla?",
    options: [
      "En dos o tres postetas de 10 a 15 kg máximo",
      "Se debe cargar en una sola maniobra sin dividir",
      "En diez partes de 3 kg cada una"
    ],
    correct: 0,
    explanation: "Fraccionar el bloque evita superar el umbral biomecánico recomendado de carga por levantamiento.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Dónde deben depositarse de forma específica los desperdicios y recortes de papel generados en la guillotina?",
    options: [
      "En las jaulas o contenedores específicos de recortes de papel",
      "Sobre la mesa trasera de aire acumulados contra la escuadra",
      "En el suelo alrededor de las piernas del operador"
    ],
    correct: 0,
    explanation: "Mantener el suelo despejado previene caídas y clasifica el papel desperdiciado para su reciclaje.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué productos químicos están permitidos para las tareas de limpieza y desengrase de la mesa de corte?",
    options: [
      "Limpiadores no inflamables y neutros autorizados por el fabricante",
      "Disolventes universales altamente volátiles",
      "Ácido clorhídrico diluido"
    ],
    correct: 0,
    explanation: "Se deben emplear productos no inflamables para evitar que chispas estáticas inicien una ignición.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre si se interrumpe el retículo luminoso de la barrera de luz durante el funcionamiento de la guillotina?",
    options: [
      "Se paran inmediatamente el pisón y la cuchilla, y suena una señal acústica",
      "La cuchilla completa el corte pero el pisón se detiene",
      "La máquina reduce la velocidad a modo de ajuste"
    ],
    correct: 0,
    explanation: "La interrupción de la barrera de luz causa el paro inmediato del pisón y la cuchilla, emite una alarma sonora y muestra 'CORTE INTERRUMPIDO' en la pantalla.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 1,
    question: "¿Qué señal de advertencia adicional acompaña al paro automático por corte de la barrera de luz?",
    options: [
      "Una señal acústica de alarma y un mensaje en la pantalla de control",
      "El encendido de la mesa neumática a máxima presión",
      "El retroceso de la escuadra a la posición cero"
    ],
    correct: 0,
    explanation: "Combina aviso sonoro continuo con la indicación en la pantalla táctil para alertar de la interrupción.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el pedal en presencia de una interrupción de la barrera de luz?",
    options: [
      "Permite bajar el pisón únicamente para la indicación óptica del corte",
      "Permite ejecutar un corte a velocidad lenta",
      "Permite hacer retroceder la escuadra manualmente"
    ],
    correct: 0,
    explanation: "Aunque el retículo luminoso esté interrumpido (lo que impide la presión y el corte automático), el pisón se puede bajar con el pedal a modo de indicador visual.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 1,
    question: "¿Cuál es la secuencia de mandos requerida para reanudar el ciclo de corte tras corregir la interrupción de la barrera de luz?",
    options: [
      "Despejar la zona fotosensible, rearmar el mensaje en pantalla y volver a accionar el mando bimanual",
      "Pulsar la seta de emergencia dos veces consecutivas",
      "Apagar y encender el interruptor general"
    ],
    correct: 0,
    explanation: "El sistema exige la confirmación consciente y el reaccionamiento simultáneo de las manos.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 1,
    question: "¿Cuántos candados como máximo se pueden colocar en el interruptor principal para bloquear la conexión no autorizada de la máquina?",
    options: [
      "3 candados simultáneos",
      "1 candado único",
      "5 candados en paralelo"
    ],
    correct: 0,
    explanation: "El interruptor principal dispone de un sistema de bloqueo que admite hasta tres candados simultáneos (p. ej., operador, mantenimiento, etc.).",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el mando de accionamiento bimanual con tiempo de simultaneidad en la bajada de la cuchilla?",
    options: [
      "Garantizar que ambas manos del operario estén ocupadas fuera de la zona de peligro durante la bajada del filo",
      "Aumentar la presión del pisón hidráulico",
      "Alinear la escuadra con el borde del papel"
    ],
    correct: 0,
    explanation: "Obliga a pulsar ambos mandos con una diferencia menor a 0,5 segundos para evitar puentes de seguridad.",
    source: "Manual Guillotinero (Pág. 40)"
  },
  {
    theme: 1,
    question: "¿Qué elemento debe verificarse antes de comenzar el turno de trabajo o realizar un cambio de operarios?",
    options: [
      "La capacidad funcional e integridad de los elementos de máquina importantes para la seguridad",
      "La alineación de las mesas elevadoras de descarga",
      "El vaciado del disco duro de la pantalla táctil"
    ],
    correct: 0,
    explanation: "La normativa de seguridad expuesta exige inspeccionar los dispositivos de seguridad de la guillotina antes de iniciar el servicio o cambiar de turno.",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 1,
    question: "¿En qué lugar específico deben mantenerse libres los obstáculos para asegurar una rápida evacuación en el taller?",
    options: [
      "En las vías de evacuación, pasillos de tránsito y accesos a cuadros eléctricos",
      "Exclusivamente sobre la mesa de aire trasera",
      "En el interior del cajón de recortes"
    ],
    correct: 0,
    explanation: "Las vías de escape no deben bloquearse bajo ninguna circunstancia con palés o pilas de papel.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué daño específico puede provocar a la vista o al físico la proyección de un trozo de cartón rígido durante el impacto de la cuchilla?",
    options: [
      "Impactos o lesiones por esquirlas que saltan despedidas a causa de la fuerte compresión de corte",
      "Quemaduras térmicas por contacto",
      "Descargas de alta tensión estática"
    ],
    correct: 0,
    explanation: "El impacto brusco sobre materiales rígidos no asentados puede astillar y proyectar bordes duros hacia afuera.",
    source: "Manual Guillotinero (Pág. 6)"
  },

  // --- Bloque 2: Papel, Formatos y Comportamiento en Corte ---
  {
    theme: 2,
    question: "¿Cuáles son los cuatro grupos principales en los que se clasifican los papeles en artes gráficas según el manual?",
    options: [
      "Papeles no estucados, papeles estucados, cartulinas y cartones",
      "Papeles de prensa, sintéticos, plásticos y maderas",
      "Papeles autocopiativos, térmicos, vegetales y sulfurizados"
    ],
    correct: 0,
    explanation: "Clasificación oficial basada en la estructura del soporte, porosidad y gramaje.",
    source: "Manual Guillotinero (Pág. 10)"
  },
  {
    theme: 2,
    question: "¿Qué comportamiento presenta el papel no estucado a medida que disminuye su gramaje durante la fase de igualado?",
    options: [
      "Pierde rigidez flexional (handling), siendo propenso a doblarse o abombarse al chocar con la escuadra",
      "Aumenta su rigidez permitiendo igualados a alta velocidad",
      "Absorbe el colchón de aire volviéndose pesado"
    ],
    correct: 0,
    explanation: "A menor masa de celulosa, la hoja pierde nervio y tiende a deformarse en los topes.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "Al cortar papel adhesivo en la guillotina, ¿qué mantenimiento operativo se requiere de manera periódica?",
    options: [
      "Limpiar la escuadra, mesa, pisón y cuchilla para eliminar restos de adhesivo pegajoso",
      "Aumentar la presión del pisón al máximo",
      "Desconectar las toberas de aire de la mesa delantera"
    ],
    correct: 0,
    explanation: "El adhesivo interno impregnará las superficies de contacto (cuchilla, pisón, mesa, escuadra), requiriendo limpiezas periódicas para no ensuciar los pliegos.",
    source: "Manual Guillotinero (Pág. 6)"
  },
  {
    theme: 2,
    question: "Al trabajar con cartón reciclado de alto gramaje, ¿qué peligro principal presenta para la cuchilla?",
    options: [
      "Que contenga elementos abrasivos como arena o metales que mellen el filo",
      "Que se adhiera pegamento fresco en la cara frontal",
      "Que provoque un sobrecalentamiento del aceite hidráulico"
    ],
    correct: 0,
    explanation: "El cartón reciclado grueso puede contener impurezas dañinas (arena, partículas metálicas) que deterioran o dañan la cuchilla prematuramente.",
    source: "Manual Guillotinero (Pág. 6)"
  },
  {
    theme: 2,
    question: "¿En qué año fue editada la norma alemana DIN 476 que sirvió de base para el estándar internacional ISO 216?",
    options: [
      "En el año 1922",
      "En el año 1950",
      "En el año 1905"
    ],
    correct: 0,
    explanation: "Desarrollada por Walter Porstmann en 1922, definió la serie A basada en el metro cuadrado.",
    source: "Manual Guillotinero (Pág. 7)"
  },
  {
    theme: 2,
    question: "¿Qué relación matemática guarda la proporción entre el lado menor y el lado mayor de un pliego de la serie A?",
    options: [
      "Proporción de 1 a la raíz cuadrada de 2 (1 : √2)",
      "Proporción de 1 : 1,618 (número áureo)",
      "Proporción directa de 1 : 2"
    ],
    correct: 0,
    explanation: "Mantiene la semejanza de proporciones (1:1,414) al cortar cualquier pliego por la mitad.",
    source: "Manual Guillotinero (Pág. 7)"
  },
  {
    theme: 2,
    question: "Según las normas internacionales ISO 216 / DIN 476, ¿cuál es la medida base del formato A0?",
    options: [
      "841 x 1189 mm",
      "1000 x 1414 mm",
      "594 x 841 mm"
    ],
    correct: 0,
    explanation: "El formato A0 es la referencia de la Serie A, teniendo una superficie de 1 m² y unas dimensiones estándar de 841 x 1189 mm.",
    source: "Manual Guillotinero (Págs. 7 y 8)"
  },
  {
    theme: 2,
    question: "En la norma ISO 216, ¿cómo se obtiene el formato A1 a partir del A0?",
    options: [
      "Dividiendo el A0 mediante un corte paralelo a su lado más corto (594 x 841 mm).",
      "Plegando el A0 en tres partes iguales.",
      "Multiplicando la superficie por dos."
    ],
    correct: 0,
    explanation: "Cada formato de la serie A se obtiene dividiendo a la mitad el formato superior por su lado mayor.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Qué características define al formato de la Serie B (ISO 216)?",
    options: [
      "Es la media geométrica entre dos formatos consecutivos de la Serie A.",
      "Es un formato exclusivo para sobres de correos.",
      "Es el formato base para la fabricación de cartón ondulado."
    ],
    correct: 0,
    explanation: "La Serie B se utiliza como tamaño intermedio cuando las dimensiones de la Serie A no ofrecen el margen suficiente para trabajos de imprenta.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Cuáles son las dimensiones en milímetros del formato B0?",
    options: [
      "1000 x 1414 mm",
      "841 x 1189 mm",
      "917 x 1297 mm"
    ],
    correct: 0,
    explanation: "Tamaño con 1 metro exacto en su lado menor y 1414 mm en el mayor.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Qué serie estándar de formatos se sitúa geométricamente entre los tamaños de la serie A y la serie B?",
    options: [
      "La Serie C (para sobres y carpetas)",
      "La Serie D",
      "La Serie N"
    ],
    correct: 0,
    explanation: "La serie C es la media geométrica entre A y B, idónea para embalajes de papel.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Qué tolerancia dimensional permite la norma DIN 476 para medidas pequeñas (de 0 a 150 mm)?",
    options: [
      "± 1,5 mm.",
      "± 0,1 mm.",
      "± 5,0 mm."
    ],
    correct: 0,
    explanation: "La norma tolera desvíos de ± 1,5 mm para cotas cortas debido a las variaciones higrométricas del papel.",
    source: "Manual Guillotinero (Pág. 7)"
  },
  {
    theme: 2,
    question: "¿Qué tolerancia dimensional se autoriza para medidas comprendidas entre 150 mm y 600 mm?",
    options: [
      "± 2,0 mm",
      "± 0,5 mm",
      "± 4,0 mm"
    ],
    correct: 0,
    explanation: "Tolerancia dimensional estándar para formatos medianos según la norma ISO.",
    source: "Manual Guillotinero (Pág. 7)"
  },
  {
    theme: 2,
    question: "¿Qué tolerancia dimensional se acepta según la norma ISO/DIN para medidas superiores a 600 mm?",
    options: [
      "± 3 mm",
      "± 1,5 mm",
      "± 2 mm"
    ],
    correct: 0,
    explanation: "La tabla de desviaciones ISO/DIN tolera ± 1,5 mm (hasta 150 mm), ± 2 mm (hasta 600 mm) y ± 3 mm para medidas superiores a 600 mm.",
    source: "Manual Guillotinero (Pág. 7)"
  },
  {
    theme: 2,
    question: "Mencione dos normas nacionales que contemplan explícitamente los formatos extendidos 2A0 y 4A0 no recogidos en ISO 216.",
    options: [
      "DIN 476 (Alemania) y UNE 1011 (España)",
      "ANSI (EE.UU.) y JIS (Japón)",
      "BS (Reino Unido) y AFNOR (Francia)"
    ],
    correct: 0,
    explanation: "Normas europeas que adaptan formatos industriales gigantes para cartelería.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "Las medidas normalizadas para el formato tradicional 'Folio' en España son:",
    options: [
      "215 x 315 mm",
      "210 x 297 mm",
      "229 x 324 mm"
    ],
    correct: 0,
    explanation: "El Folio mide 215 x 315 mm, su mitad es la cuartilla (215 x 157,5 mm) y la mitad de esta la octavilla.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Qué dimensiones presenta una cuartilla y qué relación guarda con el formato Folio?",
    options: [
      "215 x 157,5 mm (mitad exacta del Folio tradicional)",
      "148 x 210 mm (equivalente a A5)",
      "200 x 250 mm"
    ],
    correct: 0,
    explanation: "Corte transversal a la mitad del folio estándar.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Qué diferencia de longitud existe entre una hoja de tamaño Holandesa y un Folio estándar?",
    options: [
      "La Holandesa es más corta (mide 215 x 275 mm frente a los 315 mm del Folio)",
      "La Holandesa es 5 cm más ancha",
      "Miden lo mismo pero cambia el gramaje"
    ],
    correct: 0,
    explanation: "Mantiene el ancho de 215 mm pero recorta el largo en 40 mm.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Cuáles son las dimensiones en milímetros del formato americano Letter (Carta)?",
    options: [
      "215,9 x 279,4 mm (8,5 x 11 pulgadas)",
      "210 x 297 mm",
      "215 x 355 mm"
    ],
    correct: 0,
    explanation: "Medida estándar de papelería en Estados Unidos e Hispanoamérica.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Qué medidas en pulgadas y en milímetros corresponden al formato Tabloid?",
    options: [
      "11 x 17 pulgadas (279,4 x 431,8 mm)",
      "12 x 18 pulgadas (304,8 x 457,2 mm)",
      "8,5 x 14 pulgadas (215,9 x 355,6 mm)"
    ],
    correct: 0,
    explanation: "Equivale al doble de una hoja Letter (Carta).",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "Defina la diferencia técnica fundamental entre el gramaje y el grosor de una hoja de papel.",
    options: [
      "El gramaje es la masa en g/m²; el grosor es la distancia entre las dos caras expresada en micras (µm)",
      "El gramaje mide el grosor y el espesor mide el aire de la hoja",
      "Son dos nombres para la misma propiedad física"
    ],
    correct: 0,
    explanation: "Hojas con igual gramaje pueden presentar grosores distintos según su volumen específico.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿En qué unidad de medida micrométrica se expresa el grosor de un pliego impreso?",
    options: [
      "En micras o micrómetros (µm)",
      "En miligramos por pulgada",
      "En nanómetros"
    ],
    correct: 0,
    explanation: "Unidad utilizada por micrómetros de precisión de taller.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Cómo influye el 'volumen específico' en las propiedades del papel?",
    options: [
      "A mayor volumen específico, el papel es más grueso y ligero",
      "A mayor volumen específico, el papel es más fino y pesado",
      "A menor volumen específico, la hoja se vuelve más rugosa e inestable en el igualado"
    ],
    correct: 0,
    explanation: "El volumen específico es la relación entre grosor y gramaje. Cuanto mayor es el volumen, más grueso y ligero resulta el pliego por su contenido de aire.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "En la clasificación general del papel por gramaje, ¿qué rango comprende a las 'Cartulinas'?",
    options: [
      "De 150 a 450 g/m²",
      "De 7 a 150 g/m²",
      "De 450 a 800 g/m²"
    ],
    correct: 0,
    explanation: "El manual clasifica: Papeles (7 a 150 g/m²), Cartulinas (150 a 450 g/m²) y Cartones (de 450 g/m² en adelante).",
    source: "Manual Guillotinero (Pág. 10)"
  },
  {
    theme: 2,
    question: "¿A partir de qué límite de gramaje se considera formalmente que un material pasa a ser cartón?",
    options: [
      "A partir de 450 g/m²",
      "A partir de 250 g/m²",
      "A partir de 600 g/m²"
    ],
    correct: 0,
    explanation: "Superados los 450 g/m² el soporte entra en la categoría de cartón o cartoncillo rígido.",
    source: "Manual Guillotinero (Pág. 10)"
  },

  // --- Bloque 3: Manejo, Igualado, Tacas y Marcado ---
  {
    theme: 3,
    question: "¿En qué consiste la operación de exfoliado de pliegos y qué objetivo persigue antes del vibrado?",
    options: [
      "Ventear y abrir manualmente las esquinas para romper el bloqueo entre hojas introduciendo aire",
      "Mojar los bordes con agua destilada",
      "Echar polvos de talco entre pliegos"
    ],
    correct: 0,
    explanation: "Abre bolsas de aire que destruyen la adherencia facilitando el posterior deslizamiento en la mesa vibradora.",
    source: "Manual Guillotinero (Pág. 13)"
  },
  {
    theme: 3,
    question: "Cuando los pliegos se pegan entre sí por tinta o barniz fresco al salir de la impresora, ¿qué técnica física manual se utiliza para despegarlos antes del vibrado?",
    options: [
      "Enrollar pequeñas cantidades de pliegos sucesivamente para generar tensión por diferencia de diámetros",
      "Golpear la posteta fuertemente contra la mesa hidráulica",
      "Humedecer los bordes con un paño disolvente"
    ],
    correct: 0,
    explanation: "Al formar un rodillo con el papel y girarlo, las diferencias de radio crean tensiones mecánicas entre pliegos que rompen la adherencia de la tinta.",
    source: "Manual Guillotinero (Pág. 13)"
  },
  {
    theme: 3,
    question: "¿Cómo actúa el espolvoreado de polvos antirrepinte en la máquina de imprimir sobre el proceso posterior de corte?",
    options: [
      "Crea una capa microscópica de separación pero puede hacer que los pliegos resbalen en exceso al guillotinar",
      "Pega fuertemente los bordes",
      "Calienta la cuchilla"
    ],
    correct: 0,
    explanation: "El grano de almidón evita que repinte la tinta, pero reduce la fricción entre hojas en la posteta.",
    source: "Manual Guillotinero (Pág. 13)"
  },
  {
    theme: 3,
    question: "Describa el procedimiento de agitación manual en rodillo para desatascar o separar pliegos adheridos.",
    options: [
      "Formar un rollo con una porción de papel y hacerlo girar sobre sí mismo para desplazar los pliegos",
      "Sacudir la posteta verticalmente contra el suelo",
      "Doblar la posteta en ángulo recto sobre la mesa"
    ],
    correct: 0,
    explanation: "Despega los puntos de contacto sin doblar ni mellar las esquinas del pliego.",
    source: "Manual Guillotinero (Pág. 13)"
  },
  {
    theme: 3,
    question: "¿Por qué el curvado en rodillo genera tensiones superficiales que despegan las hojas impresas?",
    options: [
      "Porque las capas exteriores e interiores recorren arcos de diferente longitud obligando al papel a deslizar",
      "Porque eleva la temperatura del barniz",
      "Porque anula la gravedad"
    ],
    correct: 0,
    explanation: "La diferencia de diámetro forzado rompe los puentes de tinta seca entre hojas.",
    source: "Manual Guillotinero (Pág. 13)"
  },
  {
    theme: 3,
    question: "¿Qué problema mecánico se origina al intentar vibrar un papel que presenta ondulaciones paralelas a su dirección de fibra?",
    options: [
      "El borde abombado golpea contra la escuadra y rebota impidiendo que la pila quede plana",
      "Se incendia por rozamiento",
      "La vibradora se bloquea"
    ],
    correct: 0,
    explanation: "Las ondulaciones hacen de 'resorte' impidiendo que los pliegos apoyen planos en el tope.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "Para facilitar el vibrado de hojas que se enrollan paralelamente a su lado longitudinal, ¿qué truco operativo se cita en el manual?",
    options: [
      "Colocar transversalmente un listón o trozo de palo de escoba bajo los pliegos para darles rigidez",
      "Aplicar calor directo sobre la cuchilla",
      "Rociar talco industrial en la mesa trasera"
    ],
    correct: 0,
    explanation: "Colocar un palo de madera transversal bajo la pila le confiere rigidez perpendicular a la ondulación, permitiendo que el papel entre plano contra la regla trasera.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "¿Qué precaución especial debe adoptarse al intentar igualar pliegos que incorporan perforaciones o troquelados?",
    options: [
      "Reducir la fuerza de vibración para no enganchar ni romper las pestañas caladas",
      "Poner el rodillo de aire a la máxima presión",
      "Humedecer la mesa de soporte"
    ],
    correct: 0,
    explanation: "Las rebabas troqueladas se entrelazan si la oscilación de la mesa es brusca.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "¿Por qué es recomendable desconectar el rodillo sacador de aire cuando se trabaja con papeles troquelados o perforados?",
    options: [
      "Porque las ruedas del rodillo pueden enganchar las pestañas troqueladas y rasgar la posteta",
      "Porque agota la presión hidráulica",
      "Porque tapa las celdas ópticas"
    ],
    correct: 0,
    explanation: "La presión puntual del rodillo de caucho destruye los calados delicados.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "¿Cuál es el procedimiento adecuado para vibrar láminas de plástico con alta adherencia estática?",
    options: [
      "Intercalar hojas de papel entre las láminas de plástico para romper la succión",
      "Incrementar la velocidad de vibrado al nivel máximo",
      "Humedecer la escuadra con agua destilada"
    ],
    correct: 0,
    explanation: "La inserción intercalada de pliegos de papel elimina la atracción de superficie entre láminas plásticas, permitiendo que la pila se mueva e iguale.",
    source: "Manual Guillotinero (Págs. 14 y 15)"
  },
  {
    theme: 3,
    question: "¿Qué función desempeñan las 'guías de registro' mecánicas montadas sobre la mesa vibradora?",
    options: [
      "Servir de alineadores mecánicos donde apoyan los bordes del pliego durante la oscilación",
      "Calibrar la velocidad del motor",
      "Medir las micras del papel"
    ],
    correct: 0,
    explanation: "Ofrecen una superficie plana perpendicular contra la que choca y se encuadra la posteta.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "¿En qué caso el uso de guías de registro en la vibradora resulta contraproducente o dobla los cantos del papel?",
    options: [
      "En papeles de bajo gramaje o porciones muy delgadas que se deforman ante el golpe lateral",
      "Al trabajar con cartones rígidos",
      "Cuando la mesa está completamente plana"
    ],
    correct: 0,
    explanation: "Hojas sin rigidez suficiente se chafan al chocar contra topes rígidos.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "¿Por qué es necesario eliminar el colchón de aire aprisionado entre los pliegos antes de introducir la posteta en la guillotina?",
    options: [
      "Para evitar que las hojas resbalen entre sí desalineando el corte cuando baje el pisón",
      "Para evitar que el papel cambie de color",
      "Para no mellar la cuchilla"
    ],
    correct: 0,
    explanation: "El aire atrapado lubrica el contacto entre capas provocando desplomados.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿A qué presión de manómetro debe ajustarse por defecto el rodillo sacador de aire para postetas estándar?",
    options: [
      "A una presión de 2 bares",
      "A 10 bares",
      "A 0,1 bar"
    ],
    correct: 0,
    explanation: "Valor de presión estándar para extraer el aire sin aplastar la fibra.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "Si al evacuar el aire de una pila muy voluminosa la desconexión de seguridad se activa por exceso de resistencia, ¿qué ajuste de presión inicial se recomienda en el manómetro?",
    options: [
      "Bajar la presión a 0 bares para que actúe solo el peso del rodillo",
      "Elevar la presión a 6 bares",
      "Mantener la presión constante en 4 bares"
    ],
    correct: 0,
    explanation: "Reduciendo la presión a 0 bares, el rodillo trabaja únicamente con su propio peso en un primer ciclo para sacar el exceso grueso de aire sin disparar la protección.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿Qué indica visualmente una franja vertical oscura y uniforme en la cara lateral de una posteta igualada?",
    options: [
      "Que el bloque está perfectamente escuadrado e igualado en sus bordes",
      "Que el papel se ha quemado por fricción",
      "Un fallo en el registro de color"
    ],
    correct: 0,
    explanation: "Reflejo homogéneo en un canto totalmente compacto y paralelo.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿Qué revela la presencia de una marca irregular o escalonada de color en el lateral del bloque de papel antes de cortar?",
    options: [
      "Un igualado defectuoso con pliegos desalineados que no tocaron la escuadra",
      "Que el papel es sintético",
      "Que los sopladores están limpios"
    ],
    correct: 0,
    explanation: "Los escalones muestran hojas retrasadas que cortarán con falta de medida.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿Por qué los pliegos recién impresos expuestos al ambiente cambian su tasa de humedad provocando deformaciones de bordes?",
    options: [
      "Por la higroscopicitat de las fibras de celulosa que absorben humedad en las zonas exteriores del paquete",
      "Por la evaporación del aceite de máquina",
      "Por el calor de la pantalla de mandos"
    ],
    correct: 0,
    explanation: "El intercambio de vapor con el aire del taller dilata los bordes creando ondas.",
    source: "Manual Guillotinero (Pág. 12)"
  },
  {
    theme: 3,
    question: "¿Cómo se utiliza el vernier o calibre graduable para determinar el volumen de la posteta a introducir?",
    options: [
      "Midiendo el espesor bajo ligera presión para no rebasar la apertura de boca de la guillotina",
      "Midiendo la longitud del canal del listón",
      "Midiendo la distancia entre mesas"
    ],
    correct: 0,
    explanation: "Asegura que el paquete entre holgado sin chocar contra la chapa del pisón.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 3,
    question: "Explique el método de control por 'prueba de presión con pulgar' para la comprobación manual de alturas de papel.",
    options: [
      "Presionar la parte superior del paquete con el pulgar para sentir la resistencia del colchón de aire aprisionado",
      "Apretar el botón de arranque con el pulgar",
      "Pasar el pulgar por el filo de la cuchilla"
    ],
    correct: 0,
    explanation: "Comprobación táctil rápida de la densidad y evacuación de aire en la posteta.",
    source: "Manual Guillotinero (Pág. 17)"
  },

  // --- Bloque 4: Marcas de Corte, Tacas, Tacones y Refilado ---
  {
    theme: 4,
    question: "¿Qué forma gráfica tienen habitualmente las marcas de registro y cuál es su cometido en la impresión?",
    options: [
      "Cruces finas en círculos ubicadas en los márgenes para verificar el encaje de los colores (CMYK)",
      "Líneas gruesas en medio del texto",
      "Puntos negros aleatorios"
    ],
    correct: 0,
    explanation: "Permiten evaluar el calce perfecto de las distintas tintas de la tirada.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "¿Dónde se ubican las marcas de corte respecto al formato final del producto cortado?",
    options: [
      "En el exterior del formato neto, indicando los límites del refilado en las esquinas",
      "En el centro de la imagen impresa",
      "En el lomo interior del libro"
    ],
    correct: 0,
    explanation: "Señalan las líneas exactas por donde pasará el filo de la cuchilla.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "¿Qué función cumplen los 'Tacones de la máquina de impresión' al llegar el pliego a la guillotina?",
    options: [
      "Indican la entrada y el costado de impresión que deben coincidir con la escuadra de la guillotina",
      "Delimitan las líneas donde la cuchilla debe realizar el corte a sangre",
      "Muestran la ganancia de punto para corregir la presión del pisón"
    ],
    correct: 0,
    explanation: "Los tacones marcan los lados de registro de la máquina impresora (guía frontal y lateral) y deben alinearse contra la escuadra para realizar los primeros cortes de cuadratura.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "¿De qué materia prima principal procede la celulosa empleada en papeles de alta resistencia y fibra larga?",
    options: [
      "De maderas de coníferas (pino, abeto)",
      "De celulosa de eucalipto de fibra corta",
      "De residuos de algodón únicamente"
    ],
    correct: 0,
    explanation: "Las coníferas proporcionan fibras de gran longitud que aportan tenacidad al corte.",
    source: "Manual Guillotinero (Pág. 10)"
  },
  {
    theme: 4,
    question: "¿Qué consecuencias tienen las dilataciones térmicas e hídricas del papel durante las fases de guillotinado?",
    options: [
      "Modificaciones dimensionales que descalibran las cotas cortadas respecto a las marcas impresas",
      "Sobrecarga del motor eléctrico principal",
      "Rotura instantánea de la regleta de corte"
    ],
    correct: 0,
    explanation: "Si el soporte absorbe humedad, las medidas netas programadas fallarán respecto a la impresión.",
    source: "Manual Guillotinero (Pág. 12)"
  },
  {
    theme: 4,
    question: "Un 'Corte a sangre' se define técnicamente como aquel en el que:",
    options: [
      "La imagen impresa supera el límite del corte final para no dejar bordes blancos",
      "Se dejan márgenes blancos de 3 mm alrededor de la imagen",
      "Se realiza una separación hueca o entrecalle entre los efectos"
    ],
    correct: 0,
    explanation: "El corte a sangre requiere que la masa impresa rebase la cota del corte final para garantizar que el producto cortado carezca de filos o filamentos blancos.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Por qué el impresor debe dejar un sangrado exterior superior al tamaño nominal cuando el producto es a sangre?",
    options: [
      "Para absorber pequeñas desviaciones del corte y evitar hilos o bordes blancos sin tinta",
      "Para aumentar el peso del pliego",
      "Para lubricar la bajada del pisón"
    ],
    correct: 0,
    explanation: "La demasía de sangrado (2 a 3 mm) garantiza fondo impreso hasta el mismo borde neto.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'entrecalle' de corte en la distribución de pliegos impresos?",
    options: [
      "El espacio sobrante entre dos imágenes adyacentes que se retira mediante dos cortes paralelos.",
      "La distancia entre el pisón y la barrera de seguridad.",
      "El margen del lomo para encuadernación rústica."
    ],
    correct: 0,
    explanation: "Las entrecalles permiten absorber los cortes a sangre de productos múltiples (ej. etiquetas o tarjetas) impresos en el mismo pliego.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Cómo debe redistribuir el operario de guillotina la dilatación del papel cuando el montaje no dispone de entrecalles?",
    options: [
      "Repartiendo el margen de variación al centro para equilibrar las diferencias visuales en los bordes",
      "Desechando la mitad de la tirada",
      "Cortando las hojas con tijera manual"
    ],
    correct: 0,
    explanation: "Proporcionar el error de medida minimiza la asimetría en los márgenes finales.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Hacia dónde se transfiere la variación dimensional cuando el pliego incorpora entrecalles ajustables?",
    options: [
      "Hacia la tira de desperdicio sobrante de la entrecalle que se desecha",
      "Hacia el texto principal de la obra",
      "Hacia el lomo del libro"
    ],
    correct: 0,
    explanation: "La viruta de la entrecalle absorbe el descuadre sin afectar al formato neto del producto.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "En un pliego impreso a 4 efectos con numeración comercial, ¿cuál es el orden estándar de la numeración dentro del pliego?",
    options: [
      "De arriba a abajo y de izquierda a derecha",
      "De derecha a izquierda y de abajo a arriba",
      "En diagonal desde el cuadrante inferior izquierdo"
    ],
    correct: 0,
    explanation: "Independientemente de que la impresión sea en suma o resta, el orden de lectura/numeración de los cuadrantes en el pliego es siempre de arriba a abajo y de izquierda a derecha.",
    source: "Manual Guillotinero (Pág. 23)"
  },
  {
    theme: 4,
    question: "¿Qué significa que una numeración en rotativa ha sido impresa en modalidad 'en suma'?",
    options: [
      "Que los números crecen en orden ascendente desde la primera a la última hoja impresas",
      "Que la maquina duplica las cifras automáticamente",
      "Que resta los desperdicios en la salida"
    ],
    correct: 0,
    explanation: "La secuencia numérica se incrementa desde la base a la cima del apilado.",
    source: "Manual Guillotinero (Pág. 23)"
  },
  {
    theme: 4,
    question: "En el control de pliegos numerados, ¿qué significa que una tirada se ha impreso 'en resta'?",
    options: [
      "Que la numeración va en orden decreciente de arriba hacia abajo de la pila (ej. de 5000 a 1).",
      "Que faltan la mitad de los números por imprimir.",
      "Que la máquina resta los márgenes automáticamente."
    ],
    correct: 0,
    explanation: "La impresión en resta permite que el primer pliego de la pila superior sea el número 1 al finalizar el apilado o el empaquetado.",
    source: "Manual Guillotinero (Pág. 23)"
  },
  {
    theme: 4,
    question: "En una Orden de Fabricación de 10.000.000 de efectos A5 en 80 g, ¿en cuántas notas de 40 resmas se divide el trabajo?",
    options: [
      "En un cálculo fraccionado de lotes estandarizados de manejo de papel",
      "En una única nota gigantesca",
      "En 10.000 notas individuales"
    ],
    correct: 0,
    explanation: "Organización industrial para dividir tiradas masivas en unidades de transporte seguras.",
    source: "Manual Guillotinero (Pág. 25)"
  },
  {
    theme: 4,
    question: "¿Qué datos informativos fundamentales figuran obligatoriamente en un 'tejuelo de tablero'?",
    options: [
      "O.F., Labor, N.º de Pliegos, Rango 'Del... Al...' y Sección Destino",
      "El precio del papel y la marca de la tinta",
      "La firma del chofer del transporte"
    ],
    correct: 0,
    explanation: "Ficha técnica indispensable para el control de trazabilidad en taller.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 4,
    question: "¿Qué indica la casilla 'DEL Nº' de la etiqueta identificativa de un tablero de papel?",
    options: [
      "El primer número de serie o ejemplar contenido en la primera hoja del palé",
      "El número de la guillotina usada",
      "El número del turno de trabajo"
    ],
    correct: 0,
    explanation: "Asegura el inicio correcto de la correlatividad numérica del lote.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 4,
    question: "¿Cómo se determina el número reflejado en la casilla 'AL Nº' si la nota se compone de varios tableros?",
    options: [
      "Añadiendo la cantidad de efectos procesados al número inicial para cerrar el rango de la plataforma",
      "Multiplicando por la cantidad de bobinas",
      "Copiando la cifra de la casilla 'DEL Nº'"
    ],
    correct: 0,
    explanation: "Delimita el fin del rango de numeración del palé o tablero.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 4,
    question: "¿Qué código alfanumérico identifica la 'Serie' de un producto numerado en las Hojas de Reposición?",
    options: [
      "Las letras distintivas asignadas a la tirada (ej. Serie A, B, ZA)",
      "El código de barras de la cuchilla",
      "La clave de la consola táctil"
    ],
    correct: 0,
    explanation: "Permite clasificar emisiones numéricas idénticas en lotes independientes.",
    source: "Manual Guillotinero (Pág. 29)"
  },
  {
    theme: 4,
    question: "Al rellenar la Hoja de Reposiciones por un solo pliego defectuoso, ¿cómo se anotan las casillas 'Del número' y 'Al número'?",
    options: [
      "'Del número': efecto del cuadrante más bajo; 'Al número': efecto del cuadrante más alto",
      "Se anotan todos los números de la resma completa",
      "Se dejan ambas casillas en blanco y se adjunta el papel roto"
    ],
    correct: 0,
    explanation: "Para identificar la inutilización de un pliego completo, se indica en 'Del número' el efecto del cuadrante inferior (más bajo) y en 'Al número' el efecto del cuadrante superior (más alto).",
    source: "Manual Guillotinero (Págs. 29 y 30)"
  },
  {
    theme: 4,
    question: "En un pliego a 4 efectos, si se detectan defectuosos los efectos individuales 1586 al 1590, ¿cuántos cambios de efectos se computan en la Hoja de Reposiciones?",
    options: [
      "5 cambios de efectos",
      "4 cambios de efectos",
      "10 cambios de efectos"
    ],
    correct: 0,
    explanation: "Los efectos del 1586 al 1590 inclusive abarcan exactamente 5 unidades (1590 - 1586 + 1 = 5).",
    source: "Manual Guillotinero (Pág. 31)"
  },

  // --- Bloque 5: Gestión de Producción, Partes de Trabajo y Documentación ---
  {
    theme: 5,
    question: "¿Qué código numérico de 4 dígitos identifica individualmente al operario dentro del sistema de partes?",
    options: [
      "El Código de Operario o Ficha Personal",
      "El número CIP3 del archivo",
      "El número de serie de la POLAR 115"
    ],
    correct: 0,
    explanation: "Clave personal para imputación de mano de obra en los partes diarios.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "En el Parte de Trabajo diario, ¿qué código de letra se asigna en el campo 'TIPO HORAS' para las realizadas en horario ordinario?",
    options: [
      "Código N (Horas Normales)",
      "Código T (Horas Nocturnas)",
      "Código E (Horas Extraordinarias)"
    ],
    correct: 0,
    explanation: "Las convenciones son: N (Normales), T (Nocturnas, entre las 23 y las 6 h) y E (Extraordinarias).",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "En el Parte de Trabajo diario, ¿qué código de letra se asigna en el campo 'TIPO HORAS' para las realizadas en horario nocturno (23:00 a 6:00 h)?",
    options: [
      "Código T (Horas Nocturnas)",
      "Código N (Horas Normales)",
      "Código E (Horas Extraordinarias)"
    ],
    correct: 0,
    explanation: "Las convenciones son: N (Normales), T (Nocturnas, entre las 23 y las 6 h) y E (Extraordinarias).",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Cómo se expresa el tiempo productivo en el campo 'HORAS OPERARIO' de los partes de trabajo?",
    options: [
      "En horas enteras y partes centesimales de hora (tres dígitos)",
      "En horas, minutos y segundos",
      "En porcentaje sobre el rendimiento nominal de la máquina"
    ],
    correct: 0,
    explanation: "El registro se realiza mediante tres dígitos: el primero indica horas enteras y los dos siguientes las centésimas de hora (p. ej., 0.75 = 45 minutos).",
    source: "Manual Guillotinero (Págs. 32 y 35)"
  },
  {
    theme: 5,
    question: "En el 'Tejuelo de Tablero', ¿qué representa el campo 'O.F.'?",
    options: [
      "La Orden de Fabricación asignada al producto (campo numérico de 9 dígitos)",
      "El nivel retributivo del guillotinero",
      "La indicación del grado de afilado de la cuchilla"
    ],
    correct: 0,
    explanation: "El campo O.F. refleja la Orden de Fabricación, una clave numérica normalizada de 9 caracteres.",
    source: "Manual Guillotinero (Págs. 26 y 32)"
  },
  {
    theme: 5,
    question: "¿De cuántos dígitos consta el código de puesto de trabajo si el operario ejecuta la labor asistido por guillotina?",
    options: [
      "Consta de un código alfanumérico de 4 dígitos",
      "Consta de 10 dígitos",
      "Consta de 2 dígitos"
    ],
    correct: 0,
    explanation: "Identifica la máquina o puesto técnico dentro de la estructura de la planta.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Qué representa el 'Código de Operación' de 4 dígitos anotado en el parte diario?",
    options: [
      "El tipo de tarea concreta realizada (ej. refilado, escuadrado, cambio de cuchilla)",
      "El código del cliente",
      "La velocidad de la escuadra"
    ],
    correct: 0,
    explanation: "Clasifica la actividad para el control analítico de costes de fabricación.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿En qué apartado del parte de trabajo se registran los paros por avería, falta de energía o reajustes?",
    options: [
      "En la columna de Tiempos Improductivos / Incidencias justificadas",
      "Se computan como horas de corte normal",
      "No se registran"
    ],
    correct: 0,
    explanation: "Permite justificar las paradas no imputables al rendimiento del trabajador.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Cómo se expresan las cantidades fraccionarias de papel procesado en las columnas de 'Cantidad Aceptada'?",
    options: [
      "En resmas y partes decimales o millares de pliegos útiles",
      "En kilogramos de masa",
      "En volumen de palés"
    ],
    correct: 0,
    explanation: "Unidad estándar de contabilidad de producto terminado.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Qué se anotará en la casilla 'Centro de Coste Destino' cuando se realiza un trabajo asignado a otro taller?",
    options: [
      "El número del taller o sección que recibirá el material (ej. Plegado o Encuadernación)",
      "El nombre del fabricante de la guillotina",
      "La palabra 'FINALIZADO'"
    ],
    correct: 0,
    explanation: "Imputa los costes internos al departamento solicitante.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "Al finalizar una tirada de corte, ¿qué firma o validación debe realizar el operario en el parte de trabajo?",
    options: [
      "Su firma de conformidad o código de operario validando la cantidad y calidad de los bloques procesados.",
      "La firma del jefe de prevención de riesgos únicamente.",
      "El sello de la empresa papelera."
    ],
    correct: 0,
    explanation: "El cierre de la tarea confirma la trazabilidad y la responsabilidad sobre los tiempos y el producto cortado.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Quién debe firmar el Parte Diario de Equipo en caso de que la máquina sea operada por un único guillotinero?",
    options: [
      "El propio guillotinero como responsable directo del equipo y el supervisor de turno",
      "Exclusivamente el mecánico de guardia",
      "El cliente que hizo el pedido"
    ],
    correct: 0,
    explanation: "Garantiza la revisión del reporte diario de la máquina por el mando intermedio.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "Si se elabora una nota incompleta, ¿cómo se reflejan los rangos de números procesados en el Parte de Equipo?",
    options: [
      "Indicando las cifras inicial y final realmente cortadas señalando el carácter parcial del trabajo",
      "Rellenando las casillas con ceros",
      "Anotando el total previsto como si estuviera terminado"
    ],
    correct: 0,
    explanation: "Evita vacíos o duplicados en el recuento del siguiente turno.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Qué datos de horario de entrada y salida deben figurar en la casilla 'Turno de... a...'?",
    options: [
      "Las horas oficiales de comienzo y fin del turno asignado",
      "El tiempo de marcha del motor principal",
      "El horario de descanso únicamente"
    ],
    correct: 0,
    explanation: "Define la ventana temporal de trabajo operativo de la jornada.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Qué información registra el campo 'Rúbrica' en el encabezado del documento de reposiciones?",
    options: [
      "La firma de autorización del responsable de control de calidad o jefe de taller",
      "La marca del papel",
      "El código de la cuchilla"
    ],
    correct: 0,
    explanation: "Validación reglamentaria para reponer pliegos o impresos de valor inutilizados.",
    source: "Manual Guillotinero (Pág. 29)"
  },
  {
    theme: 5,
    question: "¿En qué dos secciones paralelas se divide el impreso oficial del Documento de Reposiciones?",
    options: [
      "En el talón matriz de control y la hoja volante de reposición",
      "En el albarán de entrega y la factura",
      "En el comprobante de máquina y el parte médico"
    ],
    correct: 0,
    explanation: "Permite archivar el justificante del desperdicio enviando el volante a reimpresión.",
    source: "Manual Guillotinero (Pág. 29)"
  },
  {
    theme: 5,
    question: "¿Qué datos identifican la 'Labor' dentro del sistema de gestión de producción de la FNMT?",
    options: [
      "El código numérico asignado a la especialidad o subproducto dentro de la O.F.",
      "El nombre de la ciudad del taller",
      "El modelo de la máquina vibradora"
    ],
    correct: 0,
    explanation: "Diferencia componentes o entregas específicas dentro de una misma orden.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 5,
    question: "¿Qué casilla debe marcarse con un aspa si el operario llega con retraso al inicio del turno habitual?",
    options: [
      "La casilla de Incidencia por retraso puntual en la ficha de control",
      "La casilla de Horas Extraordinarias",
      "La casilla de Cambio de Cuchilla"
    ],
    correct: 0,
    explanation: "Registra la anomalía de horario para el cómputo correcto de mano de obra.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "Al realizar el cálculo de pliegos de demasía en la Hoja de Lanzamiento, ¿qué representa la 'maculatura'?",
    options: [
      "La cantidad de pliegos adicionados a la tirada para absorber los desperdicios en las puestas a punto de máquinas.",
      "El líquido limpiador del tintero.",
      "Un defecto de fabricación del papel."
    ],
    correct: 0,
    explanation: "La maculatura compensa las hojas de prueba empleadas en el ajuste de tinteros, registros y escuadrado de guillotina.",
    source: "Manual Guillotinero (Pág. 28)"
  },
  {
    theme: 5,
    question: "¿Por qué es obligatorio completar la totalidad de los campos del parte aunque la jornada sea discontinua?",
    options: [
      "Para asegurar el balance analítico de costes y evitar vacíos en la trazabilidad de los trabajos",
      "Para que la consola táctil no se desprograme",
      "Para no perder la garantía de la máquina"
    ],
    correct: 0,
    explanation: "Garantiza la fiabilidad de las auditorías de rendimiento y costes de fabricación.",
    source: "Manual Guillotinero (Pág. 32)"
  },

  // --- Bloque 6: Pantallas, Teclados y Consola POLAR XT/X ---
  {
    theme: 6,
    question: "Explique el papel del 'listón de corte' incrustado en la mesa como contraherramienta de la cuchilla.",
    options: [
      "Servir de base sintética donde penetra ligeramente el filo cortando el último pliego sin mellar el acero",
      "Sostener el peso del bloque trasero",
      "Soplar aire hacia el paquete"
    ],
    correct: 0,
    explanation: "Absorbe el impacto final de la cuchilla evitando la colisión directa contra la mesa de hierro.",
    source: "Manual Guillotinero (Pág. 121)"
  },
  {
    theme: 6,
    question: "Durante el descenso de la cuchilla sobre la pila de papel, ¿qué fuerza horizontal (C) se genera debido a su diseño en cuña?",
    options: [
      "Una fuerza resultante que empuja y desplaza el material hacia delante/derecha",
      "Una fuerza que atrae la pila hacia el dorso de la cuchilla",
      "Una fuerza ascensional que levanta los pliegos inferiores"
    ],
    correct: 0,
    explanation: "El bisel en forma de cuña de la cuchilla genera una fuerza lateral resultante C que tiende a desorganizar o desplazar el papel hacia la derecha si no se aplica prensado.",
    source: "Manual Guillotinero (Pág. 36)"
  },
  {
    theme: 6,
    question: "¿Qué fuerza resultante (C) actúa sobre el bloque de papel si el pisón no ejerce suficiente presión?",
    options: [
      "Una fuerza de empuje lateral que desplaza los pliegos produciendo un corte torcido o en pendiente",
      "Una fuerza de succión magnética hacia abajo",
      "Una fuerza de retracción automática de la escuadra"
    ],
    correct: 0,
    explanation: "Si el prensado no fija la pila, el bisel empuja el papel desalineando la cota.",
    source: "Manual Guillotinero (Pág. 36)"
  },
  {
    theme: 6,
    question: "¿Qué inconveniente geométrico presentan las pilas muy gruesas al cortarse con una cuchilla de gran bisel?",
    options: [
      "Mayor desplazamiento relativo de las capas superiores (efecto trapecio en el paquete cortado)",
      "Aumento de la velocidad de bajada de la cuchilla",
      "Bloqueo del sistema de ventilación"
    ],
    correct: 0,
    explanation: "A mayor espesor de paquete, mayor es la masa de celulosa que desplaza la cuña de la cuchilla.",
    source: "Manual Guillotinero (Pág. 38)"
  },
  {
    theme: 6,
    question: "Describa cómo se propaga la presión del pisón a través del material (geometría de presiones E1 y E2).",
    options: [
      "La presión se expande en forma piramidal hacia la base abarcando una superficie mayor en el fondo",
      "La presión asciende en espiral hacia la cuchilla",
      "La presión se mantiene en un hilo recto vertical perfecto"
    ],
    correct: 0,
    explanation: "La fuerza hidráulica del pisón disipa su carga en forma trapezoidal hacia la mesa de acero.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 6,
    question: "¿Qué efecto indeseado provoca en las capas superiores de papel el uso de una cuchilla desafilada o sin filo?",
    options: [
      "Que la cuchilla tire de los pliegos superiores arrastrándolos hacia abajo y haciéndolos más largos o rasgándolos",
      "Que los pliegos superiores queden más cortos que el resto",
      "Que la escuadra retroceda a la posición de carga"
    ],
    correct: 0,
    explanation: "Al no cortar limpiamente, el filo embotado arrastra los pliegos superiores aprisionándolos hacia abajo antes de penetrar, deformándolos y haciéndolos más largos.",
    source: "Manual Guillotinero (Pág. 38)"
  },
  {
    theme: 6,
    question: "En la pantalla de mandos POLAR XT, ¿qué diferencia existe entre activar 'Procesar CONECT' y 'Procesar DESCON'?",
    options: [
      "CONECT encadena el avance automático de la escuadra al completar el corte; DESCON exige avance manual paso a paso",
      "CONECT enciende las luces del taller y DESCON las apaga",
      "CONECT conecta la máquina a Internet y DESCON la aísla"
    ],
    correct: 0,
    explanation: "Determina si la máquina avanza automáticamente en el programa o requiere orden explícita.",
    source: "Manual Guillotinero (Pág. 42)"
  },
  {
    theme: 6,
    question: "¿Qué función tiene la tecla táctil 'QUICKINFO' en los modelos POLAR XT?",
    options: [
      "Ofrece una ayuda rápida mostrando un texto explicativo sobre la función de cualquier tecla que se toque a continuación",
      "Realiza un corte automático de prueba a 10 cm",
      "Borra la memoria intermedia de programas"
    ],
    correct: 0,
    explanation: "Al activar Quickinfo y pulsar cualquier icono o tecla táctil, se despliega una ventana emergente explicativa sobre el cometido de dicho mando.",
    source: "Manual Guillotinero (Pág. 42)"
  },
  {
    theme: 6,
    question: "¿Cuál es el procedimiento de giro del interruptor general para conectar la tensión de mando de la guillotina?",
    options: [
      "Girar de '0' a '1' y pulsar la tecla de rearme de la tensión de mando",
      "Girar rápidamente a la posición de emergencia",
      "Pulsar el pedal de pie mientras se gira la llave"
    ],
    correct: 0,
    explanation: "Secuencia reglamentaria para energizar los sistemas de seguridad y consola.",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 6,
    question: "¿Qué botón debe pulsarse tras conectar el interruptor general para arrancar el motor de accionamiento principal?",
    options: [
      "El botón de marcha del motor principal (pulsador verde de bomba hidráulica)",
      "Cualquier botón del bimanual",
      "La tecla de borrado de pantalla"
    ],
    correct: 0,
    explanation: "Pone en marcha la bomba de presión y el volante de inercia principal.",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 6,
    question: "¿En qué rango cinemático de presión hidráulica (en daN o kp) se ajusta la fuerza del pisón en una POLAR 115?",
    options: [
      "Entre 150 y 4000 daN (aproximadamente 150 a 4000 kp)",
      "Entre 10 y 50 daN únicamente",
      "Presión fija de 10.000 daN"
    ],
    correct: 0,
    explanation: "Margen de regulación hidráulica para adaptar el aprisionado según la dureza del soporte.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 6,
    question: "¿Por qué razón física es necesario un 'tiempo de parada' o pausa entre el prensado del pisón y el descenso de la cuchilla en materiales blandos o voluminosos?",
    options: [
      "Para dar tiempo a que el aire aprisionado se evacúe y la presión se extienda homogéneamente hasta la mesa",
      "Para que la cuchilla tome velocidad de rotación",
      "Para permitir la lectura óptica del código CIP-3"
    ],
    correct: 0,
    explanation: "La presión del pisón no se transmite instantáneamente al fondo de la pila si hay aire atrapado; la pausa asegura la compresión total antes del impacto del filo.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 6,
    question: "Para evitar marcar el dentado del pisón sobre papeles muy sensibles durante el prensado, ¿qué elemento protector se aplica debajo de este?",
    options: [
      "La chapa de protección del pisón",
      "Una lámina de teflón adhesivo",
      "Un pliego de caucho de offset"
    ],
    correct: 0,
    explanation: "La chapa de protección (plana) se encaja mecánicamente bajo el pisón para homogeneizar la superficie e impedir marcas en papeles delicados.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 6,
    question: "Explique el procedimiento mecánico para retirar la chapa de protección del pisón mediante las puntas de los mangos.",
    options: [
      "Introducir los mangos roscados en los alojamientos, liberar los pestillos de enclavamiento y extraerla hacia abajo",
      "Golpear la chapa con un mazo de nylon",
      "Bajar la cuchilla hasta cortar la chapa"
    ],
    correct: 0,
    explanation: "Maniobra manual de extracción segura mediante las herramientas dedicadas de la máquina.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 6,
    question: "¿Cómo actúa la 'chapa de protección flexible' en materiales con irregularidades de superficie?",
    options: [
      "Sufre pequeñas flexiones locales adaptándose al relieve sin aplastar en exceso las zonas más altas",
      "Se rompe por la mitad para absorber el desnivel",
      "Aumenta la velocidad de avance de la escuadra"
    ],
    correct: 0,
    explanation: "Diseñada para repartir la carga sobre pliegos con relieves, estampaciones o lomos doblados.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 6,
    question: "¿Cómo se activa el suministro de aire únicamente para la 'mesa delantera' presionando la tecla de aire?",
    options: [
      "Mediante la pulsación corta del selector de aire para mesa anterior",
      "Presionando el pedal de pie hasta el fondo",
      "Apagando la bomba hidráulica"
    ],
    correct: 0,
    explanation: "Permite desplazar los paquetes cortados en la parte frontal manteniendo estable la pila trasera.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 6,
    question: "¿Qué acción de teclado activa el colchón de aire en la 'mesa completa' de la guillotina?",
    options: [
      "Pulsar la tecla de aire general para alimentar las toberas anteriores y posteriores simultáneamente",
      "Pulsar la seta de emergencia tres veces",
      "Encender la luz de la línea de corte"
    ],
    correct: 0,
    explanation: "Crea una película de aire completa bajo todo el formato para giros o desplazamientos pesados.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 6,
    question: "¿En qué momento se desconecta automáticamente el flujo del colchón de aire durante el ciclo de trabajo?",
    options: [
      "Al accionar el mando de corte o iniciar la bajada del pisón hidráulico",
      "Cuando la escuadra llega a la cota cero",
      "Tras 1 hora de funcionamiento continuo"
    ],
    correct: 0,
    explanation: "Desconecta la flotación de aire para que la pila asiente firmemente en la mesa antes del aprisionado.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 6,
    question: "¿Qué capacidad de almacenamiento tienen los segmentos de memoria A y B en las guillotinas POLAR?",
    options: [
      "999 programas cada uno",
      "100 programas cada uno",
      "500 programas cada uno"
    ],
    correct: 0,
    explanation: "La memoria interna se organiza en dos bancos o sectores (A y B), disponiendo cada uno de una capacidad de hasta 999 programas.",
    source: "Manual Guillotinero (Págs. 47 y 49)"
  },
  {
    theme: 6,
    question: "¿Cuál es el propósito del dispositivo 'Eltrotact'?",
    options: [
      "Ejecutar secuencias de cortes repetitivos con medidas iguales de forma rápida y programada",
      "Inyectar aire comprimido a las guías de registro",
      "Alinear mecánicamente el ángulo de la cuchilla mediante motor"
    ],
    correct: 0,
    explanation: "Eltrotact es la función de repetición de cotas que permite procesar de forma automatizada tiras o bloques con productos de dimensiones idénticas.",
    source: "Manual Guillotinero (Págs. 47 y 79)"
  },
  {
    theme: 6,
    question: "¿Qué información muestra el encabezado del menú 'Datos de Programa' respecto al paso actual y medidas?",
    options: [
      "N.º de programa, paso en ejecución, cota teórica asignada y cota real de la escuadra",
      "La temperatura del aceite hidráulico y los decibelios",
      "El nombre del cliente y el coste del papel"
    ],
    correct: 0,
    explanation: "Pantalla de información principal para el control de la secuencia de corte activa.",
    source: "Manual Guillotinero (Pág. 47)"
  },
  {
    theme: 6,
    question: "¿Qué función ejecuta la tecla 'Liberar Función' o la tecla de 'Igualdad' (=) en la pantalla táctil XT?",
    options: [
      "Validar la cota teórica introducida por teclado y ordenar el desplazamiento de la escuadra a esa medida",
      "Borrar todos los programas del segmento A",
      "Accionar el descenso de la cuchilla sin el bimanual"
    ],
    correct: 0,
    explanation: "Confirmación explícita requerida para iniciar el posicionamiento motorizado de la escuadra.",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 6,
    question: "¿Cómo se realiza la introducción por teclado de una medida expresada en pulgadas con fracción decimal/quebrada?",
    options: [
      "Seleccionando la unidad de pulgadas en la pantalla y tecleando el número con punto o fracción directa",
      "Multiplicando el valor por 25,4 antes de escribirlo",
      "No se pueden introducir medidas en pulgadas"
    ],
    correct: 0,
    explanation: "La consola efectúa la conversión interna al trabajar en el sistema métrico anglosajón.",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 6,
    question: "¿Qué aviso acústico y visual emite el terminal si se introduce una medida fuera de los límites de la máquina?",
    options: [
      "Señal sonora de error y mensaje de advertencia 'Medida fuera de límites'",
      "Se apaga la pantalla de control de golpe",
      "Activa el disparo de la seta de emergencia"
    ],
    correct: 0,
    explanation: "Bloqueo por software que previene colisiones mecánicas del tope trasero.",
    source: "Manual Guillotinero (Pág. 51)"
  },
  {
    theme: 6,
    question: "¿Cuál es la secuencia de teclas requerida para llamar al primer programa libre disponible en memoria?",
    options: [
      "Acceder al menú de programas y pulsar el comando de búsqueda de 'Programa Libre'",
      "Marcar [0][0][0] y presionar el pedal",
      "Girar el conmutador general tres veces"
    ],
    correct: 0,
    explanation: "Localiza de forma automática la primera dirección de memoria vacía para grabar.",
    source: "Manual Guillotinero (Pág. 47)"
  },

  /* ========================================================
   1. BANCO DE PREGUNTAS - TEST GUILLOTINA (POLAR 115) - PARTE 2 (101-150)
   ======================================================== */
//const questionsGuillotinaParte2 = [
  // --- Bloque 7: Programación y Operativa de Corte ---
  {
    theme: 7,
    question: "¿Qué significa la indicación de estado 'AUTOMÁTICO CON' (Autómata en marcha)?",
    options: [
      "Que la escuadra avanzará automáticamente a la siguiente medida programada tras efectuar un corte o activar el mando",
      "Que la guillotina cortará sola aunque no haya papel en la mesa",
      "Que la máquina no requiere operario para cargar el papel"
    ],
    correct: 0,
    explanation: "Con el modo automático activo, tras completar la maniobra de corte (o pulsar los mandos habilitados), la escuadra posiciona sola el papel en el paso subsecuente.",
    source: "Manual Guillotinero (Pág. 57)"
  },
  {
    theme: 7,
    question: "Para introducir y posicionar una medida teórica de 30,5 cm en corte manual en un modelo X, ¿qué secuencia de teclado se ejecuta?",
    options: [
      "Marcar [3][0][.][5] y accionar brevemente 2 veces la tecla [=]",
      "Marcar [3][0][5] y presionar el pedal",
      "Marcar [C][3][0][5] y cortar con la barrera"
    ],
    correct: 0,
    explanation: "La introducción numérica (30.5) requiere la liberación/confirmación de movimiento accionando dos veces consecutivas la tecla de igualdad [=].",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 7,
    question: "Al confeccionar un programa en modo 'Programar durante el corte', ¿cómo se registran los pasos de medida?",
    options: [
      "Se asignan y memorizan automáticamente en el programa activo a medida que el operario realiza cada corte real",
      "Hay que escribirlos previamente a mano en el teclado",
      "Se descargan mediante red Ethernet CIP-3"
    ],
    correct: 0,
    explanation: "Con esta función activa, el operario posiciona manualmente la primera pila y, al ejecutar cada corte, la cota real alcanzada se guarda en el paso correspondiente.",
    source: "Manual Guillotinero (Pág. 78)"
  },
  {
    theme: 7,
    question: "En un programa de formato para etiquetas, ¿qué datos mínimos necesita introducir el operador para que la guillotina genere los pasos automáticamente?",
    options: [
      "Formato de pliego, formato final del producto, lado de aplicación, márgenes y entrecalles",
      "Solo la marca de la cuchilla",
      "El gramaje del cartón y el lote del papel"
    ],
    correct: 0,
    explanation: "Los programas de formato calculan las secuencias de corte basándose en las dimensiones del pliego inicial, medida del producto cortado, demasías/márgenes y entrecalles.",
    source: "Manual Guillotinero (Pág. 83)"
  },
  {
    theme: 7,
    question: "Si al introducir un número de programa a borrar en el menú 'Sinopsis de programas' se escribe el rango 1 - 999, ¿qué consecuencia tiene?",
    options: [
      "Se borra toda la memoria del segmento seleccionado completamente",
      "Se borra únicamente el programa 1 y el 999",
      "La pantalla indica 'MEDIDA DEMASIADO GRANDE'"
    ],
    correct: 0,
    explanation: "El manual advierte expresamente que ingresar la secuencia 1-999 en la función de borrado destruye la totalidad de datos grabados en dicho sector de memoria.",
    source: "Manual Guillotinero (Págs. 60 y 61)"
  },
  {
    theme: 7,
    question: "En una consola POLAR XT, ¿qué representa la función 'Autotrim'?",
    options: [
      "La evacuación automática de las tiras de refilado mediante la apertura programada de la mesa delantera.",
      "El ajuste automático del brillo de la pantalla TFT.",
      "El cambio motorizado de la cuchilla sin intervención del operario."
    ],
    correct: 0,
    explanation: "Autotrim abre una ranura sincronizada en la mesa delantera durante la subida de la cuchilla, expulsando virutas al colector.",
    source: "Manual Guillotinero (Pág. 89)"
  },
  {
    theme: 7,
    question: "¿Qué información proporciona el contador de cortes en el menú de servicio de la máquina?",
    options: [
      "El número total de bajadas de cuchilla realizadas desde el último cambio, indicando cuándo se debe afilar.",
      "La velocidad del aire en los sopladores.",
      "La cantidad de programas guardados en la memoria A."
    ],
    correct: 0,
    explanation: "Monitorizar el contador de cortes permite prever el mantenimiento preventivo antes de que la falta de filo afecte a la calidad del trabajo.",
    source: "Manual Guillotinero (Pág. 48)"
  },
  {
    theme: 7,
    question: "¿Qué es una 'Medida Correctora' o Corrección de Cota en el programa de corte?",
    options: [
      "Un ajuste global expresado en décimas de mm para compensar la contracción del papel tras el secado de tintas.",
      "El borrado de la memoria intermedia.",
      "La alineación de los pulsadores de bimanual."
    ],
    correct: 0,
    explanation: "Si el pliego impreso se ha encogido 1 mm respecto a la maqueta digital, la corrección ajusta todos los pasos sin reescribir el programa.",
    source: "Manual Guillotinero (Pág. 52)"
  },
  {
    theme: 7,
    question: "¿Qué función realiza el botón de 'Avanzar / Retroceder a paso manual' de la escuadra?",
    options: [
      "Desplazar lentamente la escuadra a la cota deseada mediante el volante electrónico o las teclas de pulso.",
      "Ejecutar un corte directo a alta velocidad.",
      "Iniciar el soplador de la mesa de aire de forma intermitente."
    ],
    correct: 0,
    explanation: "Permite posicionar manualmente la pila con máxima precisión visual antes de fijar la cota en el programa.",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 7,
    question: "¿Qué es la función de 'Soplado de Aire Programable'?",
    options: [
      "La activación de la mesa de aire únicamente en los pasos de carga/descarga o movimientos largos de la escuadra.",
      "Una corriente constante de calor sobre el papel.",
      "La limpieza automática del filtro de aceite."
    ],
    correct: 0,
    explanation: "Mantener el aire encendido durante la bajada de la cuchilla desestabilizaría las hojas; por ello se desactiva antes del prensado.",
    source: "Manual Guillotinero (Pág. 55)"
  },
  {
    theme: 7,
    question: "¿Qué indica el mensaje de error 'Medida inferior a la mínima' en la pantalla de la guillotina?",
    options: [
      "Que la cota introducida es menor que la distancia de seguridad entre la escuadra y el pisón (ej. menos de 2,5 cm).",
      "Que no hay suficiente aire en el circuito neumático.",
      "Que la memoria A está completamente llena."
    ],
    correct: 0,
    explanation: "La guillotina tiene una restricción física para evitar que la escuadra choque contra el pisón o la cuchilla en cotas extremadamente cortas.",
    source: "Manual Guillotinero (Pág. 51)"
  },
  {
    theme: 7,
    question: "Para realizar un programa de corte de un libro con 3 cortes (corte de cabeza, pie y delantera), ¿cuál es el orden lógico de programación?",
    options: [
      "Primero el corte del frente/delantera (paralelo al lomo) y posteriormente cabeza y pie.",
      "Primero la cabeza, luego el pie y al final el lomo.",
      "El orden es totalmente indiferente."
    ],
    correct: 0,
    explanation: "Apoyar el lomo encuadernado (perfectamente plano) contra la escuadra permite cortar la delantera a una cota exacta y uniforme.",
    source: "Manual Guillotinero (Pág. 80)"
  },
  {
    theme: 7,
    question: "¿Qué es la red de datos CIP3 / CIP4 en un taller de preimpresión e impresión?",
    options: [
      "El protocolo de intercambio de archivos (PPF/JDF) que genera automáticamente los programas de corte en la guillotina desde el archivo de diseño.",
      "La conexión de televisión interna de fábrica.",
      "El software de calibración de las fotocélulas."
    ],
    correct: 0,
    explanation: "La integración CIP3/CIP4 elimina la introducción manual de medidas en la pantalla: la guillotina lee los datos del trabajo directo desde la red.",
    source: "Manual Guillotinero (Pág. 42)"
  },
  {
    theme: 7,
    question: "¿Qué es la función 'Corte de expulsión' o programa de salto de carga?",
    options: [
      "Un paso donde la escuadra avanza automáticamente hacia delante para empujar la posteta cortada hacia la mesa anterior.",
      "El disparo del fusible mecánico.",
      "La elevación del pedal de pie a máxima velocidad."
    ],
    correct: 0,
    explanation: "La función de expulsión ahorra al guillotinero tener que meter las manos bajo el pisón para extraer bloques pesados.",
    source: "Manual Guillotinero (Pág. 58)"
  },
  {
    theme: 7,
    question: "En los programas de formato POLAR, ¿qué significa el parámetro 'Demasía de borde'?",
    options: [
      "La cantidad de milímetros adicionales que se recortan en el primer paso de limpieza del paquete impreso.",
      "El ancho de la mesa lateral de apoyo.",
      "La tolerancia del peso en kilogramos."
    ],
    correct: 0,
    explanation: "Define el espacio sobrante que el programa debe eliminar en los primeros refilados para dejar el pliego en su cota neta.",
    source: "Manual Guillotinero (Pág. 83)"
  },
  {
    theme: 7,
    question: "¿Qué es el 'Modo de Trabajo en Bucle' o programa cíclico?",
    options: [
      "Una secuencia que vuelve automáticamente al paso 1 del programa tras finalizar el último corte del pliego.",
      "Un error del procesador de la guillotina.",
      "La rotación de las cuchillas en el armario de afilado."
    ],
    correct: 0,
    explanation: "Facilita el trabajo continuo con paquetes idénticos: finalizada la secuencia de una posteta, la escuadra vuelve a la cota de carga inicial.",
    source: "Manual Guillotinero (Pág. 58)"
  },
  {
    theme: 7,
    question: "¿Qué función cumple la 'Rueda de Mano' o volante de ajuste fino en el frontal de la mesa?",
    options: [
      "Permitir el movimiento micrométrico manual de la escuadra para correcciones de fracción de milímetro.",
      "Subir el pisón en caso de falta de corriente.",
      "Regular el caudal del aireador neumático."
    ],
    correct: 0,
    explanation: "El volante otorga un control táctil directo al operario para ajustar el encuadre sobre marcas de impresión finas.",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 7,
    question: "En el panel de control de las guillotinas POLAR X/XT, ¿qué indica la luz piloto o icono del bimanual?",
    options: [
      "Que ambos botones de corte están accionados dentro del margen de simultaneidad requerido por seguridad.",
      "Que el lubricante está a la temperatura de trabajo.",
      "Que la barrera de infrarrojos ha detectado un fallo permanente."
    ],
    correct: 0,
    explanation: "El control bimanual exige accionar ambos botones con una diferencia máxima de 0,5 segundos para evitar engañar al circuito.",
    source: "Manual Guillotinero (Pág. 40)"
  },
  {
    theme: 7,
    question: "¿Cuál es la función del 'Programa de Muestreo' o corte de inspección?",
    options: [
      "Interrumpir la secuencia programada para permitir extraer un pliego de prueba y medir sus dimensiones netas.",
      "Borrar todos los trabajos guardados en el segmento B.",
      "Poner la máquina en modo de bajo consumo eléctrico."
    ],
    correct: 0,
    explanation: "Permite realizar comprobaciones de control de calidad con el pie de rey o escala de precisión sin perder la posición del trabajo.",
    source: "Manual Guillotinero (Pág. 59)"
  },

  // --- Bloque 8: Cuchillas, Periféricos y Mantenimiento ---
  {
    theme: 8,
    question: "¿Cuáles son los tres tipos de materiales de fabricación de cuchillas expuestos en el manual?",
    options: [
      "Acero para herramientas (convencional), Acero Rápido (HSS) y Metal Duro (Carburo de Tungsteno / Widia)",
      "Hierro fundido, Titanio sinterizado y Carbono blando",
      "Aluminio anodizado, Cobre electrolítico y Acero inoxidable"
    ],
    correct: 0,
    explanation: "Tres aleaciones clasificadas según dureza Rockwell y resistencia al desgaste.",
    source: "Manual Guillotinero (Pág. 127)"
  },
  {
    theme: 8,
    question: "¿Qué porcentaje de aleación de Wolframio incorpora el inserto de una cuchilla de acero rápido (HSS)?",
    options: [
      "Un 18% de Wolframio",
      "Un 5% de Wolframio",
      "Un 50% de Wolframio"
    ],
    correct: 0,
    explanation: "Aporta la tenacidad y resistencia térmica característica del acero HSS.",
    source: "Manual Guillotinero (Pág. 127)"
  },
  {
    theme: 8,
    question: "¿Qué dureza en escala Rockwell (HRC) alcanza la zona de corte de una cuchilla de alta velocidad HSS?",
    options: [
      "Entre 61 y 63 HRC",
      "40 HRC",
      "85 HRC"
    ],
    correct: 0,
    explanation: "Grado de templado óptimo para mantener la agudeza del filo.",
    source: "Manual Guillotinero (Pág. 127)"
  },
  {
    theme: 8,
    question: "¿Qué diferencia principal de rendimiento existe entre una cuchilla normal de acero para herramientas y una cuchilla HSS?",
    options: [
      "La duración útil de la HSS es de 3 a 5 veces superior a la de acero estándar",
      "La cuchilla HSS dura exactamente lo mismo pero soporta agua",
      "La cuchilla de acero estándar se utiliza únicamente para plástico"
    ],
    correct: 0,
    explanation: "Gracias a su aleación con un 18% de wolframio, la cuchilla HSS ofrece un rendimiento y resistencia al desgaste de 3 a 5 veces mayor que la convencional.",
    source: "Manual Guillotinero (Pág. 127)"
  },
  {
    theme: 8,
    question: "¿Qué ventaja presenta la cuchilla de 'metal duro de grano superfino' en el guillotinado de papeles estucados?",
    options: [
      "Rendimiento de afilado hasta 10-20 veces mayor resistiendo el desgaste abrasivo de los recubrimientos minerales",
      "Menor peso para el cambio manual",
      "No requiere usar el listón sintético"
    ],
    correct: 0,
    explanation: "El grano superfino de carburo sinterizado aguanta la abrasión del estuco.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "¿Qué acústica característica indica que la cuchilla en uso ha perdido su filo?",
    options: [
      "El sonido cambia de un tono agudo continuo a un chasquido/traquido al cortar los pliegos inferiores",
      "Un silbido agudo y continuo al pasar por los pliegos",
      "Silencio absoluto por amortiguación de papel"
    ],
    correct: 0,
    explanation: "El filo correcto produce un sonido limpio y uniforme, mientras que la falta de corte genera un impacto seco o 'traquido' en la base de la pila.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "Al cortar papel offset de 1 metro de ancho con una cuchilla bien afilada la carga es de aprox. 1 tonelada. ¿A cuánto se eleva dicha fuerza si la cuchilla está sin filo?",
    options: [
      "Se triplica o más (alcanzando de 3 a 4,5 toneladas)",
      "Permanece en 1 tonelada pero hace más ruido",
      "Se duplica (2 toneladas)"
    ],
    correct: 0,
    explanation: "Trabajar con una herramienta embotada exige vencer una resistencia mecánica muy superior, incrementando los esfuerzos sobre el accionamiento entre un 300% y un 450%.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "En papel de impresión de libros, ¿por qué factor se multiplica la carga mecánica sobre la bancada al cortar sin filo?",
    options: [
      "Por un factor de 3 a 4,5 veces la resistencia normal de corte",
      "Por un factor de 100",
      "No se multiplica, disminuye"
    ],
    correct: 0,
    explanation: "Multiplica el estrés dinámico sobre el bastidor, bielas y motor principal.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "¿Para qué se utiliza la 'Escuadra Giratoria' en la guillotina?",
    options: [
      "Para corregir por motor el ángulo de la línea de corte y compensar impresiones torcidas respecto al lado de aplicación",
      "Para inclinar la mesa delantera al descargar el papel",
      "Para expulsar los desperdicios a la mesa trasera"
    ],
    correct: 0,
    explanation: "La escuadra giratoria descentra de forma motorizada el ángulo recto paralelo del tope para alinear la línea de corte con pliegos cuya impresión ha salido con sesgo.",
    source: "Manual Guillotinero (Pág. 96)"
  },
  {
    theme: 8,
    question: "¿Para qué sirve la 'escuadra inclinable' motorizada y cómo corrige las diferencias entre el corte superior e inferior?",
    options: [
      "Incliña la cara vertical de la escuadra para compensar el desplomado de postetas o pliegos abombados",
      "Incliña la pantalla TFT de control",
      "Gira la mesa de acero a 45 grados"
    ],
    correct: 0,
    explanation: "Ajusta la inclinación vertical para que las caras cortadas del paquete queden a 90° exactos.",
    source: "Manual Guillotinero (Pág. 96)"
  },
  {
    theme: 8,
    question: "En el sistema 'Autotrim', ¿qué maniobra realiza la mesa delantera para eliminar las tiras de desperdicio sobrantes?",
    options: [
      "Se abre horizontalmente creando una ranura por la que caen los recortes",
      "Se eleva 10 cm aprisionando el desperdicio contra la cuchilla",
      "Sopla aire a 10 bares hacia el operario"
    ],
    correct: 0,
    explanation: "La mesa delantera Autotrim se retira abriendo un hueco frontal por donde caen las virutas o virutas de entrecalle hacia colectores o cintas de evacuación.",
    source: "Manual Guillotinero (Pág. 89)"
  },
  {
    theme: 8,
    question: "¿Para qué sirve el 'Sujetador delante de la cuchilla'?",
    options: [
      "Para sujetar las tiras cortadas en la mesa delantera impidiendo que salten o se desordenen por el colchón de aire o efecto cuña",
      "Para afilar el filo de la cuchilla durante cada descenso",
      "Para evitar que el operario toque el teclado numérico"
    ],
    correct: 0,
    explanation: "El sujetador frontal presiona los productos recién cortados contra la mesa anterior, evitando que reboten o salgan proyectados debido a la compresión del corte.",
    source: "Manual Guillotinero (Págs. 92 y 94)"
  },
  {
    theme: 8,
    question: "¿Qué función cumple el sistema 'Fixomat'?",
    options: [
      "Ofrece puntos de apoyo escamoteables en la escuadra para garantizar la colocación exacta de pliegos con bordes abombados, convexos o cóncavos",
      "Fija la cuchilla mediante electroimanes de alta potencia",
      "Regula automáticamente la temperatura del aire de la mesa"
    ],
    correct: 0,
    explanation: "Fixomat despliega guías puntuales que sustituyen el contacto plano continuo de la escuadra, permitiendo apoyar pliegos deformados sin que bamboleen.",
    source: "Manual Guillotinero (Pág. 98)"
  },
  {
    theme: 8,
    question: "¿Cada cuánto tiempo se deben lubricar los puntos marcados en la placa de mantenimiento posterior de la máquina?",
    options: [
      "Diariamente o según las horas de servicio marcadas en la tabla de mantenimiento",
      "Una vez cada 5 años",
      "Únicamente al notar chirridos"
    ],
    correct: 0,
    explanation: "Engrase preventivo indispensable para conservar guías y rodamientos.",
    source: "Manual Guillotinero (Pág. 113)"
  },
  {
    theme: 8,
    question: "¿Qué producto de limpieza y EPIs se deben emplear para retirar los restos de masa adhesiva pegados a la cuchilla?",
    options: [
      "Limpiadores solventes de adhesivo recomendados, usando obligatoriamente guantes anticorte",
      "Gasolina súper con las manos desnudas",
      "Agua hirviendo sin guantes"
    ],
    correct: 0,
    explanation: "Elimina los depósitos de cola con seguridad sobre el filo.",
    source: "Manual Guillotinero (Pág. 113)"
  },
  {
    theme: 8,
    question: "¿Cuál es el procedimiento principal de mantenimiento básico a cargo del operario de la guillotina al finalizar el turno?",
    options: [
      "Lubricar los puntos indicados en la etiqueta y limpiar minuciosamente la mesa y la cuchilla con los EPIs adecuados",
      "Desmontar la pantalla táctil y limpiar los circuitos",
      "Cambiar el aceite hidráulico de la bomba principal"
    ],
    correct: 0,
    explanation: "El mantenimiento a nivel de usuario exige la limpieza diaria de superficies (eliminando restos de papel, polvo o adhesivo) y la lubricación periódica de los puntos marcados.",
    source: "Manual Guillotinero (Pág. 113)"
  },
  {
    theme: 8,
    question: "¿Qué diferencia de uso existe entre una elevadora de carga y una elevadora de descarga?",
    options: [
      "La de carga mantiene el material sin cortar a la altura de trabajo de la mesa; la de descarga facilita el apilado ordenado del producto terminado",
      "La de carga lleva aire comprimido y la de descarga no",
      "Son idénticas y se diferencian solo por la marca del fabricante"
    ],
    correct: 0,
    explanation: "La elevadora de carga suministra el papel bruto elevando la pila a medida que se consume; la de descarga desciende automáticamente según se apilan los paquetes terminados.",
    source: "Manual Guillotinero (Págs. 104 y 105)"
  },
  {
    theme: 8,
    question: "¿Qué componente requiere engrase o lubricación periódica mediante bomba centralizada en la POLAR 115?",
    options: [
      "Las guías de deslizamiento del portacuchillas y el husillo de bolas de la escuadra.",
      "El cristal óptico de la pantalla táctil.",
      "Las toberas neumáticas de plástico de la mesa."
    ],
    correct: 0,
    explanation: "Las guías y el husillo de la escuadra soportan elevadas cargas dinámicas y requieren película de grasa limpia diaria.",
    source: "Manual Guillotinero (Pág. 113)"
  },
  {
    theme: 8,
    question: "¿Qué ocurre si el aceite del sistema hidráulico de la guillotina se degrada o pierde nivel?",
    options: [
      "Faltas de presión en el pisón, ralentización de los movimientos y aumento de temperatura en la bomba.",
      "Inversión de las imágenes en la consola de mandos.",
      "Pérdida de la memoria de programas grabados."
    ],
    correct: 0,
    explanation: "El fluido hidráulico transmite la fuerza de prensado y enfriamiento: la suciedad o nivel bajo inutilizan la fuerza regulable del pisón.",
    source: "Manual Guillotinero (Pág. 114)"
  },
  {
    theme: 8,
    question: "¿Qué función realiza el mando de parada de emergencia (seta roja) de la consola?",
    options: [
      "Desconectar inmediatamente toda la alimentación de potencia de los motores mecánicos e hidráulicos.",
      "Guardar los datos en un lápiz de memoria USB.",
      "Apagar los aireadores laterales únicamente."
    ],
    correct: 0,
    explanation: "La seta de emergencia corta de forma instantánea el circuito principal de seguridad deteniendo cualquier movimiento activo.",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 8,
    question: "¿Qué es la 'Mesa de Preparación / Carga Lateral'?",
    options: [
      "Superficies auxiliares provistas de colchón de aire donde se apila y prepara el papel antes de entrar a la máquina.",
      "El listón sintético donde apoya la cuchilla.",
      "La zona de almacenamiento de cuchillas afiladas."
    ],
    correct: 0,
    explanation: "Las mesas laterales con transferencia de aire permiten igualar el siguiente bloque de trabajo sin detener el ciclo de corte.",
    source: "Manual Guillotinero (Pág. 104)"
  },
  {
    theme: 8,
    question: "¿Qué se debe hacer si se detecta una fuga de aceite hidráulico en los latiguillos bajo la guillotina?",
    options: [
      "Detener la máquina, colocar recipiente de recogida y avisar al servicio de mantenimiento preventivo.",
      "Continuar trabajando aumentando la presión del pisón.",
      "Limpiar la fuga con toallitas e inyectar agua en el depósito."
    ],
    correct: 0,
    explanation: "La fuga de aceite reduce la presión de prensado y crea un riesgo crítico de caída por resbalones en el taller.",
    source: "Manual Guillotinero (Pág. 114)"
  },
  {
    theme: 8,
    question: "¿Qué función tiene la linterna o proyector de la 'Línea Óptica de Corte'?",
    options: [
      "Proyectar una sombra o línea de luz brillante exactamente sobre el punto donde impactará el filo de la cuchilla.",
      "Iluminar el teclado de la consola en la oscuridad.",
      "Secar la tinta de la línea de refilado."
    ],
    correct: 0,
    explanation: "La línea indicadora de corte proyectada permite al operario verificar ocularmente la posición del texto antes de accionar la cuchilla.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 8,
    question: "Al sustituir la regleta o listón de corte de plástico, ¿qué ajuste previo debe realizarse en la máquina?",
    options: [
      "Verificar que la cuchilla esté en su posición de Punto Muerto Superior (PMS) antes de extraer la regleta vieja.",
      "Aumentar al máximo la presión del pisón.",
      "Desconectar las baterías de memoria RAM de la consola."
    ],
    correct: 0,
    explanation: "Intentar retirar el listón de corte con la cuchilla en posición baja puede atrapar la herramienta o dañar el filo.",
    source: "Manual Guillotinero (Pág. 121)"
  },
  {
    theme: 8,
    question: "¿Qué problema genera en el corte la existencia de virutas de papel acumuladas en la ranura del listón?",
    options: [
      "Asentamiento irregular del nuevo listón, provocando zonas donde los pliegos inferiores no se cortan.",
      "Sobrecalentamiento de la pantalla TFT.",
      "Desprogramación del parámetro CIP3."
    ],
    correct: 0,
    explanation: "El canal del listón en la mesa de acero debe limpiarse a fondo de virutas antes de alojar la nueva regleta para asegurar planitud.",
    source: "Manual Guillotinero (Pág. 121)"
  },
  {
    theme: 8,
    question: "¿Qué indica la alarma 'Sobrecarga en motor de escuadra' en la pantalla de diagnóstico?",
    options: [
      "Resistencia mecánica excesiva en el avance de la escuadra, producida por bloques demasiado pesados o guías sin lubricar.",
      "Que la temperatura del papel es superior a 40 °C.",
      "Que la barrera fotoeléctrica requiere recalibración."
    ],
    correct: 0,
    explanation: "Si la masa de papel supera la fuerza de tracción del motor paso a paso, el variador se protege interrumpiendo el desplazamiento.",
    source: "Manual Guillotinero (Pág. 48)"
  },
  {
    theme: 8,
    question: "En el mantenimiento preventivo diario de la pantalla táctil de la guillotina, ¿cómo debe limpiarse la superficie?",
    options: [
      "Con un paño suave de microfibra ligeramente humedecido en limpiador neutro para cristales (desconectada).",
      "Con estropajo de fibra metálica y disolvente de tintero.",
      "Rociando agua directamente con manguera a presión."
    ],
    correct: 0,
    explanation: "La capa capacitiva/resistiva de la pantalla de la consola se degrada o raya si se emplean productos abrasivos o trapos con polvo de papel.",
    source: "Manual Guillotinero (Pág. 112)"
  },
  {
    theme: 8,
    question: "¿Qué ventaja aporta la iluminación LED moderna del área de trabajo sobre la mesa de corte?",
    options: [
      "Proporciona un campo de visión homogéneo sin sombras y sin generar calor que deforme las capas de papel.",
      "Aumenta la velocidad de bajada de la cuchilla.",
      "Reemplaza a las células fotoeléctricas de la barrera de seguridad."
    ],
    correct: 0,
    explanation: "La luz LED fría de alto rendimiento permite inspeccionar las marcas de corte con nitidez sin calentar la zona ni alterar el papel.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 8,
    question: "¿Para qué sirve el palpador de altura de pila en los elevadores automáticos de carga?",
    options: [
      "Regular automáticamente la elevación de la plataforma para mantener el borde superior del papel a la altura de la mesa.",
      "Contar el número de hojas procesadas.",
      "Ajustar la presión del pisón principal."
    ],
    correct: 0,
    explanation: "El sensor fotoeléctrico ajusta la altura constante del palé facilitando la alimentación ergonómica del operario.",
    source: "Manual Guillotinero (Pág. 105)"
  },
  {
    theme: 8,
    question: "¿Qué efecto produce en la calidad del corte un soporte de cuchilla con holgura mecánica o desgaste en sus guías?",
    options: [
      "Bamboleo y desviación de la línea de corte en profundidad, provocando medidas desiguaje en el paquete.",
      "Apagado espontáneo de la pantalla de mandos.",
      "Fuga de aire por las toberas frontales."
    ],
    correct: 0,
    explanation: "Cualquier holgura en las guías en V del portacuchillas rompe el paralelismo del filo con la mesa.",
    source: "Manual Guillotinero (Pág. 120)"
  },
  {
    theme: 8,
    question: "¿Cómo se previene la oxidación de la mesa de acero de la guillotina cuando la máquina no va a usarse durante varios días?",
    options: [
      "Aplicando una fina capa protectora de aceite vaselínico o cera especial para superficies metálicas pulidas.",
      "Cubriéndola con pliegos mojados en solución de agua.",
      "Lijando la superficie con papel de lija metálico."
    ],
    correct: 0,
    explanation: "El metal pulido de la mesa absorbe humedad ambiente creando capas de óxido si no se protege con vaselina neutra.",
    source: "Manual Guillotinero (Pág. 113)"
  },

  {
    theme: 1,
    question: "¿Qué lesión músculo-esquelética es la más común en los operarios de guillotina por sobrecarga repetitiva?",
    options: ["Lumbalgia y hernia discal lumbar", "Sindrome del túnel carpiano únicamente", "Bursitis en los tobillos"],
    correct: 0,
    explanation: "El levantamiento y la inclinación frecuente del tronco con cargas pesadas afecta principalmente a los discos de la columna lumbar.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "Al levantar un bloque de papel desde el suelo o un palé bajo, ¿cuál es la flexión articular correcta de las piernas?",
    options: ["Flexionar rodillas a 90° manteniendo la espalda erguida", "Mantener las piernas completamente rígidas e inclinar solo la cintura", "Doblar los brazos rápidamente hacia arriba"],
    correct: 0,
    explanation: "Usar la fuerza de los cuadriceps dobloando las rodillas evita proyectar la carga destructiva sobre las vértebras lumbares.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Por qué está estrictamente prohibido usar aire comprimido a presión para soplar el polvo de la ropa de trabajo?",
    options: ["Porque puede introducir partículas en los poros, ojos o torso y causar embolias o lesiones graves", "Porque desperdicia aire de la máquina", "Porque ensucia los sensores de la barrera de luz"],
    correct: 0,
    explanation: "La presión del aire comprimido directo sobre la piel puede inyectar micropartículas de papel o lubricantes en el torrente sanguíneo.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Cuál es la función principal de la barrera fotoeléctrica infrarroja integrada en la boca de corte?",
    options: ["Detectar la presencia de las manos o cualquier cuerpo extraño en la zona de peligro e interrumpir el descenso", "Medir la altura del papel automáitcamente", "Encender la luz de la línea de corte"],
    correct: 0,
    explanation: "Es el dispositivo optoelectrónico de seguridad principal que protege al operario deteniendo el ciclo de forma instantánea.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 1,
    question: "Si la barrera de seguridad fotoeléctrica se ensucia con polvo de papel, ¿qué síntoma o reacción presenta la guillotina?",
    options: ["Bloquea el inicio del ciclo de corte o da señal continua de interrupción en pantalla", "Incrementa la fuerza del pisón hidráulico", "Sube la velocidad de la escuadra"],
    correct: 0,
    explanation: "El polvo opaca los receptores y el sistema responde por seguridad entrando en estado de corte o bloqueo defensivo.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 1,
    question: "¿Qué distancia mínima de seguridad debe dejarse entre las guillotinas y las zonas de paso principal de carretillas?",
    options: ["Espacio suficiente para el giro y paso holgado sin invadir la zona de trabajo del operario", "50 milímetros", "No se requiere separación"],
    correct: 0,
    explanation: "Evita colisiones mecánicas mientras el guillotinero sostiene o manipula bloques pesados.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "Durante las tareas de cambio de cuchilla, ¿quién debe estar presente en el área inmediata de trabajo de la guillotina?",
    options: ["Únicamente el personal autorizado munido de los dispositivos de cambio de cuchilla y EPIs", "El equipo completo del turno de noche", "Cualquier operario de la sección"],
    correct: 0,
    explanation: "Minimiza riesgos al delimitar el área solo a los técnicos formados que realizan la operación de sustitución.",
    source: "Manual Guillotinero (Pág. 117)"
  },
  {
    theme: 1,
    question: "¿Qué acción de seguridad debe ejecutarse al ausentarse del puesto de trabajo durante el descanso de la jornada?",
    options: ["Desconectar la tensión de mando o bloquear el interruptor principal con llave/candado", "Dejar la cuchilla en la mitad del recorrido", "Apagar únicamente los sopladores de aire"],
    correct: 0,
    explanation: "El bloqueo de seguridad previene la puesta en marcha accidental por personal no cualificado.",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 1,
    question: "¿Qué sucede si el operario intenta puentear o anular uno de los pulsadores del mando bimanual fijándolo con cinta?",
    options: ["El autómata detecta el fallo de simultaneidad e invalida completamente el arranque del corte", "La máquina corta al doble de velocidad", "El pisón baja solo pero la cuchilla no"],
    correct: 0,
    explanation: "El relé de seguridad requiere que ambos pulsadores se activen con una diferencia menor a 0,5 segundos.",
    source: "Manual Guillotinero (Pág. 40)"
  },
  {
    theme: 1,
    question: "¿Qué tipo de contenedor se debe emplear para guardar los trapos impregnados de aceite o disolventes de limpieza?",
    options: ["Contenedores metálicos cerrados e ignífugos para evitar la autocombustión", "Cajas de cartón corrugado sin tapa", "En el suelo tras la mesa trasera"],
    correct: 0,
    explanation: "Los restos de disolventes y aceites acumulados en trapos pueden sufrir reacciones químicas exotérmicas e inflamarse.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Por qué no se deben llevar trapos de limpieza colgados en el cinturón o bolsillos mientras se trabaja en la máquina?",
    options: ["Porque pueden engancharse en partes en movimiento, pisón o escuadra provocando arrastres", "Porque absorben la humedad del papel", "Porque descalibran los aireadores"],
    correct: 0,
    explanation: "Cualquier objeto colgante en la ropa de trabajo incrementa el riesgo de atrapamiento mecánico.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué comprobación acústica indica que la válvula de alivio de presión hidráulica está sufriendo un sobreesfuerzo?",
    options: ["Un silbido agudo y continuo del aceite pasando a alta presión por el retorno", "Un chasquido metálico en la regleta", "Golpes secos en el ventilador"],
    correct: 0,
    explanation: "Suele ocurrir cuando la presión solicitada al pisón excede los límites o hay un atasco mecánico severo.",
    source: "Manual Guillotinero (Pág. 114)"
  },
  {
    theme: 1,
    question: "¿Cuál es la altura ergonómica recomendada de la mesa de trabajo de la guillotina respecto a la cintura del operario?",
    options: ["A nivel de las caderas para permitir un deslizamiento de bloques sin doblar excesivamente la espalda", "Por encima de los hombros", "A la altura de las rodillas"],
    correct: 0,
    explanation: "Permite empujar los bloques de papel usando el peso del cuerpo sin cargar las extremidades superiores.",
    source: "Manual Guillotinero (Pág. 4)"
  },
  {
    theme: 1,
    question: "Al manipular cartones muy duros y pesados, ¿qué riesgo específico presentan las esquinas del paquete?",
    options: ["Peligro de cortes de cizalla profundos en las palmas y muñecas del operario", "Cargan estática que quema el teclado", "Producen un fallo de comunicación CIP-3"],
    correct: 0,
    explanation: "Los cantos de cartones pesados o estucados actúan como filos finos si se deslizan sobre la piel desprotegida.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Por qué debe evitarse el uso de anillos, pulseras o relojes durante el manejo de la guillotina?",
    options: ["Por riesgo de enganche en piezas móviles y para evitar descargas o rozamientos", "Porque interfieren con la pantalla táctil de la consola", "Porque rayan las mesas de aire"],
    correct: 0,
    explanation: "El uso de joyas mecánicas está prohibido en la normativa de PRL de guillotinas por peligro de atrapamiento.",
    source: "Manual Guillotinero (Pág. 3)"
  },

  // --- TEMA 2: EL PAPEL, FORMATOS Y COMPORTAMIENTO (16-30) ---
  {
    theme: 2,
    question: "¿Qué es el 'Gramaje' exacto de un papel en el sistema métrico?",
    options: ["La masa en gramos de un metro cuadrado de papel (g/m²)", "El grosor expresado en décimas de milímetro", "El peso de una resma completa"],
    correct: 0,
    explanation: "Es la unidad estandarizada internacional para definir la masa por unidad de superficie.",
    source: "Manual Guillotinero (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Cómo influye el porcentaje de humedad del taller en las dimensiones del pliego de papel?",
    options: ["A mayor humedad ambiente, las fibras de celulosa se dilatan en su ancho cambiando las medidas del pliego", "A mayor humedad el papel se encoge", "La humedad solo altera la tinta, no la celulosa"], correct: 0,
    explanation: "Las fibras vegetales absorben agua del aire y aumentan de diámetro, modificando la escala de la hoja.",
    source: "Manual Guillotinero (Pág. 12)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Estabilidad Dimensional' del papel?",
    options: ["La capacidad de una hoja de mantener sus dimensiones originales frente a cambios de humedad o tensión de corte", "La fuerza con la que se adhiere a la mesa de aire", "La resistencia al impacto del pisón"],
    correct: 0,
    explanation: "Los papeles con buena estabilidad dimensional apenas sufren variaciones de registro tras cortar o imprimir.",
    source: "Manual Guillotinero (Pág. 12)"
  },
  {
    theme: 2,
    question: "Al cortar papel con la fibra orientada paralela a la cuchilla, ¿qué resistencia ofrece el bloque?",
    options: ["Ofrece menor resistencia de corte porque el filo corta 'a favor' separando las fibras longitudinalmente", "Ofrece el doble de resistencia mecánica", "El filo se mella más rápido"],
    correct: 0,
    explanation: "Cortar en el sentido de las fibras requiere menos energía que cizallar las fibras transversalmente.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 2,
    question: "¿Qué formato se obtiene si dividimos un pliego A2 exatamente a la mitad por su lado más largo?",
    options: ["Formato A3", "Formato A1", "Formato A4"],
    correct: 0,
    explanation: "Siguiendo la norma ISO 216, dividir A2 (420x594 mm) por su lado mayor da como resultado el formato A3 (297x420 mm).",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Cuáles son las medidas en milímetros del formato A3 según la norma ISO 216?",
    options: ["297 x 420 mm", "210 x 297 mm", "420 x 594 mm"],
    correct: 0,
    explanation: "Es el formato estándar doble de un pliego A4.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Cuáles son las dimensiones netas del formato A5 en milímetros?",
    options: ["148 x 210 mm", "105 x 148 mm", "210 x 297 mm"],
    correct: 0,
    explanation: "El formato A5 es la mitad de una hoja A4.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Para qué tipo de producto impreso se utiliza habitualmente la Serie C de la norma ISO?",
    options: ["Sobres y carpetas diseñados para alojar los formatos de la Serie A", "Libros de gran volumen", "Pósteres y vallas publicitarias"],
    correct: 0,
    explanation: "Los formatos C son ligeramente mayores que los A para permitir el empaquetado y ensobrado holgado.",
    source: "Manual Guillotinero (Pág. 8)"
  },
  {
    theme: 2,
    question: "¿Qué tipo de revestimiento lleva el papel 'Estucado' o 'Couché'?",
    options: ["Una capa mineral de caolín, carbonato cálcico y ligantes que satura los poros y suaviza la cara", "Una lámina de teflón transparente", "Una capa de cera sintética"],
    correct: 0,
    explanation: "Esta capa mineral le confiere máxima lisura e imprimibilidad pero resulta abrasiva para las cuchillas.",
    source: "Manual Guillotinero (Pág. 10)"
  },
  {
    theme: 2,
    question: "¿Por qué el papel estucado brillante tiende a deslizarse o deslizarse 'en abanico' durante el prensado si no se aprieta correctamente?",
    options: ["Porque su bajísimo coeficiente de fricción superficial facilita el deslizamiento entre capas", "Porque pesa menos que el offset", "Porque repele el aire de la mesa"],
    correct: 0,
    explanation: "La capa lisa e hiperpulida del estucado reduce el agarre mecánico entre pliegos cuando actúa la cuchilla.",
    source: "Manual Guillotinero (Pág. 36)"
  },
  {
    theme: 2,
    question: "¿Qué significa que un papel es 'Offset' o 'No estucado'?",
    options: ["Que sus fibras no tienen recubrimiento mineral externo dejando la porosidad natural a la vista", "Que no se puede cortar en guillotina", "Que contiene un 50% de plástico"],
    correct: 0,
    explanation: "Mantiene la textura rugosa de la celulosa, lo que ofrece un alto agarre mecánico entre pliegos.",
    source: "Manual Guillotinero (Pág. 10)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Macho de Pila' o 'Lomo de la Pila' en un paquete de hojas impresas?",
    options: ["La zona de la posteta donde se acumula la mayor concentración de tinta o doblez provocando un desnivel", "La parte trasera que toca con la escuadra", "La regleta sintética de corte"],
    correct: 0,
    explanation: "El aporte de tinta en zonas de masa crea un abombamiento local que debe compensarse al prensar.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 2,
    question: "¿Qué problema genera el exceso de elasticidad en papeles sintéticos o plásticos al ser aprisionados por el pisón?",
    options: ["El material se deforma temporalmente recuperando la medida original al liberar la presión, descalibrando el corte", "Se funde la mesa de aire", "La cuchilla pierde el afilado en un solo corte"],
    correct: 0,
    explanation: "La memoria plástica del soporte causa que la cota cortada bajo presión varíe al relajarse la pila.",
    source: "Manual Guillotinero (Pág. 38)"
  },
  {
    theme: 2,
    question: "Al cortar 'Papel Autocopiativo', ¿qué ajuste de presión del pisón debe realizarse?",
    options: ["Reducir la presión al mínimo necesario para evitar estallar las microcápsulas de reactivo químico", "Aumentar la presión al máximo de la máquina", "Trabajar sin pisón"],
    correct: 0,
    explanation: "Una presión excesiva revienta las microcápsulas de tinta de copiado marcando todo el lote de manchas azules/negras.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 2,
    question: "¿Por qué el papel reciclado desgasta el filo de la cuchilla más rápidamente que el papel de pasta virgen?",
    options: ["Por la presencia residual de cargas minerales abrasivas, impurezas y sílice no eliminados en el destintado", "Porque es más húmedo", "Porque tiene las fibras más largas"],
    correct: 0,
    explanation: "Las micropartículas abrasivas contenidas en las pastas recicladas actúan como limas contra el acero.",
    source: "Manual Guillotinero (Pág. 6)"
  },

  // --- TEMA 3: MANEJO, IGUALADO, VIBRADO Y MESA DE AIRE (31-45) ---
  {
    theme: 3,
    question: "¿Cuál es la función principal de la mesa vibradora neumática en el proceso de guillotinado?",
    options: ["Alinear de forma perfecta los bordes de la pila de papel mediante aire y oscilación antes del corte", "Secar la tinta de las hojas", "Calcular el peso total del trabajo"],
    correct: 0,
    explanation: "La vibración alinea los pliegos contra la escuadra tope de la mesa auxiliar garantizando el registro.",
    source: "Manual Guillotinero (Pág. 13)"
  },
  {
    theme: 3,
    question: "Para facilitar la salida del aire atrapado en una posteta voluminosa dentro de la vibradora, ¿qué inclinación se da a la mesa?",
    options: ["Se inclina lateralmente hacia el lado de los topes de registro", "Se mantiene en posición horizontal plana", "Se inclina hacia el operario"],
    correct: 0,
    explanation: "La gravedad ayuda a que los pliegos se deslicen limpiamente contra los topes mientras el aire escapa.",
    source: "Manual Guillotinero (Pág. 14)"
  },
  {
    theme: 3,
    question: "¿Qué efecto produce el rodillo soplador de aire o de extracción al rodar sobre la posteta en la mesa vibradora?",
    options: ["Expulsa las bolsas de aire aprisionadas entre pliegos compactando el bloque", "Limpia las marcas de lápiz", "Aumenta la temperatura de la tinta"],
    correct: 0,
    explanation: "Pasa prensando el bloque igualado para que no resbale al trasladarlo a la mesa principal.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿Por qué es peligroso meter una posteta 'con aire' a la guillotina?",
    options: ["Porque al bajar el pisón las hojas resbalarán impredeciblemente perdiendo la medida neta", "Porque puede romper el listón sintético", "Porque desprograma la consola táctil"],
    correct: 0,
    explanation: "El aire atrapado forma un colchón deslizante que descompone el bloque cuando recibe la fuerza de prensado.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "Cuando los pliegos presentan fuerte carga estática, ¿qué dispositivo auxiliar de la mesa de aire ayuda a contrarrestarla?",
    options: ["Ionizadores o sopladores de aire ionizado que neutralizan las cargas eléctricas", "Lámparas térmicas de secado", "Inyectores de vaselina líquida"],
    correct: 0,
    explanation: "El aire ionizado disipa la electricidad estática eliminando la atracción magnética entre láminas.",
    source: "Manual Guillotinero (Pág. 15)"
  },
  {
    theme: 3,
    question: "¿Qué elemento de la mesa de corte genera el 'colchón de aire' para flotar el papel?",
    options: ["Una red de toberas de bola con muelle alimentadas por una turbina sopladora de baja presión", "Inyectores de vapor de agua", "Compresores de alta presión a 12 bares"],
    correct: 0,
    explanation: "Las bolas de las válvulas son presionadas por el peso del paquete permitiendo la salida de aire.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 3,
    question: "Si una bola de las toberas de aire de la mesa se queda encasquillada hacia abajo, ¿qué ocurre?",
    options: ["Fuga de aire continua que reduce la presión del resto de la mesa y puede soplar hojas sueltas", "Se detiene el motor principal", "Se bloquea la escuadra automática"],
    correct: 0,
    explanation: "La pérdida de caudal neumático invalida el colchón de aire en la zona afectada dificultando el manejo.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 3,
    question: "¿Cuál es la maniobra manual correcta para girar un paquete pesado de 20 kg dentro de la guillotina?",
    options: ["Activar el colchón de aire completo y efectuar el giro sobre el centro de masa sin arrastrar el papel", "Desconectar el aire para que haga fricción con la mesa", "Levantar el paquete en el aire con los brazos"],
    correct: 0,
    explanation: "La película de aire reduce el esfuerzo físico permitiendo rotar el bloque sin doblar sus esquinas.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 3,
    question: "¿Por qué no se debe empujar una posteta de papel contra la escuadra trasera golpeándola fuertemente con el cuerpo?",
    options: ["Porque se deforman o doblan los pliegos inferiores arruinando el escuadrado exacto", "Porque se descalibra la pantalla de control", "Porque salta el relé hidráulico"],
    correct: 0,
    explanation: "El impacto brusco abolla las aristas del papel contra el acero impidiendo un asentamiento plano.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿Qué función cumple el 'taco de empuje de madera' en el taller de corte?",
    options: ["Alinear y asentar la posteta contra la escuadra manteniendo las manos alejadas de la zona de peligro", "Golpear la cuchilla cuando se engancha", "Ajustar la presión del pisón"],
    correct: 0,
    explanation: "Es el utensilio de madera con superficie plana que sirve de prolongador seguro de las manos.",
    source: "Manual Guillotinero (Pág. 3)"
  },
  {
    theme: 3,
    question: "Al introducir una posteta muy delgada en la guillotina, ¿qué precaución debe tomarse con la ranura del pisón?",
    options: ["Usar la chapa de protección del pisón para evitar que los pliegos superiores se cuelen en el intersticio", "Aumentar la presión hidráulica al nivel 5", "Apretar el pedal de pie dos veces"],
    correct: 0,
    explanation: "La chapa de protección forma una cara plana continua tapando huecos mecánicos del pisón.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 3,
    question: "¿Qué indica la presencia de arrugas diagonales en el centro de un pliego cortado?",
    options: ["Prensado excesivo con presencia de colchón de aire aprisionado no evacuado", "La cuchilla tiene demasiado bisel", "Falta de aire en la mesa anterior"],
    correct: 0,
    explanation: "El aire que no tiene escape es aplastado por el pisón generando pliegues permanentes en el papel.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿Cómo se detecta que una posteta tiene 'efecto trapecio' antes de cortar?",
    options: ["Midiendo con un calibre las cotas de la base y de la cima de la pila tras un corte de prueba", "Mirando el color del papel", "Al encender la luz óptica de corte"],
    correct: 0,
    explanation: "Si el bloque cortado no mide lo mismo arriba que abajo presenta desviación angular o trapecio.",
    source: "Manual Guillotinero (Pág. 38)"
  },
  {
    theme: 3,
    question: "Para evitar que la primera hoja de la posteta se raye con el movimiento de la escuadra, ¿qué buena práctica se emplea?",
    options: ["Colocar un pliego de maculatura o cartón mártir sobre la parte superior y base de la posteta", "Inclinarse sobre el pisón", "Soplar aire caliente"],
    correct: 0,
    explanation: "Las hojas 'mártir' protegen las caras impresas del rozamiento directo con el metal o el pisón.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 3,
    question: "¿En qué consiste la operación de 'Escuadrado Inicial' de un paquete de pliegos brutos?",
    options: ["Realizar los cortes de limpieza en los cuatro lados tomando como referencia las marcas o tacones de imprenta", "Contar el número de hojas", "Pasar el paquete por la plegadora"],
    correct: 0,
    explanation: "Prepara el bloque dejando aristas perfectas a 90° indispensables para los procesos posteriores.",
    source: "Manual Guillotinero (Pág. 19)"
  },

  // --- TEMA 4: MARCAS DE CORTE, REFILADO Y TAZAS (46-60) ---
  {
    theme: 4,
    question: "¿Qué es el 'Refilado' en las operaciones de guillotina?",
    options: ["El corte de una tira muy fina de papel (de pocos mm) para dejar una arista limpia y perfecta", "El afilado que se le hace a la cuchilla en el taller de rectificado", "El limado de la mesa de aire"],
    correct: 0,
    explanation: "Refilar consiste en sanear los márgenes o bordes irregulares de los pliegos mediante un corte de precisión.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "¿Qué son los 'Guías de Escuadra' o 'Tacones de Impresión'?",
    options: ["Las marcas impresas en los bordes del pliego que indican las caras fijas que hicieron registro en la imprenta", "Las ruedas de goma de la vibradora", "Las fotocélulas de la barra de seguridad"],
    correct: 0,
    explanation: "Determinan los dos lados perpendiculares de referencia absoluta que deben tocar la escuadra de la guillotina.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "Si se corta un pliego impreso tomando como referencia un lado que NO fue el de registro en imprenta, ¿qué ocurre?",
    options: ["Cualquier imperfección de la cizalla del pliego bruto se trasladará al registro del diseño cortado", "La guillotina se bloquea por error", "La cuchilla sufre muescas"],
    correct: 0,
    explanation: "Respetar la guía de entrada y de costado de la máquina de imprimir es indispensable para la precisión.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "¿Qué es una 'Calle' o 'Entrecalle' en un pliego de imposición múltiple?",
    options: ["El margen intermedio de desperdicio entre dos productos adyacentes que se destruye con un doble corte", "El canal por donde corre la escuadra", "El pasillo de circulación del taller"],
    correct: 0,
    explanation: "Permite aislar sangrados independientes eliminando las demasías sin afectar al formato neto adyacente.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Cuál es el ancho típico estándar de una entrecalle de corte para productos con sangrado?",
    options: ["Entre 4 mm y 10 mm (frecuentemente 6 mm)", "Exactamente 1 mm", "50 mm"],
    correct: 0,
    explanation: "Es el espacio de margen seguro para realizar dos bajadas de cuchilla cortando las tiras de desperdicio.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Qué se entiende por 'Corte a Sangre'?",
    options: ["Aquel en el que la masa de color o imagen llega hasta el mismo borde del papel sin dejar margen blanco", "Un corte que hiere la mano del operario", "Un corte con la cuchilla al rojo vivo"],
    correct: 0,
    explanation: "Exige que la imagen se extienda fuera del límite neto para que el refilado elimine cualquier franja blanca.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Qué ocurre si una entrecalle es más estrecha que el grosor mínimo cortable por la guillotina?",
    options: ["La tira de papel se dobla o rasga bajo el filo en lugar de ser cortada limpiamente", "Se desprograma el motor", "El pisón se detiene"],
    correct: 0,
    explanation: "Virutas de papel de ancho inferior a 2 mm tienden a ser prensadas o deformadas sin separarse del bloque.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Qué función cumple la 'Cruceta de Registro' en el pliego impreso?",
    options: ["Comprobar la correcta superposición de las tintas de cuatricromía y la precisión del encuadre", "Indicar el precio del trabajo", "Señalar la posición de las grapas"],
    correct: 0,
    explanation: "Son marcas finas en los márgenes cuya coincidencia perfecta valida la calidad de la impresión.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "Al realizar el corte final de un folleto desplegable, ¿qué marca define el límite del hendido o plegado?",
    options: ["Las marcas o trazos de plegado situados en la zona exterior del formato neto", "Las marcas de agua", "Los puntos de trama"],
    correct: 0,
    explanation: "Muestran la posición por donde pasará la cuchilla o rueda de hendir en la máquina dobladora.",
    source: "Manual Guillotinero (Pág. 19)"
  },
  {
    theme: 4,
    question: "Si un pliego tiene una deformación de 'abanico' por estiramiento de papel en la máquina de imprimir, ¿cómo debe proceder el guillotinero?",
    options: ["Dividir la diferencia de error proporcionalmente entre las zonas netas extremas", "Tirar todo el papel a la basura", "Aumentar la temperatura de la mesa"],
    correct: 0,
    explanation: "El reparto del error minimiza la percepción visual del descuadre en los márgenes terminados.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Qué representa la cota 'Formato Neto'?",
    options: ["Las dimensiones finales exactas del producto terminado tras eliminar todos los márgenes y demasías", "Las medidas del pliego bruto saliendo de la papelera", "El tamaño de la mesa de aire"],
    correct: 0,
    explanation: "Es el tamaño comercial especificado por el cliente o la Orden de Fabricación.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "¿Qué representa la cota 'Formato Bruto'?",
    options: ["Las dimensiones del pliego inicial antes de ser sometido a los cortes de refilado y escuadrado", "El peso de la caja empaquetada", "El tamaño de la chapa de pisón"],
    correct: 0,
    explanation: "Incluye la demasía de agarre de pinzas, escalas de color y márgenes de sangrado.",
    source: "Manual Guillotinero (Pág. 20)"
  },
  {
    theme: 4,
    question: "Para comprobar si una hoja está cortada 'a escuadra' (ángulo recto de 90°), ¿qué prueba práctica de doblado se realiza?",
    options: ["Doblar la hoja por la mitad enfrentando las esquinas: si coinciden milimétricamente, el ángulo es de 90°", "Pesar la hoja en una báscula de precisión", "Mirar la hoja a través de una linterna"],
    correct: 0,
    explanation: "Es la comprobación física inmediata en taller sin necesidad de goniómetro.",
    source: "Manual Guillotinero (Pág. 16)"
  },
  {
    theme: 4,
    question: "¿Qué herramienta manual de precisión utiliza el operario para medir las dimensiones de los productos cortados?",
    options: ["Una regla de acero inoxidable graduada en medios milímetros o un pie de rey / calibre", "Un flexómetro de construcción", "Una cinta métrica de costura"],
    correct: 0,
    explanation: "Asegura la verificación dimensional fina exigida en el control de calidad.",
    source: "Manual Guillotinero (Pág. 17)"
  },
  {
    theme: 4,
    question: "Al cortar un trabajo con tiras muy estrechas (ej. 3 cm), ¿qué riesgo existe al retirar el papel con la mano?",
    options: ["Atrapamiento en la boca de corte; se debe usar siempre el taco auxiliar o la función de expulsión de escuadra", "Que el papel absorba grasa", "Que se desprograme el autómata"],
    correct: 0,
    explanation: "Nunca se deben introduir las manos debajo del pisón o la cuchilla sin usar los medios auxiliares previstos.",
    source: "Manual Guillotinero (Pág. 3)"
  },

  // --- TEMA 5: PARTES DE TRABAJO, TEJUELOS Y NUMERACIÓN (61-75) ---
  {
    theme: 5,
    question: "¿Qué es la 'Orden de Fabricación' (O.F.) en un taller de artes gráficas?",
    options: ["El documento oficial de producción que recoge todas las instrucciones técnicas, formatos, cantidades y ruta del trabajo", "La factura emitida al cliente", "El manual de la máquina"],
    correct: 0,
    explanation: "Es la hoja de ruta que especifica todas las características de fabricación que debe seguir el guillotinero.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 5,
    question: "¿Qué información vital para el guillotinero contiene la 'Hoja de Imposición' adjunta a la O.F.?",
    options: ["La distribución geométrica de las páginas o efectos dentro del pliego y las cotas de entrecalles", "El salario de los operarios del turno", "El esquema eléctrico del motor"],
    correct: 0,
    explanation: "Guía al operario en el orden y cotas de los cortes para no inutilizar productos múltiples.",
    source: "Manual Guillotinero (Pág. 23)"
  },
  {
    theme: 5,
    question: "¿Qué es un 'Tejuelo' de palé o tablero?",
    options: ["Una etiqueta identificativa colocada en el paquete o palé que indica el número de O.F., cantidad, pliegos y destino", "Un taco de madera para empujar papel", "Un accesorio de la consola táctil"],
    correct: 0,
    explanation: "Asegura el control de trazabilidad y contenido entre los diferentes talleres o procesos.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 5,
    question: "En un trabajo numerado, ¿qué significa que la tirada lleva 'correlatividad vertical'?",
    options: ["Que la numeración continúa de forma consecutiva a través de los pliegos de la pila en la misma posición", "Que los números están impresos girados 90 grados", "Que la numeración cambia solo en hojas pares"],
    correct: 0,
    explanation: "Permite que al cortar las pilas y apilarlas una sobre otra, los bloques terminados queden ordenados automáticamente.",
    source: "Manual Guillotinero (Pág. 23)"
  },
  {
    theme: 5,
    question: "¿Qué es una 'Hoja de Reposición'?",
    options: ["El documento para justificar y solicitar la reimpresión de pliegos defectuosos o estropeados durante el corte", "El recibo de compra de cuchillas", "El manual de repuestos de POLAR"],
    correct: 0,
    explanation: "Regula el control de desperdicios e inutilizaciones en productos de valor o impresos numerados.",
    source: "Manual Guillotinero (Pág. 29)"
  },
  {
    theme: 5,
    question: "¿Cómo se registra en el Parte Diario el tiempo empleado en realizar el 'Cambio de Cuchilla'?",
    options: ["Como un código de operación específico de preparación / mantenimiento asignado a la máquina", "Se suma como tiempo de descanso", "No se anota en el parte"],
    correct: 0,
    explanation: "Permite separar las horas de producción directa de las tareas de ajuste y mantenimiento mecánico.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "En el cómputo de tiempos centesimales, ¿a cuántos minutos reales equivalen '0,50 horas' anotadas en el parte?",
    options: ["30 minutos reales", "50 minutos reales", "15 minutos reales"],
    correct: 0,
    explanation: "La escala centesimal divide la hora en 100 partes; por tanto 0,50 x 60 min = 30 minutos.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "En el tiempo centesimal de un parte de trabajo, ¿a cuántos minutos equivalen '0,25 horas'?",
    options: ["15 minutos reales", "25 minutos reales", "5 minutos reales"],
    correct: 0,
    explanation: "0,25 x 60 min = 15 minutos.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "En el tiempo centesimal, ¿a cuántos minutos equivalen '0,75 horas'?",
    options: ["45 minutos reales", "75 minutos reales", "35 minutos reales"],
    correct: 0,
    explanation: "0,75 x 60 min = 45 minutos.",
    source: "Manual Guillotinero (Pág. 32)"
  },
  {
    theme: 5,
    question: "¿Qué se considera 'Maculatura' en un taller de imprenta y corte?",
    options: ["Los pliegos de papel utilizados para pruebas, ajustes de máquina o los desperdicios generados", "El lubricante de la máquina", "La viruta de plástico del listón"],
    correct: 0,
    explanation: "Son las hojas no útiles dedicadas a poner a punto registros, presiones o entintado.",
    source: "Manual Guillotinero (Pág. 28)"
  },
  {
    theme: 5,
    question: "¿Por qué es fundamental comprobar la cantidad de pliegos recibidos contra la O.F. antes de empezar a cortar?",
    options: ["Para detectar faltas de material o errores de recuento antes de procesar el trabajo", "Para ajustar el temporizador de la consola", "Para saber si hay que afilar la cuchilla"],
    correct: 0,
    explanation: "Evita cortar un lote incompleto que impida cumplir la entrega al cliente.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 5,
    question: "En los trabajos de gran volumen, ¿qué es la 'Muestra de Control'?",
    options: ["Ejemplares extraídos periódicamente de la producción para verificar que no hay desviaciones de medida", "La primera hoja que se tira a la papelera", "El folleto comercial del fabricante"],
    correct: 0,
    explanation: "Permite garantizar la constancia de calidad a lo largo de toda la tirada de corte.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 5,
    question: "¿Qué significa el término 'Tirada'?",
    options: ["El número total de ejemplares impresos o procesados en una orden de producción", "La fuerza con la que la escuadra empuja el papel", "La distancia de bajada de la cuchilla"],
    correct: 0,
    explanation: "Es el volumen total de unidades que componen el pedido de fabricación.",
    source: "Manual Guillotinero (Pág. 26)"
  },
  {
    theme: 5,
    question: "Si un cliente solicita un trabajo con 'Tolerancia ± 0,5 mm', ¿qué significa para el guillotinero?",
    options: ["Que las medidas del producto final pueden variar como máximo medio milímetro respecto a la cota teórica", "Que la máquina debe cortar 0,5 mm más rápido", "Que no se puede usar el pisón"],
    correct: 0,
    explanation: "Define el margen de error dimensional aceptable en el control de calidad del producto.",
    source: "Manual Guillotinero (Pág. 7)"
  },
  {
    theme: 5,
    question: "¿Qué firma o registro valida la entrega de un lote de corte al taller de Encuadernación?",
    options: ["La firma de traspaso o conformidad en la O.F. / Tejuelo por parte del receptor del siguiente taller", "La firma del chofer del camión", "El visto bueno del servicio médico"],
    correct: 0,
    explanation: "Asegura la trazabilidad y traspaso oficial de responsabilidad entre departamentos.",
    source: "Manual Guillotinero (Pág. 26)"
  },

  // --- TEMA 6: PANTALLA, CONSOLA POLAR XT/X Y FUNCIONES (76-90) ---
  {
    theme: 6,
    question: "¿Qué pantalla o interfaz equipa la guillotina POLAR XT para la programación del corte?",
    options: ["Una pantalla táctil TFT a color de alta resolución con menú de iconos gráficos", "Un cuadro de relojes analógicos", "Una pantalla monocroma de texto plano"],
    correct: 0,
    explanation: "Proporciona un entorno visual intuitivo para configurar programas, visualizar el pliego y ajustar parámetros.",
    source: "Manual Guillotinero (Pág. 42)"
  },
  {
    theme: 6,
    question: "¿Qué indica la cota mostrada en caracteres grandes en la pantalla principal de la guillotina?",
    options: ["La posición actual real de la escuadra tope respecto a la línea de corte", "La fuerza del pisón hidráulico", "El número de cortes efectuados en el día"],
    correct: 0,
    explanation: "Muestra la medida física exacta en la que se halla posicionado el tope trasero.",
    source: "Manual Guillotinero (Pág. 47)"
  },
  {
    theme: 6,
    question: "¿Para qué sirve el botón con la figura de una 'Calculadora' en la consola de mandos?",
    options: ["Permite realizar operaciones matemáticas directas e introducir el resultado como cota de escuadra", "Calcula el precio del papel", "Mide el tiempo de trabajo"],
    correct: 0,
    explanation: "Facilita la conversión de medidas o el cálculo de entrecalles directamente en el terminal.",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 6,
    question: "¿En qué consiste la función 'Programa de Formato' en la consola POLAR?",
    options: ["Un asistente que genera automáticamente la secuencia completa de cortes tras introducir las medidas del pliego y del producto", "Un limpiador del disco duro", "Un modo de prueba sin cuchilla"],
    correct: 0,
    explanation: "Simplifica la programación creando todos los pasos con solo ingresar las dimensiones iniciales y finales.",
    source: "Manual Guillotinero (Pág. 83)"
  },
  {
    theme: 6,
    question: "¿Qué comando de consola se utiliza para almacenar permanentemente un programa en la memoria?",
    options: ["El comando 'Guardar' / 'Memorizar' (icono de disquete o tarjeta de memoria)", "El pulsador del mando bimanual", "Pulsar la seta de emergencia"],
    correct: 0,
    explanation: "Registra las cotas y parámetros del trabajo en el número de programa seleccionado para futuras repeticiones.",
    source: "Manual Guillotinero (Pág. 47)"
  },
  {
    theme: 6,
    question: "¿Qué ocurre cuando se activa la función 'Corrección de Cota Global' en un programa guardado?",
    options: ["Aplica un desplazamiento positivo o negativo uniforme a todas las cotas del programa activo a la vez", "Borra las medidas impares", "Invierte el orden de los pasos"],
    correct: 0,
    explanation: "Permite compensar desviaciones de dilatación del papel ajustando todos los pasos con una sola cifra.",
    source: "Manual Guillotinero (Pág. 52)"
  },
  {
    theme: 6,
    question: "¿Para qué sirve el indicador de 'Paso de Programa' en la pantalla de trabajo?",
    options: ["Indica el orden del corte actual dentro de la secuencia total programada (ej. Paso 3 de 12)", "Muestra la velocidad del viento del soplador", "Indica los pasos que ha dado el operario"],
    correct: 0,
    explanation: "Muestra la posición del proceso para que el guillotinero sepa qué maniobra o giro corresponde.",
    source: "Manual Guillotinero (Pág. 47)"
  },
  {
    theme: 6,
    question: "¿Qué es el 'Límite de Recorrido Trasero' programable de la escuadra?",
    options: ["Una cota máxima trasera para evitar que la escuadra pierda tiempo retrocediendo hasta el fondo inútilmente", "El tope donde choca la mano del operario", "El sensor de nivel de aceite"],
    correct: 0,
    explanation: "Optimiza los tiempos de ciclo restringiendo el retroceso de la escuadra solo a lo necesario para cargar el papel.",
    source: "Manual Guillotinero (Pág. 51)"
  },
  {
    theme: 6,
    question: "¿Qué representa el icono del 'Pisón' en la configuración de un paso de programa?",
    options: ["Permite programar la presión hidráulica específica o el tiempo de prensado para ese paso concreto", "Indica que el pisón está roto", "Enciende la luz de trabajo"],
    correct: 0,
    explanation: "Permite variar automáticamente la fuerza de prensado según se corte el pliego completo o tiras pequeñas.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 6,
    question: "¿Qué ocurre si se pulsa la tecla 'C' (Clear/Borrar) con un valor numérico a medio escribir en la consola?",
    options: ["Se borra la cifra introducida en el cuadro de edición permitiendo escribir un nuevo número", "Se borran todos los programas de la máquina", "Se apaga el motor hidráulico"],
    correct: 0,
    explanation: "Limpia la entrada de datos en pantalla antes de su validación.",
    source: "Manual Guillotinero (Pág. 50)"
  },
  {
    theme: 6,
    question: "¿Qué significa el mensaje 'Punto de Referencia no Alcanzado' al encender la guillotina?",
    options: ["Que la escuadra debe realizar su recorrido de calibración inicial para reconocer la posición cero real", "Que la cuchilla está desafilada", "Que la barrera de seguridad está rota"],
    correct: 0,
    explanation: "El sistema requiere sincronizar el encoder absoluto moviendo la escuadra hasta el sensor de referencia.",
    source: "Manual Guillotinero (Pág. 39)"
  },
  {
    theme: 6,
    question: "¿Cómo se visualiza un gráfico del pliego impreso en las guillotinas POLAR equipadas con pantalla gráfica?",
    options: ["A través de la vista esquemática de distribución de cortes con indicación de giros y productos", "A través de una cámara de fotos interna", "Mediante una simulación 3D del motor"],
    correct: 0,
    explanation: "Muestra visualmente la posición de los cortes y la orientación requerida del bloque de papel.",
    source: "Manual Guillotinero (Pág. 42)"
  },
  {
    theme: 6,
    question: "¿Qué función cumple el puerto USB o la tarjeta de red en la consola de la guillotina?",
    options: ["Cargar programas de corte externos, archivos CIP3/CIP4 o guardar copias de seguridad", "Cargar la batería del teléfono móvil únicamente", "Conectar una impresora de papel"],
    correct: 0,
    explanation: "Permite la integración digital de la guillotina en el flujo de trabajo de la imprenta.",
    source: "Manual Guillotinero (Pág. 42)"
  },
  {
    theme: 6,
    question: "¿Qué es el 'Comando de Salto' en la secuencia de programación?",
    options: ["Un paso de programa que instruye a la escuadra a moverse a una cota determinada sin requerir bajada de cuchilla", "Una orden para que la máquina salte 10 cm", "Un fallo de la memoria RAM"],
    correct: 0,
    explanation: "Se usa para posicionar el papel o expulsar el bloque sin ejecutar un ciclo de corte intermediario.",
    source: "Manual Guillotinero (Pág. 58)"
  },
  {
    theme: 6,
    question: "¿Qué significa que la guillotina trabaja en modo 'Semiautomático'?",
    options: ["La escuadra se posiciona sola en la cota programada pero la bajada de la cuchilla exige la acción humana bimanual", "La máquina requiere empujar la escuadra a mano", "El pisón sube y baja de forma continua"],
    correct: 0,
    explanation: "Es el estándar de seguridad obligatorio: la máquina automatiza movimientos pero el corte lo autoriza el operario.",
    source: "Manual Guillotinero (Pág. 57)"
  },

  // --- TEMA 7: OPERATIVA DE CORTE Y AJUSTES TÉCNICOS (91-105) ---
  {
    theme: 7,
    question: "¿Cuál es la función del 'Pedal de Pie' en la guillotina POLAR?",
    options: ["Bajar el pisón con una presión reducida de prueba para comprobar visualmente la línea de corte", "Activar el soplador de la mesa", "Acelerar el motor eléctrico principal"],
    correct: 0,
    explanation: "El pedal actúa de palpador visual accionando el pisón de forma mecánica o hidráulica suave.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 7,
    question: "Si al pisar el pedal de prueba se detecta que la línea de corte pisa sobre un texto impreso, ¿qué debe hacerse?",
    options: ["Corregir la posición del paquete o la cota de la escuadra antes de accionar el mando bimanual", "Efectuar el corte de todos modos", "Aumentar la presión del pisón"],
    correct: 0,
    explanation: "El pedal de prueba permite verificar la alineación sin arriesgar el corte del material.",
    source: "Manual Guillotinero (Pág. 43)"
  },
  {
    theme: 7,
    question: "¿Qué es el 'Ángulo de Bisel' de una cuchilla de guillotina?",
    options: ["El ángulo de afilado formado entre la cara plana posterior y la cara inclinada anterior del filo", "El ángulo de las patas de la máquina", "La inclinación de la mesa de aire"],
    correct: 0,
    explanation: "Es el parámetro geométrico del filo (usualmente entre 20° y 26°) que determina su capacidad de penetración.",
    source: "Manual Guillotinero (Pág. 120)"
  },
  {
    theme: 7,
    question: "Para cortar papeles blandos y esponjosos (ej. papel pluma o algodón), ¿qué tipo de bisel de cuchilla es conveniente?",
    options: ["Un bisel más agudo o doble bisel para cortar con menor resistencia sin aplastar", "Un bisel obtuso de 30°", "Una cuchilla mella o gastada"],
    correct: 0,
    explanation: "Los filos agudos penetran materiales blandos sin deformar las capas ni aplastar el volumen.",
    source: "Manual Guillotinero (Pág. 120)"
  },
  {
    theme: 7,
    question: "Para cortar papeles muy duros o cartones prensados, ¿qué tipo de ángulo de bisel se requiere?",
    options: ["Un ángulo de bisel más obtuso (ej. 24°-26°) para otorgar mayor resistencia mecánica al filo", "Un bisel extremadamente fino de 15°", "Un bisel cóncavo"],
    correct: 0,
    explanation: "Un bisel más grueso sostiene el impacto contra materiales duros evitando el astillado del acero.",
    source: "Manual Guillotinero (Pág. 120)"
  },
  {
    theme: 7,
    question: "¿En qué consiste el 'Doble Bisel' en una cuchilla de guillotina?",
    options: ["Una pequeña faceta secundara afilada con un ángulo ligeramente mayor en la punta del filo principal", "Una cuchilla que tiene filo por los dos lados", "Un accesorio del portacuchillas"],
    correct: 0,
    explanation: "Refuerza la arista de corte extrema reduciendo el desgaste térmico y mecánico al penetrar.",
    source: "Manual Guillotinero (Pág. 120)"
  },
  {
    theme: 7,
    question: "¿Qué síntoma presenta el bloque de papel si el pisón tiene una presión de prensado Insuficiente?",
    options: ["Las hojas centrales del bloque resultan más cortas por el efecto cuña de la cuchilla que tira de ellas", "El papel se quema", "El pedal se queda bloqueado abajo"],
    correct: 0,
    explanation: "La falta de aprisionamiento permite que la cuchilla desplace las hojas intermedias durante la penetración.",
    source: "Manual Guillotinero (Pág. 36)"
  },
  {
    theme: 7,
    question: "¿Qué efecto produce en el papel un exceso Innecesario de presión del pisón hidráulico?",
    options: ["Marca la superficie de los pliegos superiores y produce aplastamiento irreversible en los bordes", "Pule la cuchilla automáticamente", "Descalibra las células de infrarrojos"],
    correct: 0,
    explanation: "El exceso de compresión destruye el volumen del papel y deja huellas estéticas del pisón.",
    source: "Manual Guillotinero (Pág. 37)"
  },
  {
    theme: 7,
    question: "¿Por qué los paquetes muy altos sufren mayor desviación de corte que los paquetes de poca altura?",
    options: ["Porque a mayor altura de pila, mayor es la masa de papel que debe desplazar la cuña de la cuchilla", "Porque el aire de la mesa sube a la cima", "Porque la escuadra se inclina"],
    correct: 0,
    explanation: "La resistencia del volumen acomulado multiplica la fuerza lateral que tiende a desplazar el material.",
    source: "Manual Guillotinero (Pág. 38)"
  },
  {
    theme: 7,
    question: "¿Qué es el 'Efecto Cuña' durante el proceso de penetración del filo?",
    options: ["La fuerza horizontal resultante ejercida por la cara biselada de la cuchilla empujando el papel hacia adelante", "El choque de la escuadra contra el papel", "El soplo de aire de los laterales"],
    correct: 0,
    explanation: "Es la fuerza física tangencial que intenta desplazar las hojas cuando el acero se abre paso.",
    source: "Manual Guillotinero (Pág. 36)"
  },
  {
    theme: 7,
    question: "Al realizar cortes en 'Ángulo Muerto' o en esquinas del pliego, ¿qué accesorio evita que las tiras caigan detrás de la escuadra?",
    options: ["Las chapa peineta o protecciones de la ranura de la escuadra trasera", "Los sopladores de aire delanteros", "El pedal de prueba"],
    correct: 0,
    explanation: "Cierran los huecos geométricos impidiendo que virutas de papel se introduzcan en el husillo de la escuadra.",
    source: "Manual Guillotinero (Pág. 51)"
  },
  {
    theme: 7,
    question: "¿Qué es la 'Cota Mínima de Corte' con la chapa de protección del pisón colocada?",
    options: ["La cota más corta a la que puede avanzar la escuadra sin que la chapa tropiece con el tope (ej. 85 mm)", "Cota cero absoluta", "1 metro"],
    correct: 0,
    explanation: "La chapa montada abulta frontalmente exigiendo limitar el avance de la escuadra por seguridad mecánica.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 7,
    question: "¿Qué es la 'Cota Mínima de Corte' SIN la chapa de protección del pisón?",
    options: ["La medida más pequeña que permite la máquina aproximando la escuadra al máximo (ej. 25 mm)", "5 mm", "0 mm"],
    correct: 0,
    explanation: "Sin la chapa protectora, el tope puede acercarse hasta la distancia mínima bajo el dentado del pisón.",
    source: "Manual Guillotinero (Pág. 44)"
  },
  {
    theme: 7,
    question: "Si al finalizar el corte los pliegos inferiores no quedan completamente separados (quedan 'unidos por hilos'), ¿qué ajuste requiere la máquina?",
    options: ["Profundizar ligeramente el recorrido de la cuchilla o girar/cambiar el listón sintético de corte", "Limpiar la pantalla con alcohol", "Disminuir la fuerza del pisón"],
    correct: 0,
    explanation: "Indica que el filo no penetrated con la profundidad suficiente en el canal del listón de plástico.",
    source: "Manual Guillotinero (Pág. 121)"
  },
  {
    theme: 7,
    question: "Al girar o cambiar el listón de corte de plástico, ¿cuántas posiciones de uso útiles ofrece una regleta de sección cuadrada?",
    options: ["Ofrece 8 posiciones de corte distintas (4 caras x 2 extremos)", "2 posiciones únicamente", "1 sola posición"],
    correct: 0,
    explanation: "Aprovecha los cuatro lados y la inversión de extremos antes de requerir el desecho de la regleta.",
    source: "Manual Guillotinero (Pág. 121)"
  },

  // --- TEMA 8: CUCHILLAS, PERIFÉRICOS Y MANTENIMIENTO (106-120) ---
  {
    theme: 8,
    question: "¿De qué material es el cuerpo principal del lomo de una cuchilla con inserto de Metal Duro (Carburo)?",
    options: ["De acero blando/tenaz que absorbe las vibraciones sin romperse mientras la pastilla dura hace de filo", "De plástico reforzado", "De hierro fundido frágil"],
    correct: 0,
    explanation: "El cuerpo de acero tenaz soporta la flexión evitando que la pastilla rígida de widia se quiebre.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "¿Qué herramienta especial se utiliza para sostener y manejar de forma segura la cuchilla durante su cambio?",
    options: ["Los portacuchillas o mangos roscados de soporte y la funda/caja de madera protectora", "Un electroimán manual de mano", "Una llave inglesa común"],
    correct: 0,
    explanation: "Garantizan el agarre mecánico firme sin exponer los dedos al filo descubierto.",
    source: "Manual Guillotinero (Pág. 117)"
  },
  {
    theme: 8,
    question: "¿Cuál es la función de los 'Tornillos de Regulación de Altura' de la cuchilla?",
    options: ["Ajustar el paralelismo y la profundidad de penetración de la cuchilla sobre el listón de corte", "Ajustar la velocidad del motor", "Fijar la pantalla a la carcasa"],
    correct: 0,
    explanation: "Permiten descender el portacuchillas de forma micrométrica a medida que el filo se desgasta por afilados.",
    source: "Manual Guillotinero (Pág. 117)"
  },
  {
    theme: 8,
    question: "Antes de instalar una cuchilla recién afilada en la guillotina, ¿qué debe hacerse con sus tornillos de ajuste superior?",
    options: ["Retraerlos o subirlos al máximo para evitar que la nueva cuchilla clave en exceso y rompa el listón", "Apretarlos hacia abajo a tope", "Quitar los tornillos y tirar la grasa"],
    correct: 0,
    explanation: "La cuchilla recién rectificada es más ancha; si los tornillos están abajo chocaría violentamente contra la mesa.",
    source: "Manual Guillotinero (Pág. 117)"
  },
  {
    theme: 8,
    question: "¿Qué es la 'Piedra de Asentar' o piedra de afilar a mano?",
    options: ["Una piedra fina de abrasivo de grano muy denso usada para retirar la rebaba de la cara plana tras un afilado o retoque", "Una piedra para limpiar la mesa de aire", "Un peso para pisar el papel"],
    correct: 0,
    explanation: "Elimina el reborde diminuto de metal (rebaba) puliendo la cara plana sin alterar el ángulo del bisel.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "¿Por qué nunca se debe pasar la piedra de asentar en sentido perpendicular cruzando el filo de la cuchilla?",
    options: ["Porque puede redondear la arista de corte o embotar el filo recién rectificado", "Porque genera chispas que queman el papel", "Porque se rompe la piedra"],
    correct: 0,
    explanation: "Se debe pasar siempre plana e inclinada con movimientos longitudinales suaves a lo largo de la cara posterior.",
    source: "Manual Guillotinero (Pág. 128)"
  },
  {
    theme: 8,
    question: "¿Qué periférico automático se encarga de elevar los palés de papel al nivel de la mesa de la guillotina?",
    options: ["El elevador de carga automático con célula fotoeléctrica de nivel", "La mesa vibradora trasera", "El elevador de fardos de aire"],
    correct: 0,
    explanation: "Ajusta la altura de la pila según el operario retira bloques para trabajar de forma ergonómica.",
    source: "Manual Guillotinero (Pág. 104)"
  },
  {
    theme: 8,
    question: "¿Qué es un 'Transpalé / Apilador Automático' de descarga?",
    options: ["Un equipo periférico que recibe los paquetes cortados y los compone ordenadamente sobre un palé", "La correa de transmisión del motor", "El alimentador de tinta"],
    correct: 0,
    explanation: "Automatiza la descarga y reapilado de los productos terminados a la salida de la guillotina.",
    source: "Manual Guillotinero (Pág. 105)"
  },
  {
    theme: 8,
    question: "¿Qué ocurre si se trabaja con el nivel de aceite hidráulico por debajo del mínimo en el depósito?",
    options: ["Entrada de aire en el circuito, cavitación de la bomba, pérdida de fuerza en el pisón y sobrecalentamiento", "Aumenta la fuerza de corte al doble", "Se borran los programas táctiles"],
    correct: 0,
    explanation: "La falta de fluido impide alcanzar la presión de prensado requerida y destruye los componentes de la bomba.",
    source: "Manual Guillotinero (Pág. 114)"
  },
  {
    theme: 8,
    question: "¿Cada cuánto tiempo debe revisarse el filtro de aire de la turbina sopladora de la mesa?",
    options: ["Semanalmente o periódicamente para limpiar la acumulación de pelusa y polvo de papel", "Cada 10 años", "Nunca requiere mantenimiento"],
    correct: 0,
    explanation: "La pelusa de celulosa tapona la aspiración de la turbina dejando la mesa sin colchón de aire.",
    source: "Manual Guillotinero (Pág. 113)"
  },
  {
    theme: 8,
    question: "¿Qué grasa especial se debe emplear en las guías de deslizamiento y husillos de bolas de la POLAR 115?",
    options: ["Grasa consistente recomendada por el fabricante libre de ácidos y resinas", "Grasa de grafito para cadenas pesadas", "Aceite comestible de oliva"],
    correct: 0,
    explanation: "Garantiza la película lubricante en movimientos de precisión sin degradar los retenes ni captar polvo excesivo.",
    source: "Manual Guillotinero (Pág. 113)"
  },
  {
    theme: 8,
    question: "¿Por qué no se debe usar maza de hierro directamene para ajustar o golpear el portacuchillas o la guillotina?",
    options: ["Porque puede fracturar las piezas de fundición o mellar la precisión de las guías; se usa maza de nylon/madera", "Porque hace demasiado ruido en el taller", "Porque quita la pintura"],
    correct: 0,
    explanation: "El impacto de acero contra fundición provoca deformaciones locales permanentes o grietas estructurales.",
    source: "Manual Guillotinero (Pág. 117)"
  },
  {
    theme: 8,
    question: "En las inspecciones de mantenimiento preventivo, ¿qué es la prueba del 'Tiempo de Frenado' de la cuchilla?",
    options: ["Comprobar que tras soltar los mandos el embrague/freno detiene la cuchilla en la fracción de segundo reglamentaria", "Cronometrar cuánto tarda en subir la escuadra", "Medir la temperatura de la banda"],
    correct: 0,
    explanation: "Es una prueba de seguridad crítica para asegurar que la máquina frena de inmediato en emergencias.",
    source: "Manual Guillotinero (Pág. 40)"
  },
  {
    theme: 8,
    question: "¿Qué es un 'Sistema de Aspiración de Viruta' en guillotinas equipadas con Autotrim?",
    options: ["Un conducto neumático con boquilla de aspiración que succiona las tiras de refilado caídas en la ranura frontal", "Un ventilador que sopla el polvo al operario", "Un imán para recoger viruta metálica"],
    correct: 0,
    explanation: "Evacua automáticamente el desperdicio cortado directamente a los contenedores o prensas de reciclaje.",
    source: "Manual Guillotinero (Pág. 89)"
  },
  {
    theme: 8,
    question: "¿Qué documento o registro debe actualizarse cada vez que se realiza un afilado o cambio de cuchilla?",
    options: ["La ficha / libro de control de mantenimiento y horas de uso de la cuchilla correspondiente", "El contrato de trabajo del operario", "La factura de la luz"],
    correct: 0,
    explanation: "Permite controlar la vida útil, número de rectificados acumulados y el rendimiento del acero.",
    source: "Manual Guillotinero (Pág. 113)"
  },
   
  {
    theme: 1,
    question: "En los tejuelos de tablero que acompañan al trabajo en la FNMT, ¿qué información se puede encontrar?",
    options: [
      "Taller, labor, orden de fabricación, del nº... al nº, defectuosos, el nº de tablero",
      "Horario del turno, nombre del mecánico y modelo de guillotina",
      "Precio del papel por kilo y proveedor del cartón"
    ],
    correct: 0,
    explanation: "El tejuelo de tablero registra la trazabilidad del lote, indicando el rango de numeración, pliegos defectuosos y número de tablero.",
    source: "Examen FNMT 2025 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué es un documento de reposiciones en la FNMT?",
    options: [
      "Es el documento que se emplea para extraer los efectos defectuosos que se detecten durante todo el proceso de fabricación",
      "El pedido de compra de papel al proveedor",
      "El parte de cambio de cuchilla"
    ],
    correct: 0,
    explanation: "Permite retirar y justificar los billetes o efectos con fallos detectados durante el corte y manipulado.",
    source: "Examen FNMT 2022 (Pág. 7)"
  },
  {
    theme: 1,
    question: "En una guillotina XT, ¿qué indica el pictograma de un sujetador con la flecha en reposo?",
    options: [
      "Sujetador reposo/pasivo",
      "Sujetador activo",
      "Sujetador arriba"
    ],
    correct: 0,
    explanation: "Identifica el estado pasivo del sujetador mecánico de la escuadra.",
    source: "Examen FNMT 2022 (Pág. 3)"
  },
  {
    theme: 1,
    question: "En una guillotina XT, ¿cuántas líneas de observaciones se pueden memorizar como máximo en una información de programa?",
    options: [
      "7 líneas",
      "8 líneas",
      "9 líneas"
    ],
    correct: 0,
    explanation: "El sistema de programación de POLAR XT admite hasta un máximo de 7 líneas de texto en el campo de observaciones.",
    source: "Examen FNMT 2022 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué ventaja ofrece la función 'Soltar pisón en PMI' (Punto Muerto Inferior) en una POLAR XT?",
    options: [
      "El pisón se eleva antes, con lo que la escuadra es capaz de ponerse en movimiento antes agilizando el corte",
      "El pisón baja solo sin pisar el pedal",
      "La cuchilla se frena a mitad de recorrido"
    ],
    correct: 0,
    explanation: "Al liberar el pisón justo en el PMI, se gana tiempo en el ciclo permitiendo el avance inmediato de la escuadra.",
    source: "Examen FNMT 2022 (Pág. 4)"
  },
  {
    theme: 1,
    question: "En el modelo POLAR XT, ¿cuántos programas se pueden almacenar en cada uno de los segmentos de memoria (A y B)?",
    options: [
      "999 programas en cada segmento (A/B)",
      "499 programas en cada segmento (A/B)",
      "100 programas en cada segmento (A/B)"
    ],
    correct: 0,
    explanation: "La memoria dividida en sectores A y B permite albergar hasta 999 programas independientes en cada uno.",
    source: "Examen FNMT 2026 (Pág. 8)"
  },
  {
    theme: 1,
    question: "¿Para qué sirve el elemento llamado 'Fixomat' en las guillotinas POLAR?",
    options: [
      "Alinear el papel mediante las guías de registro",
      "Enfriar la cuchilla con chorro de aire",
      "Bloquear la mesa de corte en paradas de emergencia"
    ],
    correct: 0,
    explanation: "El Fixomat utiliza las guías de registro fijas para escuadrar la posteta de forma precisa contra el tope.",
    source: "Examen FNMT 2022 (Pág. 4)"
  },
  {
    theme: 1,
    question: "En una nota de numeración impresa de resta en la FNMT, ¿cuál es la característica de la salida?",
    options: [
      "El último pliego que sale de la máquina tiene la numeración más baja",
      "El primer pliego tiene la numeración más baja",
      "Todos los pliegos llevan el mismo número"
    ],
    correct: 0,
    explanation: "Al ser impresión en resta, los valores numéricos van descendiendo, quedando el número menor al final.",
    source: "Examen FNMT 2023 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Qué tiempo total de reacción tiene el sistema de la guillotina POLAR 115 XT al interrumpirse la barrera de luz?",
    options: [
      "< 125 ms",
      "< 150 ms",
      "< 200 ms"
    ],
    correct: 0,
    explanation: "La barrera fotoeléctrica detiene el avance mecánico en menos de 125 milisegundos por normativa de seguridad.",
    source: "Examen FNMT 2022 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué deforma el material hacia adelante durante el proceso de corte por guillotina?",
    options: [
      "El ángulo de bisel en el lado frontal de la cuchilla",
      "El soplo de la mesa de aire",
      "La tracción de la correa de transmisión"
    ],
    correct: 0,
    explanation: "La cuña del bisel de la cuchilla ejerce una fuerza de empuje que desplaza el papel cortado hacia la mesa delantera.",
    source: "Examen FNMT 2026 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Para qué es conveniente el uso de la función 'Eltrotact'?",
    options: [
      "Para cortar medidas de productos que se repiten en una misma dirección",
      "Para que la retirada del desperdicio se automatice bajo la mesa",
      "Para facilitar la colocación de productos una vez cortados"
    ],
    correct: 0,
    explanation: "Facilita secuencias repetitivas automatizando los pasos de avance continuo en una misma dirección.",
    source: "Examen FNMT 2022 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Cuál es la protección en caso de rotura de la biela mediante el perno de rotura en los modelos POLAR 115?",
    options: [
      "13 t",
      "10 t",
      "15 t"
    ],
    correct: 0,
    explanation: "El perno de seguridad fusible está tarado para cizallarse y romperse al alcanzar una sobrecarga de 13 toneladas.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Cómo se puede reconocer visualmente que una cuchilla está cortando sin filo?",
    options: [
      "Cuando la superficie de corte y/o los desperdicios se pegan entre sí después de cortar",
      "Con unos guantes de seguridad deslizando el dedo por el filo",
      "Porque la máquina se para continuamente por sobrepresión"
    ],
    correct: 0,
    explanation: "La falta de filo embota el corte provocando la fusión o adherencia por fricción de los bordes del papel.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué tipo de comentarios permite añadir la pantalla de las guillotinas POLAR?",
    options: [
      "Individuales, Funcionales y Estándar",
      "Individuales y Funcionales",
      "Individuales y Generales"
    ],
    correct: 0,
    explanation: "Permite clasificar notas de ayuda para el operador en comentarios individuales, funcionales y estándar.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "Según el manual oficial, cuanto menor es el gramaje del papel no estucado...",
    options: [
      "Más difícil será de igualar y su comportamiento será más inestable",
      "Más fácil será de igualar y su comportamiento será más estable",
      "Más difícil será de igualar pero su comportamiento será más estable"
    ],
    correct: 0,
    explanation: "Los gramajes muy finos carecen de rigidez estructural, dificultando el aplanado y alineación correcta.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "En las máquinas vibradoras, ¿cuándo se debe desconectar el rodillo sacador de aire?",
    options: [
      "Cuando se vibra papel engomado o adhesivo",
      "Cuando se vibran láminas de plástico",
      "Cuando se vibra material con perforaciones"
    ],
    correct: 0,
    explanation: "El rodillo sacador de aire podría provocar la activación del adhesivo o el pegado accidental de las hojas.",
    source: "Examen FNMT 2022 (Pág. 5)"
  },
  {
    theme: 1,
    question: "Como norma general, ¿cuándo actúa automáticamente el expulsor programable?",
    options: [
      "Cuando la medida siguiente es mayor que la posición de corte anterior",
      "Cuando la medida siguiente es menor que la posición de corte anterior",
      "Cuando la mesa delantera está completamente limpia"
    ],
    correct: 0,
    explanation: "Al requerir una medida mayor, el expulsor empuja el material hacia adelante para liberar espacio de recule.",
    source: "Examen FNMT 2022 (Pág. 5)"
  },
  {
    theme: 1,
    question: "En las elevadoras de descarga de papel, el pulsador de descenso de la zona de seguridad se detiene a:",
    options: [
      "A 12 cm del suelo (o entre 12 y 20 cm según norma)",
      "A 50 cm del suelo",
      "Toca directamente el suelo sin parar"
    ],
    correct: 0,
    explanation: "Se frena automáticamente a distancia de seguridad para prevenir atrapamientos de pies.",
    source: "Examen FNMT 2022 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿De cuántos canales dispone la barrera de luz de seguridad de la guillotina?",
    options: [
      "45 a 65 canales según resolución de la cortina infrarroja",
      "20 canales exactos",
      "2 canales"
    ],
    correct: 0,
    explanation: "Las barreras electrónicas modernas dividen el haz infrarrojo en múltiples canales para detectar dedos pequeños.",
    source: "Examen FNMT 2022 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Para qué sirve una 'Plantilla de Calidad de Producto' en la guillotina?",
    options: [
      "Para la verificación visual y dimensional del producto cortado frente al estándar",
      "Para programar los pasos de corte en la consola",
      "Para medir el desgaste de la cuchilla"
    ],
    correct: 0,
    explanation: "Permite comprobar el escuadrado, márgenes de registro y cotas exactas del corte.",
    source: "Examen FNMT 2022 (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿En qué consiste la función 'Autotrim' en las guillotinas POLAR?",
    options: [
      "Apertura automática de la mesa delantera para evacuar desperdicios y tiras de desbarbe durante el corte",
      "Afilado automático de la cuchilla mediante piedra rotativa",
      "Engrase automático de las guías mecánicas"
    ],
    correct: 0,
    explanation: "Abre una ranura en la mesa delantera permitiendo la caída directa del recorte sin intervención del operario.",
    source: "Examen FNMT 2022 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Lado de Aplicación' en la preparación de una posteta?",
    options: [
      "Los bordes de referencia (entrada y costado) que han servido de guía en la máquina de imprimir",
      "El reverso de la última hoja del paquete",
      "El lado por donde se introduce el adhesivo"
    ],
    correct: 0,
    explanation: "Garantiza que los primeros cortes se apoyen exactamente en las mismas escuadras de la imprenta.",
    source: "Examen FNMT 2025 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre si se selecciona una presión de prensado exesivamente alta para un papel blando?",
    options: [
      "El material se deforma permanentemente y la cuchilla se desvía alargando los pliegos inferiores",
      "La máquina se apaga inmediatamente",
      "El papel sale disparado hacia atrás"
    ],
    correct: 0,
    explanation: "La sobrepresión aplasta los bordes, alterando la geometría de la posteta y curvando el corte.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "En una guillotina POLAR X, ¿cómo se valida la introducción de una medida teórica simple?",
    options: [
      "Pulsando la tecla '=' dos veces o accionando la tecla de inicio",
      "Pulsando la tecla C",
      "Girando el volante de ajuste manual"
    ],
    correct: 0,
    explanation: "La pulsación doble de la tecla igual activa el desplazamiento inmediato de la escuadra a la cota.",
    source: "Examen FNMT 2022 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Corrección Material' en la programación de corte?",
    options: ["Un ajuste global de compensación para absorber la dilatación o encogimiento del soporte", "Cambiar el papel de la máquina", "Limpiar el polvo de la mesa"],
    correct: 0,
    explanation: "Modifica proporcionalmente todas las cotas del programa para corregir desviaciones de formato.",
    source: "Examen FNMT 2022 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué representa el valor 'daN' en las tablas de presión de la guillotina?",
    options: ["Decanewtons (unidad de fuerza equivalente a aproximadamente 1 kgf)", "Dinas por centímetro", "Diámetro del pistón neumático"],
    correct: 0,
    explanation: "Unidad estándar en la que se calibrated la fuerza de prensado del pisón hidroneumático.",
    source: "Examen FNMT 2022 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Qué deforma el papel en 'Silla de Montar' en el centro de la pila?",
    options: ["El aire atrapado entre pliegos que no ha sido evacuado antes del prensado", "El uso de cuchillas de metal duro", "El soplado de la mesa de aire"],
    correct: 0,
    explanation: "El colchón de aire crea un abultamiento central que falsea la medida real al pisar.",
    source: "Examen FNMT 2022 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Qué se debe hacer si se detectan variaciones de medida en cortes sucesivos?",
    options: ["Verificar el filo de la cuchilla, la presión del pisón y el correcto funcionamiento del freno de escuadra", "Reducir la luz del taller", "Poner más polvo antirrepinte"],
    correct: 0,
    explanation: "Las imprecisiones derivan de cuchillas romas o falta de retención mecánica de la escuadra.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "En el tejuelo de tablero de dos o más tableros, ¿cómo se indica la numeración de los efectos?",
    options: [
      "Desde el efecto con la numeración más baja al de la numeración más alta del cuadrante",
      "Independientemente del orden numérico",
      "Solo se pone la cifra total de millares"
    ],
    correct: 0,
    explanation: "Exige registrar de forma estricta los límites del rango numérico inicial y final.",
    source: "Examen FNMT 2025 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Cuándo se conecta el aire de la mesa automáticamente?",
    options: [
      "Con la escuadra automática conectada, durante cada retroceso de la misma",
      "Cuando la cuchilla está en la posición más baja",
      "Solo cuando se pulsa el pedal"
    ],
    correct: 0,
    explanation: "El aire facilita el deslizamiento del bloque mientras la escuadra retrocede para el siguiente paso.",
    source: "Examen FNMT 2025 (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿Cuándo se recomienda realizar un 'Corte Angular'?",
    options: [
      "Cuando el papel no impreso no es claramente angular o se requiere un ángulo recto perfecto a 90°",
      "Solo para hacer sobres triangulares",
      "Para aprovechar retales de cartón"
    ],
    correct: 0,
    explanation: "Refila los bordes para garantizar que las dos caras contiguas formen exactamente 90 grados.",
    source: "Examen FNMT 2025 (Pág. 7)"
  },
  {
    theme: 1,
    question: "Ante un material que se desliza mal, ¿en qué lado de la mesa se debe posicionar si el corte desplaza a la derecha?",
    options: [
      "A la izquierda, para evitar el atasco contra la regla lateral derecha",
      "A la derecha",
      "Es totalmente indiferente"
    ],
    correct: 0,
    explanation: "Compensa el empuje lateral de la cuchilla evitando que el material se acuñe contra la guía.",
    source: "Examen FNMT 2025 (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿Cuál es la presión de prensado recomendada para una posteta de altura media de 'Planchas Litográficas'?",
    options: [
      "3.000 daN utilizando la chapa de protección del pisón",
      "500 daN sin chapa",
      "4.500 daN sin chapa"
    ],
    correct: 0,
    explanation: "Evita deformar las planchas metálicas y protege la dentadura del pisón mediante la chapa lisa.",
    source: "Examen FNMT 2025 (Pág. 7)"
  },
  {
    theme: 1,
    question: "Al cortar papel de impresión de libros con cuchilla sin filo, la carga de esfuerzo de la máquina sube de 1 tonelada a:",
    options: [
      "Aproximadamente 4,5 toneladas",
      "2 toneladas",
      "1,5 toneladas"
    ],
    correct: 0,
    explanation: "Un filo gastado quadruplica la resistencia mecánica sobre los brazos de tracción del portalápices.",
    source: "Examen FNMT 2025 (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿Qué procedimiento se aplica si las tiras de prueba no se cortan tras un cambio de cuchilla?",
    options: [
      "Ajustar el perno excéntrico o bajar ligeramente la regleta con las levas de apoyo graduadas",
      "Dar dos golpes fuertes de cuchilla",
      "Lijar la regla de corte"
    ],
    correct: 0,
    explanation: "Exige graduar la profundidad de bajada mediante los excéntricos laterales hasta rozar la regla.",
    source: "Examen FNMT 2025 (Pág. 9)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Aplanado por Prensado Previo'?",
    options: [
      "Bajar el pisón sobre la pila sin accionar el corte para eliminar el aire retenido",
      "Planchar el papel con calor",
      "Cortar el paquete dos veces consecutivas"
    ],
    correct: 0,
    explanation: "Estabiliza el volumen de la posteta esponjosa asegurando un corte recto posterior.",
    source: "Examen FNMT 2022 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Qué deforma las esquinas del paquete cortado si el pisón tiene exceso de presión?",
    options: ["Aplastamiento de las fibras por superarse el límite de elasticidad", "Falta de aire en la mesa", "Exceso de velocidad de la cuchilla"],
    correct: 0,
    explanation: "Las esquinas sufren mayor deformación plástica al no tener material colindante que distribuya la carga.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "En una nota de 40 resmas en 8 cuadrantes numerada en resta, ¿qué calculo determina el salto por cuadrante?",
    options: ["El total de pliegos dividido entre el número de cuadrantes impresos", "Multiplicar por ocho la primera cifra", "Es una constante fija de 1.000"],
    correct: 0,
    explanation: "Permite saber con exactitud la numeración de inicio de cada una de las postetas independientes.",
    source: "Examen FNMT 2023 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué indica la indicación 'CORTE INTERRUMPIDO' en el monitor?",
    options: ["Que se ha invadido la barrera de luz o soltado el mando bimanual durante la bajada de la cuchilla", "Que el trabajo se ha terminado con éxito", "Que falta papel en la mesa"],
    correct: 0,
    explanation: "Muestra el estado de paro de seguridad bloqueando la máquina en la posición actual.",
    source: "Examen FNMT 2023 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Cómo se reinicia la marcha tras una interrupción por barrera de luz?",
    options: ["Liberar el área de trabajo y volver a accionar de forma simultánea los dos mandos de corte", "Pulsar el pedal tres veces", "Apagar el interruptor general"],
    correct: 0,
    explanation: "Exige retirar el obstáculo y pulsar nuevamente el accionamiento bimanual.",
    source: "Examen FNMT 2023 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el soplado de aire en la mesa de Autotrim?",
    options: ["Impulsar las tiras cortadas de recorte hacia el canal de evacuación inferior", "Secar la tinta de las hojas", "Enfriar la cuchilla"],
    correct: 0,
    explanation: "Lanza una ráfaga neumática que arrastra los desperdicios fuera de la mesa de trabajo.",
    source: "Examen FNMT 2023 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Medida de Carga' en la programación de la guillotina?",
    options: ["Una posición de la escuadra retrasada donde el corte está desactivado por seguridad para introducir el papel", "La cantidad máxima de paquetes", "La fuerza del motor"],
    correct: 0,
    explanation: "Bloquea el ciclo de corte impidiendo accidentes mientras el usuario posiciona el pliego.",
    source: "Examen FNMT 2023 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre al activar la 'Protección de Programa'?",
    options: ["Se impide la modificación o borrado accidental de las medidas del programa memorizado", "La pantalla se vuelve negra", "La máquina solo funciona en manual"],
    correct: 0,
    explanation: "Bloquea la edición protegiendo la secuencia aprobada por el jefe de taller.",
    source: "Examen FNMT 2023 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Cómo influye el uso de 'Polvos Antimaculantes' en el corte?",
    options: ["Hacen que el paquete sea resbaladizo y esponjoso, requiriendo un prensado previo suave", "Impiden que la cuchilla baje", "Rallan la mesa de aire"],
    correct: 0,
    explanation: "Las micropartículas reducen el rozamiento entre pliegos provocando desplazamientos al cortar.",
    source: "Examen FNMT 2023 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Corrector de Espesor de Cuchilla'?",
    options: ["Una función que ajusta la posición de la escuadra según los milímetros perdidos en los reafilados del acero", "Una regla graduada de mano", "Un calibre micrométrico"],
    correct: 0,
    explanation: "Compensa en la programación el menor grosor que adopta la cuchilla tras pasar por la rectificadora.",
    source: "Examen FNMT 2025 (Pág. 8)"
  },
  {
    theme: 1,
    question: "¿Qué tolerancia dimensional exige la norma ISO para formatos cortados de hasta 150 mm?",
    options: ["± 1,0 mm (o ± 1,5 mm según norma DIN/ISO 216)", "± 5,0 mm", "± 0,01 mm"],
    correct: 0,
    explanation: "Establece los márgenes de desviación máximos permitidos en productos de pequeño formato.",
    source: "Examen FNMT 2025 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué representan las 'Cruces de Registro' en el pliego?",
    options: ["Marcas en forma de cruz fuera del formato para verificar la superposición exacta de colores y el encaje anverso/reverso", "Líneas por donde debe pasar la cuchilla", "Puntos de apoyo del pisón"],
    correct: 0,
    explanation: "Permiten evaluar el ajuste óptico de la impresión antes de proceder al desbarbe.",
    source: "Examen FNMT 2025 (Pág. 5)"
  },
  {
    theme: 1,
    question: "Al realizar la corrección de una medida errónea ANTES de memorizar, ¿qué tecla se presiona?",
    options: ["La tecla C para borrar el campo de entrada", "La tecla de emergencia", "El pedal de prensado"],
    correct: 0,
    explanation: "La tecla Clear (C) limpia la cifra en pantalla permitiendo teclear el valor correcto.",
    source: "Examen FNMT 2025 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Corte a Sangre'?",
    options: ["Aquel que elimina los márgenes blancos dejando la imagen impresa hasta el borde mismo del papel", "Un corte que hiere al operario", "El primer refilado de la resma"],
    correct: 0,
    explanation: "Corta por dentro del área impresa de demasía para evitar filos blancos tras el manipulado.",
    source: "Examen FNMT 2022 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Prueba de Presión' en la guillotina?",
    options: ["Comparar el comportamiento de la pila a cortar con una pila de referencia para determinar la fuerza de pisón adecuada", "Apretar el pedal con la mano", "Medir la presión de los neumáticos del taller"],
    correct: 0,
    explanation: "Ensayo previo que evalúa el volumen de aire retenido para ajustar la fuerza sin dañar el papel.",
    source: "Examen FNMT 2026 (Pág. 10)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Escuadra Inclinable'?",
    options: ["Un mecanismo que permite inclinar la cara vertical de la escuadra para compensar pilas con variaciones de grosor en el lomo", "Una regla graduada a 45°", "El soporte de la pantalla"],
    correct: 0,
    explanation: "Corrige las desviaciones de verticalidad en paquetes que presentan desnivel por volumen de pliegue o tinta.",
    source: "Examen FNMT 2023 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Para qué sirve el mando de ajuste de precisión 'DNT'?",
    options: ["Ajustar manualmente la escuadra mediante una rueda de pulso micrométrico", "Aumentar la luz de la mesa", "Subir el pisón de golpe"],
    correct: 0,
    explanation: "Permite desplazamientos de centésimas de milímetro accionando el mando giratorio frontal.",
    source: "Examen FNMT 2022 (Pág. 6)"
  },
  {
    theme: 1,
    question: "En las guillotinas POLAR, ¿qué significa el pictograma de una cuchilla sobre fondo sombreado?",
    options: ["Cuchilla automática preparada / lista", "Cambio de cuchilla en curso", "Cuchilla fuera de servicio"],
    correct: 0,
    explanation: "Indica que el modo de corte automático está habilitado para ejecutarse al avanzar la escuadra.",
    source: "Examen FNMT 2023 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre si la rueda de mano de ajuste fino se presiona hacia ADENTRO?",
    options: ["Engrana el mecanismo micrométrico manual para desplazar la escuadra a izquierda o derecha", "Bloquea la escuadra de golpe", "Enciende la mesa de aire"],
    correct: 0,
    explanation: "El embrague mecánico conecta el volante manual con el husillo de la escuadra.",
    source: "Examen FNMT 2026 (Pág. 8)"
  },
  {
    theme: 1,
    question: "¿Cómo se cancela la ejecución de un programa en automático?",
    options: ["Accionando la tecla de parada o cambiando al modo manual en la consola", "Pisando el pedal a fondo", "Cortando el aire neumático"],
    correct: 0,
    explanation: "Devuelve el control al operador deteniendo el avance automático de pasos.",
    source: "Examen FNMT 2025 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Qué deforma el borde de corte si la regla de apoyo de plástico está muy desgastada?",
    options: ["Los pliegos inferiores del paquete quedan mal cortados, con rebabas o sin separar totalmente", "La pantalla se apaga", "El pisón no puede bajar"],
    correct: 0,
    explanation: "El canal profundo grabado en la regla impide que la cuchilla remate el último pliego de abajo.",
    source: "Examen FNMT 2022 (Pág. 7)"
  },
  {
    theme: 1,
    question: "En el refilado de paquetes impresos con barniz, ¿por qué se debe esperar al secado total?",
    options: ["Para evitar que la presión del pisón transfiera la capa de barniz tierno al reverso del pliego adyacente", "Para que el papel pese menos", "Porque la cuchilla se oxida"],
    correct: 0,
    explanation: "Un barniz no curado se adhiere bajo presión provocando el bloqueo masivo del paquete.",
    source: "Examen FNMT 2025 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Desbarbe'?",
    options: ["Los primeros cortes perimetrales que eliminan los bordes irregulares de la resma dejándola a escuadra", "Limpiar las virutas del suelo", "Rallar el lomo de un libro"],
    correct: 0,
    explanation: "Establece las caras limpias de referencia para las posteriores operaciones de fraccionamiento.",
    source: "Examen FNMT 2022 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Qué riesgo presenta la acumulación de recorte debajo de la mesa de la guillotina?",
    options: ["Peligro de incendio y bloqueo de los sensores de posición o mecanismos inferiores", "Que la máquina pierda precisión", "Ninguno, es normal"],
    correct: 0,
    explanation: "Exige la recogida periódica de la viruta celulósica para mantener despejados los finales de carrera.",
    source: "Examen FNMT 2022 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Goma de Expulsión' en el entorno de manipulado?",
    options: ["Tiras elásticas que devuelven el material fuera de la zona de presión o corte", "Un borrador de lápiz", "La banda de transmisión del motor"],
    correct: 0,
    explanation: "Evita que las piezas cortadas se enganchen en los elementos mecánicos.",
    source: "Examen FNMT 2022 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué deforma una posteta mal igualada?",
    options: ["Falta de alineación de las imágenes impresas y diferencias de cota entre pliegos del mismo paquete", "Que el papel cambie de color", "Que la cuchilla se rompa"],
    correct: 0,
    explanation: "Si las hojas no tocan la escuadra, cada pliego se cortará con una medida distinta.",
    source: "Examen FNMT 2022 (Pág. 1)"
  },
  {
    theme: 1,
    question: "En una guillotina POLAR XT, ¿qué indica la luz verde en el cuadro de selección de programa?",
    options: ["Indica el siguiente programa libre disponible en el segmento de memoria activo", "Que la cuchilla está bajando", "Que hay una avería grave"],
    correct: 0,
    explanation: "Guía al operario mostrando la primera casilla de memoria vacía para grabar.",
    source: "Examen FNMT 2022 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre si la barrera de luz se interrumpe MIENTRAS la escuadra está avanzando?",
    options: ["El avance de la escuadra se detiene de forma inmediata por seguridad", "La escuadra acelera al doble", "La cuchilla cae de golpe"],
    correct: 0,
    explanation: "Cualquier intrusión en la zona protegida frena todos los elementos motorizados.",
    source: "Examen FNMT 2022 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Para qué sirve el 'Puntero Óptico' de corte?",
    options: ["Proyectar una línea luminosa sobre el papel que muestra exactamente la línea por donde pasará el filo de la cuchilla", "Encender la luz de la sala", "Medir la temperatura del papel"],
    correct: 0,
    explanation: "Permite al guillotinero ajustar a estima el corte sobre marcas o muestras visuales.",
    source: "Examen FNMT 2025 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué deforma las esquinas si se usa un 'Pisón de Esquinas' incorrecto?",
    options: ["Se producen marcas hundidas o falta de prensado en los extremos del paquete", "El papel se quema", "La mesa se desnivela"],
    correct: 0,
    explanation: "Se debe adaptar la pletina de sujeción al tamaño real del bloque a cortar.",
    source: "Examen FNMT 2025 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Por qué se deben usar guantes de protección durante el cambio de cuchilla?",
    options: ["Para evitar cortes profundos por contacto accidental con el filo extremadamante afilado", "Para no ensuciar la cuchilla con grasa", "Porque lo exige el fabricante para no oxidarla"],
    correct: 0,
    explanation: "EPI obligatorio para la manipulación segura del acero rectificado.",
    source: "Examen FNMT 2022 (Pág. 2)"
  },
  {
    theme: 1,
    question: "En la FNMT, ¿qué departamento emite las órdenes de trabajo y especificaciones de corte?",
    options: ["Oficina Técnica / Planificación de la Producción", "El servicio de limpieza", "El taller de mecánica general"],
    correct: 0,
    explanation: "Define las cotas, tolerancias, tipo de papel y secuencia de producción para el taller.",
    source: "Examen FNMT 2022 (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Paso Libre' en la programación de corte?",
    options: ["Un paso intercalado de movimiento de escuadra que no ejecuta acción de corte", "Un paso donde la máquina regala papel", "Una posición fuera de la mesa"],
    correct: 0,
    explanation: "Permite desplazar la posteta para giros o acomodación sin accionar la cuchilla.",
    source: "Examen FNMT 2025 (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Qué verificación final debe realizar el guillotinero al terminar una orden?",
    options: ["Comprobar las cotas finales con la plantilla de calidad y registrar los pliegos útiles e inútiles en el tejuelo", "Limpiar la pantalla con agua", "Dejar la máquina encendida"],
    correct: 0,
    explanation: "Valida la conformidad del lote y garantiza el cierre del inventario de papel.",
    source: "Examen FNMT 2025 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué deforma el material si la regla de corte de plástico no está bien asentada en su canal?",
    options: ["El corte resultará inclinado o la cuchilla tropezará con el resalte dañando el filo", "La escuadra no podrá moverse", "El aire de la mesa perderá presión"],
    correct: 0,
    explanation: "La regla debe quedar perfectamente enrasada con el plano de la mesa de corte.",
    source: "Examen FNMT 2022 (Pág. 7)"
  }



  


];









/* =========================================================================
   2. BANCO DE PREGUNTAS - MÓDULO ARTES GRÁFICAS 1
   ========================================================================= */
const questionsModulo1 = [
 /* =========================================================================
   2. BANCO DE PREGUNTAS - MÓDULO ARTES GRÁFICAS 1 (151 a 225)
   ========================================================================= */
//const questionsModulo1Ext = [
  { theme: 1, question: "¿Quién inventó la impresión con tipos móviles metálicos hacia el año 1450?", options: ["Johannes Gutenberg", "Alois Senefelder", "Ottmar Mergenthaler"], correct: 0, explanation: "Johannes Gutenberg inventó la imprenta de tipos móviles de metal hacia 1450.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 1, question: "¿Qué inventor desarrolló el proceso de la Litografía en 1796?", options: ["Alois Senefelder", "Karl Klietsch", "Ottmar Mergenthaler"], correct: 0, explanation: "Alois Senefelder inventó la litografía en 1796 basándose en la inmiscibilidad entre agua y grasa.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 1, question: "La Linotipia fue inventada en el año 1886 por:", options: ["Ottmar Mergenthaler", "Karl Klietsch", "Johannes Gutenberg"], correct: 0, explanation: "Ottmar Mergenthaler inventó la Linotipia en 1886, revolucionando la composición de textos mecanizados.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 1, question: "¿Qué hito técnico ocurrido en 1985 con el Apple Mac y Adobe PostScript dio origen a la Autoedición?", options: ["La aparición del lenguaje PostScript y el ordenador Apple Macintosh", "El descubrimiento del fotograbado por Karl Klietsch", "La invención del proceso CTP térmico"], correct: 0, explanation: "En 1985 la combinación del Apple Mac con el lenguaje Adobe PostScript dio lugar al nacimiento de la Autoedición.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 2, question: "¿Cuál es la longitud de onda de referencia para medir la blancura y luminosidad del papel (457 nm)?", options: ["457 nanómetros (longitud complementaria al amarillo)", "574 nanómetros", "610 nanómetros"], correct: 0, explanation: "Se utiliza 457 nm por ser el color complementario del amarillo, tono al que tiende a degradarse el papel.", source: "Manual Artes Gráficas 1 (Pág. 67)" },
  { theme: 2, question: "En el sistema tipográfico europeo (Didot), ¿a cuántos milímetros equivale exactamente 1 Cícero (12 puntos Didot)?", options: ["4,512 mm", "4,212 mm", "0,376 mm"], correct: 0, explanation: "1 punto Didot equivale a 0,376 mm, por lo que 1 Cícero (12 puntos Didot) equivale a 4,512 mm.", source: "Manual Artes Gráficas 1 (Pág. 37)" },
  { theme: 2, question: "En el sistema tipográfico angloamericano (Pica), ¿a cuántos milímetros equivale 1 Pica (12 puntos de pica)?", options: ["4,212 mm", "4,512 mm", "0,351 mm"], correct: 0, explanation: "1 punto de pica equivale a 0,351 mm, por lo que 1 Pica (12 puntos) es exactamente 4,212 mm.", source: "Manual Artes Gráficas 1 (Pág. 38)" },
  { theme: 2, question: "¿Qué equivalencia cuantitativa representa 1 Resma de papel en la industria gráfica?", options: ["500 pliegos (o 20 manos)", "1.000 pliegos", "250 pliegos"], correct: 0, explanation: "Una resma equivale tradicionalmente a 500 pliegos de papel o 20 manos.", source: "Manual Artes Gráficas 1 (Pág. 27)" },
  { theme: 2, question: "¿Cómo se define la fórmula para calcular el peso de una resma en kilos?", options: ["(Ancho cm × Largo cm × Gramaje g/m²) / 20.000", "(Ancho cm × Largo cm × Gramaje g/m²) / 10.000", "(Ancho mm × Largo mm × Gramaje g/m²) / 1.000"], correct: 0, explanation: "La fórmula expresada en el manual es: Kg/resma = (A × L × G) / 20.000.", source: "Manual Artes Gráficas 1 (Pág. 41)" },
  { theme: 3, question: "Una imagen digital en modo CMAN (CMYK) de 8 bits por canal posee una profundidad de color total de:", options: ["32 bits por píxel (2^8 × 4 canales)", "24 bits por píxel", "8 bits por píxel"], correct: 0, explanation: "El modo CMYK consta de 4 canales de 8 bits cada uno, sumando una profundidad total de 32 bits por píxel.", source: "Manual Artes Gráficas 1 (Pág. 60)" },
  { theme: 3, question: "¿Qué resolución en puntos por pulgada (ppp/dpi) se considera la estándar para imágenes impresas de alta calidad en offset?", options: ["300 ppp a tamaño final de reproducción", "72 ppp", "1200 ppp"], correct: 0, explanation: "La resolución óptima de entrada en imágenes de semitonos es el doble de la lineatura de trama objetivo (ej. 150 lpi x 2 = 300 ppp).", source: "Manual Artes Gráficas 1 (Pág. 58)" },
  { theme: 3, question: "¿Qué es la 'Lineatura de Trama' (lpi) en el proceso de tramado fotomecánico o digital?", options: ["El número de líneas de celdas de medio tono por pulgada lineal", "El grosor de la hoja de papel", "La velocidad de giro del cilindro de impresión"], correct: 0, explanation: "Expresa la densidad de la retícula de puntos por pulgada (líneas por pulgada - lpi).", source: "Manual Artes Gráficas 1 (Pág. 59)" },
  { theme: 3, question: "¿Qué ángulo de trama se asigna de manera estándar al color negro en una cuatricromía para evitar el efecto Moiré?", options: ["45 grados (ángulo de mayor agudeza visual)", "15 grados", "90 grados"], correct: 0, explanation: "El ángulo de 45° ofrece la menor visibilidad de la estructura de trama al ojo humano.", source: "Manual Artes Gráficas 1 (Pág. 62)" },
  { theme: 3, question: "¿Cuál es la separación angular idónea entre las tramas de los colores primarios intensos (C, M, K) en Offset?", options: ["30 grados de separación angular", "10 grados", "45 grados"], correct: 0, explanation: "La separación de 30° entre Cian (105°/15°), Magenta (75°) y Negro (45°) previene interferencias de muaré.", source: "Manual Artes Gráficas 1 (Pág. 62)" },
  { theme: 3, question: "En el estándar tipográfico de puntos, ¿cuántos puntos Didot forman un milímetro?", options: ["Aproximadamente 2,66 puntos Didot por milímetro", "10 puntos", "1 punto"], correct: 0, explanation: "Como 1 pt Didot = 0,376 mm, 1 mm / 0,376 mm = 2,66 pt.", source: "Manual Artes Gráficas 1 (Pág. 37)" },
  { theme: 2, question: "¿Qué porcentaje aproximado de agua contiene el papel recién fabricado a la salida de la sección de secado?", options: ["Entre un 5% y un 7% de humedad relativa de equilibrio", "El 50%", "Menos del 0,1%"], correct: 0, explanation: "Humedad estructural indispensable para mantener la flexibilidad del papel sin que sea quebradizo.", source: "Manual Artes Gráficas 1 (Pág. 25)" },
  { theme: 2, question: "¿Qué es la 'Dirección de Fibra' o sentido de máquina en una hoja de papel?", options: ["La orientación predominantemente paralela de las fibras de celulosa en el sentido de marcha de la mesa de fabricación", "El corte diagonal de la guillotina", "El sentido de la impresión de la tinta"], correct: 0, explanation: "Las fibras se alinean en el sentido en que fluye la pasta en la tela de formación.", source: "Manual Artes Gráficas 1 (Pág. 26)" },
  { theme: 2, question: "Para comprobar visual o manualmente la dirección de fibra de un pliego sin instrumental, ¿qué método es válido?", options: ["Humdecer dos franjas perpendiculares de papel y observar hacia qué lado se curva libremente", "Pesar la hoja en la báscula", "Lustrar el papel con cera"], correct: 0, explanation: "Al humedecerse, las fibras se dilatan en ancho, haciendo que la hoja se enrosque paralelamente a la fibra.", source: "Manual Artes Gráficas 1 (Pág. 26)" },
  { theme: 2, question: "¿Qué efecto tiene el pliegue del papel realizado a favor o en contra de la dirección de la fibra?", options: ["A favor de fibra el pliegue es limpio y suave; en contra de fibra la fibra se rompe y agrieta el lomo", "No hay ninguna diferencia", "En contra de fibra el libro pesa menos"], correct: 0, explanation: "El doblado contra fibra fractura la estructura de celulosa y el estucado del papel.", source: "Manual Artes Gráficas 1 (Pág. 27)" },
  { theme: 2, question: "¿En qué consiste la prueba del desgarro para hallar el sentido de fibra de una muestra de papel?", options: ["Rasgar el pliego en las dos direcciones perpendiculares: el rasgado a favor de fibra es recto y limpio", "Quemar una esquina del pliego", "Doblar el papel en cuatro partes iguales"], correct: 0, explanation: "La rasgadura sigue la línea natural de alineación de las fibras celulósicas.", source: "Manual Artes Gráficas 1 (Pág. 26)" },
  { theme: 1, question: "¿Qué innovación introdujo Alois Senefelder al usar la piedra caliza de Solnhofen?", options: ["El principio de impresión planográfica basado en el rechazo entre el agua y la grasa", "El fotopolímero sintético", "El rodillo de goma offset"], correct: 0, explanation: "Descubrimiento de la litografía que dio origen a la impresión plana moderna.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 1, question: "¿Qué representa la tecnología CTP (Computer to Plate) en la preimpresión moderna?", options: ["La grabación directa del archivo digital sobre la plancha de impresión sin usar película ni fotolitos", "La impresión directa con inyección de tinta", "El empaquetado automático de resmas"], correct: 0, explanation: "CTP eliminó los procesos fotoquímicos y los fotolitos intermedios.", source: "Manual Artes Gráficas 1 (Pág. 5)" },
  { theme: 3, question: "En síntesis aditiva del color (RGB), la suma de las tres luces primarias a su máxima intensidad produce:", options: ["Luz Blanca", "Color Negro", "Color Gris Neutro"], correct: 0, explanation: "La combinación de luces roja, verde y azul da como resultado la luz blanca.", source: "Manual Artes Gráficas 1 (Pág. 52)" },
  { theme: 3, question: "En síntesis sustractiva (Pigmentos CMY), la mezcla de los tres pigmentos puros genera idealmente:", options: ["Color Negro o pardo oscuro", "Luz Blanca", "Verde brillante"], correct: 0, explanation: "Los pigmentos restan longitudes de onda a la luz reflejada creando sombras oscuras.", source: "Manual Artes Gráficas 1 (Pág. 53)" },
  { theme: 3, question: "¿Qué función cumple el 'Perfil ICC' en un flujo de trabajo de gestión de color?", options: ["Describir el espacio de color y el comportamiento de un dispositivo (impresora, monitor) para mantener consistencia de color", "Medir las dimensiones del papel en la guillotina", "Aumentar el contraste del texto"], correct: 0, explanation: "Garantiza que el color visualizado en pantalla sea idéntico al impreso final.", source: "Manual Artes Gráficas 1 (Pág. 65)" },
    {
    theme: 1,
    question: "¿En qué soporte de escritura antiguo fabricado con tiras vegetales cruzadas y prensadas se basó el comercio documental de Egipto?",
    options: ["Papiro", "Pergamino", "Tablilla de arcilla"],
    correct: 0,
    explanation: "El papiro se obtenía del tallo de la planta Cyperus papyrus mediante entrelazado de tiras y prensado.",
    source: "Manual Artes Gráficas 1 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿De qué material de origen animal está constituido el pergamino inventado en la ciudad de Pérgamo?",
    options: ["Pieles de animales (oveja, ternero, cabra) tratadas con cal y raspadas", "Capas de seda compactada", "Fibras de algodón hervidas"],
    correct: 0,
    explanation: "El pergamino sustituyó al papiro por su mayor resistencia, usando pieles limpias y tensadas.",
    source: "Manual Artes Gráficas 1 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿En qué año se atribuye históricamente la invención del papel a Cai Lun en China?",
    options: ["Año 105 d.C.", "Año 1450 d.C.", "Año 751 d.C."],
    correct: 0,
    explanation: "Cai Lun formalizó la fabricación de papel utilizando trapos viejos, cáñamo y corteza de morera.",
    source: "Manual Artes Gráficas 1 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿A través de qué acontecimiento histórico penetró la técnica de fabricación del papel en el mundo islámico y posteriormente en Europa?",
    options: ["La batalla del Talas en el año 751 d.C.", "Las cruzadas a Jerusalén", "El viaje de Marco Polo"],
    correct: 0,
    explanation: "Tras capturar artesanos chinos en la batalla del Talas, los árabes instalaron molinos papeleros en Samarcanda.",
    source: "Manual Artes Gráficas 1 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Cuál fue el primer molino papelero documentado en Europa Peninsular, instalado en el siglo XI?",
    options: ["El molino papelero de Játiva (Valencia)", "El molino de Núremberg", "El molino de Fabriano"],
    correct: 0,
    explanation: "Játiva se convirtió en el principal centro papelero de Al-Ándalus propagando el soporte hacia Europa.",
    source: "Manual Artes Gráficas 1 (Pág. 1)"
  },
  {
    theme: 1,
    question: "¿Qué aleación metálica exacta utilizó Gutenberg para fundir los tipos móviles y asegurar durabilidad sin deformarse al enfriar?",
    options: ["Plomo, estaño y antimonio", "Cobre, zinc y hierro", "Bronce y aluminio"],
    correct: 0,
    explanation: "El antimonio aportó la propiedad de dilatarse levemente al solidificar, llenando el molde con precisión.",
    source: "Manual Artes Gráficas 1 (Pág. 2)"
  },
  {
    theme: 1,
    question: "La 'Biblia de 42 líneas' impresa por Gutenberg también es conocida técnicamente en la historia del libro como:",
    options: ["La Biblia de Mazarino", "El Códice Áureo", "La Biblia Políglota Complutense"],
    correct: 0,
    explanation: "Se le denomina Biblia de Mazarino por el cardenal cuya biblioteca custodiaba un ejemplar famoso.",
    source: "Manual Artes Gráficas 1 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Cómo se denominan técnicamente los libros impresos desde la invención de la imprenta hasta el 31 de diciembre de 1500?",
    options: ["Incunables", "Manuscritos iluminados", "Códices medievales"],
    correct: 0,
    explanation: "Proviene del latín 'incunabula' (en la cuna), refiriéndose a los libros impresos en la infancia de la imprenta.",
    source: "Manual Artes Gráficas 1 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué impresor veneciano del siglo XV inventó el formato de bolsillo (octavo) y creó el tipo de letra 'Itálica' o cursiva?",
    options: ["Aldo Manuzio", "Nicolas Jenson", "William Caxton"],
    correct: 0,
    explanation: "Manuzio revolucionó el diseño editorial reduciendo formatos e introduciendo la letra grifa/itálica.",
    source: "Manual Artes Gráficas 1 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué máquina inventada por Friedrich Koenig en 1812 sustituyó la prensa manual de madera aplicando presión rotativa?",
    options: ["La prensa cilíndrica accionada por vapor", "La linotipia", "La minerva de pedal"],
    correct: 0,
    explanation: "Koenig introdujo el cilindro impresor multiplicando por diez la velocidad de tirada de los periódicos.",
    source: "Manual Artes Gráficas 1 (Pág. 2)"
  },
  {
    theme: 1,
    question: "La máquina de composición de tipos individuales impulsada por teclado ideada por Tolbert Lanston en 1887 es:",
    options: ["La Monotipia", "La Linotipia", "La Fotocomponedora"],
    correct: 0,
    explanation: "A diferencia de la Linotipia (que fundía líneas enteras), la Monotipia componía y fundía caracteres sueltos.",
    source: "Manual Artes Gráficas 1 (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿En qué consistía el principio de la 'Fotocomposición' de segunda y tercera generación surgida a mediados del siglo XX?",
    options: ["Proyectar luz a través de matrices fotográficas sobre película o papel fotosensible", "Fundir plomo mediante láser", "Imprimir por inyección térmica de cera"],
    correct: 0,
    explanation: "Sustituyó el metal caliente por exposición óptica, eliminando el plomo de las salas de composición.",
    source: "Manual Artes Gráficas 1 (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué representa el formato de archivo PostScript (nivel 1, 2 y 3) desarrollado por Adobe en 1985?",
    options: ["Un lenguaje de descripción de página orientado a vectores para interpretes RIP de filmadoras e impresoras", "Un formato comprimido de audio", "Un sistema de gestión de bases de datos"],
    correct: 0,
    explanation: "PostScript permitió describir texto, vectores e imágenes ráster de forma independiente a la resolución.",
    source: "Manual Artes Gráficas 1 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Cuál es la función técnica de un procesador RIP (Raster Image Processor) en preimpresión?",
    options: ["Convertir la información vectorial y descriptiva del archivo en un mapa de bits de alta resolución para la filmadora/CTP", "Diseñar logotipos automáticos", "Calcular el consumo eléctrico de la guillotina"],
    correct: 0,
    explanation: "El RIP interpreta los comandos PostScript/PDF y genera los puntos de exposición para el láser.",
    source: "Manual Artes Gráficas 1 (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia principal existe entre la tecnología CTP Térmica y la CTP Violeta?",
    options: ["La térmica usa láser infrarrojo (830 nm) operando con luz día; la violeta usa diodos de 405 nm que requieren luz inactínica", "La violeta imprime sobre papel directamente y la térmica sobre plomo", "La térmica sólo graba plásticos"],
    correct: 0,
    explanation: "Los CTP térmicos ofrecen mayor estabilidad de punto al reaccionar por calor sin ser sensibles a la luz ambiental.",
    source: "Manual Artes Gráficas 1 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué es una plancha 'Processless' o sin procesado en la tecnología CTP?",
    options: ["Una plancha grabada por láser que pasa directo a la máquina de imprimir sin requerir revelado químico ni aclarado", "Una plancha de caucho sintético", "Una plancha grabada con ácido acético"],
    correct: 0,
    explanation: "Elimina la reveladora, el consumo de agua y los residuos químicos, lavándose con la solución de mojado en máquina.",
    source: "Manual Artes Gráficas 1 (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Creep' o 'Desplazamiento del Lomo' en la imposición de cuadernillos embuchados?",
    options: ["El desplazamiento progresivo hacia el exterior de las páginas interiores del cuadernillo debido al grosor del papel", "El estiramiento de la tinta", "El desgaste de la barra de la guillotina"],
    correct: 0,
    explanation: "Al plegar muchas hojas juntas, las páginas internas sobresalen; el software de imposición ajusta el medianil para compensarlo.",
    source: "Manual Artes Gráficas 1 (Pág. 12)"
  },
  {
    theme: 1,
    question: "¿Qué representa el 'Medianil' en un diseño editorial de dos páginas enfrentadas?",
    options: ["El espacio en blanco comprendido entre los márgenes interiores de las dos páginas en el lomo", "El margen superior de la cabeza", "El sangrado exterior de corte"],
    correct: 0,
    explanation: "Es el margen del lomo que evita que el texto se hunda o vuelva ilegible tras la encuadernación.",
    source: "Manual Artes Gráficas 1 (Pág. 12)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Imposición Voltereta' (Work and Tumble) en la tirada de pliegos?",
    options: ["Cuelga el pliego manteniendo el mismo borde de pinza pero girando la hoja de arriba hacia abajo (cambia la contraescurra)", "Gira la hoja de izquierda a derecha usando las dos guías laterales", "Imprime primero la contraportada"],
    correct: 0,
    explanation: "Exige que el papel esté perfectamente cortado a escuadra porque el segundo lado usa un nuevo borde como pinza.",
    source: "Manual Artes Gráficas 1 (Pág. 13)"
  },
  {
    theme: 1,
    question: "¿En qué consiste la 'Imposición A Cara y Retiro' (Work and Turn)?",
    options: ["Imprimir anverso y reverso con la misma forma usando el mismo borde de pinza, girando el pliego de izquierda a derecha", "Usar dos máquinas distintas en paralelo", "Doblar el pliego cuatro veces antes de imprimir"],
    correct: 0,
    explanation: "Optimiza planchas al juntar las dos caras en una sola forma; tras imprimir se gira lateralmente usando la misma pinza.",
    source: "Manual Artes Gráficas 1 (Pág. 13)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Traza de Plegado' en la maqueta de preimpresión?",
    options: ["El esquema impreso que muestra la orientación de las caras y el orden numérico de las páginas al doblar el pliego", "El cálculo de gramos de tinta", "El ajuste de velocidad del motor"],
    correct: 0,
    explanation: "Sirve de guía al maquinista y al taller de postimpresión para verificar la caida de pliego.",
    source: "Manual Artes Gráficas 1 (Pág. 14)"
  },
  {
    theme: 1,
    question: "¿Qué función tiene el formato de archivo PDF/X (ej. PDF/X-1a, PDF/X-4) en el intercambio de datos para imprenta?",
    options: ["Asegurar un estándar estricto que acopla fuentes, elimina espacio RGB no permitido y garantiza la reproducibilidad", "Reducir el tamaño a menos de 10 KB", "Permirir animaciones interactivas"],
    correct: 0,
    explanation: "PDF/X prohíbe elementos incompatibles con la filmación gráfica como vídeo, audio o colores no calibrados.",
    source: "Manual Artes Gráficas 1 (Pág. 15)"
  },
  {
    theme: 1,
    question: "En la norma PDF/X-1a, ¿qué restricción es obligatoria sobre los espacios de color aceptados?",
    options: ["Sólo admite CMYK y tintas planas (Pantone), estando prohibidos los objetos en espacio RGB o CIE Lab", "Admite únicamente imágenes RGB de cámara", "Exige imágenes en blanco y negro puro"],
    correct: 0,
    explanation: "Evita conversiones imprevistas de color en el RIP obligando a entregar el trabajo en CMYK o tintas directas.",
    source: "Manual Artes Gráficas 1 (Pág. 15)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Verificado Preflight' o Chequeo Previo de un archivo digital?",
    options: ["La inspección automatizada del documento para detectar errores de resolución, sangrados, fuentes o espacio de color", "La prueba física de arrastre en la guillotina", "El pesaje del papel en el taller"],
    correct: 0,
    explanation: "Detecta fallos técnicos en la fase de diseño antes de enviar la orden a la filmadora CTP.",
    source: "Manual Artes Gráficas 1 (Pág. 16)"
  },
  {
    theme: 1,
    question: "Si en un archivo PDF para imprenta una tipografía aparece como 'No incrustada', ¿qué riesgo ocurre en el RIP?",
    options: ["El servidor sustituirá la tipografía por una fuente por defecto del sistema desconfigurando el texto", "El archivo se borra del disco", "La plancha se graba con tinta transparente"],
    correct: 0,
    explanation: "Incrustar fuentes garantiza que los vectores tipográficos exactos se expongan en la plancha.",
    source: "Manual Artes Gráficas 1 (Pág. 16)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Prueba de Color Certificada' (ej. Fogra / IDEAlliance)?",
    options: ["Una impresión de alta fidelidad con tira de control FOGRA medida mediante espectrofotómetro para simular el impreso final", "Una fotocopia a color rápida", "Una imagen enviada por WhatsApp al cliente"],
    correct: 0,
    explanation: "Es el contrato contractual de color entre el cliente y la imprenta antes de iniciar la tirada.",
    source: "Manual Artes Gráficas 1 (Pág. 18)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tira de Control Espectrofotométrica' (Tira FOGRA) en la prueba de color?",
    options: ["Una serie de parches de color normalizados situados al margen para medir densidades, ganancia de punto y delta E", "Un código de barras de precio", "Una franja de adhesivo térmico"],
    correct: 0,
    explanation: "Permite certificar mediante lectura con espectrofotómetro que la prueba está dentro de la tolerancia de la norma ISO 12647.",
    source: "Manual Artes Gráficas 1 (Pág. 18)"
  },
  {
    theme: 1,
    question: "¿Qué indica un valor de tolerancia 'Delta E' (ΔE) en el control de calidad del color?",
    options: ["La diferencia matemática y visual percebida entre dos muestras de color en el espacio CIE Lab", "La velocidad de bajada de la cuchilla", "La cantidad de páginas de un pliego"],
    correct: 0,
    explanation: "Un ΔE menor a 1 a 2 es imperceptible para el ojo humano no entrenado, marcando el estándar de calidad.",
    source: "Manual Artes Gráficas 1 (Pág. 19)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Ganancia de Punto' o Incremento de Cobertura de Trama (TVI)?",
    options: ["El fenómeno por el cual los puntos de trama se expanden de tamaño al transferir la tinta de la plancha al caucho y al papel", "El aumento de grosor del paquete de papel", "La ganancia de dinero en la tirada"],
    correct: 0,
    explanation: "La presión mecánica y la absorción del papel agrandan el punto; el RIP lo compensa reduciendo el punto en la plancha.",
    source: "Manual Artes Gráficas 1 (Pág. 20)"
  },
  {
    theme: 1,
    question: "¿Cómo influye la porosidad del papel Offset no estucado sobre la ganancia de punto comparado con un papel Estucado?",
    options: ["El papel Offset produce una mayor ganancia de punto por la alta absorción capilar de la celulosa", "El papel Offset no presenta ganancia de punto", "El estucado gana el doble de punto que el offset"],
    correct: 0,
    explanation: "Al chupar más tinta, el punto se expande más en papeles porosos (Offset) que en superficies selladas (Estucados).",
    source: "Manual Artes Gráficas 1 (Pág. 20)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Curva de Compensación de Trama' cargada en el software CTP?",
    options: ["Un ajuste de calibración que reduce el porcentaje de punto en la plancha para que tras la ganancia en máquina resulte el valor correcto", "Una regla curvada para medir el cilindro", "El perfil de velocidad de la guillotina"],
    correct: 0,
    explanation: "Si se desea un 50% en papel y la máquina gana un 15%, la curva graba la plancha al 35% exacto.",
    source: "Manual Artes Gráficas 1 (Pág. 20)"
  },
  {
    theme: 1,
    question: "¿Qué representa la tecnología 'CTP a Pantalla / CTP Flexo' (CDI - Cyrel Digital Imager)?",
    options: ["El grabado directo por láser de la capa máscara negra (black mask) sobre planchas fotopolímeras flexográficas", "La impresión directa en vallas", "La grabación de cilindros de plomo"],
    correct: 0,
    explanation: "El láser abla de forma precisa la capa reactiva del polímero flexográfico antes del curado por luz UV.",
    source: "Manual Artes Gráficas 1 (Pág. 22)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Ablación Láser' utilizada en la fabricación de formas impresoras digitales?",
    options: ["La sublimación o evaporación térmica de una capa superficial protectora mediante el impacto del haz de luz láser", "La limpieza manual con agua a presión", "El lavado con disolventes orgánicos"],
    correct: 0,
    explanation: "El láser volatiliza material a nivel microscópico formando los puntos de la imagen digital.",
    source: "Manual Artes Gráficas 1 (Pág. 22)"
  },
  {
    theme: 1,
    question: "¿Qué es un 'Tiffin' o archivo TIFF/IT en el entorno de producción de preimpresión?",
    options: ["Un formato de imagen de mapa de bits no comprimido de alta estabilidad usado para enviar datos tramados al CTP", "Un procesador de texto antiguo", "Un programa de contabilidad"],
    correct: 0,
    explanation: "TIFF/IT (Tag Image File Format for Image Technology) garantiza la integridad gráfica sin pérdidas de compresión.",
    source: "Manual Artes Gráficas 1 (Pág. 24)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Resolución Óptica' de un escáner o filmadora frente a la resolución interpolada?",
    options: ["La capacidad física real de capturar muestras por los sensores ópticos sin invención de píxeles por software", "La velocidad de escaneado en segundos", "El brillo de la pantalla"],
    correct: 0,
    explanation: "La resolución óptica mide el número real de fotodiodos físicos del sistema.",
    source: "Manual Artes Gráficas 1 (Pág. 25)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tramado Estocástico' o de Frecuencia Modulada (FM)?",
    options: ["Un método que distribuye puntos de tamaño fijo microcópico variando su densidad o cantidad por unidad de superficie", "Una trama de puntos ordenados en filas y columnas", "El rayado manual de la forma"],
    correct: 0,
    explanation: "Elimina los ángulos de trama tradicionales anulando completamente el peligro de moiré.",
    source: "Manual Artes Gráficas 1 (Pág. 26)"
  },
  {
    theme: 1,
    question: "¿Qué ventaja principal ofrece la Trama Estocástica (FM) respecto a la Trama Convencional (AM)?",
    options: ["Ausencia de patrón de choque (moiré), transiciones más suaves y mayor detalle fotográfico", "Consume el triple de tinta en la imprenta", "No requiere lavado en la máquina"],
    correct: 0,
    explanation: "Al no tener ángulos rígidos de alineación de puntos, evita las rosas y patrones de interferencia de color.",
    source: "Manual Artes Gráficas 1 (Pág. 26)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Trama Convencional' o de Amplitud Modulada (AM)?",
    options: ["Un sistema que mantiene fija la distancia entre puntos cambiando únicamente el tamaño o diámetro de los puntos", "Una trama que cambia de color según la temperatura", "El tejido de las mantas de caucho"],
    correct: 0,
    explanation: "Es el tramado tradicional con frecuencias de línea (lpi) y ángulos definidos a 15°, 45°, 75° y 90°/105°.",
    source: "Manual Artes Gráficas 1 (Pág. 26)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Trama Híbrida' (XM)?",
    options: ["Una combinación que usa trama AM en los tonos medios y trama FM estocástica en las luces y sombras profundas", "Un tramado impreso con dos tintas a la vez", "La trama usada en periódicos exclusivamente"],
    correct: 0,
    explanation: "Aprovecha la estabilidad del AM en tonos medios y la definición del FM en sombras y altas luces.",
    source: "Manual Artes Gráficas 1 (Pág. 26)"
  },
  {
    theme: 1,
    question: "¿Qué ángulo de trama se le asigna habitualmente al color Amarillo (Yellow) en cuatricromía convencional?",
    options: ["0 grados (ó 90°), por ser el color menos perceptible a la vista y de menor contraste", "45 grados", "75 grados"],
    correct: 0,
    explanation: "Se sitúa en el ángulo de mayor visibilidad del choque (0°/90°) debido a que el ojo apenas percibe el patrón en amarillo.",
    source: "Manual Artes Gráficas 1 (Pág. 27)"
  },
  {
    theme: 1,
    question: "¿Qué ángulo de trama se asigna típicamente al color Cian (Cyan) en un trabajo estándar?",
    options: ["15 grados (ó 105°)", "45 grados", "0 grados"],
    correct: 0,
    explanation: "Mantiene la separación de 30° obligatoria respecto al Magenta (75°) y al Negro (45°).",
    source: "Manual Artes Gráficas 1 (Pág. 27)"
  },
  {
    theme: 1,
    question: "¿Qué ángulo de trama se asigna típicamente al color Magenta en cuatricromía?",
    options: ["75 grados", "45 grados", "0 grados"],
    correct: 0,
    explanation: "Se ubica a 30° del Negro (45°) y 30° del Cian (105°/15°) completando el tríptico visual de alta densidad.",
    source: "Manual Artes Gráficas 1 (Pág. 27)"
  },
  {
    theme: 1,
    question: "¿Qué efecto visual no deseado conocido como 'Roseta' se forma por la superposición de los 4 colores tramados?",
    options: ["La estructura circular limpia producida por el cruce correcto de las 4 tramas alineadas a sus ángulos correspondientes", "Una mancha de grasa en el papel", "Un fallo de la guillotina al refilar"],
    correct: 0,
    explanation: "La roseta (abierta o cerrada) es la geometría normal y armónica de la cuatricromía correcta.",
    source: "Manual Artes Gráficas 1 (Pág. 28)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre una 'Roseta Abierta' y una 'Roseta Cerrada' en el examen de trama?",
    options: ["La roseta abierta presenta el centro sin punto (claro) y la cerrada tiene un punto de trama en el mismo centro", "La roseta abierta se imprime con tintas al agua y la cerrada con aceite", "No existe diferencia práctica"],
    correct: 0,
    explanation: "Depende del desfase de fase entre los puntos, afectando ligeramente a la ganancia de punto visual.",
    source: "Manual Artes Gráficas 1 (Pág. 28)"
  },
  {
    theme: 1,
    question: "¿Qué causa la aparición del fenómeno defectuoso 'Moiré' (Muaré)?",
    options: ["La interferencia o choque óptico entre dos o más tramas mal orientadas o con ángulos menores de 30° de diferencia", "Falta de aire en la mesa de la guillotina", "Presión insuficiente del pisón"],
    correct: 0,
    explanation: "Genera una retícula ondulatoria molesta de gran tamaño visible en la imagen impresa.",
    source: "Manual Artes Gráficas 1 (Pág. 28)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Borde de Agarre de Pinza' en el pliego de impresión?",
    options: ["La franja en blanco (usualmente de 8 a 12 mm) en el borde de ataque del pliego donde las pinzas mecánicas sujetan el papel", "El margen del lomo de encuadernación", "El corte que hace la guillotina al final"],
    correct: 0,
    explanation: "En este espacio no se puede imprimir imagen porque está tapado por las pinzas de arrastre del cilindro.",
    source: "Manual Artes Gráficas 1 (Pág. 29)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el 'Escuadre Lateral' o Guía de Costado en la máquina de imprimir?",
    options: ["Empujar o tirar suavemente del pliego en el marcador antes de entrar a las pinzas para fijar la posición transversal", "Cortar el desperdicio del papel", "Secar la tinta con aire caliente"],
    correct: 0,
    explanation: "Asegura que cada hoja entre exactamente en la misma cota lateral para lograr el registro entre pasadas.",
    source: "Manual Artes Gráficas 1 (Pág. 29)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'Lados de Registro' de un pliego impreso que deben respetarse al llegar a la guillotina?",
    options: ["La pinza (guía frontal) y el costado (guía lateral) que apoyaron en los topes mecánicos durante la impresión", "Los cuatro bordes cortados al azar", "La esquina superior derecha exclusivamente"],
    correct: 0,
    explanation: "Alinear estos dos lados exactos contra la escuadra de la guillotina garantiza que los cortes coincidan con la impresión.",
    source: "Manual Guillotinero y Artes Gráficas 1 (Pág. 29)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Montaje de Imposición' digital?",
    options: ["La colocación ordenada de las páginas individuales en un formato de pliego mayor optimizando la plancha y el plegado", "El clavado de la plancha al cilindro con martillo", "El empaquetado de las resmas"],
    correct: 0,
    explanation: "El software de imposición (ej. Preps, Signa Station) automatiza esta colocación geométrica.",
    source: "Manual Artes Gráficas 1 (Pág. 30)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Alineación a la Cabeza' en un montaje editorial?",
    options: ["Colocar las páginas de un pliego tomando como línea base de referencia común el margen superior (cabeza)", "Alinear las páginas por el lomo", "Cortar primero el pie del libro"],
    correct: 0,
    explanation: "Garantiza que la cornisa y el área de texto queden a la misma altura en todas las hojas del libro.",
    source: "Manual Artes Gráficas 1 (Pág. 30)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Trap' o 'Atrapado de Color' (Trapping) en preimpresión?",
    options: ["El solapamiento microscópico entre bordes de colores adyacentes para evitar que aparezcan rendijas blancas por descuadres de registro", "La trampa para ratones del almacén", "La captura de archivos en la red"],
    correct: 0,
    explanation: "Agranda ligeramente el color más claro para que monte sobre el oscuro absorbiendo pequeñas desviaciones mecánicas.",
    source: "Manual Artes Gráficas 1 (Pág. 31)"
  },
  {
    theme: 1,
    question: "En la técnica de Trapping, ¿cuál es la regla básica sobre qué color expande sobre cuál?",
    options: ["El color más claro expande o 'invade' sobre el borde del color más oscuro", "El color negro siempre se contrae", "El color oscuro expande sobre el claro"],
    correct: 0,
    explanation: "Debido a que el ojo percibe la silueta trazada por el color oscuro, expandir el color claro no altera la forma visual del objeto.",
    source: "Manual Artes Gráficas 1 (Pág. 31)"
  },
  {
    theme: 1,
    question: "¿Qué significa la propiedad 'Sobreimpresión' (Overprint) asignada a un objeto de texto negro?",
    options: ["Imprimir la tinta negra directamente sobre el fondo sin calar ni vaciar el color que está debajo", "Imprimir el texto dos veces seguidas para que quede grueso", "Escribir con rotulador sobre el papel"],
    correct: 0,
    explanation: "Evita cualquier falla de registro que deje bordes blancos rodeando a la tipografía fina.",
    source: "Manual Artes Gráficas 1 (Pág. 32)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre si se asigna 'Calado' (Knockout) a un texto de cuerpo 6 en color negro sobre fondo cian?",
    options: ["Cualquier imperfección de registro de décimas de mm dejará un cerco blanco desalineado muy visible alrededor del texto", "El texto se imprime más rápido", "El papel se rompe al imprimir"],
    correct: 0,
    explanation: "El texto pequeño en negro debe llevar siempre sobreimpresión para evitar calar el fondo.",
    source: "Manual Artes Gráficas 1 (Pág. 32)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Negro Enriquecido' o Negro Compuesto en imprenta?",
    options: ["Un color negro obtenido mezclando un 100% de Negro con un porcentaje de cobertura de los otros colores (ej. 60% C, 40% M, 40% Y)", "Pintura con purpurina brillante", "Negro con barniz de sobreimpresión"],
    correct: 0,
    explanation: "Aporta profundidad y densidad visual a masas grandes de negro, impidiendo que queden grisáceas.",
    source: "Manual Artes Gráficas 1 (Pág. 33)"
  },
  {
    theme: 1,
    question: "¿Por qué no debe usarse Negro Enriquecido (4 colores al 100%) en textos pequeños de lectura?",
    options: ["Porque provoca sobrecarga de tinta (TAC excesivo) y falta de registro en caracteres finos", "Porque el texto se vuelve invisible", "Porque gasta el papel"],
    correct: 0,
    explanation: "Imprimir 4 colores superpuestos en líneas finas produce borrones si hay el menor desajuste de registro.",
    source: "Manual Artes Gráficas 1 (Pág. 33)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'TAC' (Total Area Coverage) o Cobertura Máxima de Tinta?",
    options: ["La suma máxima porcentual de las 4 tintas CMYK en la zona más oscura del diseño (ej. 300% para papel estucado)", "El tiempo de secado de la máquina", "La capacidad del tintero"],
    correct: 0,
    explanation: "Un TAC excesivo (ej. mayor a 320%) empapa el papel impidiendo el secado y provocando repinte severo.",
    source: "Manual Artes Gráficas 1 (Pág. 33)"
  },
  {
    theme: 1,
    question: "¿Qué límite típico de TAC se recomienda para la impresión en papel Prensa / Periódico?",
    options: ["Alrededor del 220% al 240% debido a la alta porosidad y bajo gramaje del soporte", "400%", "100%"],
    correct: 0,
    explanation: "El papel prensa es muy poroso y fino; si se supera el 240% de tinta acumulada la hoja se rompe o traspasa.",
    source: "Manual Artes Gráficas 1 (Pág. 33)"
  },
  {
    theme: 1,
    question: "¿En qué consiste la técnica de sustitución de color 'GCR' (Gray Component Replacement)?",
    options: ["Reemplazar la parte de tono neutro de las tres tintas (C, M, Y) por una cantidad equivalente de tinta Negra (K)", "Eliminar todos los colores y dejar solo grises", "Imprimir con tinta plata"],
    correct: 0,
    explanation: "Estabiliza el equilibrio de grises en máquina, reduce el consumo de tintas cromáticas caras y disminuye el TAC.",
    source: "Manual Artes Gráficas 1 (Pág. 34)"
  },
  {
    theme: 1,
    question: "¿En qué consiste la técnica de separación 'UCR' (Under Color Removal)?",
    options: ["Reducir los porcentajes de Cian, Magenta y Amarillo exclusivamente en las zonas de sombra profunda reemplazándolos por Negro", "Quitar el color de fondo de las imágenes", "Limpiar los rodillos del tintero"],
    correct: 0,
    explanation: "A diferencia del GCR (que actúa en toda la gama), el UCR actúa de forma específica en las sombras para limitar el TAC.",
    source: "Manual Artes Gráficas 1 (Pág. 34)"
  },
  {
    theme: 1,
    question: "¿Qué representa la especificación de color 'Pantone Matching System' (PMS)?",
    options: ["Un sistema estandarizado internacional de formulación de tintas directas o planas con catálogos codificados", "Un programa de retoque fotográfico", "Una marca de guillotinas automáticas"],
    correct: 0,
    explanation: "Permite seleccionar un color corporativo exacto de una guía y reproducirlo con la misma fórmula de mezcla.",
    source: "Manual Artes Gráficas 1 (Pág. 35)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia práctica existe entre una guía Pantone 'Coated' (C) y una 'Uncoated' (U)?",
    options: ["'Coated' muestra el aspecto de la tinta sobre papel Estucado y 'Uncoated' sobre papel Offset no estucado", "Coated es para cartón y Uncoated para plástico", "Coated se imprime con agua y Uncoated con aceite"],
    correct: 0,
    explanation: "La misma tinta formulada presenta una luminosidad y tono diferente según la absorción del papel.",
    source: "Manual Artes Gráficas 1 (Pág. 35)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Tinta Directa' o Color Plano frente a un color de Cuatricromía?",
    options: ["Una tinta especial premezclada físicamente en el tintero para imprimir un tono único con una sola plancha", "Una tinta que se seca en 1 segundo", "Un rotulador de retoque"],
    correct: 0,
    explanation: "Asegura la fidelidad exacta de colores corporativos o tonos imposibles de reproducir en CMYK (ej. metalizados, fluorescentes).",
    source: "Manual Artes Gráficas 1 (Pág. 35)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Densitómetro de Reflexión'?",
    options: ["Un instrumento óptico de medición que determina la opacidad o densidad óptica de la capa de tinta depositada sobre el papel", "Un medidor de humedad del suelo", "Un termómetro para el aceite de la guillotina"],
    correct: 0,
    explanation: "Mide la cantidad de luz absorbida por la película de tinta para controlar la aportación de tinta en máquina.",
    source: "Manual Artes Gráficas 1 (Pág. 36)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia fundamental existe entre un Densitómetro y un Espectrofotómetro?",
    options: ["El densitómetro mide espesor de capa/absorción de luz; el espectrofotómetro mide la composición espectral completa (valores Lab/XYZ)", "El densitómetro usa baterías y el espectrofotómetro funciona a manivela", "Son el mismo aparato con distinto nombre"],
    correct: 0,
    explanation: "El espectrofotómetro mide el color real absoluto de la muestra analizando todas las longitudes de onda del espectro visible.",
    source: "Manual Artes Gráficas 1 (Pág. 36)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Espacio de Color CIE L*a*b*'?",
    options: ["Un modelo tridimensional de color independiente del dispositivo basado en la percepción visual humana de la luz y los opuestos de color", "Un espacio de color exclusivo de cámaras de fotos", "El software de la guillotina POLAR"],
    correct: 0,
    explanation: "Sirve de puente universal (profile connection space) para traducir colores entre monitores, escáneres e imprentas.",
    source: "Manual Artes Gráficas 1 (Pág. 37)"
  },
  {
    theme: 1,
    question: "In el espacio CIE L*a*b*, ¿qué representa el eje 'L*'?",
    options: ["La Luminosidad de la muestra (desde 0 = Negro absoluto hasta 100 = Blanco puro)", "El canal de color Rojo a Verde", "El canal de color Azul a Amarillo"],
    correct: 0,
    explanation: "Define la claridad o dimensión acromática del color.",
    source: "Manual Artes Gráficas 1 (Pág. 37)"
  },
  {
    theme: 1,
    question: "En el espacio CIE L*a*b*, ¿qué coordenadas definen las variables 'a*' y 'b*'?",
    options: ["'a*' define el eje Rojo (+a) a Verde (-a); 'b*' define el eje Amarillo (+b) a Azul (-b)", "'a*' mide el precio y 'b*' el gramaje", "'a*' es la tinta cyan y 'b*' la tinta magenta"],
    correct: 0,
    explanation: "Son las dos dimensiones cromáticas opuestas de la teoría de la visión cromática.",
    source: "Manual Artes Gráficas 1 (Pág. 37)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Gamut' o Gama Cromática de un dispositivo?",
    options: ["El abanico o volumen total de colores que un dispositivo (monitor, impresora, papel) es capaz de reproducir", "La velocidad de disparo del láser", "La cantidad de memoria RAM"],
    correct: 0,
    explanation: "El gamut del monitor (RGB) es mucho más amplio que el gamut imprimible de una prensa offset (CMYK).",
    source: "Manual Artes Gráficas 1 (Pág. 38)"
  },
  {
    theme: 1,
    question: "Cuando un color de pantalla se marca como 'Fuera de Gamut' para imprenta, ¿qué significa?",
    options: ["Que el color no se puede reproducir físicamente con la mezcla de tintas CMYK sobre ese papel específico", "Que el archivo está dañado", "Que la guillotina cortará con desviación"],
    correct: 0,
    explanation: "El sistema de gestión de color deberá convertirlo al color imprimible más cercano posible.",
    source: "Manual Artes Gráficas 1 (Pág. 38)"
  },

    {
    theme: 2,
    question: "¿Cuál es el componente químico principal que forma las paredes celulares de la madera utilizada para pasta de papel?",
    options: ["Celulosa", "Almidón", "Sintéticos plásticos"],
    correct: 0,
    explanation: "La celulosa es un polímero natural de glucosa que aporta la estructura fibrosa del papel.",
    source: "Manual Artes Gráficas 1 (Pág. 40)"
  },
  {
    theme: 2,
    question: "¿Qué sustancia orgánica natural actúa como 'cemento' uniendo las fibras de celulosa en la madera y debe eliminarse para obtener papel de alta calidad?",
    options: ["Lignina", "Caolín", "Resina colofonia"],
    correct: 0,
    explanation: "La lignina produce el amarilleamiento y la degradación ácida del papel cuando se expone a la luz.",
    source: "Manual Artes Gráficas 1 (Pág. 40)"
  },
  {
    theme: 2,
    question: "¿Qué diferencia principal existe entre la 'Pasta Mecánica' y la 'Pasta Química' (Proceso Kraft)?",
    options: ["La pasta mecánica tritura la madera conservando la lignina; la pasta química disuelve la lignina produciendo fibras puras y resistentes", "La pasta mecánica no usa agua y la química usa solo alcohol", "Son exactamente iguales"],
    correct: 0,
    explanation: "La pasta química (Kraft) logra papeles de gran longevidad y alta resistencia mecánica al conservar las fibras intactas.",
    source: "Manual Artes Gráficas 1 (Pág. 41)"
  },
  {
    theme: 2,
    question: "¿Por qué el papel de periódico fabricado con Pasta Mecánica se vuelve amarillo rápidamente con el tiempo?",
    options: ["Por la oxidación de la lignina residual retenida en las fibras al reaccionar con la luz y el oxígeno", "Por el tipo de tinta negra empleada", "Por el paso de los rodillos de la guillotina"],
    correct: 0,
    explanation: "Al conservar la lignina de la madera, esta se degrada fotoquímicamente virando al tono pardo/amarillo.",
    source: "Manual Artes Gráficas 1 (Pág. 41)"
  },
  {
    theme: 2,
    question: "¿Qué se entiende por 'Pasta Reciclada' o Fibras Secundarias?",
    options: ["La pasta papelera obtenida a partir de la recuperación y destintado de papeles ya utilizados", "Pasta obtenida de maderas marinas", "Fibras de plástico sintético"],
    correct: 0,
    explanation: "Requiere operaciones de desintegración, depuración y destintado (deinking) para reutilizar la fibra.",
    source: "Manual Artes Gráficas 1 (Pág. 42)"
  },
  {
    theme: 2,
    question: "¿Cuántas veces como máximo se puede reciclar teóricamente una misma fibra de celulosa antes de que sea demasiado corta e inútil?",
    options: ["Entre 5 y 7 veces", "Infinitas veces sin límite", "Solo 1 vez"],
    correct: 0,
    explanation: "En cada ciclo de reciclado la fibra se fractura y acorta, perdiendo propiedades mecánicas y capacidad de enlace.",
    source: "Manual Artes Gráficas 1 (Pág. 42)"
  },
  {
    theme: 2,
    question: "¿Qué función cumplen las 'Cargas Minerales' (ej. Caolín, Carbonato Cálcico, Talco) añadidas a la masa de papel?",
    options: ["Rellenar los huecos entre fibras para aumentar la opacidad, la blancura y la lisura del papel", "Pegar las hojas a la guillotina", "Dar elasticidad de goma"],
    correct: 0,
    explanation: "Las cargas minerales mejoran la imprimibilidad y opacidad, aunque reducen la resistencia al rasgado.",
    source: "Manual Artes Gráficas 1 (Pág. 43)"
  },
  {
    theme: 2,
    question: "¿Qué es el proceso de 'Encolado en Masa' en la fabricación del papel?",
    options: ["Añadir productos hidrófobos (resinas, AKD) a la suspensión de fibras para evitar que el papel absorba la tinta como un secante", "Pegar los pliegos entre sí", "Engrasar las mesas de trabajo"],
    correct: 0,
    explanation: "Regula la permeabilidad al agua y líquidos, permitiendo la definición del trazo de tinta.",
    source: "Manual Artes Gráficas 1 (Pág. 43)"
  },
  {
    theme: 2,
    question: "¿Qué diferencia existe entre un encolado ácido (con resina y sulfato de alúmina) y un encolado neutro/alcalino?",
    options: ["El encolado neutro/alcalino genera papeles permanentes de gran longevidad que no se acidifican ni destruyen con los años", "El encolado ácido huele a flores", "El encolado alcalino se deshace con el agua"],
    correct: 0,
    explanation: "Los papeles libres de ácido (Acid Free) certificados cumplen la norma ISO 9706 para conservación documental.",
    source: "Manual Artes Gráficas 1 (Pág. 44)"
  },
  {
    theme: 2,
    question: "¿Qué función cumplen los 'Blanqueantes Ópticos' (OBA) añadidos a la pasta papelera?",
    options: ["Absorber la luz radiación ultravioleta invisible y reemitirla como luz azul visible aumentando la sensación visual de blancura", "Pintar la hoja con barniz blanco", "Aumentar la dureza de la cuchilla"],
    correct: 0,
    explanation: "Compensan la tendencia amarillenta de la fibra reemitiendo fluorescencia azulada.",
    source: "Manual Artes Gráficas 1 (Pág. 44)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Mesa de Fabricación' o Tela Fourdrinier en la máquina continua de papel?",
    options: ["Una malla tamiz sin fin en movimiento continuo donde se vierte la suspensión acuosa de fibras (99% agua) para formar la hoja", "La mesa de aire de la guillotina", "La encuadernadora de tapa dura"],
    correct: 0,
    explanation: "En la tela Fourdrinier se produce el escurrido del agua y el entrelazado inicial de las fibras celulósicas.",
    source: "Manual Artes Gráficas 1 (Pág. 45)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Rodillo Dandy' o Rodillo Egutador en la máquina continua de papel?",
    options: ["Un rodillo de malla que compacta la cara superior de la hoja húmeda igualando las caras y pudiendo marcar Marcas de Agua", "El rodillo que corta la tira sobrante", "El ventilador del motor"],
    correct: 0,
    explanation: "Elimina marcas de la tela y aplica marcas al agua o filigranas de seguridad por presión suave.",
    source: "Manual Artes Gráficas 1 (Pág. 45)"
  },
  {
    theme: 2,
    question: "¿En qué consiste la 'Sección de Prensas' de la máquina de papel?",
    options: ["Pasar la hoja continua entre rodillos de gran presión cubiertos de fieltro para extraer mecánicamente el exceso de agua", "Cortar las resmas a tamaño A4", "Empaquetar los palés"],
    correct: 0,
    explanation: "Eleva la sequedad de la hoja hasta aproximadamente un 40-45% antes de entrar a la sección de secadores térmicos.",
    source: "Manual Artes Gráficas 1 (Pág. 46)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Sección de Secado' o Sequería en la fabricación del papel?",
    options: ["Un conjunto de cilindros de hierro calentados internamente por vapor de agua sobre los que pasa el papel para evaporar la humedad", "Un túnel de lámparas UV", "Un ventilador gigante industrial"],
    correct: 0,
    explanation: "Reduce la humedad residual de la hoja hasta el valor de equilibrio comercial (5-7%).",
    source: "Manual Artes Gráficas 1 (Pág. 46)"
  },
  {
    theme: 2,
    question: "¿En qué consiste la operación de 'Satinado' o Calandrado del papel?",
    options: ["Friccionar y presionar la hoja seca haciéndola pasar entre rodillos alternados de acero y fibra para darle lisura y brillo", "Lijar la cara posterior con papel de lija", "Lavar la hoja con detergente"],
    correct: 0,
    explanation: "La calandra comprime el espesor y alisa los relieves de la superficie del papel.",
    source: "Manual Artes Gráficas 1 (Pág. 47)"
  },
  {
    theme: 2,
    question: "¿Qué diferencia existe entre un papel 'Verjurado' y un papel 'Liso'?",
    options: ["El verjurado presenta rayas o filigranas transversales y longitudinales visibles al trasluz heredadas de la forma del molde tradicional", "El verjurado está plastificado", "El verjurado es de color negro"],
    correct: 0,
    explanation: "Las 'verjuraduras' y 'corondeles' son marcas históricas dejadas por los hilos metálicos del molde papelero.",
    source: "Manual Artes Gráficas 1 (Pág. 48)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Registro' o Papel Sello?",
    options: ["Papel no estucado de alta calidad, fuerte encolado y durabilidad diseñado para documentos oficiales y escritura", "El papel de los tickets de la compra", "Papel de envolver embutidos"],
    correct: 0,
    explanation: "Fabricado para resistir el paso del tiempo, borrados mecánicos y tintas de pluma.",
    source: "Manual Artes Gráficas 1 (Pág. 48)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Pergamino Vegetal' o Papel Sulfurizado?",
    options: ["Un papel impermeable a la grasa y al agua obtenido pasando una hoja de celulosa por un baño de ácido sulfúrico concentrado", "Papel fabricado con piel de ternero", "Papel sintético fotográfico"],
    correct: 0,
    explanation: "El ácido gelifica la celulosa cerrando totalmente los poros y haciéndolo traslúcido y resistente a grasas.",
    source: "Manual Artes Gráficas 1 (Pág. 49)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Autocopiativo' Químico?",
    options: ["Papel recubierto de microcápsulas de reactivo de color que estallan bajo la presión de la escritura transcribiendo a la copia", "Papel que se fotocopia solo", "Papel de calcar de grafito negro antiguo"],
    correct: 0,
    explanation: "Formado por hojas CB (Coated Back), CFB (Coated Front and Back) y CF (Coated Front) para juegos de albaranes.",
    source: "Manual Artes Gráficas 1 (Pág. 49)"
  },
  {
    theme: 2,
    question: "En un juego de papel autocopiativo de 3 hojas, ¿qué siglas identifican a la hoja intermedia?",
    options: ["CFB (Coated Front and Back)", "CB (Coated Back)", "CF (Coated Front)"],
    correct: 0,
    explanation: "Recibe la reacción en su cara superior (CF) y transmite a la siguiente por su cara inferior (CB).",
    source: "Manual Artes Gráficas 1 (Pág. 49)"
  },
  {
    theme: 2,
    question: "En un juego autocopiativo, ¿qué siglas identifican a la primera hoja (original)?",
    options: ["CB (Coated Back)", "CF (Coated Front)", "CFB (Coated Front and Back)"],
    correct: 0,
    explanation: "Lleva las microcápsulas en su cara posterior (Coated Back) para transmitir la presión hacia abajo.",
    source: "Manual Artes Gráficas 1 (Pág. 49)"
  },
  {
    theme: 2,
    question: "En un juego autocopiativo, ¿qué siglas corresponden a la última hoja del paquete?",
    options: ["CF (Coated Front)", "CB (Coated Back)", "CFB"],
    correct: 0,
    explanation: "Lleva el reactivo de color en su cara frontal (Coated Front) para fijar la imagen final.",
    source: "Manual Artes Gráficas 1 (Pág. 49)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Porosidad' Bekk o Gurley del papel?",
    options: ["La medida de la capacidad del papel para dejar pasar el aire a través de su estructura de fibras bajo presión", "La cantidad de polvo acumulado", "La resistencia al sol"],
    correct: 0,
    explanation: "Determina la penetración y secado por absorción de las tintas de impresión.",
    source: "Manual Artes Gráficas 1 (Pág. 50)"
  },
  {
    theme: 2,
    question: "¿Qué representa el ensayo de 'Opacidad' en el papel?",
    options: ["El porcentaje de luz reflejada por una hoja que impide que las imágenes impresas en el reverso se transparenten", "El grado de brillo del satinado", "El grosor de la resma"],
    correct: 0,
    explanation: "Una alta opacidad (cercana al 100%) es imprescindible para la impresión a dos caras sin visión del reverso.",
    source: "Manual Artes Gráficas 1 (Pág. 50)"
  },
  {
    theme: 2,
    question: "¿Qué mide la prueba 'Mullen' o de Resistencia a la Explosión en cartones y papeles?",
    options: ["La presión hidráulica en kilopascales (kPa) que soporta una probeta circular de papel antes de romperse", "La velocidad de corte de la guillotina", "El peso del palé"],
    correct: 0,
    explanation: "Evalúa la tenacidad estructural del material frente a empaquetado y manipulación brusca.",
    source: "Manual Artes Gráficas 1 (Pág. 51)"
  },
  {
    theme: 2,
    question: "¿Qué mide el ensayo de 'Satinado / Lisura Bekk'?",
    options: ["El tiempo en segundos que tarda un volumen de aire en escaparse entre la superficie del papel y un cristal plano", "La fuerza del pisón hidráulico", "El contenido de celulosa"],
    correct: 0,
    explanation: "A mayor tiempo en segundos Bekk, más lisa y plana es la cara del papel.",
    source: "Manual Artes Gráficas 1 (Pág. 51)"
  },
  {
    theme: 2,
    question: "¿Qué es el ensayo 'Dennison' de Resistencia del Encolado Superficial (Ceras Dennison)?",
    options: ["Utilizar ceras numeradas de adherencia creciente para determinar si la tinta arrancará la superficie del papel (arrancado)", "Medir la temperatura del papel", "Limpiar la cuchilla con cera"],
    correct: 0,
    explanation: "Evalúa si la cohesión superficial del papel soportará el 'tiro' o tiro viscoso de la tinta en máquina.",
    source: "Manual Artes Gráficas 1 (Pág. 52)"
  },
  {
    theme: 2,
    question: "¿Qué ocurre cuando una tinta de alto tiro actúa sobre un papel con baja resistencia al 'Arrancado'?",
    options: ["La tinta arranca fragmentos de fibra o estuco de la superficie del papel ensuciando la plancha y arruinando el trabajo", "El papel se vuelve transparente", "La guillotina se detiene"],
    correct: 0,
    explanation: "El defecto de 'arrancado' (picking) obliga a reducir el tiro de la tinta o cambiar de lote de papel.",
    source: "Manual Artes Gráficas 1 (Pág. 52)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Grado de Blancura ISO' de un papel?",
    options: ["El factor de reflectancia azul medido a una longitud de onda de 457 nm respecto a un patrón estándar", "El porcentaje de dióxido de titanio", "El brillo de la lámpara de la guillotina"],
    correct: 0,
    explanation: "Define el nivel de blancura científica del papel sin influencias de tinte térmico.",
    source: "Manual Artes Gráficas 1 (Pág. 53)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Luminosidad' (Brillo Tappi) del papel?",
    options: ["La reflectancia total del papel en la región visible del espectro comparada con una superficie ideal de óxido de magnesio", "La cantidad de luz que emite en la oscuridad", "El reflejo del cristal de la mesa"],
    correct: 0,
    explanation: "Determina el contraste óptico realizable entre el papel blanco y las tintas oscuras.",
    source: "Manual Artes Gráficas 1 (Pág. 53)"
  },
  {
    theme: 2,
    question: "¿Qué diferencia existe entre 'Cara Tela' y 'Cara Fieltro' en un papel de fabricación tradicional?",
    options: ["La cara tela tocó la red Fourdrinier (más lisa de cargas); la cara fieltro es la superior (más rica en fibra y lisa)", "La cara tela es de plástico y la cara fieltro de lana", "Son idénticas en máquinas modernas de doble tela"],
    correct: 0,
    explanation: "Las máquinas monocilíndricas presentan cierta 'asimetría de caras' por la pérdida de finos en la cara tela.",
    source: "Manual Artes Gráficas 1 (Pág. 54)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Formador de Doble Tela' (Gap Former) en las máquinas de papel modernas?",
    options: ["Un sistema que inyecta la pasta entre dos telas filtrantes drenando el agua por ambos lados a la vez y eliminando la asimetría de caras", "Un cuchillo de dos filos", "Una encuadernadora doble"],
    correct: 0,
    explanation: "Produce papeles perfectamente simétricos con idéntica estructura en ambas caras de la hoja.",
    source: "Manual Artes Gráficas 1 (Pág. 54)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Higrómetro de Espada' usado en el almacén de papel?",
    options: ["Una sonda con forma de baqueta que se clava en el interior del palé para medir la humedad y temperatura interna del paquete", "Una cuchilla para cortar muestras de papel", "Un calibrador de grosor de la cuchilla"],
    correct: 0,
    explanation: "Permite comprobar si el papel está aclimatado a la humedad ambiente del taller antes de desembalarlo.",
    source: "Manual Artes Gráficas 1 (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Por qué es obligatorio dejar 'Aclimatar' los paquetes de papel desembalados en el taller durante 24 horas?",
    options: ["Para equilibrar su temperatura y humedad con el ambiente del taller evitando que los bordes se ondulen o abomben", "Para que la tinta se adhiera mejor", "Para que los sopladores de la guillotina no hagan ruido"],
    correct: 0,
    explanation: "Si el papel está frío al abrir la envoltura plástica, la humedad ambiente se condensa en los bordes deformando el paquete.",
    source: "Manual Artes Gráficas 1 (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Qué fenómeno defectuoso en el pliego se conoce como 'Bordes Abombados' o en forma de ola?",
    options: ["La dilatación de las orillas del paquete al absorber humedad ambiente mientras el centro permanece seco", "Un fallo en el motor del pisón", "Corte con cuchilla mellada"],
    correct: 0,
    explanation: "Impide que el pliego asiente plano contra la escuadra y la regla trasera de la guillotina.",
    source: "Manual Artes Gráficas 1 (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Qué fenómeno defectuoso se conoce como 'Centro Encapotado' o abombamiento central del paquete?",
    options: ["La contracción de los bordes del paquete al ceder humedad a un ambiente de taller muy seco", "El pegado de las hojas con cola", "Un exceso de aire en las toberas"],
    correct: 0,
    explanation: "Ocurre cuando el papel está más húmedo que el taller; los cantos se secan y encogen mientras el centro mantiene la cota.",
    source: "Manual Artes Gráficas 1 (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Cuál es la Humedad Relativa (HR) ambiental ideal en el taller de imprenta y guillotinas?",
    options: ["Entre el 50% y el 55% de HR a una temperatura de 20-22 °C", "90% de HR", "10% de HR"],
    correct: 0,
    explanation: "Garantiza la estabilidad dimensional de la celulosa y evita la formación de electricidad estática.",
    source: "Manual Artes Gráficas 1 (Pág. 56)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Sintético' (ej. Yupo, Tyvek)?",
    options: ["Un soporte fabricado con resinas plásticas (polipropileno, polietileno) de alta resistencia al agua y al rasgado sin fibras vegetales", "Papel de madera pintado", "Papel vegetal sulfurizado"],
    correct: 0,
    explanation: "No se deforma con el agua y requiere tintas especiales de secado por oxidación o UV.",
    source: "Manual Artes Gráficas 1 (Pág. 57)"
  },
  {
    theme: 2,
    question: "¿Qué precaución exige el guillotinado de Papeles Sintéticos o láminas de Polipropileno?",
    options: ["Usar una cuchilla de gran afilado (preferiblemente de metal duro) y ajustar el pisón para evitar el deslizamiento por compresión", "Cortar sin pisón", "Bañar la mesa en agua"],
    correct: 0,
    explanation: "Las láminas plásticas son extremadamente resbaladizas y ofrecen resistencia elástica al corte.",
    source: "Manual Artes Gráficas 1 (Pág. 57)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Cartoncillo Estucado / Folding' (GC1, GC2)?",
    options: ["Un soporte multicapa compuesto por caras de pasta química y centro de pasta mecánica usado para estuches y envases", "Un papel de fumar fino", "Cartón de embalaje ondulado pesado"],
    correct: 0,
    explanation: "Aporta rigidez flexional y excelente superficie impresa para el troquelado de cajas de farmacia o alimentación.",
    source: "Manual Artes Gráficas 1 (Pág. 58)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Cartón Gris' o Cartón Paja?",
    options: ["Un soporte rígido y denso fabricado al 100% con papel recuperado sin blanquear usado para almas de tapas duras (cartoné)", "Papel para envolver bocadillos", "Cartulina para tarjetas de visita"],
    correct: 0,
    explanation: "Constituye la estructura interior rígida de las cubiertas de libros, carpetas y puzles.",
    source: "Manual Artes Gráficas 1 (Pág. 58)"
  },
  {
    theme: 2,
    question: "¿Qué precaución exige el corte de Cartón Gris de 2 o 3 mm de espesor en la guillotina?",
    options: ["Verificar que el filo de la cuchilla no presente mellas y aplicar una presión alta del pisón para evitar la expulsión del bloque", "Usar la cuchilla menos afilada del taller", "Desconectar la barrera de luz"],
    correct: 0,
    explanation: "El cartón gris denso ejerce una fuerza de repulsión gigantesca contra el bisel durante la penetración.",
    source: "Manual Artes Gráficas 1 (Pág. 58)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Cartón Ondulado' (Canal Micro, Single, Doble)?",
    options: ["Un soporte formado por la unión de hojas planas (liners) y una o varias hojas onduladas (fluting) de alta amortiguación", "Papel doblado a mano con forma de acordeón", "Cartón gris lijado"],
    correct: 0,
    explanation: "Se clasifica según la altura y paso de la onda (Canal E/Micro, Canal B, Canal C, Canal BC).",
    source: "Manual Artes Gráficas 1 (Pág. 59)"
  },
  {
    theme: 2,
    question: "¿Por qué NO se debe guillotinar Cartón Ondulado grueso en una guillotina de cuchilla lineal convencional?",
    options: ["Porque la presión del pisón hidráulico aplasta y destruye de forma irreversible las ondas internas (fluting) perdiendo la rigidez", "Porque se incendia el papel", "Porque la escuadra no avanza"],
    correct: 0,
    explanation: "El cartón ondulado debe procesarse en troqueladoras o mesas de corte digital sin pisón continuo.",
    source: "Manual Artes Gráficas 1 (Pág. 59)"
  },
  {
    theme: 2,
    question: "¿Qué representa la especificación 'Sello FSC' o 'PEFC' en un paquete de papel?",
    options: ["La certificación oficial de que la madera empleada procede de bosques gestionados de forma sostenible y responsable", "La garantía de que el papel no se rompe", "La marca de la máquina guillotina"],
    correct: 0,
    explanation: "Garantiza la trazabilidad ecológica de la cadena de custodia desde el bosque hasta la imprenta.",
    source: "Manual Artes Gráficas 1 (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Gramaje Comercial' nominal frente al gramaje real?",
    options: ["El gramaje indicado en la etiqueta del fabricante aceptando tolerancias de fabricación (generalmente ± 4-5%)", "El peso del camión de transporte", "El gramaje con la tinta ya seca"],
    correct: 0,
    explanation: "Las normas ISO admiten pequeñas variaciones de masa por metro cuadrado en el proceso de producción industrial.",
    source: "Manual Artes Gráficas 1 (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Qué representa el 'Módulo de Elasticidad' (Young) en la física del papel?",
    options: ["La rigidez del papel o su resistencia a la deformación cuando se somete a una tensión de tracción", "La velocidad de absorción del agua", "El grado de transparencia"],
    correct: 0,
    explanation: "Un papel con alto módulo de elasticidad se mantiene firme durante el paso por los cilindros impresores.",
    source: "Manual Artes Gráficas 1 (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Resistencia al Rasgado' (Ensayo Elmendorf)?",
    options: ["La fuerza necesaria para continuar el rasgado de una probeta de papel partiendo de un corte previo inicial", "La resistencia al impacto del pisón", "La fuerza necesaria para doblar la hoja"],
    correct: 0,
    explanation: "Es mucho mayor en sentido transversal a la fibra que en sentido paralelo a la fibra.",
    source: "Manual Artes Gráficas 1 (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Por qué el papel es más fácil de rasgar a favor de la dirección de fibra?",
    options: ["Porque la grieta avanza separando las fibras longitudinalmente sin necesidad de romper su estructura interna", "Porque a favor de fibra el papel es más grueso", "Porque hay más pegamento"],
    correct: 0,
    explanation: "El rasgado paralelo solo exige vencer los enlaces de puente de hidrógeno entre caras de fibras.",
    source: "Manual Artes Gráficas 1 (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Resistencia al Plegado / Doble Pliegue' (Schopper / MIT)?",
    options: ["El número de dobles pliegues alternados a 180° que soporta una tira de papel bajo tensión antes de romperse", "La cantidad de páginas de un cuaderno", "El peso de la plegadora"],
    correct: 0,
    explanation: "Ensayo clave para papeles de billetes de banco, planos y libros de consulta frecuente.",
    source: "Manual Artes Gráficas 1 (Pág. 62)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Cobb Test' (Valor Cobb)?",
    options: ["La cantidad de agua en gramos adsorbida por un metro cuadrado de papel durante un tiempo determinado (ej. Cobb 60)", "La resistencia al corte de la cuchilla", "El tiempo de bajada del pisón"],
    correct: 0,
    explanation: "Evalúa la eficacia del encolado frente a la absorción de líquidos.",
    source: "Manual Artes Gráficas 1 (Pág. 62)"
  },
  {
    theme: 2,
    question: "Si un papel presenta un Valor Cobb muy Bajo (ej. Cobb 15), ¿cómo se comportará con la tinta?",
    options: ["Es altamente hidrófobo y la tinta tardará mucho en secar por fijación capilar pudiendo repintar", "Absorberá la tinta en un segundo", "Se arrugará al contacto con la luz"],
    correct: 0,
    explanation: "Un papel demasiado impermeable impide la penetración inicial del vehículo de la tinta.",
    source: "Manual Artes Gráficas 1 (Pág. 62)"
  },
  {
    theme: 2,
    question: "Si un papel presenta un Valor Cobb muy Alto (ej. Cobb 60), ¿qué problema puede dar en la imprenta offset?",
    options: ["Absorberá agua de mojado en exceso perdiendo rigidez, dilatándose de bordes y descalibrando el registro", "Se quemará la plancha", "No se puede cortar en la guillotina"],
    correct: 0,
    explanation: "La falta de encolado adecuado causa inestabilidad dimensional severa al contacto con la solución fuente.",
    source: "Manual Artes Gráficas 1 (Pág. 62)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Carga de Rotura a la Tracción' del papel?",
    options: ["La fuerza máxima por unidad de ancho que soporta una tira de papel tensionada antes de la fractura", "El peso máximo que puede llevar la transpaleta", "La presión de la bomba hidráulica"],
    correct: 0,
    explanation: "Parámetro crítico para el papel en bobinas que alimenta a las rotativas de alta velocidad.",
    source: "Manual Artes Gráficas 1 (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Longitud de Rotura' expresada en metros o kilómetros?",
    options: ["La longitud teórica de una tira de papel fijada por un extremo que se rompería por su propio peso", "La longitud de la bobina de papel", "La distancia entre la imprenta y la papelera"],
    correct: 0,
    explanation: "Unifica la comparación de resistencia a la tracción de papeles de distintos gramajes.",
    source: "Manual Artes Gráficas 1 (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Por qué la Resistencia a la Tracción es mayor en la Dirección de Fibra (sentido máquina) que en Sentido Transversal?",
    options: ["Porque la mayoría de las fibras están orientadas longitudinalmente soportando directamente el esfuerzo del estiramiento", "Porque a favor de fibra el papel tiene más carga mineral", "Porque el papel es más ancho"],
    correct: 0,
    explanation: "Las fibras alineadas trabajan como cabos de una cuerda al aplicar tracción paralela a su eje.",
    source: "Manual Artes Gráficas 1 (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Alargamiento a la Rotura'?",
    options: ["El porcentaje de estiramiento que sufre el papel desde su estado de reposo hasta el instante de su fractura", "El tamaño de la viruta cortada por la guillotina", "El aumento de temperatura del motor"],
    correct: 0,
    explanation: "Mide la elasticidad y capacidad de deformación del soporte bajo tensión.",
    source: "Manual Artes Gráficas 1 (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Qué representa el ensayo de 'Compresibilidad' del papel?",
    options: ["La reducción porcentual de grosor que experimenta la hoja cuando se le aplica una fuerza de prensado vertical", "La resistencia al agua del papel", "El volumen de la resma"],
    correct: 0,
    explanation: "Un papel muy compresible amortigua el impacto del cilindro impresor y compensa pequeñas irregularidades.",
    source: "Manual Artes Gráficas 1 (Pág. 64)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Recuperación Elástica' tras la compresión?",
    options: ["La capacidad del papel de volver a su grosor original tras liberar la carga del pisón o del cilindro impresor", "La fuerza de los mueles de la guillotina", "El rebote del pedal"],
    correct: 0,
    explanation: "Determina si el papel quedará marcado permanentemente tras sufrir el prensado.",
    source: "Manual Artes Gráficas 1 (Pág. 64)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Polvillo de Papel' o Desprendimiento de Cargas?",
    options: ["La liberación de micropartículas de fibra y carga mineral durante el paso del papel por la máquina o la guillotina", "El polvo del suelo del taller", "El humo de la bomba hidráulica"],
    correct: 0,
    explanation: "El polvillo ensucia las mantas de caucho offset, obtura toberas de aire y bloquea fotocélulas de seguridad.",
    source: "Manual Artes Gráficas 1 (Pág. 65)"
  },
  {
    theme: 2,
    question: "¿Cómo influye un corte con Cuchilla Desafilada en la producción de polvillo de papel?",
    options: ["Multiplica la generación de polvillo al desmenuzar y machacar el borde en lugar de cizallarlo limpiamente", "Elimina el polvillo por completo", "No tiene relación con el polvillo"],
    correct: 0,
    explanation: "Un filo romo machaca las fibras y hace saltar la carga mineral del estucado en forma de nube de polvo.",
    source: "Manual Artes Gráficas 1 (Pág. 65)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Biblia' o Papel Cintas?",
    options: ["Un papel de muy bajo gramaje (25-40 g/m²), alta opacidad y gran resistencia usado en obras de gran volumen de páginas", "Papel de periódico de color amarillo", "Cartulina para diplomas"],
    correct: 0,
    explanation: "Requiere cargas minerales de alto rendimiento (ej. dióxido de titanio) para mantener la opacidad con espesores mínimos.",
    source: "Manual Artes Gráficas 1 (Pág. 66)"
  },
  {
    theme: 2,
    question: "¿Qué precaución de guillotina exige el Papel Biblia de 30 g/m²?",
    options: ["Evacuar el aire suavemente, usar la chapa del pisón y aplicar presiones reducidas para evitar arrugas y deslizamientos", "Poner la presión hidráulica a 4000 kp", "Cortar con el colchón de aire encendido al máximo"],
    correct: 0,
    explanation: "La extrema finura del papel lo hace muy susceptible a doblarse o deslizarse bajo el bisel.",
    source: "Manual Artes Gráficas 1 (Pág. 66)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Kraft' o Papel de Embalar?",
    options: ["Un papel de gran resistencia mecánica fabricado con pasta química sin blanquear al sulfato usado para sacos y embalajes", "Papel satinado de lujo", "Papel de calco"],
    correct: 0,
    explanation: "Su alta longitud de fibra le otorga máxima tenacidad al rasgado y a la tracción.",
    source: "Manual Artes Gráficas 1 (Pág. 66)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Papel Tisú' o Papel Sanitario?",
    options: ["Un papel de muy bajo gramaje, ahuecado y crepado de gran capacidad de absorción de líquidos", "Cartulina de cubierta", "Papel de fumar"],
    correct: 0,
    explanation: "No se procesa en guillotinas estándar de imprenta sino en rebobinadoras cortadoras de disco.",
    source: "Manual Artes Gráficas 1 (Pág. 67)"
  },
  {
    theme: 2,
    question: "¿Qué representa la 'Formación de la Hoja' o Mirada del papel al trasluz?",
    options: ["La homogeneidad o distribución uniforme de las fibras al observar el pliego a contraluz (mirada nubes o mirada pareja)", "El color de la superficie", "El olor del papel"],
    correct: 0,
    explanation: "Una 'buena mirada' pareja indica que las fibras están repartidas sin aglomeraciones ni calvas.",
    source: "Manual Artes Gráficas 1 (Pág. 67)"
  },
  {
    theme: 2,
    question: "¿Qué problema genera una 'Mala Mirada' (formación nubosa e irregular) durante la impresión?",
    options: ["Impresión irregular por variaciones locales de absorción de tinta y densidad de cobertura", "La guillotina rompe la regleta", "El pisón no puede bajar"],
    correct: 0,
    explanation: "Las zonas con grumos de fibra absorben distinto que las zonas pobres creando sombras indeseadas.",
    source: "Manual Artes Gráficas 1 (Pág. 67)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'PH del Papel' y cómo se mide su extracto acuoso?",
    options: ["La concentración de iones de hidrógeno indicando si el papel es Ácido (pH < 7), Neutro (pH = 7) o Alcalino (pH > 7)", "La cantidad de humedad contenida", "El espesor del paquete"],
    correct: 0,
    explanation: "Papeles con pH menor a 5 retrasan drásticamente el secado por oxidación de las tintas offset convencional.",
    source: "Manual Artes Gráficas 1 (Pág. 68)"
  },
  {
    theme: 2,
    question: "¿Qué es una 'Resma Comercial' estándar en el mercado papelero español?",
    options: ["Un paquete cerrado que contiene exactamente 500 pliegos del formato especificado", "1000 pliegos", "250 pliegos"],
    correct: 0,
    explanation: "Unidad tradicional de empaquetado para distribución en imprenta.",
    source: "Manual Artes Gráficas 1 (Pág. 68)"
  },
  {
    theme: 2,
    question: "¿Qué es un 'Bulto' o Paquete de Cartulina?",
    options: ["El envoltorio que agrupa un número determinado de pliegos de cartulina (ej. 100 o 250 según gramaje)", "El palé completo de madera", "La viruta caida a la papelera"],
    correct: 0,
    explanation: "Unidad comercial de empaquetado para materiales de alto gramaje.",
    source: "Manual Artes Gráficas 1 (Pág. 68)"
  },

  
  {
    theme: 3,
    question: "¿Cuál es el valor exacto en milímetros de un 'Punto Didot'?",
    options: ["0,376 mm", "0,351 mm", "0,500 mm"],
    correct: 0,
    explanation: "Base de la tipografía tradicional europea creada por François-Ambroise Didot en 1770.",
    source: "Manual Artes Gráficas 1 (Pág. 70)"
  },
  {
    theme: 3,
    question: "¿Cuál es el valor exacto en milímetros de un 'Punto de Pica' (sistema Fournier/Angloamericano)?",
    options: ["0,351 mm (0,01383 pulgadas)", "0,376 mm", "0,250 mm"],
    correct: 0,
    explanation: "Estándar adoptado por el software informático de autoedición (DTP).",
    source: "Manual Artes Gráficas 1 (Pág. 70)"
  },
  {
    theme: 3,
    question: "¿A cuántos Puntos de Pica equivale exactamente 1 pulgada (25,4 mm)?",
    options: ["72 puntos de pica por pulgada", "100 puntos", "12 puntos"],
    correct: 0,
    explanation: "Es la conversión exacta empleada en programas como Indesign, Illustrator y PostScript.",
    source: "Manual Artes Gráficas 1 (Pág. 70)"
  },
  {
    theme: 3,
    question: "¿A cuántas Picas equivale una pulgada?",
    options: ["6 Picas (1 Pica = 12 Puntos x 6 = 72 Puntos = 1 pulgada)", "10 Picas", "12 Picas"],
    correct: 0,
    explanation: "Unidad tipográfica angular equivalente a 12 puntos de pica (4,212 mm).",
    source: "Manual Artes Gráficas 1 (Pág. 70)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Cuerpo Tipográfico' o Tamaño de la Fuente?",
    options: ["La distancia vertical total medida desde la parte superior del rasgo ascendente hasta el fondo del rasgo descendente más el hombro", "El ancho de la letra 'M'", "El peso en gramos del tipo metálico"],
    correct: 0,
    explanation: "Incluye la altura total del tipo de plomo tradicional de ojo a ojo.",
    source: "Manual Artes Gráficas 1 (Pág. 71)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Altura de X' (x-height) de un estilo tipográfico?",
    options: ["La altura de las letras minúsculas sin rasgos ascendentes ni descendentes (como la 'x', 'a', 'e')", "La altura de los números", "El grosor del trazo principal"],
    correct: 0,
    explanation: "Determina la legibilidad visual y el rendimiento óptico del texto a tamaños pequeños.",
    source: "Manual Artes Gráficas 1 (Pág. 71)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Interlineado' (Leading) en la composición de textos?",
    options: ["La distancia vertical entre las líneas de base de dos renglones consecutivos de texto", "El espacio entre palabras", "El margen del lomo"],
    correct: 0,
    explanation: "En la tipografía manual se lograba insertando regletas de plomo (leads) entre líneas.",
    source: "Manual Artes Gráficas 1 (Pág. 72)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Intertraje' o Espaciado entre Caracteres (Tracking)?",
    options: ["El ajuste proporcional uniforme del espacio entre todas las letras de una palabra o bloque de texto", "El cambio de tipo de letra", "El corte diagonal de las esquinas"],
    correct: 0,
    explanation: "Permite abrir o cerrar la densidad visual de un párrafo completo.",
    source: "Manual Artes Gráficas 1 (Pág. 72)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Kerning' o Intercalado Óptico proporcional?",
    options: ["El ajuste selectivo del espacio entre dos caracteres específicos para compensar huecos visuales (ej. en pares como 'AV', 'Wa')", "El borrado del texto", "El cambio de tamaño del título"],
    correct: 0,
    explanation: "Elimina espacios vacíos antiestéticos entre letras con aristas inclinadas o voladas.",
    source: "Manual Artes Gráficas 1 (Pág. 72)"
  },
  {
    theme: 3,
    question: "¿Qué diferencia existe entre un tipo de letra 'Serif' (Romana) y 'Sans Serif' (Palo Seco)?",
    options: ["Serif tiene remates o adorno terminales en los extremos de los trazos; Sans Serif tiene trazos limpios de grosor uniforme", "Serif es de color negro y Sans Serif es de color azul", "Sans Serif sólo se usa en libros antiguos"],
    correct: 0,
    explanation: "Las fuentes Serif (como Times) guían la vista en la lectura continua de libros impresos; Sans Serif (Helvética) destaca en carteles y pantallas.",
    source: "Manual Artes Gráficas 1 (Pág. 73)"
  },
  {
    theme: 3,
    question: "¿Qué es una fuente de tipo 'Egipcia' o Mecana (Slab Serif)?",
    options: ["Una tipografía con remates rectangulares gruesos y pesados del mismo grosor que el trazo principal", "Letras que simulan jeroglíficos antiguos", "Letras escritas con pincel fluido"],
    correct: 0,
    explanation: "Surgió en la revolución industrial para cartelería y titulares de gran impacto visual.",
    source: "Manual Artes Gráficas 1 (Pág. 73)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Justificación Completa' (Justificado a ambos lados) de un párrafo?",
    options: ["Alinear simultáneamente las palabras a los márgenes izquierdo y derecho ajustando los espacios intervocálicos", "Centrar las frases", "Alinear todas las frases a la izquierda"],
    correct: 0,
    explanation: "Es la maquetación clásica de periódicos y novelas.",
    source: "Manual Artes Gráficas 1 (Pág. 74)"
  },
  {
    theme: 3,
    question: "¿Qué es una 'Línea Huérfana' en maquetación editorial?",
    options: ["La primera línea de un párrafo que queda aislada al final de una página o columna", "Una línea sin texto", "Una línea escrita en idioma extranjero"],
    correct: 0,
    explanation: "Se considera un defecto de maquetación que debe corregirse redistribuyendo el texto.",
    source: "Manual Artes Gráficas 1 (Pág. 74)"
  },
  {
    theme: 3,
    question: "¿Qué es una 'Línea Viuda' en maquetación editorial?",
    options: ["La última línea de un párrafo que queda sola en el encabezado de la página o columna siguiente", "Una línea corta con una sola palabra", "La portada de un libro"],
    correct: 0,
    explanation: "Regla clásica tipográfica: no se deben dejar viudas ni huérfanas en las tripas del libro.",
    source: "Manual Artes Gráficas 1 (Pág. 74)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Proporción Áurea' (Número Phi φ = 1,618) aplicada al diseño de la caja de texto?",
    options: ["Una relación geométrica estética armónica clásica usada para determinar las proporciones de página y márgenes", "El número de pliegos de una resma", "El cálculo del precio del trabajo"],
    correct: 0,
    explanation: "Utilizada por impresores clásicos (como la Canon de Van de Graaf) para ubicar la masa de texto de forma armónica.",
    source: "Manual Artes Gráficas 1 (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Caja de Texto' o Mancha en una página maquetada?",
    options: ["El área rectangular de la página delimitada por los márgenes donde se aloja el contenido principal de texto e imágenes", "El cajón de desperdicios de la guillotina", "El marco de madera del palé"],
    correct: 0,
    explanation: "Define el formato interior de lectura rodeado por los cuatro márgenes (cabeza, pie, lomo, corte).",
    source: "Manual Artes Gráficas 1 (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Margen de Cabeza'?",
    options: ["El espacio en blanco entre el límite superior de la caja de texto y el borde superior cortado del papel", "El margen del lomo", "El sangrado inferior"],
    correct: 0,
    explanation: "Alberga habitualmente el título corriente y la paginación superior.",
    source: "Manual Artes Gráficas 1 (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Margen de Pie' o Falda de la página?",
    options: ["El margen en blanco entre el fondo de la caja de texto y el corte inferior de la página (usualmente el más amplio)", "El margen del lomo", "El borde de agarre de pinzas"],
    correct: 0,
    explanation: "Tradicionalmente es el margen de mayor altura para dar asentamiento visual a la página.",
    source: "Manual Artes Gráficas 1 (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Margen de Corte' o Margen Exterior?",
    options: ["El margen comprendido entre la caja de texto y el borde exterior lateral que será refilado por la guillotina", "El margen del lomo", "El fondo del tintero"],
    correct: 0,
    explanation: "Debe incluir el sangrado seguro para evitar cortar texto al refilar.",
    source: "Manual Artes Gráficas 1 (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Tono Continuo' en una fotografía original?",
    options: ["Una imagen formada por gradaciones infinitas de tono suave sin estructura de puntos (ej. una diapositiva o negativo)", "Una imagen de blanco y negro puro sin grises", "Una trama de puntos de imprenta"],
    correct: 0,
    explanation: "Las imprentas no pueden imprimir tonos continuos directos, obligando a transformar la foto en trama de semitonos.",
    source: "Manual Artes Gráficas 1 (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿En qué consiste la conversión de Tono Continuo a 'Semitono' (Halftone)?",
    options: ["Transformar la escala de grises o colores en una retícula de puntos de mayor o menor tamaño sobre fondo blanco", "Digitalizar en formato MP3", "Pintar la foto con óleo"],
    correct: 0,
    explanation: "Engaña al ojo humano creando la ilusión óptica de tonos grises según el tamaño del punto impreso.",
    source: "Manual Artes Gráficas 1 (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Qué es una Imagen de 'Línea' o Mapa de Bits (Bitmap 1-bit)?",
    options: ["Una imagen digital compuesta exclusivamente por píxeles negros puros o blancos puros sin escala de grises", "Una fotografía en color CMYK", "Un dibujo en 3D"],
    correct: 0,
    explanation: "Utilizada para digitalizar pluma, firmas o textos con alta resolución (1200 ppp).",
    source: "Manual Artes Gráficas 1 (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Qué resolución se exige para escanear o generar imágenes de Línea / Pluma de alta definición?",
    options: ["Entre 800 ppp y 1200 ppp a tamaño real de reproducción", "72 ppp", "150 ppp"],
    correct: 0,
    explanation: "Al no tener trama de puntos, requiere máxima densidad de píxeles para no mostrar bordes serruchados (aliasing).",
    source: "Manual Artes Gráficas 1 (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Aliasing' o Dientes de Sierra en una imagen digital?",
    options: ["El pixelado escalonado visible en los contornos curvos cuando la resolución de la imagen es insuficiente", "La vibración de la guillotina", "Un error del tintero"],
    correct: 0,
    explanation: "Se elimina aplicando algoritmos de suavizado (Anti-aliasing) o elevando la resolución del mapa de bits.",
    source: "Manual Artes Gráficas 1 (Pág. 77)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Profundidad de Color' expresada en Bits por Píxel (bpp)?",
    options: ["El número de bits utilizados para almacenar la información de color de cada píxel en una imagen digital", "El grosor de la plancha CTP", "El número de rodillos de la máquina"],
    correct: 0,
    explanation: "1 bit = 2 colores; 8 bits grises = 256 niveles; 24 bits RGB = 16,7 millones de colores.",
    source: "Manual Artes Gráficas 1 (Pág. 77)"
  },
  {
    theme: 3,
    question: "¿Cuántos tonos de gris distintos puede almacenar una imagen en escala de grises de 8 Bits?",
    options: ["256 niveles de gris (desde el 0 = Negro al 255 = Blanco)", "2 niveles", "16,7 millones de niveles"],
    correct: 0,
    explanation: "2 elevado a la octava potencia (2^8 = 256).",
    source: "Manual Artes Gráficas 1 (Pág. 77)"
  },
  {
    theme: 3,
    question: "¿Cuántos colores teóricos contiene una imagen digital en espacio RGB de 24 Bits (8 bits por canal)?",
    options: ["16.777.216 colores (256 x 256 x 256)", "65.000 colores", "1000 colores"],
    correct: 0,
    explanation: "Es la profundidad cromática de 'Color Verdadero' (True Color).",
    source: "Manual Artes Gráficas 1 (Pág. 77)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Histograma' de una imagen digital en software de edición fotográfica?",
    options: ["Un gráfico de barras que representa la distribución estadística de píxeles en cada nivel de luminosidad desde sombras a luces", "El mapa de navegación del taller", "El historial de revisiones del cliente"],
    correct: 0,
    explanation: "Permite diagnosticar al instante si una foto está expuesta correctamente, subexpuesta o sobreexpuesta.",
    source: "Manual Artes Gráficas 1 (Pág. 78)"
  },
  {
    theme: 3,
    question: "Si el Histograma de una imagen muestra todas las barras amontonadas en el extremo izquierdo, ¿qué significa?",
    options: ["La imagen está subexpuesta (oscura), perdiendo detalle en las sombras", "La imagen está sobreexpuesta (quemada)", "La imagen es puramente blanca"],
    correct: 0,
    explanation: "El extremo izquierdo representa el valor 0 (Negro), indicando una predominancia de tonos oscuros.",
    source: "Manual Artes Gráficas 1 (Pág. 78)"
  },
  {
    theme: 3,
    question: "Si el Histograma se acumula de forma aplastada en el extremo derecho (valor 255), ¿qué diagnóstico ofrece?",
    options: ["La imagen está sobreexpuesta (quemada), perdiendo detalle en las altas luces", "La imagen es en escala de grises suave", "La foto está desenfocada"],
    correct: 0,
    explanation: "El valor 255 indica blanco puro sin información de textura ni detalle.",
    source: "Manual Artes Gráficas 1 (Pág. 78)"
  },
  {
    theme: 3,
    question: "¿En qué consiste la técnica de retoque 'Ajuste de Niveles' o Punto Blanco / Punto Negro?",
    options: ["Fijar los límites de altas luces y sombras profundas para aprovechar todo el rango dinámico sin quemar ni cegar la imagen", "Pintar la foto con pincel de acuarela", "Cambiar la resolución de ppp"],
    correct: 0,
    explanation: "Asegura que el punto más claro tenga un porcentaje mínimo de trama imprimible (ej. 3-5%) y el más oscuro el límite correcto.",
    source: "Manual Artes Gráficas 1 (Pág. 79)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Máscara de Enfoque' (Unsharp Mask) aplicada antes de separar color?",
    options: ["Un filtro digital que acentúa el contraste en los bordes de los objetos para compensar el suavizado del proceso de tramado", "Una plantilla de papel para tapar la foto", "Un modo de vista previa"],
    correct: 0,
    explanation: "Devuelve nitidez y acutancia visual a las imágenes digitalizadas.",
    source: "Manual Artes Gráficas 1 (Pág. 79)"
  },
  {
    theme: 3,
    question: "¿Qué es el formato de archivo 'RAW' de una cámara fotográfica digital?",
    options: ["El archivo con los datos 'crudos' puros capturados directamente por el sensor sin procesado ni compresión destructiva", "Un archivo listo para imprimir en offset", "Un PDF para guillotina"],
    correct: 0,
    explanation: "Mantiene la máxima latitud de exposición para los ajustes de laboratorio digital en preimpresión.",
    source: "Manual Artes Gráficas 1 (Pág. 80)"
  },
  {
    theme: 3,
    question: "¿Qué ventaja tiene guardar imágenes en formato 'EPS' (Encapsulated PostScript) vectorial?",
    options: ["Permite escalar gráficos, tipografías y trazados a cualquier tamaño sin perder nitidez ni pixelarse jamás", "Ocupa siempre menos de 1 KB", "Se puede abrir sin ordenador"],
    correct: 0,
    explanation: "Al basarse en fórmulas matemáticas en lugar de píxeles, la resolución es infinita.",
    source: "Manual Artes Gráficas 1 (Pág. 80)"
  },
  {
    theme: 3,
    question: "¿Qué es la compresión de archivo 'Con Pérdida' (Lossy) como el formato JPEG?",
    options: ["Un algoritmo que elimina datos invisibles o redundantes para reducir drásticamente el tamaño del archivo degradando la calidad si se comprime en exceso", "Un algoritmo que duplica la resolución", "Una técnica para guardar fuentes"],
    correct: 0,
    explanation: "No se recomienda usar JPEG con alta compresión en preimpresión por la generación de artefactos de bloque.",
    source: "Manual Artes Gráficas 1 (Pág. 81)"
  },
  {
    theme: 3,
    question: "¿Qué es la compresión de archivo 'Sin Pérdida' (Lossless) como la compresión LZW en formato TIFF?",
    options: ["Un método de compresión matemática que reduce el peso del archivo sin alterar ni eliminar un solo píxel de la imagen original", "Un formato de compresión para audio", "Un virus informático"],
    correct: 0,
    explanation: "Permite comprimir y descomprimir un archivo mil veces manteniendo la fidelidad absoluta de datos.",
    source: "Manual Artes Gráficas 1 (Pág. 81)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Espacio de Color sRGB' frente a 'Adobe RGB (1998)'?",
    options: ["sRGB es un espacio estrecho diseñado para monitores domésticos e internet; Adobe RGB es más amplio y abarca mejor los colores imprimibles CMYK", "sRGB es para guillotinas y Adobe RGB para plegadoras", "sRGB contiene sólo grises"],
    correct: 0,
    explanation: "Las cámaras de trabajo profesional deben configurarse en Adobe RGB para capturar la máxima gama cromática imprimible.",
    source: "Manual Artes Gráficas 1 (Pág. 82)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Intención de Rendimiento' (Rendering Intent) Perceptual en la conversión de perfiles ICC?",
    options: ["Reescalar toda la gama de colores proporcionalmente para mantener las relaciones visuales entre ellos aunque cambien los valores", "Eliminar todos los colores que no caben", "Convertir la imagen a blanco y negro"],
    correct: 0,
    explanation: "Es la opción preferida para imágenes fotográficas porque preserva el aspecto natural de la escena.",
    source: "Manual Artes Gráficas 1 (Pág. 82)"
  },
  {
    theme: 3,
    question: "¿Qué es la Intención de Rendimiento 'Colorimétrico Relativo'?",
    options: ["Mapear exactamente los colores que están dentro del gamut y ajustar el punto blanco del soporte, desplazando los colores fuera de gamut al límite", "Pintar los bordes de color verde", "Invertir la imagen"],
    correct: 0,
    explanation: "Muy usada en diseño gráfico y colores corporativos cuando se desea precisión en tonos que ya caben en la gama.",
    source: "Manual Artes Gráficas 1 (Pág. 82)"
  },
  {
    theme: 3,
    question: "¿Qué es la Intención de Rendimiento 'Colorimétrico Absoluto'?",
    options: ["Mantener los colores idénticos simulando incluso el tono del papel origen imprimiéndolo como un tinte sobre el papel destino", "Convertir el archivo a PDF", "Aumentar la ganancia de punto"],
    correct: 0,
    explanation: "Se usa casi en exclusiva en Pruebas de Color Certificadas para simular el papel final en la prueba.",
    source: "Manual Artes Gráficas 1 (Pág. 82)"
  },
  {
    theme: 3,
    question: "¿Qué representa la especificación 'CMM' (Color Management Module) en el sistema operativo?",
    options: ["El motor de software que realiza los cálculos matemáticos de conversión de color entre diferentes perfiles ICC", "La memoria del escáner", "El microprocesador de la guillotina"],
    correct: 0,
    explanation: "Motores como Adobe ACE o LittleCMS se encargan de transformar coordenadas RGB a CMYK usando los perfiles.",
    source: "Manual Artes Gráficas 1 (Pág. 83)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Caracterización de un Dispositivo' (Profiling)?",
    options: ["Medir mediante espectrofotómetro una carta de parches de color (ej. IT8.7/2 o ECI 2002) impresa o mostrada para construir su perfil ICC", "Instalar el sistema operativo", "Limpiar los filtros de la máquina"],
    correct: 0,
    explanation: "Genera la 'huella digital' precisa del comportamiento cromático de ese equipo en ese momento.",
    source: "Manual Artes Gráficas 1 (Pág. 83)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Calibración de un Monitor' con colorímetro / espectrofotómetro de araña?",
    options: ["Ajustar el punto blanco (ej. 6500 K - D65), el valor Gamma (ej. 2.2) y la luminancia (ej. 120 cd/m²) a valores estándar antes de hacer el perfil", "Limpiar la pantalla con un trapo", "Aumentar el contraste al 100%"],
    correct: 0,
    explanation: "Paso previo indispensable para que el perfil de color creado sea válido y estable.",
    source: "Manual Artes Gráficas 1 (Pág. 84)"
  },
  {
    theme: 3,
    question: "¿Qué representa la 'Temperatura de Color' expresada en Kelvin (K) de una iluminante de inspección gráfica?",
    options: ["La tonalidad cromática de la fuente de luz, siendo D50 (5000 Kelvin) la norma estándar para artes gráficas", "La temperatura del tubo de ensayo", "El calor del motor"],
    correct: 0,
    explanation: "La norma ISO 3664 exige iluminación estandarizada a 5000 K (D50) en mesas de control y pruebas de color.",
    source: "Manual Artes Gráficas 1 (Pág. 84)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Metamerismo' de las tintas de impresión?",
    options: ["El fenómeno por el cual dos muestras de color parecen idénticas bajo un tipo de luz (ej. D50) pero se ven totalmente distintas bajo otra luz (ej. luz cálida de tungsteno)", "La evaporación del solvente", "El secado de la tinta en el tintero"],
    correct: 0,
    explanation: "Ocurre cuando las formulaciones de pigmentos son distintas aunque igualen la muestra bajo una luz específica.",
    source: "Manual Artes Gráficas 1 (Pág. 85)"
  },
  {
    theme: 3,
    question: "¿Qué representa el 'Índice de Reproducción Cromática' (CRI / Ra) de los tubos fluorescentes o luminarias LED de inspección?",
    options: ["La capacidad de una fuente de luz para revelar los colores reales comparada con la luz solar natural, exigiendo un CRI > 95 en imprenta", "La potencia en vatios de la bombilla", "El consumo de corriente de la lámpara"],
    correct: 0,
    explanation: "Un CRI bajo falsea la percepción visual de las muestras haciendo imposible el visto bueno de color.",
    source: "Manual Artes Gráficas 1 (Pág. 85)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cabina de Inspección Aprobada' (Cabina de Luz Just Normlicht / GTI)?",
    options: ["Un recinto cerrado provisto de iluminación neutra D50 y paredes pintadas en gris neutro mate (Munsell N7) para evaluar impresos sin contaminación cromática", "Una mesa de madera barnizada", "Una caja de cartón sin luz"],
    correct: 0,
    explanation: "Aísla la muestra de luces parásitas y reflexiones de paredes de colores del taller.",
    source: "Manual Artes Gráficas 1 (Pág. 85)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Gris Neutro Munsell N7' exigido en las paredes de las zonas de control de color?",
    options: ["Una pintura gris especial mate absolutamente neutra que no refleja tonos de ningún color sobre la prueba de control", "Una pintura blanca brillante", "Un esmalte negro brillante"],
    correct: 0,
    explanation: "Evita que la reflexión de paredes de colores vado o altere la percepción de las pruebas de color.",
    source: "Manual Artes Gráficas 1 (Pág. 85)"
  },
  {
    theme: 3,
    question: "¿Qué representa la norma internacional 'ISO 12647' en la industria gráfica?",
    options: ["El conjunto de estándares técnicos que regulan el control de procesos de fabricación de impresos en offset, flexografía, gravado y digital", "La norma de seguridad en el trabajo", "El código de transporte de resmas"],
    correct: 0,
    explanation: "Define las tolerancias permitidas en densidades, ganancia de punto, coordenadas CIELAB y color del papel.",
    source: "Manual Artes Gráficas 1 (Pág. 86)"
  },
  {
    theme: 3,
    question: "En la norma ISO 12647-2 para Offset, ¿cuál es el incremento objetivo de trama (ganancia de punto) en el tono medio (50%) para papel Tipo 1 (Estucado)?",
    options: ["Alrededor del 14% al 16% (dando un valor impreso objetivo del 64-66%)", "50% de ganancia", "0% de ganancia"],
    correct: 0,
    explanation: "Es la curva A de ganancia de punto estandarizada en las condiciones de impresión offset modernas.",
    source: "Manual Artes Gráficas 1 (Pág. 86)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Característica del Pliego' o Escala de Gris para equilibrar tinteros?",
    options: ["Una fila de parches de tonos neutros colocados transversalmente a lo largo del pliego para ajustar las llaves de zona del tintero", "El ancho de la barra de corte", "La firma del maquinista"],
    correct: 0,
    explanation: "Permite al densitómetro o espectrofotómetro de barrido regular automáticamente las zonas de aportación de tinta.",
    source: "Manual Artes Gráficas 1 (Pág. 87)"
  },
  {
    theme: 3,
    question: "¿Qué representa la tecnología 'CIP3 / PPF' (Print Production Format) en la preimpresión?",
    options: ["Un formato de datos que transmite los perfiles de entintado generados en el RIP directamente a la consola de la máquina de imprimir y las cotas a la guillotina", "Un archivo de texto comercial", "Una conexión telefónica"],
    correct: 0,
    explanation: "Elimina el ajuste manual a ojo de las llaves del tintero, abriéndolas automáticamente según la densidad del diseño.",
    source: "Manual Artes Gráficas 1 (Pág. 88)"
  },
  {
    theme: 3,
    question: "¿Qué representa la evolución 'JDF' (Job Definition Format) basada en XML?",
    options: ["El estándar universal para la integración total del flujo de trabajo, uniendo administración (MIS), preimpresión, impresión y postimpresión", "Un formato de gráficos para juegos", "Una marca de papel"],
    correct: 0,
    explanation: "Permite que la orden de trabajo configure de forma totalmente automática todas las máquinas de la planta gráfica.",
    source: "Manual Artes Gráficas 1 (Pág. 88)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Pliego de Ajuste' o Pliego de Puesta a Punto?",
    options: ["Los primeros pliegos pasados por máquina durante la entonación para ajustar registro y balance agua-tinta antes de iniciar el tiraje útil", "El pliego roto al final del paquete", "El papel de regalo"],
    correct: 0,
    explanation: "Se contabilizan dentro de la maculatura prevista en la Hoja de Lanzamiento.",
    source: "Manual Artes Gráficas 1 (Pág. 89)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Contraste Relativo de Impresión' (K) medido con densitómetro?",
    options: ["Un parámetro numérico que indica la capacidad de la prensa para reproducir detalle en las sombras sin que se cierren los fondos", "El contraste del monitor", "La velocidad de bajada de la cuchilla"],
    correct: 0,
    explanation: "Se calcula mediante la fórmula K = (Dsombras - D75%) / Dsombras, evaluando la nitidez de la impresión.",
    source: "Manual Artes Gráficas 1 (Pág. 89)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Atrapado de Tinta' (Ink Trapping) en húmedo sobre húmedo en máquinas multicolor?",
    options: ["La capacidad porcentual de una segunda tinta húmeda de adherirse sobre la capa de tinta anterior que aún está húmeda en el papel", "El secado por calor", "La trampa de grasa del lavadero"],
    correct: 0,
    explanation: "Un mal trapping causa que el segundo color no monte correctamente sobre el primero reduciendo la gama de color resultante.",
    source: "Manual Artes Gráficas 1 (Pág. 90)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Emulsificación de la Tinta' en la impresión Offset?",
    options: ["La mezcla o dispersión de la solución de mojado dentro de la masa de tinta provocada por el batido de los rodillos", "El secado de la tinta en la plancha", "La disolución del papel"],
    correct: 0,
    explanation: "Un nivel de emulsión controlado (15-20% de agua en tinta) es necesario para el offset, pero un exceso destruye el tiro y causa ráfagas.",
    source: "Manual Artes Gráficas 1 (Pág. 90)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Velado / Ensuciamiento' (Scumming) de la plancha offset?",
    options: ["El defecto por el cual las zonas no impresoras de la plancha aceptan tinta debido a una solución de mojado insuficiente o grasa en la superficie", "El rayado de la guillotina", "El secado en la bandeja"],
    correct: 0,
    explanation: "Provoca que los fondos blancos del papel se impriman con un velo o tinte continuo indeseado.",
    source: "Manual Artes Gráficas 1 (Pág. 91)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Desnudado de Rodillos' (Roller Stripping)?",
    options: ["El fenómeno por el cual los rodillos distribuidores de tinta se vuelven hidrófilos y rechazan la tinta acumulando agua", "El cambio de goma de los rodillos", "La limpieza diaria con disolvente"],
    correct: 0,
    explanation: "Ocurre cuando la solución fuente despoja de la capa oleófila a los rodillos metálicos, impidiendo el paso de tinta.",
    source: "Manual Artes Gráficas 1 (Pág. 91)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Fantasmeo' (Ghosting) mecánico o químico en el impreso?",
    options: ["La aparición de sombras o imágenes tenues repetidas en zonas de masa debido al agotamiento de tinta en los rodillos dadores", "Un fantasma en el almacén", "Una marca de agua falsa"],
    correct: 0,
    explanation: "Exige redistribuir la imposición o usar rodillos dadores de diferente diámetro para no agotar la batería.",
    source: "Manual Artes Gráficas 1 (Pág. 92)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Moteado' (Mottling) en masas impresas?",
    options: ["Una apariencia manchada o irregular en zonas de color denso causada por absorción no uniforme del papel o mal trapping", "Puntos negros de polvo", "Marcas de los pies del operario"],
    correct: 0,
    explanation: "Arruina la homogeneidad estético-visual de fondos y cubiertas.",
    source: "Manual Artes Gráficas 1 (Pág. 92)"
  },
  {
    theme: 3,
    question: "¿Qué representa la 'Ganancia de Punto Mecánica' frente a la 'Ganancia de Punto Óptica'?",
    options: ["La mecánica es el aplastamiento físico del punto de tinta; la óptica es el efecto de dispersión de la luz (Efecto Yule-Nielsen) dentro del papel", "La mecánica se mide con regla y la óptica con gafas", "Son conceptos de electrónica"],
    correct: 0,
    explanation: "La luz penetra en el papel y se dispersa bajo los bordes del punto haciendo que el punto parezca ópticamente más grande.",
    source: "Manual Artes Gráficas 1 (Pág. 93)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Efecto Yule-Nielsen' en la medición densitómica?",
    options: ["La fórmula matemática de corrección que contempla la ganancia de punto óptica provocada por la penetración del halo de luz en el soporte", "El cálculo del ángulo de la cuchilla", "El pesaje del papel"],
    correct: 0,
    explanation: "Permite calibrar los densitómetros para separar el crecimiento físico del punto del efecto óptico del papel.",
    source: "Manual Artes Gráficas 1 (Pág. 93)"
  },
  {
    theme: 3,
    question: "¿Qué es una 'Prueba Digital de Trazado' o Prueba de Imposición (Plotter)?",
    options: ["Una impresión a gran formato de baja resolución para revisar plegado, caída de páginas, lomos y textos sin valor de color", "La prueba certificada FOGRA", "El archivo PDF final"],
    correct: 0,
    explanation: "Sirve exclusivamente para verificar que las páginas están bien impuestas antes de filmar las planchas.",
    source: "Manual Artes Gráficas 1 (Pág. 94)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Visto Bueno de Impresión' (Ok to Print)?",
    options: ["La firma oficial del cliente o del jefe de producción sobre un pliego impreso en máquina autorizando el tiraje de la tirada completa", "El permiso de entrada al taller", "El certificado de la guillotina"],
    correct: 0,
    explanation: "Acepta formalmente la calidad, registro y tono del pliego de entonación como patrón para toda la producción.",
    source: "Manual Artes Gráficas 1 (Pág. 94)"
  },
  {
    theme: 3,
    question: "¿Qué representa el término 'Hendidura' (Creasing) previa al doblez de pliegos de gran gramaje?",
    options: ["El deformado plástico permanente mediante canal y lengüeta de la fibra para permitir doblar cartulinas sin que se fracture el estuco", "El corte con tijera", "La perforación con punzón"],
    correct: 0,
    explanation: "Imprescindible en cartulinas superiores a 170 g/m² antes de pasar por la plegadora.",
    source: "Manual Artes Gráficas 1 (Pág. 95)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Cizallado' en los procesos de corte de la guillotina?",
    options: ["El principio mecánico de corte producido por el encuentro oblicuo del filo penetrante de la cuchilla sobre la base de apoyo", "La rotura a mano del papel", "El doblado del lomo"],
    correct: 0,
    explanation: "El corte en guillotina combina el esfuerzo vertical con el desplazamiento lateral produciendo la acción de cizalla.",
    source: "Manual Artes Gráficas 1 y Manual Guillotinero (Pág. 95)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Garganta o Boca de Corte' de la guillotina?",
    options: ["La apertura o hueco libre máximo entre la mesa de acero y la chapa inferior del pisón levantado", "La ranura por donde cae la viruta", "La ventana de aire trasera"],
    correct: 0,
    explanation: "Determina la altura máxima física del paquete de papel que admite la máquina en una cargada.",
    source: "Manual Artes Gráficas 1 y Manual Guillotinero (Pág. 95)"
  },
  {
    theme: 3,
    question: "¿Qué representa la medida 'Ancho de Corte' nominal de una guillotina (ej. POLAR 115)?",
    options: ["La longitud útil máxima en centímetros de la mesa y la cuchilla para procesar un pliego (115 cm)", "El ancho de la pantalla táctil", "La distancia a la puerta del taller"],
    correct: 0,
    explanation: "Una POLAR 115 admite pliegos de hasta 115 cm de ancho de lado.",
    source: "Manual Artes Gráficas 1 y Manual Guillotinero (Pág. 95)"
  },

  
  {
    theme: 1,
    question: "¿Qué principio físico rige la transferencia de tinta en el sistema Offset?",
    options: ["La repulsión natural entre el agua (solución de mojado) y las grasas (vehículo de la tinta)", "La atracción magnética de los pigmentos", "La succión por vacío térmico"],
    correct: 0,
    explanation: "La plancha plana contiene zonas hidrófilas (atraen agua y repelen tinta) y zonas oleófilas (atraen tinta y repelen agua).",
    source: "Manual Artes Gráficas 1 (Pág. 98)"
  },
  {
    theme: 1,
    question: "¿Por qué el sistema Offset se denomina un sistema de impresión 'Indirecto'?",
    options: ["Porque la imagen no pasa directamente de la plancha al papel, sino que se transfiere primero a una mantilla intermedia de caucho", "Porque la máquina se enciende con un mando a distancia", "Porque requiere dos operarios"],
    correct: 0,
    explanation: "La mantilla de caucho deformable se adapta a las microrugosidades del papel logrando máxima definición.",
    source: "Manual Artes Gráficas 1 (Pág. 98)"
  },
  {
    theme: 1,
    question: "¿De qué material está fabricada la 'Mantilla de Caucho' (Blanket) del cilindro intermedio en offset?",
    options: ["Múltiples capas de tejido de algodón vulcanizado recubiertas por una capa superficial de caucho sintético elastómero", "Lámina de aluminio pulido", "Cuero de vaca grabado"],
    correct: 0,
    explanation: "Soporta la presión y transfiere la película de tinta sin deformar los puntos de trama.",
    source: "Manual Artes Gráficas 1 (Pág. 99)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Mantilla Compresible' en la prensa offset?",
    options: ["Una mantilla que incorpora una capa interna de microcélulas de aire cerradas que absorbe los impactos sin deformar los lados", "Una mantilla que se encoge con el calor", "Una mantilla usada para secar agua"],
    correct: 0,
    explanation: "Evita la deformación lateral del punto de trama bajo exceso de presión mecánica.",
    source: "Manual Artes Gráficas 1 (Pág. 99)"
  },
  {
    theme: 1,
    question: "¿Cuáles son los tres cilindros principales que componen un 'Cuerpo de Impresión' Offset estándar?",
    options: ["Cilindro Portaplanchas, Cilindro Porteador de Caucho y Cilindro de Impresión / Presión", "Cilindro Batidor, Cilindro Cortador y Cilindro Vibrador", "Cilindro Láser, Cilindro Soplador y Cilindro Escuadrador"],
    correct: 0,
    explanation: "Trio cinemático básico que ejecuta el mojado, entintado, transferencia al caucho y estampado en papel.",
    source: "Manual Artes Gráficas 1 (Pág. 100)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el 'Cilindro de Impresión' (o de Presión) en offset?",
    options: ["Presionar el pliego de papel contra la mantilla de caucho para obligarle a recibir la capa de tinta", "Mojar la plancha con agua", "Girar la escuadra trasera"],
    correct: 0,
    explanation: "Está provisto de las pinzas mecánicas que sujetan la hoja por su borde de ataque durante la transferencia.",
    source: "Manual Artes Gráficas 1 (Pág. 100)"
  },
  {
    theme: 1,
    question: "¿De qué metal está fabricada la base de la 'Plancha Offset' tradicional?",
    options: ["Aluminio micrograneado y anodizado fotosensible", "Cobre macizo", "Plomo fundido"],
    correct: 0,
    explanation: "El graneado electroquímico del aluminio crea los microporos retenedores de la solución de mojado.",
    source: "Manual Artes Gráficas 1 (Pág. 101)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Graneado' de la plancha de aluminio en la fabricación de planchas CTP?",
    options: ["Tratamiento electroquímico que crea una rugosidad microscópica en la superficie para retener la película de agua de mojado", "Lijar la plancha con lija de madera", "Pintar la plancha con pintura de grano"],
    correct: 0,
    explanation: "Un graneado óptimo garantiza la estabilidad del equilibrio agua-tinta durante tiradas largas.",
    source: "Manual Artes Gráficas 1 (Pág. 101)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el 'Anodizado' en la plancha de aluminio?",
    options: ["Formar una capa dura protectora de óxido de aluminio (alúmina) que aumenta la resistencia al desgaste por fricción", "Darle color azul", "Enganchar la plancha al cilindro"],
    correct: 0,
    explanation: "Protege las zonas no impresoras contra el rayado y la corrosión ácida.",
    source: "Manual Artes Gráficas 1 (Pág. 101)"
  },
  {
    theme: 1,
    question: "¿En qué consiste la 'Flexografía' como sistema de impresión?",
    options: ["Un sistema directo en relieve que utiliza formas impresoras flexibles (fotopolímeros) y tintas líquidas de secado rápido", "Un sistema que imprime con rodillos de acero grabados", "La impresión manual con sellos de caucho en seco"],
    correct: 0,
    explanation: "Especialmente indicado para packaging flexible, etiquetas adhesivas y cartón ondulado.",
    source: "Manual Artes Gráficas 1 (Pág. 102)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Rodillo Anilox' en el cuerpo impresor flexográfico?",
    options: ["Un cilindro cerámico grabado con millones de microceldillas que dosifica un volumen exacto y constante de tinta sobre la forma", "Un rodillo para secar el papel con calor", "El rodillo que prensa la guillotina"],
    correct: 0,
    explanation: "La lineatura y volumen de las celdillas del Anilox determinan la aportación exacta de tinta en flexo.",
    source: "Manual Artes Gráficas 1 (Pág. 103)"
  },
  {
    theme: 1,
    question: "¿En qué consiste el sistema de 'Huecograbado' (Rotograbado)?",
    options: ["Un sistema directo en bajo relieve donde la imagen está bajorrelavada en celdillas grabadas en un cilindro de cobre cromado", "Imprimir por agujeros en una tela de seda", "Grabar el papel con fuego"],
    correct: 0,
    explanation: "Ideal para tiradas gigantescas (revistas de gran tirada, catálogo, empaque flexible) por la durabilidad del cromo.",
    source: "Manual Artes Gráficas 1 (Pág. 104)"
  },
  {
    theme: 1,
    question: "¿Cómo se transfiere la tinta desde el cilindro de Huecograbado al papel?",
    options: ["Una rasqueta de acero retira la tinta de la superficie lisa y un rodillo presor de goma obliga al papel a succionar la tinta de las celdillas", "Por soplado de aire a presión", "Por atracción electrostática pura"],
    correct: 0,
    explanation: "La elevada presión del cilindro presor extrae por capilaridad la tinta líquida de las celdillas.",
    source: "Manual Artes Gráficas 1 (Pág. 104)"
  },
  {
    theme: 1,
    question: "¿En qué consiste la 'Serigrafía'?",
    options: ["Un sistema por permeografía que hace pasar la tinta a través de una malla textil o metálica tensada en un marco recubierta por una plantilla", "Imprimir con sellos de goma dura", "Un método de grabado en piedra caliza"],
    correct: 0,
    explanation: "Permite depositar capas de tinta gruesas e imprimir sobre cualquier soporte (camisetas, cristal, madera, plástico).",
    source: "Manual Artes Gráficas 1 (Pág. 105)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Racleta' o Rasqueta de caucho en Serigrafía?",
    options: ["La espátula de goma dura que presiona y arrastra la tinta a lo largo de la malla para forzar su paso por las zonas abiertas", "La cuchilla de cortar el papel", "El rodillo de secado"],
    correct: 0,
    explanation: "El ángulo, dureza (Shore) y presión de la racleta determinan el depósito de tinta en serigrafía.",
    source: "Manual Artes Gráficas 1 (Pág. 105)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tampografía'?",
    options: ["Un sistema de impresión indirecto que utiliza un tampón de silicona flexible para transferir tinta desde un grabado plano a objetos tridimensionales o curvos", "Poner sellos con tinta indeleble", "Imprimir revistas en rotativa"],
    correct: 0,
    explanation: "Permite imprimir sobre superficies irregulares (bolígrafos, pelotas de golf, carcasas de móviles).",
    source: "Manual Artes Gráficas 1 (Pág. 106)"
  },
  {
    theme: 1,
    question: "¿Qué es la Impresión 'Digital por Electrofotografía' (Tóner Laser / HP Indigo)?",
    options: ["Crear una imagen latente de carga eléctrica sobre un fotorreceptor mediante láser que atrae partículas de tóner o tinta líquida electrostática", "Inyectar gotas de pintura con boquilla", "Pulsar teclas en una máquina de escribir"],
    correct: 0,
    explanation: "No requiere forma impresora física fija, permitiendo la impresión de datos variables (VDP) página a página.",
    source: "Manual Artes Gráficas 1 (Pág. 107)"
  },
  {
    theme: 1,
    question: "¿Qué es la Impresión 'Digital por Inyección de Tinta' (Inkjet)?",
    options: ["Proyectar microscópicas gotas de tinta líquida desde cabezales piezoeléctricos o térmicos directamente sobre el papel sin contacto físico", "Pintar con pistola de aire", "Extruir plástico caliente"],
    correct: 0,
    explanation: "Tecnología clave tanto en plotters de gran formato como en prensas de producción continua de libros bajo demanda.",
    source: "Manual Artes Gráficas 1 (Pág. 108)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Impresión de Datos Variables' (VDP)?",
    options: ["La capacidad de la impresión digital de cambiar texto, imágenes o códigos de barras en cada ejemplar impreso en una sola tirada", "Un fallo de la máquina que cambia los colores", "El cambio de papel durante el trabajo"],
    correct: 0,
    explanation: "Permite la personalización total de cartas, mailing, facturas y carnés.",
    source: "Manual Artes Gráficas 1 (Pág. 108)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Impreso Bajo Demanda' (Print on Demand - POD)?",
    options: ["Producir tiradas ultracortas (incluso de un solo ejemplar) exactamente cuando se solicita el pedido sin necesidad de stock en almacén", "Exigir al cliente que pague antes de imprimir", "Imprimir con prisa de urgencia"],
    correct: 0,
    explanation: "Posible gracias a la eliminación de costes de forma impresora y tiempos de ajuste en la tecnología digital.",
    source: "Manual Artes Gráficas 1 (Pág. 108)"
  },
  {
    theme: 1,
    question: "En la fase de Postimpresión, ¿qué es la 'Alzadora' o Torre de Alzado?",
    options: ["Una máquina provista de múltiples estaciones que extrae una hoja de cada bandeja componiendo los juegos ordenados de páginas", "Una grúa para mover palés", "Un programa de consola de guillotina"],
    correct: 0,
    explanation: "Indispensable para ordenar los pliegos o hojas sueltas antes de grapar o encuadernar.",
    source: "Manual Artes Gráficas 1 (Pág. 110)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre 'Alzado' y 'Plegado de Cuadernillos'?",
    options: ["El alzado superpone pliegos sueltos unos sobre otros; el plegado dobla un pliego grande para formar las páginas consecutivas de un cuadernillo", "El alzado se hace con pegamento y el plegado con agua", "Son dos nombres para la misma máquina"],
    correct: 0,
    explanation: "Los cuadernillos plegados se pueden encadenar posteriormente por cosido o embuchado.",
    source: "Manual Artes Gráficas 1 (Pág. 110)"
  },
  {
    theme: 1,
    question: "¿Qué es un 'Plegado Paralelo' en la máquina dobladora?",
    options: ["Aquel en el que todos los pliegues realizados en la hoja son paralelos entre sí (ej. Plegado en acordeón, Plegado en ventana)", "Aquel que cruza pliegues a 90 grados", "El plegado que se hace con tijera"],
    correct: 0,
    explanation: "Típico en folletos desplegables, mapas y prospectos farmacéuticos.",
    source: "Manual Artes Gráficas 1 (Pág. 111)"
  },
  {
    theme: 1,
    question: "¿Qué es un 'Plegado Cruzado'?",
    options: ["Aquel en el que cada pliegue sucesivo se realiza en ángulo recto (90°) respecto al pliegue anterior", "Un plegado defectuoso que rompe el papel", "El doblado de las esquinas del libro"],
    correct: 0,
    explanation: "Es la secuencia habitual para formar cuadernillos editoriales de 8, 16 o 32 páginas a partir de un pliego plano.",
    source: "Manual Artes Gráficas 1 (Pág. 111)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Plegado en Acordeón' o Z-Fold?",
    options: ["Un plegado paralelo donde las palas se doblan alternativamente hacia adelante y hacia atrás formando una estructura en 'Z'", "Un doblado en forma de sobre cerrado", "Un rollo de papel"],
    correct: 0,
    explanation: "Permite desplegar y consultar el folleto abriéndolo de forma continua.",
    source: "Manual Artes Gráficas 1 (Pág. 111)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Plegado en Envolvente' o C-Fold (Tríptico en ventana)?",
    options: ["Un plegado paralelo donde las palas exteriores se dobla hacia adentro envolviéndose una sobre otra", "Un paquete de empaquetado", "Un doblado de bolsa"],
    correct: 0,
    explanation: "La pala que se pliega hacia adentro debe maquetarse de 2 a 3 mm más estrecha para no tropezar en el lomo.",
    source: "Manual Artes Gráficas 1 (Pág. 111)"
  },
  {
    theme: 1,
    question: "¿Por qué la pala interior de un folleto en envolvente debe maquetarse de menor ancho que las palas exteriores?",
    options: ["Para absorber el espacio de doblado al cerrarse sin que la pala interior tropiece ni se abombe", "Para gastar menos tinta", "Por pura estética visual"],
    correct: 0,
    explanation: "Si las 3 palas midieran 100 mm, al doblar la pala interna esta tropezaría con el lomo doblado doblando el papel.",
    source: "Manual Artes Gráficas 1 (Pág. 111)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Plegadora de Bolsa' (Parrilla)?",
    options: ["Una máquina que hace avanzar la hoja entre rodillos impulsándola dentro de una bolsa tope regulable donde el papel abomba y se dobla al pasar entre los rodillos inferiores", "Una máquina que mete papel en bolsas de plástico", "Una guillotina automática"],
    correct: 0,
    explanation: "Ofrece altísima velocidad en plegados paralelos rectos.",
    source: "Manual Artes Gráficas 1 (Pág. 112)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Plegadora de Cuchilla'?",
    options: ["Una máquina que utiliza una cuchilla de movimiento vertical alternativo que empuja la línea de pliegue de la hoja entre dos rodillos giratorios de arrastre", "Una guillotina para picar papel", "Un bisturí manual"],
    correct: 0,
    explanation: "Es el sistema idóneo y más preciso para ejecutar los pliegues cruzados de papel grueso.",
    source: "Manual Artes Gráficas 1 (Pág. 112)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Encuadernación en Rústica Fresada' (Perfect Binding / Solapada)?",
    options: ["Unión de las hojas o cuadernillos pasando el lomo por una fresa que raspa el papel y aplicando cola (Hotmelt / PUR) antes de pegar la cubierta de cartulina", "Cosido con alambre grueso", "Atado con cuerdas de esparto"],
    correct: 0,
    explanation: "Es el estándar económico para libros de bolsillo, catálogos y manuales técnicos.",
    source: "Manual Artes Gráficas 1 (Pág. 114)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre la cola termofusible 'Hotmelt' tradicional y la cola 'PUR'?",
    options: ["Hotmelt es una cola EVA que se reblandece con el calor y disolventes; PUR es poliuretano reactivo que crea enlaces químicos indeformables e inalterables", "Hotmelt es transparente y PUR es roja", "Hotmelt requiere agua para secar"],
    correct: 0,
    explanation: "La cola PUR permite abrir el libro totalmente plano sin que se desprendan las hojas de papel estucado pesado.",
    source: "Manual Artes Gráficas 1 (Pág. 114)"
  },
  {
    theme: 1,
    question: "¿En qué consiste el 'Fresado y Muescado' del lomo antes de aplicar la cola?",
    options: ["Eliminar los dobles del lomo mediante una sierra circular e infligir incisiones transversales para que la cola penetre profundamente entre las fibras", "Lijar las cubiertas de cartón", "Pintar el lomo con barniz"],
    correct: 0,
    explanation: "Aumenta la superficie de contacto mecánico del adhesivo con cada hoja individual.",
    source: "Manual Artes Gráficas 1 (Pág. 114)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Encuadernación en Rústica Cosida' (Cosido con Hilo) frente a la fresada?",
    options: ["Los cuadernillos se cosen individualmente con hilo vegetal/sintético a través del lomo y luego se unen con cola a la cubierta", "Se cosen las tapas con máquina de coser ropa", "Se usan grapas de plástico"],
    correct: 0,
    explanation: "Ofrece máxima durabilidad estructural impidiendo que las páginas se desprendan con el uso continuado.",
    source: "Manual Artes Gráficas 1 (Pág. 115)"
  },
  {
    theme: 1,
    question: "¿Qué son las 'Guardas' en la encuadernación en Cartoné (Tapa Dura)?",
    options: ["Pliegos dobles de papel resistente pegados a la cara interior de los cartones de la cubierta y a la primera/última página del bloque del libro", "Las carpetas del archivo de taller", "Los vigilantes de la puerta"],
    correct: 0,
    explanation: "Son las piezas estructurales que sujetan de forma sólida el cuerpo del libro al estuche rígido.",
    source: "Manual Artes Gráficas 1 (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Cajo' o Ceja en la encuadernación de Tapa Dura?",
    options: ["El resalte o deformación del lomo producida por el redondeado que aloja el canto del cartón de la cubierta", "La esquina de la guillotina", "El reborde de la cuchilla"],
    correct: 0,
    explanation: "Permite el juego de articulación de la tapa al abrir el libro.",
    source: "Manual Artes Gráficas 1 (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cabezorada' o Cinta de Cabezorada?",
    options: ["Una cinta textil tejida con un remate de color pegada en las caras superior e inferior del lomo para ocultar el hueco del cosido", "El adorno del sombrero del impresor", "Una tira de cinta aislante"],
    correct: 0,
    explanation: "Aporta un acabado estético de lujo en libros encuadernados en tapa dura.",
    source: "Manual Artes Gráficas 1 (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Cinta Marcapáginas' o Registro de lectura?",
    options: ["Una cinta fina de tela unida por su extremo superior al lomo interior del libro que sirve de señalador de página", "Un marcador de plástico", "Una regla graduada de regalo"],
    correct: 0,
    explanation: "Se inserta mecánicamente durante la cadena de confección del libro en tapa dura.",
    source: "Manual Artes Gráficas 1 (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cizalla Trilateral' o Guillotina de Tres Cuchillas?",
    options: ["Una máquina de postimpresión provista de tres cuchillas integradas que refila simultáneamente la cabeza, el pie y el frente del libro en un solo ciclo", "Una guillotina manual de oficina", "Una cortadora de azulejos"],
    correct: 0,
    explanation: "Limpia y escuadra el libro encuadernado dejando los tres cantos netos perfectos.",
    source: "Manual Artes Gráficas 1 (Pág. 118)"
  },
  {
    theme: 3,
    question: "¿Qué ventaja tiene el refilado en Cizalla Trilateral frente a refilar libros de uno en uno en guillotina mono-cuchilla?",
    options: ["Multiplica exponencialmente la productividad y asegura la coincidencia idéntica de cotas en todos los libros de la tirada", "No requiere electricidad", "Corta el papel sin hacer ruido"],
    correct: 0,
    explanation: "Procesa pilas de libros encuadernados cortando los 3 lados de forma sincronizada.",
    source: "Manual Artes Gráficas 1 (Pág. 118)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Estampado en Caliente' (Stamping / Hot Stamping)?",
    options: ["Transferir una película de pigmento o lámina metálica (oro, plata) al soporte mediante la presión de un grabado grabado alimentado por calor", "Pintar el libro con brocha caliente", "Imprimir con la prensa a vapor de 1812"],
    correct: 0,
    explanation: "Aplica relieves metalizados brillantes invulnerables al desgaste en cubiertas de lujo.",
    source: "Manual Artes Gráficas 1 (Pág. 120)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Relieve en Seco' (Golpe Seco / Embossing)?",
    options: ["Deformar el papel o cartulina mediante la presión de un troquel macho y hembra sin aplicación de tinta ni foil", "Un raspado con lija", "Un corte parcial de la guillotina"],
    correct: 0,
    explanation: "Produce un relieve o bajorrelieve estético táctil aprovechando la plasticidad del soporte.",
    source: "Manual Artes Gráficas 1 (Pág. 120)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Plastificado / Plastificado por Película' (Laminado / Peliculado)?",
    options: ["Adherir una lámina plástica fina transparente (Polipropileno / Poliéster) mediante calor y adhesivo sobre la superficie del papel", "Empaquetar el paquete con filme extensible", "Pintar con esmalte sintético"],
    correct: 0,
    explanation: "Aporta protección absoluta contra la humedad, roces y manchas en cubiertas de libros.",
    source: "Manual Artes Gráficas 1 (Pág. 121)"
  },
  {
    theme: 3,
    question: "¿Qué diferencia existe entre Plastificado Brillo, Plastificado Mate y Plastificado Soft Touch?",
    options: ["Brillo es reflejante; Mate es sin brillos suave; Soft Touch ofrece un acabado de textura terciopelo al tacto", "Brillo es transparente y Mate es negro", "Soft touch es plastificado de plástico duro"],
    correct: 0,
    explanation: "Diferentes acabados sensoriales y ópticos aplicados mediante peliculado térmico.",
    source: "Manual Artes Gráficas 1 (Pág. 121)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Barnizado Selectivo UV'?",
    options: ["Aplicar un barniz transparente de alto brillo fijado por luz ultravioleta exclusivamente sobre zonas concretas del diseño (ej. sobre una foto o título)", "Bañar todo el papel en barniz de madera", "Pintar la cuchilla de la máquina"],
    correct: 0,
    explanation: "Destaca elementos gráficos concretos sobre cubiertas mate mediante un fuerte contraste de brillo.",
    source: "Manual Artes Gráficas 1 (Pág. 122)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Encuadernación en Espiral' (Wire-O / Espiral Metálica o Plástica)?",
    options: ["Perforar una fila de agujeros en el margen del lomo e introducir un muelle continuo helicoidal o doble anilla", "Pegar las hojas con pegamento instantáneo", "Atar el libro con un cordón de zapatos"],
    correct: 0,
    explanation: "Permite la apertura total de 360° plana de la libreta o catálogo de consulta.",
    source: "Manual Artes Gráficas 1 (Pág. 123)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Cosido con Grapas / Cosido a Caballo' (Saddle Stitching)?",
    options: ["Fijar las hojas del pliego embuchado insertando una o dos grapas de alambre metálico a través del lomo doblado", "Pegar con cinta adhesiva", "Atar con cuerda"],
    correct: 0,
    explanation: "Es el sistema estándar de encuadernación rápida para revistas de pocas páginas (hasta 64-96 pág.).",
    source: "Manual Artes Gráficas 1 (Pág. 124)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Trepadado / Perforado' en la postimpresión?",
    options: ["Crear una línea de diminutos taladros o troquelados en el papel para permitir desgarrar y separar fácilmente un cupón o entrada", "Coser la cubierta", "Cortar la hoja por la mitad en la guillotina"],
    correct: 0,
    explanation: "Típico en participaciones de lotería, rifas, talonarios y tickets de acceso.",
    source: "Manual Artes Gráficas 1 (Pág. 125)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Goma Removible / Cola Reposicionable' (Peelable Glue)?",
    options: ["Un adhesivo de baja cohesión usado para pegar muestras de sobres, revistas o tarjetas sin desgarrar la fibra al despegarlo", "Cola súper fuerte para lomos", "Goma de borrar de oficina"],
    correct: 0,
    explanation: "Permite la fijación temporal de elementos promocionales despegables.",
    source: "Manual Artes Gráficas 1 (Pág. 125)"
  },
  {
    theme: 3,
    question: "¿Qué representa el control de 'Peso por Palé' antes de la expedición final?",
    options: ["Verificar que la carga acumulada respeta los límites de carga útil permitidos por la transpaleta, el camión y las estanterías del almacén", "Pesar los libros de uno en uno", "Calcular el peso de la cuchilla"],
    correct: 0,
    explanation: "Evita riesgos laborales en la logística de transporte y almacenamiento en altura.",
    source: "Manual Artes Gráficas 1 (Pág. 126)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Fajado' (Banding) de paquetes de producto terminado?",
    options: ["Envolver los paquetes de folletos o libros con una tira de papel Kraft o cinta plástica termosellada para mantener la unidad sin deformarlos", "Atar los palés con cadenas de hierro", "Meter los libros en cajas de madera"],
    correct: 0,
    explanation: "Agrupa unidades en submúltiplos manejables (ej. paquetes de 50 o 100 ejemplares).",
    source: "Manual Artes Gráficas 1 (Pág. 126)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Retractilado' (Shrink Wrapping) mediante túnel Térmico?",
    options: ["Envolver el paquete con una lámina plástica termoplástica que se contrae por aplicación de calor amoldándose perfectamente al bloque", "Meter el papel en agua hirviendo", "Laminar con lámina de aluminio"],
    correct: 0,
    explanation: "Protege los paquetes de impresos contra el polvo, la humedad y el roce durante el transporte.",
    source: "Manual Artes Gráficas 1 (Pág. 126)"
  },
  {
    theme: 3,
    question: "Al apilar cajas o paquetes sobre un palé de madera para su envío, ¿qué es el 'Trincado / Flejado'?",
    options: ["Colocar cinchas de plástico (fleje) tensadas o film transparente para asegurar que la carga no vuela ni se desmorona en los giros", "Pegar las cajas con cola blanca", "Clavar las cajas al palé con clavos"],
    correct: 0,
    explanation: "Garantiza la estabilidad física de la unidad de carga durante el transporte logístico.",
    source: "Manual Artes Gráficas 1 (Pág. 126)"
  },
  {
    theme: 3,
    question: "¿Por qué el guillotinero debe revisar la primera muestra saliendo de la cizalla trilateral o plegadora antes de validar el tiraje completo?",
    options: ["Para asegurar que no existen desviaciones en las medidas, descuadres o daños por aprisionamiento antes de procesar miles de unidades", "Para firmar la factura al cliente", "Para limpiar el polvo de la mesa"],
    correct: 0,
    explanation: "Es el control de calidad preventivo básico que evita deshechos masivos irrecuperables en postimpresión.",
    source: "Manual Artes Gráficas 1 (Pág. 126)"
  },

  
  {
    theme: 1,
    question: "¿En qué consiste el proceso de 'Entonación de Color' en una prensa offset antes de dar el visto bueno al tiraje?",
    options: [
      "Ajustar progresivamente las llaves de los tinteros por zona hasta alcanzar las densidades y el equilibrio agua-tinta estándar",
      "Cambiar el papel de la máquina por uno de mayor gramaje",
      "Filtrar el agua del tanque de mojado con carbono activo"
    ],
    correct: 0,
    explanation: "La entonación ajusta la aportación zonal de tinta hasta igualar los valores de densidad y tono del pliego de prueba aprobado.",
    source: "Manual Artes Gráficas 1 (Pág. 93)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Laminado Térmico Dry' (Laminado en Seco) frente al laminado con cola base agua?",
    options: [
      "Utilizar un film plástico recubierto con una capa de cola EVA que se activa directamente por calor y presión sin manipular adhesivo líquido",
      "Secar la lámina de plástico con un secador de mano",
      "Pegar el film mediante ultrasonidos sin usar calor"
    ],
    correct: 0,
    explanation: "El laminado térmico utiliza filmes preconectados con cola termofusible seca, agilizando el proceso sin tiempos de curado de líquido.",
    source: "Manual Artes Gráficas 1 (Pág. 121)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Resistencia a la Delaminación' (Internal Bond Strength / Scott Bond) del papel o cartón?",
    options: [
      "La fuerza necesaria para separar o deshojar las capas internas de fibras entrelazadas del soporte en sentido Z",
      "La resistencia a rayarse con una regla de acero",
      "El peso máximo que soporta el papel antes de doblarse"
    ],
    correct: 0,
    explanation: "Evalúa la cohesión interna del papel para evitar que se abra en capas durante el tiro de tintas viscosas o el peliculado.",
    source: "Manual Artes Gráficas 1 (Pág. 52)"
  },
  {
    theme: 2,
    question: "Al almacenar bobinas de papel en el almacén de materia prima, ¿cuál es la posición de apilamiento térmicamente más estable y segura?",
    options: [
      "En posición vertical ('de pie') sobre sus caras planas para evitar que el cilindro pierda su redondez por deformación de peso",
      "Tumbadas en el suelo directamente sobre el eje horizontal",
      "Inclinadas a 45 grados contra la pared"
    ],
    correct: 0,
    explanation: "El apilamiento vertical distribuye el peso de forma uniforme sobre el perímetro del núcleo evitando el aplastamiento ovalado del rollo.",
    source: "Manual Artes Gráficas 1 (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Efecto Capilar' en la estructura porosimétrica del papel?",
    options: ["El fenómeno de succión por el cual los intersticios entre fibras absorben la fase líquida del vehículo de la tinta", "El erizado de las fibras por electricidad estática", "La curvatura de las esquinas al cortar"],
    correct: 0,
    explanation: "La red de microrrecovecos entre fibras actúa como tubos capilares fijando inicialmente la tinta por penetración.",
    source: "Manual Artes Gráficas 1 (Pág. 50)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Tira de Escala de Grises' o Parches de Balance de Grises en el pliego de control?",
    options: ["Un parche impreso con la superposición de C, M, Y en porcentajes específicos que debe verse neutro si el equilibrio de color es correcto", "Una barra de medición del tiempo de secado", "Un código para la guillotina"],
    correct: 0,
    explanation: "Permite comprobar visualmente y densitométricamente si las tres tintas principales están en equilibrio sin virajes hacia ningún tono.",
    source: "Manual Artes Gráficas 1 (Pág. 87)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Ángulo de Inclinación de la Cuchilla de la Plegadora' de cuchilla en postimpresión?",
    options: ["La alineación paralela exacta con la ranura entre los dos rodillos plegadores para garantizar un pliego perpendicular sin arrugas", "El bisel afilado que corta el margen del lomo", "La inclinación a 45° para rasgar el papel"],
    correct: 0,
    explanation: "La cuchilla de la plegadora no corta, solo impulsa la línea de pliegue de forma simétrica hacia el contacto de los rodillos.",
    source: "Manual Artes Gráficas 1 (Pág. 112)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Tinta de Secado por Polimerización UV'?",
    options: ["Una tinta cuya formulación reacciona instantáneamente ante la radiación ultravioleta pasando de estado líquido a sólido sin evaporación", "Una tinta que se seca al contacto con el aire natural en 24 horas", "Una tinta lavable exclusivamente con agua caliente"],
    correct: 0,
    explanation: "Los fotoiniciadores de la tinta absorben la radiación UV y reticulan los monómeros en una fracción de segundo.",
    source: "Manual Artes Gráficas 1 (Pág. 107)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Polvo Antirrepinte' (Anti-setoff powder) rociado en la salida de las máquinas offset pliego?",
    options: ["Micropartículas de almidón de maíz o arroz que crean un colchón de separación entre pliegos impidiendo que la tinta pase al reverso", "Polvo de talco para engrasar las guías", "Harina de trigo para espesar la solución de mojado"],
    correct: 0,
    explanation: "Crea una separación microscópica entre pliegos apilados permitiendo la entrada de aire para el secado por oxidación.",
    source: "Manual Artes Gráficas 1 (Pág. 89)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Volatilización del Solvente' en tintas para Huecograbado o Flexografía?",
    options: ["El proceso de secado acelerado por aire caliente que evapora los disolventes orgánicos o agua dejando el pigmento fijo", "La congelación del vehículo de la tinta", "La absorción de la tinta dentro de la regleta de corte"],
    correct: 0,
    explanation: "Las tintas líquidas de secado físico requieren la rápida evaporación de la fase volátil mediante túneles de secado.",
    source: "Manual Artes Gráficas 1 (Pág. 104)"
  },
  {
    theme: 3,
    question: "¿Qué representa la 'Resistencia a la Luz' (Escala de la Lana / Blue Wool Scale) de los pigmentos de una tinta?",
    options: ["Un valor normalizado del 1 al 8 que mide la estabilidad del color frente al desteñido por exposición a la luz solar o UV", "La velocidad de secado bajo la lámpara de la guillotina", "El brillo de la masa de color"],
    correct: 0,
    explanation: "Crucial en cartelería exterior o escaparates para asegurar que el color no desaparezca con los rayos UV.",
    source: "Manual Artes Gráficas 1 (Pág. 35)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Solución de Mojado' o Solución Fuente en la impresión Offset?",
    options: ["Una mezcla de agua, tampón ácido/alcalino, goma arábiga y tensoactivos (ej. alcohol isopropílico) que humecta las zonas no impresoras", "Agua pura de grifo con jabón líquido", "Aceite mineral disuelto en alcohol"],
    correct: 0,
    explanation: "Mantiene la desensibilización hidrófila del aluminio evitando que la tinta engrase las zonas blancas de la plancha.",
    source: "Manual Artes Gráficas 1 (Pág. 98)"
  },
  {
    theme: 3,
    question: "¿Qué función cumple la 'Goma Arábiga' añadida a la solución de mojado y al engomado de planchas?",
    options: ["Proteger la capa de alúmina hidrofilizada de la plancha contra la oxidación de aire y aumentar su afinidad por el agua", "Pegar la plancha al cilindro de acero", "Espesar la tinta para que no gotee"],
    correct: 0,
    explanation: "Es un coloide natural que se deposita en los microporos del aluminio conservando sus propiedades repelentes de grasa.",
    source: "Manual Artes Gráficas 1 (Pág. 98)"
  },

   
  {
    theme: 4,
    question: "Según el XI Convenio Colectivo de la FNMT-RCM, ¿cuál es el periodo de prueba fijado para el personal operario?",
    options: [
      "Quince días",
      "Un mes",
      "Dos meses"
    ],
    correct: 0,
    explanation: "El artículo 13 del XI Convenio Colectivo establece un periodo de prueba de 15 días para la categoría de operario.",
    source: "Examen FNMT 2022 / 2025 / 2026"
  },
  {
    theme: 4,
    question: "¿Cuál es el tiempo máximo para un periodo de experimentación de nuevas normas de organización según el Convenio de la FNMT?",
    options: [
      "Diez semanas",
      "Quince semanas",
      "Dos meses"
    ],
    correct: 0,
    explanation: "El artículo 6 del XI Convenio fija en diez semanas el límite para la prueba de nuevas pautas de producción.",
    source: "Examen FNMT 2022 (Pág. 13)"
  },
  {
    theme: 4,
    question: "Según la normativa de Prevención de Riesgos Laborales, ¿a partir de qué nivel de ruido es obligatorio el uso de protectores auditivos?",
    options: [
      "85 dB",
      "80 dB",
      "75 dB"
    ],
    correct: 0,
    explanation: "El valor límite de exposición que obliga al uso efectivo de EPIs auditivos está fijado en 85 dB(A).",
    source: "Examen FNMT 2025 (Pág. 12)"
  },
  {
    theme: 4,
    question: "¿Qué significan las siglas del protocolo 'PAS' en primeros auxilios para socorristas?",
    options: [
      "Proteger, Avisar, Socorrer",
      "Programar, Alertar, Socorrer",
      "Prevenir, Auxiliar, Salvar"
    ],
    correct: 0,
    explanation: "Secuencia fundamental de actuación: 1º Proteger el entorno, 2º Avisar a emergencias, 3º Socorrer al herido.",
    source: "Examen FNMT 2026 (Pág. 11)"
  },
  {
    theme: 4,
    question: "En la técnica de reanimación cardiopulmonar (RCP) básica, ¿cuál es la relación correcta de ciclos?",
    options: [
      "30 compresiones cardiacas + 2 insuflaciones",
      "20 compresiones + 2 insuflaciones",
      "15 compresiones + 5 insuflaciones"
    ],
    correct: 0,
    explanation: "El estándar de RCP de socorrismo establece ciclos continuos de 30 compresiones y 2 ventilaciones.",
    source: "Examen FNMT 2026 (Pág. 11)"
  },
  {
    theme: 4,
    question: "¿Cuál es la composición de la Comisión Paritaria del XI Convenio Colectivo de la FNMT?",
    options: [
      "Seis representantes de la Dirección y seis de los trabajadores",
      "Cinco de la Dirección y cinco de los trabajadores",
      "Cuatro de la Dirección y cuatro de los trabajadores"
    ],
    correct: 0,
    explanation: "Órgano formado de manera paritaria por 6 miembros designados por la empresa y 6 por el Comité Intercentros.",
    source: "Examen FNMT 2023 (Pág. 14)"
  },
  {
    theme: 4,
    question: "¿Con qué periodicidad se reúne de forma ordinaria el Comité de Seguridad y Salud en los centros de la FNMT?",
    options: [
      "Trimestralmente",
      "Semestralmente",
      "Anualmente"
    ],
    correct: 0,
    explanation: "El Comité de Seguridad y Salud celebra reuniones ordinarias cada tres meses en los centros de Madrid y Burgos.",
    source: "Examen FNMT 2023 (Pág. 14)"
  },
  {
    theme: 4,
    question: "¿Cuál es el número de Delegados de Prevención en el Comité de Seguridad y Salud del centro de Madrid?",
    options: [
      "8 miembros",
      "6 miembros",
      "4 miembros"
    ],
    correct: 0,
    explanation: "Por plantilla del centro de trabajo de Madrid, corresponden 8 delegados de prevención.",
    source: "Examen FNMT 2022 / 2025"
  },
  {
    theme: 4,
    question: "¿Cómo se clasifican los reconocimientos médicos periódicos de los trabajadores en la FNMT?",
    options: [
      "Voluntarios, salvo excepciones legales con informe de los representantes",
      "Obligatorios en el 100% de los casos",
      "Depende del tipo de contrato temporal o fijo"
    ],
    correct: 0,
    explanation: "La vigilancia de la salud es voluntaria salvo riesgos específicos o imprescindible para evaluar efectos del puesto.",
    source: "Examen FNMT 2022 / 2025"
  },
  {
    theme: 4,
    question: "¿Qué organismo vigila el cumplimiento de la normativa sobre prevención de riesgos laborales?",
    options: [
      "La Inspección de Trabajo y Seguridad Social",
      "El Ministerio de Industria",
      "La mutua de accidentes de trabajo"
    ],
    correct: 0,
    explanation: "Corresponde a la Inspección de Trabajo la función de vigilancia y exigencia de responsabilidades en PRL.",
    source: "Examen FNMT 2022 / 2025"
  },
  {
    theme: 4,
    question: "¿Quién facilita a los trabajadores de la FNMT los equipos de protección individual (EPIs)?",
    options: [
      "El jefe de unidad del trabajador / La empresa de forma gratuita",
      "Los propios trabajadores comprándolos en tienda",
      "El servicio médico cobrándolo en nómina"
    ],
    correct: 0,
    explanation: "Es obligación del empresario/jefe de unidad proporcionar gratuitamente los EPIs adecuados.",
    source: "Examen FNMT 2022 / 2025"
  },
  {
    theme: 4,
    question: "Una señal de color ROJO en el puesto de trabajo indica:",
    options: [
      "Prohibición, material de lucha contra incendios o parada de emergencia",
      "Obligación de usar protección",
      "Advertencia de peligro potencial"
    ],
    correct: 0,
    explanation: "El color rojo se reserva para prohibiciones, equipos contra incendios y dispositivos de desconexión urgente.",
    source: "Examen FNMT 2025 (Pág. 12)"
  },
  {
    theme: 4,
    question: "Según la Ley General de la Seguridad Social (Art. 115), ¿cuál es la definición de Accidente de Trabajo?",
    options: [
      "Toda lesión corporal que el trabajador sufra con ocasión o por consecuencia del trabajo ejecutado por cuenta ajena",
      "Cualquier enfermedad común que aparezca en el taller",
      "Un tropiezo sin consecuencias físicas"
    ],
    correct: 0,
    explanation: "Definición jurídica exacta de accidente laboral bajo el marco legal de la Seguridad Social.",
    source: "Examen FNMT 2023 / 2026"
  },
  {
    theme: 4,
    question: "En el Manual de PRL de la FNMT, el rango de temperatura recomendado para trabajos LIGEROS en taller es:",
    options: [
      "14 a 25 °C (o 17 a 27 °C según tipo de actividad)",
      "5 a 10 °C",
      "30 a 35 °C"
    ],
    correct: 0,
    explanation: "Mantiene las condiciones de confort térmico para evitar la fatiga o sudoración excesiva.",
    source: "Examen FNMT 2023 (Pág. 13)"
  },
  {
    theme: 4,
    question: "En la clasificación de tipos de fuego, los de 'Clase B' involucran:",
    options: [
      "Líquidos inflamables o sólidos licuables (gasolina, pintura, disolventes, aceites)",
      "Combustibles sólidos ordinarios como madera o papel",
      "Gases inflamables como butano o propano"
    ],
    correct: 0,
    explanation: "Clase B abarca los incendios alimentados por combustibles líquidos o hidrocarburos.",
    source: "Examen FNMT 2023 (Pág. 13)"
  },
  {
    theme: 4,
    question: "¿Qué es un medio integral de protección?",
    options: [
      "Aquel equipo de protección que protege frente a riesgos que no actúan sobre partes concretas del cuerpo (ej. arnés anticaídas)",
      "Un casco de seguridad",
      "Gafas de protección ocular"
    ],
    correct: 0,
    explanation: "Protege la integridad global del trabajador en operaciones de riesgo generalizado.",
    source: "Examen FNMT 2022 / 2025"
  },
  {
    theme: 4,
    question: "En una hemorragia, si la sangre es de color rojo brillante y sale a borbotones impulsivos, procede de:",
    options: [
      "Una arteria",
      "Una vena",
      "Un vaso capilar superficial"
    ],
    correct: 0,
    explanation: "La sangre arterial es oxigenada (rojo vivo) y sale con la presión de los latidos cardiacos.",
    source: "Examen FNMT 2026 (Pág. 11)"
  },
  {
    theme: 4,
    question: "En el Plan de Igualdad de la FNMT, ¿cuál es uno de sus objetivos principales?",
    options: [
      "Conseguir procesos de selección y promoción en igualdad evitando la segregación y el lenguaje sexista",
      "Fijar el precio de las monedas de colección",
      "Organizar las vacaciones de verano"
    ],
    correct: 0,
    explanation: "Garantiza la equidad de trato y oportunidades laborales sin discriminación de género.",
    source: "Examen FNMT 2026 (Pág. 11)"
  },
  {
    theme: 4,
    question: "¿Quién compone la Comisión de Seguimiento del III Plan de Igualdad de la FNMT?",
    options: [
      "Cinco miembros de la parte empresarial y cinco de la parte social (o 4/4 según acta)",
      "Cincuenta operarios elegidos al azar",
      "Únicamente el Director General"
    ],
    correct: 0,
    explanation: "Órgano paritario encargado de velar por el cumplimiento de los acuerdos de igualdad.",
    source: "Examen FNMT 2023 (Pág. 14)"
  },
  {
    theme: 4,
    question: "¿Qué plazo tiene un trabajador para reclamar ante la Comisión Paritaria si realiza funciones de categoría superior?",
    options: [
      "Plazo máximo fijado por convenio (ej. 20 semanas / 1 año)",
      "48 horas exactas",
      "10 años"
    ],
    correct: 0,
    explanation: "Regula el procedimiento de solicitud de reconocimiento de trabajos de superior categoría.",
    source: "Examen FNMT 2022 (Pág. 12)"
  },
  {
    theme: 4,
    question: "Las enfermedades profesionales están reguladas oficialmente en España por:",
    options: [
      "El Real Decreto 1299/2006 con el cuadro oficial de enfermedades profesionales",
      "El código de circulación",
      "La ordenanza municipal de Madrid"
    ],
    correct: 0,
    explanation: "Aprobación del cuadro legal que tipifica las patologías derivadas de la actividad laboral.",
    source: "Examen FNMT 2026 (Pág. 11)"
  },
  {
    theme: 4,
    question: "¿Qué tipo de riesgo genera la exposición continua a vibraciones de maquinaria pesada?",
    options: ["Riesgo físico dentro de los riesgos higiénicos", "Riesgo biológico", "Riesgo psicosocial leve"],
    correct: 0,
    explanation: "Las vibraciones mecánicas son agentes físicos que dañan el sistema músculo-esquelético y vascular.",
    source: "Examen FNMT 2023 (Pág. 13)"
  },
  {
    theme: 4,
    question: "¿Es obligatorio que el Manual de Instrucciones de la guillotina esté disponible para los operarios?",
    options: ["Sí, es obligatorio que esté accesible junto a la máquina en todo momento", "No, se guarda bajo llave en dirección", "Solo si la máquina es de segunda mano"],
    correct: 0,
    explanation: "La directiva de máquinas exige que el operador pueda consultar el manual de uso y seguridad siempre.",
    source: "Examen FNMT 2025 (Pág. 13)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Estrés Laboral' según la definición de prevención de la FNMT?",
    options: ["El estado que se manifiesta cuando las exigencias del entorno superan las capacidades o límites adaptativos del trabajador", "Tener ganas de terminar rápido el turno", "El cansancio físico de las piernas"],
    correct: 0,
    explanation: "Patología derivada de la organización del trabajo que afecta a la salud psíquica y rendimiento.",
    source: "Examen FNMT 2023 (Pág. 13)"
  },
  {
    theme: 4,
    question: "¿Qué tipo de fuegos abarca la 'Clase A'?",
    options: ["Combustibles sólidos orgánicos que forman brasas (madera, papel, tela, cartón)", "Fuegos eléctricos en cables", "Metales reactivos como el magnesio"],
    correct: 0,
    explanation: "La Clase A comprende los materiales sólidos del taller gráfico cuyos residuos dejan ascua incandescente.",
    source: "Examen FNMT 2023 (Pág. 13)"
  }









];
























/* =========================================================================
   3. BANCO DE PREGUNTAS - MÓDULO ARTES GRÁFICAS 2: TINTAS Y PROCESOS
   ========================================================================= */
const questionsModulo2 = [
  /* =========================================================================
   3. BANCO DE PREGUNTAS - MÓDULO ARTES GRÁFICAS 2: TINTAS Y PROCESOS (226 a 300)
   ========================================================================= */
//const questionsModulo2Ext = [
  { theme: 1, question: "Según el manual, ¿cómo se definen las dos fases fundamentales de la composición de una tinta de impresión?", options: ["Fase sólida (insoluble: pigmentos/cargas) y Fase líquida (continua: vehículo/resinas/aceites)", "Fase ácida (disolventes) y Fase neutra (agua de mojado)", "Fase volatilizable (fotopolímeros) y Fase inerte (polvos antirrepinte)"], correct: 0, explanation: "La tinta consta de una fase sólida insoluble (pigmentos y cargas) y una fase líquida o continua denominada vehículo (formada por resinas, aceites o disolventes).", source: "Manual Artes Gráficas 2 - Tintas (Pág. 2)" },
  { theme: 1, question: "¿Qué diferencia principal existe entre las tintas basadas en colorantes y las basadas en pigmentos?", options: ["Los colorantes son solubles en el vehículo, ofreciendo mayor transparencia y brillo pero menor resistencia a la luz", "Los colorantes son insolubles y ofrecen mayor opacidad que los pigmentos", "Los pigmentos son totalmente solubles y están prohibidos en alimentación"], correct: 0, explanation: "Los colorantes son solubles en el barniz/vehículo y aportan alta transparencia y pureza de color, pero tienen menor estabilidad a la luz y disolventes que los pigmentos.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 5)" },
  { theme: 1, question: "¿Qué función técnica desempeñan las resinas dentro de la formulación de la tinta?", options: ["Proteger y fijar el pigmento al soporte, aportar brillo y determinar las propiedades del barniz", "Aumentar la volatilidad del agua en la batería de mojado", "Evitar el secado de la tinta durante el tiro en la máquina"], correct: 0, explanation: "Las resinas (naturales como la colofonia o sintéticas como las fenólicas/alquídicas) fijan el pigmento al papel, dan brillo y gobiernan las propiedades reológicas del vehículo.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 7)" },
  { theme: 2, question: "¿Cómo se define el 'Tiro' o 'Tack' de una tinta de impresión?", options: ["La fuerza necesaria para dividir en dos una película de tinta entre dos superficies", "La velocidad a la que la tinta fluye por una copa Ford", "La capacidad de absorción de agua en la solución fuente"], correct: 0, explanation: "El tiro o tack mide la resistencia hidráulica de la película de tinta a dividirse mecánicamente cuando se separa de los rodillos o de la plancha.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 24)" },
  { theme: 2, question: "¿Cómo influye la temperatura del taller en la viscosidad de las tintas de impresión?", options: ["Una variación de 1 °C produce una variación de viscosidad de aproximadamente un 10%", "La temperatura no influye en la viscosidad, solo en el pH", "A mayor temperatura, aumenta drásticamente la viscosidad"], correct: 0, explanation: "La viscosidad es extremadamente sensible a la temperatura: una variación de tan solo 1 °C altera la viscosidad de la tinta en un 10%.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 26)" },
  { theme: 2, question: "¿Qué fenómeno reológico describe la variación o caída de la viscosidad de una tinta por efecto de la agitación mecánica?", options: ["Tixotropía", "Reopexia", "Tack estático"], correct: 0, explanation: "La tixotropía es la propiedad por la cual la tinta se vuelve más fluida (pierde viscosidad) al ser batida o agitada en la batería de rodillos.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 29)" },
  { theme: 2, question: "En el proceso de superposición de tintas (Trapping), ¿qué rango porcentual se considera un trapping 'Bueno'?", options: ["Entre el 80% y el 95%", "Menor del 70%", "Entre el 50% y el 60%"], correct: 0, explanation: "Según las tablas de trapping del manual: <70% es Crítico, 70-80% Aceptable, 80-95% Bueno y >95% Muy Bueno.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 30)" },
  { theme: 3, question: "¿Qué consecuencias negativas provoca en el proceso de impresión una solución de mojado demasiado ácida (pH < 5)?", options: ["Emulsificación de agua en tinta y un retraso acusado en el secado", "Desgaste nulo de la plancha y exceso de brillo", "Falta de fluidez y mala humectación del pigmento"], correct: 0, explanation: "Un pH excesivamente ácido interfiere con los secantes de la tinta retrasando su oxipolimerización y favorece la emulsión no deseada.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 31)" },
  { theme: 3, question: "¿Qué rango de conductividad eléctrica debe mantener una solución de mojado convencional (Agua + Aditivos)?", options: ["Entre 1.200 y 1.500 microsiemens (µS/cm)", "Entre 100 y 200 microsiemens", "Mayor de 5.000 microsiemens"], correct: 0, explanation: "El nivel óptimo de conductividad para agua + aditivos de mojado oscila entre 1200 y 1500 µS/cm (reduciéndose a 800-1200 µS/cm si lleva alcohol).", source: "Manual Artes Gráficas 2 - Offset (Pág. 106)" },
  { theme: 3, question: "¿En qué consiste el mecanismo de secado de tintas por Haz de Electrones (EB - Electron Beam)?", options: ["En la polimerización instantánea mediante electrones emitidos por un filamento de tungsteno en atmósfera inerte", "En la evaporación de disolventes en hornos de llama directa", "En la absorción macroporosa en soportes no estucados"], correct: 0, explanation: "El secado EB utiliza un tubo con filamento de tungsteno en atmósfera inerte de nitrógeno, logrando curado instantáneo sin generar calor en el soporte.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 36)" },
  { theme: 4, question: "¿Qué efecto característico en el borde de los caracteres impresos permite identificar un impreso en Flexografía?", options: ["El efecto 'squash' o de escurrido de tinta en los bordes", "El borde dentado en forma de dientes de sierra", "El borde en zig-zag producido por los hilos de la malla"], correct: 0, explanation: "La presión de la forma flexible (fotopolímero) provoca la expulsión de tinta hacia los bordes del carácter, creando el halo o efecto 'squash'.", source: "Manual Artes Gráficas 2 - Sistemas (Pág. 69)" },
  { theme: 4, question: "¿Qué ángulo de tramado en los alvéolos del rodillo Anilox se utiliza predominantemente para mejorar la transferencia en flexografía?", options: ["Ángulo de 60° (celdillas hexagonales)", "Ángulo de 45°", "Ángulo de 90°"], correct: 0, explanation: "El grabado a 60° permite la máxima densidad de celdillas por superficie y la mejor transferencia de tinta hacia la forma impresora.", source: "Manual Artes Gráficas 2 - Sistemas (Pág. 67)" },
  { theme: 4, question: "¿Por qué la Calcografía es el sistema de impresión por excelencia para documentos de seguridad y papel moneda?", options: ["Por el notable relieve de tinta perceptible al tacto y la complejidad técnica de su grabado", "Por la alta velocidad de tirada en soportes sintéticos", "Por la ausencia total de presión durante la transferencia"], correct: 0, explanation: "La calcografía deposita una gran capa de tinta que deja un relieve táctil inmitigable por otros sistemas.", source: "Manual Artes Gráficas 2 - Sistemas (Pág. 74)" },
  { theme: 4, question: "¿Qué característica identifica inequívocamente a los caracteres impresos mediante el sistema de Huecograbado?", options: ["Borde de los caracteres descompuesto en 'dientes de sierra' debido al tramado del cilindro", "Borde con halo 'squash' redondeado", "Relieve seco pronunciado en el reverso del papel"], correct: 0, explanation: "Debido a que todo el cilindro de huecograbado está grabado mediante celdillas, las líneas de los caracteres presentan un contorno serruchado.", source: "Manual Artes Gráficas 2 - Sistemas (Pág. 79)" },
  { theme: 5, question: "En los trabajos de plegado industrial, ¿cuáles son los dos principios mecánicos básicos empleados en las plegadoras?", options: ["Plegado por bolsa (parrilla) y plegado por cuchilla", "Plegado por succión y plegado por fricción térmica", "Plegado lineal y plegado rotativo de discos"], correct: 0, explanation: "Las plegadoras industriales utilizan bolsas (donde el papel apoya y abomba) y cuchillas mecánicas.", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 150)" },
  { theme: 6, question: "¿En qué consiste el proceso de 'Embuchado' dentro de la línea de postimpresión?", options: ["En insertar unos cuadernillos dentro de otros para encuadernar con grapa metálica (tipo revista)", "En colocar los cuadernillos uno encima de otro para cosido con hilo", "En aplicar colas puras PUR sobre el lomo del libro"], correct: 0, explanation: "El embuchado es el agrupamiento donde un cuadernillo se introduce dentro de otro (característico de la encuadernación con grapa).", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 152)" },
  { theme: 6, question: "La encuadernación de tapa dura, donde el cuerpo del libro se une a una cubierta rígida mediante guardas, se denomina:", options: ["Encuadernación en Cartoné", "Encuadernación en Rústica", "Encuadernación en Espiral"], correct: 0, explanation: "La encuadernación en Cartoné utiliza cartones rígidos forrados para formar la cubierta del libro.", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 154)" },
  { theme: 3, question: "¿Qué función cumple el secado por radiación Ultravioleta (UV) en las tintas de impresión?", options: ["Polimerización instantánea de los fotoiniciadores mediante la luz UV sin absorción de disolventes", "Evaporar el agua del papel", "Calentar la pila para acelerar el apilado"], correct: 0, explanation: "El curado UV seca la tinta de forma inmediata al reaccionar las resinas con los monómeros.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 34)" },
  { theme: 3, question: "¿Qué es el fenómeno de 'repinte' en la salida de una máquina de imprimir?", options: ["La transferencia no deseada de tinta fresca del anverso de un pliego al reverso del pliego superior en la pila", "La falta de tinta en las zonas de masa", "La rotura de la hoja en los pinzadores"], correct: 0, explanation: "Ocurre por falta de secado rápido o presión excesiva de la pila recién impresa.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 22)" },
  { theme: 2, question: "¿Qué instrumento de laboratorio se utiliza para medir la viscosidad cinemática de las tintas líquidas (flexografía/huecograbado)?", options: ["La Copa Ford o copa de viscosidad por eflujo", "El espectrofotómetro", "El durómetro Shore"], correct: 0, explanation: "Mide el tiempo en segundos que tarda un volumen de tinta en fluir por un orificio calibrado.", source: "Manual Artes Gráficas 2 - Tintas (Pág. 26)" },
  { theme: 4, question: "¿Qué tipo de rasqueta se utiliza en el sistema de huecograbado para retirar el exceso de tinta de la superficie lisa del cilindro?", options: ["Una rasqueta de acero de alta precisión con bisel fino o lamelar", "Una rasqueta de caucho blando", "Un rodillo de tela"], correct: 0, explanation: "La cuchilla de acero retira la tinta del área no grabada manteniendo la tinta dentro de las celdillas.", source: "Manual Artes Gráficas 2 - Sistemas (Pág. 78)" },
  { theme: 6, question: "¿Qué diferencia existe entre el cosido de cuadernillos con hilo de algodón (cosido ciego/hilo cosido) y el cosido con alambre?", options: ["El cosido con hilo une los cuadernillos entre sí asegurando máxima durabilidad; el alambre es para folletos sencillos", "El cosido con hilo es metálico y el de alambre es de plástico", "No hay diferencia técnica"], correct: 0, explanation: "El hilo vegetal o sintético garantiza la apertura total y longevidad en obras encuadernadas.", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 153)" },
  { theme: 6, question: "¿Qué es la adhesivación de lomos mediante cola PUR (Poliuretano Reactivo)?", options: ["Un tipo de encuadernación en rústica de alta resistencia física e inmune a cambios térmicos y disolventes", "Un pegamento de agua para papel periódico", "La cola empleada para pegar etiquetas en botellas"], correct: 0, explanation: "La cola PUR crea enlaces químicos cruzados ultra resistentes para papeles de gran gramaje o estucados.", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 155)" },
  { theme: 5, question: "En el hendido o hendidura de cartulinas antes del plegado, ¿cuál es el objetivo técnico?", options: ["Debilitar mecánicamente la zona de pliegue para evitar que el papel se agriete o rasgue al doblarlo", "Pegar los pliegos entre sí", "Perforar la hoja para arrancarla fácilmente"], correct: 0, explanation: "El hendido comprime la fibra en un canal permitiendo la flexión limpia sin fractura del estucado.", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 148)" },
  { theme: 4, question: "¿Qué es el proceso de Troquelado en postimpresión?", options: ["El corte de formas irregulares o complejas sobre el papel usando una fleje metálico afilado en un molde de madera", "El afilado de la cuchilla de la guillotina", "El encolado de la cubierta"], correct: 0, explanation: "Permite obtener envases, carpetas o ventanas con siluetas no rectilíneas.", source: "Manual Artes Gráficas 2 - Postimpresión (Pág. 160)" },
  
  {
    theme: 1,
    question: "¿Cuáles son las dos fases fundamentales que componen la estructura física de una tinta de impresión?",
    options: ["Fase dispersa (pigmentos y cargas) y Fase continua (vehículo o barniz)", "Fase ácida y Fase neutra", "Fase gaseosa y Fase sólida"],
    correct: 0,
    explanation: "La fase dispersa proporciona el color y cuerpo, mientras que la fase continua actúa como fluido transportador y ligante.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el 'Vehículo' o Barniz en la formulación de una tinta de impresión?",
    options: ["Transportar los pigmentos desde el tintero al soporte y fijarlos permanentemente tras el secado", "Disolver el papel durante la impresión", "Refrigerar los rodillos de la máquina"],
    correct: 0,
    explanation: "El vehículo determina la reología, el mecanismo de secado y la adherencia final sobre el soporte.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia principal existe entre un 'Pigmento' y un 'Colorante' disuelto?",
    options: ["El pigmento es insoluble en el vehículo y requiere dispersión; el colorante es soluble y transparente", "El pigmento es siempre líquido y el colorante sólido", "El pigmento no tiene color"],
    correct: 0,
    explanation: "Los pigmentos son partículas sólidas finas suspendidas que ofrecen alta opacidad y resistencia a la luz.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 3)"
  },
  {
    theme: 1,
    question: "¿Qué tipo de pigmento se utiliza habitualmente para formular la tinta de 'Negro de Cuatricromía'?",
    options: ["Negro de Humo (Carbon Black) derivado de la combustión incompleta de hidrocarburos", "Óxido de plomo rojo", "Sulfato de bario"],
    correct: 0,
    explanation: "El negro de humo aporta la máxima densidad óptica, absorción de luz y estabilidad química.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué pigmento inorgánico blanco de alto índice de refracción se emplea para dar máxima opacidad a las tintas blancas en flexografía y serigrafía?",
    options: ["Dióxido de Titanio (TiO2)", "Carbonato Cálcico", "Caolín lavable"],
    correct: 0,
    explanation: "El dióxido de titanio ofrece la mayor cobertura y poder de opacificación en soportes transparentes o oscuros.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 4)"
  },
  {
    theme: 1,
    question: "¿Qué son las 'Cargas' o Pigmentos Extensores (Blancos Fijos) en la formulación de la tinta?",
    options: ["Materiales inorgánicos transparentes usados para ajustar la intensidad colorimétrica, viscosidad y cuerpo sin alterar la tonalidad", "Pesos de plomo para el tintero", "Pigmentos que brillan en la oscuridad"],
    correct: 0,
    explanation: "Permiten regular la reología y matizar la concentración de pigmento caro manteniendo el volumen.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 5)"
  },
  {
    theme: 1,
    question: "¿Qué función cumplen las 'Resinas Sintéticas' (ej. resinas alquídicas, fenólicas, maleicas) en el vehículo de la tinta?",
    options: ["Aportar brillo, dureza, resistencia al roce y promover la cohesión del film de tinta", "Acelerar la evaporación del agua", "Reducir la viscosidad a cero"],
    correct: 0,
    explanation: "Las resinas se disuelven en los aceites o disolventes formando la película sólida aglutinante.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 6)"
  },
  {
    theme: 1,
    question: "¿Qué tipo de aceites vegetales secantes se emplean tradicionalmente en las tintas Offset de secado por oxidación?",
    options: ["Aceite de Linaza y Aceite de Tilo (Wood Oil / Tung)", "Aceite de Oliva y Aceite de Girasol comestible", "Aceite de motor mineral usador"],
    correct: 0,
    explanation: "Los aceites insaturados como el de linaza reaccionan con el oxígeno del aire polimerizando en una película sólida.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Aceite Mineral' de destilación del petróleo usado en vehículos de tintas offset?",
    options: ["Un hidrocarburo no secante usado como solvente de rápida penetración por capilaridad en papeles porosos", "Un lubricante para la guillotina", "Un aditivo para perfumar la tinta"],
    correct: 0,
    explanation: "Facilita el 'fijado rápido' (Quick-Set) al penetrar velozmente en los poros del papel dejando las resmas secas al tacto.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 7)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'Secantes Metálicos' (Secantes de Cobalto, Manganeso y Zirconio) en las tintas grasas?",
    options: ["Catalizadores químicos organometálicos que aceleran la reacción de oxidación y polimerización de los aceites secantes", "Trapos secos para limpiar el tintero", "Polvos de talco para absorción"],
    correct: 0,
    explanation: "El cobalto cataliza el secado en superficie (piel) y el manganeso/zirconio el secado en profundidad.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 8)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el 'Cobalto' como secante específico en la tinta offset?",
    options: ["Promover el secado superficial de la película en contacto con el aire de forma rápida", "Secar la cara interna tocando el papel", "Evitar el olor a pintura"],
    correct: 0,
    explanation: "Es el secante de superficie más activo, formando una película protectora inicial.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 8)"
  },
  {
    theme: 1,
    question: "¿Qué función cumple el 'Manganeso' como secante en la formulación?",
    options: ["Promover el secado uniforme en todo el espesor de la capa de tinta (secado en profundidad)", "Desvanecer los tonos amarillos", "Limpiar las planchas CTP"],
    correct: 0,
    explanation: "Asegura la reticulación completa de la masa de tinta evitando que quede tierna por debajo de la corteza.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 8)"
  },
  {
    theme: 1,
    question: "¿Qué peligro provoca la adición Excesiva de Secantes Metálicos en el tintero?",
    options: ["Secado prematuro en los rodillos (se 'cristaliza' el tintero) y fragilización del film de tinta que puede cuartearse", "La tinta pierde todo su color", "La máquina de imprimir acelera sola"],
    correct: 0,
    explanation: "Un exceso de secante destruye la elasticidad de la capa y causa secado sobre los rodillos distribuidores.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 9)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'Antisecantes' o Inhibidores de Oxidación?",
    options: ["Aditivos antioxidantes que evitan que la tinta forme 'piel' o se seque en el tintero durante las paradas de máquina", "Disolventes para diluir tinta seca", "Agua destilada de mojado"],
    correct: 0,
    explanation: "Se pulverizan sobre el tintero en paradas nocturnas para conservar la fluidez de la superficie.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 9)"
  },
  {
    theme: 1,
    question: "¿Qué función cumplen las 'Ceras' (Cera de Polietileno, Cera de PTFE/Teflón) añadidas a la tinta?",
    options: ["Aumentar la resistencia al roce, al rayado y mejorar el coeficiente de deslizamiento del impreso final", "Volver la tinta líquida como agua", "Eliminar la necesidad de planchas"],
    correct: 0,
    explanation: "Las ceras migran a la superficie del film seco creando una capa protectora contra el frote en guillotina y encuadernadora.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 10)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Tinta Vegetal' (Bio-Ink) para impresión Offset?",
    options: ["Aquella cuyo vehículo sustituye el 100% de los aceites minerales derivados del petróleo por aceites de origen vegetal renovable (soja, colza, lino)", "Tinta fabricada triturando hojas de árbol verdes", "Tinta que se come"],
    correct: 0,
    explanation: "Reduce la emisión de Compuestos Orgánicos Volátiles (COVs) y facilita el destintado en el reciclaje.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 11)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'COVs' (Compuestos Orgánicos Volátiles) en las tintas de impresión?",
    options: ["Disolventes orgánicos evaporables que contribuyen a la contaminación atmosférica y exigen control de emisiones", "Los colores de la tinta", "Las partículas de papel"],
    correct: 0,
    explanation: "Las normativas ambientales europeas obligan a limitar o capturar la emisión de COVs mediante incineradores o tintas sin solventes.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 11)"
  },
  {
    theme: 1,
    question: "¿Qué tipo de tintas emplean predominantemente las máquinas de 'Flexografía' para impresión de empaque alimentario directo?",
    options: ["Tintas al Agua (Water-based inks) o tintas de curado UV", "Tintas grasas minerales al petróleo", "Tintas con plomo e hidrocarburos pesados"],
    correct: 0,
    explanation: "Las tintas al agua no transmiten olores ni migraciones tóxicas al envase de alimentos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 12)"
  },
  {
    theme: 1,
    question: "¿Qué componente químico actúa como solvente volátil principal en las tintas flexográficas base solvente?",
    options: ["Alcoholes (Etanol, Isopropanol) y Acetatos (Acetato de Etilo)", "Tolueno y Benceno puros", "Aceite de oliva"],
    correct: 0,
    explanation: "Los alcoholes y acetatos se evaporan velozmente bajo los túneles de secado de aire caliente sin atacar el fotopolímero.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 12)"
  },
  {
    theme: 1,
    question: "¿Qué tipo de disolvente histórico de Huecograbado altamente tóxico ha sido progresivamente sustituido por acetatos en la UE?",
    options: ["Tolueno", "Agua destilada", "Aceite de linaza"],
    correct: 0,
    explanation: "El tolueno exige plantas de recuperación por carbón activo para evitar riesgos laborales y medioambientales.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 13)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'Fotoiniciadores' en la composición de una Tinta UV?",
    options: ["Compuestos químicos que absorben la luz ultravioleta y generan radicales libres que inician la polimerización instantánea de los monómeros", "Filtros para cámaras fotográficas", "Pigmentos que cambian de color con el sol"],
    correct: 0,
    explanation: "Son los detonantes químicos del secado UV, transformando el líquido en un plástico sólido duro en milisegundos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 14)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'Monómeros y Oligómeros' presentes en el vehículo de una tinta de Curado UV?",
    options: ["Resinas y reactivos líquidos de bajo peso molecular que se unen entre sí formando la red polimérica sólida tras la activación UV", "Solventes evaporables por chimenea", "Cargas de talco sintético"],
    correct: 0,
    explanation: "Sustituyen totalmente a los disolventes volátiles: no hay evaporación (100% sólidos reaccionantes).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 14)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre el secado UV por Lámparas de Mercurio (Medio Presión) y el secado UV-LED?",
    options: ["El UV-LED emite en una longitud de onda única fría (ej. 385-395 nm) sin generar ozono ni calor IR extremo en el soporte", "El UV-LED utiliza fuego directo", "El mercurio gasta un 90% menos de energía que el LED"],
    correct: 0,
    explanation: "Las lámparas LED no deforman plásticos sensibles al calor y reducen drásticamente el consumo eléctrico.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 15)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Inhibición por Oxígeno' en el secado de tintas UV de radicales libres?",
    options: ["El bloqueo superficial del curado provocado por el oxígeno del aire que reacciona con los radicales libres dejando la película pegajosa", "El exceso de viento en el taller", "La falta de tinta en el tintero"],
    correct: 0,
    explanation: "Se combate aumentando la potencia de radiación, con fotoiniciadores específicos o mediante curado bajo atmósfera de nitrógeno.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 15)"
  },
  {
    theme: 1,
    question: "¿Qué son las 'Tintas Electrón-Beam' (EB - Curado por Haz de Electrones)?",
    options: ["Tintas que reticulan mediante un bombardeo de electrones de alta energía sin necesidad de incluir fotoiniciadores en la fórmula", "Tintas para circuitos impresos de móviles", "Tintas alimentadas con pila de botón"],
    correct: 0,
    explanation: "Al no llevar fotoiniciadores, son ideales para envasado alimentario sin riesgo de olor o migración.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 16)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Fuerza Colorante' o Poder Tintóreo de un pigmento?",
    options: ["La capacidad de un pigmento de impartir su color a un sistema cuando se mezcla con un blanco estándar", "La velocidad de secado", "La resistencia a la guillotina"],
    correct: 0,
    explanation: "A mayor fuerza colorante, menor cantidad de pigmento en masa se requiere para alcanzar la densidad óptica objetivo.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 17)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Resistencia Química' de una tinta seca (al álcali, al jabón, a los disolventes)?",
    options: ["La capacidad del pigmento y la resina de no sufrir alteraciones de color o sangrado al entrar en contacto con productos químicos", "La resistencia al agua del mar", "El tiempo que tarda en quemarse"],
    correct: 0,
    explanation: "Crítico en etiquetas de detergentes, jabones, bebidas alcalinas y envoltorios de cosmética.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 18)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Escala de Resistencia a los Álcalis' en tintas de empaque?",
    options: ["Una prueba estandarizada que expone el impreso a una solución de hidróxido sódico comprobando si el pigmento vira o se disuelve", "Un ensayo de temperatura", "Un medidor de espesor"],
    correct: 0,
    explanation: "Los envases de jabón requieren pigmentos insensibles a medios alcalinos (pH > 10).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 18)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Metálica' (Oro, Plata, Bronce)?",
    options: ["Una tinta formulada con micropartículas o escamas finas de aluminio (plata) o latón/cobre (oro) suspendidas en el vehículo", "Pintura de carrocería de coche", "Tinta cargada con virutas de hierro grueso"],
    correct: 0,
    explanation: "Las escamas flotan (leafing) o se distribuyen (non-leafing) reflejando la luz como un espejo metálico.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 19)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre una tinta metálica 'Leafing' y 'Non-Leafing'?",
    options: ["'Leafing' hace que las escamas floten en la superficie dando máximo brillo pero menor resistencia al roce; 'Non-Leafing' las distribuye internamente", "Leafing es de oro y Non-leafing es de cobre", "Leafing se seca con aire y Non-leafing con agua"],
    correct: 0,
    explanation: "Las tintas leafing ofrecen espejo reluciente pero requieren sobrebarnizado para que no se desprendan al frotar.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 19)"
  },
  {
    theme: 1,
    question: "¿Por qué las tintas metálicas sufren mayor tendencia al 'Repinte' y desprendimiento si se cortan en guillotina recién impresas?",
    options: ["Porque las escamas metálicas impiden la absorción rápida y reducen la cohesión interna del vehículo hasta el secado completo", "Porque conducen la electricidad del pisón", "Porque pesan más"],
    correct: 0,
    explanation: "Exigen tiempos prolongados de curado o aplicación de barniz de protección antes del manipulado.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 19)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Fluorescente'?",
    options: ["Una tinta cuyo pigmento absorbe radiación UV invisible y la reemite instantáneamente en una longitud de onda visible de alta luminosidad", "Una tinta con luz led interna", "Tinta invisible que nunca se ve"],
    correct: 0,
    explanation: "Aporta tonos de alto impacto (Neón) pero presenta una bajísima resistencia a la luz solar (se decoloran rápido).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 20)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Termocrómica'?",
    options: ["Una tinta formulada con pigmentos encapsulados que cambian de color o se vuelven transparentes al alcanzar una determinada temperatura", "Tinta que se quema al hervir", "Tinta usada en estufas"],
    correct: 0,
    explanation: "Utilizada en etiquetas de latas de cerveza (indica si está fría) o elementos de seguridad contra la falsificación.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 20)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Fotocrómica'?",
    options: ["Una tinta que reacciona modificando su estructura molecular y cambiando de tono al recibir la luz solar directa o luz UV", "Una tinta para revelar fotos de carrete", "Tinta para monitores"],
    correct: 0,
    explanation: "El color aparece o se intensifica en exteriores bajo el sol y vuelve a ser transparente en interiores.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 20)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Fosforescente' frente a la fluorescente?",
    options: ["Una tinta capaz de almacenar energía lumínica y continuar emitiendo luz visible en la oscuridad durante minutos u horas", "Una tinta que huele a fósforo", "Una tinta para encender cerillas"],
    correct: 0,
    explanation: "A diferencia de la fluorescente (que sólo emite mientras recibe UV), la fosforescente mantiene la luminiscencia en la penumbra.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 21)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta IR / Infrarroja' (Tinta de Seguridad)?",
    options: ["Una tinta transparente al ojo humano que absorbe o refleja la luz en el espectro infrarrojo siendo leída por sensores ópticos", "Tinta que calienta el papel", "Tinta de color rojo brillante"],
    correct: 0,
    explanation: "Elemento de seguridad bancaria en billetes y pasaportes para lectura automatizada por máquinas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 21)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta OVI' (Optically Variable Ink / Tinta Ópticamente Variable)?",
    options: ["Una tinta que cambia bruscamente de color (ej. de verde a dorado) según el ángulo de visión o inclinación del impreso", "Tinta de baja calidad que varía sola", "Tinta para gafas graduadas"],
    correct: 0,
    explanation: "Contiene copos interferenciales multicapa muy caros usados en billetes de Euro para evitar el fotocopiado.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 22)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Hidrocrómica'?",
    options: ["Una tinta que altera su opacidad o tono al entrar en contacto directo con el agua o humedad", "Tinta disuelta en el mar", "Tinta para barcos de madera"],
    correct: 0,
    explanation: "Se vuelve transparente mojada revelando un mensaje oculto debajo; usada en juegos y controles de agua.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 22)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Tinta Conductiva' (Printed Electronics)?",
    options: ["Una tinta cargada de partículas de plata, grafeno o cobre que permite imprimir circuitos eléctricos funcionales sobre papel o plástico", "Tinta que da calambres al tocarla", "Tinta para cables gordos"],
    correct: 0,
    explanation: "Permite la fabricación masiva de etiquetas RFID, antenas planas y teclados de membrana flexibles.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 23)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Molienda de la Tinta' en la planta de fabricación?",
    options: ["El proceso de refinado mediante molinos de tres rodillos o molinos de microesferas para dispersar y aglomerar los pigmentos a escala micra", "Triturar el papel roto", "Moler el trigo en el molino"],
    correct: 0,
    explanation: "Garantiza que el tamaño de partícula del pigmento sea inferior a 2-5 micras evitando el rayado de planchas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 24)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Grindómetro' (Finómetro / Grind Gauge Hegman)?",
    options: ["Un bloque de acero con un canal de profundidad graduada en micras usado para medir la finura de molienda y detectar grumos", "Un medidor de velocidad de la guillotina", "Un termómetro para el tintero"],
    correct: 0,
    explanation: "Se arrastra la tinta con una rasqueta y se observa el punto en micras donde aparecen las primeras rayas o partículas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 24)"
  },
  {
    theme: 1,
    question: "¿Por qué un tamaño de partícula de pigmento Excesivo provoca la 'Cristalización o Desgaste' de la plancha offset?",
    options: ["Porque las partículas gruesas actúan como un abrasivo continuo contra la capa fotosensible de la plancha", "Porque queman el motor del tintero", "Porque evaporan la solución de mojado"],
    correct: 0,
    explanation: "Una molienda defectuosa destruye la plancha en pocas miles de impresiones por abrasión mecánica.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 24)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Humectabilidad' de un pigmento por el vehículo?",
    options: ["La afinidad química que permite al vehículo envolver totalmente cada partícula sólida desplazando el aire y la humedad", "La cantidad de agua que absorbe el pigmento", "El secado de la tinta al sol"],
    correct: 0,
    explanation: "Una mala humectación provoca la reaglomeración de los pigmentos y el sedimento de la tinta.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 25)"
  },
  {
    theme: 1,
    question: "¿Qué son los 'Dispersantes y Tensioactivos' añadidos en la molienda?",
    options: ["Aditivos que reducen la tensión interfacial estabilizando la suspensión de pigmentos para evitar que se junten (floculación)", "Jabones para lavar la máquina", "Disolventes para diluir en agua"],
    correct: 0,
    explanation: "Mantienen la estabilidad coloidal del sistema impidiendo que la tinta pierda intensidad o fluidez al almacenarse.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 25)"
  },
  {
    theme: 1,
    question: "¿Qué es el fenómeno de la 'Floculación' en una tinta almacenada?",
    options: ["La agrupación o aglomeración reversible de las partículas de pigmento dispersas formando grumos internos", "La evaporación de la resina", "El cambio de color de azul a rojo"],
    correct: 0,
    explanation: "Provoca pérdida de brillo, bajada de densidad y problemas de fluidez en la máquina.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 25)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Sedimentación' o Pardeamiento de tintas líquidas (flexo/hueco)?",
    options: ["El posado o decantación del pigmento pesado en el fondo del recipiente formando un poso duro difícil de redispersar", "La evaporación del solvente", "El secado del rodillo anilox"],
    correct: 0,
    explanation: "Exige el agitado continuo o recirculación neumática en las cubas de tinta flexo.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 26)"
  },
  {
    theme: 1,
    question: "¿Qué representa el 'Grosor de Película de Tinta' (Ink Film Thickness) húmeda depositada en Offset?",
    options: ["Una capa extremadamente fina de entre 0,5 a 1,5 micras (μm) de espesor", "5 milímetros", "100 micras"],
    correct: 0,
    explanation: "El offset se caracteriza por depositar la película de tinta más fina de todos los sistemas tradicionales.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 27)"
  },
  {
    theme: 1,
    question: "¿Qué espesor medio de película húmeda deposita el sistema de 'Flexografía'?",
    options: ["Entre 2 y 6 micras (μm)", "0,1 micras", "50 micras"],
    correct: 0,
    explanation: "Regulado directamente por la profundidad y lineatura de celdilla del rodillo anilox.",
    source: "Manual Artes Gráficas 1 y 2 - Tintas (Pág. 27)"
  },
  {
    theme: 1,
    question: "¿Qué espesor medio de película de tinta deposita la 'Serigrafía' convencional?",
    options: ["Entre 10 y 100 micras (μm) o más", "0,5 micras", "1 micra"],
    correct: 0,
    explanation: "La serigrafía aporta la capa de tinta más gruesa con diferencia, otorgando alto relieve, opacidad y durabilidad.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 27)"
  },
  {
    theme: 1,
    question: "¿Qué representa el valor 'Transparencia / Opacidad' de una tinta de cuatricromía?",
    options: ["Las tintas CMYK deben ser absolutamente Transparentes para permitir la mezcla sustractiva de color por superposición de capas", "Las tintas CMYK deben ser opacas como pintura de pared", "Cian debe ser opaco y Amarillo transparente"],
    correct: 0,
    explanation: "La transparencia es indispensable para que la luz atraviese las capas de tinta, refleje en el papel blanco y vuelva al ojo.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 28)"
  },
  {
    theme: 1,
    question: "Si la tinta Magenta de cuatricromía fuera OPACA en lugar de transparente, ¿qué ocurriría al imprimirla sobre el Cian?",
    options: ["Taparía totalmente el Cian inferior impidiendo la formación del color Violeta/Azul resultante", "El color se volvería blanco", "Aumentaría el brillo"],
    correct: 0,
    explanation: "La opacidad destruye el principio de síntesis sustractiva de la cuatricromía.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 28)"
  },
  {
    theme: 1,
    question: "¿Cuándo se requiere obligatoriamente una Tinta OPACA en lugar de transparente?",
    options: ["Al imprimir sobre papeles de color oscuro, cartón Kraft pardo o láminas plásticas transparentes (como fondeado)", "En impresiones de libros de texto en papel blanco", "Para imprimir marcapáginas transparentes"],
    correct: 0,
    explanation: "Un fondo blanco opaco aísla el diseño del color de fondo del soporte.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 28)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Fondeado Blanco' (White Underprint) en la impresión de etiquetas plásticas transparentes?",
    options: ["Una primera capa de tinta blanca opaca (generalmente flexo o serigrafía) sobre la que se imprimen encima los colores CMYK", "Pintar el dorso del paquete", "Lavar la botella con lejía"],
    correct: 0,
    explanation: "Permite que las imágenes mantengan su vivo color sin volverse invisibles por la transparencia del envase.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 29)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Tiro' (Tack) de la tinta de impresión?",
    options: ["La pegajosidad o resistencia interna de la película de tinta a separarse o dividirse mecánicamente entre dos superficies en movimiento", "La velocidad de disparo de la tinta", "La dureza de la botella"],
    correct: 0,
    explanation: "Es la fuerza adhesiva/cohesiva ejercida al abrirse la capa de tinta entre el caucho y el papel.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 30)"
  },
  {
    theme: 1,
    question: "¿Con qué instrumento de laboratorio se mide con precisión el Tack o Tiro de la tinta a una temperatura controlada?",
    options: ["El Tackmetro (Inkometer / Tackoscope)", "El viscosímetro Ford", "El densitómetro de barrido"],
    correct: 0,
    explanation: "Mide el par de torsión o fuerza de cizallamiento ejercida sobre un rodillo dinamométrico giratorio a velocidad fija.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 30)"
  },
  {
    theme: 1,
    question: "En una máquina Offset multicolor (ej. 4 colores), ¿cuál debe ser la gradación del Tack entre los cuerpos impresores?",
    options: ["El Tack debe ir decreciendo del primer al último cuerpo (Tack T1 > T2 > T3 > T4) para asegurar el atrapado en húmedo", "El Tack debe aumentar en cada cuerpo", "Todas las tintas deben tener exactamente el mismo Tack"],
    correct: 0,
    explanation: "Si una tinta posterior tiene más Tack que la anterior, arrancará la tinta recién depositada de la hoja (trapping inverso).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 30)"
  },
  {
    theme: 1,
    question: "Si la primera tinta (ej. Negro) tiene un Tack de 14, ¿qué Tack aproximado debería tener la cuarta tinta (ej. Amarillo) en la secuencia?",
    options: ["Un Tack menor, por ejemplo Tack 9 o 10", "Un Tack mayor de 20", "Tack 0"],
    correct: 0,
    explanation: "La secuencia descendente garantiza que cada capa fresca se adhiera sin levantar las capas precedentes.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 30)"
  },
  {
    theme: 1,
    question: "¿Qué ocurre si el Tack de la tinta es Demasiado Alto para el papel que se está imprimiendo?",
    options: ["Provoca el 'Arrancado' (Picking) de las fibras o del estuco del papel y puede rasgar la hoja en la salida del cilindro", "La tinta cae al suelo", "El papel se vuelve transparente"],
    correct: 0,
    explanation: "La fuerza de cohesión de la tinta supera la resistencia estructural de la cara del papel.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 31)"
  },
  {
    theme: 1,
    question: "¿Cómo se reduce el Tack de una tinta grasa en el taller si resulta excesivamente tiroso?",
    options: ["Añadiendo una pequeña proporción de gel suavizante, pasta reductora de tiro o aceite fluido", "Añadiendo agua de grifo", "Mezclando con secante de cobalto"],
    correct: 0,
    explanation: "Los reductores diluyen la red de resinas reduciendo la fuerza de pegado sin destruir la viscosidad base.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 31)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Viscosidad' de un fluido o tinta?",
    options: ["La resistencia interna que ofrece un fluido a fluir o deformarse bajo la aplicación de una fuerza de cizalla", "El peso por litro de la tinta", "El brillo de la muestra"],
    correct: 0,
    explanation: "Define si una tinta es pastosa (alta viscosidad como offset) o líquida (baja viscosidad como flexo/hueco).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 32)"
  },
  {
    theme: 1,
    question: "¿Con qué instrumento se mide rutinariamente la viscosidad de las tintas líquidas (flexografía y huecograbado) a pie de máquina?",
    options: ["Copa de Viscosidad (Copa Ford / Copa Zahn / Copa ISO)", "Goniometro", "Micrómetro de carátula"],
    correct: 0,
    explanation: "Mide el tiempo de flujo en segundos que tarda en vaciarse un volumen fijo de tinta a través de un orificio calibrado.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 32)"
  },
  {
    theme: 1,
    question: "Si la viscosidad de una tinta flexográfica se mide en '22 segundos Copa Ford nº 4', ¿qué ocurre si el tiempo sube a 35 segundos?",
    options: ["La tinta se ha vuelto demasiado espesa por evaporación de solvente y depositará más capa provocando un ganancia de punto excesiva", "La tinta se ha vuelto tan líquida como agua", "El color desaparece"],
    correct: 0,
    explanation: "La evaporación del solvente concentra la tinta; exige añadir solvente/agua para devolverla a los 22 segundos ideales.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 32)"
  },
  {
    theme: 1,
    question: "¿Qué es el comportamiento 'Tixotrópico' de la tinta Offset?",
    options: ["La propiedad por la cual la tinta disminuye su viscosidad al ser agitada mecánicamente (en el tintero/rodillos) y recupera su consistencia en reposo", "La capacidad de flotar en el agua", "El endurecimiento con el frío"],
    correct: 0,
    explanation: "La tixotropía permite que la tinta sea fluida durante el batido en máquina pero no chorree ni se desparrame en reposo.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 33)"
  },
  {
    theme: 1,
    question: "¿Qué es el comportamiento 'Seudoplástico' de las tintas?",
    options: ["El flujo en el que la viscosidad disminuye inmediatamente al aumentar la velocidad de cizalla sin retardo temporal", "Una tinta que huele a plástico", "Un fallo de la plancha CTP"],
    correct: 0,
    explanation: "Característico de los fluidos poliméricos donde las moléculas se orientan a alta velocidad facilitando el paso por el rodillo.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 33)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Tiro-Viscosidad' en el comportamiento dinámico del tintero?",
    options: ["El equilibrio entre la pegajosidad adhesiva (tack) y la fluidez del flujo (viscosidad) que determina el arrastre del rodillo tomador", "La temperatura de la bomba", "El ángulo de la racleta"],
    correct: 0,
    explanation: "Un correcto equilibrio evita que la tinta 'haga hilos' o salga despedida en forma de nebulosa (misting).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 34)"
  },
  {
    theme: 1,
    question: "¿Qué es el fenómeno de 'Nebulización / Volado de Tinta' (Ink Misting)?",
    options: ["La formación de un fino aerosol o niebla de gotitas de tinta en el aire al dividirse rápidamente la película entre rodillos a gran velocidad", "La niebla matutina del taller", "El polvo de papel que flota"],
    correct: 0,
    explanation: "Mancha la máquina, contamina el aire y ocurre cuando la tinta tiene poca cohesión interna o viscoelasticidad errónea.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 34)"
  },
  {
    theme: 1,
    question: "¿Qué representa el 'Límite Elástico' (Yield Value) de una tinta pastosa?",
    options: ["La fuerza de cizalla mínima requerida para vencer la estructura interna en reposo y poner la tinta en movimiento", "El estiramiento máximo del papel", "El límite de velocidad de la máquina"],
    correct: 0,
    explanation: "Si el Yield Value es excesivo, la tinta se queda rígida en el tintero sin bajar hacia el rodillo conductor ('tintero muerto').",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 35)"
  },
  {
    theme: 1,
    question: "¿Qué síntoma presenta en máquina una tinta con un Yield Value demasiado elevado (Tintero Muerto)?",
    options: ["La tinta no fluye contra el rodillo del tintero dejando de alimentar a los rodillos y aclarando paulatinamente el impreso", "La tinta sale desbordada por los lados", "El tintero se calienta a 100°C"],
    correct: 0,
    explanation: "Obliga al operador a remover manualmente la tinta de forma periódica con la espátula o instalar removedores automáticos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 35)"
  },
  {
    theme: 1,
    question: "¿Qué representa la 'Reticulación' (Cross-linking) durante el curado de una tinta?",
    options: ["El entrecruzamiento tridimensional de las cadenas poliméricas formando una red rígida e insoluble", "El rallado de la forma impresora", "El paso de líquido a gas"],
    correct: 0,
    explanation: "Es la reacción química responsable de la conversión final del vehículo líquido en un plástico protector sólido.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 36)"
  },
  
  {
    theme: 2,
    question: "¿Cuáles son los dos mecanismos simultáneos de secado de las tintas Offset convencionales tipo 'Quick-Set'?",
    options: ["Secado por Penetración/Filtración (Fijado rápido) seguido de Secado por Oxidopolimerización (Secado definitivo)", "Secado por congelación y Secado por llama", "Secado por radiación gamma y evaporación de agua"],
    correct: 0,
    explanation: "Los aceites minerales penetran rápido en los poros fijando la masa, y los aceites vegetales secan con el oxígeno en las horas siguientes.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 38)"
  },
  {
    theme: 2,
    question: "¿En qué consiste la fase de 'Fijado Rápido' (Set-off resistance) de una tinta Quick-Set?",
    options: ["La rápida separación por capilaridad del aceite mineral fluido hacia el papel, dejando en superficie las resinas y aceites secantes viscosos", "El secado de la tinta con un secador de pelo", "El pegado de las hojas entre sí"],
    correct: 0,
    explanation: "Permite apilar los pliegos en la salida de la máquina sin que el peso del paquete provoque repinte en minutos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 38)"
  },
  {
    theme: 2,
    question: "¿Cuánto tiempo suele tardar la fase completa de 'Oxidopolimerización' (Secado total) de una tinta offset grasa?",
    options: ["Entre 2 y 12 horas (dependiendo del tipo de papel, secantes, humedad y temperatura)", "0,1 segundos", "30 días exactos"],
    correct: 0,
    explanation: "Es un proceso químico progresivo de absorción de oxígeno del ambiente que consolida la película definitiva.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 38)"
  },
  {
    theme: 2,
    question: "¿Cómo afecta una Alta Humedad Relativa ambiental (> 70% HR) en el taller al tiempo de secado por oxidación de la tinta?",
    options: ["Retarda sustancialmente el secado por oxidación pudiendo duplicar o triplicar el tiempo necesario", "Acelera el secado al instante", "No influye en absoluto"],
    correct: 0,
    explanation: "El exceso de humedad atrapado en la pila de papel dificulta la penetración del oxígeno necesaria para polimerizar.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 39)"
  },
  {
    theme: 2,
    question: "¿Cómo afecta un pH extremadamente Ácido del papel (< 5) al secado de la tinta offset?",
    options: ["Inactiva químicamente a los secantes metálicos (cobalto/manganeso) bloqueando o retrasando gravemente el secado", "Volverá la tinta ultra brillante", "Hará que la tinta se seque en 5 segundos"],
    correct: 0,
    explanation: "La acidez destruye los jabones metálicos secantes impidiendo la reacción de oxidación del aceite vegetal.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 39)"
  },
  {
    theme: 2,
    question: "¿Qué es el mecanismo de secado por 'Evaporación' (Secado Físico)?",
    options: ["La eliminación del solvente volátil del vehículo por paso de aire o calor dejando únicamente el pigmento y la resina sólida", "La congelación del agua", "La absorción por esponja"],
    correct: 0,
    explanation: "Típico de la flexografía, huecograbado y serigrafía de base solvente/agua.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 40)"
  },
  {
    theme: 2,
    question: "¿Qué ocurre en el túnel de secado de aire caliente de una máquina flexográfica si la velocidad del aire es muy alta pero la temperatura insuficiente?",
    options: ["Se forma una 'piel' seca en la superficie reteniendo solvente en el interior (atrapamiento de solvente / solvent retention)", "El papel se quema", "La tinta se vuelve agua"],
    correct: 0,
    explanation: "El solvente atrapado bajo la corteza provocará mal olor, pegado de bobina (blocking) y falta de adherencia.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 40)"
  },
  {
    theme: 2,
    question: "¿Qué es el defecto de 'Blocking' o Bloqueo en bobinas impresas o pilas de pliegos?",
    options: ["La adherencia o pegado irreversible entre la cara impresa y el reverso de la hoja adyacente formando un bloque macizo", "El freno de la guillotina", "El corte descalibrado de la escuadra"],
    correct: 0,
    explanation: "Ocurre por secado incompleto, evaporación deficiente de solventes, presión excesiva o falta de polvo antirrepinte.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 41)"
  },
  {
    theme: 2,
    question: "¿Qué mecanismo de secado utilizan las tintas Heatset en las grandes rotativas offset de prensa y revistas?",
    options: ["Evaporación de aceites minerales de alto punto de ebullición en un horno de aire caliente (200 °C) seguido de enfriamiento en rodillos", "Curado por haz de luz roja", "Secado por congelación líquida"],
    correct: 0,
    explanation: "El papel pasa a gran velocidad por un horno que evapora los aceites y luego por rodillos refrigeradores (chill rolls) que solidifican las resinas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 42)"
  },
  {
    theme: 2,
    question: "¿Cuál es la función de los 'Rodillos Refrigeradores' (Chill Rolls) a la salida del horno de secado Heatset?",
    options: ["Enfriar bruscamente la tira de papel caliente provocando el choque térmico que solidifica las resinas endureciendo la tinta", "Lavar el papel con agua helada", "Cortar la viruta"],
    correct: 0,
    explanation: "Sin el enfriamiento rápido, las resinas derretidas permanecerían pegajosas arruinando el plegado en línea.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 42)"
  },
  {
    theme: 2,
    question: "¿Qué es el secado Coldset utilizado en las rotativas de periódico diario?",
    options: ["Secado exclusivo por Penetración / Absorción del vehículo de aceite mineral fino en la masa porosa del papel prensa sin aportar calor", "Secado introduciendo el papel en una nevera", "Secado por congelación con nitrógeno"],
    correct: 0,
    explanation: "Las tintas de periódico no 'secan' por polimerización, sino que son absorbidas por las fibras de celulosa (por eso ensucian los dedos al leer).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 43)"
  },
  {
    theme: 2,
    question: "¿Por qué el papel de periódico mancha las manos si se frota enérgicamente?",
    options: ["Porque al secar solo por penetración (Coldset), la capa superficial mantiene aceites y pigmento no polimerizado fijados mecánicamente", "Porque se imprime con carbón de leña suelto", "Porque el papel es ácido"],
    correct: 0,
    explanation: "Al no llevar aceites secantes ni curado térmico, el pigmento puede desprenderse por fricción fuerte.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 43)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Filtración' (Filtration) del vehículo en soportes estucados?",
    options: ["El fenómeno donde la capa mineral del estuco actúa como filtro reteniendo las moléculas grandes de resina en superficie y absorbiendo los aceites finos", "Filtrar la tinta con una manga de tela", "Limpiar la cubeta con filtro de papel"],
    correct: 0,
    explanation: "Es la clave para lograr el alto brillo en papeles estucados sin que la tinta se hunda.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 44)"
  },
  {
    theme: 2,
    question: "¿Qué es el problema del 'Muleteo / Re-emulsificación' en el tintero offset?",
    options: ["La acumulación excesiva de solución de mojado retenida en el tintero que lava la tinta y produce rayas blancas en la masa", "La rotura de los dientes del piñón", "El desgaste de la regleta sintética"],
    correct: 0,
    explanation: "Ocurre cuando el balance agua-tinta se descompone y el agua invade la batería de entintado.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 45)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Tensión Superficial' (medida en mN/m o dinas/cm) de un líquido fluido de tinta o solución de mojado?",
    options: ["La fuerza de cohesión en la superficie de un líquido que determina su capacidad de mojar o extenderse sobre un soporte sólido", "La presión de la bomba de agua", "La fuerza de tracción del papel"],
    correct: 0,
    explanation: "Para que una tinta o solución moje un soporte, la energía libre de superficie del soporte debe ser mayor que la tensión superficial del líquido.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 46)"
  },
  {
    theme: 2,
    question: "¿Cuál es el valor de Tensión Superficial mínimo (Dinas/cm) exigido en un film plástico (ej. Polipropileno) para ser imprimible?",
    options: ["Mínimo 38 a 42 Dinas/cm", "10 Dinas/cm", "100 Dinas/cm"],
    correct: 0,
    explanation: "Soportes plásticos con menos de 38 dinas/cm rechazan la tinta provocando gotas y falta total de adherencia.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 46)"
  },
  {
    theme: 2,
    question: "¿En qué consiste el 'Tratamiento Corona' aplicado a películas plásticas antes de imprimir?",
    options: ["Someter la superficie del plástico a una descarga eléctrica de alta tensión que ioniza el aire y crea grupos polares aumentando la energía superficial", "Lavar el plástico con jabón líquido", "Calentar el plástico con un soplete"],
    correct: 0,
    explanation: "Eleva el nivel de dinas del plástico (de 32 a 44 dinas/cm) permitiendo el anclaje de tintas y adhesivos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 47)"
  },
  {
    theme: 2,
    question: "¿Por qué el Tratamiento Corona 'Decae o Caduca' con el tiempo de almacenamiento de la bobina de plástico?",
    options: ["Porque las moléculas ionizadas migration hacia el interior y los aditivos de deslizamiento del plástico afloran a la superficie", "Porque el plástico se pudre", "Porque la luz apaga la electricidad"],
    correct: 0,
    explanation: "Exige verificar el nivel de dinas con rotuladores de prueba (Dyne Pens) antes de montar la bobina en máquina.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 47)"
  },
  {
    theme: 2,
    question: "¿Qué son los 'Rotuladores de Dinas' (Dyne Test Pens)?",
    options: ["Rotuladores calibrados con líquidos de tensión superficial conocida (ej. 38, 40, 42 dinas) para comprobar si el trazo se mantiene o se contrae en gotas", "Rotuladores para retocar rayas en papel", "Marcadores de color para guillotina"],
    correct: 0,
    explanation: "Si el trazo de 40 dinas no se rompe en 2 segundos, el plástico tiene al menos 40 dinas de energía superficial.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 47)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Prueba de la Cinta Adhesiva' (Cross-Hatch Tape Test / ASTM D3359) para la adherencia de la tinta?",
    options: ["Efectuar un enrejado de cortes en cruz en la tinta seca, aplicar cinta adhesiva normalizada, tirar con fuerza y evaluar el porcentaje de tinta desprendida", "Pegar la bobina con celo", "Medir la anchura de la cinta"],
    correct: 0,
    explanation: "Es la prueba estándar de control de calidad para validar el anclaje físico de la tinta sobre plásticos o metales.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 48)"
  },
  {
    theme: 2,
    question: "¿Qué representa el grado '0B / 5B' en el resultado del ensayo de adherencia por corte enrejado?",
    options: ["5B representa adherencia perfecta (0% desprendimiento); 0B representa fallo total (> 65% desprendimiento)", "5B es fallo total y 0B perfecto", "Ambos significan que la tinta está húmeda"],
    correct: 0,
    explanation: "Clasificación estandarizada según la superficie de cuadritos que quedan adheridos tras retirar la cinta.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 48)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Resistómetro de Frote / Rub Tester' (Sutherland Rub Tester)?",
    options: ["Una máquina con un bloque ponderado de peso que frota rítmicamente dos muestras impresas cara a cara para evaluar la resistencia al roce mecánico", "Un medidor de temperatura de la fricción", "Una máquina para lijar la mesa de la guillotina"],
    correct: 0,
    explanation: "Simula el transporte, manipulación y refilado en guillotina para comprobar que la tinta no se desgasta ni mancha.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 49)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Espectro Visible' de la luz en nanómetros (nm)?",
    options: ["La estrecha franja de radiación electromagnética perceptible por el ojo humano comprendida entre los 380 nm (violeta) y los 780 nm (rojo)", "Entre 10 nm y 50 nm", "Entre 1000 nm y 5000 nm"],
    correct: 0,
    explanation: "Define el campo de trabajo completo de la colorimetría gráfica y el ajuste de tintas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 50)"
  },
  {
    theme: 2,
    question: "En la síntesis sustractiva, ¿qué colores primarios se obtienen al mezclar partes iguales de Cyan + Magenta + Amarillo al 100%?",
    options: ["Un tono Marrón Oscuro / Negro sucio (que se refuerza con la tinta Negra K)", "Blanco Puro", "Verde brillante"],
    correct: 0,
    explanation: "La mezcla de pigmentos resta longitudes de onda reflejadas tendiendo hacia la absorción total (negro).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 51)"
  },
  {
    theme: 2,
    question: "En la síntesis aditiva de la luz, ¿qué color resulta de la mezcla de luces Roja + Verde + Azul (RGB) a máxima intensidad?",
    options: ["Luz Blanca Pura", "Negro absoluto", "Gris oscuro"],
    correct: 0,
    explanation: "La adición de todas las longitudes de onda del espectro visible reconstituye la luz blanca.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 51)"
  },
  {
    theme: 2,
    question: "¿Cuál es el color complementario exacto del Cian en el círculo cromático?",
    options: ["Rojo", "Verde", "Azul"],
    correct: 0,
    explanation: "El Cian absorbe la luz roja y refleja la verde y azul; por tanto, el rojo es su filtro o complementario.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 52)"
  },
  {
    theme: 2,
    question: "¿Cuál es el color complementario exacto del Magenta?",
    options: ["Verde", "Rojo", "Amarillo"],
    correct: 0,
    explanation: "El Magenta absorbe la luz verde; el filtro verde mide la densidad de magenta.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 52)"
  },
  {
    theme: 2,
    question: "¿Cuál es el color complementario exacto del Amarillo?",
    options: ["Azul", "Rojo", "Negro"],
    correct: 0,
    explanation: "El Amarillo absorbe la luz azul; el filtro azul mide la densidad de la tinta amarilla.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 52)"
  },
  {
    theme: 2,
    question: "Cuando un densitómetro mide la 'Densidad de Tinta Magenta', ¿qué filtro óptico de color coloca internamente delante del fotodetector?",
    options: ["Un filtro Verde (que es el complementario que absorbe la tinta magenta)", "Un filtro Magenta", "Un filtro Amarillo"],
    correct: 0,
    explanation: "El densitómetro mide la absorción de luz en la longitud de onda que el color impreso absorbe al máximo.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 53)"
  },
  {
    theme: 2,
    question: "¿Qué representa la medida de 'Densidad Óptica' (D)?",
    options: ["El logaritmo decimal del inverso del factor de reflectancia (D = log10 [1 / R])", "El peso de la tinta en gramos", "El espesor del papel en mm"],
    correct: 0,
    explanation: "Mide la capacidad de la capa de tinta depositada para absorber luz. A mayor capa de tinta, mayor densidad.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 53)"
  },
  {
    theme: 2,
    question: "¿Cuál es la Densidad Óptica objetivo típica para la tinta Negra (K) en papel Estucado según la norma ISO 12647-2?",
    options: ["Alrededor de 1,70 a 1,90 D", "0,20 D", "5,00 D"],
    correct: 0,
    explanation: "Asegura la máxima densidad de sombras y contraste sin saturar de tinta ni generar repinte.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 54)"
  },
  {
    theme: 2,
    question: "¿Cuál es la Densidad Óptica objetivo típica para la tinta Amarilla (Y) en papel Estucado?",
    options: ["Alrededor de 1,30 a 1,45 D", "2,50 D", "0,50 D"],
    correct: 0,
    explanation: "El amarillo presenta menor absorción relativa que los colores oscuros.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 54)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Trapping de Tinta' en seco frente al trapping en húmedo?",
    options: ["En seco la primera tinta se ha secado completamente antes de aplicar la segunda; en húmedo se aplican sucesivamente en fracciones de segundo", "En seco se usa agua y en húmedo fuego", "Son términos de la guillotina"],
    correct: 0,
    explanation: "El trapping en seco de máquinas monocabezal alcanza eficacias cercanas al 100%, mientras en húmedo varía entre 70% y 90%.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Fórmula de Preucil' para el cálculo del % de Trapping (Atrapamiento)?",
    options: ["% Trapping = [(D1+2 - D1) / D2] x 100", " Multiplicar la densidad por la velocidad", "Sumar los gramos de las dos tintas"],
    correct: 0,
    explanation: "Evalúa numéricamente si la segunda tinta prende bien sobre la primera capa húmeda en máquina multicolor.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 55)"
  },
  {
    theme: 2,
    question: "Si el cálculo de Trapping de Preucil ofrece un resultado del '85%', ¿cómo se clasifica la transferencia?",
    options: ["Excelente atrapamiento en húmedo en máquina multicolor", "Fallo total de transferencia", "Tinta totalmente seca"],
    correct: 0,
    explanation: "Valores superiores al 80% garantizan la reproducción fiel de las mezclas de color.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 55)"
  },
  {
    theme: 2,
    question: "Si el cálculo de Trapping da un resultado Inferior al '50%', ¿qué problema se apreciará en la imagen?",
    options: ["Desviación severa del color resultante (ej. los rojos quedarán anaranjados o deslavados por falta de magenta)", "El papel se rompe", "La máquina se bloquea"],
    correct: 0,
    explanation: "La segunda tinta se escurre sobre la primera fresca en lugar de depositarse.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 55)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Error de Tono' (Hue Error) de una tinta de impresión real frente a la tinta ideal?",
    options: ["El porcentaje en que una tinta real se desvía de la absorción perfecta absorbiendo longitudes de onda indeseadas", "Una equivocación al coger el bote de tinta", "Un fallo del operador"],
    correct: 0,
    explanation: "Las tintas reales de cuatricromía (especialmente el Magenta y Cyan) no son puras e imponen contaminaciones que la preimpresión compensa.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 56)"
  },
  {
    theme: 2,
    question: "¿Qué tinta de cuatricromía presenta tradicionalmente el Mayor Error de Tono e impureza espectral?",
    options: ["La tinta Magenta (que absorbe luz azul además de la verde que debería)", "La tinta Amarilla", "La tinta Negra"],
    correct: 0,
    explanation: "El magenta es el pigmento más imperfecto espectralmente, requiriendo mayor corrección de color.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 56)"
  },
  {
    theme: 2,
    question: "¿Qué tinta de cuatricromía es la más Pura espectralmente (menor Error de Tono)?",
    options: ["La tinta Amarilla (casi no absorbe luz fuera de su banda azul)", "La tinta Cyan", "La tinta Magenta"],
    correct: 0,
    explanation: "El amarillo roza la respuesta espectral ideal del pigmento primario.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 56)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Turbidez / Grisura' (Turbidity / Grayness) de una tinta?",
    options: ["La cantidad de luz blanca que la tinta absorbe de forma no deseada ensuciando la pureza del color", "La presencia de polvo de papel", "El secado incompleto"],
    correct: 0,
    explanation: "Mide la falta de saturación cromática del pigmento.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 56)"
  },
  {
    theme: 2,
    question: "¿Qué representa la 'Eficiencia de la Tinta' (Ink Efficiency)?",
    options: ["Un porcentaje ponderado que combina el Error de Tono y la Grisura midiendo la calidad cromática pura del pigmento", "La cantidad de pliegos que imprime un kilo", "La velocidad de secado"],
    correct: 0,
    explanation: "A mayor eficiencia de la tinta, mayor es la gama o gamut de color reproducible en la imprenta.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 57)"
  },
  {
    theme: 2,
    question: "¿Qué es el fenómeno de 'Cristalización' de una primera capa de tinta seca?",
    options: ["El secado o endurecimiento excesivo de una capa que vuelve su superficie tan dura e hidrófoba que repele la segunda tinta sobreimpresa", "La formación de cristales de hielo", "El brillo transparente del barniz"],
    correct: 0,
    explanation: "Si se tarda días en imprimir el segundo color en una máquina monocabeza, la tinta base se cristaliza e impide el atrapado.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 58)"
  },
  {
    theme: 2,
    question: "¿Cómo se soluciona en taller el problema de una tinta 'Cristalizada' que rechaza la sobreimpresión?",
    options: ["Añadir un mordiente o barniz especial de agarre o imprimir una capa intermedia de barniz mordiente", "Lavar el papel con agua y jabón", "Girar la hoja 180 grados en la guillotina"],
    correct: 0,
    explanation: "El barniz mordiente regenera la pegajosidad física para permitir el anclaje del siguiente color.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 58)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Resistencia a la Luz' medida en la Escala de la Lana (1 al 8)?",
    options: ["El grado de estabilidad de una muestra donde 1 es resistencia pésima (decolora en horas) y 8 es resistencia máxima e inalterable", "Un medidor del espesor de la lana", "El brillo de la lámpara"],
    correct: 0,
    explanation: "Para cartelería exterior se exige mínimo un grado 6-7 en la Escala de la Lana.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 59)"
  },
  {
    theme: 2,
    question: "¿Qué ocurre con los impresos realizados con tintas de Resistencia a la Luz Grado 1 o 2 expuestos en un escaparate?",
    options: ["El pigmento se degrada fotoquímicamente perdiendo la densidad y virando el color por completo en pocos días", "El papel se vuelve negro", "Aumenta el grosor del libro"],
    correct: 0,
    explanation: "Son tintas diseñadas exclusivamente para interiores sin exposición directa a rayos UV (libros, catálogos cerrados).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 59)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Migración de la Tinta' en envases flexibles de alimentos?",
    options: ["El paso o difusión de componentes de bajo peso molecular (fotoiniciadores, monómeros, plastificantes) a través del plástico hacia el alimento", "El viaje de las tintas en camión", "El secado de la tinta en el tintero"],
    correct: 0,
    explanation: "Problema grave de seguridad alimentaria regulado por la norma europea EU 1935/2004 exigiendo tintas de 'Baja Migración' (LM).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Qué son las 'Tintas de Baja Migración' (Low Migration Inks - LM)?",
    options: ["Formulaciones con componentes de alto peso molecular polimerizables que garantizan que no habrá trasvase de sustancias químicas al contenido", "Tintas que no se pueden mover del taller", "Tintas diluidas con agua destilada"],
    correct: 0,
    explanation: "Obligatorias en la impresión de envases de productos farmacéuticos, cosméticos y alimentación.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Qué representa la 'Resistencia al Pasterizado / Esterilizado' de una tinta de envase?",
    options: ["La capacidad de soportar un tratamiento térmico con vapor o agua caliente a presión (120 °C) sin perder adherencia, brillo ni cambiar de tono", "La resistencia a la leche hirviendo", "El secado en horno de panadería"],
    correct: 0,
    explanation: "Condición indispensable para conservas metálicas, bolsas autoclave y envases retortables.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Qué es el ensayo de 'Resistencia al Congelador' (-20 °C) de la tinta?",
    options: ["Verificar que el film de tinta no se agriete por cristalización del agua o contracción térmica del plástico a bajas temperaturas", "Meter el bote de tinta en el congelador para que dure más", "Medir la temperatura del hielo"],
    correct: 0,
    explanation: "Asegura la integridad estética de los envases de productos congelados durante meses.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Envejecimiento Acelerado' de muestras impresas (Xenotest)?",
    options: ["Exponer la prueba a lámparas de arco de xenón que simulan en pocos días la radiación solar intensa y la humedad de meses de intemperie", "Lijar el papel con cepillo de alambre", "Dejar la prueba al sereno de la noche"],
    correct: 0,
    explanation: "Permite predecir la durabilidad real de carteles y vinilos exteriores antes de lanzar la producción masiva.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 62)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Cuerpo / Consistencia' de una tinta grasa?",
    options: ["La combinación de la viscosidad, el Yield Value y la tixotropía que le confieren su textura firme o fluida", "El peso del bote de 2,5 kg", "La altura de la lata"],
    correct: 0,
    explanation: "Una tinta 'larga' se estira formando hilos fluidos; una tinta 'corta' es mantecosa y rompe limpiamente.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Qué diferencia existe entre una Tinta 'Larga' y una Tinta 'Corta'?",
    options: ["La tinta larga se estira formando filamentos largos antes de romper (ideal para alta velocidad); la corta rompe bruscamente (mantecosa)", "La larga tarda 10 días en secar y la corta 1 segundo", "La larga es para libros gordos"],
    correct: 0,
    explanation: "Las tintas cortas son idóneas para serigrafía o tipografía tradicional, mientras que las largas fluyen en rotativas offset.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Glosómetro' (Glossmeter) y cómo mide el brillo de la capa de tinta?",
    options: ["Un aparato que proyecta un haz de luz a un ángulo fijo (ej. 60° o 20°) y mide el porcentaje de luz reflejada especularmente", "Un medidor de volumen de tinta", "Un telescopio de taller"],
    correct: 0,
    explanation: "Expresa el acabado superficial en Unidades de Brillo (GU - Gloss Units).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 64)"
  },
  {
    theme: 2,
    question: "Si la lectura del Glosómetro a 60° es Superior a '70 GU', ¿cómo se clasifica el acabado de la tinta?",
    options: ["Acabado de Alto Brillo (High Gloss)", "Acabado Mate", "Acabado Satinado suave"],
    correct: 0,
    explanation: "Valores superiores a 70 GU definen superficies de alta reflectancia especular.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 64)"
  },
  {
    theme: 2,
    question: "Si la lectura del Glosómetro es Inferior a '10 GU', ¿cómo se clasifica la muestra?",
    options: ["Acabado Mate profundo (Dead Matte)", "Brillo espejo", "Satinado brillante"],
    correct: 0,
    explanation: "Sugerente de alta dispersión difusa de la luz propia de acabados mates.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 64)"
  },
  {
    theme: 2,
    question: "¿Qué aditivo se añade a la fórmula de la tinta para transformar un acabado brillante en MATE?",
    options: ["Agentes Matantes (Sílice pirogénica / Micronizada)", "Aceite de linaza puro", "Secante de cobalto"],
    correct: 0,
    explanation: "Las partículas microscópicas de sílice sobresalen de la capa seca dispersando la luz en todas direcciones.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 65)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Olor Residual' del impreso seco y qué la provoca?",
    options: ["La emisión de trazas de solventes retenidos, aldehídos de la degradación de aceites vegetales o fotoiniciadores de curado incompleto", "El olor normal del papel de pino", "El olor del lubricante de la máquina"],
    correct: 0,
    explanation: "Parámetro crítico en empaques de chocolate o tabaco que absorben olores con extrema facilidad.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 66)"
  },
  {
    theme: 2,
    question: "¿Qué ensayo estandarizado evalúa si un impreso transmite olor o sabor desagradable a un alimento?",
    options: ["El Test de Robinson (Prueba organoléptica con chocolate / mantequilla en desecador)", "El ensayo Mullen", "La prueba de la gota de agua"],
    correct: 0,
    explanation: "Muestra el grado de alteración del sabor sobre alimentos sensibles tras 48 horas de confinamiento con el paquete impreso.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 66)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Cromatografía de Gases / Espectrometría de Masas' (GC-MS) aplicada al control de tintas?",
    options: ["La técnica analítica de laboratorio para identificar y cuantificar la presencia exacta de solventes residuales (COVs) retenidos en la película", "Un sistema de mezcla de pintura en el tintero", "La prueba de la guillotina"],
    correct: 0,
    explanation: "Permite certificar que los niveles de retención de solventes están por debajo de los límites legales (ej. < 5 mg/m²).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 67)"
  },
  {
    theme: 2,
    question: "¿Qué representa la especificación 'Shelf-Life' o Vida Útil en bote de una tinta almacenada?",
    options: ["El tiempo máximo recomendado por el fabricante durante el cual la tinta conserva intactas sus propiedades sin gelificar ni sedimentar", "El tiempo que tarda en secar en el papel", "La fecha de caducidad de la guillotina"],
    correct: 0,
    explanation: "Tintas de dos componentes o tintas UV mal conservadas pueden polimerizar en el envase tras su shelf-life.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 68)"
  },
  
  {
    theme: 3,
    question: "¿Cuál es la función principal de la aplicación de un 'Barniz de Sobreimpresión' (Overprint Varnish - OPV) en máquina?",
    options: ["Proteger la capa de tinta contra el frote, aumentar o homogeneizar el brillo/mate y sellar la superficie para el manipulado veloz", "Cambiar el color del texto de negro a azul", "Aumentar el peso del papel para venderlo más caro"],
    correct: 0,
    explanation: "Aporta la barrera de protección mecánica permitiendo guillotinar o plegar sin esperar el secado total de la tinta.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 70)"
  },
  {
    theme: 3,
    question: "¿Qué es un 'Barniz de Sobreimpresión Graso / Grasoso' (Barniz Offset tradicional)?",
    options: ["Un barniz formulado sobre la base de resinas y aceites secantes idénticos a una tinta sin pigmento que se aplica por el tintero convencional", "Una capa de mantequilla sin sal", "Un barniz diluido en agua pura"],
    correct: 0,
    explanation: "Es económico y no exige torre de barnizado dedicada, pero amarillea ligeramente con los años y seca lento.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 70)"
  },
  {
    theme: 3,
    question: "¿Qué es un 'Barniz Acuoso / Acrílico' (Water-based varnish) aplicado en torre flexo/anilox?",
    options: ["Una dispersión de resinas acrílicas en base agua que seca velozmente por evaporación / penetración ofreciendo alto brillo sin amarillear", "Un barniz hecho con agua bendita", "Una capa de cera derretida"],
    correct: 0,
    explanation: "Es el estándar moderno en imprenta de pliego: permite la pila alta en salida y acelera el paso a la guillotina.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 71)"
  },
  {
    theme: 3,
    question: "¿Qué ventaja clave ofrece el Barniz Acuoso frente al barniz graso convencional?",
    options: ["Secado casi instantáneo en la pila, ausencia total de amarilleamiento y no exige uso masivo de polvo antirrepinte", "Cuesta la mitad que el agua", "Elimina la necesidad de usar papel"],
    correct: 0,
    explanation: "Permite procesar los pliegos en guillotina o troqueladora en menos de 30 minutos desde la salida de impresión.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 71)"
  },
  {
    theme: 3,
    question: "¿Qué es un 'Barniz UV' (Ultra Violet Varnish)?",
    options: ["Un recubrimiento de resinas 100% sólidos reaccionantes que cura de forma instantánea por acción de radiación ultravioleta ofreciendo máximo brillo y dureza", "Un barniz para ver en la oscuridad", "Un plástico derretido con soplete"],
    correct: 0,
    explanation: "Logra los mayores valores de brillo (superiores a 85 GU) y la máxima resistencia al frote e impermeabilidad.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 72)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Barnizado UV Reserva / Selectivo'?",
    options: ["Aplicar barniz UV brillante exclusivamente sobre áreas específicas del pliego (ej. imágenes o logotipos) usando una plancha o polímero grabado", "Barnizar sólo el borde de las hojas", "Guardar el barniz en la reserva del almacén"],
    correct: 0,
    explanation: "Crea un espectacular contraste óptico y táctil entre el fondo mate del papel y el brillo espejado de la zona seleccionada.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 72)"
  },
  {
    theme: 3,
    question: "¿Qué es el efecto 'Drip-Off' o Barnizado de Efectos Combinados (Twin-Effect)?",
    options: ["Aplicar un barniz graso mate selectivo en plancha offset y cubrir todo el pliego con barniz acuoso brillante en torre; el acuoso repele sobre el mate creando texturas rugosas", "Drop de agua cayendo en la plancha", "Secado por goteo"],
    correct: 0,
    explanation: "Genera contrastes de grano o piel de naranja de altísimo valor estético sin necesidad de troqueles de estampado caros.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 73)"
  },
  {
    theme: 3,
    question: "¿Qué es el Barniz con 'Efecto Soft-Touch' (Tacto Sedoso)?",
    options: ["Un barniz especial que aporta un acabado mate profundo con una textura táctil aterciopelada o suave similar a la piel de melocotón", "Un barniz que ablanda el cartón", "Un barniz esponjoso de goma"],
    correct: 0,
    explanation: "Muy utilizado en estuchería de cosmética de lujo y cubiertas de catálogos premium.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 73)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Efecto Blíster' en barnices de empaque?",
    options: ["Un barniz termosellable aplicado a la cartulina que se funde por calor fijando la burbuja plástica (burbuja de PVC/PET) de un blíster", "Un barniz que genera quemaduras", "Un barniz transparente para cristales"],
    correct: 0,
    explanation: "Soporta el sellado térmico en la envasadora uniendo la cúpula plástica con el cartón.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 74)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Laminado en Frío' (Cold Foil / Estampación en Frío)?",
    options: ["Aplicar un adhesivo mediante plancha offset tradicional y transferir la lámina metalizada de una bobina al pasar por el caucho en línea", "Pegar papel con hielo", "Metales pegados con cinta de embalar"],
    correct: 0,
    explanation: "Permite crear efectos metalizados ultra-precisos sobreimprimibles con tintas CMYK a la velocidad normal de la prensa offset.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué ventaja clave ofrece el Cold Foil frente al Hot Stamping (Estampación en Caliente) tradicional?",
    options: ["No requiere matriz ni troquel metálico térmico caro, se aplica en línea a alta velocidad y se puede sobreimprimir con color en el mismo paso", "Es un proceso que no usa papel", "Se puede hacer con la mano"],
    correct: 0,
    explanation: "Abarata drásticamente los costes de preparación para tiradas medias y permite tonos metalizados complejos.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 75)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Troqueladora Plana' (ej. Bobst) en el proceso de manipulado de cartón?",
    options: ["Una prensa de gran tonelaje que utiliza un troquel plano (madera con flejes de acero) para cortar, hendir y perforar pliegos de cartón de un golpe", "Una máquina para picar carne", "Una guillotina mono-cuchilla de mano"],
    correct: 0,
    explanation: "Es el corazón industrial de la producción de cajas y estuchos de cartón plegable.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Qué componentes integran un 'Troquel Plano' de corte de cartón?",
    options: ["Base de madera contraplacada con flejes de corte (cuchillas), flejes de hendir (redondeados) y gomas de expulsión", "Una plancha de aluminio con agujeros", "Dos rodillos de caucho lisos"],
    correct: 0,
    explanation: "Los flejes de corte separan la silueta de la caja y los de hendir marcan las líneas de doblado.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Para qué sirven las 'Gomas de Expulsión' pegadas junto a los flejes en un troquel?",
    options: ["Expulsar el pliego de cartón troquelado fuera de las cuchillas impidiendo que quede encasquillado o clavado en la madera", "Borrar las faltas de ortografía", "Engrasar los cantos de la caja"],
    correct: 0,
    explanation: "Su elasticidad empuja la hoja troquelada hacia afuera inmediatamente tras la compresión.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 77)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Contratroquel' o Arreglo (Pertinax / Mylar impreso) en el plano de troquelado?",
    options: ["La base inferior provista de acanaladuras exactas (canales de hendido) donde se introducen las fibras al bajar los flejes de hendir", "Una guillotina auxiliar", "La funda de plástico del troquel"],
    correct: 0,
    explanation: "Determina la profundidad y ancho perfecto del hendido impidiendo el estallido de la cara superior de la cartulina.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 77)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Despicos / Descartonado' (Stripping) en la troqueladora?",
    options: ["La eliminación automática de los retales sobrantes de cartón fuera de la silueta de las cajas mediante pinchos o plantillas superiores/inferiores", "Quitar los picos de las botellas", "Limpiar el polvo de la mesa"],
    correct: 0,
    explanation: "Aísla las cajas troqueladas listas permitiendo la separación limpia de los lotes.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 78)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Separador de Posiciones' (Blanking) al final de la troqueladora?",
    options: ["El módulo que separa físicamente cada pose o caja individual de la tirada entregándolas en paquetes apilados perfectos", "Un programa informático de contabilidad", "El trabajador que separa las cajas a mano"],
    correct: 0,
    explanation: "Elimina la manipulación manual de separación de posetas entregando las cajas listas para la pegadora.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 78)"
  },
  {
    theme: 3,
    question: "¿Qué es la máquina 'Plegadora-Pegadora' de cajas de cartón (Folder-Gluer)?",
    options: ["Una línea continua que aplica cola (fría o termofusible) en la solapa de la caja, dobla las palas e introduce el paquete en un prensador de secado", "Una maquina que empaqueta libros en papel de regalo", "Una guillotina con pegamento"],
    correct: 0,
    explanation: "Transforma la silueta plana troquelada en el estuche o caja automontable a velocidades de hasta 100.000 cajas/hora.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 79)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cola Fría' (Emulsión de Acetato de Polivinilo - PVA) usada en la pegadora de cajas?",
    options: ["Un adhesivo acuoso de secado por penetración que ofrece alta flexibilidad y durabilidad para solapas de cartón estándar", "Gelatina congelada a -10°C", "Cola de contacto de neopreno olorosa"],
    correct: 0,
    explanation: "Es la cola estándar para estuchería no plastificada.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 79)"
  },
  {
    theme: 3,
    question: "¿Qué problema ocurre si se aplica Cola Fría sobre una solapa de caja que ha sido PLASTIFICADA o BARNIZADA con UV?",
    options: ["La cola no puede penetrar en la fibra y se descolará la caja al abrirla (fallo total de pegado)", "La cola disuelve el plástico", "La caja se incendia"],
    correct: 0,
    explanation: "En solapas plastificadas o barnizadas se debe reservar la zona sin barniz o aplicar tratamientos de plazma/fuego o cola Hotmelt/PUR.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 80)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Tratamiento por Plasma' en la línea de pegado de cajas?",
    options: ["Una boquilla que proyecta un dardo de aire ionizado por plasma sobre la solapa plastificada para elevar las dinas y permitir el pegado con cola fría", "Inyectar sangre a la máquina", "Pintar la solapa de color rojo"],
    correct: 0,
    explanation: "Modifica la tensión superficial del plástico o barniz UV localmente permitiendo el anclaje instantáneo de adhesivos acuosos.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 80)"
  },
  {
    theme: 3,
    question: "¿Qué es una 'Caja Fondo Automático' (Crash-Lock Bottom Box)?",
    options: ["Una caja cuya estructura de solapas inferiores está encolada de tal forma que se despliega y bloquea el fondo sola al abrir la caja", "Una caja que se rompe sola en el coche", "Una caja de seguridad para dinero"],
    correct: 0,
    explanation: "Requiere una pegadora-plegadora con módulos de ganchos rotativos para doblar y pegar las solapas del fondo.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 81)"
  },
  {
    theme: 3,
    question: "¿Qué es una 'Caja Tipo 4 Puntos' o '6 Puntos' de pegado?",
    options: ["Cajas complejas o bandejas que requieren inyección de adhesivo en 4 o 6 esquinas articuladas para montarse de forma plana", "Cajas con 4 o 6 agujeros", "Cajas de cartón de 4 mm"],
    correct: 0,
    explanation: "Típicas de cajas de pastelería, ropa o estuches de presentación de lujo.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 81)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Guilotinado Múltiple de Postetas'?",
    options: ["Dividir un pliego de gran formato impreso en múltiples sub-postetas pequeñas optimizando las maniobras de corte", "Cortar con tres guillotinas a la vez", "Poner tres operarios en la misma máquina"],
    correct: 0,
    explanation: "Exige planificar una secuencia de pasos en la consola para minimizar las rotaciones de papel pesadas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 82)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Deformación en Silla de Montar' (Saddle Warping) de pliegos gruesos plegados?",
    options: ["La curvatura en forma de U que adopta el lomo del cuadernillo si el sentido de fibra del papel es perpendicular al lomo", "Un asiento ergonómico para el guillotinero", "El abombamiento de la mesa de aire"],
    correct: 0,
    explanation: "Si la fibra no corre paralela al lomo, las fibras oponen resistencia al pliegue deformando la estructura del libro.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 83)"
  },
  {
    theme: 3,
    question: "¿Por qué el 'Sentido de Fibra' del papel DEBE ser SIEMPRE paralelo al lomo del libro o revista?",
    options: ["Para que las hojas caigan y abran con suavidad de forma plana sin ofrecer rigidez ni arrugarse el lomo", "Para que la guillotina corte más despacio", "Para que la tinta no se borre"],
    correct: 0,
    explanation: "Regla de oro absoluta de la industria editorial: fibra paralela al lomo garantiza la manejabilidad del libro.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 83)"
  },
  {
    theme: 3,
    question: "Si un libro se encuaderna con el 'Sentido de Fibra a Contrahilo' (perpendicular al lomo), ¿qué defecto grave presentará?",
    options: ["Las páginas se mantendrán rígidas y duras al hojear (efecto muelle), el lomo se ondulará y la cola se descolará al forzar la apertura", "Las letras cambiarán de tamaño", "El libro olerá mal"],
    correct: 0,
    explanation: "La tensión elástica de las fibras forzadas destruye la estructura de la encuadernación.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 83)"
  },
  {
    theme: 3,
    question: "¿Cómo se identifica la dirección de fibra en una muestra de papel no marcada mediante la 'Prueba de la Gota de Agua'?",
    options: ["Se deposita una gota de agua; la gota se expande de forma elíptica alargándose en el sentido paralelo a las fibras", "La gota se vuelve azul", "El papel se quema"],
    correct: 0,
    explanation: "El agua penetra por capilaridad a mayor velocidad a lo largo del canal longitudinal de la fibra celulósica.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 84)"
  },
  {
    theme: 3,
    question: "¿Cómo se determina la dirección de fibra mediante la 'Prueba del Humedecido de una Cara'?",
    options: ["Al humedecer una cara de una tira cuadrada, el papel se curva formando un rollo cuyo eje es paralelo a la dirección de fibra", "El papel se rompe en dos", "El papel se vuelve negro"],
    correct: 0,
    explanation: "Las fibras se dilatan a lo ancho, forzando la curvatura a lo largo del eje longitudinal de las mismas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 84)"
  },
  {
    theme: 3,
    question: "¿Qué es el ensayo de 'Rasgado con las Uñas' para hallar la fibra?",
    options: ["Deslizar el pulgar e índice apretando el borde del papel en dos direcciones a 90°; la dirección que permanece lisa es paralela a la fibra", "Arrancar trozos de papel", "Lijar el papel"],
    correct: 0,
    explanation: "A contrahilo el borde cruje y forma ondas arrugadas gruesas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 84)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Línea de Trepado' en un pliego antes de la plegadora?",
    options: ["Una línea perforada previa que permite la salida del aire aprisionado durante el plegado cruzado evitando arrugas en la bolsa", "Un corte parcial de guillotina", "El borde del paquete"],
    correct: 0,
    explanation: "La perforación previa al pliegue evita la formación de bolsas de aire atrapado que revientan el lomo.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 85)"
  },
  {
    theme: 3,
    question: "¿Qué es una 'Grapadora de Cabezales Múltiples' en línea con la embuchadora-plegadora?",
    options: ["Un módulo equipado con 2 a 4 cabezales de alambre continuo que cortan, forman y clavan las grapas en el lomo al vuelo", "Una oficina con 10 personas grapando a mano", "Una prensa de 50 toneladas"],
    correct: 0,
    explanation: "Produce revistas grapadas a velocidades de hasta 15.000 ejemplares/hora.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 86)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Grapado con Ojo de Omega' (Loop Stitching / Grapa de Omega)?",
    options: ["Grapas que forman un arco o bucle exterior saliente del lomo para permitir archivar la revista en carpetas de anillas sin taladrar el texto", "Grapas hechas de oro", "Grapas redondas como una moneda"],
    correct: 0,
    explanation: "Conserva intactas las páginas interiores permitiendo la inserción directa en carpetas de archivo.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 86)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Alambre de Grapar' de acero galvanizado o cobrizado?",
    options: ["El carrete continuo de hilo metálico alimentado a los cabezales para formar las grapas a la medida exacta del lomo", "Un cable de alta tensión", "Una varilla rígida de 1 metro"],
    correct: 0,
    explanation: "Se clasifica según su calibre (diámetro del alambre) para adaptarse al grosor del folleto a grapar.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 86)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Cosido a Caballo' (Saddle Stitching) frente al 'Cosido de Plano' (Side Stitching)?",
    options: ["A caballo atraviesa el lomo doblado de las hojas abiertas; de plano atraviesa el grosor del bloque cerca del borde del lomo cerrado", "A caballo es para libros de piel y de plano para folletos", "A caballo se hace con cuerda"],
    correct: 0,
    explanation: "El cosido a caballo permite la apertura plana a 180°, mientras que de plano resta margen del lomo e impide la apertura total.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 87)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cinta de Lomo' o Engomado de Lomo en talonarios?",
    options: ["Una tira de papel o tela engomada pegada a lo largo del lomo de un paquete de albaranes o cheques para ocultar las grapas de plano", "Cinta aislante negra", "Una tira de cuero grueso"],
    correct: 0,
    explanation: "Aporta acabado limpio y protección estructural a bloces y talonarios de facturas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 88)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Encuadernación Suiza' (Swiss Binding)?",
    options: ["Una modalidad donde el bloque del libro está pegado a la guarda posterior de la cubierta de tapa dura dejando el lomo totalmente libre", "Un libro de chocolate", "Encuadernación con tornillos metálicos"],
    correct: 0,
    explanation: "Permite que el libro se abra completamente plano sin forzar la rigidez de la cubierta exterior.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 89)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Encuadernación Japonesa' tradicional?",
    options: ["Un método artesanal de cosido visible exterior a mano atravesando el margen del lomo con hilo de seda formando patrones decorativos", "Plegado de abanico con caña de bambú", "Encuadernación con plástico transparente"],
    correct: 0,
    explanation: "Muy apreciada en libros de artista y álbumes de alta gama por su estética étnica.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 89)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Encuadernación Bodoni'?",
    options: ["Un estilo donde las tapas duras delantera y trasera son piezas independientes pegadas a las guardas con el lomo al descubierto", "Encuadernación con letras de oro puro", "Un libro sin páginas"],
    correct: 0,
    explanation: "Muestra la belleza del cosido con hilo al descubierto del lomo del bloque.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 89)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Prensa de Encuadernar' (Prensa de Volante o Prensa Hidráulica)?",
    options: ["Una máquina que aplica toneladas de compresión plana sobre los bloques de libros recién encolados para evacuar bolsas de aire", "La guillotina de corte", "Una dobladora de papel"],
    correct: 0,
    explanation: "Asegura la adhesión íntima y plana de la cola y las guardas antes del secado definitivo.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 90)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Mazo de Encuadernador' de madera dura o caucho?",
    options: ["Un martillo de cabeza ancha usado artesanalmente para redondear el lomo y sacar el cajo a los bloques antes de encartonar", "Una maza para romper papel roto", "El martillo para fijar la guillotina"],
    correct: 0,
    explanation: "Aplica golpeteo suave formando la curvatura semicircular clásica del lomo de los libros de calidad.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 90)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Redondeado de Lomo' (Rounding) en líneas automáticas de tapa dura?",
    options: ["Pasar el lomo plano del bloque entre dos rodillos de fricción para darle forma cóncava/convexa simétrica", "Cortar las esquinas redondas con guillotina", "Barnizar el lomo con rodillo"],
    correct: 0,
    explanation: "Previene que el libro se deforme hacia adelante tras años de estar de pie en la estantería.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 91)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Sacado de Cajo' (Backing) automático?",
    options: ["Aprisionar el bloque redondeado y abocinar mecánicamente los bordes del lomo a 90° para formar el resalte que alojará los cartones", "Quitar la cola sobrante", "Cortar las guardas"],
    correct: 0,
    explanation: "Crea la ceja o resalte estructural donde encajan perfectamente las tapas rígidas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 91)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cuelga del Bloque' (Casing-in) en la máquina encartonadora?",
    options: ["Aplicar cola a las guardas exterior del bloque e insertarlo con precisión dentro de la cubierta rígida entelada o impresa", "Colgar los libros en perchas para secar", "Pegar las etiquetas del paquete"],
    correct: 0,
    explanation: "Es el paso final donde el bloque de páginas se une definitivamente a su estuche o tapa dura.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 92)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Grabado de la Cizalla' o Ajuste del Pisón de la Trilateral?",
    options: ["Ajustar la presión de las pletinas de la cizalla trilateral mediante pisones acolchados para no aplastar el relieve del lomo", "Rallar el suelo de la máquina", "Pintar la cuchilla con cera"],
    correct: 0,
    explanation: "Los libros con lomo redondeado exigen pisones adaptados en forma de cuña para no destruir la curvatura al cortar.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 93)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Tinta termofusible de PUR' aplicada en el lomo?",
    options: ["Poliuretano reactivo que cura por humedad ambiente formando enlaces covalentes flexibles e indestructibles e inalterables al calor", "Plástico líquido hervido", "Resina sintética que huele a pino"],
    correct: 0,
    explanation: "Permite encuadernar papeles de gran gramaje (200 g/m²) estucados sin peligro de desprendimiento de hojas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 94)"
  },
  {
    theme: 3,
    question: "¿Qué temperatura de aplicación exige la cola 'Hotmelt EVA' convencional en el crisol de la encuadernadora?",
    options: ["Entre 160 °C y 180 °C", "20 °C (temperatura ambiente)", "500 °C"],
    correct: 0,
    explanation: "Exige control térmico continuo; si se sobrecalienta a 200 °C la cola se quema y pierde capacidad adhesiva.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 94)"
  },
  {
    theme: 3,
    question: "¿A qué temperatura se aplica la cola 'PUR' en el crisol cerrado?",
    options: ["Alrededor de 120 °C a 130 °C", "250 °C", "50 °C"],
    correct: 0,
    explanation: "Requiere una menor temperatura que la EVA y un sistema de crisol estanco sin contacto con el aire para evitar la polimerización prematura por humedad.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 94)"
  },
  {
    theme: 3,
    question: "¿Cuánto tiempo requiere el 'Curado Completo' del adhesivo PUR antes de poder refilar o manipular agresivamente los libros?",
    options: ["Entre 12 y 24 horas (para que complete la reacción química con la humedad)", "1 segundo", "10 minutos"],
    correct: 0,
    explanation: "Aunque ofrece fijación inicial en minutos, la resistencia definitiva exige el curado químico nocturno.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 94)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Máquina Hendedora de Impacto' (Creasing Machine)?",
    options: ["Una máquina que prensa la cartulina entre un peine (macho) y un canal (hembra) mediante movimiento vertical sin rasgar la cara", "Una dobladora de bolsa", "Una guillotina para cortar cartón"],
    correct: 0,
    explanation: "A diferencia de la hendedora de rotativa (rodillo), la de impacto ofrece la máxima calidad en soportes gruesos.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 95)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Efecto Muelle' (Spring-back) de una cubierta de cartulina mal hendida?",
    options: ["La tendencia de la portada a abrirse sola y levantarse por no haber deformado plásticamente la fibra en el hendido", "Un muelle metálico instalado en el lomo", "El rebote del pedal de la guillotina"],
    correct: 0,
    explanation: "Indica un canal de hendido demasiado estrecho o una profundidad de penetración insuficiente.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 95)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Hendido de Cortesía' o Hendido de Hendidura Lateral en portadas de Rústica?",
    options: ["Dos líneas de hendido paralelas a 5-7 mm del lomo que permiten abrir la portada limpiamente sin forzar la cola del lomo", "Un regalo del impresor", "Una línea de corte auxiliar"],
    correct: 0,
    explanation: "Aísla la bisagra de apertura de la zona del lomo encolada alargando la vida del libro.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 95)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Corte en Esquina / Troquelado de Esquinas'?",
    options: ["Redondear o biselar las esquinas rectas de un bloque cortado (ej. agendas, barajas de cartas, pasaportes) mediante una cuchilla curva o angular", "Cortar las cuatro esquinas con tijeras", "Doblar las esquinas con la mano"],
    correct: 0,
    explanation: "Evita el deterioro y doblado accidental de los picos en productos de manipulación intensiva.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 96)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Corte de Índice / Troquelado de Uñero' (Thumb Index)?",
    options: ["Efectuar vaciados semicirculares o escalonados en los bordes de las páginas (ej. diccionarios, biblias, agendas) para acceder rápido a secciones", "Cortar el dedo del operario", "Marca de agua en forma de mano"],
    correct: 0,
    explanation: "Requiere guillotinas o troqueladoras universales provistas de cabezales de uñero calibrados.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 96)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Dorado de Cantos' (Gilding / Pintado de Cantos)?",
    options: ["Aplicar lámina de oro, plata o tinta pigmentada brillante sobre la superficie pulida de los tres cantos cortados del bloque del libro", "Pintar las tapas de amarillo", "Barnizar la primera página"],
    correct: 0,
    explanation: "Aporta acabado de lujo e impide la entrada de polvo y luz entre las páginas cerradas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 97)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Jaspeado de Cantos' (Marbling)?",
    options: ["Decorar los cantos del libro transfiriendo patrones de pintura flotantes sobre un baño de goma arábiga o carragenano", "Lijar el canto con piedra pómez", "Pintar líneas con regla"],
    correct: 0,
    explanation: "Técnica artesanal histórica de alta belleza donde cada patrón de cantos resulta único.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 97)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Sobrecubierta' o Camisa (Dust Jacket) de un libro en tapa dura?",
    options: ["Una envoltura de papel o cartulina impresa plastificada con solapas dobladas alrededor de las tapas rígidas del libro", "El envoltorio de plástico retráctil", "La caja de cartón de envío"],
    correct: 0,
    explanation: "Protege la encuadernación en tela o piel aportando el diseño publicitario e ilustración comercial.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 98)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Faja Promocional' (Book Band)?",
    options: ["Una tira estrecha de papel impreso doblada alrededor de la cubierta o sobrecubierta para destacar premios, tiradas o reclamos comerciales", "Un cinturón de seguridad", "La faja del trabajador"],
    correct: 0,
    explanation: "Elemento de marketing editorial fácilmente removible sin dañar el libro.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 98)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Estuche / Caja Deslizante' (Slipcase) para libros de colección?",
    options: ["Una caja rígida de cartón encartonado abierta por un solo lado donde se desliza y guarda el libro o la colección de volúmenes", "El palé de madera", "La bolsa de plástico"],
    correct: 0,
    explanation: "Protege el libro del polvo y la luz conservando la pieza en posición vertical perfecta.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 98)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Paletizador Robótico' al final de la línea de acabado?",
    options: ["Un brazo articulado programable que toma paquetes de libros o cajas y los ordena sobre el palé en patrones cruzados estables", "Una grúa con conductor", "El elevador de mano"],
    correct: 0,
    explanation: "Automatiza totalmente la carga pesada al final de las cadenas de envasado y trilateral.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 99)"
  },
  
  {
    theme: 4,
    question: "¿Qué representa la certificación 'REACH' de la Unión Europea sobre componentes de tinta?",
    options: ["El reglamento relativo al registro, evaluación, autorización y restricción de sustancias químicas para proteger la salud humana y ambiental", "El control de velocidad de las máquinas", "La norma de empaquetado de papel"],
    correct: 0,
    explanation: "Prohíbe el uso de sustancias extremadamente preocupantes (SVHC) como metales pesados o plastificantes tóxicos en las tintas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 100)"
  },
  {
    theme: 4,
    question: "¿Por qué están totalmente PROHIBIDOS los Pigmentos a base de Metales Pesados (Plomo, Cadmio, Mercurio, Cromo VI) en la fabricación moderna de tintas?",
    options: ["Por su elevada toxicidad, bioacumulación y riesgo carcinogénico severo para operarios y usuarios", "Porque son demasiado baratos", "Porque impiden que la tinta se seque"],
    correct: 0,
    explanation: "Sustituidos por pigmentos orgánicos sintéticos de alta seguridad medioambiental.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 100)"
  },
  {
    theme: 4,
    question: "¿Qué representa la norma 'EN 71-3' (Seguridad de los Juguetes) exigida a las tintas para libros infantiles?",
    options: ["Limitar la migración pesada de 19 elementos químicos de la tinta para garantizar que no haya riesgo si un niño muerde o chupa el libro", "Exigir que la tinta huela a fresa", "Obligar a usar papel fluorescente"],
    correct: 0,
    explanation: "Regula de forma estricta los límites de solubilidad de elementos tóxicos en material accesible a niños.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 101)"
  },
  {
    theme: 4,
    question: "¿Qué es el proceso de 'Destintado' (Deinking) en las plantas de reciclaje de papel?",
    options: ["Separar y eliminar las partículas de tinta seca de la pasta de celulosa recuperada mediante flotación por burbujas de aire y química básica", "Lavar el papel con lejía pura", "Moler las tintas con agua caliente"],
    correct: 0,
    explanation: "Las burbujas de aire atrapan los copos hidrófobos de tinta flotando hacia la superficie donde se espuman y eliminan.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 102)"
  },
  {
    theme: 4,
    question: "En la aptitud al destintado (Deinkability), ¿qué tintas resultan más FÁCILES de separar de la fibra de papel?",
    options: ["Las tintas Offset tradicionales y de periódico (Coldset/Heatset)", "Las tintas UV con alto grado de reticulación plástica", "Los barnices de alto brillo"],
    correct: 0,
    explanation: "Las tintas con polimerización rígida (UV/EB) forman plásticos difíciles de desmenuzar en partículas flotables.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 102)"
  },
  {
    theme: 4,
    question: "¿Qué es el ensayo 'INGEDE Method 11'?",
    options: ["El protocolo estándar de la Asociación Internacional de la Industria del Destintado para medir la aptitud al destintado de impresos", "Un método para medir la velocidad de la guillotina", "La prueba de fuerza del pisón"],
    correct: 0,
    explanation: "Otorga una puntuación de destintabilidad evaluando la luminosidad de la pasta resultante y la presencia de puntos oscuros.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 102)"
  },
  {
    theme: 4,
    question: "¿Qué son los 'Mineral Oil Saturated Hydrocarbons' (MOSH) y 'Mineral Oil Aromatic Hydrocarbons' (MOAH)?",
    options: ["Contaminantes derivados de aceites minerales de tintas que pueden migrar desde envases reciclados a los alimentos", "Disolventes para lavar la guillotina", "Tipos de barnices brillantes"],
    correct: 0,
    explanation: "La presencia de MOAH exige barreras funcionales en los envases de alimentos para evitar riesgos para la salud.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 103)"
  },
  {
    theme: 4,
    question: "¿Qué es una 'Barrera Funcional' (Functional Barrier) en un envase de cartón reciclado?",
    options: ["Una capa o lámina (ej. polímero EVOH o aluminio) que impide el paso de sustancias volátiles (MOSH/MOAH) hacia el alimento", "La cinta de embalar exterior", "La solapa de cierre de la caja"],
    correct: 0,
    explanation: "Permite usar cartón 100% reciclado sin riesgo de migración de aceites de tintas previas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 103)"
  },
  {
    theme: 4,
    question: "¿Qué representa la 'Biodegradabilidad' de una película de tinta?",
    options: ["La capacidad de descomponerse por acción de microorganismos naturales (bacterias, hongos) en agua, CO2 y biomasa sin residuos tóxicos", "El secado por calor", "La disolución en acetona"],
    correct: 0,
    explanation: "Requisito clave para empaques compostables según la norma EN 13432.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 104)"
  },
  {
    theme: 4,
    question: "¿Qué representa la norma 'EN 13432' de Envases Compostables?",
    options: ["Exigir que el envase e impreso se descompongan en más de un 90% en un plazo de 6 meses en condiciones de compostaje industrial", "Exigir que el envase flote en el agua", "Prohibir el uso de cartón"],
    correct: 0,
    explanation: "Las tintas empleadas en empaques compostables deben estar libres de metales y ser insensibles al eco-impacto.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 104)"
  },
  {
    theme: 4,
    question: "¿Qué es el defecto de 'Tiro Excesivo' en una tinta recién puesta en máquina?",
    options: ["La tinta tira tanto del papel que arranca la capa de estuco, genera motas blancas y arruga los bordes", "La tinta se vuelve líquida como agua", "La máquina se frena por resistencia"],
    correct: 0,
    explanation: "Exige diluir ligeramente la tinta o reducir la velocidad de la máquina para bajar la fuerza de cizalla.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 105)"
  },
  {
    theme: 4,
    question: "¿Qué es el defecto de 'Velo / Tinte en los Fondos' (Toning) en Offset?",
    options: ["La presencia de una capa leve de tinta en las zonas no impresoras por pérdida de la desensibilización de la plancha", "Un velo de novia en el taller", "Polvo de papel sobre el libro"],
    correct: 0,
    explanation: "Se corrige aumentando la dosificación de solución de mojado, ajustando el pH o limpiando la plancha con producto ácido.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 105)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Lavado de la Tinta' (Bleeding / Inking Washing) por el agua de mojado?",
    options: ["El pigmento de la tinta se disuelve o emulsiona en la solución de mojado tiñendo de color las cubetas de agua de la máquina", "Lavar los botes de tinta con la manguera", "El secado de la tinta con agua"],
    correct: 0,
    explanation: "Ocurre cuando se usan pigmentos parcialmente solubles en agua o una solución de mojado con alcohol/tensoactivos agresivos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 106)"
  },
  {
    theme: 4,
    question: "¿Qué es el defecto de 'Atrapamiento de Aire' (Foaming) en tintas flexográficas base agua?",
    options: ["La formación de espuma abundante en la cuba de tinta por la agitación de las bombas provocando celdillas vacías en el anilox", "Burbujas en el papel de la guillotina", "El aire del compresor"],
    correct: 0,
    explanation: "Se soluciona añadiendo aditivos 'Antiespumantes' (antifoam) a base de silicona o aceites minerales.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 106)"
  },
  {
    theme: 4,
    question: "¿Qué función cumple un aditivo 'Antiespumante' (Defoamer) en la tinta acuosa?",
    options: ["Romper la tensión superficial de las microburbujas de aire colapsándolas de forma inmediata para evitar fallos de entintado", "Evitar el secado de la tinta", "Hacer que la tinta huela bien"],
    correct: 0,
    explanation: "Garantiza un flujo homogéneo en la cámara de racleta del rodillo anilox.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 106)"
  },
  {
    theme: 4,
    question: "¿Qué es el defecto de 'Rayado por Racleta' (Doctor Blade Streaks) en Huecograbado / Flexo?",
    options: ["Líneas o rayas continuas impresas a lo largo de la bobina causadas por muescas en la rasqueta o partículas atrapadas bajo la cuchilla", "Rayas hechas con bolígrafo", "Líneas de guiado para la guillotina"],
    correct: 0,
    explanation: "Exige filtrar la tinta para retirar partículas sólidas y sustituir o re-afilar la hoja de acero de la racleta.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 107)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Escupido de Tinta' (Ink Spitting) en flexografía de alta velocidad?",
    options: ["La proyección de gotitas indeseadas de tinta fuera de la cámara de racleta provocada por la vibración de la cuchilla retenedora", "Gotas expulsadas por el operario", "Fuga de aceite hidráulico"],
    correct: 0,
    explanation: "Se mitiga cambiando el espesor, ángulo o perfil del bisel de la racleta de acero/plástico.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 107)"
  },
  {
    theme: 4,
    question: "¿Qué representa la 'Lineatura de Racleta' o perfil de bisel (Bisel Estándar, Lamella, Bisel Redondo)?",
    options: ["El perfil geométrico del extremo del acero de la rasqueta que determina la flexibilidad y precisión de rascado del anilox", "El número de cuchillas del taller", "La longitud de la guillotina"],
    correct: 0,
    explanation: "Las racletas tipo 'Lamella' reducen la zona de contacto constante a medida que sufren desgaste.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 108)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Ojo de Pez' (Fish-Eyes / Pinholes) en la capa de barniz o tinta seca?",
    options: ["Cráteres circulares desnudosa sin tinta provocados por contaminación de silicona, grasa o aceite en la superficie del soporte", "Ojos de pescado impresos en el libro", "Marcas de la rueda de la máquina"],
    correct: 0,
    explanation: "La diferencia severa de tensión superficial obliga al líquido a retraerse formando agujeros limpios.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 108)"
  },
  {
    theme: 4,
    question: "¿Qué es el defecto de 'Piel de Naranja' (Orange Peel) en superficies barnizadas?",
    options: ["Una textura ondulada e irregular del barniz por una nivelación o flujo inadecuado antes de la polimerización", "Barniz de color naranja", "Papel fabricado con cáscara de naranja"],
    correct: 0,
    explanation: "Causado por viscosidad excesiva, secado demasiado veloz o ajuste erróneo del rodillo aplicador.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 108)"
  },
  {
    theme: 4,
    question: "¿Qué representa la 'Nivelación' (Leveling) de un barniz líquido?",
    options: ["La capacidad del fluido de fluir y alisar totalmente las crestas del rodillo creando un espejo plano antes de secar", "Nivelar la máquina con un nivel de burbuja", "Igualar el peso de los paquetes"],
    correct: 0,
    explanation: "Depende de la tixotropía, viscosidad y aditivos humectantes de la fórmula.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 109)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Cristalización del Anox' en flexografía?",
    options: ["El taponamiento y secado de tinta dentro de las microscópicas celdillas del rodillo anilox reduciendo el aporte de volumen", "La formación de diamantes en el rodillo", "La rotura del cilindro cerámico"],
    correct: 0,
    explanation: "Exige la limpieza periódica profunda con ultrasonidos, bicarbonato a presión o geles químicos penetrantes.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 109)"
  },
  {
    theme: 4,
    question: "¿Qué es el equipo de 'Limpieza por Ultrasonidos' de rodillos Anilox?",
    options: ["Un tanque de inmersión donde ondas de alta frecuencia crean microburbujas de cavitación que desintegran la tinta seca dentro de las celdillas", "Un altavoz de música para el taller", "Un limpiador de pantalla táctil"],
    correct: 0,
    explanation: "Restaura la capacidad volumétrica original (cm³/m²) de las celdillas grabadas por láser.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 109)"
  },
  {
    theme: 4,
    question: "¿Qué representa el volumen 'BCM' (Billion Cubic Microns per square inch) en la especificación del rodillo Anilox?",
    options: ["La capacidad volumétrica de tinta que retienen las celdillas del anilox por pulgada cuadrada", "La velocidad de rotación", "El diámetro del cilindro"],
    correct: 0,
    explanation: "Un anilox de 3,5 BCM aporta una película óptima para tramas finas; un anilox de 8,0 BCM deposita capas gruesas para masas y fondeados.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 110)"
  },
  {
    theme: 4,
    question: "¿Qué relación debe existir entre la 'Lineatura del Anilox' (lpi) y la 'Lineatura de Trama' del fotopolímero en flexografía?",
    options: ["La lineatura del anilox debe ser al menos de 5 a 8 veces mayor que la lineatura de la trama de la imagen", "Deben ser idénticas 1 a 1", "El anilox debe ser más grueso que la trama"],
    correct: 0,
    explanation: "Evita que un punto de trama diminuto de la plancha caiga dentro de una celdilla del anilox (efecto 'dipping' o hundimiento).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 110)"
  },
  {
    theme: 4,
    question: "Si se imprime una trama de '150 lpi' en flexografía, ¿qué lineatura mínima de Anilox se requiere?",
    options: ["Mínimo 800 a 1000 lpi de anilox", "150 lpi de anilox", "50 lpi de anilox"],
    correct: 0,
    explanation: "Garantiza que el punto de trama más pequeño descanse sobre las paredes de varias celdillas sin sumergirse de tinta.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 110)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Doble Doblez de Lomo' o Rompimiento del Estuco durante el plegado de cartulinas gruesas?",
    options: ["La fractura estética de la capa mineral del estuco y fibras en el eje de doblez si no se ha aplicado un hendido adecuado previamente", "El corte con la guillotina", "El pegado de las hojas"],
    correct: 0,
    explanation: "Produce una antiestética raya blanca donde se descasca el estuco y la tinta seca.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 111)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Ancho del Canal de Hendido' (W) y cómo se calcula respecto al grosor del cartón (t)?",
    options: ["Fórmula aproximada: Ancho de Canal = (1,5 x grosor del cartón) + ancho del fleje de hendir", "El canal es siempre de 10 cm", "Dividir el espesor entre dos"],
    correct: 0,
    explanation: "Un canal de hendido proporcional acomoda el abultamiento de la fibra desplazada sin romper la cara exterior.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 111)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Ficha de Seguridad de la Tinta' (Safety Data Sheet - SDS / MSDS)?",
    options: ["El documento legal técnico con 16 apartados que especifica riesgos, EPIs, primeros auxilios, toxicidad y gestión de residuos de la tinta", "El manual de instrucciones de la máquina", "La factura comercial"],
    correct: 0,
    explanation: "Debe estar a disposición obligatoria de los trabajadores en el taller según la normativa de prevención de riesgos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 112)"
  },
  {
    theme: 4,
    question: "¿Qué pictograma de peligro CLP identifica a los solventes orgánicos inflamables de flexografía y huecograbado?",
    options: ["El pictograma con la 'Llama roja sobre fondo blanco'", "La calavera con tibias cruzadas", "El signo de exclamación"],
    correct: 0,
    explanation: "Identifica líquidos y vapores inflamables que exigen zonas ATEX libres de chispas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 112)"
  },
  {
    theme: 4,
    question: "¿Qué es una 'Zona ATEX' en la planta de impresión de tintas solventes?",
    options: ["Una atmósfera explosiva clasificada donde todos los equipos eléctricos deben ser antideflagrantes para evitar chispas", "El vestuario de los empleados", "El comedor de la empresa"],
    correct: 0,
    explanation: "Regulada por la directiva europea ATEX para prevenir explosiones en presencia de vapores de alcoholes y acetatos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 112)"
  },
  {
    theme: 4,
    question: "¿Qué tipo de Guantes de Protección (EPI) deben emplearse para manipular tintas UV o monómeros acrílicos?",
    options: ["Guantes de Nitrilo o Butilo pesados (los guantes de látex fino son permeables a los monómeros acrílicos)", "Guantes de lana de invierno", "Guantes de tela de algodón sueltos"],
    correct: 0,
    explanation: "Los monómeros UV atraviesan velozmente el látex provocando dermatitis alérgica severa por contacto.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 113)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Dermatitis por Contacto' en operarios de tintas UV?",
    options: ["Una reacción alérgica e inflamatoria cutánea provocada por la sensibilización repetida con monómeros acrílicos no curados", "Una infección por comer papel", "Una quemadura por el sol"],
    correct: 0,
    explanation: "Exige el uso riguroso de guantes adecuados y lavado de piel inmediato con agua y jabón neutro (nunca con solventes).",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 113)"
  },
  {
    theme: 4,
    question: "¿Por qué NUNCA se deben usar disolventes orgánicos o lava-tintas para limpiarse la tinta pegada de las manos o piel?",
    options: ["Porque los disolventes destruyen la capa lipídica de la piel y abren los poros inyectando los químicos al torrente sanguíneo", "Porque gasta disolvente caro", "Porque la piel se vuelve azul"],
    correct: 0,
    explanation: "Se deben usar exclusivamente pastas limpiamanos industriales específicas enriquecidas con protectores cutáneos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 113)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Lavador de Trapos' o Servicio de Alquiler de Trapos Industriales?",
    options: ["Un sistema ecológico cerrado donde una empresa autorizada retira los trapos impregnados en contenedores ignífugos, los lava y los devuelve", "Lavar los trapos en la lavadora de casa", "Tirar los trapos a la papelera del suelo"],
    correct: 0,
    explanation: "Asegura la gestión legal de residuos peligrosos evitando la autocombustión y la contaminación de vertederos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 114)"
  },
  {
    theme: 4,
    question: "¿Qué representa el 'Código LER' (Lista Europea de Residuos) en los bidones de residuo de tinta sobrante?",
    options: ["La identificación numérica oficial de seis dígitos que clasifica la naturaleza peligrosa del residuo para su transporte y tratamiento legal", "El código de barras de la tienda", "La contraseña del WI-FI del taller"],
    correct: 0,
    explanation: "Obligatorio para la trazabilidad del gestor de residuos peligrosos autorizado.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 114)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Depuradora de Aguas de Lavado' en imprentas con tintas acuosas?",
    options: ["Una planta interna que flocula y separa los pigmentos y resinas del agua de lavado permitiendo re-utilizar el agua o verterla limpia", "Un filtro de café gigante", "Un grifo de agua potable"],
    correct: 0,
    explanation: "Evita el vertido directo de aguas cargadas de pigmentos al alcantarillado público cumpliendo las ordenanzas municipales.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 114)"
  },
  {
    theme: 4,
    question: "¿Qué representa la 'Destilación de Solventes' (Destilador de Reciclaje)?",
    options: ["Un equipo térmico que hierve los trapos o lavados de solvente sucio recuperando el solvente puro por condensación para volver a usarlo", "Fabricar alcohol de quemar", "Hacer colonia en el taller"],
    correct: 0,
    explanation: "Reduzca hasta un 85% la compra de solventes nuevos al reciclar los líquidos de limpieza del taller.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 115)"
  },
  {
    theme: 4,
    question: "¿Qué es el 'Incinerador Catalítico / Regenerativo' (RTO) en la salida de gases de Huecograbado o Flexo?",
    options: ["Un sistema térmico que quema los COVs del aire de secado a 800 °C transformándolos en CO2 inofensivo y agua aprovechando el calor", "Una estufa para calentar el taller en invierno", "Un quemador de papel roto"],
    correct: 0,
    explanation: "Cumple las directivas de emisiones industriales destructoras de contaminantes orgánicos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 115)"
  },
  {
    theme: 4,
    question: "¿Qué representa la 'Huella de Carbono' (Carbon Footprint) de un producto impreso o de empaque?",
    options: ["La suma total de emisiones de gases de efecto invernadero (expresada en CO2 equivalente) generadas en todo el ciclo de vida del impreso", "La mancha de carbón del tintero", "El rastro del camión de reparto"],
    correct: 0,
    explanation: "Abarca desde la extracción de la madera/petróleo, fabricación de tinta, energía de impresión, transporte y fin de vida.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 116)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Eco-Etiqueta Ecológica de la UE' (Ecolabel European Flower) en productos impresos?",
    options: ["La etiqueta oficial que certifica que el impreso cumple estrictos criterios de bajo uso de químicos, papel FSC/reciclado y destintabilidad", "Una pegatina de adorno", "El logotipo de la imprenta"],
    correct: 0,
    explanation: "Valida ante clientes e instituciones públicas el perfil de excelencia ambiental de la producción gráfica.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 116)"
  },
  {
    theme: 4,
    question: "¿Por qué el guillotinero debe verificar las Fichas Técnicas del Trabajo antes de iniciar el corte de tiradas barnizadas o plastificadas?",
    options: ["Para confirmar que los tiempos de curado o secado del barniz/cola se han completado evitando bloqueos, repintes o marcas del pisón", "Para saber la hora de salir a comer", "Para calcular su comisión"],
    correct: 0,
    explanation: "Sella el control de calidad previniendo arruinar una tirada completa por cortes prematuros sobre tintas blandas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 116)"
  },
  
  {
    theme: 1,
    question: "¿Qué es la 'Solución Tamponada' (Buffer Solution) en el control del agua de mojado?",
    options: [
      "Una mezcla química que mantiene el pH del agua de mojado estable (entre 4,8 y 5,5) aunque se añadan tintas o papel ácido/alcalino",
      "Un líquido para limpiar la pantalla de la guillotina",
      "Agua destilada hervida a 100 °C"
    ],
    correct: 0,
    explanation: "El tampón químico evita oscilaciones de pH que arruinarían el equilibrio agua-tinta durante la tirada.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 45)"
  },
  {
    theme: 1,
    question: "¿Qué representa la medida de 'Conductividad Eléctrica' (medida en microsiemens/cm - µS/cm) de la solución de mojado?",
    options: [
      "La concentración de sales disueltas y contaminación en el agua, debiendo mantenerse entre 800 y 1.500 µS/cm",
      "La velocidad a la que la máquina consume corriente",
      "El tiempo de respuesta de los fotodiodos de seguridad"
    ],
    correct: 0,
    explanation: "Una conductividad excesiva (> 2.000 µS/cm) indica acumulación de sales o papel disuelto, obligando a renovar la mezcla.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 45)"
  },
  {
    theme: 1,
    question: "¿Qué papel cumple el 'Alcohol Isopropílico' (IPA) en la solución de mojado tradicional offset?",
    options: ["Reducir la tensión superficial del agua (de 72 a 35 dinas/cm) para mojar la plancha con una capa de agua más fina", "Acelerar el secado por congelación", "Limpiar las marchas de la guillotina"],
    correct: 0,
    explanation: "El IPA permite humectar la plancha usando menos cantidad de agua, mejorando el contraste y reduciendo la emulsión.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 46)"
  },
  {
    theme: 1,
    question: "¿Por qué la industria gráfica trabaja para la reducción o eliminación total del Alcohol Isopropílico (IPA-Free)?",
    options: ["Por sus elevadas emisiones de Compuestos Orgánicos Volátiles (COVs), toxicidad por inhalación y peligro de inflamabilidad", "Because es demasiado barato", "Porque decolora el papel negro"],
    correct: 0,
    explanation: "Las soluciones IPA-Free emplean sustitutos surfactantes respetuosos con el medio ambiente y la salud del maquinista.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 46)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Ángulo de Contacto' (Contact Angle) de una gota de líquido sobre el soporte?",
    options: ["El ángulo formado entre la superficie del papel y la tangente de la gota de tinta/agua; a menor ángulo, mayor humectabilidad", "El ángulo de inclinación de la cuchilla", "El giro del paquete en la mesa"],
    correct: 0,
    explanation: "Ángulos menores de 90° indican que el líquido moja el soporte; ángulos mayores de 90° indican repulsión hidrófoba.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 46)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Tinta Hidrófila' frente a una 'Tinta Oleófila'?",
    options: ["Hidrófila tiene afinidad por el agua; Oleófila tiene afinidad por los aceites y grasas", "Hidrófila es transparente y Oleófila opaca", "Son nombres comerciales de la misma tinta"],
    correct: 0,
    explanation: "En Offset, las tintas deben ser estrictamente oleófilas para fijarse sólo en la imagen y repeler la solución de agua.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 2)"
  },
  {
    theme: 1,
    question: "¿Qué es el 'Grado de Dispersión' de la tinta en el espectro micrométrico?",
    options: ["El nivel de separación individual de las partículas de pigmento dentro del vehículo sin formar agregados", "El radio de salpicadura en máquina", "La difusión de la luz en la pantalla"],
    correct: 0,
    explanation: "Una dispersión óptima garantiza el máximo desarrollo de color, brillo y transparencia cromática.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 24)"
  },
  {
    theme: 1,
    question: "¿Qué es la 'Desemulsificación' del agua en el tintero?",
    options: ["La capacidad de la tinta de liberar el agua atrapada en reposo de forma rápida sin perder su consistencia original", "Lavar el tintero con manguera", "Convertir el agua en hielo"],
    correct: 0,
    explanation: "Evita que el agua quede atrapada indefinidamente dentro de la masa de tinta provocando fallos de densidad.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 45)"
  },
  {
    theme: 1,
    question: "¿Qué representa la norma 'ISO 2846' en la fabricación de tintas de impresión?",
    options: ["Define las especificaciones de colorimetría (CIELAB) y transparencia que deben cumplir las tintas de cuatricromía en escala de prueba", "Regula las dimensiones de las resmas", "Fija la velocidad del motor eléctrico"],
    correct: 0,
    explanation: "Garantiza que tintas fabricadas por distintos proveedores produzcan los mismos tonos exactos bajo normas ISO.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 50)"
  },
  {
    theme: 1,
    question: "¿Qué es una 'Tinta Duotono' o Tinta Monocromática Especial?",
    options: ["Una formulación que cambia ligeramente de matiz de tono entre las luces y las sombras profundas aportando riqueza fotográfica", "Tinta que lleva dos colores mezclados sin juntar", "Tinta para imprimir dos páginas a la vez"],
    correct: 0,
    explanation: "Se emplea en la impresión artística de fotografías en blanco y negro de alta calidad.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 20)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Efecto Skinning' o Formación de Piel en el bote de tinta?",
    options: ["La polimerización de la capa superior de tinta en contacto con el oxígeno del aire dentro del recipiente abierto", "El desprendimiento del estuco", "Un defecto del rodillo anilox"],
    correct: 0,
    explanation: "Obliga a retirar la corteza con espátula antes de cargar el tintero para no introducir grumos secos en los rodillos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 9)"
  },
  {
    theme: 2,
    question: "¿Qué función cumple la 'Aspiración de Polvo' en la salida de las prensas de pliego?",
    options: ["Capturar el exceso de polvo antirrepinte en suspensión para que no ensucie la máquina ni las fotocélulas", "Secar la tinta con aire caliente", "Enfriar los motores"],
    correct: 0,
    explanation: "Mantiene la higiene ambiental en la pila de salida y evita la inhalación de micropartículas por el maquinista.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 89)"
  },
  {
    theme: 2,
    question: "¿Qué es el 'Polvo Antirrepinte Microencapsulado' o recubierto de silicona?",
    options: ["Polvos de grano vegetal tratados para repeler la humedad y fluir con mayor homogeneidad sin formar grumos en la salida", "Polvo de piedra pómez", "Polvo de tiza de pizarra"],
    correct: 0,
    explanation: "Evita que las partículas se apelmacen por la humedad del taller garantizando un rociado uniforme.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 89)"
  },
  {
    theme: 2,
    question: "¿Cómo se selecciona el 'Tamaño de Grano' (micras) del Polvo Antirrepinte?",
    options: ["En función del gramaje y tipo de papel: grano fino (15 µm) para papeles ligeros, grano grueso (30-45 µm) para cartulinas pesadas", "Se usa siempre el mismo tamaño para todo", "Depende del color de la tinta"],
    correct: 0,
    explanation: "Materiales pesados requieren un grano más grande para resistir la presión del peso de la pila sin tocarse las hojas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 89)"
  },
  {
    theme: 2,
    question: "¿Qué es el ensayo de 'Saponificación' de la tinta?",
    options: ["Comprobar si los pigmentos o el vehículo reaccionan formando jabones insolubles al contacto con álcalis", "Lavar la tinta con jabón de manos", "Medir el brillo del papel"],
    correct: 0,
    explanation: "Indispensable para tintas destinadas a etiquetas de jabones, detergentes y productos de limpieza doméstica.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 18)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Resistencia a las Grasas y Aceites' en tintas de envoltorios alimentarios?",
    options: ["La capacidad de la película de tinta seca de no disolverse ni sangrar al entrar en contacto con aceites de cocina o mantecas", "La resistencia del bote de tinta", "Un ensayo con la bomba hidráulica"],
    correct: 0,
    explanation: "Evita que las grasas del alimento disuelvan el impreso manchando el producto comercial.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Resistencia al Alcohol' (Ensayo de Sangrado en Etanol)?",
    options: ["Evaluar si el pigmento se disuelve al sumergirse en etanol durante un tiempo determinado sin teñir la solución", "Añadir alcohol al tintero", "Probar la bebida del cliente"],
    correct: 0,
    explanation: "Prueba clave para etiquetas de licores, perfumes y desinfectantes hidroalcohólicos.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 18)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Termo-estabilidad / Resistencia al Calor' de un pigmento?",
    options: ["La capacidad del pigmento de no cambiar de tono ni sublimar al someterse a elevadas temperaturas (ej. 200 °C en hornos de secado o sellado)", "La resistencia a la luz de una bombilla", "El calor de la mesa de aire"],
    correct: 0,
    explanation: "Pigmentos no termoestables se degradan o evaporan en los túneles de secado o máquinas de sellado térmico.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Sublimación del Pigmento' en el proceso de secado por calor?",
    options: ["El paso directo del pigmento sólido a estado gaseoso por efecto del calor provocando sombras o manchas en las páginas adyacentes", "La congelación del vehículo", "La disolución en agua"],
    correct: 0,
    explanation: "Ocurre si se emplean pigmentos orgánicos de bajo peso molecular en procesos con altas temperaturas.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 61)"
  },
  {
    theme: 2,
    question: "¿Qué es la 'Fuerza de Cizallamiento' (Shear Stress) ejercida en la batería de rodillos?",
    options: ["La fuerza tangencial aplicada sobre la capa de tinta al girar los rodillos a diferentes velocidades superficiales", "La bajada de la cuchilla de la guillotina", "La presión de las pinzas"],
    correct: 0,
    explanation: "Es la fuerza mecánica que bate la tinta, reduce su viscosidad tixotrópica y la extiende uniformemente.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 32)"
  },
  {
    theme: 3,
    question: "¿Qué representa la 'Reserva de Barniz' en una portada que será posteriormente encolada o estampada?",
    options: ["Dejar deliberadamente libre de barniz la zona del lomo o de estampación para permitir el anclaje directo de la cola o del foil", "Guardar un bote de barniz en la estantería", "Barnizar sólo el reverso"],
    correct: 0,
    explanation: "El barniz sobre las zonas de encolado o stamping actúa como desmoldeante provocando el fallo del pegado.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 72)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Relieve Seco Macho-Hembra' (Embosing 3D)?",
    options: ["Utilizar un grabado en relieve (macho) que encaja milimétricamente con un grabado grabado en hueco (hembra) deformando la fibra en varias profundidades", "Imprimir con dos tintas superpuestas", "Un troquelado de esquinas"],
    correct: 0,
    explanation: "Aporta volúmenes y texturas escultóricas de máxima precisión en papel o cartulina gruesa.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 120)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Relieve Micro-estructurado' (Micro-Embossing / Refraction Stamping)?",
    options: ["Grabar micro-líneas de difracción microscópicas en la lámina metálica que crean efectos ópticos de holograma cambiante", "Lijar el papel con grano fino", "Imprimir con tinta transparente"],
    correct: 0,
    explanation: "Combina la estampación dorada con texturas holográficas de alta seguridad contra la falsificación.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 120)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Película de Estampación en Caliente' (Hot Stamping Foil)?",
    options: ["Una cinta soporte de poliéster multicapa recubierta de una capa de desmoldeo, capa de color/aluminio y capa de adhesivo termosensible", "Un rollo de papel de aluminio de cocina", "Una lámina de plástico termorresistente"],
    correct: 0,
    explanation: "El calor del troquel activa la capa desmoldeante y funde el adhesivo transfiriendo el metal al soporte.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 120)"
  },
  {
    theme: 3,
    question: "¿Qué temperatura de trabajo requiere habitualmente la matriz de Estampación en Caliente (Hot Stamping)?",
    options: ["Entre 100 °C y 140 °C (según el soporte y tipo de foil)", "500 °C", "20 °C (temperatura ambiente)"],
    correct: 0,
    explanation: "Active el adhesivo térmico del foil sin llegar a quemar el papel ni derretir el poliéster.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 120)"
  },
  {
    theme: 3,
    question: "¿Qué es un 'Troquel Cilíndrico Rotativo' en líneas de etiquetas adhesivas?",
    options: ["Un cilindro magnético que aloja una camisa de chapa de acero flexible grabada por láser para troquelar al vuelo a alta velocidad", "Una rueda de prensa", "El rodillo del tintero"],
    correct: 0,
    explanation: "Permite troquelar la capa superior de la etiqueta sin cortar el papel de soporte siliconado (corte medio/Kiss-cut).",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Corte Medio / Corte 半' (Kiss-Cutting)?",
    options: ["Troquelar únicamente la lámina frontal adhesiva sin atravesar ni dañar el papel siliconado de soporte (liner)", "Cortar la mitad de un libro", "Un corte suave en la guillotina"],
    correct: 0,
    explanation: "Imprescindible para la producción de etiquetas adhesivas suministradas en bobinas o pliegos.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 76)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Pelado de Esqueleto' (Matrix Stripping) en la fabricación de etiquetas adhesivas?",
    options: ["Retirar de forma continua la red de plástico o papel sobrante alrededor de las etiquetas troqueladas dejándolas aisladas sobre el liner", "Quitar la piel a un libro", "Limpiar la mesa de aire"],
    correct: 0,
    explanation: "Deja las etiquetas listas sobre la tira siliconada para su posterior aplicación automática en envasadora.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 78)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Unidad Inyectora de Adhesivo Hotmelt' por pistolas neumáticas?",
    options: ["Un sistema que aplica puntos o cordones de cola termofusible fundida a alta presión en solapas específicas de cajas", "Una pistola de pintura para paredes", "Un Inyector de agua para la guillotina"],
    correct: 0,
    explanation: "Permite la inyección milimétrica de adhesivo en la plegadora-pegadora sin manchar la caja.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 79)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Laminado Térmico Acetato de Celulosa'?",
    options: ["Un film de laminación biodegradable de origen vegetal de alto brillo usado para envases ecológicos de alta gama", "Plastificado con bolsas de basura", "Un barniz con sabor a celulosa"],
    correct: 0,
    explanation: "Aporta transparencia cristalina y es totalmente compostable e imprimible por encima.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 121)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Garganta de la Plegadora' de bolsa?",
    options: ["La separación ajustable entre los rodillos de entrada que determina la presión de arrastre y el grosor de pliego admitido", "El tubo de aspiración de viruta", "La boca de la guillotina"],
    correct: 0,
    explanation: "Un ajuste erróneo provoca atascos de papel o marcas de rodillo en la superficie impresa.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 112)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Defecto de Arruga de Viento' en la plegadora?",
    options: ["Pliegues diagonales no deseados causados por la deformación del aire atrapado que no puede escapar al comprimirse el pliego", "La arruga de la ropa del maquinista", "Un fallo de la guillotina"],
    correct: 0,
    explanation: "Se corrige reduciendo la velocidad, perforando la línea de pliegue o ajustando las guías de la parrilla.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 112)"
  },
  {
    theme: 3,
    question: "¿Qué representa el 'Grosor de Lomo' para el diseño de la cubierta de un libro?",
    options: ["La cota exacta del ancho del lomo calculada multiplicando el número de páginas por el grosor medio del papel más el cartón", "El ancho de la guillotina", "El peso de la resma"],
    correct: 0,
    explanation: "Permite maquetar la portada con el ancho de lomo exacto evitando que los textos caigan fuera del lomo.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 114)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Fórmula de Cálculo del Lomo'?",
    options: ["Grosor Lomo (mm) = (Nº de Páginas / 2) x [Gramaje (g/m²) x Volumen Específico / 1000]", "Multiplicar el número de páginas por dos", "Pesar el libro en una báscula"],
    correct: 0,
    explanation: "El volumen específico (mano del papel) determina el espesor real del bloque.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 114)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Volumen Específico / Mano del Papel' (Bulk)?",
    options: ["La relación entre el espesor del papel en micras y su gramaje en g/m² (Espesor / Gramaje)", "El tamaño de la mano del guillotinero", "El peso de la caja"],
    correct: 0,
    explanation: "Un papel de 'alto volumen' (Mano 1,5 o 2,0) abulta mucho más con el mismo peso, dando lomos más anchos.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 114)"
  },
  {
    theme: 3,
    question: "Si un papel de 80 g/m² tiene una 'Mano 1.5', ¿cuál es su espesor en micras (µm)?",
    options: ["120 micras (80 x 1,5 = 120 µm)", "80 micras", "200 micras"],
    correct: 0,
    explanation: "Multiplicar el gramaje por la mano da como resultado el grosor físico de una hoja individual.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 114)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Encuadernación Flexibound' (Tapa Rústica de Lujo o Tapa Integrada)?",
    options: ["Una encuadernación que utiliza una cubierta de cartón fino flexible (1 mm) encartonada como una tapa dura sin llegar a ser rígida", "Un libro de plástico blando", "Una libreta con gomas"],
    correct: 0,
    explanation: "Combina la flexibilidad de la rústica con la elegancia estructural del cajo y guardas del cartoné.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Cinta de Refuerzo de Lomo' (Super / Mull)?",
    options: ["Una gaza o tela de malla abierta pegada sobre el lomo del bloque cosido para darle consistencia mecánica antes de colgar las tapas", "Cinta aislante de plástico", "Tira de papel de periódico"],
    correct: 0,
    explanation: "Aporta la armadura textil que soporta el peso del bloque unido a las guardas.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es la 'Ceja de la Cubierta' (Overhang) en un libro de tapa dura?",
    options: ["El borde del cartón de la tapa que sobresale entre 2 y 4 mm por fuera del bloque de páginas cortadas para protegerlas", "La esquina de la guillotina", "El margen del texto"],
    correct: 0,
    explanation: "Protege las hojas de los impactos y del roce directo al apoyar el libro en la estantería.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 116)"
  },
  {
    theme: 3,
    question: "¿Qué es el 'Corte en Bisel de los Cartones' de cubierta?",
    options: ["Chaflanar las aristas exteriores del cartón de la tapa dura para dar un acabado redondeado y elegante bajo la tela/piel", "Cortar el cartón torcido", "Lijar las esquinas con lija"],
    correct: 0,
    explanation: "Técnica de encuadernación fina para evitar aristas vivas bajo cubiertas de piel suave.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 116)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Contaminación Cruzada de Solventes' en máquinas convertidoras?",
    options: ["La migración no deseada de trazas de disolventes de una línea de impresión a un envase impreso en la línea vecina", "Mezclar agua y aceite en el tintero", "Lavar la máquina con jabón"],
    correct: 0,
    explanation: "Exige aislar las secciones de impresión por solventes de las áreas de envasado alimentario.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 100)"
  },
  {
    theme: 4,
    question: "¿Qué representa la especificación 'Suelo Antiestático' en la sala de guillotinas y manipulado?",
    options: ["Un pavimento conductor que disipa las cargas de electricidad estática acumuladas por el roce del papel evitando chispas y calambres", "Un suelo de madera barnizada", "Un suelo cubierto de goma blanda"],
    correct: 0,
    explanation: "Crucial para evitar descargas a los operarios y prevenir incendios en zonas con presencia de vapores.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 112)"
  },
  {
    theme: 4,
    question: "¿Qué es la 'Gobernanza de Residuos' en el plan de sostenibilidad de la imprenta?",
    options: ["El sistema integral de separación en origen, compactado y entrega a gestores autorizados de papel, tintas, trapos y plásticos", "Guardar todo en un almacén viejo", "Quemar el papel roto en el patio"],
    correct: 0,
    explanation: "Asegura el cumplimiento de las normativas europeas de economía circular y vertido cero.",
    source: "Manual Artes Gráficas 2 - Tintas (Pág. 114)"
  },
  {
    theme: 4,
    question: "Al finalizar el trabajo de guillotina, ¿por qué es fundamental registrar el volumen de 'Desperdicio de Papel / Recorte' generado?",
    options: ["Para calcular el rendimiento real del pliego (ratio de aprovechamiento) y enviar el recortes limpio a la planta de reciclaje", "Para rellenar espacio en el parte", "Para tirar el papel al contenedor gris"],
    correct: 0,
    explanation: "Cierra el control de costes del trabajo y permite certificar la tasa de recuperación de materia prima.",
    source: "Manual Artes Gráficas 2 - Procesos (Pág. 116)"
  },

   
  {
    theme: 1,
    question: "Halla el área total de un cono de 9 cm de altura y una base de 4 cm de radio.",
    options: [
      "173,96 cm²",
      "137,95 cm²",
      "150,20 cm²"
    ],
    correct: 0,
    explanation: "Generatriz g = √(9² + 4²) = √97 ≈ 9,85 cm. Área total = π·r·(r + g) = π·4·(4 + 9,85) ≈ 173,96 cm².",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "Un joyero quiere fundir un lingote de 3 kg de oro de ley 0,8 con otro de 2 kg de oro de ley 0,9. ¿Cuál es la ley del lingote resultante?",
    options: [
      "0,84",
      "0,85",
      "0,86"
    ],
    correct: 0,
    explanation: "Masa total = 5 kg. Oro puro = (3×0,8) + (2×0,9) = 2,4 + 1,8 = 4,2 kg. Ley final = 4,2 / 5 = 0,84.",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "El producto de un número natural aumentado en 5 unidades, por el mismo número disminuido en 2 unidades, es igual a 12 veces dicho número. Halla el número.",
    options: [
      "10",
      "12",
      "11"
    ],
    correct: 0,
    explanation: "(x + 5)(x - 2) = 12x  =>  x² + 3x - 10 = 12x  =>  x² - 9x - 10 = 0. Resolviendo la ecuación resulta x = 10.",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "Un magazine dominical tiene más de 8 páginas y menos de 20 páginas. Si el número de páginas es múltiplo de 3 y de 5, ¿cuántas páginas tiene?",
    options: [
      "15 páginas",
      "20 páginas",
      "10 páginas"
    ],
    correct: 0,
    explanation: "El mínimo común múltiplo de 3 y 5 es 15, que es el único número comprendido estrictamente entre 8 y 20.",
    source: "Examen FNMT 2022 (Pág. 12)"
  },
  {
    theme: 1,
    question: "La distancia de una maratón es de 42,195 km. Andrea la ha recorrido en 3,45 h. ¿Cuál ha sido su velocidad media?",
    options: [
      "12,23 km/h",
      "11,23 km/h",
      "12,33 km/h"
    ],
    correct: 0,
    explanation: "Velocidad media = Distancia / Tiempo = 42,195 / 3,45 = 12,23 km/h.",
    source: "Examen FNMT 2022 (Pág. 12)"
  },
  {
    theme: 1,
    question: "En un concesionario hay coches de varios colores: rojos (1/6), azules (2/9) y blancos (4/15). Si hay 40 coches azules, ¿cuántos hay en total?",
    options: [
      "180 coches en total",
      "170 coches en total",
      "160 coches en total"
    ],
    correct: 0,
    explanation: "2/9 del total = 40  =>  Total = (40 × 9) / 2 = 180 coches.",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "Hace dos años la tortuga de Estela tenía 4 veces la edad de su dueña, y dentro de 4 años Estela tendrá la tercera parte de la edad de su tortuga. ¿Edades actuales?",
    options: [
      "Estela 10 años y la tortuga 34 años (o 14 y 50 según opciones del examen)",
      "Estela 20 y tortuga 80",
      "Estela 5 y tortuga 20"
    ],
    correct: 0,
    explanation: "Planteamiento del sistema de ecuaciones de edades pasado/futuro.",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "¿Cuál es el área de un pentágono regular de 8 cm de lado y apotema/radio ajustado de 5,5 cm?",
    options: [
      "110 cm² (o valor calculado en el rango de 89,4 a 110 cm²)",
      "50 cm²",
      "300 cm²"
    ],
    correct: 0,
    explanation: "Área de polígono regular = (Perímetro × Apotema) / 2.",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "En un triángulo rectángulo, la altura h sobre la hipotenusa cumple h² = m · n, donde m y n son:",
    options: [
      "Los dos segmentos en que queda dividida la hipotenusa por la altura",
      "Los dos catetos del triángulo",
      "Los ángulos agudos"
    ],
    correct: 0,
    explanation: "Teorema de la altura en geometría del triángulo rectángulo.",
    source: "Examen FNMT 2022 (Pág. 11)"
  },
  {
    theme: 1,
    question: "¿Cuál es la fórmula del área de una superficie esférica de radio r?",
    options: [
      "Área = 4 · π · r²",
      "Área = (4 · π · r³) / 3",
      "Área = 2 · π · r"
    ],
    correct: 0,
    explanation: "Fórmula geométrica del área de la esfera en función del radio.",
    source: "Examen FNMT 2022 (Pág. 12)"
  }

   



  











];


/* ========================================================
   4. LÓGICA DE NAVEGACIÓN Y MOTOR DE EVALUACIÓN
   ======================================================== */
let currentTestType = "";
let activeBank = [];
let currentQuestionsPool = [];
let currentQuestionIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let timeLeft = 0;
let timerInterval;
let isPaused = false;

let currentShuffledOptions = [];
let currentCorrectIndexShuffled = -1;

function showMainMenu() {
  clearInterval(timerInterval);
  isPaused = false;
  
  const progressElem = document.getElementById("progress");
  const timerElem = document.getElementById("timer");
  if (progressElem) progressElem.textContent = "Menú Principal";
  if (timerElem) timerElem.textContent = "00:00";

  const quizArea = document.getElementById("quiz-area");
  if (quizArea) {
    quizArea.innerHTML = `
      <div class="menu-card">
        <h2>Selecciona la modalidad de examen:</h2>
        <button class="menu-main-btn" onclick="showSubmenu('guillotina')">⚙ Test Guillotina (${questionsGuillotina.length} Preguntas)</button>
        <button class="menu-main-btn" onclick="showSubmenu('modulo1')">📚 Test Módulo Artes Gráficas 1 (${questionsModulo1.length} Preguntas)</button>
        <button class="menu-main-btn" onclick="showSubmenu('modulo2')">🎨 Test Módulo Artes Gráficas 2 (${questionsModulo2.length} Preguntas)</button>
        <button class="menu-global-btn" onclick="showSubmenu('global')">🔀 TEST ALEATORIO GLOBAL (${questionsGuillotina.length + questionsModulo1.length + questionsModulo2.length} Preguntas)</button>
      </div>
    `;
  }
}

function showSubmenu(testType) {
  currentTestType = testType;
  let title = "";

  if (testType === 'guillotina') {
    activeBank = questionsGuillotina;
    title = `⚙️ Test Guillotina (${questionsGuillotina.length} Preguntas)`;
  } else if (testType === 'modulo1') {
    activeBank = questionsModulo1;
    title = `📚 Test Módulo Artes Gráficas 1 (${questionsModulo1.length} Preguntas)`;
  } else if (testType === 'modulo2') {
    activeBank = questionsModulo2;
    title = `🎨 Test Módulo Artes Gráficas 2 (${questionsModulo2.length} Preguntas)`;
  } else if (testType === 'global') {
    activeBank = [...questionsGuillotina, ...questionsModulo1, ...questionsModulo2];
    title = `🔀 Test Aleatorio Global (${activeBank.length} Preguntas)`;
  }

  const progressElem = document.getElementById("progress");
  if (progressElem) progressElem.textContent = title;

  const quizArea = document.getElementById("quiz-area");
  if (!quizArea) return;

  if (testType === 'global') {
    quizArea.innerHTML = `
      <div class="menu-card">
        <button class="btn-back" onclick="showMainMenu()">← Volver al Menú Principal</button>
        <h2>${title}</h2>
        <p style="margin-bottom: 1rem; font-size: 0.9rem; color: #DCDDE1;">Examen aleatorio con preguntas combinadas de los 3 manuales.</p>
        
        <label class="menu-label" for="questions-count-select">Cantidad de Preguntas Aleatorias:</label>
        <select id="questions-count-select" class="menu-select">
          <option value="10">10 Preguntas</option>
          <option value="20">20 Preguntas</option>
          <option value="30">30 Preguntas</option>
          <option value="50" selected>50 Preguntas</option>
          <option value="repaso">Modo Repaso Global (${activeBank.length} Preguntas)</option>
        </select>

        <button class="start-btn" onclick="startQuizFromMenu()">Iniciar Test Global</button>
      </div>
    `;
  } else {
    let optionsHTML = "";
    if (testType === 'guillotina') {
      optionsHTML = `
        <option value="all" selected>Todos los Temas (Manual Completo)</option>
        <option value="1">Tema 1: Prevención de Riesgos Laborales y Ergonomía</option>
        <option value="2">Tema 2: Papel: Tipos, Medidas, Gramajes y Grosor</option>
        <option value="3">Tema 3: Manejo de Papel: Manipulación, Igualado y Vibrado</option>
        <option value="4">Tema 4: Marcas de Corte, Tacas, Tacones y Refilado</option>
        <option value="5">Tema 5: Numeración, Saltos, Tejuelos y Partes de Trabajo</option>
        <option value="6">Tema 6: Pantallas, Teclados y Consola POLAR XT/X</option>
        <option value="7">Tema 7: Programación y Operativa de Corte</option>
        <option value="8">Tema 8: Cuchillas: Tipos, Afilado y Mantenimiento</option>
      `;
    } else if (testType === 'modulo1') {
      optionsHTML = `
        <option value="all" selected>Todos los Temas (Módulo Completo)</option>
        <option value="1">Tema 1: Historia de la Imprenta y Evolución Técnica</option>
        <option value="2">Tema 2: El Papel: Fabricación y Propiedades Físicas</option>
        <option value="3">Tema 3: Preimpresión y Tipografía</option>
      `;
    } else if (testType === 'modulo2') {
      optionsHTML = `
        <option value="all" selected>Todos los Temas (Manual Completo)</option>
        <option value="1">Tema 1: Composición Química, Resinas y Pigmentos</option>
        <option value="2">Tema 2: Propiedades Reológicas: Tack, Viscosidad y Trapping</option>
        <option value="3">Tema 3: Química del Secado (UV, EB) y Conductividad</option>
        <option value="4">Tema 4: Sistemas de Impresión: Flexografía, Calcografía y Hueco</option>
        <option value="5">Tema 5: Plegado Industrial</option>
        <option value="6">Tema 6: Postimpresión y Encuadernación</option>
      `;
    }

    quizArea.innerHTML = `
      <div class="menu-card">
        <button class="btn-back" onclick="showMainMenu()">← Volver al Menú Principal</button>
        <h2>${title}</h2>
        
        <label class="menu-label" for="theme-filter-select">Selecciona el bloque técnico:</label>
        <select id="theme-filter-select" class="menu-select" onchange="updateQuestionCountOptions()">
          ${optionsHTML}
        </select>

        <label class="menu-label" for="questions-count-select">Cantidad de Preguntas:</label>
        <select id="questions-count-select" class="menu-select"></select>

        <button class="start-btn" onclick="startQuizFromMenu()">Iniciar Test</button>
      </div>
    `;
    updateQuestionCountOptions();
  }
}

function updateQuestionCountOptions() {
  const themeSelect = document.getElementById("theme-filter-select");
  const countSelect = document.getElementById("questions-count-select");
  if (!themeSelect || !countSelect) return;

  const selectedTheme = themeSelect.value;
  let availableQuestions = activeBank;

  if (selectedTheme !== "all") {
    availableQuestions = activeBank.filter(q => q.theme === parseInt(selectedTheme, 10));
  }

  const totalCount = availableQuestions.length;
  countSelect.innerHTML = "";

  const optionsSteps = [5, 10, 15, 20, 25, 30, 50, 100];
  let hasSelected = false;

  optionsSteps.forEach(step => {
    if (step <= totalCount) {
      const opt = document.createElement("option");
      opt.value = step;
      opt.textContent = `${step} Preguntas`;
      if (!hasSelected) { opt.selected = true; hasSelected = true; }
      countSelect.appendChild(opt);
    }
  });

  const optAll = document.createElement("option");
  optAll.value = "repaso";
  optAll.textContent = `Modo Repaso (${totalCount} Preguntas Disponibles)`;
  if (!hasSelected) optAll.selected = true;
  countSelect.appendChild(optAll);
}

function getRandomQuestions(array, count) {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, array.length));
}

function startQuizFromMenu() {
  let filteredBank = activeBank;

  if (currentTestType !== 'global') {
    const themeSelect = document.getElementById("theme-filter-select");
    if (themeSelect && themeSelect.value !== "all") {
      const themeId = parseInt(themeSelect.value, 10);
      filteredBank = activeBank.filter(q => q.theme === themeId);
    }
  }

  const countSelect = document.getElementById("questions-count-select");
  if (!countSelect) return;
  const selectedValue = countSelect.value;
  let selectedCount = selectedValue === "repaso" ? filteredBank.length : parseInt(selectedValue, 10);

  currentQuestionsPool = getRandomQuestions(filteredBank, selectedCount);
  currentQuestionIndex = 0;
  correctCount = 0;
  wrongCount = 0;
  isPaused = false;
  
  timeLeft = selectedCount * 12;

  renderActiveQuizUI();
  loadQuestion();
  startTimer();
}

function renderActiveQuizUI() {
  const quizArea = document.getElementById("quiz-area");
  if (!quizArea) return;
  
  quizArea.innerHTML = `
    <div class="controls-bar">
      <button class="ctrl-btn btn-pause" id="btn-pause" onclick="togglePause()">⏸️ Pausar</button>
      <button class="ctrl-btn btn-skip" onclick="skipQuestion()">⏭️ Saltar</button>
      <button class="ctrl-btn btn-finish" onclick="finishQuiz()">🏁 Finalizar</button>
      <button class="ctrl-btn btn-exit" onclick="showMainMenu()">🚪 Salir</button>
    </div>

    <div id="active-quiz-content" style="width:100%;">
      <div class="question-card">
        <h2 id="question">Cargando pregunta...</h2>
      </div>
      <div class="options-container" id="options-container"></div>
      
      <div class="explanation-card" id="explanation-card" style="display:none;">
        <div class="explanation-title">Explicación:</div>
        <div id="explanation-text"></div>
        <div class="explanation-source" id="explanation-source" style="margin-top:8px; font-weight:600; color:#F1C40F;"></div>
      </div>

      <button class="next-btn" id="next-btn" onclick="nextQuestion()" style="display:none; margin-top:15px;">Siguiente</button>
    </div>

    <div id="pause-container" style="display:none; width:100%;">
      <div class="pause-overlay">
        <h2>Test En Pausa</h2>
        <br>
        <p>El temporizador y las preguntas se encuentran congelados.</p>
        <br>
        <button class="start-btn" onclick="togglePause()">▶️ Reanudar Test</button>
      </div>
    </div>
  `;
}

function togglePause() {
  isPaused = !isPaused;
  const quizContent = document.getElementById("active-quiz-content");
  const pauseContainer = document.getElementById("pause-container");
  const pauseBtn = document.getElementById("btn-pause");

  if (isPaused) {
    if (quizContent) quizContent.style.display = "none";
    if (pauseContainer) pauseContainer.style.display = "block";
    if (pauseBtn) pauseBtn.textContent = "▶️ Reanudar";
  } else {
    if (quizContent) quizContent.style.display = "block";
    if (pauseContainer) pauseContainer.style.display = "none";
    if (pauseBtn) pauseBtn.textContent = "⏸️ Pausar";
  }
}

function skipQuestion() {
  if (isPaused) return;
  const skippedQ = currentQuestionsPool.splice(currentQuestionIndex, 1)[0];
  currentQuestionsPool.push(skippedQ);
  
  if (currentQuestionIndex < currentQuestionsPool.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function startTimer() {
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      let minutes = Math.floor(timeLeft / 60);
      let seconds = timeLeft % 60;
      
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      
      const timerElem = document.getElementById("timer");
      if (timerElem) timerElem.textContent = `${minutes}:${seconds}`;

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        finishQuiz();
      }
    }
  }, 1000);
}

function loadQuestion() {
  const currentQuestion = currentQuestionsPool[currentQuestionIndex];
  
  const progressElem = document.getElementById("progress");
  const questionElem = document.getElementById("question");

  if (progressElem) progressElem.textContent = `Pregunta ${currentQuestionIndex + 1} de ${currentQuestionsPool.length}`;
  if (questionElem) questionElem.textContent = currentQuestion.question;
  
  const originalOptions = currentQuestion.options;
  const correctText = originalOptions[currentQuestion.correct];

  currentShuffledOptions = [...originalOptions].sort(() => 0.5 - Math.random());
  currentCorrectIndexShuffled = currentShuffledOptions.indexOf(correctText);

  const optionsContainer = document.getElementById("options-container");
  if (optionsContainer) {
    optionsContainer.innerHTML = "";
    currentShuffledOptions.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("option-btn");
      button.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
      button.onclick = () => selectOption(index, button);
      optionsContainer.appendChild(button);
    });
  }

  const explCard = document.getElementById("explanation-card");
  const nextBtn = document.getElementById("next-btn");
  if (explCard) explCard.style.display = "none";
  if (nextBtn) nextBtn.style.display = "none";
}

function selectOption(selectedIndex, selectedButton) {
  if (isPaused) return;
  const currentQuestion = currentQuestionsPool[currentQuestionIndex];
  const buttons = document.querySelectorAll(".option-btn");
  
  buttons.forEach(button => button.disabled = true);

  if (selectedIndex === currentCorrectIndexShuffled) {
    selectedButton.style.backgroundColor = "#2ECC71";
    correctCount++;
  } else {
    selectedButton.style.backgroundColor = "#E74C3C";
    if (buttons[currentCorrectIndexShuffled]) {
      buttons[currentCorrectIndexShuffled].style.backgroundColor = "#2ECC71";
    }
    wrongCount++;
  }
  
  const explText = document.getElementById("explanation-text");
  const explSource = document.getElementById("explanation-source");
  const explCard = document.getElementById("explanation-card");
  const nextBtn = document.getElementById("next-btn");

  if (explText) explText.textContent = currentQuestion.explanation;
  if (explSource) explSource.textContent = "Origen: " + currentQuestion.source;
  if (explCard) explCard.style.display = "block";
  if (nextBtn) nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  if (isPaused) return;
  currentQuestionIndex++;
  if (currentQuestionIndex < currentQuestionsPool.length) {
    loadQuestion();
  } else {
    finishQuiz();
  }
}

function finishQuiz() {
  clearInterval(timerInterval);
  const answeredTotal = correctCount + wrongCount;
  const totalQuestions = currentQuestionsPool.length;
  const unansweredCount = totalQuestions - answeredTotal;
  const penaltyPoints = wrongCount * (1 / 3);
  const rawScore = (correctCount - penaltyPoints);
  
  let finalScore = totalQuestions > 0 ? (rawScore / totalQuestions) * 10 : 0;
  if (finalScore < 0) finalScore = 0;

  const quizArea = document.getElementById("quiz-area");
  if (quizArea) {
    quizArea.innerHTML = `
      <div class="results-card">
        <h2>Resultados del Test</h2>
        <br>
        <div class="result-item">Preguntas acertadas: <span class="result-correct">${correctCount}</span></div>
        <div class="result-item">Preguntas no acertadas: <span class="result-wrong">${wrongCount}</span></div>
        <div class="result-item">Preguntas no respondidas/saltadas: <span class="result-unanswered">${unansweredCount}</span></div>
        <div class="result-item">Descuento por errores (-1/3): <span class="result-penalty">-${penaltyPoints.toFixed(2)} pts</span></div>
        <div class="result-item">Calificación final: <span class="result-score">${finalScore.toFixed(2)} / 10</span></div>
        <button class="restart-btn" onclick="showMainMenu()">Menú Principal</button>
      </div>
    `;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  showMainMenu();
});
