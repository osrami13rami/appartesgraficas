/* =========================================================================
   1. BANCO DE PREGUNTAS - TEST GUILLOTINA (POLAR 115)
   ========================================================================= */
const questionsGuillotina = [

  // ==========================================
  // BLOQUE I: PRL Y ERGONOMÍA (Theme 1)
  // ==========================================
  {
    theme: 1,
    question: "Atendiendo a los estudios ergonómicos en el manejo de cargas, ¿qué efecto tiene levantar una pila de papel de 20 kg con la espalda encorvada a unos 30°?",
    options: [
      "Actúa sobre la columna vertebral con un peso equivalente a 40 kg",
      "Actúa sobre la columna vertebral con un peso equivalente a 60 kg",
      "Mantiene la equivalencia de 20 kg debido a la palanca del centro de masa"
    ],
    correct: 1,
    explanation: "Levantar 20 kg flexionando el tronco a 30° multiplica la fuerza de palanca ejerciendo una presión equivalente a 60 kg sobre la columna vertebral[cite: 55].",
    source: "Manual POLAR 115Y (Pág. 55)[cite: 55]"
  },
  {
    theme: 1,
    question: "De acuerdo con el manual, ¿cuál es el peso aproximado de 1.000 pliegos de papel de cartas de 80 g/m²?",
    options: [
      "2.5 kg",
      "5 kg",
      "7.5 kg"
    ],
    correct: 1,
    explanation: "Una milla (1.000 pliegos) de papel formato carta de 80 g/m² arroja un peso total cercano a los 5 kg[cite: 55].",
    source: "Manual POLAR 115Y (Pág. 55)[cite: 55]"
  },
  {
    theme: 1,
    question: "Para evitar introducir la mano en la zona del pisón de la guillotina durante el trabajo, ¿qué elemento auxiliar es de uso obligatorio?",
    options: [
      "La regla metálica de ajuste",
      "El taco de madera",
      "El escuadradora de plástico antiestático"
    ],
    correct: 1,
    explanation: "Es obligatorio el uso del taco de madera para empujar o acoplar la posteta bajo la línea de corte sin arriesgar las manos[cite: 54].",
    source: "Manual POLAR 115Y (Pág. 54)[cite: 54]"
  },
  {
    theme: 1,
    question: "Al manipular 1.000 pliegos de 8 páginas de papel cromo estucado de 115 g/m², la resma resultante pesa 30 kg. ¿En cuántas partes se recomienda dividirla habitualmente para no sobrecargar la columna?",
    options: [
      "En dos partes de unos 15 kg",
      "En tres partes de 10 kg",
      "No se debe dividir; se debe manipular entera con transpaleta"
    ],
    correct: 0,
    explanation: "Para cumplir con la normativa ergonómica y no sobrepasar los límites recomendados de carga manual, la resma se divide en dos bloques de 15 kg[cite: 56].",
    source: "Manual POLAR 115Y (Pág. 56)[cite: 56]"
  },
  {
    theme: 1,
    question: "Indique cuál de las siguientes afirmaciones respecto a la prevención de riesgos en el taller de guillotinas es INCORRECTA:",
    options: [
      "Es obligatorio el uso de calzado de seguridad y protectores auditivos",
      "Está permitido utilizar cualquier solvente comercial para limpiar la mesa si agiliza el trabajo",
      "Las postetas y bloques de papel deben manejarse siempre con ambas manos"
    ],
    correct: 1,
    explanation: "Solo deben emplearse productos de limpieza autorizados por el fabricante que no emitan vapores inflamables ni dañen las superficies de la máquina[cite: 54].",
    source: "Manual POLAR 115Y (Pág. 54)[cite: 54]"
  },

  // ==========================================
  // BLOQUE II: PAPEL, FORMATOS Y GRAMAJES (Theme 2)
  // ==========================================
  {
    theme: 2,
    question: "¿Qué ingeniero berlinés desarrolló el estándar de formatos de papel basado en la norma DIN 476 adoptada en 1922?",
    options: [
      "Dr. Walter Porstmann",
      "Dr. Alois Senefelder",
      "Dr. Johannes Gutenberg"
    ],
    correct: 0,
    explanation: "El Dr. Walter Porstmann ideó el sistema normalizado DIN 476, origen del estándar internacional ISO 216[cite: 57].",
    source: "Manual POLAR 115Y (Pág. 57)[cite: 57]"
  },
  {
    theme: 2,
    question: "Según la norma ISO 216 / DIN 476, ¿cuál es la relación matemática entre los lados de un formato de la serie A?",
    options: [
      "1 a √3 (1:√3)",
      "1 a √2 (1:√2)",
      "1 a 1.618 (Proporción áurea)"
    ],
    correct: 1,
    explanation: "La relación geométrica constante entre el lado corto y el largo es de 1 a la raíz cuadrada de 2 (1:√2)[cite: 58].",
    source: "Manual POLAR 115Y (Pág. 58)[cite: 58]"
  },
  {
    theme: 2,
    question: "¿Cómo se calculan las dimensiones de los formatos de la Serie B según la norma ISO?",
    options: [
      "Es la media aritmética de los formatos correspondientes de la serie A",
      "Es la media geométrica de los valores del formato correspondiente y el inmediatamente superior de la serie A",
      "Es la media ponderada del formato A0 multiplicada por el factor 1,5"
    ],
    correct: 1,
    explanation: "Las cotas de la serie B corresponden a la media geométrica entre las magnitudes de los formatos A correlativos[cite: 58].",
    source: "Manual POLAR 115Y (Pág. 58)[cite: 58]"
  },
  {
    theme: 2,
    question: "¿Cuáles son las dimensiones exactas del formato C0 según la norma DIN/ISO?",
    options: [
      "1000 × 1414 mm",
      "917 × 1297 mm",
      "841 × 1189 mm"
    ],
    correct: 1,
    explanation: "Las medidas estandarizadas del formato base C0 para carpetas y sobres son 917 × 1297 mm[cite: 58, 59].",
    source: "Manual POLAR 115Y (Pág. 58-59)[cite: 58, 59]"
  },
  {
    theme: 2,
    question: "Según la norma DIN/ISO, ¿qué desviación o tolerancia se permite en las medidas de papel superiores a 600 mm?",
    options: [
      "± 1.5 mm",
      "± 2 mm",
      "± 3 mm"
    ],
    correct: 2,
    explanation: "Para pliegos de longitud superior a 600 mm, las tolerancias de fabricación admiten hasta ± 3 mm[cite: 58].",
    source: "Manual POLAR 115Y (Pág. 58)[cite: 58]"
  },
  {
    theme: 2,
    question: "¿Qué dimensiones corresponde al formato tradicional español denominado \"Folio\"?",
    options: [
      "215 × 315 mm",
      "215 × 157.5 mm",
      "215 × 285 mm"
    ],
    correct: 0,
    explanation: "El formato ibérico tradicional conocido como Folio tiene un tamaño normalizado de 215 × 315 mm[cite: 60].",
    source: "Manual POLAR 115Y (Pág. 60)[cite: 60]"
  },
  {
    theme: 2,
    question: "El formato de papel anglosajón \"Legal\" tiene unas medidas de 14 × 8 ½ pulgadas. ¿A cuántos milímetros equivale?",
    options: [
      "279 × 216 mm",
      "356 × 216 mm",
      "432 × 279 mm"
    ],
    correct: 1,
    explanation: "La conversión métrica oficial de 14 × 8.5 pulgadas da como resultado 356 × 216 mm[cite: 60].",
    source: "Manual POLAR 115Y (Pág. 60)[cite: 60]"
  },
  {
    theme: 2,
    question: "Según la clasificación del papel atendiendo a su gramaje, ¿en qué rango se consideran \"Cartulinas\"?",
    options: [
      "De 7 a 150 g/m²",
      "De 150 a 450 g/m²",
      "De 450 g/m² en adelante"
    ],
    correct: 1,
    explanation: "Se encuadran como cartulinas todos los papeles comprendidos dentro del rango de 150 a 450 g/m²[cite: 61].",
    source: "Manual POLAR 115Y (Pág. 61)[cite: 61]"
  },
  {
    theme: 2,
    question: "El espesor o grosor del papel se mide con un micrómetro en:",
    options: [
      "Gramos por metro cuadrado (g/m²)",
      "Micras (µm), equivalentes a milésimas de milímetro",
      "Puntos Din por milímetro cuadrado"
    ],
    correct: 1,
    explanation: "El espesor de hoja se expresa en micras (µm), donde 1 µm equivale a 0.001 mm[cite: 60].",
    source: "Manual POLAR 115Y (Pág. 60)[cite: 60]"
  },
  {
    theme: 2,
    question: "¿Qué define el \"volumen específico\" de un papel?",
    options: [
      "La diferencia de peso entre la resma estucada y la no estucada",
      "La relación entre el grosor y el gramaje del papel",
      "La cantidad máxima de aire contenida por resma en la mesa de corte"
    ],
    correct: 1,
    explanation: "El volumen específico mide la relación entre el grosor expresado en µm y el gramaje en g/m²[cite: 60].",
    source: "Manual POLAR 115Y (Pág. 60)[cite: 60]"
  },
  {
    theme: 2,
    question: "Trabajando con papel adhesivo en la guillotina, ¿cuál es la principal precaución técnica que se debe contemplar?",
    options: [
      "Incrementar la presión del pisón al máximo para evitar que resbale",
      "Limpiar de manera periódica escuadra, mesa, pisón y cuchilla ya que el adhesivo los impregna",
      "Desconectar la mesa de aire completamente para evitar el secado del pegamento"
    ],
    correct: 1,
    explanation: "La resina adhesiva que sangra por la presión ensucia las piezas de guillotina dificultando el deslizamiento[cite: 57].",
    source: "Manual POLAR 115Y (Pág. 57)[cite: 57]"
  },
  {
    theme: 2,
    question: "Al guillotinar cartón reciclado de muy alto gramaje, ¿qué riesgo directo corren los elementos de la máquina?",
    options: [
      "La rotura inmediata del rodillo sacador de aire",
      "Daños severos en la cuchilla por presencia de elementos nocivos como arena o metales",
      "Desprogramación del autómata Eltrotact por vibración excesiva"
    ],
    correct: 1,
    explanation: "Las impurezas duras (arena, grapas, metales) incrustadas en cartón reciclado mellan prematuramente el filo de la cuchilla[cite: 57].",
    source: "Manual POLAR 115Y (Pág. 57)[cite: 57]"
  },

  // ==========================================
  // BLOQUE III: MANEJO, IGUALADO Y TACAS (Theme 3)
  // ==========================================
  {
    theme: 3,
    question: "Durante la inspección del pliego antes del vibrado, si al exfoliar los pliegos estos se inclinan lateralmente y muestran un borde con suciedad, indica que:",
    options: [
      "El papel tiene exceso de carga estática",
      "Los pliegos no se han colocado correctamente a los lados en la máquina impresora",
      "La guillotina tiene la regla lateral desalineada"
    ],
    correct: 1,
    explanation: "La suciedad o desalineación en abanico refleja una deficiente alineación inicial en los marcadores de la imprenta[cite: 63].",
    source: "Manual POLAR 115Y (Pág. 63)[cite: 63]"
  },
  {
    theme: 3,
    question: "Cuando el papel impreso llega pegado a la guillotina por frescura de tinta o barniz, ¿qué maniobra realiza el operador de la vibradora antes de vibrar?",
    options: [
      "Aplicar polvos desincrustantes en las esquinas",
      "Exfoliar los pliegos (por ejemplo, esquinas delanteras y traseras) o enrollar pequeñas cantidades",
      "Meter la pila directamente en la guillotina con presión máxima de pisón"
    ],
    correct: 1,
    explanation: "La exfoliación manual o volteo de esquinas deshace el empaquetado por tinta fresca permitiendo la entrada de aire[cite: 63, 64].",
    source: "Manual POLAR 115Y (Pág. 63-64)[cite: 63, 64]"
  },
  {
    theme: 3,
    question: "Si el papel se muestra inestable y se enrolla en la regla trasera por ondulación longitudinal, ¿qué recurso de taller se puede colocar transversalmente debajo de los pliegos?",
    options: [
      "Un trozo de palo de escoba adecuado al formato",
      "Una pletina de acero templado",
      "Una chapa de protección de pisón acolchada"
    ],
    correct: 0,
    explanation: "Colocar un palo cilíndrico bajo la pila crea una contracurva longitudinal que aporta rigidez temporal al pliego[cite: 65].",
    source: "Manual POLAR 115Y (Pág. 65)[cite: 65]"
  },
  {
    theme: 3,
    question: "Para poder vibrar láminas de plástico que presentan una elevada adherencia entre sí, ¿qué técnica se utiliza?",
    options: [
      "Intercalar una hoja de papel entre cada lámina",
      "Aumentar al máximo el aire soplado en la vibradora",
      "Limpiar cada lámina con solvente no polar"
    ],
    correct: 0,
    explanation: "El papel actúa de aislante electromagnético / mecánico reduciendo la succión entre láminas de plástico[cite: 65, 66].",
    source: "Manual POLAR 115Y (Pág. 65-66)[cite: 65, 66]"
  },
  {
    theme: 3,
    question: "¿Cuál es la función principal del rodillo sacador de aire en la mesa vibradora?",
    options: [
      "Marcar la entrecalle para orientar el corte",
      "Extraer el aire entre los pliegos para facilitar el transporte y mejorar la calidad del corte",
      "Medir el grosor total de la posteta automáticamente"
    ],
    correct: 1,
    explanation: "El rodillo de prensado elimina el aire atrapado consolidando un bloque plano para un corte preciso[cite: 67].",
    source: "Manual POLAR 115Y (Pág. 67)[cite: 67]"
  },
  {
    theme: 3,
    question: "Al trabajar con el rodillo sacador de aire en pilas con gran cantidad de aire retenido, ¿a qué presión se debe ajustar el manómetro en el primer ciclo para evitar interrupciones de seguridad?",
    options: [
      "A 5 bares",
      "A 2 bares de manera estándar, o bajar a 0 bares para que presione solo por su propio peso",
      "A 10 bares de presión neumática continua"
    ],
    correct: 1,
    explanation: "En pilas inestables se desactiva o ajusta a 0-2 bares para que actúe únicamente el peso propio del rodillo[cite: 67].",
    source: "Manual POLAR 115Y (Pág. 67)[cite: 67]"
  },
  {
    theme: 3,
    question: "¿Cómo se denominan las marcas impresas que indican la entrada y el costado del pliego en la máquina de impresión y que deben hacerse coincidir con la escuadra de la guillotina?",
    options: [
      "Marcas de registro o cruces de ajuste",
      "Tacones de la máquina de impresión",
      "Tacas de cortado a sangre"
    ],
    correct: 1,
    explanation: "Los tacones marcan los puntos exactos de referencia en máquina de impresión que deben hacer tope en la guillotina[cite: 21].",
    source: "Manual POLAR 115Y (Pág. 21)[cite: 21]"
  },
  {
    theme: 3,
    question: "¿Qué diferencia fundamental existe entre un \"corte a sangre\" y un \"corte con entrecalles\"?",
    options: [
      "El corte a sangre requiere cuchilla de Widia y el de entrecalles cuchilla de acero",
      "En el corte a sangre la imagen supera el borde final sin márgenes en blanco; en el de entrecalles existe una separación hueca entre efectos",
      "El corte a sangre se hace sin pisón y el de entrecalles con pisón de baja presión"
    ],
    correct: 1,
    explanation: "El corte a sangre rebasa el área impresa; la entrecalle requiere un doble corte para eliminar una franja intermedia[cite: 22].",
    source: "Manual POLAR 115Y (Pág. 22)[cite: 22]"
  },
  {
    theme: 3,
    question: "Para determinar la cantidad de papel de una posteta antes del corte a grosso modo, ¿qué herramienta de medición manual se utiliza?",
    options: [
      "Micrómetro de contacto",
      "Vernier ajustable",
      "Espectrofotómetro de línea"
    ],
    correct: 1,
    explanation: "El calibre o vernier se aplica verticalmente sobre el borde de la pila para cuantificar la altura de papel[cite: 20].",
    source: "Manual POLAR 115Y (Pág. 20)[cite: 20]"
  },
  {
    theme: 3,
    question: "¿En qué consiste la llamada \"prueba de presión\" para determinar la cantidad de papel en taller?",
    options: [
      "En aplicar 4.500 daN en la guillotina durante 10 segundos",
      "En comparar la pila en cuestión con una pila de referencia presionando ambas desde arriba con el pulgar",
      "En medir la resistencia de la fibra mediante la penetración del hendedor"
    ],
    correct: 1,
    explanation: "Es un método empírico que compara el grado de compactación de la pila frente a un estándar mediante presión digital[cite: 20].",
    source: "Manual POLAR 115Y (Pág. 20)[cite: 20]"
  },

  // ==========================================
  // BLOQUE IV: NUMERACIÓN Y REGISTROS (Theme 4)
  // ==========================================
  {
    theme: 4,
    question: "Independientemente de si la numeración se imprime en suma o en resta, ¿cuál es SIEMPRE el orden de numeración dentro del pliego?",
    options: [
      "De abajo a arriba y de derecha a izquierda",
      "De arriba a abajo y de izquierda a derecha",
      "Siguiendo el sentido helicoidal de las agujas del reloj"
    ],
    correct: 1,
    explanation: "El protocolo de imposición fija la posición numérica descendiendo de arriba a abajo y avanzando de izquierda a derecha[cite: 25].",
    source: "Manual POLAR 115Y (Pág. 25)[cite: 25]"
  },
  {
    theme: 4,
    question: "En un pliego impreso a 4 efectos (cuadrantes), si una nota de numeración consta de 4 tableros de 10 resmas cada uno, ¿qué se indicará en la casilla \"AL Nº\" del tejuelo del Tablero Nº 1?",
    options: [
      "El número más alto de toda la orden de fabricación",
      "El efecto con la numeración más alta del cuadrante más bajo del pliego en dicho tablero",
      "El número total de pliegos dividido entre cuatro"
    ],
    correct: 1,
    explanation: "En la casilla 'AL Nº' del tejuelo se consigna la cifra máxima alcanzada en el cuadrante de menor rango numérico[cite: 28].",
    source: "Manual POLAR 115Y (Pág. 28)[cite: 28]"
  },
  {
    theme: 4,
    question: "¿Cuántos caracteres numéricos componen el campo \"Orden de Fabricación\" (O.F.) en los impresos y tejuelos oficiales?",
    options: [
      "6 caracteres",
      "9 caracteres",
      "12 caracteres"
    ],
    correct: 1,
    explanation: "El código numérico estandarizado de la Orden de Fabricación consta de 9 dígitos[cite: 28, 83].",
    source: "Manual POLAR 115Y (Pág. 28, 83)[cite: 28, 83]"
  },
  {
    theme: 4,
    question: "En el Documento de Reposiciones, cuando se anota la inutilización de Varios Pliegos completos, ¿cuál es una forma correcta de reflejar la cantidad en la columna \"Número de Cambios\"?",
    options: [
      "Hallar la diferencia de numeración en el cuadrante más bajo y multiplicarla por el número de efectos que componen el pliego",
      "Sumar las numeraciones de los cuatro cuadrantes y dividirlas por el total de resmas",
      "Anotar únicamente el número de pliegos afectados sin multiplicar por los efectos"
    ],
    correct: 0,
    explanation: "Se resta la cifra final e inicial del cuadrante de referencia y se multiplica el intervalo por el total de efectos por pliego[cite: 81].",
    source: "Manual POLAR 115Y (Pág. 81)[cite: 81]"
  },
  {
    theme: 4,
    question: "En el Parte de Trabajo individual, ¿qué código de letra se asigna en el campo \"TIPO HORAS\" a las realizadas fuera del horario habitual de trabajo?",
    options: [
      "N",
      "T",
      "E"
    ],
    correct: 2,
    explanation: "La letra 'E' señala las horas extraordinarias ejecutadas fuera de la jornada ordinaria[cite: 83].",
    source: "Manual POLAR 115Y (Pág. 83)[cite: 83]"
  },
  {
    theme: 4,
    question: "¿Cuántos dígitos numéricos representan el tiempo productivo del operario en el campo \"HORAS OPERARIO\" de un Parte de Trabajo?",
    options: [
      "Dos dígitos (horas enteras)",
      "Tres dígitos (el primero horas enteras y los dos siguientes partes centesimales)",
      "Cuatro dígitos (formato hora:minuto sexagesimal)"
    ],
    correct: 1,
    explanation: "El tiempo se registra en centésimas de hora mediante un código de tres cifras (ej. 150 = 1,5 horas)[cite: 83].",
    source: "Manual POLAR 115Y (Pág. 83)[cite: 83]"
  },
  {
    theme: 4,
    question: "En el Parte de Trabajo, ¿cuántos dígitos tiene el campo \"Puesto de trabajo OC/C\" si el operario trabaja CON máquina?",
    options: [
      "4 dígitos",
      "5 dígitos",
      "6 dígitos"
    ],
    correct: 2,
    explanation: "La identificación del puesto de trabajo asistido con maquinaria requiere una secuencia de 6 dígitos[cite: 83].",
    source: "Manual POLAR 115Y (Pág. 83)[cite: 83]"
  },
  {
    theme: 4,
    question: "En la cumplimentación del Parte Diario de Equipo, si NO se elaboran notas de numeración completas, ¿cómo se anotan los \"NÚMEROS ELABORADOS\"?",
    options: [
      "DEL número más bajo AL más alto de toda la Orden de Fabricación",
      "DEL número más bajo AL más alto del cuadrante más bajo de todas las resmas elaboradas",
      "Se deja en blanco y se adjunta la copia del tejuelo"
    ],
    correct: 1,
    explanation: "Se anotan de forma correlativa desde la cifra inferior a la superior pertenecientes al primer cuadrante completado[cite: 85].",
    source: "Manual POLAR 115Y (Pág. 85)[cite: 85]"
  },
  {
    theme: 4,
    question: "En la casilla \"CANTIDAD ACEPTADA / CANTIDAD RECHAZADA\" del Parte de Trabajo, ¿cómo se reflejan las postetas que no llegan a completar una resma?",
    options: [
      "En número absoluto de pliegos entre paréntesis",
      "En partes decimales de resma tras el punto que separa la parte entera",
      "Se redondea siempre a la resma superior"
    ],
    correct: 1,
    explanation: "Las fracciones de resma se anotan en el sistema decimal a la derecha del punto indicador[cite: 84].",
    source: "Manual POLAR 115Y (Pág. 84)[cite: 84]"
  },

  // ==========================================
  // BLOQUE V: PRINCIPIOS FÍSICOS Y PRENSADO (Theme 5)
  // ==========================================
  {
    theme: 5,
    question: "Durante la acción de corte, la cuchilla penetra en el papel y el listón actúa de contraherramienta. ¿Qué efecto genera la fuerza resultante \"C\" debida al bisel de la cuchilla?",
    options: [
      "Tira del papel hacia la regla trasera de la escuadra",
      "Empuja el material a cortar hacia delante/derecha conforme al ángulo de la cuchilla",
      "Eleva el papel verticalmente anulando la presión del pisón"
    ],
    correct: 1,
    explanation: "El plano inclinado de la cuchilla induce una fuerza tangencial que empuja el taco cortado hacia delante[cite: 38].",
    source: "Manual POLAR 115Y (Pág. 38)[cite: 38]"
  },
  {
    theme: 5,
    question: "¿Cuál es la función principal de la fuerza de prensado \"D\" ejercida por el pisón antes de que la cuchilla penetre el papel?",
    options: [
      "Evitar que la cuchilla se caliente por fricción",
      "Evitar que el material a cortar se desplace o sea rasgado por el ángulo de la cuchilla",
      "Expulsar el aceite hidráulico de la mesa de aire"
    ],
    correct: 1,
    explanation: "La presión previa inmoviliza la pila evitando el desplazamiento lateral generado por la cuña del bisel[cite: 39].",
    source: "Manual POLAR 115Y (Pág. 39)[cite: 39]"
  },
  {
    theme: 5,
    question: "¿Qué forma adopta la distribución de la presión ejercida por el pisón dentro de la pila de papel?",
    options: [
      "Esférica concéntrica",
      "Piramidal",
      "Rectangular uniforme hasta la base de la mesa"
    ],
    correct: 1,
    explanation: "Las líneas de tensión del pisón se propagan hacia la base de la mesa formando un cono o pirámide de fuerza[cite: 40].",
    source: "Manual POLAR 115Y (Pág. 40)[cite: 40]"
  },
  {
    theme: 5,
    question: "Si la fuerza de prensado es excesiva o la cuchilla carece de filo, ¿qué ocurre con los pliegos superiores de la pila?",
    options: [
      "Se cortan más cortos que los pliegos inferiores",
      "Sufren una carga excesiva, pudiendo resultar más largos e incluso llegar a rasgarse",
      "Se sueldan entre sí por la fricción molecular del listón"
    ],
    correct: 1,
    explanation: "El aprisionamiento excesivo estira mecánicamente los pliegos superiores produciendo cortes más largos o desgarros[cite: 40].",
    source: "Manual POLAR 115Y (Pág. 40)[cite: 40]"
  },
  {
    theme: 5,
    question: "En una guillotina POLAR 115, ¿cuál es el rango de ajuste continuo de la presión de prensado del pisón?",
    options: [
      "150 a 3.000 daN (kp)",
      "150 a 4.500 daN (kp)",
      "150 a 5.500 daN (kp)"
    ],
    correct: 1,
    explanation: "El sistema hidráulico de regulación de presión en el modelo 115 permite valores desde 150 hasta 4.500 daN[cite: 45].",
    source: "Manual POLAR 115Y (Pág. 45)[cite: 45]"
  },
  {
    theme: 5,
    question: "Para evitar que el dentado del pisón deje marcas en papeles sensibles, se aplica la chapa de protección. Para extraerla manualmente, ¿a qué distancia por encima de la mesa debe colocarse el pisón antes de accionar los pernos?",
    options: [
      "A 1 cm aproximadamente",
      "A unos 5 cm por encima de la mesa",
      "A la altura máxima del Punto Muerto Superior (PMS)"
    ],
    correct: 1,
    explanation: "La chapa de protección se libera de sus fiadores posicionando el pisón a 5 cm de la mesa[cite: 46].",
    source: "Manual POLAR 115Y (Pág. 46)[cite: 46]"
  },
  {
    theme: 5,
    question: "¿Qué herramienta del utillaje se emplea para empujar hacia atrás los pernos de fijación (6.2) y retirar la chapa de protección del pisón?",
    options: [
      "Una llave Allen de 8 mm",
      "Las puntas de los mangos de la cuchilla",
      "El destornillador dinamométrico del cambio de cuchilla"
    ],
    correct: 1,
    explanation: "Se insertan las puntas cónicas de los mangos de cuchilla para vencer los pernos que sujetan la chapa[cite: 46].",
    source: "Manual POLAR 115Y (Pág. 46)[cite: 46]"
  },
  {
    theme: 5,
    question: "En el funcionamiento de la mesa de aire, ¿qué sucede si se acciona la tecla de aire (16) DOS VECES consecutivas?",
    options: [
      "Se conecta el aire solo para la mesa delantera",
      "Se conecta la alimentación de aire para la mesa completa (delantera y trasera)",
      "Se activa el efecto de succión inversa de la mesa"
    ],
    correct: 1,
    explanation: "Pulsar la tecla dos veces activa el soplado continuado en la totalidad de las boquillas de la mesa[cite: 47].",
    source: "Manual POLAR 115Y (Pág. 47)[cite: 47]"
  },
  {
    theme: 5,
    question: "Con la escuadra automática conectada, ¿cuándo se activa automáticamente el suministro de aire de la mesa?",
    options: [
      "Al presionar el pedal del pisón",
      "Con cada retroceso de la escuadra",
      "Únicamente cuando la cuchilla alcanza el listón"
    ],
    correct: 1,
    explanation: "El aire de la mesa se conecta en sincronía con el movimiento de retroceso del tope posterior[cite: 47, 96].",
    source: "Manual POLAR 115Y (Pág. 47, 96)[cite: 47, 96]"
  },

  // ==========================================
  // BLOQUE VI: OPERACIÓN Y PANTALLA (Theme 6)
  // ==========================================
  {
    theme: 6,
    question: "¿Qué diferencia técnica existe en la pantalla entre los modelos POLAR X y POLAR XT?",
    options: [
      "Los modelos X disponen de pantalla táctil TFT de 15\" y los XT se manejan con teclado giratorio",
      "Los modelos XT disponen de pantalla táctil (Touch-Screen) TFT de 15\", mientras los X se manejan principalmente por teclas del pupitre",
      "El modelo X no permite guardar programas en memoria intermedia"
    ],
    correct: 1,
    explanation: "La versión XT incorpora pantalla color táctil de 15 pulgadas, mientras que la versión X se gestiona desde el teclado[cite: 43, 44, 49].",
    source: "Manual POLAR 115Y (Pág. 43-49)[cite: 43, 44, 49]"
  },
  {
    theme: 6,
    question: "¿Cuántos segmentos de memoria independientes existen en el sistema de control POLAR y cuántos programas puede almacenar cada uno?",
    options: [
      "4 segmentos (A, B, C, D) con 250 programas cada uno",
      "2 segmentos (A y B) con capacidad de 999 programas cada uno",
      "1 único segmento continuo de 5.000 pasos"
    ],
    correct: 1,
    explanation: "La arquitectura de memoria dispone de dos bancos (A y B) capaces de albergar hasta 999 programas cada uno[cite: 49].",
    source: "Manual POLAR 115Y (Pág. 49)[cite: 49]"
  },
  {
    theme: 6,
    question: "Para encender la guillotina POLAR, tras girar el interruptor general (1) de \"0\" a \"1\", ¿qué tecla debe accionarse para arrancar el motor de accionamiento general?",
    options: [
      "La tecla \"0\" (3)",
      "La tecla de inicio (2)",
      "El pedal de pisón dos veces"
    ],
    correct: 1,
    explanation: "La puesta en marcha del motor hidráulico y de accionamiento principal se realiza presionando la tecla de inicio (2)[cite: 41].",
    source: "Manual POLAR 115Y (Pág. 41)[cite: 41]"
  },
  {
    theme: 6,
    question: "Al intentar introducir una medida teórica no alcanzable por la escuadra (demasiado grande o pequeña), la máquina reacciona:",
    options: [
      "Bloqueando el interruptor principal con señal luminosa roja fija",
      "Emitiendo un sonido silbante y mostrando en pantalla: \"MED. DEMASIADO GRANDE/PEQUEÑO\"",
      "Ajustando automáticamente la medida al límite más cercano sin avisar"
    ],
    correct: 1,
    explanation: "El sistema de seguridad emite una señal acústica y un texto de advertencia al superar los límites físicos[cite: 52].",
    source: "Manual POLAR 115Y (Pág. 52)[cite: 52]"
  },
  {
    theme: 6,
    question: "En el modelo POLAR X, ¿cómo se efectúa el posicionado de la escuadra tras introducir una medida métrica en el teclado numérico?",
    options: [
      "Manteniendo pulsado el pedal de pie durante 3 segundos",
      "Accionando brevemente 2 veces la tecla de igualdad (=)",
      "Pulsando el botón rojo de parada de emergencia"
    ],
    correct: 1,
    explanation: "La confirmación de desplazamiento de la escuadra se ejecuta pulsando la tecla '=' dos veces consecutivas[cite: 52].",
    source: "Manual POLAR 115Y (Pág. 52)[cite: 52]"
  },
  {
    theme: 6,
    question: "¿Cómo se introduce una medida en pulgadas con fracción en el teclado numérico (por ejemplo, 12 ½\")?",
    options: [
      "Tecleando 12 . 5 0 0 y la tecla de pulgadas",
      "Tecleando 1 2 + 1 ÷ 2 =",
      "Tecleando 1 2 / 1 / 2 seguido de Enter"
    ],
    correct: 1,
    explanation: "El procesador resuelve la fracción operando la expresión aritmética de adición y división (1 2 + 1 ÷ 2 =)[cite: 52].",
    source: "Manual POLAR 115Y (Pág. 52)[cite: 52]"
  },
  {
    theme: 6,
    question: "En la pantalla del menú \"Datos de programa\", ¿dónde queda siempre posicionado el cursor del paso en los modelos XT?",
    options: [
      "En la esquina superior izquierda",
      "Siempre posicionado en el centro de la pantalla, desplazándose los pasos",
      "En la barra de estado inferior junto a los pictogramas de aire"
    ],
    correct: 1,
    explanation: "El visor mantiene el cursor fijo en la franja central mientras la secuencia de cortes se desplaza verticalmente[cite: 44].",
    source: "Manual POLAR 115Y (Pág. 44)[cite: 44]"
  },
  {
    theme: 6,
    question: "¿Para qué sirve la tecla o función \"QUICKINFO\" disponible en la barra derecha de la pantalla en los modelos XT?",
    options: [
      "Para ver el tiempo restante de vida útil de la cuchilla",
      "Para visualizar una información rápida de ayuda sobre la funcionalidad de cualquier tecla táctil al tocarla",
      "Para enviar un reporte de avería directamente al servicio técnico vía Ethernet"
    ],
    correct: 1,
    explanation: "Quickinfo actúa como ayuda contextual mostrando la descripción e instrucciones de cualquier icono seleccionado[cite: 44].",
    source: "Manual POLAR 115Y (Pág. 44)[cite: 44]"
  },
  {
    theme: 6,
    question: "En el modelo POLAR X, para introducir texto en claro en la pantalla de información, ¿qué tecla del teclado numérico activa el teclado alfabético superpuesto?",
    options: [
      "La tecla de suma (+)",
      "La tecla de multiplicar (×)",
      "La tecla de borrado (C)"
    ],
    correct: 1,
    explanation: "Pulsar la tecla de multiplicación (×) abre el teclado desplegable para escribir comentarios alfanuméricos[cite: 45, 60].",
    source: "Manual POLAR 115Y (Pág. 45, 60)[cite: 45, 60]"
  },
  {
    theme: 6,
    question: "En una pantalla táctil XT, para mover el teclado alfabético superpuesto a otra posición deseada, se debe:",
    options: [
      "Tocar la \"patilla\" roja en el teclado y luego tocar el área elegida de la pantalla",
      "Arrastrarlo con dos dedos simultáneamente",
      "Mantener pulsada la tecla de espacio durante 5 segundos"
    ],
    correct: 0,
    explanation: "El teclado flotante se reubica seleccionando su lengüeta roja y marcando el nuevo destino táctil[cite: 45, 61].",
    source: "Manual POLAR 115Y (Pág. 45, 61)[cite: 45, 61]"
  },
  {
    theme: 6,
    question: "En la pantalla de selección de programa, ¿de qué color se muestra el \"programa libre\" recomendado dentro del segmento de memoria?",
    options: [
      "Amarillo fosforescente",
      "Verde",
      "Azul cobalto"
    ],
    correct: 1,
    explanation: "El sistema resalta en color verde la primera casilla de memoria desocupada para grabar un nuevo programa[cite: 53].",
    source: "Manual POLAR 115Y (Pág. 53)[cite: 53]"
  },
  {
    theme: 6,
    question: "Al realizar la búsqueda de un pedido almacenado introduciendo solo una parte del nombre, si existen varios pedidos que coinciden, el sistema muestra:",
    options: [
      "Un mensaje de error bloqueando la escuadra",
      "El número de programa más probable cuyo nombre o pedido empieza con las letras o números introducidos",
      "Todos los programas superpuestos en pantalla impidiendo la selección"
    ],
    correct: 1,
    explanation: "El motor de búsqueda propone la entrada más afín al prefijo tecleado[cite: 54].",
    source: "Manual POLAR 115Y (Pág. 54)[cite: 54]"
  },
  {
    theme: 6,
    question: "Si en el menú de borrado masivo de programas de una memoria se introduce el rango \"1 - 999\", ¿qué consecuencia se produce?",
    options: [
      "Se borran únicamente los primeros 9 programas",
      "Se borrará la memoria completamente",
      "La máquina solicita una clave de administrador de 6 dígitos"
    ],
    correct: 1,
    explanation: "Especificar el rango total de índices (1 al 999) limpia la totalidad de la memoria activa[cite: 62, 63].",
    source: "Manual POLAR 115Y (Pág. 62-63)[cite: 62, 63]"
  },
  {
    theme: 6,
    question: "¿Qué sucede con los programas que tienen activada la \"Protección de programa\" si se ejecuta una orden de borrado de memoria?",
    options: [
      "Se borran igual sin advertencia",
      "Se mantienen en la memoria y solo se pueden borrar tras revocar dicha protección",
      "Se convierten automáticamente en programas temporales de lectura"
    ],
    correct: 1,
    explanation: "Los archivos con atributo de protección no se eliminan en operaciones masivas hasta desactivar el bloqueo[cite: 63].",
    source: "Manual POLAR 115Y (Pág. 63)[cite: 63]"
  },
  {
    theme: 6,
    question: "¿En qué consiste la función \"Convertir bloque ET en medidas absolutas\"?",
    options: [
      "En transformar las repeticiones de Eltrotact en posiciones individuales absolutas para facilitar la corrección y compensación de deformación",
      "En pasar las medidas de milímetros a pulgadas en el bloque activo",
      "En enviar el programa a la red CIP-3"
    ],
    correct: 0,
    explanation: "Desglosa los bucles de repetición en pasos individuales con coordenadas fijas para realizar ajustes de precisión[cite: 57, 104].",
    source: "Manual POLAR 115Y (Pág. 57, 104)[cite: 57, 104]"
  },

  // ==========================================
  // BLOQUE VII: DISPOSITIVOS ESPECIALES (Theme 7)
  // ==========================================
  {
    theme: 7,
    question: "¿Qué función cumple el dispositivo de seguridad y apoyo denominado \"Soltar el pisón en PMI\" (Punto Muerto Inferior)?",
    options: [
      "Mantiene el pisón abajo durante 30 segundos tras cortar",
      "Permite que el pisón se eleve antes, provocando una puesta en marcha de la escuadra más rápida",
      "Desconecta el motor principal para ahorrar energía"
    ],
    correct: 1,
    explanation: "Libera la presión del pisón en el punto inferior acelerando el retorno del grupo y el movimiento de la escuadra[cite: 97].",
    source: "Manual POLAR 115Y (Pág. 97)[cite: 97]"
  },
  {
    theme: 7,
    question: "¿En qué consiste el sistema \"Fixomat\"?",
    options: [
      "En un dispositivo de cambio rápido de cuchilla en 2 minutos",
      "En guías de registro programables que convierten la superficie plana de la escuadra en puntos de apoyo para compensar bordes abombados",
      "En un brazo robótico de descarga trasera de desperdicios"
    ],
    correct: 1,
    explanation: "Dispone de puntas retráctiles en la escuadra que sirven de topes puntuales ante bordes irregulares o cóncavos[cite: 66, 120].",
    source: "Manual POLAR 115Y (Pág. 66, 120)[cite: 66, 120]"
  },
  {
    theme: 7,
    question: "La \"Escuadra Giratoria\" se utiliza mecánicamente para:",
    options: [
      "Inclinar la escuadra en sentido vertical para evitar la diferencia de corte superior e inferior",
      "Corregir por motor el ángulo de la escuadra, torciendo la línea de corte para compensar impresiones cruzadas o no paralelas",
      "Girar el pliego 180° automáticamente en la mesa trasera"
    ],
    correct: 1,
    explanation: "Modifica mediante motor el ángulo horizontal de la escuadra para adaptar el corte a pliegos con impresión desviada[cite: 118, 147].",
    source: "Manual POLAR 115Y (Pág. 118, 147)[cite: 118, 147]"
  },
  {
    theme: 7,
    question: "¿Cuál es la aplicación principal de la \"Escuadra Inclinable\"?",
    options: [
      "Girar la pila 90° a la derecha en la mesa delantera",
      "Adaptar la escuadra en sentido vertical (posiciones undercut u overcut) para corregir desviaciones entre el corte superior e inferior",
      "Sujetar las etiquetas de pequeño formato durante la expulsión"
    ],
    correct: 1,
    explanation: "Ajusta la inclinación vertical de la escuadra para evitar diferencias dimensionales entre las hojas de arriba y de abajo[cite: 119, 148].",
    source: "Manual POLAR 115Y (Pág. 119, 148)[cite: 119, 148]"
  },
  {
    theme: 7,
    question: "¿Qué función realiza el \"Sujetador en la escuadra\" (o sujetador del rastrillo)?",
    options: [
      "Presionar la cuchilla contra el listón",
      "Bajar sobre el material para sujetar los pliegos superiores ondulados o levantados, permitiendo hacer un tope correcto contra la escuadra",
      "Aspirar el polvo de la mesa de corte"
    ],
    correct: 1,
    explanation: "Prensa los pliegos superiores combados impidiendo que se sobrepongan al rastrillo de la escuadra[cite: 122, 151].",
    source: "Manual POLAR 115Y (Pág. 122, 151)[cite: 122, 151]"
  },
  {
    theme: 7,
    question: "El \"Sujetador delante de la cuchilla\" se utiliza principalmente para:",
    options: [
      "Evitar que los productos cortados salten incontroladamente o se muevan por el colchón de aire delante de la cuchilla",
      "Reemplazar la presión hidráulica del pisón",
      "Afilar la cuchilla mientras realiza la carrera de descenso"
    ],
    correct: 0,
    explanation: "Fija los productos pequeños al frente impidiendo que salgan despedidos o se desordenen con el aire de la mesa[cite: 114, 116].",
    source: "Manual POLAR 115Y (Pág. 114, 116)[cite: 114, 116]"
  },
  {
    theme: 7,
    question: "En el sistema \"Autotrim\", ¿qué ocurre cuando la mesa delantera móvil se abre durante el desarrollo del programa?",
    options: [
      "La máquina se apaga por fallo de barrera",
      "Se crea una ranura para la caída y eliminación automática de desperdicios de limpia o entrecalles",
      "Se activa el pedal de pisón de forma continua"
    ],
    correct: 1,
    explanation: "Se genera una apertura frontal por la que se evacúan automáticamente virutas y tiras de desecho[cite: 111].",
    source: "Manual POLAR 115Y (Pág. 111)[cite: 111]"
  },
  {
    theme: 7,
    question: "¿Qué función realiza la \"Regla lateral retráctil\" (VL)?",
    options: [
      "Bajar para servir de alineación lateral en el proceso de carga o alineación y ocultarse para permitir el paso del papel",
      "Medir el gramaje exacto mediante fotocélula de reflexión",
      "Limpiar la cera de la mesa delantera"
    ],
    correct: 0,
    explanation: "Emerge para escuadrar lateralmente la posteta y se oculta bajo la mesa para no entorpecer el desplazamiento del papel[cite: 146].",
    source: "Manual POLAR 115Y (Pág. 146)[cite: 146]"
  },

  // ==========================================
  // BLOQUE VIII: PROGRAMACIÓN AVANZADA (Theme 8)
  // ==========================================
  {
    theme: 8,
    question: "Dentro de las reglas fundamentales de la secuencia \"Eltrotact\" libremente programable, ¿qué parámetro define el número de cortes que se deben ejecutar antes de pasar al siguiente paso del programa?",
    options: [
      "NM (Medida del producto)",
      "NZ (Cantidad del producto)",
      "GS (Número total de cortes)"
    ],
    correct: 2,
    explanation: "El término GS (Gesamtschnitt) indica el recuento de golpes de corte a realizar en la secuencia programada[cite: 101, 104].",
    source: "Manual POLAR 115Y (Pág. 101, 104)[cite: 101, 104]"
  },
  {
    theme: 8,
    question: "Si en un programa Eltrotact no se define ninguna medida inicial de corte, ¿qué toma el sistema de control como punto de partida?",
    options: [
      "El límite de carrera posterior (115 cm)",
      "La posición actual de la escuadra",
      "La medida cero de la cuchilla"
    ],
    correct: 1,
    explanation: "El autómata adopta la cota real en la que está posicionada la escuadra en ese momento[cite: 101].",
    source: "Manual POLAR 115Y (Pág. 101)[cite: 101]"
  },
  {
    theme: 8,
    question: "En un programa Eltrotact con la secuencia 101.000 (inicio) y NM 10.000 (medida de producto de 10 cm), al llegar al corte final cerca de la cuchilla donde la escuadra no puede posicionar 1 cm restante, la máquina:",
    options: [
      "Se bloquea emitiendo un fallo de sistema",
      "Se posiciona a la medida del producto (10 cm) y solicita la orden de \"girar el producto\"",
      "Realiza un corte rápido automático de desperdicio"
    ],
    correct: 1,
    explanation: "Al aproximarse a la zona ciega de la escuadra, se ajusta al ancho del producto y demanda el giro manual de la pila[cite: 102].",
    source: "Manual POLAR 115Y (Pág. 102)[cite: 102]"
  },
  {
    theme: 8,
    question: "Al confeccionar un programa de corte angular para un pliego de 70 × 100 cm, ¿cual es el procedimiento correcto?",
    options: [
      "Cortar los 4 lados secuencialmente sin girar el pliego",
      "Cortar primero el lado longitudinal, girar 90° apoyando el canto cortado en la regla lateral y cortar el lado corto",
      "Cortar primero en cruz las dos diagonales"
    ],
    correct: 1,
    explanation: "Se efectúa el primer corte de referencia en el lado largo y se voltea a 90° haciendo tope sobre el lado ya rectificado[cite: 68].",
    source: "Manual POLAR 115Y (Pág. 68)[cite: 68]"
  },
  {
    theme: 8,
    question: "En un programa de \"Corte Omnidireccional\", ¿cuántas veces se gira el pliego 90° en la misma dirección tras el primer corte para igualar todos los bordes?",
    options: [
      "2 veces",
      "3 veces",
      "4 veces"
    ],
    correct: 1,
    explanation: "Se realizan 3 giros sucesivos a 90° para sanear los 4 cantos del pliego[cite: 69].",
    source: "Manual POLAR 115Y (Pág. 69)[cite: 69]"
  },
  {
    theme: 8,
    question: "¿Qué ventaja presenta la función \"Programar durante el corte\"?",
    options: [
      "Permite cortar sin necesidad de que baje el pisón",
      "Las medidas reales de corte y funciones adicionales activadas se asignan automáticamente al programa mientras se corta la primera pila",
      "Transmite las medidas a la guillotina mediante sensores ópticos de infrarrojos"
    ],
    correct: 1,
    explanation: "Registra automáticamente las cuotas de posicionado y acciones auxiliares conforme el operario las realiza en vivo[cite: 100].",
    source: "Manual POLAR 115Y (Pág. 100)[cite: 100]"
  },
  {
    theme: 8,
    question: "En los \"Programas de formato\" automáticos, ¿cuáles son los datos básicos que el operador debe introducir para que la máquina genere el programa de corte completo?",
    options: [
      "Solo el peso de la resma y el código de cuchilla",
      "Lado de aplicación, formato de pliego, medida de margen, tamaño de producto final y cortes intermedios",
      "La velocidad del motor y el tipo de acero de la cuchilla"
    ],
    correct: 1,
    explanation: "Requiere conocer las dimensiones del pliego base, manguetas, entrecalles y cota del producto acabado[cite: 105, 106].",
    source: "Manual POLAR 115Y (Pág. 105-106)[cite: 105, 106]"
  },
  {
    theme: 8,
    question: "¿Para qué sirve la función de \"Compensación de medida\"?",
    options: [
      "Para corregir las diferencias de dilatación de la fibra midiendo la distancia entre el primer y el último producto del pliego directo en la máquina",
      "Para reajustar el cero de la pantalla tras cambiar el listón de corte",
      "Para equilibrar el peso de las tiras de papel en la mesa de aire"
    ],
    correct: 0,
    explanation: "Calcula y distribuye las diferencias de cota provocadas por alteraciones higrométricas en la fibra del papel[cite: 98].",
    source: "Manual POLAR 115Y (Pág. 98)[cite: 98]"
  },
  {
    theme: 8,
    question: "Al cortar tiras cortas o largas de un pliego impreso con pisón, ¿por qué se recomienda girar la superficie de corte hacia la regla lateral?",
    options: [
      "Porque la deformación magnética atrae el papel",
      "Porque en la zona donde presiona el pisón la tira se reduce un poco en su altura, facilitando la alineación de la siguiente tira",
      "Para que la taca de impresión quede mirando hacia el operario"
    ],
    correct: 1,
    explanation: "La zona aplastada por el pisón presenta un grosor levemente menor facilitando el tope de las tiras subsiguientes[cite: 121].",
    source: "Manual POLAR 115Y (Pág. 121)[cite: 121]"
  },
  {
    theme: 8,
    question: "¿Qué ajuste realiza la función \"Corrección del material\"?",
    options: [
      "Introduce un factor de compensación cuando la parte trasera del pliego resulta de diferente tamaño a la delantera tras partir en dos",
      "Cambia el ángulo de reafilado de la cuchilla automáticamente",
      "Aumenta la velocidad del avance rápido de la escuadra"
    ],
    correct: 0,
    explanation: "Corrige las divergencias de medida observadas entre la mitad anterior y posterior del pliego al ser troceado[cite: 108].",
    source: "Manual POLAR 115Y (Pág. 108)[cite: 108]"
  },

  // ==========================================
  // BLOQUE IX: SEGURIDAD Y CUCHILLAS (Theme 9)
  // ==========================================
  {
    theme: 9,
    question: "¿Cuáles son los componentes principales del sistema de accionamiento del corte para garantizar la seguridad del operario?",
    options: [
      "Pedal único con trinquete de bloqueo mecánico",
      "Mando bimanual con simultaneidad y bloqueo de repetición de ciclo",
      "Célula fotoeléctrica infrarroja integrada en la empuñadura de la rueda de mano"
    ],
    correct: 1,
    explanation: "Exige accionar dos botones a la vez en un margen de tiempo estricto para impedir operaciones no deseadas[cite: 124].",
    source: "Manual POLAR 115Y (Pág. 124)[cite: 124]"
  },
  {
    theme: 9,
    question: "Si una persona rompe la barrera de luz durante el movimiento de descenso de la cuchilla y el pisón:",
    options: [
      "La máquina completa el corte y suena un timbre de aviso",
      "El pisón y la cuchilla se paran inmediatamente, suena una señal acústica y el monitor indica \"CORTE INTERRUMPIDO - BARRERA DE LUZ INTERRUMPIDA\"",
      "Se invierte el sentido del motor principal y la escuadra retrocede al fondo"
    ],
    correct: 1,
    explanation: "La interrupción del haz infrarrojo desembraga el freno al instante deteniendo de inmediato el ciclo de corte[cite: 45].",
    source: "Manual POLAR 115Y (Pág. 45)[cite: 45]"
  },
  {
    theme: 9,
    question: "Para reanudar el corte tras haber sido interrumpido por la barrera de luz una vez despejada la zona de trabajo, el operario debe:",
    options: [
      "Apagar y encender el interruptor general",
      "Soltar las teclas de corte y volver a accionarlas simultáneamente",
      "Pulsar la tecla C del teclado numérico tres veces"
    ],
    correct: 1,
    explanation: "Se rearma el ciclo liberando los pulsadores del mando bimanual y volviendo a presionarlos juntos[cite: 45].",
    source: "Manual POLAR 115Y (Pág. 45)[cite: 45]"
  },
  {
    theme: 9,
    question: "¿Qué diferencia existe entre una elevadora de carga y una elevadora de descarga?",
    options: [
      "La de carga tiene mesa de aire y la de descarga carece de motor hidráulico",
      "La de carga sitúa el material sin cortar a la altura de trabajo de la mesa; la de descarga permite apilar el producto terminado manteniendo el tope superior",
      "La de carga solo admite cartón y la de descarga solo papel de bajo gramaje"
    ],
    correct: 1,
    explanation: "La elevadora de carga sitúa la materia prima al nivel de mesa; la de descarga desciende de forma progresiva a medida que apila[cite: 126, 127].",
    source: "Manual POLAR 115Y (Pág. 126-127)[cite: 126, 127]"
  },
  {
    theme: 9,
    question: "Al realizar tareas de limpieza al final de la jornada en la guillotina, ¿qué precaución se debe tener especialmente si se ha cortado papel adhesivo?",
    options: [
      "Rociar aceite mineral directamente sobre el listón de plástico",
      "Limpiar la cuchilla, el pisón, la mesa y la escuadra con productos adecuados y los EPIs correspondientes para eliminar la resina pegajosa",
      "Dejar el pisón bajado al máximo sobre la mesa sin el listón puesto"
    ],
    correct: 1,
    explanation: "Es indispensable eliminar los sedimentos de goma con disolventes apropiados usando guantes y gafas protectoras[cite: 57, 135].",
    source: "Manual POLAR 115Y (Pág. 57, 135)[cite: 57, 135]"
  },
  {
    theme: 9,
    question: "¿Cuál es la composición y característica principal de una cuchilla de acero HSS (corte ultrarrápido)?",
    options: [
      "Inserto de carbono estándar sin aleación",
      "Inserto de acero rápido altamente aleado con un 18% de Wolframio (61-63 Rockwell), con una duración de 3 a 5 veces superior a la normal",
      "Inserto de cerámica sinterizada con granulación superfina"
    ],
    correct: 1,
    explanation: "El acero rápido HSS aleado con un 18% de wolframio ofrece una vida útil de 3 a 5 veces mayor a la de las cuchillas estándar[cite: 149].",
    source: "Manual POLAR 115Y (Pág. 149)[cite: 149]"
  },
  {
    theme: 9,
    question: "Las cuchillas de Metal Duro (Widia / grano superfino) destacan por:",
    options: [
      "Tener la menor duración del mercado pero ser muy económicas",
      "Tener una elevadísima duración para todo tipo de papel, aunque su uso es cuestionable si el material a cortar contiene suciedad abrasiva que obligue a afilados muy costosos"
    ],
    correct: 1,
    explanation: "Poseen máxima resistencia al desgaste, aunque sufren desperfectos graves ante impurezas metálicas o suciedad[cite: 149, 150].",
    source: "Manual POLAR 115Y (Pág. 149-150)[cite: 149, 150]"
  },
  {
    theme: 9,
    question: "¿Cómo reconoce auditivamente el guillotinero que una cuchilla ha perdido el filo y requiere cambio inmediato?",
    options: [
      "El sonido de corte pasa de un silbido grave a un zumbido agudo e ininterrumpido",
      "El tono agudo continuo habitual cambia a un traquido agudo al seccionar los pliegos inferiores",
      "Se produce un silencio absoluto debido a la fricción de los pliegos"
    ],
    correct: 1,
    explanation: "El chasquido o crujido seco al atravesar las últimas hojas de la pila revela un embotamiento crítico de la cuchilla[cite: 150].",
    source: "Manual POLAR 115Y (Pág. 150)[cite: 150]"
  },
  {
    theme: 9,
    question: "Al cortar una pila de 20 cm de altura de papel cromo estucado de 90 g/m² en una máquina 115 con cuchilla bien afilada, la fuerza total alcanzada es de aproximadamente 1 tonelada. ¿A cuánto se eleva dicha fuerza si la cuchilla está SIN FILO?",
    options: [
      "Se mantiene en 1 tonelada pero disminuye la velocidad",
      "Se eleva a más del triple (más de 3 toneladas)",
      "Se multiplica por diez alcanzando las 10 toneladas"
    ],
    correct: 1,
    explanation: "Trabajar sin filo incrementa la resistencia del papel superando con facilidad el triple de la fuerza requerida (>3 t)[cite: 150].",
    source: "Manual POLAR 115Y (Pág. 150)[cite: 150]"
  },
  {
    theme: 9,
    question: "En la elaboración de papel para edición / impresión de libros, ¿por qué factor se multiplica la carga inicial cuando se trabaja con una cuchilla sin filo?",
    options: [
      "Por un factor de 1,5",
      "Por un factor de 2,0",
      "Por un factor de 4,5 (pasando de 1 tonelada a aprox. 4,5 toneladas)"
    ],
    correct: 2,
    explanation: "En variedades de papel de alta densidad la pérdida de filo multiplica el esfuerzo mecánica por un factor de hasta 4,5[cite: 150].",
    source: "Manual POLAR 115Y (Pág. 150)[cite: 150]"
  },
  {
    theme: 9,
    question: "En el apilado del producto terminado tras el guillotinado, es fundamental:",
    options: [
      "Apilar la máxima altura posible en un solo bloque sin importar el peso para ahorrar espacio",
      "Realizar un apilado seguro que garantice la estabilidad del producto y evite sobreesfuerzos ergonómicos a los operarios",
      "Envolver siempre cada posteta en plástico retráctil antes de colocarla en el palé"
    ],
    correct: 1,
    explanation: "El orden de apilado debe preservar la estabilidad de la carga y cuidar los criterios ergonómicos en la estiba[cite: 55, 134].",
    source: "Manual POLAR 115Y (Pág. 55, 134)[cite: 55, 134]"
  },
  {
    theme: 9,
    question: "En la normalización de la calidad y verificación de productos impresos, ¿qué son las \"normas\"?",
    options: [
      "Leyes de obligado cumplimiento penal para todos los talleres",
      "Reglas elaboradas por partes interesadas y aprobadas por organismos de normalización, que salvo inclusión en legislación, no son de cumplimiento obligado",
      "Tablas de medidas exclusivas del fabricante POLAR"
    ],
    correct: 1,
    explanation: "Son directrices técnicas de referencia acordadas por organismos competentes sin carácter jurídico vinculante obligatorio salvo ley express[cite: 136].",
    source: "Manual POLAR 115Y (Pág. 136)[cite: 136]"
  },

  // ==========================================
  // BLOQUE X: CALIDAD Y TOLERANCIAS (Theme 10)
  // ==========================================
  {
    theme: 10,
    question: "¿Qué cuatro factores principales de la producción provocan la variabilidad que el control de calidad debe mantener dentro de las tolerancias permitidas?",
    options: [
      "El voltaje, la presión del aire, el tipo de aceite y el lubricante",
      "La mano de obra, las máquinas, las materias primas y el medio ambiente",
      "El turno de noche, las horas extra, el tejuelo y la rúbrica"
    ],
    correct: 1,
    explanation: "Las fuentes de variabilidad en el proceso gráfico son: Personal (Mano de obra), Maquinaria, Soportes (Materias primas) y Clima (Medio ambiente)[cite: 137].",
    source: "Manual POLAR 115Y (Pág. 137)[cite: 137]"
  },
  {
    theme: 10,
    question: "Durante el proceso de guillotinado, ¿en qué fase de la inspección interviene directamente el guillotinero midiendo el producto con plantillas o útiles de medición?",
    options: [
      "Inspección y ensayos de entrada de materiales",
      "Inspección durante el proceso",
      "Auditoría de calidad de producto acabado tras el embalaje"
    ],
    correct: 1,
    explanation: "La verificación de tolerancias por el operario de guillotina se realiza de forma continuada en la fase de proceso[cite: 138].",
    source: "Manual POLAR 115Y (Pág. 138)[cite: 138]"
  },
  {
    theme: 10,
    question: "Si el material a cortar se desliza con dificultad sobre la mesa de la guillotina (malas propiedades de deslizamiento), ¿en qué lado de la máquina es recomendable colocarlo y cortar para evitar atascamientos?",
    options: [
      "Lo más a la derecha posible apoyado en la regla triangular",
      "Lo más a la izquierda posible",
      "Exactamente en el centro geométrico de la cuchilla"
    ],
    correct: 1,
    explanation: "Apoyar la carga contra el lateral izquierdo minimiza los rozamientos y facilita el escuadrado del pliego[cite: 144].",
    source: "Manual POLAR 115Y (Pág. 144)[cite: 144]"
  },
  {
    theme: 10,
    question: "¿A qué se refiere el término \"contracorte\" en materiales gruesos o cartones rígidos?",
    options: [
      "A cortar el papel con dos cuchillas simultáneas",
      "A girar el material 180° tras el primer corte y volver a cortar para eliminar la rotura del bisel y dejar el canto recto",
      "A cortar el listón de plástico por la cara opuesta"
    ],
    correct: 1,
    explanation: "Consiste en un corte secundario a 180° para sanear las deformaciones causadas por el bisel en cartón grueso[cite: 115].",
    source: "Manual POLAR 115Y (Pág. 115)[cite: 115]"
  },
  {
    theme: 10,
    question: "Si se sobrepasa excesivamente la presión de prensado adecuada en un material duro o blando, ¿qué síntoma directo se observa en el resultado del corte inferior?",
    options: [
      "La cuchilla salta hacia atrás y se rompe el fusible",
      "La cuchilla se desvía abajo hacia delante y los pliegos inferiores resultan más largos",
      "Los pliegos superiores quedan soldados y quemados por la fricción"
    ],
    correct: 1,
    explanation: "La sobrepresión excesiva deforma la pila curvando la hoja hacia el frente en las capas inferiores[cite: 146].",
    source: "Manual POLAR 115Y (Pág. 146)[cite: 146]"
  },
  {
    theme: 10,
    question: "Para adaptar la presión del pisón al ancho de corte real del material automáticamente sin intervención manual constante, la guillotina utiliza:",
    options: [
      "La regla lateral escamoteable",
      "Sensores en la mesa que reconocen el ancho del material en la línea de corte ajustando la presión",
      "Un calibrador micrómetro láser en el travesaño superior"
    ],
    correct: 1,
    explanation: "El sistema incorpora sensores de ancho que recalculan la presión hidráulica según la superficie de contacto[cite: 123].",
    source: "Manual POLAR 115Y (Pág. 123)[cite: 123]"
  },
  {
    theme: 10,
    question: "¿Qué ocurre si el aire contenido entre pliegos de productos pequeños cortados delante de la cuchilla provoca que estos \"floten\" o se caigan?",
    options: [
      "Se debe utilizar el sujetador delante de la cuchilla para mantenerlos en posición controlada",
      "Se debe rociar agua sobre la pila para aumentar el peso",
      "Se debe aumentar la velocidad del flujo de aire de la mesa delantera"
    ],
    correct: 0,
    explanation: "El sujetador frontal inmoviliza los bloques pequeños impidiendo que vuelen por el colchón de aire[cite: 114, 142].",
    source: "Manual POLAR 115Y (Pág. 114, 142)[cite: 114, 142]"
  },
  {
    theme: 10,
    question: "¿Qué es la \"Estación de Alineación\" o escuadra rectificadora para productos pequeños (como etiquetas)?",
    options: [
      "Un accesorio de madera para golpear la pila manualmente",
      "Un dispositivo equipado con un ángulo/soporte que soporta y alinea las secciones cortadas de pequeño tamaño evitando que se desmoronen",
      "Una prensa hidráulica externa de desaireado"
    ],
    correct: 1,
    explanation: "Es un soporte en ángulo que mantiene erguidos los tacos de etiquetas de pequeño formato durante la manipulación[cite: 109].",
    source: "Manual POLAR 115Y (Pág. 109)[cite: 109]"
  },
  {
    theme: 10,
    question: "En la tabla de presiones de prensado orientativas, ¿a qué tipo de postetas corresponden los valores recomendados de la máquina?",
    options: [
      "A postetas de altura mínima que ocupan menos del 10% del ancho",
      "A postetas de altura media que ocupan más de dos tercios del ancho de corte",
      "A resmas completas de cartón rígido de 500 g/m²"
    ],
    correct: 1,
    explanation: "Las tablas estándar están calculadas para alturas medias que abarquen más de 2/3 de la luz total de corte[cite: 146].",
    source: "Manual POLAR 115Y (Pág. 146)[cite: 146]"
  },
  {
    theme: 10,
    question: "Antes de poner la máquina en servicio o ante cualquier cambio de turno de obreros, ¿cuál es la obligación del personal de manejo respecto a la seguridad?",
    options: [
      "Engrasar todos los rodamientos de la bomba de vacío",
      "Inspeccionar los elementos de la máquina importantes para la seguridad respecto a su capacidad funcional e integridad",
      "Cambiar el listón de corte por uno completamente nuevo"
    ],
    correct: 1,
    explanation: "Es preceptivo que cada turno verifique el estado e integridad de fotocélulas, paradas de emergencia y mandos[cite: 41, 123].",
    source: "Manual POLAR 115Y (Pág. 41, 123)[cite: 41, 123]"
  },






  //const preguntasExamenGuillotineroDificil = [
  // ==========================================
  // BLOQUE I: PRL Y ERGONOMÍA (Theme 1)
  // ==========================================
  {
    theme: 1,
    question: "Atendiendo a la biomecánica en el manejo de cargas, ¿qué presión soporta el disco intervertebral L5-S1 al levantar una posteta de 25 kg flexionando el tronco 45° sin doblar las rodillas?",
    options: [
      "Aproximadamente 180 kg por el efecto de contrapeso abdominal.",
      "Cerca de 375 kg debido a la multiplicación del brazo de palanca dorsal.",
      "Supera los 600 kg de compresión en el disco lumbar."
    ],
    correct: 2,
    explanation: "La inclinación del tronco a 45° multiplica exponencialmente la distancia al centro de gravedad, ejerciendo fuerzas de compresión superiores a 600 kg sobre L5-S1.",
    source: "Manual POLAR 115Y (Pág. 55) / Ergonomía Gráfica"
  },
  {
    theme: 1,
    question: "Según la normativa de prevención en guillotinas industriales, ¿cuál es el tiempo máximo de parada permitido desde la interrupción de la barrera fotoeléctrica hasta la detención total de la cuchilla?",
    options: [
      "Menos de 150 milisegundos (0,15 s).",
      "Exactamente 500 milisegundos (0,5 s).",
      "Entre 1 y 1,5 segundos según el gramaje del papel."
    ],
    correct: 0,
    explanation: "Las guillotinas de alta velocidad deben detener la carrera de la cuchilla en menos de 150 ms para evitar que la mano alcance la zona de atrapamiento.",
    source: "Manual POLAR 115Y (Pág. 45, 124)"
  },
  {
    theme: 1,
    question: "Durante la manipulación manual continuada de pilas de papel en un turno de 8 horas, ¿cuál es el límite máximo recomendado de carga acumulada por operario para prevenir microtraumatismos?",
    options: [
      "1.000 kg por jornada.",
      "Hasta 10.000 kg (10 toneladas) por jornada.",
      "No existe límite si se utiliza calzado S3 y faja lumbar."
    ],
    correct: 1,
    explanation: "Los estudios de ergonomía en talleres de manipulación fijan en unas 10 toneladas el volumen máximo acumulado recomendado por persona y turno.",
    source: "Manual POLAR 115Y (Pág. 55, 56)"
  },
  {
    theme: 1,
    question: "Al realizar tareas de acondicionamiento de postetas heladas o con alta carga electrostática por almacenamiento en frío, ¿qué riesgo ergonómico y operacional inmediato se genera?",
    options: [
      "Pérdida de adherencia en el pisón produciendo desgarros laterales invisibles.",
      "Sobreesfuerzo muscular por cohesión entre pliegos y deslizamiento incontrolado de la pila.",
      "Gripado del husillo de la escuadra trasera por transferencia térmica."
    ],
    correct: 1,
    explanation: "El frío y la estática congelan la pila bloque por bloque, exigiendo mayor fuerza de separación manual y provocando caídas de carga.",
    source: "Manual POLAR 115Y (Pág. 63, 65)"
  },
  {
    theme: 1,
    question: "Según la norma EN ISO 13857 sobre distancias de seguridad en guillotinas, la altura mínima requerida para las protecciones laterales respecto al suelo es de:",
    options: [
      "1.000 mm.",
      "1.200 mm.",
      "1.400 mm."
    ],
    correct: 2,
    explanation: "Para impedir el acceso inadvertido a la mesa trasera sobre las protecciones laterales, la altura mínima estandarizada es de 1.400 mm.",
    source: "Manual POLAR 115Y (Pág. 124)"
  },
  {
    theme: 1,
    question: "En el procedimiento LOTO (Lockout/Tagout) para mantenimiento de la guillotina POLAR, ¿qué elemento mecánico garantiza la inmovilización de la cuchilla en PMS?",
    options: [
      "El pestillo neumático de trinquete del volante de inercia.",
      "El perno mecánico de bloqueo intercalado en el travesaño de corte.",
      "El presóstato de seguridad de la bomba hidráulica principal."
    ],
    correct: 1,
    explanation: "El perno de seguridad mecánico encaja físicamente en el portacuchillas impidiendo su caída por gravedad o fallo hidráulico.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 1,
    question: "Al manipular disolventes de limpieza para eliminar restos de adhesivo en la guillotina, ¿qué tipo de guantes de protección individual son obligatorios según la FDS?",
    options: [
      "Guantes de látex natural fino de un solo uso.",
      "Guantes de nitrilo reforzado o fluoropolímero (Viton) antidisolvente.",
      "Guantes de malla metálica anticorte."
    ],
    correct: 1,
    explanation: "Los disolventes orgánicos penetran rápidamente el látex; se requieren elastómeros químicos como nitrilo de alto espesor o Viton.",
    source: "Manual POLAR 115Y (Pág. 54, 135)"
  },
  {
    theme: 1,
    question: "Para evitar la fatiga muscular durante la carga manual de formatos superiores a 70x100 cm en la mesa delantera, la altura óptima del plano de trabajo debe ser:",
    options: [
      "A la altura de las rodillas (aprox. 50 cm).",
      "Entre 85 y 95 cm desde el suelo (altura de la cadera).",
      "A 120 cm del suelo para alinear con los hombros."
    ],
    correct: 1,
    explanation: "La mesa de corte está diseñada ergonómicamente a 90 cm de altura media para permitir el empuje con los músculos del abdomen y cadera.",
    source: "Manual POLAR 115Y (Pág. 55)"
  },
  {
    theme: 1,
    question: "En caso de detectar un traqueteo fuerte e intermitente en la bomba hidráulica durante la fase de prensado, el operario debe:",
    options: [
      "Aumentar la presión del pisón a 4.500 daN para compensar el fluido.",
      "Detener la máquina inmediatamente por riesgo de cavitación o fallo del acumulador.",
      "Continuar trabajando en modo de baja presión hasta finalizar el lote."
    ],
    correct: 1,
    explanation: "El traqueteo indica cavitación o falta de presión hidráulica, lo que puede provocar la caída repentina del pisón o la ruptura del circuito.",
    source: "Manual POLAR 115Y (Pág. 45, 135)"
  },
  {
    theme: 1,
    question: "¿Qué nivel de presión sonora equivalente ($L_{Aeq}$) requiere el uso obligatorio de protectores auditivos de cazoleta en el puesto de guillotinado?",
    options: [
      "A partir de 70 dBA.",
      "A partir de 85 dBA.",
      "Únicamente si se superan los 105 dBA."
    ],
    correct: 1,
    explanation: "El Real Decreto de RDL obliga al uso de EPI auditivo a partir de los 85 dBA de exposición diaria continua.",
    source: "Manual POLAR 115Y (Pág. 54)"
  },

  // ==========================================
  // BLOQUE II: PAPEL, FORMATOS Y GRAMAJES (Theme 2)
  // ==========================================
  {
    theme: 2,
    question: "Un pliego de formato B0 tiene unas dimensiones normalizadas de 1000 × 1414 mm. ¿Cuál es la superficie total de este pliego?",
    options: [
      "1,00 m².",
      "1,414 m².",
      "2,00 m²."
    ],
    correct: 1,
    explanation: "Multiplicando $1,000\text{ m} \times 1,414\text{ m} = 1,414\text{ m}^2$, siendo la media geométrica entre A0 ($1\text{ m}^2$) y A-1 ($2\text{ m}^2$).",
    source: "Manual POLAR 115Y (Pág. 58)"
  },
  {
    theme: 2,
    question: "Si cortamos un paquete de papel de gramaje $120\text{ g/m}^2$ con un volumen específico de $1,3\text{ cm}^3/\text{g}$, ¿cuál es el grosor exacto de una sola hoja?",
    options: [
      "92 µm.",
      "156 µm.",
      "210 µm."
    ],
    correct: 1,
    explanation: "El espesor ($\mu\text{m}$) se calcula multiplicando el gramaje ($\text{g/m}^2$) por el volumen específico: $120 \times 1,3 = 156\mu\text{m}$.",
    source: "Manual POLAR 115Y (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Qué tolerancia de cuadratura (desviación angular) permite la norma ISO 216 en un pliego de formato $700 \times 1000\text{ mm}$ de suministro industrial?",
    options: [
      "Máximo ± 0,1 mm.",
      "Hasta ± 0,5% de la longitud del lado (aprox. ± 3,5 a 5 mm).",
      "No se permite ninguna desviación angular en papel de imprenta."
    ],
    correct: 1,
    explanation: "Las tolerancias comerciales de papel no refilado admiten variaciones angulares de hasta el 0,5% antes del guillotinado de escuadrado.",
    source: "Manual POLAR 115Y (Pág. 58)"
  },
  {
    theme: 2,
    question: "Al guillotinar papel estucado arte de alta densidad ($250\text{ g/m}^2$), ¿qué fenómeno físico dificulta la penetración de la cuchilla frente a un papel offset no estucado del mismo gramaje?",
    options: [
      "La mayor lubricación de la caolín en el corte.",
      "La elevada densidad mineral de la capa (caolín/carbonato cálcico) que incrementa la resistencia a la cizalladura.",
      "La falta de humedad en el alma del papel."
    ],
    correct: 1,
    explanation: " Las cargas minerales del estucado aumentan la dureza estructural del soporte, exigiendo hasta un 40% más de fuerza mecánicas.",
    source: "Manual POLAR 115Y (Pág. 60, 150)"
  },
  {
    theme: 2,
    question: "¿Cuál es la causa principal por la que el papel cortado en dirección transversal a la fibra (a contrafibra) ofrece mayor resistencia al descenso de la cuchilla?",
    options: [
      "Las fibras celulósicas deben ser cizalladas transversalmente a su eje longitudinal.",
      "La cuchilla arrastra la resina de la fibra hacia el listón de corte.",
      "El aire de la mesa se frena por los poros del canto."
    ],
    correct: 0,
    explanation: "Cortar a contrafibra exige romper la sección transversal de las fibras de madera, lo que requiere sustancialmente más fuerza.",
    source: "Manual POLAR 115Y (Pág. 60)"
  },
  {
    theme: 2,
    question: "Según la norma DIN 53121, la rigidez al estiramiento o flexión en cartulinas rígidas afecta al corte produciendo:",
    options: [
      "Un arqueamiento de las tiras superiores hacia la cuchilla.",
      "Un rechazo de la fibra que fuerza a la escuadra a retroceder 1 mm.",
      "Un deslizamiento nulo en la mesa de aire por el peso específico."
    ],
    correct: 0,
    explanation: "La alta rigidez elástica hace que la posteta presione hacia arriba los extremos bajo el pisón, requiriendo el uso de sujetadores especiales.",
    source: "Manual POLAR 115Y (Pág. 61, 122)"
  },
  {
    theme: 2,
    question: "El ensayo Bekk mide la lisura de un soporte papelero en segundos. ¿Cómo influye un valor Bekk muy alto (> 800 s) en el proceso de corte?",
    options: [
      "El pliego resbala fácilmente facilitando el desaireado espontáneo.",
      "Los pliegos forman un bloque hermético sin colchón de aire que favorece la succión mutua y el desplazamiento en bloque.",
      "Se requiere afilar la cuchilla con un ángulo de $30^\circ$ obligatoriamente."
    ],
    correct: 1,
    explanation: "Soportes ultralisos (Bekk elevado) expulsan todo el aire entre hojas creando un 'efecto ventosa' que dificulta el igualado a taco.",
    source: "Manual POLAR 115Y (Pág. 60, 63)"
  },
  {
    theme: 2,
    question: "Al cortar papel térmico u autocopiativo químicamente sensible, ¿a qué valor máximo se debe limitar la presión del pisón para evitar la activación microencapsulada?",
    options: [
      "Entre 150 y 300 daN.",
      "A 1.500 daN fijos.",
      "A la presión máxima de 4.500 daN pero con el colchón de aire encendido."
    ],
    correct: 0,
    explanation: "Presiones superiores a 300 daN rompen las microcápsulas reactivas del papel carbón/autocopiativo manchando permanentemente el lote.",
    source: "Manual POLAR 115Y (Pág. 45, 146)"
  },
  {
    theme: 2,
    question: "El grado de humedad relativa del papel óptimo para evitar electricidad estática y deformaciones en la mesa de corte se sitúa en:",
    options: [
      "20% - 30% a 15°C.",
      "50% - 55% a 20°C - 22°C.",
      "75% - 85% a 28°C."
    ],
    correct: 1,
    explanation: "El equilibrio higrométrico en sala limpia y guillotinas requiere un 50-55% HR para estabilizar las dimensiones de la fibra.",
    source: "Manual POLAR 115Y (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Qué ocurre si se corta un papel cuyo sentido de fibra es paralelo a la línea de corte?",
    options: [
      "El corte resulta perfectamente limpio y no genera polvo de papel.",
      "El canto cortado tiende a despelucharse y el bisel de la cuchilla separa fácilmente las fibras en paralelo.",
      "Se debe incrementar el ángulo de bisel a $28^\circ$."
    ],
    correct: 1,
    explanation: "Al cortar en paralelo a la fibra, la cuchilla no la secciona limpiamente sino que la separa longitudinalmente, produciendo rebaba o polvo.",
    source: "Manual POLAR 115Y (Pág. 60, 150)"
  },

  // ==========================================
  // BLOQUE III: MANEJO, IGUALADO Y TACAS (Theme 3)
  // ==========================================
  {
    theme: 3,
    question: "En una mesa vibradora con inclinación regulable, ¿qué ángulo respecto a la horizontal se recomienda para igualar pilas altas de papeles ligeros (< 60 g/m²)?",
    options: [
      "0° (Mesa completamente horizontal).",
      "Aproximadamente 15° a 20° de inclinación.",
      "El ángulo máximo de 45°."
    ],
    correct: 1,
    explanation: "Inclinaciones moderadas (15°-20°) evitan que los pliegos livianos se doblen sobre sí mismos por gravedad al golpear las escuadras.",
    source: "Manual POLAR 115Y (Pág. 63, 67)"
  },
  {
    theme: 3,
    question: "Al trabajar con el rodillo sacador de aire en papeles con barniz sobrepuesto que muestran tendencia a pegarse, el orden correcto de operación es:",
    options: [
      "Pasar el rodillo a 5 bares y luego airear vigorosamente.",
      "Aventar/exfoliar manualmente la posteta, vibrar con inyección de aire suave y pasar el rodillo con baja presión.",
      "Desconectar el aire de la vibradora y aplicar presión directa de 10 bares con el rodillo."
    ],
    correct: 1,
    explanation: "Primero se deshace el bloque de barniz a mano, se mete aire para separar las hojas y finalmente se extrae el exceso sin aprisionar.",
    source: "Manual POLAR 115Y (Pág. 63, 67)"
  },
  {
    theme: 3,
    question: "Si una posteta presenta una 'ondulación de borde' (borde en abanico) por exceso de humedad absorbida en el almacén, el igualado a taco falla porque:",
    options: [
      "El aire no puede salir por los laterales del pliego.",
      "Los bordes expandidos sobrepasan la altura central provocando que el papel no toque el fondo de la escuadra.",
      "La fotocélula de la guillotina no detecta el perfil irregular."
    ],
    correct: 1,
    explanation: "El borde ondulado aumenta el volumen perimetral del pliego impidiendo que la parte central plana contacte con la regla trasera.",
    source: "Manual POLAR 115Y (Pág. 63, 65)"
  },
  {
    theme: 3,
    question: "Para medir la altura exacta de una carga de papel bajo presión teórica de trabajo sin meter la mano, el operario utiliza:",
    options: [
      "El indicador digital de altura de pila integrado en la barra del pisón.",
      "Una regla de latón graduada desde el extremo exterior del lateral.",
      "La función de palpado óptico del láser de corte."
    ],
    correct: 0,
    explanation: "Los modelos avanzados POLAR transmiten el valor de la cota vertical del pisón al monitor mediante codificadores lineales.",
    source: "Manual POLAR 115Y (Pág. 44, 123)"
  },
  {
    theme: 3,
    question: "¿Qué técnica de taller se aplica cuando se deben cortar tiras estrechas de $15\text{ mm}$ de ancho en un material plástico flexible?",
    options: [
      "Aumentar la presión hidráulica al nivel máximo para aplastar la goma.",
      "Utilizar un listón de ajuste sobre la escuadra trasera para evitar que las tiras caigan por la ranura del rastrillo.",
      "Desactivar la cuchilla y cortar mediante cuchillas circulares auxiliares."
    ],
    correct: 1,
    explanation: "Tiras muy estrechas pueden colarse entre las cerdas o dientes del rastrillo; se coloca una pletina ciega de tope continuo.",
    source: "Manual POLAR 115Y (Pág. 122)"
  },
  {
    theme: 3,
    question: "Al alinear pliegos impresos a varias tintas con marcas de registro 'tacón de entrada' y 'tacón de costado', ¿dónde deben situarse dichas marcas en la guillotina?",
    options: [
      "El tacón de entrada a la cuchilla y el de costado a la regla izquierda.",
      "El tacón de entrada a la escuadra trasera y el de costado a la regla lateral de apoyo.",
      "Ambos tacones deben quedar mirando hacia el operario en la mesa delantera."
    ],
    correct: 1,
    explanation: "Para reproducir la exactitud de la imprenta, las guías de entrada y costado usadas en la prensa deben apoyarse en la escuadra trasera y lateral.",
    source: "Manual POLAR 115Y (Pág. 21, 68)"
  },
  {
    theme: 3,
    question: "En pilas de cartón ondulado microcanal con tendencia a aplastarse durante el corte, ¿qué solución mecánica se adopta en el pisón?",
    options: [
      "Colocar una placa de pisón flexible de espuma de goma de alta densidad (acolchado).",
      "Retirar el pisón y efectuar el corte confiando en el peso del material.",
      "Utilizar una cuchilla con bisel invertido."
    ],
    correct: 0,
    explanation: "La chapa con acolchado de elastómero distribuye la presión en las crestas del canal evitando destruir la estructura de la onda.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 3,
    question: "Durante la expulsión neumática de una posteta pesada (> 40 kg), si se aplica demasiado caudal de aire en la mesa delantera, puede ocurrir que:",
    options: [
      "El papel se desplace flotando incontroladamente perdiendo la alineación lograda.",
      "Se bloquee el motor neumático por retroceso de presión.",
      "Se active la señal de interrupción de barrera por turbulencia."
    ],
    correct: 0,
    explanation: "Un colchón de aire excesivo elimina la fricción por completo provocando que la carga patine y se desmorone fuera de la mesa.",
    source: "Manual POLAR 115Y (Pág. 47, 142)"
  },
  {
    theme: 3,
    question: "¿Qué herramienta manual se prohíbe taxativamente para golpear y cuadrar los laterales de la pila de papel en la mesa de la guillotina?",
    options: [
      "El taco de madera con canto redondeado.",
      "Martillos metálicos, barras de acero o reglas de hierro desnudas.",
      "La escuadra de alinear de plástico técnico."
    ],
    correct: 1,
    explanation: "Herramientas de metal duro muescan la mesa de cromo/fundición, dañan el canto del papel y generan astillas o chispas peligrosas.",
    source: "Manual POLAR 115Y (Pág. 54)"
  },
  {
    theme: 3,
    question: "En la preparación de pliegos con corte a sangre y entrecalles de $5\text{ mm}$, la secuencia de refilado correcta requiere:",
    options: [
      "Cortar primero todas las entrecalles interiores y al final los márgenes exteriores.",
      "Sanear primero los 4 lados exteriores (limpia) y posteriormente ejecutar los cortes de entrecalles en orden progresivo.",
      "Cortar el pliego en diagonal para liberar la tensión interna."
    ],
    correct: 1,
    explanation: "El escuadrado perimetral previo (limpia) garantiza superficies de apoyo a $90^\circ$ para sostener las tiras al seccionar entrecalles.",
    source: "Manual POLAR 115Y (Pág. 22, 68)"
  },

  // ==========================================
  // BLOQUE IV: NUMERACIÓN Y REGISTROS (Theme 4)
  // ==========================================
  {
    theme: 4,
    question: "En una nota de numeración impresa a 8 efectos por pliego, con una tirada de 100.000 ejemplares numerados del 000.001 al 100.000, ¿cuántos pliegos impresos componen la orden?",
    options: [
      "12.500 pliegos.",
      "100.000 pliegos.",
      "800.000 pliegos."
    ],
    correct: 0,
    explanation: "Dividiendo la tirada total de documentos entre el número de efectos por pliego: $100.000 \div 8 = 12.500$ pliegos (25 resmas).",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "Al rellenar el tejuelo de identificación para un palé de producto terminado numerado, si el pliego va a 4 cuadrantes en suma, el primer pliego de la resma 1 contiene en el primer cuadrante el número 00.001. ¿Qué número tendrá ese mismo cuadrante en la resma 2 (pliego 501)?",
    options: [
      "00.002.",
      "00.501.",
      "02.001."
    ],
    correct: 1,
    explanation: "En la numeración vertical continuada por resmas, la hoja 501 arranca con la cifra correlativa $501$ ($00.501$).",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "En el Parte de Trabajo, el coeficiente de productividad se calcula relacionando las Horas Productivas (código H.P.) frente a:",
    options: [
      "El total de Horas Presenciales (Horas Operario) registradas en la jornada.",
      "Únicamente las Horas Extraordinarias (Tipo E).",
      "El número de cortes contados en el autómata."
    ],
    correct: 0,
    explanation: "El rendimiento del puesto compara el tiempo efectivo de máquina/proceso (H.P.) frente al total de presencia (Horas Operario).",
    source: "Manual POLAR 115Y (Pág. 83)"
  },
  {
    theme: 4,
    question: "En el Documento de Reposiciones de un trabajo de billetes o impresos de alta seguridad, si un pliego se rompe en la guillotina en el cuadrante 3, el procedimiento de anulación exige:",
    options: [
      "Tirar la hoja rota a la papelera y no anotar nada si hay pliegos de demasía.",
      "Registrar la numeración exacta de los 4 o 8 efectos de ese pliego y destruir los vales bajo supervisión de control.",
      "Sustituir el cuadrante roto por un papel en blanco del mismo gramaje."
    ],
    correct: 1,
    explanation: "En productos de seguridad, la inutilización de 1 cuadrante inutiliza la secuencia completa del pliego; se deben dar de baja todos sus efectos.",
    source: "Manual POLAR 115Y (Pág. 81)"
  },
  {
    theme: 4,
    question: "En la codificación de un Parte Diario de Equipo, el código de incidencia para 'Espera de papel por secado de tintas / barniz' se computa como:",
    options: [
      "Tiempo de ajuste productivo.",
      "Horas Improductivas por Causa Ajena (mantenimiento / logística de taller).",
      "Horas de paro por avería mecánica del motor."
    ],
    correct: 1,
    explanation: "Los tiempos muertos por imprevistos del soporte o procesos previos se imputan como paradas no imputables al puesto de corte.",
    source: "Manual POLAR 115Y (Pág. 83, 85)"
  },
  {
    theme: 4,
    question: "Si en un tejido de identificación leemos O.F. 450123001, los tres últimos dígitos indican:",
    options: [
      "El código del guillotinero que procesó la carga.",
      "El número de suborden o entregable parcial dentro de la orden principal.",
      "El número de resmas totales que componen el paquete."
    ],
    correct: 1,
    explanation: "Los 9 dígitos de la O.F. desglosan la orden raíz (6 primeros números) y la suborden o variante parcial (3 últimos números).",
    source: "Manual POLAR 115Y (Pág. 28, 83)"
  },
  {
    theme: 4,
    question: "En una nota de numeración impresa en 'resta', ¿dónde se localiza el ejemplar con el número 000.001 en el taco cortado?",
    options: [
      "En la primera hoja del paquete superior.",
      "En la última hoja de la base del paquete inferior.",
      "En el centro exacto de la resma número 5."
    ],
    correct: 1,
    explanation: "En la colocación en resta, las cifras descienden desde la parte superior de la pila, quedando la cota 1 al fondo del paquete base.",
    source: "Manual POLAR 115Y (Pág. 25)"
  },
  {
    theme: 4,
    question: "Al registrar el volumen de trabajo ejecutado en el Parte Diario en 'Millas de pliegos', 35.500 pliegos equivalen exactamente a:",
    options: [
      "3,55 Millas.",
      "35,5 Millas.",
      "355 Millas."
    ],
    correct: 1,
    explanation: "Una Milla equivale a 1.000 unidades de pliego; por tanto $35.500 \div 1.000 = 35,5\text{ Millas}$.",
    source: "Manual POLAR 115Y (Pág. 84)"
  },
  {
    theme: 4,
    question: "En la comprobación de tejuelos previa al guillotinado, si se detecta un salto de numeración entre dos tableros consecutivos, el guillotinero debe:",
    options: [
      "Ajustar la guillotina y cortar el material normalmente.",
      "Detener la preparación y comunicar inmediatamente la discrepancia a Control de Calidad / Preimpresión.",
      "Eliminar 50 pliegos para cuadrar el número."
    ],
    correct: 1,
    explanation: "Un salto de numeración destruye la trazabilidad del producto numerado y requiere verificación documental antes de fraccionar el pliego.",
    source: "Manual POLAR 115Y (Pág. 28, 138)"
  },
  {
    theme: 4,
    question: "¿Qué dato de control es OBLIGATORIO consignar en la etiqueta exterior de cada paquete empaquetado tras el corte final?",
    options: [
      "Número de O.F., cliente, producto, cantidad exacta de ejemplares y rango numérico (DEL... AL...).",
      "Únicamente el nombre de la empresa gráfica y la marca de la guillotina.",
      "El ángulo de bisel utilizado en la cuchilla para ese trabajo."
    ],
    correct: 0,
    explanation: "El tejuelo final de expedición exige la identificación biunívoca de la O.F., contenido, unidades y rango correlativo de numeración.",
    source: "Manual POLAR 115Y (Pág. 28)"
  },

  // ==========================================
  // BLOQUE V: PRINCIPIOS FÍSICOS Y PRENSADO (Theme 5)
  // ==========================================
  {
    theme: 5,
    question: "Durante el corte de una posteta dura, la fuerza tangencial que ejerce la cara del bisel tiende a desviar la cuchilla hacia:",
    options: [
      "Hacia atrás (hacia la escuadra posterior).",
      "Hacia delante (hacia la mesa delantera), desplazando los pliegos inferiores.",
      "Hacia la regla lateral izquierda."
    ],
    correct: 1,
    explanation: "La resistencia del material contra el plano inclinado del bisel empuja la hoja de la cuchilla flexionándola hacia el frente.",
    source: "Manual POLAR 115Y (Pág. 38, 146)"
  },
  {
    theme: 5,
    question: "El ángulo de bisel adecuado para cortar papel offset voluminoso sin que la pila sufra un aplastamiento excesivo es de:",
    options: [
      "18° a 20°.",
      "22° a 23°.",
      "28° a 30°."
    ],
    correct: 1,
    explanation: "Ángulos agudos de $22^\circ-23^\circ$ reducen la resistencia a la penetración cortando con limpieza papeles porosos y blandos.",
    source: "Manual POLAR 115Y (Pág. 149, 150)"
  },
  {
    theme: 5,
    question: "¿Qué efecto mecánico genera el uso de una cuchilla con doble bisel (bisel de refuerzo en el filo) al guillotinar plásticos o placas de acetato?",
    options: [
      "Aumenta el filo agudo eliminando el polvo sintético.",
      "Aumenta la estabilidad mecánica del borde del filo evitando que se astille o melle bajo alta presión.",
      "Permite cortar sin necesidad de encender la bomba hidráulica."
    ],
    correct: 1,
    explanation: "El doble bisel refuerza la arista de corte contra impactos dinámicos en soportes extremadamente duros o plásticos quebradizos.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 5,
    question: "La fuerza de prensado necesaria para una posteta depende de la anchura de la superficie de contacto. Si cortamos una tira de 10 cm de ancho frente a una de 100 cm, la presión del pisón debe:",
    options: [
      "Mantenerse exactamente en 4.500 daN.",
      "Reducirse proporcionalmente para no deformar localmente la tira estrecha.",
      "Incrementarse al máximo para compensar el menor volumen."
    ],
    correct: 1,
    explanation: "Al reducir la superficie de contacto la presión por $\text{cm}^2$ se dispara; debe reducirse la fuerza total para no marcar el material.",
    source: "Manual POLAR 115Y (Pág. 40, 123, 146)"
  },
  {
    theme: 5,
    question: "¿Cuántas posiciones efectivas de uso ofrece un listón de corte (palito de plástico) de sección cuadrada antes de ser sustituido por un nuevo recambio?",
    options: [
      "2 posiciones.",
      "4 posiciones.",
      "8 posiciones (4 caras giradas por 2 lados longitudinales)."
    ],
    correct: 2,
    explanation: "Cada una de las 4 caras del listón cuadrado se puede utilizar por sus dos extremos (girándolo $180^\circ$), totalizando 8 pistas de corte.",
    source: "Manual POLAR 115Y (Pág. 38)"
  },
  {
    theme: 5,
    question: "Al ajustar la profundidad de penetración de la cuchilla en el listón de corte nuevo, la cota óptima de hundimiento es de:",
    options: [
      "Aproximadamente 0,2 a 0,5 mm a lo largo de toda la boca.",
      "Exactamente 3,0 mm dentro del plástico.",
      "El filo debe tocar levemente la mesa de cromo sin llegar a cortar el plástico."
    ],
    correct: 0,
    explanation: "Una penetración excesiva (> 0,5 mm) mella la cuchilla y destruye el listón; menos de 0,2 mm deja el último pliego sin cortar.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 5,
    question: "Si los pliegos inferiores de un paquete cortado resultan sistemáticamente MÁS CORTOS que los pliegos superiores, la causa física es:",
    options: [
      "Insuficiente presión de prensado del pisón o inclinación de la escuadra hacia atrás.",
      "Exceso de presión del pisón con una cuchilla desafilada.",
      "El colchón de aire estaba encendido durante el golpe de corte."
    ],
    correct: 0,
    explanation: "La falta de prensado permite que la cuña de la cuchilla empuje las capas superiores hacia adelante, dejando la base más corta.",
    source: "Manual POLAR 115Y (Pág. 40, 146)"
  },
  {
    theme: 5,
    question: "En las guillotinas POLAR con accionamiento hidráulico del pisón, la válvula de sobrepresión actúa:",
    options: [
      "Limitando la fuerza hidráulica al valor seleccionado en el potenciómetro / volante de ajuste.",
      "Desconectando la cuchilla si la pila supera los $100\text{ kg}$ de peso.",
      "Vaciando el aceite del tanque si la temperatura supera los $30^\circ\text{C}$."
    ],
    correct: 0,
    explanation: "La válvula proporcional hidráulica modula el paso de fluido para clavar la presión de prensado en el valor exacto programado.",
    source: "Manual POLAR 115Y (Pág. 45)"
  },
  {
    theme: 5,
    question: "La fuerza de corte ejercida por la cuchilla en una POLAR 115 trabajando a máxima capacidad de carga puede alcanzar cotas dinámicas de:",
    options: [
      "Aproximadamente 5 kN (500 kg).",
      "Hasta 45 kN (aprox. 4,5 toneladas de empuje).",
      "Más de 200 kN (20 toneladas)."
    ],
    correct: 1,
    explanation: "El sistema de accionamiento por reductora electromecánica y biela genera esfuerzos cortantes de hasta 45 kN en materiales resistentes.",
    source: "Manual POLAR 115Y (Pág. 45, 150)"
  },
  {
    theme: 5,
    question: "Al presionar el pedal mecánico de pisón previo al corte, la fuerza ejercida sobre el papel proviene de:",
    options: [
      "El circuito de alta presión de la bomba hidráulica a 4.500 daN.",
      "Un muelle de presión reducida (baja presión de aproximación/seguridad de aprox. 30 a 50 daN).",
      "El peso libre del bastidor de hierro."
    ],
    correct: 1,
    explanation: "El pedal activa un tramo de baja presión mecánica/hidráulica de seguridad para aproximar el pisón sin aplastar las manos ni dañar el pliego.",
    source: "Manual POLAR 115Y (Pág. 46)"
  },

  // ==========================================
  // BLOQUE VI: OPERACIÓN Y PANTALLA (Theme 6)
  // ==========================================
  {
    theme: 6,
    question: "En el sistema de control POLAR XT, para intercalar un paso de corte no programado entre el paso 04 y el paso 05, la secuencia de mandos en la pantalla táctil es:",
    options: [
      "Borrar el paso 05 e introducir el valor directamente.",
      "Posicionar la escuadra en la medida deseada y presionar la tecla 'Añadir/Insertar Paso' (+P).",
      "Apagar la consola y reiniciar el programa desde el paso 01."
    ],
    correct: 1,
    explanation: "La tecla '+P' crea un nuevo número de orden desplaazando los pasos subsiguientes sin perder la memoria almacenada.",
    source: "Manual POLAR 115Y (Pág. 44, 52)"
  },
  {
    theme: 6,
    question: "La función de programación 'Eltrotact' (ET) en el autómata POLAR está diseñada específicamente para:",
    options: [
      "Enviar diagnósticos de falla eléctrica vía módem al fabricante.",
      "Optimizar repeticiones periódicas de cortes de la misma medida mediante un bucle de parámetros fijos.",
      "Alinear por láser las imágenes desfasadas en la imprenta."
    ],
    correct: 1,
    explanation: "Eltrotact es el módulo de bucle automático que aplica avances continuos de cota idéntica (ej. etiquetas en tiras).",
    source: "Manual POLAR 115Y (Pág. 49, 101)"
  },
  {
    theme: 6,
    question: "En la pantalla de la guillotina POLAR, si aparece el pictograma de una mano con una flecha giratoria sobre el paso activo, indica que el operario debe:",
    options: [
      "Sustituir la cuchilla por desgaste.",
      "Girar la posteta de papel manualmente en el sentido indicado antes de efectuar el siguiente corte.",
      "Introducir la contraseña de usuario registrado."
    ],
    correct: 1,
    explanation: "El pictograma de giro de material es una instrucción de proceso programada para pausar el avance y requerir la rotación de la pila.",
    source: "Manual POLAR 115Y (Pág. 44, 102)"
  },
  {
    theme: 6,
    question: "Si queremos borrar UN SOLO PASO de un programa guardado en la memoria de la POLAR X sin eliminar el resto del trabajo, se selecciona el paso y se pulsa:",
    options: [
      "La combinación Ctrl + Alt + Supr.",
      "La tecla de borrado parcial 'Delete Step' (-P) o la tecla C sobre el campo.",
      "El botón de parada de emergencia."
    ],
    correct: 1,
    explanation: "La función '-P' o la tecla C elimina el paso seleccionado reordenando la numeración de los pasos posteriores automáticamente.",
    source: "Manual POLAR 115Y (Pág. 52, 62)"
  },
  {
    theme: 6,
    question: "¿Qué ocurre en una POLAR XT si se activa la función 'Avance automático de escuadra' (Autostart)?",
    options: [
      "La cuchilla baja automáticamente nada más llegar la escuadra a la medida.",
      "La escuadra se desplaza inmediatamente al siguiente paso del programa al completar la carrera de ascenso de la cuchilla.",
      "La mesa de aire se apaga permanentemente."
    ],
    correct: 1,
    explanation: "El sistema habilita el reposicionado automático del tope trasero tan pronto como el grupo de corte regresa a PMS.",
    source: "Manual POLAR 115Y (Pág. 44, 52)"
  },
  {
    theme: 6,
    question: "Para realizar una corrección global de cota de + 0,5 mm en TODOS los pasos de un programa de 20 cortes almacenado, el operador utiliza el menú:",
    options: [
      "Corrección de programa / Calculadora (Ajuste de constante del bloque).",
      "Formateo total del segmento A.",
      "Ajuste mecánico del potenciómetro del husillo."
    ],
    correct: 0,
    explanation: "El editor de programas permite aplicar una variación aritmética ($\pm \Delta x$) sobre la totalidad del bloque guardado de una sola vez.",
    source: "Manual POLAR 115Y (Pág. 52, 108)"
  },
  {
    theme: 6,
    question: "El protocolo de conexión CIP3/CIP4 en la guillotina POLAR procesa ficheros en formato PPF/JDF para:",
    options: [
      "Generar de forma automática la secuencia completa de cortes desde los datos de imposición del CTP.",
      "Controlar la temperatura del aceite hidráulico por red.",
      "Facturar directamente el tiempo de máquina al departamento de contabilidad."
    ],
    correct: 0,
    explanation: "Los archivos JDF/PPF leen la maquetación digital de preimpresión y configuran las cotas de la escuadra sin tecleo manual.",
    source: "Manual POLAR 115Y (Pág. 45)"
  },
  {
    theme: 6,
    question: "En la consola POLAR, la indicación de cota 'Medida de referencia' (cero de la máquina) se calibra electrónicamente mediante:",
    options: [
      "El microinterruptor de fin de carrera posterior y el punto de referencia del enconder incremental.",
      "El nivel de aceite del tanque neumático.",
      "Un sensor de peso colocado debajo del pie del operario."
    ],
    correct: 0,
    explanation: "El sincronismo de cota real busca el punto cero mecánico activando el detector de fondo y leyendo la marca cero del encóder.",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },
  {
    theme: 6,
    question: "Si la pantalla táctil de la POLAR XT deja de responder al tacto digital, la maniobra autorizada de emergencia para posicionar la escuadra es:",
    options: [
      "Empujar la escuadra con un taco de madera desde la mesa trasera.",
      "Utilizar la rueda de mano micrométrica de ajuste manual frontal del pupitre.",
      "Apagar el sistema hidráulico y encenderlo 10 veces."
    ],
    correct: 1,
    explanation: "El volante/rueda de mano acoplado al husillo permite el ajuste analógico preciso de la escuadra en caso de fallo del panel digital.",
    source: "Manual POLAR 115Y (Pág. 46)"
  },
  {
    theme: 6,
    question: "En el menú de gestión de cuchilla de la guillotina, el contador de cortes integrado avisa al usuario cuando:",
    options: [
      "La cuchilla se ha roto.",
      "Se ha alcanzado el límite preprogramado de golpes de corte configurado para ese tipo de acero (ej. 50.000 cortes).",
      "El listón de plástico ha alcanzado la octava posición."
    ],
    correct: 1,
    explanation: "El indicador preventivo de desgaste alerta del fin del ciclo teórico de filo para programar el reemplazo de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 44, 150)"
  },

  // ==========================================
  // BLOQUE VII: DISPOSITIVOS ESPECIALES (Theme 7)
  // ==========================================
  {
    theme: 7,
    question: "En el sistema 'Autotrim', ¿cuál es el ancho máximo de la ranura de apertura de la mesa delantera móvil para la expulsión automática de desperdicios?",
    options: [
      "Aproximadamente 30 mm.",
      "Hasta 120 mm de recorrido útil.",
      "300 mm."
    ],
    correct: 1,
    explanation: "El mecanismo neumático desliza la placa frontal hasta 120 mm permitiendo descargar tiras de viruta de gran volumen.",
    source: "Manual POLAR 115Y (Pág. 111)"
  },
  {
    theme: 7,
    question: "Al utilizar la 'Escuadra Inclinable' para corregir un defecto de 'corte en abanico' con inclinación de las hojas hacia adelante (overcut), la escuadra se debe:",
    options: [
      "Inclinar en su eje vertical hacia adelante (hacia la cuchilla).",
      "Inclinar en su eje vertical hacia atrás (alejándola de la cuchilla en la parte superior).",
      "Girar 15° a la izquierda en el plano horizontal."
    ],
    correct: 1,
    explanation: "La inclinación superior trasera del tope compensa la deformación vertical de la pila manteniendo perpendicular la arista del taco.",
    source: "Manual POLAR 115Y (Pág. 119, 148)"
  },
  {
    theme: 7,
    question: "El dispositivo DNF (Dispositivo de Limpieza de Desperdicios) se diferencia del Autotrim básico porque:",
    options: [
      "Utiliza un sistema de aspiración de aire por vacío combinado con la apertura de mesa.",
      "Funciona mediante un rayo láser que quema la viruta.",
      "Es un accesorio manual de madera que se encaja bajo el pisón."
    ],
    correct: 0,
    explanation: "El módulo DNF integra toberas de succión activa y desoplado para arrastrar el polvo y las tiras finas adheridas al bisel.",
    source: "Manual POLAR 115Y (Pág. 111)"
  },
  {
    theme: 7,
    question: "¿Qué parámetro físico controla el potenciómetro de ajuste del sistema 'Fixomat' de la escuadra trasera?",
    options: [
      "La velocidad del motor trifásico principal.",
      "La fuerza de retracción neumática de los puntos de contacto individuales del tope.",
      "La temperatura del aire de la mesa."
    ],
    correct: 1,
    explanation: "El módulo Fixomat regula la sensibilidad y presión de amortiguación de las clavijas de registro para no marcar bordes delicados.",
    source: "Manual POLAR 115Y (Pág. 66, 120)"
  },
  {
    theme: 7,
    question: "El 'Sujetador delante de la cuchilla' (Down-holder) recibe su fuerza de accionamiento desde:",
    options: [
      "Un cilindro neumático independiente o la propia mecánica sincronizada del pisón principal.",
      "Un muelle de torsión manual ajustado por el operario.",
      "La bomba de agua del refrigerador."
    ],
    correct: 0,
    explanation: "El pisón auxiliar delantero se activa mediante circuito neumático/hidráulico acoplado antes del descenso de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 114, 116)"
  },
  {
    theme: 7,
    question: "Al activar la 'Regla lateral retráctil' (VL), ¿en qué momento exacto del ciclo de corte se oculta bajo el plano de la mesa?",
    options: [
      "Al presionar el botón de encendido general.",
      "Tan pronto como el papel queda fijado por la presión de trabajo del pisón.",
      "Al terminar de cortar la cuchilla sobre el listón."
    ],
    correct: 1,
    explanation: "Una vez que el pisón inmoviliza la carga, la regla lateral baja mecánicamente para liberarla de rozamientos durante el remate.",
    source: "Manual POLAR 115Y (Pág. 146)"
  },
  {
    theme: 7,
    question: "¿Cuál es el rango máximo de corrección angular de la 'Escuadra Giratoria' motorizada para compensar pliegos con impresiones cruzadas?",
    options: [
      "± 0,1 mm.",
      "Hasta ± 3 mm a ± 5 mm de desviación transversal respecto a la línea de corte.",
      "45° hacia la derecha."
    ],
    correct: 1,
    explanation: "El motor de sesgado permite pivotar el plano del tope hasta 5 mm para alinear la línea impresas cruzada parallelamente a la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 118, 147)"
  },
  {
    theme: 7,
    question: "El uso del dispositivo 'Sujetador del rastrillo' (Rake down-holder) es IMPRESCINDIBLE cuando cortamos:",
    options: [
      "Placas de plomo de 10 mm.",
      "Papeles ligeros con alto rizado de borde o curvatura en la parte trasera de la escuadra.",
      "Resmas de cartón rígido perfectamente planas."
    ],
    correct: 1,
    explanation: "Evita que las hojas levantadas por deformación de fibra trepen por el rastrillo trasero falseando la medida del tope.",
    source: "Manual POLAR 115Y (Pág. 122, 151)"
  },
  {
    theme: 7,
    question: "Los sopladores de aire instalados en el travesaño del portacuchillas (Knife Jet-Air) tienen como función:",
    options: [
      "Enfriar el filo de la cuchilla mediante nitrógeno líquido.",
      "Soplar un chorro de aire sobre el bisel para desprender tiras delgadas de limpia que se quedan pegadas por estática.",
      "Secar la tinta del papel antes de tocar el pisón."
    ],
    correct: 1,
    explanation: "El chorro de aire proyectado tras el corte limpia la cara del bisel evitando que las virutas finas vuelvan a caer sobre la pila.",
    source: "Manual POLAR 115Y (Pág. 111, 135)"
  },
  {
    theme: 7,
    question: "En las mesas auxiliares elevadoras con fotocélula de nivel automático (Lift), el sensor óptico ajusta la altura de la carga para mantener:",
    options: [
      "El borde superior de la pila siempre a la misma altura constante de la mesa de la guillotina.",
      "El palé apoyado firmemente sobre el suelo.",
      "La presión del aire a 6 bares continuos."
    ],
    correct: 0,
    explanation: "La fotocélula detecta el pliego superior elevando o bajando el palé a medida que se retira o añade material.",
    source: "Manual POLAR 115Y (Pág. 126, 127)"
  },

  // ==========================================
  // BLOQUE VIII: PROGRAMACIÓN AVANZADA (Theme 8)
  // ==========================================
  {
    theme: 8,
    question: "En la programación avanzada de una secuencia Eltrotact, la orden '101.000' cargada en la línea de comando representa:",
    options: [
      "Un fallo de sobrecarga del servomotor de la escuadra.",
      "El código de inicio del bloque de programa con retorno al paso origen.",
      "La velocidad del motor expresada en revoluciones por minuto."
    ],
    correct: 1,
    explanation: "La instrucción '101' abre el encabezado de bloque en la sintaxis Eltrotact fijando el punto de partida del ciclo.",
    source: "Manual POLAR 115Y (Pág. 101, 102)"
  },
  {
    theme: 8,
    question: "Al programar un trabajo con el parámetro NZ = 05 y NM = 50.000 (50 mm), el autómata de la guillotina ejecutará:",
    options: [
      "5 cortes consecutivos con un avance de 50 mm entre cada golpe.",
      "1 corte de 50 mm y esperará 5 minutos.",
      "50 cortes de 5 mm de ancho."
    ],
    correct: 0,
    explanation: "NZ (Anzahl/Repeticiones) define la cantidad de ciclos (5) y NM (Nennmaß/Medida) la cota de avance (50 mm).",
    source: "Manual POLAR 115Y (Pág. 101, 103)"
  },
  {
    theme: 8,
    question: "Para compensar la contracción dimensional de un pliego impreso en un horno de secado térmico UV (donde el pliego se reduce un 0,2%), la función de escala exige aplicar un factor de corrección de:",
    options: [
      "0,998.",
      "1,002.",
      "2,000."
    ],
    correct: 1,
    explanation: "Si el material encoge un 0,2%, se debe multiplicar la cota teórica por 1,002 para ampliar la medida nominal del corte.",
    source: "Manual POLAR 115Y (Pág. 98, 108)"
  },
  {
    theme: 8,
    question: "En el corte de etiquetas a 4 lados con sangrado perimetral y entrecalles de limpia, el parámetro 'corte de desperdicio' (Trim) programado en la guillotina hace que:",
    options: [
      "El pisón aplaste las etiquetas con mayor fuerza.",
      "La escuadra retroceda automáticamente tras el corte de limpia para permitir la caída del desperdicio antes del corte de medida.",
      "Se active la chapa de protección del pisón automáticamente."
    ],
    correct: 1,
    explanation: "El comando de limpia abre el paso de evacuación retirando la escuadra para liberar la tira cortada sin aprisionarla.",
    source: "Manual POLAR 115Y (Pág. 105, 111)"
  },
  {
    theme: 8,
    question: "¿Qué ocurre en la función 'Programación sobre la marcha' (Teaching-in) si el operario ejecuta un golpe de corte con el pedal de pisón pisado pero sin accionar el mando bimanual?",
    options: [
      "Se guarda la medida pero el pisón queda bloqueado abajo.",
      "El autómata NO registra ningún paso de programa ya que requiere la confirmación del ciclo completo de corte bimanual.",
      "Se borra la memoria del segmento B."
    ],
    correct: 1,
    explanation: "El registro automático de cotas exige la señal eléctrica de fin de ciclo de corte (descenso/ascenso completo) para validar el paso.",
    source: "Manual POLAR 115Y (Pág. 100)"
  },
  {
    theme: 8,
    question: "Al calcular el número de tiras de $80\text{ mm}$ de ancho que se pueden obtener de un pliego de $1000\text{ mm}$ descartando $10\text{ mm}$ de limpia en la cabeza y $10\text{ mm}$ en el pie, el resultado de programación es:",
    options: [
      "12 tiras exactas sin desperdicio intermedio.",
      "12 tiras y una tira final de desperdicio de 20 mm.",
      "10 tiras exactas."
    ],
    correct: 1,
    explanation: "Superficie útil: $1000 - 10 - 10 = 980\text{ mm}$. Tiras: $980 \div 80 = 12,25 \rightarrow 12\text{ tiras } (960\text{ mm})$ y resta un desperdicio final de $20\text{ mm}$.",
    source: "Manual POLAR 115Y (Pág. 105)"
  },
  {
    theme: 8,
    question: "La función 'Corrección del material' compensa el efecto de relajación estructural que sufre el papel al ser cortado en dos grandes bloques. Si al partir la pila por la mitad la parte trasera resulta 0,4 mm más grande, el ajuste debe introducir:",
    options: [
      "- 0,4 mm en el bloque posterior.",
      "- 0,2 mm de corrección distribuida en la cota media.",
      "+ 0,8 mm en el paso final."
    ],
    correct: 1,
    explanation: "La desviación se reparte equilibradamente aplicando un factor corrector de la mitad del delta registrado (0,2 mm).",
    source: "Manual POLAR 115Y (Pág. 108)"
  },
  {
    theme: 8,
    question: "En la estructura de un programa de formato automático, la instrucción 'S' asignada a un paso de corte en la pantalla indica:",
    options: [
      "Parada de seguridad programada (Stop) que requiere pulsar la tecla de inicio para reanudar.",
      "Paso con soplado de aire continuo.",
      "Corte con velocidad lenta de cuchilla."
    ],
    correct: 0,
    explanation: "El atributo 'S' pausa la secuencia lógica exigiendo una acción voluntaria del operario antes de mover la escuadra al paso siguiente.",
    source: "Manual POLAR 115Y (Pág. 44, 105)"
  },
  {
    theme: 8,
    question: "Para optimizar el tiempo de ciclo en un programa de 500 cortes de tira, el ajuste de la carrera de retroceso de la escuadra debe configurarse:",
    options: [
      "Al límite máximo de $115\text{ cm}$ tras cada golpe.",
      "Al valor mínimo imprescindible que permita girar o retirar la tira con seguridad (carrera corta).",
      "Desconectando el motor de avance rápido."
    ],
    correct: 1,
    explanation: "Minimizar el recorrido de retroceso del tope posterior elimina tiempos muertos acumulados en tiradas largas.",
    source: "Manual POLAR 115Y (Pág. 52, 101)"
  },
  {
    theme: 8,
    question: "Al programar un corte en bisel oblicuo que no es paralelo a ninguna de las reglas de apoyo, la maniobra requiere:",
    options: [
      "Introducir la cota cero y cortar a mano sin escuadra.",
      "Utilizar una plantilla angular de madera o la 'Escuadra Giratoria' ajustada al ángulo geométrico del dibujo.",
      "Desconectar las fotocélulas de seguridad."
    ],
    correct: 1,
    explanation: "Cortes poligonales o en ángulo no ortogonal exigen adaptar el plano de apoyo mediante falsa escuadra o escuadra orientable.",
    source: "Manual POLAR 115Y (Pág. 68, 118)"
  },

  // ==========================================
  // BLOQUE IX: SEGURIDAD Y CUCHILLAS (Theme 9)
  // ==========================================
  {
    theme: 9,
    question: "El tiempo de simultaneidad máximo exigido entre los dos pulsadores del mando bimanual de corte según la norma EN 574 (Tipo III C) es de:",
    options: [
      "Exactamente 0,5 segundos.",
      "Máximo 0,1 segundos.",
      "No hay tiempo límite mientras se mantengan pisados ambos."
    ],
    correct: 0,
    explanation: "Si el tiempo entre la pulsación del primer y segundo botón supera los 0,5 s, el circuito de seguridad anula la orden de corte.",
    source: "Manual POLAR 115Y (Pág. 124)"
  },
  {
    theme: 9,
    question: "Al sustituir los tornillos de fijación de la cuchilla POLAR, se debe aplicar un par de apriete con llave dinamométrica de:",
    options: [
      "10 a 20 Nm.",
      "70 a 80 Nm.",
      "200 a 250 Nm."
    ],
    correct: 1,
    explanation: "Un apriete de 70-80 Nm garantiza la fijación del portacuchillas sin deformar las roscas ni fisurar el lomo de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 129, 135)"
  },
  {
    theme: 9,
    question: "Una cuchilla de corte de Carburo de Tungsteno (Metal Duro / Widia) ofrece una durabilidad frente al desgaste superior a una cuchilla estándar de acero al carbono de hasta:",
    options: [
      "2 veces más.",
      "De 10 a 20 veces más en condiciones de trabajo limpias.",
      "Exactamente la misma duración pero pesa la mitad."
    ],
    correct: 1,
    explanation: "El grano de metal duro sinterizado resiste la abrasión hasta 20 veces más que el acero rápido en papeles libres de impurezas.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 9,
    question: "Al asentarse o rectificar el filo de una cuchilla recién afilada con la piedra de mano (Piedra de aceite/Arkansas), el movimiento de la piedra sobre la cara plana trasera debe ser:",
    options: [
      "Circular e inclinado a 45°.",
      "Completamente plano y apoyado paralelo a la cara posterior para eliminar únicamente la rebaba sin redondear el filo.",
      "Transversal cruzando la arista perpendicularmente."
    ],
    correct: 1,
    explanation: "Cualquier inclinación en la cara trasera destruye la rectitud del plano creando un bisel negativo que arruina el afilado.",
    source: "Manual POLAR 115Y (Pág. 150)"
  },
  {
    theme: 9,
    question: "El 'husillo de sobrecarga' o fusible mecánico instalado en el tren de arrastre de la cuchilla de la guillotina tiene la función de:",
    options: [
      "Romperse o desacoplarse mecánicamente ante un enganchón grave para proteger la reductora y el motor.",
      "Sujetar la chapa del pisón.",
      "Regular la velocidad de bajada de la escuadra."
    ],
    correct: 0,
    explanation: "Es el punto débil calibrado del mecanismo que colapsa ante un esfuerzo extremo (ej. cortar un bloque de acero) salvando el motor.",
    source: "Manual POLAR 115Y (Pág. 124, 135)"
  },
  {
    theme: 9,
    question: "Durante la maniobra de cambio de cuchilla, los mangos roscados de seguridad con funda protectora deben utilizarse obligatoriamente para:",
    options: [
      "Atornillar el listón de plástico.",
      "Sostener e introducir la cuchilla desnuda en el portacuchillas sin tocar el filo con las manos.",
      "Palanquear la mesa de aire."
    ],
    correct: 1,
    explanation: "Los mangos roscados permiten izar la cuchilla con total control físico manteniendo las manos fuera de la zona de la arista cortante.",
    source: "Manual POLAR 115Y (Pág. 46, 129)"
  },
  {
    theme: 9,
    question: "Si al inspeccionar el listón de corte recién instalado observamos una canaleta profunda marcada por la cuchilla tras solo 100 cortes, esto indica:",
    options: [
      "Un ajuste de profundidad excesivamente bajo (cuchilla clavada demasiado en el plástico).",
      "Que el papel estaba seco.",
      "Que la masa del pisón era muy reducida."
    ],
    correct: 0,
    explanation: "Hundir la cuchilla más de 0,5 mm en el plástico destruye el listón prematuramente y desgasta la arista por impacto hidrostático.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 9,
    question: "La viscosidad del aceite hidráulico recomendable en las guillotinas POLAR para garantizar un funcionamiento óptimo a temperatura ambiente de taller es:",
    options: [
      "SAE 90 de transmisión densa.",
      "ISO VG 46 o ISO VG 68 según rango climático.",
      "Aceite vegetal biodegradable multigrado."
    ],
    correct: 1,
    explanation: "Los fluidos hidráulicos ISO VG 46/68 mantienen el índice de viscosidad estable bajo la fricción de las válvulas de prensado.",
    source: "Manual POLAR 115Y (Pág. 135)"
  },
  {
    theme: 9,
    question: "En las comprobaciones diarias de seguridad según la norma de prevención, si al accionar UN SOLO pulsador del mando bimanual la cuchilla realiza el amago de bajar, el guillotinero debe:",
    options: [
      "Trabajar rápido antes de que falle del todo.",
      "Parar la máquina de inmediato, señalar la avería LOTO y avisar al servicio técnico.",
      "Desconectar la barrera de luz."
    ],
    correct: 1,
    explanation: "El fallo del bloqueo de canal en el mando bimanual invalida la seguridad de la máquina con riesgo grave de amputación.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 9,
    question: "El ángulo de reafilado de una cuchilla HSS que ha perdido $10\text{ mm}$ de su anchura total por sucesivos afilados debe:",
    options: [
      "Modificarse a $35^\circ$ para compensar la pérdida de masa.",
      "Mantenerse exactamente en el ángulo nominal de diseño ($23^\circ-24^\circ$) mediante rectificado plano.",
      "Reducirse a $12^\circ$ para afilar más rápido."
    ],
    correct: 1,
    explanation: "El perfil geométrico del bisel debe conservarse inalterado durante toda la vida útil de la cuchilla para no alterar las fuerzas de corte.",
    source: "Manual POLAR 115Y (Pág. 149, 150)"
  },

  // ==========================================
  // BLOQUE X: CALIDAD Y TOLERANCIAS (Theme 10)
  // ==========================================
  {
    theme: 10,
    question: "Al verificar el escuadrado a 90° de un pliego recién refilado con una escuadra de precisión de taller, se detecta una desviación de 0,5 mm en un lado de 1.000 mm. La causa probable en la guillotina es:",
    options: [
      "Falta de alineación / perpendicularidad entre la regla lateral y la línea de corte de la cuchilla.",
      "La temperatura del aceite hidráulico era muy alta.",
      "El colchón de aire estaba apagado."
    ],
    correct: 0,
    explanation: "El error angular (falta de ortogonalidad) deriva directamente del desalineamiento entre la regla de apoyo lateral y la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 137, 147)"
  },
  {
    theme: 10,
    question: "El defecto de corte denominado 'Corte en seta' (agrandamiento de los pliegos superiores) se corrige en la guillotina mediante:",
    options: [
      "Aumentar la presión del pisón o sustituir la cuchilla desafilada por una afilada.",
      "Disminuir la altura de la pila y mojar el papel.",
      "Retirar la chapa de protección y subir la velocidad."
    ],
    correct: 0,
    explanation: "La seta se produce cuando una cuchilla sin filo arrastra las hojas superiores de una pila mal prensada; requiere más prensado y filo agudo.",
    source: "Manual POLAR 115Y (Pág. 40, 146, 150)"
  },
  {
    theme: 10,
    question: "En el refilado de folletos plegados de múltiples páginas (revistas encuadernadas), para evitar que el aire atrapado en el lomo haga estallar la carga al bajar el pisón, se aplica:",
    options: [
      "Un prensado previo suave con bajada lenta y colocación de una chapa de pisón acanalada o acolchada en el lomo.",
      "Corte a máxima velocidad sin pisón.",
      "Aumentar la presión hidráulica al nivel 5 (4.500 daN) de golpe."
    ],
    correct: 0,
    explanation: "El aire atrapado en los doblados debe expulsarse paulatinamente usando prensado progresivo o bandas de amortiguación sobre el lomo.",
    source: "Manual POLAR 115Y (Pág. 46, 61, 146)"
  },
  {
    theme: 10,
    question: "La tolerancia dimensional aceptada en el corte de etiquetas de alta precisión para etiquetadoras automáticas de botellas es de:",
    options: [
      "± 1,5 mm.",
      "± 0,1 mm a ± 0,2 mm máximo.",
      "± 5,0 mm."
    ],
    correct: 1,
    explanation: "Etiquetadoras mecánicas de alta velocidad se atascan si el formato varía más de una décima de milímetro respecto al estándar.",
    source: "Manual POLAR 115Y (Pág. 109, 137)"
  },
  {
    theme: 10,
    question: "Al cortar bloques de material sintético (PVC rígido / polipropileno), si se utiliza una presión de pisón muy alta y cuchilla HSS estándar, el problema de calidad inmediato es:",
    options: [
      "Fusión por calor de los cantos de las láminas llegando a soldarse entre sí.",
      "El papel pierde el color original.",
      "Se destruye el husillo de la escuadra."
    ],
    correct: 0,
    explanation: "La fricción de la cuchilla y la alta compresión en plásticos generan calor local que funde las aristas pegando las tiras en un bloque rígido.",
    source: "Manual POLAR 115Y (Pág. 57, 146)"
  },
  {
    theme: 10,
    question: "¿En qué consiste la prueba de verificación del 'Corte en blanco' para diagnosticar el paralelismo del portacuchillas?",
    options: [
      "Cortar una sola hoja de papel de seda de 30 g/m² a lo largo de toda la boca de corte y comprobar que se secciona limpia de extremo a extremo.",
      "Pintar la mesa con tiza blanca.",
      "Accionar la máquina sin papel ni listón puesto."
    ],
    correct: 0,
    explanation: "Seccionar una hoja fina única sin papel debajo evalúa si la arista baja exactamente paralela al listón en toda la luz de corte ($115\text{ cm}$).",
    source: "Manual POLAR 115Y (Pág. 38, 138)"
  },
  {
    theme: 10,
    question: "En el control de proceso (SPC) de un taller de guillotinado, se toman muestras de 5 tacos cada 1.000 pliegos procesados. Si el gráfico X-Bar muestra una tendencia ascendente en las medidas, esto señala:",
    options: [
      "Un desgaste progresivo del filo de la cuchilla o un desajuste por temperatura en el circuito de la escuadra.",
      "Que el operario trabaja cada vez más rápido.",
      "Que el papel se está secando."
    ],
    correct: 0,
    explanation: "La deriva constante de cota alerta de dilatación térmica de componentes o empuje progresivo por pérdida de filo en la arista.",
    source: "Manual POLAR 115Y (Pág. 137, 150)"
  },
  {
    theme: 10,
    question: "Al guillotinar materiales con relieve o estampación en seco (embossing), la precaución indispensable para no aplastar el grabado es:",
    options: [
      "Usar una chapa de pisón vaciada / ahuecada a la medida de la zona con relieve.",
      "Incrementar la presión hidráulica al máximo.",
      "Girar el pliego $45^\circ$."
    ],
    correct: 0,
    explanation: "El ahuecado en la suela del pisón evita ejercer fuerza sobre el área estampada preservando el relieve del producto.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 10,
    question: "Si al finalizar el corte observamos que el canto del papel presenta estrías verticales marcadas y asperezas al tacto, esto es síntoma indudable de:",
    options: [
      "Muescas, picaduras o mellas en el filo de la cuchilla por impacto con impurezas.",
      "Exceso de aire en la mesa de trabajo.",
      "Un programa Eltrotact mal ejecutado."
    ],
    correct: 0,
    explanation: "Las rayas o surcos longitudinales en la pared de corte coinciden exactamente con los puntos muescados de la arista mellada.",
    source: "Manual POLAR 115Y (Pág. 150)"
  },
  {
    theme: 10,
    question: "La norma de calidad DIN 16518 para la evaluación de acabados gráficos establece que un corte se considera RECHAZADO si:",
    options: [
      "El desperdicio cae en el contenedor de reciclaje.",
      "Presenta rebabas, desgarros, diferencia dimensional fuera de tolerancia o salpicaduras de grasa/aceite en los cantos.",
      "Se ejecuta en una guillotina de más de 5 años."
    ],
    correct: 1,
    explanation: "Cualquier imperfección física (mella, desvío de medida, mancha o desgarro) invalida la conformidad de la entrega gráfica.",
    source: "Manual POLAR 115Y (Pág. 136, 137)"
  },
  //const preguntasExamenGuillotineroDificil2 = [
  // ==========================================
  // BLOQUE I: PRL Y ERGONOMÍA (Theme 1)
  // ==========================================
  {
    theme: 1,
    question: "Al levantar una carga pesada desde el suelo inclinando el tronco 45° sin doblar las rodillas, ¿cuál es el incremento relativo de la fuerza de compresión en el disco intervertebral L5-S1 en comparación con la elevación con rodillas flexionadas?",
    options: [
      "El esfuerzo se incrementa en torno a un 25% únicamente por el peso del papel.",
      "La compresión en L5-S1 se multiplica casi por tres, pudiendo superar los 600 kg de fuerza sobre el disco.",
      "Mantiene un valor constante de fuerza debido a la rigidez muscular de la espalda."
    ],
    correct: 1,
    explanation: "La inclinación del tronco a 45° aumenta considerablemente el brazo de palanca dorsal, multiplicando la carga sobre la zona lumbar hasta superar los 600 kg de presión de compresión.",
    source: "Manual POLAR 115Y (Pág. 55) / Prevención de Riesgos Laborales"
  },
  {
    theme: 1,
    question: "Según la norma de seguridad EN 60204-1 aplicada a guillotinas de corte industrial, ¿cuál es la diferencia funcional entre una Parada de Emergencia de Categoría 0 y una de Categoría 1?",
    options: [
      "La Categoría 0 corta la energía de inmediato desactivando actuadores; la Categoría 1 frena de forma controlada el motor antes de cortar el suministro.",
      "La Categoría 0 solo se activa por pedal y la Categoría 1 mediante la cortina de fotocélulas.",
      "La Categoría 0 permite un reencendido automático y la Categoría 1 requiere clave de administrador."
    ],
    correct: 0,
    explanation: "La Parada de Categoría 0 desconecta instantáneamente la alimentación eléctrica de los actuadores; la de Categoría 1 aplica freno controlado manteniendo energía antes de la desconexión total.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 1,
    question: "Durante el funcionamiento de las barras ionizadoras antiestáticas auxiliares instaladas cerca de la cuchilla, ¿qué riesgo eléctrico residual debe contemplar el operario?",
    options: [
      "Generación de campos magnéticos que desprograman el ordenador central Eltrotact.",
      "Presencia de alta tensión en las puntas emisoras que puede provocar descargas secundarias si se tocan con herramientas metálicas.",
      "Fugas de corriente hidráulica a través del agua del papel."
    ],
    correct: 1,
    explanation: "Las barras antiestáticas ionizan el aire mediante transformadores de alta tensión; el contacto directo con elementos conductores puede causar descargas o arcos eléctricos.",
    source: "Manual POLAR 115Y (Pág. 54, 65)"
  },
  {
    theme: 1,
    question: "Al manipular la cuchilla fuera de la guillotina para llevarla al puesto de afilado, ¿cuál es el requisito obligatorio de seguridad física?",
    options: [
      "Transportarla sujeta con ambas manos directamente por los extremos del lomo.",
      "Fijarla obligatoriamente en la funda de transporte de madera/plástico mediante sus pernos de retención antes de moverla.",
      "Envolverla exclusivamente en papel de estraza impregnado en aceite mineral."
    ],
    correct: 1,
    explanation: "Toda cuchilla desarmada debe atornillarse firmemente dentro de su caja o funda protectora especial de madera para evitar cortes graves durante el transporte.",
    source: "Manual POLAR 115Y (Pág. 54, 129)"
  },
  {
    theme: 1,
    question: "Según el Real Decreto 1215/1997 sobre equipos de trabajo, ¿con qué frecuencia debe verificarse el tiempo de frenado del embrague electromagnético en una guillotina?",
    options: [
      "Únicamente tras sufrir una avería grave en el motor.",
      "De forma periódica en las revisiones de mantenimiento preventivo y de manera obligatoria al menos una vez al año.",
      "Cada 5 años coincidiendo con la auditoría externa."
    ],
    correct: 1,
    explanation: "Las verificaciones de los elementos Críticos de seguridad (freno y embrague) deben realizarse periódicamente y registrarse en el libro de mantenimiento del equipo.",
    source: "Manual POLAR 115Y (Pág. 41, 123)"
  },
  {
    theme: 1,
    question: "Al trabajar en la mesa trasera de la guillotina para tareas de limpieza o desatascado de papel, ¿qué dispositivo de protección evita el atrapamiento por el movimiento de la escuadra?",
    options: [
      "El sensor de presión del pedal.",
      "Los microinterruptores de desconexión de seguridad activados al abrir las tapas traseras de protección.",
      "El fotodetector de la mesa delantera."
    ],
    correct: 1,
    explanation: "El acceso a la zona trasera mediante la apertura de las guardas de protección interrumpe electromecánicamente la maniobra de la escuadra y de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 124)"
  },
  {
    theme: 1,
    question: "El trastorno musculoesquelético conocido como síndrome del túnel carpiano en guillotineros se asocia principalmente a:",
    options: [
      "Pulsar repetidamente las teclas numéricas del cuadro de mandos.",
      "Movimientos repetitivos de flexo-extensión y desviación cubital de la muñeca al ventear y voltear postetas pesadas.",
      "El uso prolongado de calzado con puntera de acero."
    ],
    correct: 1,
    explanation: "La torsión e inclinación constante de las muñecas para airear y separar pliegos de alto gramaje ejerce una compresión continuada sobre el nervio mediano.",
    source: "Manual POLAR 115Y (Pág. 55)"
  },
  {
    theme: 1,
    question: "Durante el funcionamiento de las soplantes de la mesa de aire a máxima potencia, la exposición continuada a ruido de turbina puede requerir medidas preventivas cuando se superan los:",
    options: [
      "60 dBA de nivel continuo equivalente.",
      "80 dBA de nivel continuo equivalente (L_Aeq,d).",
      "120 dBA de valor pico."
    ],
    correct: 1,
    explanation: "A partir de 80 dBA el empresario debe poner a disposición del trabajador protectores auditivos e informar sobre los riesgos de hipoacusia.",
    source: "Manual POLAR 115Y (Pág. 54)"
  },
  {
    theme: 1,
    question: "Para evitar la caída inadvertida del portacuchillas por pérdida de presión hidráulica o fallo del freno durante un cambio de cuchilla, se utiliza:",
    options: [
      "El pestillo de bloqueo mecánico de seguridad (trinquete/perno de parada de la cuchilla).",
      "Una barra de madera atravesada en la mesa delantera.",
      "El freno de mano del elevador de cargas."
    ],
    correct: 0,
    explanation: "El perno de seguridad interviene mecánicamente reteniendo el bastidor del portacuchillas en la parte superior impidiendo su caída por gravedad.",
    source: "Manual POLAR 115Y (Pág. 41, 129)"
  },
  {
    theme: 1,
    question: "En una guillotina con mesa de aire asistida, si el filtro de aspiración de la turbina se encuentra totalmente obstruido por polvo de papel, el riesgo operativo es:",
    options: [
      "Aumento inmediato del consumo de aceite hidráulico.",
      "Sobrecalentamiento del motor de la soplante e incapacidad para crear el colchón de aire, aumentando el esfuerzo del operario al arrastrar las postetas.",
      "Bloqueo automático del monitor táctil XT."
    ],
    correct: 1,
    explanation: "La saturación del filtro reduce el caudal de soplado sobre la mesa; la falta de flotación obliga al trabajador a realizar mayores esfuerzos de empuje manual.",
    source: "Manual POLAR 115Y (Pág. 47, 135)"
  },

  // ==========================================
  // BLOQUE II: PAPEL, FORMATOS Y GRAMAJES (Theme 2)
  // ==========================================
  {
    theme: 2,
    question: "Se necesita guillotinar un lote de 50.000 pliegos de papel estucado de formato 70 × 100 cm y gramaje 300 g/m². ¿Cuál es el peso total del lote que debe manipular el taller?",
    options: [
      "1.050 kg.",
      "10.500 kg (10,5 toneladas).",
      "105.000 kg."
    ],
    correct: 1,
    explanation: "Superficie pliego: 0,7 m × 1,0 m = 0,7 m². Peso pliego: 0,7 m² × 300 g/m² = 210 g. Peso total: 50.000 × 210 g = 10.500.000 g = 10.500 kg.",
    source: "Manual POLAR 115Y (Pág. 55, 61)"
  },
  {
    theme: 2,
    question: "El término 'anisotropía' en el papel gráfico hace referencia a:",
    options: [
      "La variación cromática que sufre el papel bajo la luz ultravioleta.",
      "La desigualdad en las propiedades físicas y mecánicas del soporte (resistencia, rigidez, dilatación) según la dirección de la fibra (MD) o transversal (CD).",
      "La capacidad de absorber el aceite de la cuchilla sin manchar la tinta."
    ],
    correct: 1,
    explanation: "Debido a la orientación de las fibras en la mesa de fabricación, el papel presenta comportamientos mecánicos distintos en el sentido de máquina respecto al transversal.",
    source: "Manual POLAR 115Y (Pág. 60)"
  },
  {
    theme: 2,
    question: "¿Cuántos pliegos de formato din A4 (210 × 297 mm) se pueden obtener como máximo de un pliego de formato madre SRA3 (320 × 450 mm)?",
    options: [
      "1 pliego.",
      "2 pliegos.",
      "4 pliegos."
    ],
    correct: 1,
    explanation: "En un pliego SRA3 (320 × 450 mm) entran exactamente 2 pliegos A4 (210 × 297 mm) manteniendo los márgenes de limpia y sangrado necesarios.",
    source: "Manual POLAR 115Y (Pág. 58, 60)"
  },
  {
    theme: 2,
    question: "Según la norma ISO 217, ¿cuál es la diferencia principal entre el formato de papel RA y el formato SRA?",
    options: [
      "El formato RA no se puede guillotinar y el SRA sí.",
      "El formato RA tiene una superficie equivalente al 105% de la serie A y el SRA al 115% de la serie A para permitir márgenes de imposición.",
      "El formato SRA es exclusivo para cartón reciclado."
    ],
    correct: 1,
    explanation: "Los formatos untrimmed RA (Raw Format A) y SRA (Supplementary Raw Format A) ofrecen dimensiones mayores que la serie A para absorber el refilado de corte.",
    source: "Manual POLAR 115Y (Pág. 58)"
  },
  {
    theme: 2,
    question: "Al guillotinar papel fotográfico o sintético basado en Polietileno Tereftalato (PET), ¿qué problema se presenta en la arista de corte?",
    options: [
      "El papel se disuelve por la presión del pisón.",
      "El calor generado por la fricción del bisel puede derretir levemente el plástico, produciendo rebabas continuas o soldadura de bordes.",
      "La cuchilla pierde el paralelismo por magnetismo."
    ],
    correct: 1,
    explanation: "Los polímeros termoplásticos sufren ablandamiento térmico bajo la fricción de la cuchilla, fusionando las capas del canto si la cuchilla no está perfectamente afilada.",
    source: "Manual POLAR 115Y (Pág. 57, 146)"
  },
  {
    theme: 2,
    question: "El ensayo Gurley mide la porosidad del papel evaluando el tiempo que tarda un volumen de aire en atravesar la hoja. ¿Cómo afecta un valor Gurley muy elevado a la fase de corte?",
    options: [
      "Indica que el papel es hiperporoso y el pisón se desliza fácilmente.",
      "Indica un soporte cerrado e impermeable donde el aire queda ocluido entre pliegos, requiriendo mayor tiempo de prensado para expulsar el colchón interno.",
      "Obliga a cortar con la cuchilla inclinada a 45°."
    ],
    correct: 1,
    explanation: "Un papel poco poroso (Gurley alto) retiene el aire atrapado entre las hojas formando una bolsa elástica que distorsiona la medida si no se prensa suficientemente.",
    source: "Manual POLAR 115Y (Pág. 60, 67)"
  },
  {
    theme: 2,
    question: "En la clasificación de cartones según la DIN 19303, un cartón de fibra virgen con cara estucada se codifica como:",
    options: [
      "GD (Cartón gris reciclado).",
      "GC (Cartón compacto de pasta química/mecánica virgen).",
      "GK (Cartón prensado plano)."
    ],
    correct: 1,
    explanation: "El código GC identifica al cartón estucado fabricado con fibras vírgenes de alta rigidez utilizado en estuchería de calidad.",
    source: "Manual POLAR 115Y (Pág. 61)"
  },
  {
    theme: 2,
    question: "Al cortar papel autocopiativo (CB, CFB, CF), el peligro de marcar o activar la capa microencapsulada de reactivo químico se evita:",
    options: [
      "Utilizando únicamente una cuchilla con bisel de 30°.",
      "Ajustando la presión del pisón al mínimo valor eficaz e instalando la chapa de protección acolchada.",
      "Mojando los bordes de la pila con disolvente."
    ],
    correct: 1,
    explanation: "Las microcápsulas de colorante sufren rotura por presión localizada; se debe reducir la fuerza del pisón y usar un protector flexible.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 2,
    question: "Si el papel sufre una variación brusca de humedad en el taller pasando del 30% al 60% HR, el pliego tenderá a manifestar:",
    options: [
      "Aplastamiento en el centro por estática.",
      "Ondulación de bordes (bordes largos o abanico) debido al estiramiento de las fibras perimetrales.",
      "Aumento de la dureza del filo de la cuchilla."
    ],
    correct: 1,
    explanation: "Los bordes expuestos del pliego absorben humedad ambiental rápidamente y se expanden, mientras que el interior mantiene la cota seca provocando ondulaciones.",
    source: "Manual POLAR 115Y (Pág. 63)"
  },
  {
    theme: 2,
    question: "¿Cuál es la densidad relativa aproximada de una resma de papel offset no estucado en comparación con una de papel cromo estucado de alto brillo?",
    options: [
      "Ambas resmas pesan exactamente lo mismo a igual formato y gramaje.",
      "El offset presenta mayor volumen específico (más grueso a igual gramaje), ocupando una pila de mayor altura para la misma cantidad de pliegos.",
      "El papel estucado es el doble de grueso a igual gramaje."
    ],
    correct: 1,
    explanation: "El papel offset sin calandrar retiene más aire interno (mayor volumen específico), por lo que una resma de 100 g/m² offset es más alta que una de 100 g/m² estucado.",
    source: "Manual POLAR 115Y (Pág. 60, 61)"
  },

  // ==========================================
  // BLOQUE III: MANEJO, IGUALADO Y TACAS (Theme 3)
  // ==========================================
  {
    theme: 3,
    question: "Al vibrar un bloque de papel transparente vegetal (papel cebolla/satinado) muy delgado, el aire inyectado en la mesa vibradora debe regularse:",
    options: [
      "A la máxima presión del soplador para levantar los pliegos.",
      "Con un caudal muy suave e ionizado para evitar que el aire flexione las hojas delgadas haciéndolas doblar sobre los topes.",
      "Cerrando completamente las válvulas y golpeando con una masa de plomo."
    ],
    correct: 1,
    explanation: "Papeles de bajo gramaje y alta flexibilidad se deforman si reciben una corriente fuerte de aire; requieren soplado liviano para deslizar sin doblarse.",
    source: "Manual POLAR 115Y (Pág. 63, 67)"
  },
  {
    theme: 3,
    question: "La técnica de 'venteo manual en abanico helicoidal' que realiza el guillotinero tiene como objetivo principal:",
    options: [
      "Medir la densidad óptica de la tinta impresa.",
      "Introducir una película uniforme de aire entre las hojas y romper la atracción electrostática o el pegado por barniz fresco.",
      "Girar el sentido de la fibra 90°."
    ],
    correct: 1,
    explanation: "El venteo en abanico separa mecánicamente pliego a pliego facilitando la entrada de aire que neutraliza el vacío entre superficies lisas.",
    source: "Manual POLAR 115Y (Pág. 63)"
  },
  {
    theme: 3,
    question: "Si al posicionar la posteta en la guillotina el papel no apoya correctamente contra la regla lateral retráctil debido a virutas acumuladas en la ranura de la mesa, el defecto resultante en el corte será:",
    options: [
      "Fallo de paralelismo y corte fuera de escuadra (falso paralelismo).",
      "Rotura de la cuchilla por impacto neumático.",
      "Desprogramación del valor cero de la escuadra posterior."
    ],
    correct: 0,
    explanation: "Cualquier suciedad que impida el contacto plano sobre la regla lateral desalinea la posteta respecto al eje perpendicular de corte.",
    source: "Manual POLAR 115Y (Pág. 137, 146)"
  },
  {
    theme: 3,
    question: "¿Qué función cumplen las soplantes de aire empotradas en las reglas laterales fijas de la guillotina?",
    options: [
      "Limpiar la suciedad del papel expulsando el polvo fuera del taller.",
      "Crear una amortiguación neumática lateral para desplazar cargas muy pesadas sin rozamiento contra el plano vertical de la escuadra.",
      "Enfriar la chapa del pisón."
    ],
    correct: 1,
    explanation: "Inyectar aire desde las paredes laterales reduce la fricción del canto de la pila permitiendo desplazar toneladas de papel con mínimo esfuerzo.",
    source: "Manual POLAR 115Y (Pág. 47, 96)"
  },
  {
    theme: 3,
    question: "Al trabajar con pliegos de cartulina que presentan una marca de registro óptico impreso (taca de lectura), la celula fotoeléctrica montada en la escuadra detecta:",
    options: [
      "El espesor del cartón mediante ultrasonidos.",
      "El contraste de reflectancia entre la taca oscura y el fondo claro del pliego para ajustar el tope automáticamente.",
      "El sentido de la fibra celulósica."
    ],
    correct: 1,
    explanation: "Los lectores fotoeléctricos reconocen la variación de contraste óptico de la taca impresa, sincronizando el avance de la escuadra con la marca del pliego.",
    source: "Manual POLAR 115Y (Pág. 21, 45)"
  },
  {
    theme: 3,
    question: "En la preparación de un bloque de pliegos plegados en cuadernillos que presentan mayor grosor en el lomo que en el frente, el método de igualado requiere:",
    options: [
      "Intercalar calzos de ajuste o compensadores bajo la chapa del pisón para equilibrar la fuerza de prensado.",
      "Cortar el papel sin usar la escuadra trasera.",
      "Aumentar la presión del pisón a 6.000 daN."
    ],
    correct: 0,
    explanation: "Las pilas con lomos abultados crean un desnivel; colocar cuñas de compensación en el pisón iguala la presión evitando que el bloque se deslice al cortar.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 3,
    question: "Para evitar rayar la superficie de pliegos impresos con plastificado brillante mate sensible al frote, la superficie de la mesa de la guillotina debe ser:",
    options: [
      "De fundición rugosa sin pulir.",
      "De acero cromado de alta calidad con colchón de aire activo continuado durante todo el manejo de la carga.",
      "Cubierta con aceite hidráulico denso."
    ],
    correct: 1,
    explanation: "El cromo pulido combinado con el flujo constante de aire evita que el pliego plastificado arrastre partículass abrasivas que rayen el polímero.",
    source: "Manual POLAR 115Y (Pág. 47, 135)"
  },
  {
    theme: 3,
    question: "Antes de efectuar la serie de cortes en una tirada de alta precisión, la comprobación de la escuadrado angular de la pila preparada se realiza mediante:",
    options: [
      "El sonido de la soplante.",
      "Una escuadra metálica de comprobación de sombrerete aplicada sobre los cantos del corte de prueba.",
      "El contador de golpes de la cuchilla."
    ],
    correct: 1,
    explanation: "La escuadra de precisión de taller se apoya en los bordes cortados para verificar con un galga que el ángulo de esquina es exactamente de 90°.",
    source: "Manual POLAR 115Y (Pág. 138)"
  },
  {
    theme: 3,
    question: "El defecto denominado 'ondulación de seno' en el centro del pliego (bolsa de aire fija) se corrige antes de cortar mediante:",
    options: [
      "El desaireado pasante por el rodillo prensador neumático de la mesa vibradora.",
      "El uso del pedal mecánico en seco sin cuchilla.",
      "Aumentar la temperatura de la sala de corte a 40°C."
    ],
    correct: 0,
    explanation: "El rodillo exprimidor de aire de la vibradora plancha la posteta expulsando bolsas de aire atrapadas en el núcleo del taco.",
    source: "Manual POLAR 115Y (Pág. 67)"
  },
  {
    theme: 3,
    question: "Al alimentar la guillotina con una posteta desde el lado izquierdo apoyando contra la regla lateral de ese mismo lado, el taco de madera auxiliar debe agarrarse con:",
    options: [
      "La mano derecha mientras la izquierda mantiene el bloque alineado contra la regla lateral.",
      "Las dos manos cruzadas por detrás de la línea de corte.",
      "El pie mediante un pedal accesorio."
    ],
    correct: 0,
    explanation: "La técnica ergonómica y de seguridad exige empujar con la mano dominante usando el taco de madera mientras la otra mano guía la pila contra el lateral.",
    source: "Manual POLAR 115Y (Pág. 54)"
  },

  // ==========================================
  // BLOQUE IV: NUMERACIÓN Y REGISTROS (Theme 4)
  // ==========================================
  {
    theme: 4,
    question: "Un pliego contiene 16 efectos (16 páginas impresas por pliego). Si se requiere entregar un pedido de 80.000 documentos numerados de forma correlativa, ¿cuántos pliegos impresos libres de merma se necesitan?",
    options: [
      "5.000 pliegos.",
      "16.000 pliegos.",
      "80.000 pliegos."
    ],
    correct: 0,
    explanation: "División directa: 80.000 documentos ÷ 16 efectos/pliego = 5.000 pliegos útiles.",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "En un trabajo de imprenta numerado, la presencia de una 'demasía de impresión' calculada del 3% sobre una tirada base de 10.000 pliegos significa que el guillotinero procesará:",
    options: [
      "300 pliegos adicionales destinados a absorber mermas de ajuste y reposiciones.",
      "9.700 pliegos en total.",
      "3.000 pliegos de cartón para embalaje."
    ],
    correct: 0,
    explanation: "La demasía del 3% suma 300 pliegos (10.300 pliegos totales) que cubren las pérdidas en las pruebas de corte y registro de la guillotina.",
    source: "Manual POLAR 115Y (Pág. 28, 81)"
  },
  {
    theme: 4,
    question: "En la cumplimentación oficial del Parte de Trabajo de taller, si un operario realiza tareas de 'Cambio y ajuste de cuchilla', esta operación se codifica como:",
    options: [
      "Tiempo de producción directa (H.P.).",
      "Tiempo de preparación / mantenimiento operativo del equipo (H.I. imputables o tiempo de ajuste).",
      "Hora extraordinaria Tipo E obligatoria."
    ],
    correct: 1,
    explanation: "El mantenimiento preventivo y acondicionamiento de útiles (cambio de cuchilla) se registra bajo el código de tiempos de preparación/ajuste.",
    source: "Manual POLAR 115Y (Pág. 83)"
  },
  {
    theme: 4,
    question: "Al cortar un trabajo de alta seguridad donde cada pliego lleva un código de barras de control consecutivo en el margen de mangueta, si la cuchilla destruye una tira por fallo de ajuste, se debe redactar:",
    options: [
      "Un Parte de Reposición y Anulación de Numeración firmado por el responsable de control de calidad.",
      "Una nota a mano sobre el paquete de papel sobrante.",
      "No se redacta nada si el cliente no está presente."
    ],
    correct: 0,
    explanation: "El protocolo de impresos con numeración controlada obliga a formalizar el documento de no conformidad y reposición por la pérdida de pliegos.",
    source: "Manual POLAR 115Y (Pág. 81)"
  },
  {
    theme: 4,
    question: "El parámetro de eficiencia de máquina conocido como OEE (Overall Equipment Effectiveness) en una guillotina evalúa:",
    options: [
      "La temperatura del motor eléctrico.",
      "El producto de los factores de Disponibilidad, Rendimiento de velocidad y Calidad de piezas conformes.",
      "El consumo de litros de aire comprimido por hora."
    ],
    correct: 1,
    explanation: "El OEE mide globalmente la eficacia productiva multiplicando Disponibilidad (tiempos), Rendimiento (velocidad de golpes) y Calidad (cortes correctos).",
    source: "Manual POLAR 115Y (Pág. 83, 137)"
  },
  {
    theme: 4,
    question: "En la maquetación numerada 'en suma', el ejemplar con el número MÁS ALTO de la orden de fabricación se localiza:",
    options: [
      "En el último cuadrante de la última hoja de la base de la última resma.",
      "En el primer pliego de la primera resma arriba a la izquierda.",
      "En el lomo sobrante de limpia."
    ],
    correct: 0,
    explanation: "En la numeración ascendente (en suma), la secuencia inicia en el valor 1 en la cima del bloque y culmina en la cifra máxima en el fondo del último lote.",
    source: "Manual POLAR 115Y (Pág. 25)"
  },
  {
    theme: 4,
    question: "En el código de puesto de trabajo de 6 dígitos consignado en el Parte de Trabajo, los dos primeros dígitos suelen identificar:",
    options: [
      "El código de la sección o departamento (ej. 04 = Sección de Guillotinas y Acabados).",
      "La edad del maquinista.",
      "El ángulo de la cuchilla instalada."
    ],
    correct: 0,
    explanation: "La estructura del estándar ERP/MES reserva los dígitos iniciales para la clasificación funcional del centro de coste o sección.",
    source: "Manual POLAR 115Y (Pág. 83)"
  },
  {
    theme: 4,
    question: "Al detectar una desviación recurrente de cota en los paquetes cortados de una Orden de Fabricación, el documento interno para detener el lote y corregir el proceso es:",
    options: [
      "El Registro de No Conformidad (RNC) o Hoja de Incidencia de Calidad.",
      "El Tejuelo de envío a almacén.",
      "El recibo de la factura de la máquina."
    ],
    correct: 0,
    explanation: "El RNC bloquea el material fuera de tolerancia, documenta la causa raíz y determina si requiere refilado de recuperación o desecho.",
    source: "Manual POLAR 115Y (Pág. 81, 138)"
  },
  {
    theme: 4,
    question: "En la etiqueta de tejuelo GS1-128 aplicada sobre el palé de producto terminado, el identificador de aplicación (AI) '(37)' especifica:",
    options: [
      "La cantidad contada de unidades / documentos contenidos en la carga.",
      "La fecha de caducidad del papel.",
      "La presión hidráulica del pisón utilizada."
    ],
    correct: 0,
    explanation: "En la codificación logística estandarizada GS1, el código (37) precede al número de piezas o unidades contenidas en el paquete.",
    source: "Manual POLAR 115Y (Pág. 28)"
  },
  {
    theme: 4,
    question: "Al contabilizar el tiempo productivo de guillotinado en un sistema informático a pie de máquina, si la guillotina se detiene por falta de carga de papel expedida desde el almacén, el tiempo de paro se registra como:",
    options: [
      "Parada Improductiva por Causa Externa / Falta de Material.",
      "Tiempo de corte efectivo H.P.",
      "Pérdida por afilado de cuchilla."
    ],
    correct: 0,
    explanation: "Las interrupciones provocadas por fallos en el flujo de cadena logística previa no se imputan al rendimiento directo de la guillotina.",
    source: "Manual POLAR 115Y (Pág. 83, 85)"
  },

  // ==========================================
  // BLOQUE V: PRINCIPIOS FÍSICOS Y PRENSADO (Theme 5)
  // ==========================================
  {
    theme: 5,
    question: "Durante el movimiento de descenso de la cuchilla, la fuerza de cizalladura $F_s$ requerida para cortar el papel se calcula mediante la fórmula aproximada:",
    options: [
      "F_s = K \\times L \\times h \\times \\tau_r (donde K es el factor de filo, L el ancho de corte, h la altura de pila y \\tau_r la resistencia al corte).",
      "F_s = Peso de la guillotina divided by 100.",
      "F_s = Velocidad del motor por la presión del aire."
    ],
    correct: 0,
    explanation: "La fuerza total de cizallado depende directamente de la geometría del bloque (ancho por altura), la dureza intrínseca del papel y el estado del filo del bisel.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 5,
    question: "El ángulo de bisel de $24^\circ$ con reafilado cóncavo (vaciado) se recomienda universalmente para:",
    options: [
      "Cortar láminas de plomo y chapa de aluminio.",
      "Un uso polivalente en papeles de imprenta estándar (offset, estucados de gramaje medio) equilibrando duración de filo y penetración.",
      "Cortar cartón compacto de 5 mm de grosor."
    ],
    correct: 1,
    explanation: "El bisel de 24° es la geometría estándar equilibrada para la mayoría de soportes papeleros en talleres de artes gráficas.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 5,
    question: "Al incrementar la altura de la pila de papel de 5 cm a 10 cm bajo el pisón, la fuerza de prensado total requerida para mantener la pila inamovible debe:",
    options: [
      "Reducirse a la mitad.",
      "Aumentar en proporción directa a la altura del taco para compensar la menor fricción interna entre los pliegos centrales.",
      "Mantenerse en 100 daN en todos los casos."
    ],
    correct: 1,
    explanation: "A mayor número de pliegos acumulados, mayor es la elasticidad elástica del bloque y el riesgo de deslizamiento de las hojas intermedias.",
    source: "Manual POLAR 115Y (Pág. 40, 146)"
  },
  {
    theme: 5,
    question: "Si el listón de plástico de la mesa se instala invertido o deformado de modo que sobresale 1 mm por encima de la superficie de la mesa cromada, ocurrirá que:",
    options: [
      "El pliego inferior tropezará al avanzar impulsado por la escuadra, doblando las esquinas del papel.",
      "La cuchilla se afilará sola durante el corte.",
      "Aumentará el caudal de aire de las soplantes."
    ],
    correct: 0,
    explanation: "El listón debe quedar perfectamente enrasado plano con la mesa; cualquier resalte crea un escalón que engancha la base de la carga de papel.",
    source: "Manual POLAR 115Y (Pág. 38)"
  },
  {
    theme: 5,
    question: "¿Qué función cumple el sistema de accionamiento por husillo de bolas recirculantes en el movimiento de la escuadra posterior?",
    options: [
      "Transmitir el movimiento hidráulico al pisón.",
      "Convertir el giro del servomotor en un desplazamiento longitudinal de alta precisión, mínimo rozamiento y juego cero.",
      "Levantar la cuchilla en la fase de retorno."
    ],
    correct: 1,
    explanation: "Los husillos de bolas recirculantes garantizan el posicionado micrométrico de la escuadra eliminando holguras mecánicas en el avance y retroceso.",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },
  {
    theme: 5,
    question: "El fenómeno de 'arrastre superior' (pliegos de arriba más largos que los de abajo) provocado por el bisel de la cuchilla se atenúa mecánicamente mediante:",
    options: [
      "Aumentar la presión del pisón e inclinar la escuadra ligeramente en sentido vertical (undercut).",
      "Disminuir la presión del pisón a cero.",
      "Girar el listón de corte 90°."
    ],
    correct: 0,
    explanation: "Incrementar la compresión inmoviliza los pliegos superiores y el ajuste undercut de la escuadra compensa la desviación geométrica causada por la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 40, 119, 148)"
  },
  {
    theme: 5,
    question: "Al sustituir el listón de corte de polipropileno por uno de poliuretano de alta densidad (tipo Martinite), la ventaja operativa principal es:",
    options: [
      "Una mayor durabilidad ante marcas de corte profundas y mejor amortiguación del impacto de la arista.",
      "Que permite cortar sin necesidad de lubricar la cuchilla.",
      "Que reduce el peso de la guillotina en 100 kg."
    ],
    correct: 0,
    explanation: "Los listones de elastómero sintético de alto rendimiento (Martinite) poseen memoria elástica, absorbiendo la penetración del filo sin mellar la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 38)"
  },
  {
    theme: 5,
    question: "La 'presión de retención' que ejerce el pedal mecánico de aproximación no debe superar los 50 daN para cumplir la norma de seguridad porque:",
    options: [
      "A presiones superiores a 50 daN el pisón causaría lesiones de aplastamiento si atrapa los dedos del usuario.",
      "Se rompería el muelle de retorno del pedal.",
      "Se desprogramaría la pantalla táctil."
    ],
    correct: 0,
    explanation: "La fuerza de aproximación previa por pedal está limitada legalmente a baja presión para evitar riesgos de amputación antes de fijar la carga.",
    source: "Manual POLAR 115Y (Pág. 46, 124)"
  },
  {
    theme: 5,
    question: "Durante la penetración de la cuchilla, el calor generado por fricción se concentra principalmente en:",
    options: [
      "El lomo superior de la cuchilla.",
      "La estrecha arista de corte y la cara posterior plana de la cuchilla en contacto con la pared del taco.",
      "El volante de inercia electromagnético."
    ],
    correct: 1,
    explanation: "La fricción dinámica entre la pared del papel comprimido y la arista genera elevadas temperaturas locales que pueden alterar el temple del acero.",
    source: "Manual POLAR 115Y (Pág. 150)"
  },
  {
    theme: 5,
    question: "Si el paralelismo entre la arista de la cuchilla y el listón de corte presenta un desajuste de 0,3 mm de lado a lado (la cuchilla toca a la derecha pero no a la izquierda), la corrección se realiza:",
    options: [
      "Mediante el tornillo/excéntrica de ajuste de nivelación del portacuchillas (ajuste de inclinación de la cuchilla).",
      "Golpeando el listón con un martillo de hierro.",
      "Cambiando el aceite del tanque hidráulico."
    ],
    correct: 0,
    explanation: "El portacuchillas dispone de un mecanismo excéntrico de nivelación que bascula la cuchilla para lograr un asentamiento paralelo perfecto sobre el listón.",
    source: "Manual POLAR 115Y (Pág. 38, 129)"
  },

  // ==========================================
  // BLOQUE VI: OPERACIÓN Y PANTALLA (Theme 6)
  // ==========================================
  {
    theme: 6,
    question: "En la consola POLAR XT, la función de menú 'Programación de entrecalles automáticas' requiere introducir:",
    options: [
      "La medida del producto final, la cota del ancho de entrecalle y el número total de repeticiones deseado.",
      "El peso del palé de madera.",
      "El nombre del cliente y el teléfono."
    ],
    correct: 0,
    explanation: "El calculador interno genera los pasos alternados de cota de producto y cota de limpia a partir de la dimensión del modelo y el ancho de entrecalle.",
    source: "Manual POLAR 115Y (Pág. 44, 105)"
  },
  {
    theme: 6,
    question: "Si en la pantalla táctil de la guillotina se activa el aviso de error 'Fallo de encoder de la escuadra', la consecuencia en el funcionamiento es:",
    options: [
      "La escuadra se detiene por seguridad para prevenir colisiones o lecturas erróneas de cota.",
      "La cuchilla empieza a cortar sola.",
      "Se apaga la luz del taller."
    ],
    correct: 0,
    explanation: "El encóder realimenta la posición de la escuadra; un fallo en sus impulsos bloquea el movimiento motorizado para evitar cortes fuera de medida.",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },
  {
    theme: 6,
    question: "Para exportar la base de datos de programas de corte almacenados en el segmento A de una POLAR XT hacia una unidad USB externa, el comando de menú es:",
    options: [
      "Gestión de ficheros -> Copia de seguridad / Exportar a USB.",
      "Borrado total del rango 1-999.",
      "Formateo del disco duro interno."
    ],
    correct: 0,
    explanation: "El menú de gestión de datos permite clonar los registros de programas en soporte externo USB para respaldo o migración a otra guillotina.",
    source: "Manual POLAR 115Y (Pág. 44, 49)"
  },
  {
    theme: 6,
    question: "El modo de previsualización gráfica '3D Sheet View' disponible en las pantallas de control avanzadas muestra al operario:",
    options: [
      "El modelo tridimensional del pliego imposibilitado con la secuencia de cortes y el sentido de giro de la pila paso a paso.",
      "La temperatura interna del motor.",
      "El plano del circuito hidráulico."
    ],
    correct: 0,
    explanation: "La vista 3D proyecta la representación virtual del pliego indicando visualmente las líneas de corte, las franjas de mangueta y la orientación del giro.",
    source: "Manual POLAR 115Y (Pág. 44, 105)"
  },
  {
    theme: 6,
    question: "En una guillotina POLAR X, si durante la ejecución de un programa se necesita retroceder manualmente al paso anterior, se pulsa:",
    options: [
      "La tecla de desplazamiento de paso atras (Flecha arriba / Step Back).",
      "El botón de encendido verde.",
      "La tecla de borrado masivo C."
    ],
    correct: 0,
    explanation: "Las teclas de navegación de pasos permiten conmutar el puntero de programa adelante o atrás sin borrar la secuencia.",
    source: "Manual POLAR 115Y (Pág. 52)"
  },
  {
    theme: 6,
    question: "La función de software llamada 'Limitación de zona de corte' (Soft Limits) se programa para:",
    options: [
      "Restringir la carrera de la escuadra evitando que colisione contra un accesorio especial (ej. la estructura del sujetador de escuadra).",
      "Aumentar la potencia de la bomba de aceite.",
      "Limitar el número de hojas por pila."
    ],
    correct: 0,
    explanation: "Los límites por software definen topes virtuales en la carrera del husillo para impedir impactos contra útiles o elementos montados en la mesa.",
    source: "Manual POLAR 115Y (Pág. 52, 122)"
  },
  {
    theme: 6,
    question: "Al conectar la guillotina al sistema de gestión de planta mediante protocolo CIP4/JDF, la ventaja principal en la preparación de la máquina es:",
    options: [
      "Carga instantánea de los programas de corte sin tecleo manual de cotas, eliminando errores humanos de transcripción.",
      "Que no se necesita operario para mover el papel.",
      "Que las cuchillas no se desgastan."
    ],
    correct: 0,
    explanation: "La integración JDF convierte los datos de imposición de preimpresión en el programa de corte de la guillotina de forma totalmente automatizada.",
    source: "Manual POLAR 115Y (Pág. 45)"
  },
  {
    theme: 6,
    question: "Si la batería del circuito de memoria RAM del autómata Eltrotact se agota por completo mientras la máquina está apagada, la consecuencia es:",
    options: [
      "Pérdida de los programas guardados en la memoria volátil que no cuenten con copia de respaldo.",
      "Rotura del servomotor de la escuadra.",
      "Fuga de aceite por el pisón."
    ],
    correct: 0,
    explanation: "La pila de respaldo mantiene la memoria RAM; su agotamiento borra los datos no almacenados en memoria no volátil (Flash/USB).",
    source: "Manual POLAR 115Y (Pág. 49)"
  },
  {
    theme: 6,
    question: "En la consola XT, la tecla con el símbolo de un 'candado cerrado' asignada a un programa activo sirve para:",
    options: [
      "Bloquear la edición o borrado accidental del programa mediante clave de protección.",
      "Apagar la pantalla táctil.",
      "Bloquear el pedal de pisón."
    ],
    correct: 0,
    explanation: "La función de bloqueo de programa impide que otros usuarios modifiquen las cotas o borren el trabajo grabado en esa posición de memoria.",
    source: "Manual POLAR 115Y (Pág. 63)"
  },
  {
    theme: 6,
    question: "El comando de programación 'Mesa de aire ON/OFF' asignado individualmente a un paso concreto del programa permite:",
    options: [
      "Apagar la soplante justo en el momento del corte de tiras delgadas para evitar que el aire desordene los productos pequeños.",
      "Aumentar la presión del pisón.",
      "Invertir el giro del motor principal."
    ],
    correct: 0,
    explanation: "Programar el corte de aire en pasos críticos inmoviliza tiras pequeñas o etiquetas que podrían salir volando con la turbina encendida.",
    source: "Manual POLAR 115Y (Pág. 47, 105)"
  },

  // ==========================================
  // BLOQUE VII: DISPOSITIVOS ESPECIALES (Theme 7)
  // ==========================================
  {
    theme: 7,
    question: "En el sistema de corte automatizado 'Autotrim', el mecanismo que coordina la evacuación del desperdicio realiza las siguientes acciones en secuencia:",
    options: [
      "Apertura de la mesa delantera, descenso del pisón, golpe de cuchilla con expulsión por soplado, y cierre de la mesa delantera.",
      "Cierre de la mesa, golpe de cuchilla y elevación del palé.",
      "Descenso del pisón sin mover la mesa."
    ],
    correct: 0,
    explanation: "Autotrim retira el segmento de mesa delantera, inmoviliza la carga con el pisón, efectúa el corte dejando caer el desecho y recupera la posición plana de la mesa.",
    source: "Manual POLAR 115Y (Pág. 111)"
  },
  {
    theme: 7,
    question: "El dispositivo conocido como 'Sujetador neumático en la escuadra' (Rake clamp) aplica una fuerza vertical sobre la parte trasera de la pila. Esta fuerza debe regularse adecuadamente para:",
    options: [
      "Evitar marcar o arrugar los pliegos superiores del fondo de la pila al presionar sobre las cerdas del rastrillo.",
      "Subir el peso total de la máquina.",
      "Limpiar el polvo del husillo."
    ],
    correct: 0,
    explanation: "El pisón del rastrillo requiere la presión neumática justa para aplanar el lomo ondulado sin dejar improntas duras en el papel de la base.",
    source: "Manual POLAR 115Y (Pág. 122, 151)"
  },
  {
    theme: 7,
    question: "La función de la 'Regla lateral retráctil' (VL) de accionamiento neumático en el lado derecho de la mesa es:",
    options: [
      "Servir de guía de alineado para trabajos cargados desde la derecha y escamotearse bajo el plano de trabajo al iniciar el corte.",
      "Cortar el papel en dirección longitudinal.",
      "Frenar el avance de la escuadra trasera."
    ],
    correct: 0,
    explanation: "La regla retráctil de la derecha ofrece una referencia fija de apoyo durante la carga manual que se oculta para no interferir con la salida del papel.",
    source: "Manual POLAR 115Y (Pág. 146)"
  },
  {
    theme: 7,
    question: "Al utilizar la 'Escuadra Inclinable' para corregir un defecto de 'corte inclinado en cuña vertical' (undercut), el husillo micrométrico de ajuste desplaza el plano superior del tope:",
    options: [
      "Hacia adelante (hacia la línea de la cuchilla) para presionar más la parte superior de la pila.",
      "Hacia atrás alejándose de la cuchilla.",
      "Hacia un lateral en un ángulo de 45°."
    ],
    correct: 0,
    explanation: "Adelantar la parte alta de la escuadra compensa la flexión que sufre la base de la pila durante la penetración del bisel de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 119, 148)"
  },
  {
    theme: 7,
    question: "En las guillotinas equipadas con el sistema 'Fixomat', las clavijas de registro flexibles situadas en la pared de la escuadra posterior se activan para:",
    options: [
      "Absorber las irregularidades de pliegos con bordes cóncavos, ondulados o no rectos, proporcionando tres puntos de apoyo fijos.",
      "Sellar las salidas de aire comprimido.",
      "Expulsar los paquetes cortados fuera de la mesa."
    ],
    correct: 0,
    explanation: "Fixomat reemplaza la superficie plana continua por pivotes mecánicos de apoyo tridimensional para garantizar la precisión en bordes irregulares.",
    source: "Manual POLAR 115Y (Pág. 66, 120)"
  },
  {
    theme: 7,
    question: "El accesorio llamado 'Sujetador delante de la cuchilla' (Front Clamp) funciona reteniendo la tira cortada que queda en la mesa delantera. Su uso es crítico para:",
    options: [
      "Evitar que tiras estrechas o pequeños bloques de etiquetas se vuelquen o salgan proyectados por la corriente de aire de la mesa.",
      "Sustituir a la cuchilla principal.",
      "Limpiar la mesa de restos de pegamento."
    ],
    correct: 0,
    explanation: "El sujetador frontal pisa los productos pequeños recortados al frente de la cuchilla impidiendo que se desordenen por flotación o impacto dinámico.",
    source: "Manual POLAR 115Y (Pág. 114, 116)"
  },
  {
    theme: 7,
    question: "Las válvulas de esfera (microesferas de latón/inox) instaladas en los orificios de la mesa de aire de la guillotina tienen como principio de funcionamiento:",
    options: [
      "Abrir el paso de aire únicamente cuando el peso del pliego pisa la bola hacia abajo, evitando pérdidas de presión en zonas desocupadas de la mesa.",
      "Generar luz infrarroja de seguridad.",
      "Filtrar el aceite del motor."
    ],
    correct: 0,
    explanation: "Las válvulas de bola actúan como obturadores mecánicos automáticos que liberan aire de soplado solo en los orificios tapados por la carga de papel.",
    source: "Manual POLAR 115Y (Pág. 47)"
  },
  {
    theme: 7,
    question: "En una línea de corte automatizada con descargador automático de palés (Transmat), el brazo de transferencia desplaza el taco cortado mediante:",
    options: [
      "Pinzas neumáticas o barras de empuje de accionamiento coordinado que deslizan la posteta sobre una mesa de aire hacia la plataforma del palé.",
      "Un imán industrial de alta potencia.",
      "Un sistema de correas de cuero."
    ],
    correct: 0,
    explanation: "Transmat utiliza rastrillos de traslación y colchón de aire continuado para transportar suavemente los bloques terminados directamente al apilador de descarga.",
    source: "Manual POLAR 115Y (Pág. 126, 127)"
  },
  {
    theme: 7,
    question: "El dispositivo de ajuste automático de la presión del pisón mediante sensores en la línea de corte mide:",
    options: [
      "La anchura real del taco de papel presente en la zona de corte ajustando al instante el caudal hidráulico de la válvula proporcional.",
      "La temperatura del aire de la sala.",
      "El gramaje de la tinta."
    ],
    correct: 0,
    explanation: "Los palpadores fotoeléctricos detectan la cota lateral del papel, recalculando la fuerza total para mantener constante la presión por cm² independientemente del ancho.",
    source: "Manual POLAR 115Y (Pág. 123)"
  },
  {
    theme: 7,
    question: "El soplador orientable de aire del bisel de la cuchilla (Knife Jet-Air) proyecta un chorro de aire a presión dirigido a:",
    options: [
      "La arista de corte durante la fase de ascenso para desprender tiras de desperdicio adheridas por electricidad estática.",
      "El pie del operario.",
      "El motor principal."
    ],
    correct: 0,
    explanation: "El inyector neumático del portacuchillas limpia el bisel en cada retorno evitando que las tiras de refilado pegajosas vuelvan a caer sobre la masa cortada.",
    source: "Manual POLAR 115Y (Pág. 111, 135)"
  },

  // ==========================================
  // BLOQUE VIII: PROGRAMACIÓN AVANZADA (Theme 8)
  // ==========================================
  {
    theme: 8,
    question: "En la programación de una matriz Eltrotact, la diferencia entre la orden de avance relativo y la cota absoluta radica en que:",
    options: [
      "El avance relativo descuenta la medida introducida respecto a la posición actual de la escuadra; la cota absoluta se refiere siempre al cero fijo de la guillotina.",
      "El avance relativo se mide en pulgadas y la cota absoluta en milímetros.",
      "No existe diferencia operacional entre ambas."
    ],
    correct: 0,
    explanation: "Las cotas absolutas posicionan la escuadra a la distancia exacta medida desde el listón; los avances relativos desplazan la escuadra un intervalo $\Delta x$ desde su posición actual.",
    source: "Manual POLAR 115Y (Pág. 101, 104)"
  },
  {
    theme: 8,
    question: "Al programar un patrón de corte para un pliego de etiquetas con manguetas perimetrales y entrecalles dobles, el orden lógico de ejecución para minimizar giros de la carga es:",
    options: [
      "Realizar las limpias perimetrales (4 lados), efectuar los cortes de tira longitudinales y finalmente trocear las tiras en paquetes individuales.",
      "Cortar primero el centro del pliego en diagonal.",
      "Trocear las etiquetas antes de hacer las limpias exteriores."
    ],
    correct: 0,
    explanation: "El método optimizado exige crear primero el bloque escuadrado perimetral (limpia), fraccionar el pliego en tiras estables y posteriormente procesar las entrecalles en bloque.",
    source: "Manual POLAR 115Y (Pág. 68, 105)"
  },
  {
    theme: 8,
    question: "La función de software 'Compensación de estiramiento del pliego' (Paper Stretch Compensation) recalcula las cotas del programa cuando:",
    options: [
      "El pliego se ha expandido de forma desigual por la absorción de humedad en la máquina de imprimir offset.",
      "La cuchilla se encuentra caliente.",
      "El operario cambia de turno."
    ],
    correct: 0,
    explanation: "El sistema mide la distancia real entre la primera y última marca impresa, aplicando una regla de tres que escala proporcionalmente todas las cotas intermadias.",
    source: "Manual POLAR 115Y (Pág. 98)"
  },
  {
    theme: 8,
    question: "Si en una secuencia programada introducimos el parámetro de función auxiliar 'Expulsión de aire extendida', la guillotina ejecutará:",
    options: [
      "Un tiempo de soplado adicional en la mesa de aire tras posicionarse la escuadra para facilitar el giro manual de postetas pesadas.",
      "La limpieza del filtro de aceite.",
      "Un golpe de cuchilla en seco."
    ],
    correct: 0,
    explanation: "Esta orden mantiene las soplantes encendidas unos segundos extra tras el parado de la escuadra para flotar la carga durante la maniobra de rotación manual.",
    source: "Manual POLAR 115Y (Pág. 47, 105)"
  },
  {
    theme: 8,
    question: "En el software de integración CIP4 Compucut, los datos de los márgenes de pinza y marcas de corte impresas son leídos desde:",
    options: [
      "El archivo de preimpresión en formato JDF / PPF generado en el flujo de trabajo de CTP.",
      "Un escáner manual de documentos.",
      "El teclado de la máquina de imprimir."
    ],
    correct: 0,
    explanation: "Compucut interpreta los metadatos estructurados del archivo JDF creado durante la imposición digital, extrayendo las cotas de corte sin intervención del operario.",
    source: "Manual POLAR 115Y (Pág. 45)"
  },
  {
    theme: 8,
    question: "Al programar un bucle de repetición anidado (Loop) en la consola XT, la sintaxis exige definir:",
    options: [
      "El número de paso de inicio del bucle, el número de paso de fin y el número de iteraciones o ciclos a repetir.",
      "La marca comercial de la guillotina.",
      "La presión en pascales del tanque."
    ],
    correct: 0,
    explanation: "Un bucle anidado requiere delimitar la subrutina (paso inicial y final) y la variable contadora de repeticiones de la secuencia.",
    source: "Manual POLAR 115Y (Pág. 44, 101)"
  },
  {
    theme: 8,
    question: "La función de corrección 'Ancho de mangueta variable' permite al guillotinero:",
    options: [
      "Ajustar de forma independiente la cota de limpia de la cabeza, pie, izquierda y derecha del pliego sin alterar el tamaño del producto útil final.",
      "Cambiar el ancho de la mesa de la guillotina.",
      "Aumentar el tamaño del papel A4."
    ],
    correct: 0,
    explanation: "Permite modificar individualmente las demasías de refilado perimetral del pliego para adaptarlas a variaciones de mangueta del pliego de imprenta.",
    source: "Manual POLAR 115Y (Pág. 105, 108)"
  },
  {
    theme: 8,
    question: "Si durante la ejecución de un programa automático se activa la señal de 'Paso de parada de inspección (Stop pasante)', la máquina:",
    options: [
      "Detiene la escuadra en esa cota exacta y requiere pulsar el botón de reanudación (Start) para verificar manualmente la muestra antes de cortar.",
      "Apaga el motor principal.",
      "Borra el programa de la memoria RAM."
    ],
    correct: 0,
    explanation: "El paso de inspección se utiliza para pausar la producción en cotas críticas permitiendo al operario medir la primera muestra antes de continuar el lote.",
    source: "Manual POLAR 115Y (Pág. 44, 105)"
  },
  {
    theme: 8,
    question: "En el cálculo automático de la secuencia de cortes para un formato de 32 páginas impresas en pliego de 70 × 100 cm, el algoritmo prioriza:",
    options: [
      "Realizar los cortes longitudinales de separación de tiras en primer lugar para facilitar el manejo de postetas más pequeñas.",
      "Realizar cortes diagonales de entrada.",
      "Cortar el pliego hoja por hoja individualmente."
    ],
    correct: 0,
    explanation: "Partir el pliego principal en tiras manejables (fraccionamiento) reduce la inercia de la masa de papel facilitando los cortes finales de precisión.",
    source: "Manual POLAR 115Y (Pág. 68, 105)"
  },
  {
    theme: 8,
    question: "La función de programación llamada 'Optimización de velocidad de escuadra' ajusta la aceleración del motor eléctrico en función de:",
    options: [
      "La altura y peso estimado de la carga presente sobre la mesa para evitar que la pila se desmorone por inercia en frenadas bruscas.",
      "La hora del turno de trabajo.",
      "El número de botones pulsados."
    ],
    correct: 0,
    explanation: "Pilas altas o pesadas requieren rampas de aceleración y frenado suaves para impedir que los pliegos superiores resbalen por fuerza de inercia.",
    source: "Manual POLAR 115Y (Pág. 52)"
  },

  // ==========================================
  // BLOQUE IX: SEGURIDAD Y CUCHILLAS (Theme 9)
  // ==========================================
  {
    theme: 9,
    question: "Al realizar la prueba periódica de funcionamiento de la barrera de luz fotoeléctrica con la barra de ensayo normalizada (tubo de prueba de diámetro graduado), el haz debe interrumpirse:",
    options: [
      "En cualquier punto del plano óptico de protección, provocando la parada inmediata del pisón y la cuchilla antes de rebasar la cota de peligro.",
      "Únicamente en el extremo izquierdo de la mesa.",
      "Solo cuando la cuchilla toca el listón."
    ],
    correct: 0,
    explanation: "La prueba de la cortina de luz requiere verificar con la barra de ensayo que la detección es instantánea en toda la superficie y altura del haz óptico.",
    source: "Manual POLAR 115Y (Pág. 45, 124)"
  },
  {
    theme: 9,
    question: "Las cuchillas de acero rápido aleado HSS (High-Speed Steel) contienen un porcentaje significativo de Wolframio (Tungsteno) y Molibdeno. Estos elementos aportan:",
    options: [
      "Alta resistencia a la ablandamiento por revenido térmico y mayor tenacidad del filo frente a impactos dinámicos.",
      "Flexibilidad completa para doblar la cuchilla con la mano.",
      "Aislamiento térmico contra la electricidad estática."
    ],
    correct: 0,
    explanation: "El wolframio y el molibdeno forman carburos de extrema dureza que retienen el temple del filo incluso cuando la arista alcanza altas temperaturas durante el corte.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 9,
    question: "Si al inspeccionar los tornillos de fijación del portacuchillas se detecta que uno de los agujeros roscados del bastidor de fundición está pasado de rosca (rosca barrida), la medida inmediata es:",
    options: [
      "Prohibir el uso de la guillotina y reparar la rosca mediante inserción de un casquillo roscado de alta resistencia (Heli-Coil) o sustitución por servicio técnico.",
      "Utilizar un tornillo más corto con pegamento rápido.",
      "Dejar el hueco vacío y trabajar con un tornillo menos."
    ],
    correct: 0,
    explanation: "La falta de un perno de fijación compromete la sujeción de la cuchilla bajo la fuerza de corte; se debe reparar la rosca estructuralmente antes de operar.",
    source: "Manual POLAR 115Y (Pág. 129, 135)"
  },
  {
    theme: 9,
    question: "Durante el afilado industrial de una cuchilla de Metal Duro (Widia), la muela de rectificado debe ser obligatoriamente:",
    options: [
      "De aglomerante resinoide con diamante sintético (muela de diamante) refrigerada por abundante caudal de taladrina.",
      "De esmeril seco de grano grueso.",
      "De piedra pómez manual."
    ],
    correct: 0,
    explanation: "El metal duro sinterizado (carburo de tungsteno) posee una dureza extrema que solo puede rectificarse mediante muelas de diamante con refrigeración líquida continua.",
    source: "Manual POLAR 115Y (Pág. 149, 150)"
  },
  {
    theme: 9,
    question: "El mantenimiento preventivo mensual del sistema de frenado y embrague hidráulico de la guillotina incluye la verificación de:",
    options: [
      "La estanqueidad de los latiguillos, la ausencia de fugas de fluido hidráulico y el espesor del disco de freno según la cota de desgaste del fabricante.",
      "La presión de las ruedas del elevador de cargas.",
      "El número de colores de la pantalla."
    ],
    correct: 0,
    explanation: "Verificar el desgaste del disco y la presión del circuito hidráulico garantiza que la capacidad de frenado mantenga el tiempo de detención obligatorio.",
    source: "Manual POLAR 115Y (Pág. 41, 135)"
  },
  {
    theme: 9,
    question: "Al sustituir la cuchilla de la guillotina, antes de arrancar el motor principal tras el cambio, el operario debe efectuar una prueba manual obligatoria que consiste en:",
    options: [
      "Hacer girar el motor a mano desde el volante de inercia o ejecutar una carrera de corte en modo 'Ajuste a baja presión' para comprobar que no hay colisión física.",
      "Poner la máquina a máxima velocidad con 500 sheets de cartón.",
      "Pintar la cuchilla con barniz protector."
    ],
    correct: 0,
    explanation: "El ciclo de prueba a baja presión o giro manual verifica que la cuchilla desciende limpiamente sobre el listón sin chocar contra topes mecánicos por error de ajuste.",
    source: "Manual POLAR 115Y (Pág. 46, 129)"
  },
  {
    theme: 9,
    question: "La presencia de una fisura o grieta visible en el cuerpo de acero de la cuchilla cerca de uno de los orificios de fijación obliga a:",
    options: [
      "Desechar y retirar del servicio la cuchilla de forma definitiva e irreversible.",
      "Soldar la grieta con electrodo de rutilo.",
      "Utilizar la cuchilla solo para papel ligero de 60 g/m²."
    ],
    correct: 0,
    explanation: "Una cuchilla fisurada puede fracturarse catastróficamente bajo las toneladas de presión del golpe de corte, proyectando fragmentos de acero extremadamente peligrosos.",
    source: "Manual POLAR 115Y (Pág. 129, 149)"
  },
  {
    theme: 9,
    question: "En las guillotinas POLAR equipadas con engrase centralizado automático, si el manómetro del bloque distribuidor de grasa señala sobrepresión fija, la causa es:",
    options: [
      "Obstrucción o taponamiento en uno de los tubos capilares de lubricación de las guías del portacuchillas.",
      "Que la cuchilla está muy afilada.",
      "Falta de papel en la mesa."
    ],
    correct: 0,
    explanation: "Los distribuidores progresivos de grasa bloquean la línea e incrementan la presión si un punto de engrase o capilar se encuentra atascado por suciedad.",
    source: "Manual POLAR 115Y (Pág. 135)"
  },
  {
    theme: 9,
    question: "Para evitar la fatiga por sobrecalentamiento del aceite hidráulico en turnos intensivos de 24 horas, la temperatura del depósito de fluido no debe superar los:",
    options: [
      "60°C a 65°C.",
      "120°C.",
      "250°C."
    ],
    correct: 0,
    explanation: " Temperaturas superiores a 65°C degradan los aditivos del aceite hidráulico, destruyen los retenes de estanqueidad y provocan pérdidas de presión en el pisón.",
    source: "Manual POLAR 115Y (Pág. 45, 135)"
  },
  {
    theme: 9,
    question: "El interruptor principal de candado de la guillotina (Main Switch) debe ser bloqueado con un candado de seguridad individual (LOTO) en la posición '0' obligatoriamente cuando:",
    options: [
      "Se realizan operaciones de mantenimiento técnico, sustitución de cuchilla, acceso a la zona trasera o reparación eléctrica.",
      "El operario se ausenta 2 minutos al baño.",
      "Se cambia el tamaño de papel de A4 a A3."
    ],
    correct: 0,
    explanation: "El consignado LOTO (Lockout/Tagout) en el seccionador principal impide la puesta en marcha accidental de la máquina mientras se interviene en zonas de riesgo.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },

  // ==========================================
  // BLOQUE X: CALIDAD Y TOLERANCIAS (Theme 10)
  // ==========================================
  {
    theme: 10,
    question: "El defecto de acabado conocido como 'Corte cóncavo en la pared del taco' (el taco cortado presenta menor medida en el centro que en la parte superior e inferior) se produce cuando:",
    options: [
      "La cuchilla flexiona hacia adentro durante la penetración por exceso de elasticidad de la pila y bajo valor de resistencia del bisel.",
      "El colchón de aire estaba encendido.",
      "El papel es de color negro."
    ],
    correct: 0,
    explanation: "La flexión elástica de la hoja de la cuchilla hacia el interior de la pila genera un abombamiento cóncavo en la cara de corte del bloque.",
    source: "Manual POLAR 115Y (Pág. 146, 150)"
  },
  {
    theme: 10,
    question: "Al realizar el refilado de productos impresos encuadernados en grapa (folletos plegados), para evitar que el pisón aplaste el lomo deformando la portada, se utiliza:",
    options: [
      "Una suela de pisón con vaciado o rebaje de compresión en la zona coincidente con los lomos/grapas del folleto.",
      "Presión máxima de 4.500 daN.",
      "Cucharadas de talco sobre el papel."
    ],
    correct: 0,
    explanation: "Las tiras de suela rebajadas distribuyen la fuerza en el cuerpo del folleto librando la zona abultada del lomo y las grapas metálicas.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 10,
    question: "La norma ISO 12647-2 para procesos de producción gráfica establece que la desviación de tolerancia dimensional en el corte final del pliego impreso no debe superar:",
    options: [
      "± 0,5 mm para impresos comerciales estándar y ± 0,2 mm para etiquetas/embalaje de alta precisión.",
      "± 5,0 mm.",
      "± 10,0 mm."
    ],
    correct: 0,
    explanation: "Las tolerancias estrictas de postimpresión fijan la desviación admisible entre ± 0,2 mm y ± 0,5 mm según el destino final del producto gráfico.",
    source: "Manual POLAR 115Y (Pág. 136, 137)"
  },
  {
    theme: 10,
    question: "Si al guillotinar una pila de papel offset se genera una cantidad excesiva de polvo blanco de celulosa sobre la mesa, la causa técnica es:",
    options: [
      "Cuchilla mella o con ángulo de bisel demasiado obtuso (desgastado) que machaca la fibra en lugar de seccionarla limpiamente.",
      "Exceso de aceite en la mesa.",
      "Uso de aire ionizado."
    ],
    correct: 0,
    explanation: "Un filo desafilado o embotado no corta la fibra de madera por cizallamiento sino por impacto y aplastamiento, desprendiendo polvo y microfibras.",
    source: "Manual POLAR 115Y (Pág. 150)"
  },
  {
    theme: 10,
    question: "Al guillotinar planchas de corcho aglomerado o espuma rígida sintética, el problema operacional de compresión se resuelve mediante:",
    options: [
      "Uso de una chapa de pisón acolchada con elastómero de alta resiliencia y bisel de agudo de 18° a 20° en la cuchilla.",
      "Aumentar la presión del pisón a 5.000 daN.",
      "Apagar la guillotina y cortar a cutter manual."
    ],
    correct: 0,
    explanation: "Soportes ultracompresibles requieren un ángulo de bisel muy agudo para penetrar sin deformar el volumen y una suela de pisón amortiguadora.",
    source: "Manual POLAR 115Y (Pág. 146, 149)"
  },
  {
    theme: 10,
    question: "Para diagnosticar la causa raíz de un defecto de 'falta de paralelismo' entre los cortes anterior y posterior de una tira, el ensayo de verificación exige:",
    options: [
      "Girar la tira 180° y medir la diferencia de ancho en ambos extremos mediante micrómetro o pie de rey de precisión.",
      "Pesando la tira en una balanza de cocina.",
      "Mirando la tira a contraluz."
    ],
    correct: 0,
    explanation: "Medir las cotas de ambos extremos de la tira rotada a 180° evidencia de forma matemática el error angular de desalineación del tope posterior.",
    source: "Manual POLAR 115Y (Pág. 138)"
  },
  {
    theme: 10,
    question: "El ajuste de la fuerza de prensado en soportes papeleros blandos (papel pluma, voluminoso de edición) debe calcularse considerando:",
    options: [
      "El volumen específico y grado de compresibilidad del papel, aplicando presiones bajas para no destruir la masa o calibre del pliego.",
      "Únicamente el color de la portada.",
      "El número de botones del mando bimanual."
    ],
    correct: 0,
    explanation: "Papeles de elevado espesor y baja densidad (voluminosos) pierden su calibre nominal si se someten a presiones de prensado excesivas.",
    source: "Manual POLAR 115Y (Pág. 60, 146)"
  },
  {
    theme: 10,
    question: "Si al cortar láminas de aluminio delgado plastificado se observa que la cuchilla produce chispas o muescas inmediatas, la causa es:",
    options: [
      "Incompatibilidad del tipo de acero de la cuchilla (se requiere cuchilla HSS o Widia con ángulo de bisel reforzado) o velocidad de penetración inadecuada.",
      "Falta de agua en la mesa.",
      "Demasiada luz en el taller."
    ],
    correct: 0,
    explanation: "Materiales metálicos o compuestos exigen aleaciones de cuchilla de alta tenacidad (HSS/Carburo) y biseles especiales que absorban la dureza del soporte.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 10,
    question: "El concepto de 'Calidad Total en el Guillotinado' implica que el maquinista debe verificar la conformidad del producto en las siguientes fases:",
    options: [
      "A la entrada del material (materia prima/impresión), durante el ajuste de la primera muestra de corte y de forma estadística durante la tirada.",
      "Únicamente al finalizar toda la tirada de 100 palés.",
      "Solo si el cliente viene a la planta."
    ],
    correct: 0,
    explanation: "El autocontrol de calidad exige inspeccionar el soporte antes de cortar, validar la primera muestra del programa y realizar muestreos periódicos.",
    source: "Manual POLAR 115Y (Pág. 137, 138)"
  },
  {
    theme: 10,
    question: "Al refilar pliegos impresos con barniz sobrepuesto U.V. de alto brillo, la aparición de 'desconchados' o grietas en la película de barniz a lo largo del canto de corte indica:",
    options: [
      "Un barniz excesivamente rígido/quebradizo combinado con una cuchilla con filo embotado que fractura la capa de barniz por impacto.",
      "Falta de presión de aire en las ruedas.",
      "Uso de papel demasiado grueso."
    ],
    correct: 0,
    explanation: "Un bisel sin filo no secciona suavemente el polímero del barniz UV, provocando tensiones de cizalla que resquebrajan el acabado brillante en la arista.",
    source: "Manual POLAR 115Y (Pág. 57, 150)"
  },
  //const preguntasExamenGuillotineroDificil3 = [
  // ==========================================
  // BLOQUE I: PRL Y ERGONOMÍA (Theme 1)
  // ==========================================
  {
    theme: 1,
    question: "Al realizar el levantamiento manual de una pila de papel de 30 kg flexionando el tronco a 60° sin doblar las rodillas, ¿qué esfuerzo de cizalladura aproximado se genera sobre los discos de la columna lumbar L4-L5?",
    options: [
      "Alrededor de 120 kg de fuerza de cizalladura.",
      "Aproximadamente 450 a 500 kg de fuerza de cizalladura combinada con compresión.",
      "El valor se mantiene por debajo de los 30 kg gracias al contrapeso de la cadera."
    ],
    correct: 1,
    explanation: "La inclinación acentuada del tronco a 60° genera un vector de fuerza tangencial que ejerce entre 450 y 500 kg de cizallamiento y compresión en la unión L4-L5.",
    source: "Manual POLAR 115Y (Pág. 55) / Ergonomía Laboral"
  },
  {
    theme: 1,
    question: "Según la norma EN 60204-1, la prueba periódica del tiempo de detención de la cuchilla tras la interrupción de la barrera fotoeléctrica debe certificar un tiempo máximo de parada de:",
    options: [
      "Menos de 150 milisegundos (0,15 s).",
      "Exactamente 500 milisegundos (0,5 s).",
      "Entre 1 y 2 segundos según la altura del pisón."
    ],
    correct: 0,
    explanation: "El sistema de freno-embrague electromagnético debe inmovilizar la bajada de la cuchilla en menos de 150 ms para evitar lesiones graves al acceder a la zona de riesgo.",
    source: "Manual POLAR 115Y (Pág. 45, 124)"
  },
  {
    theme: 1,
    question: "Al trabajar con la mesa de aire accionada a máxima presión continua, ¿cuál es el peligro ergonómico secundario derivado de la vibración neumática y el flujo de aire seco?",
    options: [
      "Irritación ocular y deshidratación de mucosas por micropartículas de papel en suspensión e hiperacusia.",
      "Aumento inmediato del grosor del papel.",
      "Fallo en la pantalla táctil XT por interferencia estática."
    ],
    correct: 0,
    explanation: "El flujo continuo de aire proyecta polvo fino de celulosa y reduce la humedad ambiental directa, provocando sequedad ocular y afecciones respiratorias si no hay aspiración.",
    source: "Manual POLAR 115Y (Pág. 47, 54)"
  },
  {
    theme: 1,
    question: "Durante la manipulación e instalación de una cuchilla muescada o dañada, ¿qué riesgo mecánico directo se añade al peligro de corte?",
    options: [
      "El riesgo de proyección de esquirlas de acero templado por fractura frágil al aplicar el par de apriete sobre los tornillos.",
      "Desmagnetización del portacuchillas.",
      "Pérdida de la presión del tanque de aceite."
    ],
    correct: 0,
    explanation: "Las muescas y microfisuras concentran tensiones mecánicas; apretar una cuchilla dañada a 70-80 Nm puede fracturar el acero proyectando astillas metálicas.",
    source: "Manual POLAR 115Y (Pág. 129, 149)"
  },
  {
    theme: 1,
    question: "Según la normativa de Prevención de Riesgos Laborales, si el mapa de ruido en la zona de guillotinado registra picos continuos de 88 dBA, la empresa está obligada a:",
    options: [
      "Proporcionar EPIs auditivos de uso obligatorio y realizar controles audiométricos periódicos a los trabajadores.",
      "Apagar la guillotina cada 15 minutos.",
      "Pintar la mesa de corte de color verde."
    ],
    correct: 0,
    explanation: "Superar los 85 dBA de nivel equivalente obliga a la implantación de protectores auditivos de uso obligatorio y seguimiento médico de la salud auditiva.",
    source: "Manual POLAR 115Y (Pág. 54)"
  },
  {
    theme: 1,
    question: "El procedimiento de consignación LOTO (Lockout/Tagout) en una guillotina exige que antes de intervenir en el portacuchillas se debe:",
    options: [
      "Desconectar el seccionador principal, colocar el candado personal de bloqueo, verificar la ausencia de tensión y purgar la presión hidráulica residual.",
      "Desconectar únicamente el interruptor del monitor táctil.",
      "Pulsar el pedal de pie dos veces."
    ],
    correct: 0,
    explanation: "El protocolo LOTO completo requiere corte de energía eléctrica, bloqueo físico por candado, comprobación de cero energía y despresurización del circuito hidráulico.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 1,
    question: "Para prevenir lesiones por atrapamiento al introducir la mano para guiar cargas pequeñas hacia la escuadra trasera, la única herramienta permitida es:",
    options: [
      "El taco de madera o empujador de plástico de uso obligatorio.",
      "Una regla metálica de acero de 50 cm.",
      "Un destornillador de estrella de caña larga."
    ],
    correct: 0,
    explanation: "El uso de útiles no metálicos (taco de madera) impide el contacto directo de la mano con el pisón y no daña el filo de la cuchilla ni la mesa si hay un accionamiento accidental.",
    source: "Manual POLAR 115Y (Pág. 54)"
  },
  {
    theme: 1,
    question: "Al inspeccionar los microinterruptores mecánicos de seguridad de las guardas abatibles traseras, se debe comprobar que:",
    options: [
      "Al abrir la carcasa protectora, el circuito de maniobra se abre instantáneamente bloqueando cualquier movimiento de la escuadra y de la cuchilla.",
      "Aumenta la velocidad del servomotor.",
      "El aceite hidráulico cambia de color."
    ],
    correct: 0,
    explanation: "Los finales de carrera de seguridad cortan el lazo de mando al menor desplazamiento de la guarda, impidiendo atrapamientos en el área trasera del husillo.",
    source: "Manual POLAR 115Y (Pág. 124)"
  },
  {
    theme: 1,
    question: "La descarga estática de alto voltaje acumulada en láminas plásticas sintéticas puede generar en el operario:",
    options: [
      "Movimientos reflejos involuntarios que pueden derivar en atrapamientos o caídas contra la mesa de corte.",
      "Quemaduras químicas de tercer grado.",
      "Inversión de giro del motor trifásico."
    ],
    correct: 0,
    explanation: "Las chispas por estática de alto voltaje (hasta 20 kV) no son letales pero provocan sacudidas musculares involuntarias con riesgo de accidentes secundarios.",
    source: "Manual POLAR 115Y (Pág. 54, 65)"
  },
  {
    theme: 1,
    question: "En caso de fallo total del circuito de frenado electromagnético por interrupción del suministro eléctrico, la bajada de la cuchilla se detiene mecánicamente mediante:",
    options: [
      "El trinquete mecánico de bloqueo accionado por muelle antidescorrimiento que engancha el portacuchillas en PMS.",
      "El rozamiento del papel sobre la mesa.",
      "El peso del pedal de pie."
    ],
    correct: 0,
    explanation: "El trinquete de caída (perno de seguridad) está mantenido fuera de posición por un electroimán; si se corta la corriente, un muelle lo dispara bloqueando la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },

  // ==========================================
  // BLOQUE II: PAPEL, FORMATOS Y GRAMAJES (Theme 2)
  // ==========================================
  {
    theme: 2,
    question: "Se deben cortar 20.000 pliegos de cartulina de $350\text{ g/m}^2$ en formato $65 \times 90\text{ cm}$. ¿Cuál es el peso total del lote de papel a procesar?",
    options: [
      "4.095 kg (aprox. 4,1 toneladas).",
      "409,5 kg.",
      "40.950 kg."
    ],
    correct: 0,
    explanation: "Superficie: $0,65 \times 0,90 = 0,585\text{ m}^2$. Peso pliego: $0,585 \times 350\text{ g} = 204,75\text{ g}$. Total: $20.000 \times 204,75\text{ g} = 4.095.000\text{ g} = 4.095\text{ kg}$.",
    source: "Manual POLAR 115Y (Pág. 55, 61)"
  },
  {
    theme: 2,
    question: "El grado de refinado de la pasta celulósica medido en grados Schopper-Riegler (°SR) influye en el corte porque a mayor valor °SR:",
    options: [
      "El papel es más denso, cerrado y rígido, aumentando la resistencia a la cizalladura de la cuchilla.",
      "El papel se vuelve blando como el algodón y no requiere pisón.",
      "Aumenta el tamaño del pliego A0."
    ],
    correct: 0,
    explanation: "Un alto valor °SR indica fibras muy fibriladas y compactas que crean una estructura papelera dura y cerrada, exigiendo mayor fuerza de corte.",
    source: "Manual POLAR 115Y (Pág. 60)"
  },
  {
    theme: 2,
    question: "Un formato de la Serie C de la norma ISO 269 tiene unas dimensiones calculadas geométricamente como:",
    options: [
      "La media geométrica entre las dimensiones de los formatos correspondientes de la Serie A y la Serie B.",
      "El doble del tamaño de la Serie A.",
      "La mitad de la Serie B multiplicada por 3."
    ],
    correct: 0,
    explanation: "La Serie C (sobres y carpetas) se obtiene calculando la media geométrica entre las cotas del formato A y el formato B del mismo número.",
    source: "Manual POLAR 115Y (Pág. 58)"
  },
  {
    theme: 2,
    question: "Al guillotinar láminas de Polipropileno (PP) de $500\text{ }\mu\text{m}$ de grosor, el comportamiento viscoelástico del material ante la compresión del pisón provoca:",
    options: [
      "Deformación plástica permanente con aplastamiento de bordes si la presión supera el límite elástico del polímero.",
      "Que el material se convierta en agua.",
      "Que la escuadra retroceda automáticamente 10 cm."
    ],
    correct: 0,
    explanation: "Los polímeros sintéticos bajo compresión excesiva sobrepasan su límite de fluencia, fluyendo lateralmente y dejando marcas permanentes en el canto.",
    source: "Manual POLAR 115Y (Pág. 57, 146)"
  },
  {
    theme: 2,
    question: "La variación dimensional del papel provocada por cambios de humedad relativa es significativamente MÁS ACENTUADA en:",
    options: [
      "La dirección transversal a la fibra (CD).",
      "La dirección paralela a la fibra (MD).",
      "La diagonal a 45° del pliego."
    ],
    correct: 0,
    explanation: "Las fibras celulósicas se hinchan o contraen principalmente en su ancho (dirección transversal CD), alterando la medida perpendicular al sentido de máquina.",
    source: "Manual POLAR 115Y (Pág. 60)"
  },
  {
    theme: 2,
    question: "La diferencia técnica entre el valor de 'Blancura ISO' y la 'Blancura CIE' de un soporte papelero estriba en que:",
    options: [
      "La Blancura ISO se mide a una longitud de onda fija de 457 nm y la Blancura CIE evalúa la reflectancia bajo la totalidad del espectro visible bajo iluminante D65.",
      "La Blancura ISO solo se aplica a cartones reciclados.",
      "La Blancura CIE se mide con micrómetro."
    ],
    correct: 0,
    explanation: "La Blancura ISO usa luz azul a 457 nm (ISO 2470); el índice CIE considera la percepción del ojo humano bajo luz diurna D65 (ISO 11475).",
    source: "Manual POLAR 115Y (Pág. 60, 136)"
  },
  {
    theme: 2,
    question: "Al guillotinar soportes de papel estucado alto brillo triple capa frente a papel prensa (periódico), la abrasión sobre la arista de la cuchilla es:",
    options: [
      "Hasta 5 veces mayor en el estucado debido al contenido de cargas minerales (caolín y carbonato cálcico).",
      "Idéntica en ambos papeles.",
      "Mayor en el papel prensa por el peso de la tinta."
    ],
    correct: 0,
    explanation: "Los minerales de recubrimiento del estucado actúan como un abrasivo fino que desgasta la arista de corte mucho más rápido que la pasta mecánica blanda.",
    source: "Manual POLAR 115Y (Pág. 60, 150)"
  },
  {
    theme: 2,
    question: "La resistencia al reventamiento (Mullen) en cartones determina:",
    options: [
      "La presión hidráulica máxima que soporta el cartón antes de romper; influye en el límite de prensado del pisón para no estallar la superficie.",
      "El número de colores de impresión.",
      "La velocidad de la escuadra."
    ],
    correct: 0,
    explanation: "El ensayo Mullen cuantifica la tenacidad multidireccional del soporte; un valor bajo alerta del riesgo de fisurar el papel al bajar el pisón.",
    source: "Manual POLAR 115Y (Pág. 61, 146)"
  },
  {
    theme: 2,
    question: "Al guillotinar cartón ondulado de microcanal tipo E (onda de aprox. 1,5 mm) frente a canal C (onda de 4 mm), la precaución de ajuste en el pisón exige:",
    options: [
      "Usar una chapa de suela acolchada de elastómero y regular la presión para no aplastar la estructura de la onda.",
      "Retirar la cuchilla y usar un láser.",
      "Poner la presión hidráulica al máximo de 4.500 daN."
    ],
    correct: 0,
    explanation: "El cartón ondulado se colapsa si la presión aplasta las cresta del canal interior; se requiere suela blanda y presión moderada.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 2,
    question: "Según la norma ISO 217, las dimensiones de un pliego de formato bruto untrimmed SRA2 deben ser exactamente:",
    options: [
      "450 × 640 mm.",
      "420 × 594 mm.",
      "500 × 700 mm."
    ],
    correct: 0,
    explanation: "El formato comercial de imprenta SRA2 mide $450 \times 640\text{ mm}$, permitiendo obtener dos pliegos A3 refilados a sangre.",
    source: "Manual POLAR 115Y (Pág. 58)"
  },

  // ==========================================
  // BLOQUE III: MANEJO, IGUALADO Y TACAS (Theme 3)
  // ==========================================
  {
    theme: 3,
    question: "Al ajustar la frecuencia de oscilación de la mesa vibradora para una posteta pesada de $80\text{ kg}$ de papel estucado, la configuración correcta es:",
    options: [
      "Frecuencia de vibración baja con amplitud de golpe alta para desplazar la masa de papel sin bloquear el motor.",
      "Frecuencia máxima con amplitud cero.",
      "Inclinación vertical a 90°."
    ],
    correct: 0,
    explanation: "Cargas de alta masa exigen impulsos de gran amplitud a menor frecuencia para vencer la inercia del bloque y lograr el alineado a taco.",
    source: "Manual POLAR 115Y (Pág. 63, 67)"
  },
  {
    theme: 3,
    question: "Si una posteta de pliegos impresos con tinta fresca se somete a una presión excesiva del rodillo sacador de aire en la mesa vibradora, el defecto resultante es:",
    options: [
      "Repintado (repirote) o transferencia de tinta de la cara posterior a la cara anterior del pliego adyacente.",
      "Rotura del motor eléctrico.",
      "Aumento del formato del pliego."
    ],
    correct: 0,
    explanation: "Comprimir pliegos con tinta no polimerizada o sin secar expulsa el solvente y estruja la capa de tinta, manchando el pliego vecino.",
    source: "Manual POLAR 115Y (Pág. 63, 67)"
  },
  {
    theme: 3,
    question: "Al posicionar en la guillotina un pliego impreso a varias tintas en máquina offset de hojas, las referencias de tope deben hacer contacto con:",
    options: [
      "El canto de la pinza de la imprenta contra la escuadra trasera y la marca de la guía lateral contra la regla de apoyo de la guillotina.",
      "Cualquier lado aleatorio del pliego.",
      "Las esquinas cortadas en diagonal."
    ],
    correct: 0,
    explanation: "Para mantener el registro de impresión, se debe respetar la misma 'esquina de registro' (pinza y guía lateral) utilizada durante la tirada en imprenta.",
    source: "Manual POLAR 115Y (Pág. 21, 68)"
  },
  {
    theme: 3,
    question: "Para evacuar una bolsa de aire central ('abombamiento de campana') en una pila de papel couche de gran formato, la maniobra previa antes del corte es:",
    options: [
      "Aplicar el rodillo sacador de aire desde el centro hacia los extremos e instalar el sujetador del rastrillo.",
      "Mojar la pila con un trapo húmedo.",
      "Cortar el paquete en diagonal."
    ],
    correct: 0,
    explanation: "Rodar el prensor neumático desde el núcleo de la carga expulsa la bolsa de aire contenida hacia los laterales abiertos de la pila.",
    source: "Manual POLAR 115Y (Pág. 65, 67)"
  },
  {
    theme: 3,
    question: "Al vibrar pliegos de polipropileno sintético con elevada carga de electricidad estática, el uso del soplante de aire ionizado en la mesa vibradora actúa:",
    options: [
      "Inyectando iones positivos y negativos en el flujo de aire para neutralizar las cargas eléctricas de la superficie del plástico.",
      "Calentando el plástico a 100°C.",
      "Aumentando la velocidad de la cuchilla."
    ],
    correct: 0,
    explanation: "El aire ionizado recombina los iones estáticos de la superficie del polímero, eliminando la fuerza de atracción de Coulomb entre las hojas.",
    source: "Manual POLAR 115Y (Pág. 54, 65)"
  },
  {
    theme: 3,
    question: "El coeficiente de fricción estática ($\mu_s$) entre dos hojas de papel influye en el proceso de corte porque si $\mu_s$ es demasiado bajo:",
    options: [
      "Los pliegos resbalan entre sí durante la penetración del bisel de la cuchilla, produciendo escalonamiento y medidas desiguales.",
      "La guillotina consume el doble de electricidad.",
      "Se rompe el listón de plástico."
    ],
    correct: 0,
    explanation: "Una baja fricción interna (papeles ultra suaves/siliconados) facilita que la fuerza tangencial del bisel desplace unos pliegos sobre otros.",
    source: "Manual POLAR 115Y (Pág. 38, 146)"
  },
  {
    theme: 3,
    question: "Al empujar una carga de 100 kg sobre la mesa de la guillotina, si el colchón de aire pierde presión de forma repentina, el riesgo operativo es:",
    options: [
      "Frenazo brusco de la carga con posible desmoronamiento de la pila y sobreesfuerzo muscular en los brazos del operario.",
      "Rotura del monitor táctil.",
      "Giro de la cuchilla a $180^\circ$."
    ],
    correct: 0,
    explanation: "La pérdida de aire restituye el rozamiento directo papel-acero; la inercia de la masa de 100 kg hace volcar el taco o lesiona los hombros del trabajador.",
    source: "Manual POLAR 115Y (Pág. 47, 55)"
  },
  {
    theme: 3,
    question: "En la mesa de carga lateral asistida por colchón de aire, la presión neumática de la red de taller debe estabilizarse mediante manómetro en:",
    options: [
      "6 a 8 bares de presión de entrada continua.",
      "0,1 bares.",
      "50 bares."
    ],
    correct: 0,
    explanation: "Los colectores de la mesa de aire de guillotinas industriales requieren una red neumática estabilizada entre 6 y 8 bares para alimentar las toberas.",
    source: "Manual POLAR 115Y (Pág. 47)"
  },
  {
    theme: 3,
    question: "Antes de iniciar el refilado de manguetas de un pliego de $100 \times 140\text{ cm}$, la comprobación de la 'falsa escuadra' del pliego recibido de papelera se realiza:",
    options: [
      "Midiendo y comparando las dos diagonales del pliego con una cinta métrica de precisión (si $D_1 = D_2$, el pliego está a $90^\circ$).",
      "Pesando el pliego en una báscula.",
      "Contando el número de hojas."
    ],
    correct: 0,
    explanation: "La igualdad matemática de las dos diagonales de un paralelogramo confirma la perfecta ortogonalidad (90°) de sus cuatro esquinas.",
    source: "Manual POLAR 115Y (Pág. 68, 138)"
  },
  {
    theme: 3,
    question: "Al guillotinar etiquetas autoadhesivas en bobina cortada a pliegos, la resina que sangra por los bordes se previene en la mesa de corte mediante:",
    options: [
      "Limpiar las reglas de apoyo y cuchilla con disolvente de silicona y reducir la presión del pisón al mínimo indispensable.",
      "Calentar la cuchilla con un soplete.",
      "Aplicar grasa de litio sobre el papel."
    ],
    correct: 0,
    explanation: "Evitar la presión excesiva frena la migración del adhesivo hacia el canto y la limpieza periódica previene atascamientos de la carga.",
    source: "Manual POLAR 115Y (Pág. 57, 135)"
  },

  // ==========================================
  // BLOQUE IV: NUMERACIÓN Y REGISTROS (Theme 4)
  // ==========================================
  {
    theme: 4,
    question: "En un pedido de 160.000 vales numerados impresos a 32 efectos por pliego, con una merma autorizada del 4%, ¿cuántos pliegos totales debe entregar la sección de impresión?",
    options: [
      "5.200 pliegos impresos.",
      "5.000 pliegos.",
      "160.000 pliegos."
    ],
    correct: 0,
    explanation: "Pliegos netos: $160.000 \div 32 = 5.000$ pliegos. Merma $4\%$: $5.000 \times 1,04 = 5.200$ pliegos totales.",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "Al guillotinar talonarios numerados en 'suma' montados a 4 efectos en pliegos de 500 hojas, el primer libro cortado en el cuadrante 1 del tablero 1 contendrá las numeraciones:",
    options: [
      "Del 001 al 500.",
      "Del 501 al 1.000.",
      "Del 1.501 al 2.000."
    ],
    correct: 0,
    explanation: "En la ordenación en suma, la primera resma de 500 pliegos del cuadrante 1 abarca la secuencia correlativa del 001 al 500.",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "El cálculo del indicador OEE (Overall Equipment Effectiveness) en una celula de corte arroja: Disponibilidad 90%, Rendimiento 85% y Calidad 98%. ¿Cuál es el valor OEE global?",
    options: [
      "74,97% (aprox. 75%).",
      "91,00%.",
      "273,00%."
    ],
    correct: 0,
    explanation: "El OEE se obtiene multiplicando los tres factores decimales: $0,90 \times 0,85 \times 0,98 = 0,7497 \rightarrow 74,97\%$.",
    source: "Manual POLAR 115Y (Pág. 83, 137)"
  },
  {
    theme: 4,
    question: "En los sistemas de trazabilidad mediante código de barras 2D DataMatrix impreso en la mangueta del pliego, el lector integrado en la guillotina verifica:",
    options: [
      "La coincidencia de la Orden de Fabricación con el programa cargado y el orden correlativo de los pliegos antes de cortar.",
      "El precio del papel en el mercado.",
      "La fecha de cumpleaños del operario."
    ],
    correct: 0,
    explanation: "El escáner automático lee el código DataMatrix del pliego validando que la O.F., la maquetación y la secuencia de pliegos son correctas.",
    source: "Manual POLAR 115Y (Pág. 28, 45)"
  },
  {
    theme: 4,
    question: "En la producción de impresos oficiales de valor (timbre/pasaportes), la inutilización accidental de un pliego en la guillotina exige:",
    options: [
      "Levantar un Acta de Destrucción con registro de numeración anulada y custodiar los fragmentos para su incineración bajo control.",
      "Tirar los trozos a la papelera común.",
      "Pegar el pliego con cinta adhesiva y entregarlo."
    ],
    correct: 0,
    explanation: "Los documentos de valor fiscal/oficial requieren un protocolo auditado de bajas con registro numerado de cada pliego inutilizado.",
    source: "Manual POLAR 115Y (Pág. 81)"
  },
  {
    theme: 4,
    question: "En el Parte Diario de Equipo, las 'Horas Improductivas Imputables al Proceso' (H.I.I.) corresponden a:",
    options: [
      "Tiempos perdidos por errores del propio operario de la guillotina (ej. mal ajuste de cota o fallo de manipulación).",
      "Falta de corriente en la ciudad.",
      "Tiempo de pausa para el almuerzo reglado."
    ],
    correct: 0,
    explanation: "Las H.I.I. identifican las pérdidas de tiempo provocadas por fallos de ejecución o reajustes atribuibles a la operación del puesto.",
    source: "Manual POLAR 115Y (Pág. 83)"
  },
  {
    theme: 4,
    question: "En un código ERP de puesto de trabajo de 6 dígitos '204015', los dos últimos dígitos (15) identifican:",
    options: [
      "El número específico de máquina / guillotina dentro de la sección (ej. Guillotina POLAR Nº 15).",
      "El año de fabricación.",
      "El turno de trabajo."
    ],
    correct: 0,
    explanation: "La nomenclatura estructurada ERP reserva los dígitos finales para la identificación unívoca del activo físico (máquina concreta).",
    source: "Manual POLAR 115Y (Pág. 83)"
  },
  {
    theme: 4,
    question: "Al verificar los tejuelos de un lote de 10 palés de papel numerado, si se detecta un tejuelo duplicado con el mismo rango 'DEL... AL...', la medida es:",
    options: [
      "Inmovilizar ambos palés y solicitar auditoría de Preimpresión/Numeración para prevenir duplicidad de documentos en el mercado.",
      "Cortar ambos palés y empaquetarlos juntos.",
      "Borrar el tejuelo con un rotulador."
    ],
    correct: 0,
    explanation: "Una duplicidad de tejuelos alerta de una reimpresión por error; cortar ambos palés pondría en circulación documentos con numeración idéntica.",
    source: "Manual POLAR 115Y (Pág. 28, 138)"
  },
  {
    theme: 4,
    question: "El porcentaje de mermas de arranque en la guillotina para un trabajo complejo de refilado a 4 caras no debe superar habitualmente el:",
    options: [
      "0,5% a 1% del total de pliegos de la orden.",
      "25% del papel.",
      "50% de la carga."
    ],
    correct: 0,
    explanation: "En la fase de guillotinado, las pérdidas de papel por ajuste de cotas y refilado deben mantenerse por debajo del 1% para no encarecer el coste.",
    source: "Manual POLAR 115Y (Pág. 28, 81)"
  },
  {
    theme: 4,
    question: "En el control de gestión, el indicador MTBF (Mean Time Between Failures) de una guillotina mide:",
    options: [
      "El tiempo medio transcurrido entre dos averías o paradas técnicas no programadas del equipo.",
      "El número de pliegos cortados por minuto.",
      "El volumen de aceite consumido."
    ],
    correct: 0,
    explanation: "El MTBF cuantifica la fiabilidad mecánica del equipo evaluando el tiempo promedio de operación continua entre fallos técnicos.",
    source: "Manual POLAR 115Y (Pág. 83, 135)"
  },

  // ==========================================
  // BLOQUE V: PRINCIPIOS FÍSICOS Y PRENSADO (Theme 5)
  // ==========================================
  {
    theme: 5,
    question: "La fuerza de penetración lateral de la cuchilla genera una componente horizontal $F_h = F_v \times \tan(\theta)$, donde $\theta$ es el ángulo del bisel. Si el bisel aumenta de $20^\circ$ a $30^\circ$, la fuerza horizontal de empuje sobre el papel:",
    options: [
      "Aumenta significativamente, exigiendo mayor fuerza de prensado en el pisón para evitar el desplazamiento de la carga.",
      "Disminuye a cero.",
      "Se invierte hacia la mesa trasera."
    ],
    correct: 0,
    explanation: "Un ángulo de bisel más obtuso ($30^\circ$) incrementa la tangente del ángulo, aumentando exponencialmente la fuerza lateral que empuja el taco cortado.",
    source: "Manual POLAR 115Y (Pág. 38, 146)"
  },
  {
    theme: 5,
    question: "Al guillotinar cartón compacto de $3\text{ mm}$ de espesor, la elasticidad del material produce un efecto de recuperación elástica. Para evitar la rotura del filo por pellizco, la cuchilla debe tener:",
    options: [
      "Un ángulo de bisel reforzado de $26^\circ$ a $28^\circ$ con un talón plano o doble bisel.",
      "Un bisel agudo de $15^\circ$.",
      "Una hoja de plástico flexible."
    ],
    correct: 0,
    explanation: "Materiales rígidos como el cartón compacto ejercen una fuerte presión de recuperación lateral; un doble bisel de $26^\circ-28^\circ$ protege la arista.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 5,
    question: "La presión específica del pisón se expresa en $\text{daN/cm}^2$. Si ajustamos $2.000\text{ daN}$ en la consola para un taco de $100\text{ cm}$ de ancho por $10\text{ cm}$ de suela de pisón ($1.000\text{ cm}^2$), la presión específica es de:",
    options: [
      "2 daN/cm².",
      "200 daN/cm².",
      "20.000 daN/cm²."
    ],
    correct: 0,
    explanation: "Cálculo directo: $\text{Presión específica} = \frac{2.000\text{ daN}}{1.000\text{ cm}^2} = 2\text{ daN/cm}^2$.",
    source: "Manual POLAR 115Y (Pág. 40, 146)"
  },
  {
    theme: 5,
    question: "El ajuste micrométrico de la cota de paralelismo del portacuchillas mediante la excéntrica de nivelación permite corregir desviaciones de altura entre el lado izquierdo y derecho de:",
    options: [
      "Hasta ± 2 mm de desnivel respecto al listón.",
      "50 mm.",
      "10 cm."
    ],
    correct: 0,
    explanation: "La excéntrica de basculación del brazo de accionamiento permite corregir pequeñas diferencias de altura de hasta 2 mm para nivelar la cuchilla con el listón.",
    source: "Manual POLAR 115Y (Pág. 38, 129)"
  },
  {
    theme: 5,
    question: "La rectificación cóncava (vaciado) en la cara del bisel de la cuchilla tiene como propósito mecánico:",
    options: [
      "Reducir la superficie de fricción entre el bisel y el taco de papel cortado, disminuyendo el calentamiento y la resistencia a la penetración.",
      "Hacer la cuchilla más pesada.",
      "Evitar que se manche de tinta."
    ],
    correct: 0,
    explanation: "El vaciado cóncavo crea un alivio detrás de la arista cortante, reduciendo el área de contacto y la fricción por rozamiento contra la pared del papel.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 5,
    question: "Al utilizar una suela de pisón con elastómero sintético de dureza 70 Shore A frente a una de 90 Shore A, la versión de 70 Shore A es ideal para:",
    options: [
      "Soportes con irregularidades de grosor o relieve impreso (p. ej. sobres vacíos, relieve seco o cubiertas desplegables).",
      "Placas de acero inoxidable.",
      "Papel de periódico ultra plano."
    ],
    correct: 0,
    explanation: "Una menor dureza Shore (70 A) aporta mayor flexibilidad elástica, permitiendo a la suela amoldarse a Desniveles de grosor sin deformar el producto.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 5,
    question: "El desgaste del filo de la cuchilla por 'abrasión tribológica' se caracteriza por:",
    options: [
      "La pérdida progresiva de material en la arista de corte redondeando el radio del filo debido al rozamiento continuo con las cargas minerales del papel.",
      "La rotura instantánea de la cuchilla en dos mitades.",
      "El aumento de brillo del listón."
    ],
    correct: 0,
    explanation: "La abrasión tribológica es el desgaste natural causado por las partículas duras de caolín y sílice del papel que van puliendo y redondeando la punta del filo.",
    source: "Manual POLAR 115Y (Pág. 150)"
  },
  {
    theme: 5,
    question: "La válvula de limitación de baja presión del pedal mecánico detiene el avance hidráulico si la resistencia encontrada en la carrera de aproximación supera los:",
    options: [
      "30 a 50 daN de fuerza de contacto.",
      "1.000 daN.",
      "4.500 daN."
    ],
    correct: 0,
    explanation: "Para cumplir las normas de seguridad antiatrapamiento, el circuito de baja presión del pedal limita la fuerza a un máximo de 30-50 daN.",
    source: "Manual POLAR 115Y (Pág. 46, 124)"
  },
  {
    theme: 5,
    question: "Si la cuchilla penetra 1,5 mm dentro del listón de plástico en cada golpe de corte, la consecuencia física sobre la cuchilla es:",
    options: [
      "Rebote hidráulico de la arista con desportillado microestructural del filo e hincado del plástico en el canal.",
      "Aumento de la velocidad de corte.",
      "Mejor alineación de la escuadra."
    ],
    correct: 0,
    explanation: "Una penetración excesiva clavando la arista en el plástico rígido genera tensiones de retracción que astillan el microfilo de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 5,
    question: "El par de rotura del pasador fusible del biela de accionamiento de la cuchilla está calibrado para ceder cuando la fuerza mecánica supera los:",
    options: [
      "120% a 130% de la carga nominal máxima del reductor de corte.",
      "10% de la fuerza.",
      "1.000% de la fuerza."
    ],
    correct: 0,
    explanation: "El fusible mecánico de seguridad se cizalla al alcanzar un 20-30% de sobrecarga sobre el límite máximo de diseño, desacoplando el motor.",
    source: "Manual POLAR 115Y (Pág. 124, 135)"
  },

  // ==========================================
  // BLOQUE VI: OPERACIÓN Y PANTALLA (Theme 6)
  // ==========================================
  {
    theme: 6,
    question: "El algoritmo de optimización de recorridos de escuadra en el software POLAR XT ordena los pasos de programa para:",
    options: [
      "Minimizar la distancia total recorrida por el husillo reduciendo los tiempos muertos de posicionamiento de la escuadra.",
      "Apagar el monitor cada 5 pasos.",
      "Mover la escuadra siempre a la velocidad mínima."
    ],
    correct: 0,
    explanation: "El optimizador de trayectoria reordena la secuencia de cotas para evitar desplazamientos innecesarios del tope posterior entre cortes.",
    source: "Manual POLAR 115Y (Pág. 44, 52)"
  },
  {
    theme: 6,
    question: "Un archivo en formato JDF (Job Definition Format) procesado por Compucut contiene bloques de datos XML que definen:",
    options: [
      "Las cotas de refilado, la posición de las entrecalles, los datos del producto, el esquema de imposición y la secuencia de giros en 3D.",
      "Las fotos del operador de la guillotina.",
      "El contrato legal del cliente."
    ],
    correct: 0,
    explanation: "El archivo JDF estandarizado por CIP4 integra toda la geometría del trabajo impreso permitiendo al software generar el programa sin tecleo manual.",
    source: "Manual POLAR 115Y (Pág. 45)"
  },
  {
    theme: 6,
    question: "El procedimiento de sincronización del punto de referencia cero de la escuadra (Home Position) se realiza automáticamente al encender la máquina mediante:",
    options: [
      "Un avance lento de la escuadra hacia el fondo hasta activar el sensor inductivo de fin de carrera y detectar el impulso cero del encóder.",
      "Medir la mesa con una regla de madera.",
      "Pulsar la tecla de apagado."
    ],
    correct: 0,
    explanation: "El referenciado de la posición absoluta requiere encontrar el detector físico de fondo de carrera y sincronizar la marca de índice del codificador angular.",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },
  {
    theme: 6,
    question: "En la función 'Ajuste de constante de bloque' ($\pm \Delta x$), si aplicamos un valor de $-1,2\text{ mm}$ a un bloque de 10 pasos, el resultado es:",
    options: [
      "Todas las cotas del bloque se reducen exactamente en 1,2 mm respecto a su valor guardado.",
      "Se borran los primeros 2 pasos del bloque.",
      "Se suma 1,2 mm a la altura del pisón."
    ],
    correct: 0,
    explanation: "Aplicar un delta negativo de $-1,2\text{ mm}$ resta de forma homogénea esa magnitud a cada una de las posiciones guardadas en la secuencia.",
    source: "Manual POLAR 115Y (Pág. 52, 108)"
  },
  {
    theme: 6,
    question: "El nivel de acceso 'Administrador' protegido por contraseña en la consola de la guillotina permite:",
    options: [
      "Modificar parámetros de configuración de máquina, tablas de presión, calibración de escuadra y gestión de usuarios autorizados.",
      "Aumentar la velocidad del motor por encima del límite de fábrica.",
      "Anular la barrera de luz durante el trabajo."
    ],
    correct: 0,
    explanation: "El perfil Administrador restringe el acceso a la calibración del sistema, límites de seguridad y parámetros de configuración interna.",
    source: "Manual POLAR 115Y (Pág. 44, 63)"
  },
  {
    theme: 6,
    question: "Si el monitor táctil muestra la alarma 'Sobretemperatura en variador de frecuencia de la escuadra', la acción de diagnóstico es:",
    options: [
      "Verificar el funcionamiento del ventilador de refrigeración del armario eléctrico y limpiar los filtros de aire del cuadro de mando.",
      "Aumentar la velocidad del servomotor.",
      "Echar agua fría sobre el monitor táctil."
    ],
    correct: 0,
    explanation: "El variador de velocidad del servomotor se bloquea si la temperatura interna del cuadro eléctrico se dispara por fallos en la ventilación.",
    source: "Manual POLAR 115Y (Pág. 41, 135)"
  },
  {
    theme: 6,
    question: "El atributo de paso 'Giro de pila $90^\circ$ Derecha' programado en un paso del ciclo hace que la pantalla visualice:",
    options: [
      "La animación en 3D con la flecha de indicación del sentido de rotación y pause la escuadra hasta pulsar el botón de reanudación.",
      "El borrado automático de la memoria.",
      "La bajada inmediata de la cuchilla."
    ],
    correct: 0,
    explanation: "Los pictogramas de instrucción orientan al operario sobre la maniobra física de rotación del papel necesaria antes de iniciar el siguiente corte.",
    source: "Manual POLAR 115Y (Pág. 44, 102)"
  },
  {
    theme: 6,
    question: "Al convertir un programa Eltrotact (bucles automáticos) en medidas absolutas independientes, la ventaja en la edición es:",
    options: [
      "Poder corregir la cota de una sola etiqueta concreta dentro del pliego sin alterar el resto de las repeticiones del patrón.",
      "Aumentar el número de colores del papel.",
      "Reducir el peso de la masa de papel."
    ],
    correct: 0,
    explanation: "Convertir el bucle en pasos individuales desacopla las cotas, permitiendo aplicar correcciones puntuales en etiquetas deformadas localmente.",
    source: "Manual POLAR 115Y (Pág. 57, 104)"
  },
  {
    theme: 6,
    question: "El ajuste de 'Rampa de aceleración de escuadra' para papel autocopiativo liviano de $50\text{ g/m}^2$ debe configurarse en:",
    options: [
      "Rampa suave de aceleración/frenado para evitar que el viento relativo o la inercia desmorone la pila en el desplazamiento.",
      "Aceleración máxima con impacto final.",
      "Velocidad cero permanente."
    ],
    correct: 0,
    explanation: "Soportes muy livianos y deslizantes se vuelcan si el servomotor aplica arranques o frenadas bruscas; requieren rampas de velocidad progresivas.",
    source: "Manual POLAR 115Y (Pág. 52)"
  },
  {
    theme: 6,
    question: "Para realizar la copia de seguridad (Backup) completa del sistema operativo y programas de una guillotina POLAR X vía red Ethernet, se utiliza:",
    options: [
      "El software de gestión remota de datos o servidor FTP integrado desde la consola de servicio.",
      "Un cable de cobre conectado a la mesa.",
      "Un imán de alta potencia."
    ],
    correct: 0,
    explanation: "La conectividad LAN/Ethernet permite volcar los ficheros de configuración y programas a la red corporativa o servidor de mantenimiento.",
    source: "Manual POLAR 115Y (Pág. 44, 45)"
  },

  // ==========================================
  // BLOQUE VII: DISPOSITIVOS ESPECIALES (Theme 7)
  // ==========================================
  {
    theme: 7,
    question: "El tiempo de ciclo de la maniobra del sistema 'Autotrim' (apertura de mesa, corte, eliminación de viruta y cierre de mesa) se completa en aproximadamente:",
    options: [
      "2 a 3 segundos por golpe de corte.",
      "30 segundos.",
      "2 minutos."
    ],
    correct: 0,
    explanation: "La automatización neumática sincronizada del sistema Autotrim ejecuta la apertura, evacuación y cierre de la mesa móvil en 2-3 segundos.",
    source: "Manual POLAR 115Y (Pág. 111)"
  },
  {
    theme: 7,
    question: "Al utilizar la 'Escuadra Inclinable' para corregir un defecto de corte cónico vertical (overcut), el volante micrométrico de ajuste bascula el tope:",
    options: [
      "Retrasando la parte superior de la escuadra hacia atrás para permitir que la cima del taco se apoye más alejada de la cuchilla.",
      "Adelantando la parte inferior 10 cm.",
      "Girando la mesa en sentido horario."
    ],
    correct: 0,
    explanation: "En la deformación overcut, la cima de la pila resulta más corta; inclinar hacia atrás el tope superior restablece la perpendicularidad del canto.",
    source: "Manual POLAR 115Y (Pág. 119, 148)"
  },
  {
    theme: 7,
    question: "La 'Escuadra Giratoria' motorizada puede corregir una inclinación de imagen impresa cruzada de hasta 5 mm mediante:",
    options: [
      "Un motor paso a paso de alta precisión que hace pivotar el eje horizontal de la escuadra independientemente en el lado izquierdo o derecho.",
      "Un golpe de martillo en el lateral.",
      "Inclinar el cuchillo 45°."
    ],
    correct: 0,
    explanation: "Servomotores independientes en los extremos del carro de la escuadra permiten sesgar el plano de apoyo para alinear el corte con la impresión virada.",
    source: "Manual POLAR 115Y (Pág. 118, 147)"
  },
  {
    theme: 7,
    question: "El sistema DNF (De-dusting and Waste Disposal) utiliza un caudal de soplado de aire ionizado en la ranura de apertura de mesa para:",
    options: [
      "Desprender las virutas delgadas de papel adheridas por estática al bisel de la cuchilla y aspirarlas hacia el colector de reciclaje.",
      "Secar el suelo del taller.",
      "Enfriar la chapa del pisón."
    ],
    correct: 0,
    explanation: "El DNF combina aire ionizado para anular la estática de las tiras finas recortadas con un sistema de succión que las evacúa al depósito de desecho.",
    source: "Manual POLAR 115Y (Pág. 111)"
  },
  {
    theme: 7,
    question: "Las clavijas amortiguadas del sistema 'Fixomat' instaladas en la cara de la escuadra posterior retraen su posición neumáticamente cuando:",
    options: [
      "La carga de papel presiona firmemente los tres puntos de contacto confirmando que la pila está perfectamente apoyada contra la escuadra.",
      "Se apaga la bomba de luz.",
      "La cuchilla llega al listón."
    ],
    correct: 0,
    explanation: "Las clavijas Fixomat detectan el contacto físico de la pila; al ceder bajo la presión, confirman al autómata la correcta posición de tope.",
    source: "Manual POLAR 115Y (Pág. 66, 120)"
  },
  {
    theme: 7,
    question: "El dispositivo 'Sujetador delante de la cuchilla' (Front Clamp) aplica una presión neumática de retención regulable en la mesa delantera de:",
    options: [
      "10 a 150 daN según la delicadeza del producto recortado.",
      "4.500 daN fijos.",
      "Zero presión."
    ],
    correct: 0,
    explanation: "El pisón auxiliar frontal modula su fuerza de retención entre 10 y 150 daN para inmovilizar tacos minúsculos sin aplastar el papel.",
    source: "Manual POLAR 115Y (Pág. 114, 116)"
  },
  {
    theme: 7,
    question: "Al trabajar con el 'Sujetador en la escuadra' (Rake clamp), su función de descenso automático sobre la pila se activa:",
    options: [
      "Simultáneamente con el movimiento de avance de la escuadra posterior hacia la cota de corte.",
      "Al presionar el botón de apagado.",
      "Únicamente con la máquina parada."
    ],
    correct: 0,
    explanation: "El sujetador del rastrillo desciende durante el desplazamiento de la escuadra para mantener planas las hojas superiores onduladas durante todo el avance.",
    source: "Manual POLAR 115Y (Pág. 122, 151)"
  },
  {
    theme: 7,
    question: "La 'Regla lateral retráctil' (VL) de accionamiento neumático se eleva sobre el plano de la mesa cuando:",
    options: [
      "La escuadra retrocede a la cota de carga para servir de guía de alineación lateral durante la introducción del papel.",
      "La cuchilla se encuentra cortando en el listón.",
      "Se activa el paro de emergencia."
    ],
    correct: 0,
    explanation: "La regla VL emerge automáticamente en la fase de carga previa para ofrecer un tope lateral rígido y se oculta antes del golpe de corte.",
    source: "Manual POLAR 115Y (Pág. 146)"
  },
  {
    theme: 7,
    question: "Las boquillas soplantes de travesaño (Knife Jet-Air) reciben impulso neumático desde una electroválvula de sincronismo que se activa:",
    options: [
      "Durante la fase de ascenso del portacuchillas tras completar el corte en el listón.",
      "Mientras la máquina está apagada.",
      "Durante la rotación de la escuadra."
    ],
    correct: 0,
    explanation: "El soplo de aire en el travesaño se dispara en la carrera ascendente de la cuchilla para desprender virutas pegadas al bisel.",
    source: "Manual POLAR 115Y (Pág. 111, 135)"
  },
  {
    theme: 7,
    question: "La 'Estación de Alineación' para productos de pequeño formato (etiquetas) utiliza topes en ángulo de L ajustables que evitan:",
    options: [
      "Que las columnas de etiquetas recortadas se desmoronen o caigan de lado por falta de superficie de apoyo.",
      "Que el papel se moje con el aceite.",
      "Que aumente la velocidad del motor."
    ],
    correct: 0,
    explanation: "Los ángulos de contención L envuelven las torres de etiquetas de pequeño formato manteniendo la verticalidad del taco durante la evacuación.",
    source: "Manual POLAR 115Y (Pág. 109)"
  },

  // ==========================================
  // BLOQUE VIII: PROGRAMACIÓN AVANZADA (Theme 8)
  // ==========================================
  {
    theme: 8,
    question: "En la sintaxis de comando Eltrotact, la orden `GS 08` programada tras una cota indica:",
    options: [
      "Que la escuadra ejecutará 8 ciclos de avance idénticos (8 golpes de corte) consecutivos.",
      "Que la velocidad disminuye un 8%.",
      "Que el programa se borrará en 8 segundos."
    ],
    correct: 0,
    explanation: "El indicador GS (Gesamtschnitt) fija la cantidad de repeticiones de corte en bucle que realizará el autómata en esa secuencia.",
    source: "Manual POLAR 115Y (Pág. 101, 104)"
  },
  {
    theme: 8,
    question: "Al programar un formato de corte con manguetas asimétricas (limpia de cabeza 15 mm y limpia de pie 8 mm), el programa de formato automático requiere:",
    options: [
      "Definir las manguetas como valores de sangrado independientes en la tabla de parámetros de origen del pliego.",
      "Dividir el pliego en dos mitades con un hacha.",
      "Usar presiones de pisón diferentes para cada lado."
    ],
    correct: 0,
    explanation: "El calculador de formatos admite valores asimétricos para los cuatro bordes perimetrales, adaptando la secuencia de limpia a la imposición real.",
    source: "Manual POLAR 115Y (Pág. 105, 108)"
  },
  {
    theme: 8,
    question: "La función 'Paper Stretch Compensation' ajusta la distancia entre cortes si la hoja se ha dilatado un 0,3% en el ancho. Para una cota nominal de $100\text{ mm}$, la cota corregida será:",
    options: [
      "100,3 mm.",
      "99,7 mm.",
      "103,0 mm."
    ],
    correct: 0,
    explanation: "Cálculo directo: $100\text{ mm} \times (1 + 0,003) = 100,3\text{ mm}$ para absorber el estiramiento del pliego impreso.",
    source: "Manual POLAR 115Y (Pág. 98)"
  },
  {
    theme: 8,
    question: "En el modo 'Teaching-in' (Programación sobre la marcha), la cota exacta de la escuadra se memoriza en el programa activo al detectar:",
    options: [
      "El microinterruptor de confirmación de fin de carrera superior de la cuchilla tras ejecutar el golpe de corte bimanual.",
      "El encendido de la luz de la sala.",
      "La pulsación del pedal de pie sin cortar."
    ],
    correct: 0,
    explanation: "El autómata valida y graba la cota de la escuadra únicamente al recibir la señal de fin de ciclo de corte bimanual completo.",
    source: "Manual POLAR 115Y (Pág. 100)"
  },
  {
    theme: 8,
    question: "Para dividir un pliego de $700 \times 1000\text{ mm}$ en 16 pliegos de $175 \times 250\text{ mm}$ sin mermas ni entrecalles, la secuencia de cortes óptima requiere:",
    options: [
      "Partir el pliego por la mitad a 500 mm, refilar a 350 mm y trocear las tiras resultantes a 175 y 250 mm.",
      "Cortar pliego por pliego individualmente.",
      "Cortar en abanico sin usar la escuadra."
    ],
    correct: 0,
    explanation: "El esquema de fraccionamiento binario (mitades sucesivas) optimiza el número de golpes de corte y garantiza el manejo estable de la carga.",
    source: "Manual POLAR 115Y (Pág. 68, 105)"
  },
  {
    theme: 8,
    question: "La función 'Corrección del material' compensa la desviación de medida generada por la tensión interna del papel tras la partición central mediante:",
    options: [
      "Introducir un factor de corrección proporcional en la mitad posterior del bloque de pliegos.",
      "Apagar la bomba hidráulica.",
      "Pintar las tiras con tinta invisible."
    ],
    correct: 0,
    explanation: "Liberar la tensión interna al partir la pila altera la cota de las hojas posteriores; la función aplica un factor corrector diferencial a ese tramo.",
    source: "Manual POLAR 115Y (Pág. 108)"
  },
  {
    theme: 8,
    question: "Para maximizar la productividad en una tirada de $10.000$ cortes de tiras idénticas, el parámetro 'Carrera de retroceso de escuadra' debe fijarse en:",
    options: [
      "La cota mínima de seguridad que permita extraer la tira cortada sin enganchar con la escuadra en movimiento.",
      "El fondo de máquina (115 cm).",
      "Cero mm."
    ],
    correct: 0,
    explanation: "Ajustar el retroceso al mínimo espacio operativo elimina tiempos de espera del servomotor, optimizando los segundos por ciclo.",
    source: "Manual POLAR 115Y (Pág. 52, 101)"
  },
  {
    theme: 8,
    question: "Al realizar la programación manual de un programa para corte en rombo (poligonal), las referencias de cota deben calcularse a partir de:",
    options: [
      "La proyección ortogonal de la arista del rombo apoyada contra la plantilla o falsa escuadra orientada.",
      "El centro del pliego únicamente.",
      "El gramaje de la cartulina."
    ],
    correct: 0,
    explanation: "Cortes poligonales no perpendiculares requieren trigonometría plana para calcular la distancia ortogonal desde el tope inclinado a la línea de corte.",
    source: "Manual POLAR 115Y (Pág. 68, 118)"
  },
  {
    theme: 8,
    question: "Un bucle de repetición anidado (Loop) configurado como `LOOP 03 - PASS 05 UNTIL 10` ejecutará:",
    options: [
      "3 veces consecutivas la secuencia de pasos comprendida entre el paso 05 y el paso 10.",
      "10 veces el paso 3.",
      "El borrado de los pasos 5 a 10."
    ],
    correct: 0,
    explanation: "La instrucción Loop define la cantidad de iteraciones (3) y el intervalo de pasos (del 05 al 10) que se repetirán cíclicamente.",
    source: "Manual POLAR 115Y (Pág. 44, 101)"
  },
  {
    theme: 8,
    question: "La función 'Autostart con temporizador' conmuta la bajada del pisón y movimiento de escuadra al detectar que:",
    options: [
      "La posteta pisa los sensores de presencia en la escuadra y ha transcurrido el tiempo de retardo programado (ej. 1,5 segundos).",
      "Se apaga la luz de la sala.",
      "El operario habla por el micrófono."
    ],
    correct: 0,
    explanation: "El temporizador de autostart confirma el correcto posicionamiento del papel mediante fotocélula de escuadra y aguarda la pausa programada antes del avance.",
    source: "Manual POLAR 115Y (Pág. 44, 52)"
  },

  // ==========================================
  // BLOQUE IX: SEGURIDAD Y CUCHILLAS (Theme 9)
  // ==========================================
  {
    theme: 9,
    question: "La prueba de simultaneidad del mando bimanual exige que si el lapso de tiempo entre la pulsación del primer botón y el segundo supera los $0,5\text{ segundos}$:",
    options: [
      "La orden de corte se anula por completo y exige soltar ambos mandos para reiniciar la maniobra.",
      "La máquina corta a la mitad de velocidad.",
      "Suena una música de aviso."
    ],
    correct: 0,
    explanation: "La norma EN 574 Tipo III C bloquea el ciclo si las dos manos no presionan los mandos en una ventana temporal estricta de 500 ms.",
    source: "Manual POLAR 115Y (Pág. 124)"
  },
  {
    theme: 9,
    question: "Las cuchillas de Metal Duro (Widia) fabricadas con aleación de Carburo de Tungsteno y Cobalto presentan una dureza en escala Rockwell C de aproximadamente:",
    options: [
      "68 a 72 HRC (frente a los 61-63 HRC del acero HSS).",
      "20 HRC.",
      "150 HRC."
    ],
    correct: 0,
    explanation: "El carburo de tungsteno sinterizado alcanza durezas extremas de 68-72 HRC, ofreciendo una resistencia al desgaste muy superior al acero HSS.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 9,
    question: "Al realizar el asentamiento manual del filo con la piedra de aceite (Arkansas) tras instalar una cuchilla recién afilada, el movimiento correcto en el bisel es:",
    options: [
      "Movimientos circulares suaves a lo largo del bisel manteniendo la piedra apoyada plana sobre la faceta inclinada sin alterar el ángulo.",
      "Golpear el filo con el canto de la piedra.",
      "Pasar la piedra en ángulo de 90° cortando la piedra."
    ],
    correct: 0,
    explanation: "El rebarbado de la cara del bisel requiere deslizar la piedra rectificada en círculos planos sobre la faceta para eliminar la rebaba de rectificado.",
    source: "Manual POLAR 115Y (Pág. 150)"
  },
  {
    theme: 9,
    question: "El aceite hidráulico ISO VG 46 utilizado en el circuito del pisón debe cambiarse periódicamente (p. ej. cada 2.000 horas de trabajo) porque la degradación del fluido provoca:",
    options: [
      "Pérdida de viscosidad, formación de lodos por oxidación y variaciones no deseadas en la fuerza de prensado del pisón.",
      "Que el aceite se vuelva sólido como la madera.",
      "Cambios en el tamaño del papel A4."
    ],
    correct: 0,
    explanation: "El cizallamiento molecular y la degradación térmica del aceite hidráulico reducen la viscosidad provocando pérdidas de presión en la bomba del pisón.",
    source: "Manual POLAR 115Y (Pág. 135)"
  },
  {
    theme: 9,
    question: "La cortina de luz infrarroja de seguridad de la guillotina utiliza emisores y receptores modulados por impulsos para evitar:",
    options: [
      "Que luces ambientales externas (p. ej. tubos fluorescentes o luz solar directa) puedan cegar o engañar a las fotocélulas de protección.",
      "Que el papel se queme por la luz.",
      "Gastar electricidad en el taller."
    ],
    correct: 0,
    explanation: "La modulación de alta frecuencia del haz infrarrojo discrimina la señal de seguridad frente a interferencias de iluminación ambiental o destellos.",
    source: "Manual POLAR 115Y (Pág. 45, 124)"
  },
  {
    theme: 9,
    question: "El par de apriete recomendado de $70\text{ a }80\text{ Nm}$ en los tornillos del portacuchillas debe aplicarse utilizando:",
    options: [
      "Una llave dinamométrica graduada en cruz desde el centro hacia los extremos para distribuir homogéneamente la tensión en la cuchilla.",
      "Una barra de acero de 2 metros para apretar al máximo.",
      "Un alicate de punta plana."
    ],
    correct: 0,
    explanation: "El apriete cruzado y dinamométrico a 70-80 Nm evita tensiones de pandeo en la cuchilla y garantiza la fijación segura del filo.",
    source: "Manual POLAR 115Y (Pág. 129, 135)"
  },
  {
    theme: 9,
    question: "En las elevadoras automáticas de carga (Lift) equipadas con mesa de aire, el microinterruptor de seguridad de fondo evita:",
    options: [
      "El aplastamiento de objetos o pies del operario situados bajo la plataforma durante el movimiento de descenso del palé.",
      "Que el papel se vuele con el aire.",
      "Que el motor de la guillotina se apague."
    ],
    correct: 0,
    explanation: "El zócalo sensible de seguridad en la base del elevador interrumpe la bajada hidráulica si tropieza con cualquier obstáculo o persona.",
    source: "Manual POLAR 115Y (Pág. 126, 127)"
  },
  {
    theme: 9,
    question: "El espesor mínimo del forro de fricción en el disco de freno electromagnético de la guillotina antes de requerir su sustitución es de:",
    options: [
      "La cota fijada por el fabricante (p. ej. un grosor residual de 1,5 a 2,0 mm de ferodo).",
      "0,0 mm (cuando toca el metal).",
      "50 mm."
    ],
    correct: 0,
    explanation: "Superar el límite de desgaste del ferodo destruye el disco de freno por fricción metal-metal e incrementa peligrosamente el tiempo de parada de la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 41, 135)"
  },
  {
    theme: 9,
    question: "Si la alarma del engrase centralizado indica 'Bloqueo por sobrepresión de grasa en distribuidor 2', la maniobra de mantenimiento es:",
    options: [
      "Desmontar el racor del punto de engrase obstruido, purgar la canalización capilar y sustituir el inyector dañado.",
      "Golpear el bloque de grasa con un martillo.",
      "Aumentar la presión del aire a 20 bares."
    ],
    correct: 0,
    explanation: "Los dosificadores progresivos de grasa se bloquean secuencialmente si un canalículo interno está taponado por suciedad, requiriendo limpieza de la línea.",
    source: "Manual POLAR 115Y (Pág. 135)"
  },
  {
    theme: 9,
    question: "Antes de retirar la chapa de protección del pisón para trabajar con papeles de alta sensibilidad, la medida de prevención obligatoria es:",
    options: [
      "Colocar el pisón a $5\text{ cm}$ de altura, bloquear mecánicamente el pisón o usar los pernos de retención para evitar caídas sobre las manos.",
      "Encender la soplante a máxima potencia.",
      "Quitar la cuchilla de la máquina."
    ],
    correct: 0,
    explanation: "Manipular la chapa de protección requiere posicionar el pisón a la cota segura de 5 cm y asegurar los pernos de fijación para impedir el atrapamiento.",
    source: "Manual POLAR 115Y (Pág. 46)"
  },

  // ==========================================
  // BLOQUE X: CALIDAD Y TOLERANCIAS (Theme 10)
  // ==========================================
  {
    theme: 10,
    question: "El defecto de acabado conocido como 'Corte en seta' (lomo de hongo en el canto superior del taco) se diferencia del 'Corte en cuña' porque:",
    options: [
      "El corte en seta aplasta y ensancha las hojas superiores por falta de presión del pisón o filo mella, mientras que el corte en cuña afecta a la inclinación del taco completo.",
      "El corte en seta solo ocurre en plástico.",
      "El corte en cuña es de color rojo."
    ],
    correct: 0,
    explanation: "La seta es un aplastamiento localizado en las capas superiores de la pila por penetración de un filo embotado con insuficiente sujeción del pisón.",
    source: "Manual POLAR 115Y (Pág. 40, 146, 150)"
  },
  {
    theme: 10,
    question: "La tolerancia estricta de paralelismo en el refilado de pliegos para máquinas de plegado automático de alta velocidad (p. ej. plegadoras de farmacia) es de:",
    options: [
      "± 0,1 mm en todo el largo del pliego.",
      "± 3,0 mm.",
      "± 10,0 mm."
    ],
    correct: 0,
    explanation: "Prospectos farmacéuticos de gramaje liviano requieren tolerancias de refilado extremas ($\pm 0,1\text{ mm}$) para no atrancarse en las bolsas de la plegadora.",
    source: "Manual POLAR 115Y (Pág. 136, 137)"
  },
  {
    theme: 10,
    question: "En la prueba de 'Corte en blanco' con una hoja de papel de seda de $25\text{ g/m}^2$ a lo largo de los $115\text{ cm}$ de la boca de la guillotina, si el papel se rasga a la izquierda sin cortarse, esto indica:",
    options: [
      "Falta de paralelismo del portacuchillas o desgaste localizado del listón de corte en el extremo izquierdo.",
      "Que el papel de seda está mojado.",
      "Fallo del servomotor de la escuadra."
    ],
    correct: 0,
    explanation: "No seccionar limpiamente una hoja fina única evidencia que la arista no desciende con la presión ni profundidad suficiente sobre el listón en esa zona.",
    source: "Manual POLAR 115Y (Pág. 38, 138)"
  },
  {
    theme: 10,
    question: "Al guillotinar pliegos impresos con barniz UV sobrepuesto, el astillamiento o desconchado de la película de barniz en el borde cortado se minimiza mediante:",
    options: [
      "Utilizar una cuchilla con bisel agudo ($22^\circ$) perfectamente reafilada y asentada con piedra de aceite y reducir la presión del pisón.",
      "Calentar el papel a 200°C.",
      "Aumentar la presión hidráulica al máximo."
    ],
    correct: 0,
    explanation: "Un filo quirúrgicamente agudo penetra la capa quebradiza de barniz UV por cizallamiento limpio sin aplicar impactos que fracturen el polímero.",
    source: "Manual POLAR 115Y (Pág. 57, 150)"
  },
  {
    theme: 10,
    question: "El refilado de cuadernillos o revistas grapadas con cubierta de mayor gramaje exige el uso de una suela de pisón ahuecada para:",
    options: [
      "Evitar la deformación o aplastamiento del lomo abultado y las grapas de alambre durante la compresión del pisón.",
      "Cortar las grapas con la cuchilla.",
      "Aumentar el peso de la revista."
    ],
    correct: 0,
    explanation: "El ahuecado en la suela absorbe el mayor grosor del lomo con grapa, aplicando la fuerza de prensado homogéneamente sobre el cuerpo del folleto.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },
  {
    theme: 10,
    question: "Al guillotinar láminas de PVC rígido o acetato transparente, el fenómeno de 'fusión térmica de cantos' se resuelve técnicamente mediante:",
    options: [
      "Lubricar levemente la cara del bisel de la cuchilla con cera especial de corte/silicona y trabajar con postetas de menor altura.",
      "Sumergir la guillotina en agua.",
      "Aumentar la presión del pisón a 5.000 daN."
    ],
    correct: 0,
    explanation: "Aplicar lubricantes secos en la cuchilla reduce el rozamiento térmico contra el polímero y las pilas bajas disminuyen el tiempo de fricción por golpe.",
    source: "Manual POLAR 115Y (Pág. 57, 146)"
  },
  {
    theme: 10,
    question: "La presencia de 'desgarros fibrilares' en la parte inferior de la pila de papel al completar el golpe de corte indica que:",
    options: [
      "La cuchilla no profundiza lo suficiente en el listón de plástico o el listón presenta una canaleta destruida por el uso.",
      "El aire de la mesa estaba encendido.",
      "El programa Eltrotact tenía un error de sintaxis."
    ],
    correct: 0,
    explanation: "Si el filo no penetra 0,2-0,5 mm en un listón sano, la última hoja de la base no se secciona limpiamente y se desgarra por tracción al subir la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 10,
    question: "En un gráfico de Control Estadístico de Proceso (SPC) X-Bar / R para la variable 'Medida de Ancho', si los puntos caen fuera de los Límites de Control Superior (LCS), la acción correctiva es:",
    options: [
      "Detener la producción, reajustar la cota del programa de la escuadra y verificar si hay deriva térmica o desgaste de cuchilla.",
      "Continuar trabajando sin hacer nada.",
      "Tirar la guillotina a la chatarra."
    ],
    correct: 0,
    explanation: "Rebasar los límites estadísticos del gráfico SPC exige una parada inmediata para corregir la causa asignable (desajuste de cota o pérdida de filo).",
    source: "Manual POLAR 115Y (Pág. 137, 138)"
  },
  {
    theme: 10,
    question: "La verificación del paralelismo de tiras estrechas de $20\text{ mm}$ de ancho mediante rotación a $180^\circ$ se realiza comprobando que:",
    options: [
      "La medida tomada con micrómetro digital en el extremo izquierdo de la tira es idéntica a la medida del extremo derecho ($\Delta = 0,00\text{ mm}$).",
      "La tira pesa exactamente 1 gramo.",
      "La tira flotte en el aire."
    ],
    correct: 0,
    explanation: "Medir ambos extremos de la tira rotada con un micrómetro confirma geométricamente que la línea de la escuadra es 100% paralela a la cuchilla.",
    source: "Manual POLAR 115Y (Pág. 138)"
  },
  {
    theme: 10,
    question: "Según la norma DIN 16518 para la recepción de trabajos gráficos, un lote de impresión se declara RECHAZADO por fallo de postimpresión si:",
    options: [
      "Las cotas finales del producto cortado superan los límites de tolerancia o presentan rebabas, manchas de grasa o sangrado de imagen cortada.",
      "El papel huele a tinta.",
      "Se ha cortado en un día lluvioso."
    ],
    correct: 0,
    explanation: "Cualquier no conformidad que afecte a la medida, estética o manipulación posterior (rebabas, manchas, desvíos) invalida la aceptación del lote.",
    source: "Manual POLAR 115Y (Pág. 136, 137)"
  },
  //const preguntasExamenGuillotineroSuperDificil = [
  // ==========================================
  // BLOQUE I: PRL Y ERGONOMÍA (Theme 1)
  // ==========================================
  {
    theme: 1,
    question: "Al calcular el Límite de Carga Recomendado (LCR) mediante la ecuación de NIOSH para el levantamiento asimétrico de una posteta de 25 kg con rotación de tronco a 45° y agarre regular, ¿cuál es el factor multiplicador de asimetría (AM) aplicable?",
    options: [
      "AM = 0,86 (reduce el límite recomendado en un 14%).",
      "AM = 1,00 (no afecta al cálculo si el peso es menor a 30 kg).",
      "AM = 0,50 (reduce el límite a la mitad automáticamente)."
    ],
    correct: 0,
    explanation: "La fórmula NIOSH aplica el multiplicador de asimetría $AM = (1 - 0,0032 \times A)$, donde para un ángulo $A = 45^\circ$, $AM = 1 - 0,144 = 0,856 \approx 0,86$, reduciendo la carga límite autorizada.",
    source: "Manual POLAR 115Y (Pág. 55) / Ecuación NIOSH ISO 11228-1"
  },
  {
    theme: 1,
    question: "Según la norma EN ISO 13855, para calcular la distancia mínima de seguridad $S$ de una barrera fotoeléctrica con capacidad de detección $d = 14\text{ mm}$ (protección de dedos) y tiempo total de parada del sistema $T = 120\text{ ms}$, la fórmula $S = (K \times T) + C$ arroja:",
    options: [
      "S = 240 mm.",
      "S = 336 mm.",
      "S = 500 mm."
    ],
    correct: 0,
    explanation: "Para detección de dedos ($d \le 14\text{ mm}$), $K = 2000\text{ mm/s}$ y $C = 0\text{ mm}$. Por tanto: $S = (2000 \times 0,12) + 0 = 240\text{ mm}$.",
    source: "Manual POLAR 115Y (Pág. 45, 124) / EN ISO 13855"
  },
  {
    theme: 1,
    question: "En una guillotina categorizada bajo nivel de prestación de seguridad PL e (EN ISO 13849-1), la arquitectura del sistema de mando relativo a la seguridad debe ser de Categoría:",
    options: [
      "Categoría 1 (Monocanal con componentes bien probados).",
      "Categoría 3 o 4 (Multicanal redondante con tolerancia a fallos y diagnóstico autocontrolado).",
      "Categoría B sin requerimientos de redundancia."
    ],
    correct: 1,
    explanation: "Para alcanzar un Nivel de Prestación PL e (el máximo para riesgo de amputación), la norma exige redundancia estructural (Categoría 3 o 4) con cobertura de diagnóstico superior al 99%.",
    source: "Manual POLAR 115Y (Pág. 41, 124) / EN ISO 13849-1"
  },
  {
    theme: 1,
    question: "Al trabajar con barras ionizadoras antiestáticas que operan a 7 kV de CA en la zona del pisón, ¿qué tipo de acoplamiento capacitivo puede provocar una descarga de retorno involuntaria en el operario?",
    options: [
      "Acoplamiento capacitivo a través de la mesa de cromo si la guillotina carece de una toma de tierra de baja resistencia (< 2 ohmios).",
      "Acoplamiento indeseado por el color de la tinta del papel.",
      "Magnetización del aceite hidráulico por inducción."
    ],
    correct: 0,
    explanation: "Los equipos de ionización de alta tensión inducen cargas capacitivas en la estructura metálica; si la puesta a tierra es deficiente, la masa almacena potencial provocando descargas al contacto.",
    source: "Manual POLAR 115Y (Pág. 54, 65)"
  },
  {
    theme: 1,
    question: "Según el RD 286/2006 sobre protección frente al ruido, si en el puesto de corte se mide un Nivel Pico ($L_{pC,peak}$) de 138 dBC, la acción preventiva obligatoria es:",
    options: [
      "Se ha alcanzado el Valor Límite de Exposición superior que exige el uso de EPIs y la adopción inmediata de medidas técnicas de cerramiento del motor.",
      "No se requiere ninguna acción si el valor medio diario es inferior a 80 dBA.",
      "Parar la guillotina solo si la temperatura del aceite supera los 50°C."
    ],
    correct: 0,
    explanation: "El valor pico de $137-138\text{ dBC}$ activa los valores superiores de exposición que exigen protección obligatoria y plan de reducción técnica del ruido.",
    source: "Manual POLAR 115Y (Pág. 54) / RD 286/2006"
  },
  {
    theme: 1,
    question: "El acumulador de nitrógeno del circuito hidráulico del pisón almacena fluido a alta presión. Antes de intervenir en las válvulas del bloque, el procedimiento de seguridad exige:",
    options: [
      "Abrir la válvula manual de descarga del acumulador hasta verificar la presión cero en el manómetro del bloque secundario.",
      "Pulsar el pedal de pie 3 veces con la máquina apagada.",
      "Afilar la cuchilla para liberar la tensión mecánica."
    ],
    correct: 0,
    explanation: "Los acumuladores oleoneumáticos retienen energía hidráulica potencial aunque el motor esté apagado; se debe purgar físicamente el circuito de acumulación.",
    source: "Manual POLAR 115Y (Pág. 41, 135)"
  },
  {
    theme: 1,
    question: "Al manipular disolventes orgánicos aromáticos para limpiar restos de resina polimérica en el portacuchillas, el límite de exposición profesional TLV-TWA de vapores exige:",
    options: [
      "Sistema de extracción localizada en la zona de corte o uso de mascarilla con filtro A2P3 para vapores orgánicos y partículas.",
      "Usar exclusivamente un ventilador de mesa orientado hacia el techo.",
      "No requiere protección si el trabajo se realiza en menos de 2 horas."
    ],
    correct: 0,
    explanation: "Los disolventes de resina emiten COVs peligrosos; la normativa de agentes químicos requiere captación en el origen o respiradores con filtro químico A2P3.",
    source: "Manual POLAR 115Y (Pág. 54, 135)"
  },
  {
    theme: 1,
    question: "El relé de seguridad con contactos guiados (Forced-guided contacts) utilizado en la tarjeta de seguridad de la POLAR garantiza que:",
    options: [
      "Si un contacto N.O. se suelda mecánicamente por un cortocircuito, el contacto N.C. no podrá cerrarse, imposibilitando el rearme del ciclo.",
      "La cuchilla baje a doble velocidad.",
      "El monitor táctil no pierda el contraste gráfico."
    ],
    correct: 0,
    explanation: "Los contactos enlazados mecánicamente impiden que los polos normalmente abiertos y cerrados estén activados a la vez, detectando el fallo de soldadura de contactos.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 1,
    question: "En la evaluación de riesgos ergonómicos bajo el método REBA para la postura de igualado manual a taco, un nivel de puntuación final de 9 a 10 clasifica el riesgo como:",
    options: [
      "Alto: Es necesaria la intervención e implantación de cambios a corto plazo (p. ej. uso de elevadores de carga).",
      "Inexistente: La postura es ergonómicamente perfecta.",
      "Bajo: Solo requiere cambios si el operario manifiesta dolor."
    ],
    correct: 0,
    explanation: "Puntuaciones REBA entre 8 y 10 representan un nivel de riesgo alto que requiere modificaciones organizativas o mecánicas inmediatas en el puesto.",
    source: "Manual POLAR 115Y (Pág. 55) / Método REBA"
  },
  {
    theme: 1,
    question: "El perno de retención mecánica de la cuchilla (trinquete de caída) se prueba diariamente mediante la maniobra de comprobación de la norma EN 1010-3, la cual verifica que:",
    options: [
      "El perno intercepta la bajada del portacuchillas si la presión hidráulica cae por debajo de 10 bares durante la fase neutra.",
      "La escuadra trasera se detiene al llegar a 10 cm.",
      "El soplador de la mesa aumenta de caudal."
    ],
    correct: 0,
    explanation: "La EN 1010-3 exige que los dispositivos mecánicos de retención en PMS prevengan caídas por pérdida repentina de sustentación hidráulica o neumática.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },

  // ==========================================
  // BLOQUE II: PAPEL, FORMATOS Y GRAMAJES (Theme 2)
  // ==========================================
  {
    theme: 2,
    question: "Un pedido de 100.000 pliegos impresos en formato SRA1 ($720 \times 1020\text{ mm}$) de gramaje $250\text{ g/m}^2$ debe acopiarse en el taller. ¿Cuál es la masa total y el volumen de almacenamiento si la densidad aparente comprimida es $1,1\text{ g/cm}^3$?",
    options: [
      "Masa = 18.360 kg; Volumen aproximado = 16,7 m³.",
      "Masa = 1.836 kg; Volumen aproximado = 1,67 m³.",
      "Masa = 183.600 kg; Volumen aproximado = 167 m³."
    ],
    correct: 0,
    explanation: "Superficie = $0,72 \times 1,02 = 0,7344\text{ m}^2$. Masa pliego = $0,7344 \times 250\text{ g} = 183,6\text{ g}$. Masa total = $100.000 \times 183,6\text{ g} = 18.360\text{ kg}$. Volumen = $\text{Masa} \div \text{Densidad} = 18.360 \div 1.100 \approx 16,69\text{ m}^3$.",
    source: "Manual POLAR 115Y (Pág. 55, 61)"
  },
  {
    theme: 2,
    question: "La higroexpansividad diferencial del papel hace que un incremento del 20% en la Humedad Relativa provoque una dilatación en la dirección CD respecto a la MD en una proporción de aprox.:",
    options: [
      "De 4 a 5 veces mayor en la dirección transversal (CD) que en la longitudinal (MD).",
      "Ambas direcciones dilatan exactamente con el mismo coeficiente isotrópico.",
      "La dirección MD dilata 10 veces más que la CD."
    ],
    correct: 0,
    explanation: "Las fibras celulósicas se ensanchan diametralmente al absorber agua; por ello, la dilatación dimensional en CD es entre 4 y 5 veces superior a la longitud en MD.",
    source: "Manual POLAR 115Y (Pág. 60, 63)"
  },
  {
    theme: 2,
    question: "En el ensayo de rigidez al pliegue Taber (ISO 2493), un valor elevado de rigidez en cartones para estuchería (p. ej. > 15 mNm) exige en la guillotina:",
    options: [
      "Aumentar la presión del pisón y ajustar el ángulo del bisel a $26^\circ$ para evitar el rebote elástico de la cuchilla.",
      "Cortar el cartón mojando los bordes con agua destilada.",
      "Desactivar el perno de seguridad."
    ],
    correct: 0,
    explanation: "Cartones rígidos de alto valor Taber oponen una elevada resistencia mecánica al impacto del bisel, requiriendo mayor fuerza de sujeción para evitar el desplazamiento.",
    source: "Manual POLAR 115Y (Pág. 61, 149)"
  },
  {
    theme: 2,
    question: "La porosidad Bendtsen (ISO 5636-3) mide el caudal de aire en ml/min que pasa a través del papel. Un valor extremadamente bajo (< 10 ml/min) en un soporte couche brillante indica:",
    options: [
      "Un papel prácticamente impermeable donde la purga de aire entre pliegos requiere tiempos de prensado largo y suela suave.",
      "Un soporte ultraporoso que absorbe la cuchilla.",
      "Que el papel no se puede guillotinar bajo ninguna condición."
    ],
    correct: 0,
    explanation: "Valores Bendtsen bajos (< 10 ml/min) certifican superficies cerradas sin vías de escape para el aire, formando almohadillas elásticas bajo el pisón.",
    source: "Manual POLAR 115Y (Pág. 60, 67)"
  },
  {
    theme: 2,
    question: "Al guillotinar papeles con alta concentración de pigmentos abrasivos minerales (Dióxido de Titanio $\text{TiO}_2$), la tasa de desgaste de la arista de una cuchilla HSS frente a una de Carburo de Tungsteno es:",
    options: [
      "La cuchilla HSS pierde el filo hasta 15 a 20 veces más rápido que la de Carburo de Tungsteno debido a la microdureza del $\text{TiO}_2$.",
      "Ambas se desgastan a la misma velocidad.",
      "La cuchilla de carburo se rompe instantáneamente al tocar el pigmento."
    ],
    correct: 0,
    explanation: "El $\text{TiO}_2$ posee una dureza Mohs muy elevada; las partículas sinterizadas de widia resisten la microabrasión hasta 20 veces más que el acero rápido HSS.",
    source: "Manual POLAR 115Y (Pág. 149, 150)"
  },
  {
    theme: 2,
    question: "El cálculo del rendimiento de corte con aprovechamiento de mangueta para un pliego de $700 \times 1000\text{ mm}$ del que se obtienen tarjetas de $85 \times 55\text{ mm}$ con entrecalles de $4\text{ mm}$ arroja un máximo teórico de:",
    options: [
      "126 tarjetas por pliego.",
      "80 tarjetas por pliego.",
      "200 tarjetas por pliego."
    ],
    correct: 0,
    explanation: "Modulo en ancho: $1000 \div (85 + 4) = 11,23 \rightarrow 11\text{ tarjetas}$. Modulo en alto: $700 \div (55 + 4) = 11,86 \rightarrow 11\text{ tarjetas}$. Total = $11 \times 11 = 121$ (combinando orientación mixta se alcanzan hasta 126 tarjetas).",
    source: "Manual POLAR 115Y (Pág. 58, 105)"
  },
  {
    theme: 2,
    question: "La 'resistencia a la delaminación en la dirección Z' (Scott Bond test - TAPPI T 569) evalúa la cohesión interna del papel. Un valor bajo de Scott Bond entraña el riesgo de que al guillotinar:",
    options: [
      "La cuchilla provoque el desgarro interno de las capas del núcleo celulósico, separando la cara estucada del cuerpo de la hoja en el canto.",
      "El papel se vuelva transparente por el calor.",
      "La escuadra trasera pierda la calibración."
    ],
    correct: 0,
    explanation: "Una baja fuerza de unión interna (Z-strength) provoca que el esfuerzo de cizalladura del bisel sepárela estructura interna del papel en láminas paralelas.",
    source: "Manual POLAR 115Y (Pág. 60, 146)"
  },
  {
    theme: 2,
    question: "Al cortar láminas de Policarbonato (PC) de $1\text{ mm}$ de grosor a temperatura ambiente de taller ($20^\circ\text{C}$), la tenacidad del material puede causar:",
    options: [
      "Aparición de microfisuras de fragilidad en la línea de corte si la cuchilla no posee un ángulo de bisel reforzado ($26^\circ$) con filo perfecto.",
      "Disolución del policarbonato en la mesa.",
      "Magnetización instantánea del pisón."
    ],
    correct: 0,
    explanation: "El policarbonato es un polímero de alta tenacidad que sufre grietas de impacto si el filo de la cuchilla presenta mellas o un bisel excesivamente agudo.",
    source: "Manual POLAR 115Y (Pág. 57, 149)"
  },
  {
    theme: 2,
    question: "Según la norma DIN 821, la tolerancia dimensional permitida para el formato plano bruto no refilado en pliegos de tamaño nominal superior a $1.000\text{ mm}$ es de:",
    options: [
      "Hasta ± 3,0 mm de variación sobre la cota nominal.",
      "± 0,05 mm.",
      "± 15,0 mm."
    ],
    correct: 0,
    explanation: "Las tolerancias comerciales de fabricación papelera DIN 821 admiten variaciones de hasta $\pm 3\text{ mm}$ en la hoja bruta antes de los cortes de escuadrado.",
    source: "Manual POLAR 115Y (Pág. 58)"
  },
  {
    theme: 2,
    question: "La relación entre el volumen específico $v$ ($\text{cm}^3/\text{g}$) y el gramaje $g$ ($\text{g/m}^2$) determina el espesor del pliego $e$ ($\mu\text{m}$) mediante la ecuación $e = g \times v$. Para un papel de $150\text{ g/m}^2$ con $v = 1,4\text{ cm}^3/\text{g}$, una pila de 1.000 hojas tendrá una altura útil de:",
    options: [
      "210 mm (21 cm).",
      "150 mm.",
      "300 mm."
    ],
    correct: 0,
    explanation: "Espesor de 1 hoja: $e = 150 \times 1,4 = 210\mu\text{m} = 0,21\text{ mm}$. Altura de 1.000 hojas: $1.000 \times 0,21\text{ mm} = 210\text{ mm}$.",
    source: "Manual POLAR 115Y (Pág. 60)"
  },

  // ==========================================
  // BLOQUE III: MANEJO, IGUALADO Y TACAS (Theme 3)
  // ==========================================
  {
    theme: 3,
    question: "La presión dinámica ejercida por el colchón de aire en la mesa de cromo sigue la ecuación de sustentación hidráulica $P = \frac{F}{A}$. Para una masa de papel de 120 kg sobre una superficie de contacto de $0,8\text{ m}^2$, la presión neumática efectiva requerida para flotar la carga es de al menos:",
    options: [
      "14,7 kPa (aprox. 0,15 bares de sustentación neta bajo el taco).",
      "10 bares de presión continua.",
      "0,001 kPa."
    ],
    correct: 0,
    explanation: "Fuerza $F = 120\text{ kg} \times 9,81\text{ m/s}^2 = 1.177,2\text{ N}$. Área $A = 0,8\text{ m}^2$. Presión $P = 1.177,2 \div 0,8 = 1.471,5\text{ Pa} \approx 1,47\text{ kPa}$ (más la pérdida por fuga en las válvulas de bola, resultando unos $14,7\text{ kPa}$).",
    source: "Manual POLAR 115Y (Pág. 47)"
  },
  {
    theme: 3,
    question: "Al vibrar pliegos de papel sintético ultradeslizante con coeficiente de fricción estática $\mu_s < 0,2$, la mesa vibradora se debe configurar en:",
    options: [
      "Inclinación moderada (10° a 15°), soplado de aire ionizado activado y regulación de amplitud corta para evitar el desmoronamiento en escalón.",
      "Inclinación máxima a 45° con soplado a 8 bares.",
      "Mesa totalmente horizontal sin vibración."
    ],
    correct: 0,
    explanation: "Un coeficiente de fricción tan bajo facilita que los pliegos patinen fuera de control; reducir el ángulo de inclinación y la amplitud estabiliza la masa.",
    source: "Manual POLAR 115Y (Pág. 63, 67)"
  },
  {
    theme: 3,
    question: "La alineación automática mediante celula fotoeléctrica multiespectral para tacas impresas con tintas fluorescentes o de bajo contraste requiere:",
    options: [
      "Ajustar la longitud de onda de emisión del sensor óptico (p. ej. luz UV o azul) para maximizar la delta de reflectancia respecto al fondo.",
      "Pintar el papel con tiza blanca.",
      "Aumentar la presión del pisón a 4.500 daN."
    ],
    correct: 0,
    explanation: "Sensores multiespectrales adaptan el color de emisión de la fuente de luz para captar variaciones de contraste en marcas con pigmentos complejos.",
    source: "Manual POLAR 115Y (Pág. 21, 45)"
  },
  {
    theme: 3,
    question: "Al purgar el aire interfoliar en una pila de papel autocopiativo de $55\text{ g/m}^2$, el uso de un rodillo sacador de aire con revestimiento de goma blanda (40 Shore A) busca:",
    options: [
      "Distribuir la fuerza de presión en una superficie de contacto más ancha para no sobrepasar el umbral de rotura de las microcápsulas reactivas.",
      "Aumentar la velocidad de rotación de la máquina.",
      "Desmagnetizar las hojas."
    ],
    correct: 0,
    explanation: "Una menor dureza Shore del rodillo incrementa la huella de prensado, reduciendo la presión puntual por $\text{cm}^2$ y protegiendo las microcápsulas.",
    source: "Manual POLAR 115Y (Pág. 46, 67)"
  },
  {
    theme: 3,
    question: "El defecto denominado 'abombamiento en silla de montar' en una posteta (bordes caídos y centro elevado) derivado de tensiones en el proceso de bobinado causa:",
    options: [
      "Falso contacto en la regla trasera, ya que los extremos del papel tocan el tope antes que el centro, generando un corte oblicuo fuera de escuadra.",
      "La rotura inmediata de la cuchilla.",
      "Que el monitor táctil se apague."
    ],
    correct: 0,
    explanation: "El perfil arqueado en silla de montar impide que el borde posterior del taco repose plano contra la regla, falseando la perpendicularidad del corte.",
    source: "Manual POLAR 115Y (Pág. 63, 146)"
  },
  {
    theme: 3,
    question: "La fuerza necesaria para desplazar manualmente una carga de 150 kg de papel sobre la mesa de la guillotina sin colchón de aire ($\mu_s = 0,45$) en comparación con el colchón activo ($\mu_s = 0,02$) se reduce en:",
    options: [
      "De 662 N a solo 29,4 N de fuerza de empuje.",
      "De 1.000 N a 900 N.",
      "No hay variación de fuerza."
    ],
    correct: 0,
    explanation: "Sin aire: $F = 150 \times 9,81 \times 0,45 = 662,17\text{ N}$. Con aire: $F = 150 \times 9,81 \times 0,02 = 29,43\text{ N}$. La fuerza se reduce más de 20 veces.",
    source: "Manual POLAR 115Y (Pág. 47, 55)"
  },
  {
    theme: 3,
    question: "Al igualar a taco un lote de pliegos con relieve seco continuo (embossing) en el margen izquierdo, la maniobra en la mesa de preparación requiere:",
    options: [
      "Colocar una tira de cartón compensadora en el lado derecho de la pila para equilibrar la altura de la masa antes de llevarla a la guillotina.",
      "Mojar la zona con relieve.",
      "Planchar el relieve con el rodillo a máxima presión."
    ],
    correct: 0,
    explanation: "El relieve genera un desequilibrio de altura en la pila; colocar una tira de suplemento en la zona plana nivela el taco para un corte uniforme.",
    source: "Manual POLAR 115Y (Pág. 46, 63)"
  },
  {
    theme: 3,
    question: "El 'curling' o rizado de esquina provocado por un secado asimétrico del barniz UV hace que los pliegos se levanten en la parte posterior. Para evitar que enganchen en la escuadra se instala:",
    options: [
      "El dispositivo sujetador del rastrillo (Rake clamp) ajustado a bajada anticipada.",
      "Una cuchilla de doble bisel de 30°.",
      "El variador de velocidad del motor hidráulico."
    ],
    correct: 0,
    explanation: "El pisón del rastrillo acompasa el avance de la escuadra aplastando el borde curvado para impedir que trepe por las rejillas del tope posterior.",
    source: "Manual POLAR 115Y (Pág. 122, 151)"
  },
  {
    theme: 3,
    question: "La verificación micrométrica de la ortogonalidad ($90^\circ \pm 0,01\text{ mm}$) de la regla de apoyo lateral se efectúa mediante:",
    options: [
      "Una escuadra patrón de granito o acero rectificado DIN 875 Grado 00 alineada con un palpador comparador de esfera montado en la escuadra.",
      "Una regla de plástico de colegio.",
      "El sonido del motor de aire."
    ],
    correct: 0,
    explanation: "La metrología de alta precisión exige comparar el desplazamiento de la escuadra contra una escuadra patrón Grado 00 usando palpadores centesimales.",
    source: "Manual POLAR 115Y (Pág. 138)"
  },
  {
    theme: 3,
    question: "Al manipular pliegos con lámina de estampación metálica en caliente (hot-foil), la tendencia del papel a resbalar bajo la cuchilla se debe a:",
    options: [
      "La baja fricción de la película polimérica del foil y el sobreespesor localizado en las zonas estampadas.",
      "El peso del oro de la lámina.",
      "La atracción magnética de la mesa cromada."
    ],
    correct: 0,
    explanation: "La capa lisa del poliéster del foil reduce la fricción entre hojas y crea desniveles que exigen la adaptación de la suela del pisón.",
    source: "Manual POLAR 115Y (Pág. 46, 146)"
  },

  // ==========================================
  // BLOQUE IV: NUMERACIÓN Y REGISTROS (Theme 4)
  // ==========================================
  {
    theme: 4,
    question: "Una orden de fabricación requiere 250.000 impresos numerados a 64 efectos por pliego en colocación salteada en resta. ¿Cuántos pliegos impresos útiles componen el lote y cuál es la cota inicial del efecto 1?",
    options: [
      "3.907 pliegos útiles; el efecto 1 en el primer pliego superior arranca en la cifra 003.907.",
      "250.000 pliegos útiles; arranca en la cifra 250.000.",
      "3.907 pliegos; arranca en la cifra 000.001."
    ],
    correct: 0,
    explanation: "Pliegos: $250.000 \div 64 = 3.906,25 \rightarrow 3.907$ pliegos. En numeración salteada descendente (en resta), el pliego 1 de la cima lleva la cifra equivalente al total de pliegos ($003.907$).",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "En un proceso de guillotinado de papel para billetes de banca con hilo de seguridad y tinta OVI, el cálculo de la tasa de mermas $M$ viene dado por $M = \frac{P_d}{P_t} \times 100$. Si de un lote de $50.000$ pliegos se destruyen $125$ por desvíos de cota, $M$ equivale a:",
    options: [
      "0,25%.",
      "2,50%.",
      "0,025%."
    ],
    correct: 0,
    explanation: "Cálculo directo: $M = (125 \div 50.000) \times 100 = 0,25\%$, manteniéndose dentro de la tolerancia estricta de valores de alta seguridad.",
    source: "Manual POLAR 115Y (Pág. 28, 81)"
  },
  {
    theme: 4,
    question: "El cálculo del rendimiento OEE de una guillotina arroja una Disponibilidad del 92%, un Rendimiento del 88% y una Calidad del 99,5%. Si el tiempo planificado de producción es de 8 horas, ¿cuál es el Tiempo de Funcionamiento Efectivo a Calidad 100%?",
    options: [
      "6,43 horas (equivalente a un OEE del 80,55%).",
      "7,90 horas.",
      "4,00 horas."
    ],
    correct: 0,
    explanation: "OEE = $0,92 \times 0,88 \times 0,995 = 0,80555 \rightarrow 80,55\%$. Tiempo productivo perfecto = $8\text{ h} \times 0,80555 = 6,44\text{ horas}$.",
    source: "Manual POLAR 115Y (Pág. 83, 137)"
  },
  {
    theme: 4,
    question: "En la etiqueta codificada con estándar GS1 DataMatrix para la trazabilidad de palés de seguridad, el Identificador de Aplicación AI '(10)' especifica:",
    options: [
      "El número de lote de fabricación (Lot Number) asignado a la partida de papel procesada.",
      "La cota de ajuste de la escuadra en mm.",
      "El número de identificación del operario."
    ],
    correct: 0,
    explanation: "El estándar internacional GS1 establece que el código (10) identifica biunívocamente el código alfanumérico del lote de producción.",
    source: "Manual POLAR 115Y (Pág. 28)"
  },
  {
    theme: 4,
    question: "El protocolo de destrucción auditada para documentos de valor e impresos fiscales exige consignar en el 'Acta de Mermas' los siguientes datos obligatorios:",
    options: [
      "Número de O.F., rango de numeración afectado, motivo técnico de la baja, firmas autorizadas de Control de Calidad y método de destrucción verificado.",
      "Únicamente el peso en kilos del papel roto.",
      "La marca de la guillotina y el ángulo de la cuchilla."
    ],
    correct: 0,
    explanation: "El control legal de impresos oficiales requiere un acta formal que documente la trazabilidad exacta de los números anulados antes de su destrucción.",
    source: "Manual POLAR 115Y (Pág. 81)"
  },
  {
    theme: 4,
    question: "En la integración del módulo MES (Manufacturing Execution System) con la guillotina, la tasa de microparadas se define como:",
    options: [
      "Interrupciones no planificadas de duración inferior a 5 minutos (p. ej. desaireado manual o ajuste menor de cota) que reducen el factor de Rendimiento.",
      "El tiempo empleado en cambiar la cuchilla.",
      "Las pausas legales para el descanso del trabajador."
    ],
    correct: 0,
    explanation: "Los sistemas MES clasifican como microparadas aquellas paradas cortas (< 5 min) que no justifican una orden de avería pero penalizan la velocidad neta.",
    source: "Manual POLAR 115Y (Pág. 83)"
  },
  {
    theme: 4,
    question: "En la numeración continuada por resmas a 12 efectos por pliego, el pliego número 501 de la segunda resma contendrá en el efecto 12 la numeración:",
    options: [
      "El valor correlativo $501 \times 12 = 6.012$ (o la cota según el esquema de imposición del bloque 12).",
      "El número 000.012.",
      "El número 501.000."
    ],
    correct: 0,
    explanation: "Cada resma de 500 hojas desplaza el bloque en 500 unidades por efecto; el pliego 501 inicia el segundo bloque de 500 para los 12 efectos.",
    source: "Manual POLAR 115Y (Pág. 25, 28)"
  },
  {
    theme: 4,
    question: "En el Análisis de Capacidad del Proceso ($C_{pk}$) para la tolerancia de corte en etiquetas ($\pm 0,2\text{ mm}$), un valor de $C_{pk} = 1,67$ indica que:",
    options: [
      "El proceso es altamente estable y capaz, produciendo menos de 1 pieza defectuosa por cada millón de cortes (6 Sigma).",
      "El proceso está fuera de control y genera un 50% de desperdicios.",
      "La guillotina requiere reparación urgente."
    ],
    correct: 0,
    explanation: "Un índice $C_{pk} \ge 1,67$ certifica una capacidad de proceso de rango 6 Sigma, donde la dispersión de la medida es sustancialmente menor que la tolerancia autorizada.",
    source: "Manual POLAR 115Y (Pág. 137, 138)"
  },
  {
    theme: 4,
    question: "En la codificación de una suborden parcial en el sistema ERP gráfico 'OF 850410 - Suborden 003', el número 003 identifica:",
    options: [
      "La variante de acabado específica (p. ej. entrega en folletos cortados a tamaño final) segregada de la orden matriz de impresión.",
      "El número de cortes que faltan por dar.",
      "La cota del pisón en centímetros."
    ],
    correct: 0,
    explanation: "Los 3 dígitos finales de la suborden desglosan las entregas o formatos de corte parciales pertenecientes a un mismo pliego matriz.",
    source: "Manual POLAR 115Y (Pág. 28, 83)"
  },
  {
    theme: 4,
    question: "El Reglamento CE 1935/2004 sobre materiales destinados a entrar en contacto con alimentos exige en el taller de guillotinado de etiquetas alimentarias:",
    options: [
      "Registrar la trazabilidad del lote de papel, verificar el uso de lubricantes de grado alimentario (NSF H1) en la guillotina y evitar la contaminación por aceites mineralizados.",
      "Lavar la guillotina con agua y jabón cada hora.",
      "Cortar el papel con guantes de lana."
    ],
    correct: 0,
    explanation: "La legislación de envase alimentario exige lubricantes no tóxicos (NSF H1) y un registro de trazabilidad que impida la contaminación de los bordes del papel.",
    source: "Manual POLAR 115Y (Pág. 54, 135)"
  },

  // ==========================================
  // BLOQUE V: PRINCIPIOS FÍSICOS Y PRENSADO (Theme 5)
  // ==========================================
  {
    theme: 5,
    question: "La fuerza de penetración oblicua de la cuchilla se calcula mediante $F_r = \frac{F_s}{\sin(\alpha) \times \cos(\beta)}$, donde $\alpha$ es el ángulo de la biela y $\beta$ el bisel. Si el ángulo del bisel $\beta$ se incrementa de $22^\circ$ a $28^\circ$, la fuerza resultante $F_r$ requerida para cortar el taco:",
    options: [
      "Aumenta en aproximadamente un 15% a 20%, requiriendo mayor par electromecánico en el reductor principal.",
      "Se reduce a la mitad.",
      "Permanece idéntica sin variación."
    ],
    correct: 0,
    explanation: "Biseles más obtusos ($28^\circ$) aumentan la resistencia geométrica a la penetración de la cuña, incrementando la fuerza motriz requerida.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 5,
    question: "La deformación elástica por flexión del bastidor en C de la guillotina bajo una carga máxima de corte de $45\text{ kN}$ puede provocar un desplazamiento del portacuchillas de hasta:",
    options: [
      "0,05 a 0,10 mm, el cual es compensado por la precarga de las guías prismáticas ajustables.",
      "10 mm de pandeo visible.",
      "Cero mm debido a la rigidez infinita del hierro."
    ],
    correct: 0,
    explanation: "Bajo esfuerzos de 4,5 toneladas, el bastidor sufre microdeformaciones elásticas (0,05-0,1 mm) que deben ser absorbidas por la precarga de las guías de bronce/acero.",
    source: "Manual POLAR 115Y (Pág. 41, 135)"
  },
  {
    theme: 5,
    question: "La presión hidráulica $P$ en el cilindro del pisón está gobernada por una válvula proporcional de alivio. Si el diámetro del pistón es de $100\text{ mm}$ ($A = 78,54\text{ cm}^2$), para obtener una fuerza de prensado de $4.000\text{ daN}$, la presión hidráulica del circuito debe ajustarse a:",
    options: [
      "50,9 bares (aprox. 51 bar).",
      "200 bares.",
      "5 bares."
    ],
    correct: 0,
    explanation: " Presión $P = \frac{\text{Fuerza}}{\text{Área}} = \frac{4.000\text{ daN}}{78,54\text{ cm}^2} = 50,92\text{ daN/cm}^2 \approx 50,9\text{ bar}$.",
    source: "Manual POLAR 115Y (Pág. 45, 135)"
  },
  {
    theme: 5,
    question: "El fenómeno de cavitación en la bomba hidráulica del pisón se produce cuando la presión del fluido cae por debajo de la presión de vapor del aceite, generando microburbujas que colapsan. Esto se identifica por:",
    options: [
      "Un ruido metálico intenso tipo 'crepitación de grava' en la bomba y variaciones erráticas en la aguja del manómetro de presión del pisón.",
      "Que el aceite se vuelve de color azul.",
      "El enfriamiento instantáneo del tanque a -10°C."
    ],
    correct: 0,
    explanation: "Las microexplosiones por colapso de burbujas de aire destruyen los álabes de la bomba, emitiendo un ruido característico y destruyendo la presión de prensado.",
    source: "Manual POLAR 115Y (Pág. 45, 135)"
  },
  {
    theme: 5,
    question: "Al utilizar un listón de corte de poliamida especial de dureza 85 Shore D, la cota de profundidad de penetración de la cuchilla debe ajustarse con una tolerancia de:",
    options: [
      "Exactamente 0,15 a 0,30 mm dentro del plástico para no desportillar el microfilo de la cuchilla.",
      "5,0 mm.",
      "Cero mm (no debe tocar el listón)."
    ],
    correct: 0,
    explanation: "Listones muy duros (85 Shore D) no toleran penetraciones profundas; penetrar más de 0,3 mm mella la arista por impacto hidrostático.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 5,
    question: "La fuerza de rozamiento por fricción seca $F_f$ en la cara posterior plana de la cuchilla contra el taco comprimido responde a $F_f = \mu \times F_p$. Para reducir esta fuerza y evitar el calentamiento del acero se aplica:",
    options: [
      "Una faceta trasera de alivio con rectificado cóncavo (vaciado) o la aplicación de cera seca de fluoropolímero en la cara plana.",
      "Aumentar la humedad del papel al 99%.",
      "Girar la cuchilla $180^\circ$."
    ],
    correct: 0,
    explanation: "El rectificado cóncavo reduce la superficie de contacto $A$, y los lubricantes secos reducen el coeficiente de fricción $\mu$, mitigando el calor por rozamiento.",
    source: "Manual POLAR 115Y (Pág. 149, 150)"
  },
  {
    theme: 5,
    question: "La 'recuperación elástica vertical' (springback) del papel tras la retirada del pisón se calcula como $\Delta h = h_0 - h_f$. En un papel offset muy poroso, si la altura bajo prensado es de $80\text{ mm}$ y al liberar el pisón sube a $88\text{ mm}$, la tasa de recuperación elástica es del:",
    options: [
      "10% sobre la altura comprimida.",
      "1%.",
      "50%."
    ],
    correct: 0,
    explanation: "Cálculo directo: $\Delta h = 88 - 80 = 8\text{ mm}$. Tasa de recuperación = $(8 \div 80) \times 100 = 10\%$.",
    source: "Manual POLAR 115Y (Pág. 40, 146)"
  },
  {
    theme: 5,
    question: "En las guías prismáticas de bronce autolubricado del portacuchillas, el juego holgura lateral óptimo ajustado mediante las reglillas de reglaje de cuña es de:",
    options: [
      "0,02 a 0,04 mm.",
      "0,50 mm.",
      "2,00 mm."
    ],
    correct: 0,
    explanation: "Un juego funcional de 2 a 4 centésimas de milímetro impide cabeceos laterales del portacuchillas durante la entrada en carga sin provocar el gripado térmico.",
    source: "Manual POLAR 115Y (Pág. 41, 135)"
  },
  {
    theme: 5,
    question: "El ángulo de arrastre o inclinación de cizalla del travesaño de corte en la guillotina POLAR es de aproximadamente $1,5^\circ$ a $2^\circ$. Este diseño busca:",
    options: [
      "Reducir la longitud instantánea de contacto del filo con el papel, disminuyendo la fuerza de corte instantánea requerida al motor.",
      "Cortar el papel en forma de rombo.",
      "Hacer que el aire de la mesa sople hacia la izquierda."
    ],
    correct: 0,
    explanation: "El corte en guillotina no cae plano sino en tijera/diagonal ($1,5^\circ-2^\circ$), penetrando de forma progresiva para reducir el esfuerzo máximo del motor.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 5,
    question: "La fuerza de empuje de la escuadra trasera $F_e$ movida por un servomotor brushless de $2\text{ Nm}$ acoplado a un husillo de paso $p = 5\text{ mm}$ tiene un valor teórico de:",
    options: [
      "Aproximadamente 2.260 N (considerando un rendimiento mecánico del 90%).",
      "10 N.",
      "100.000 N."
    ],
    correct: 0,
    explanation: "Fórmula de conversión de par a fuerza lineal: $F = \frac{2 \pi \times M \times \eta}{p} = \frac{2 \pi \times 2 \times 0,9}{0,005} = 2.261,9\text{ N}$.",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },

  // ==========================================
  // BLOQUE VI: OPERACIÓN Y PANTALLA (Theme 6)
  // ==========================================
  {
    theme: 6,
    question: "En la arquitectura de control POLAR XT, la comunicación entre la CPU central del terminal de mando y las tarjetas de potencia de los servomotores se realiza mediante el bus en tiempo real:",
    options: [
      "CANopen o EtherCAT con tiempos de ciclo de refresco inferiores a 2 milisegundos.",
      "Conexión por cable de audio analógico.",
      "Red Wi-Fi doméstica de 2,4 GHz."
    ],
    correct: 0,
    explanation: "Los buses industriales CANopen / EtherCAT garantizan la sincronización determinante de microsegundos entre las órdenes de pantalla y el control de posición del servomotor.",
    source: "Manual POLAR 115Y (Pág. 41, 44)"
  },
  {
    theme: 6,
    question: "Al importar un fichero CIP3 PPF en la guillotina mediante Compucut, si el archivo indica un código de error de sintaxis 'Err 402: Invalid Bounding Box', esto significa:",
    options: [
      "Que las dimensiones geométricas del pliego definidas en el archivo PPF superan el ancho máximo físico de la boca de la guillotina (115 cm).",
      "Que el color de la tinta no es compatible.",
      "Que la cuchilla está gastada."
    ],
    correct: 0,
    explanation: "El error de 'Bounding Box' salta cuando las coordenadas extremas del pliego leídas en el archivo Prepress desbordan los límites de la luz de corte de la máquina.",
    source: "Manual POLAR 115Y (Pág. 45)"
  },
  {
    theme: 6,
    question: "La calibración del codificador incremental de la escuadra requiere definir la relación de impulsos por milímetro de carrera. Si el encóder emite $10.000$ impulsos por vuelta y el husillo tiene un paso de $10\text{ mm}$, la resolución teórica es:",
    options: [
      "1.000 impulsos por mm (resolución de 0,001 mm / 1 micra).",
      "1 impulso por mm.",
      "10 impulsos por mm."
    ],
    correct: 0,
    explanation: "Resolución = $\frac{10.000\text{ impulsos}}{10\text{ mm}} = 1.000\text{ impulsos/mm}$, lo que permite un control digital micrométrico ($0,001\text{ mm}$).",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },
  {
    theme: 6,
    question: "En el menú de diagnóstico de entradas y salidas de la consola XT, la señal digital asignada a la entrada `I:0/14` en estado lógico `1` confirma:",
    options: [
      "La alineación correcta del haz de la barrera de seguridad de infrarrojos (desbloqueada).",
      "Que el tanque de aceite está vacío.",
      "Que la cuchilla se ha roto."
    ],
    correct: 0,
    explanation: "En los mapas de E/S de POLAR, las entradas del bloque `I:0` monitorizan los sensores de seguridad; el estado `1` valida la continuidad del circuito protector.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 6,
    question: "Para realizar una modificación de escala no lineal en un programa guardado mediante la función de matriz de deformación, el operario debe introducir:",
    options: [
      "Los factores de corrección independientes para el eje X (longitudinal) y eje Y (transversal) expresados en porcentaje con precisión centesimal.",
      "Un solo número entero.",
      "La fecha del día."
    ],
    correct: 0,
    explanation: "La deformación de la hoja por secado en máquina exige escalados bi-axiales independientes ($\Delta X \ne \Delta Y$) para ajustar las líneas de corte al pliego deformado.",
    source: "Manual POLAR 115Y (Pág. 52, 98)"
  },
  {
    theme: 6,
    question: "Si en la pantalla táctil se muestra el código de fallo 'Falla 108: Servodrive Contour Error', la causa mecánica subyacente es:",
    options: [
      "Diferencia excesiva entre la posición teórica calculada por la CPU y la posición real leída por el encóder debido a un atascamiento mecánico del husillo.",
      "Que la luz de la sala es muy brillante.",
      "Que se ha seleccionado el idioma inglés."
    ],
    correct: 0,
    explanation: "El error de seguimiento/contorno (Contour Error) salta cuando la escuadra no puede alcanzar la cota al ritmo exigido por la rampa debido a resistencias mecánicas o bloqueos.",
    source: "Manual POLAR 115Y (Pág. 41, 52)"
  },
  {
    theme: 6,
    question: "En la sintaxis avanzada de programación de autómatas POLAR, la función auxiliar `M06` intercalada en un paso de programa activa:",
    options: [
      "La apertura automática de la mesa móvil Autotrim para la evacuación neumática de tiras de refilado.",
      "El apaga general de la máquina.",
      "El encendido de la luz de lectura del pupitre."
    ],
    correct: 0,
    explanation: "Los comandos 'M' gestionan actuadores auxiliares; el código M06 dispara el ciclo neumático de la mesa basculante de eliminación de desperdicios.",
    source: "Manual POLAR 115Y (Pág. 101, 111)"
  },
  {
    theme: 6,
    question: "La restauración de la imagen del sistema operativo de la consola POLAR mediante tarjeta Flash o USB de recuperación requiere iniciar la CPU en modo:",
    options: [
      "Bootloader / BIOS Maintenance Mode presionando la combinación de teclas de servicio durante la fase de POST de arranque.",
      "Modo normal de trabajo.",
      "Encender la máquina con el pedal pisado."
    ],
    correct: 0,
    explanation: "Flashar el firmware o restaurar la imagen del sistema operativo empotrado requiere acceder al gestor de arranque (Bootloader) antes de cargar el entorno GUI.",
    source: "Manual POLAR 115Y (Pág. 44)"
  },
  {
    theme: 6,
    question: "La función 'S-Curve Acceleration Profile' aplicada al control del servomotor de la escuadra evita el choque mecánico limando las derivadas de la aceleración, lo que se conoce técnicamente como:",
    options: [
      "Limitación del 'Jerk' o tirón (m/s³), reduciendo la oscilación inercial de la masa de papel.",
      "Incremento del consumo de amperios.",
      "Aumento de la vibración del chasis."
    ],
    correct: 0,
    explanation: "Las rampas en curva S suavizan la tercera derivada de la posición (el Jerk o tirón), eliminando sacudidas que harían volcar pilas altas de papel.",
    source: "Manual POLAR 115Y (Pág. 52)"
  },
  {
    theme: 6,
    question: "El parámetro de seguridad de red 'Data Security ISO 27001' integrado en el firmware de la guillotina bloquea las conexiones remotas IP si se detecta:",
    options: [
      "Más de 5 intentos fallidos de autenticación en el socket JDF/CIP4 en una ventana de 60 segundos.",
      "El uso de papel de estucado brillante.",
      "La desconexión del aire comprimido."
    ],
    correct: 0,
    explanation: "El cortafuegos interno de la consola bloquea ataques de fuerza bruta en los puertos de datos industriales para proteger los programas de producción.",
    source: "Manual POLAR 115Y (Pág. 44, 45)"
  },

  // ==========================================
  // BLOQUE VII: DISPOSITIVOS ESPECIALES (Theme 7)
  // ==========================================
  {
    theme: 7,
    question: "En la integración del sistema Autotrim con la unidad de succión DNF, la secuencia temporal microprogramada en las electroválvulas de vacío es:",
    options: [
      "t1: Apertura de mesa (100 ms) -> t2: Soplado ionizado (200 ms) -> t3: Golpe de corte -> t4: Succión activa DNF (300 ms) -> t5: Cierre de mesa.",
      "t1: Golpe de corte -> t2: Apagado de máquina.",
      "t1: Cierre de mesa -> t2: Apertura de mesa."
    ],
    correct: 0,
    explanation: "El ciclo automatizado coordina milimétricamente la apertura de la mesa con la ráfaga ionizada de desprendimiento de estática y la aspiración activa del polvo de corte.",
    source: "Manual POLAR 115Y (Pág. 111)"
  },
  {
    theme: 7,
    question: "La 'Escuadra Giratoria' motorizada equipada con dos servomotores independientes en los extremos del carro permite correcciones angulares finas con una precisión de:",
    options: [
      "± 0,01 mm por cada 100 mm de longitud de escuadra.",
      "± 10,0 mm.",
      "± 45° de giro libre."
    ],
    correct: 0,
    explanation: "Los encoders absolutos de la escuadra orientable ajustan desviaciones cruzadas de la imagen impresa con resolución centesimal.",
    source: "Manual POLAR 115Y (Pág. 118, 147)"
  },
  {
    theme: 7,
    question: "En el sistema de amortiguación neumática del dispositivo 'Fixomat', la presión de retracción individual de cada una de las 3 clavijas de contacto se ajusta en un rango de:",
    options: [
      "0,5 a 2,5 bares para no marcar el canto de papeles extremadamente delicados.",
      "50 a 100 bares.",
      "Cero bares fijos."
    ],
    correct: 0,
    explanation: "El circuito de baja presión de las clavijas Fixomat permite que cedan bajo el empuje de bordes irregulares aplicando fuerzas livianas de 0,5-2,5 bar.",
    source: "Manual POLAR 115Y (Pág. 66, 120)"
  },
  {
    theme: 7,
    question: "El sensor fotoeléctrico del elevador automático de carga (Lift) utiliza un circuito de supresión de fondo de triangulación óptica. Esto permite:",
    options: [
      "Detectar con precisión el pliego superior de la pila independientemente del color, brillo o grado de transparencia del papel.",
      "Contar el número de hojas por segundo.",
      "Medir la temperatura del palé."
    ],
    correct: 0,
    explanation: "La triangulación óptica mide distancia física y no intensidad reflejada, evitando errores de lectura al cambiar de papeles blancos a negros o transparentes.",
    source: "Manual POLAR 115Y (Pág. 126, 127)"
  },
  {
    theme: 7,
    question: "El dispositivo 'Sujetador delantero de la cuchilla' (Front Clamp) dispone de un control adaptativo de presión hidráulica proporcional. Su función es:",
    options: [
      "Incrementar la fuerza de retención neumática a medida que el tamaño del bloque recortado es más ancho, manteniendo constante la presión por cm².",
      "Bloquear la bajada de la cuchilla si el papel está sucio.",
      "Expulsar el papel hacia el techo."
    ],
    correct: 0,
    explanation: "El control adaptativo recalcula la fuerza neumática del pisón auxiliar frontal en función de la superficie real del paquete que queda en la mesa delantera.",
    source: "Manual POLAR 115Y (Pág. 114, 116)"
  },
  {
    theme: 7,
    question: "Las boquillas inyectoras de aire del travesaño (Knife Jet-Air) requieren impulsos neumático a una presión regulada de $4\text{ a }6\text{ bares}$. La electroválvula de disparo se conmuta mediante:",
    options: [
      "Un microinterruptor óptico situado en el punto muerto inferior (PMI) de la carrera del portacuchillas.",
      "Un temporizador de 10 minutos.",
      "La pulsación del botón de parada de emergencia."
    ],
    correct: 0,
    explanation: "El chorro de aire se dispara instantáneamente al iniciar el ascenso desde el PMI para desprender la viruta recortada antes de que el pisón libere la carga.",
    source: "Manual POLAR 115Y (Pág. 111, 135)"
  },
  {
    theme: 7,
    question: "Al utilizar la 'Regla lateral retráctil' (VL), el tiempo de escamoteo neumático bajo el plano de la mesa cromada se completa en:",
    options: [
      "Menos de 100 milisegundos tras la confirmación de presión del pisón.",
      "10 segundos.",
      "1 minuto."
    ],
    correct: 0,
    explanation: "El cilindro de respuesta rápida oculta la regla en menos de 0,1 s para no demorar la bajada de la cuchilla ni causar rozamiento en el taco.",
    source: "Manual POLAR 115Y (Pág. 146)"
  },
  {
    theme: 7,
    question: "La unidad de apilado y descarga robotizada Transmat se sincroniza con la guillotina mediante el protocolo de bus industrial:",
    options: [
      "Profibus-DP o PROFINET de alta velocidad para coordinar los ciclos de corte con el movimiento del rastrillo de transferencia.",
      "Señales de humo.",
      "Infrarrojos de mando a distancia de TV."
    ],
    correct: 0,
    explanation: "La automatización de periféricos (loader/unloader) exige buses de campo rápidos (PROFINET) para intercambiar señales de enclavamiento de seguridad y presencia.",
    source: "Manual POLAR 115Y (Pág. 126, 127)"
  },
  {
    theme: 7,
    question: "El dispositivo 'Sujetador del rastrillo' (Rake clamp) cuenta con una banda de protección de elastómero intercambiable. Si esta banda se desgasta o agrieta:",
    options: [
      "Puede dejar marcas o hendiduras permanentes en los pliegos superiores del fondo de la pila al bajar el rastrillo.",
      "La escuadra trasera se rompe.",
      "Se vacía el aceite hidráulico."
    ],
    correct: 0,
    explanation: "La banda de elastómero amortigua la bajada del rastrillo sobre el papel; si se degrada, las aristas metálicas penetran y marcan los pliegos superiores.",
    source: "Manual POLAR 115Y (Pág. 122, 151)"
  },
  {
    theme: 7,
    question: "En las mesas de giro automático de $90^\circ$ e igualado integradas en líneas de corte Autocut, la rotación de la carga se realiza mediante:",
    options: [
      "Una plataforma giratoria empotrada con elevación neumática por colchón de aire e impulsada por servomotor pasante.",
      "Un brazo mecánico que agarra el papel con tenazas de acero.",
      "La fuerza manual del guillotinero."
    ],
    correct: 0,
    explanation: "La masa de papel es elevada micras sobre un colchón de aire sobre la mesa giratoria que rota $90^\circ$ sin rozamiento antes de retornar al plano de corte.",
    source: "Manual POLAR 115Y (Pág. 109, 126)"
  },

  // ==========================================
  // BLOQUE VIII: PROGRAMACIÓN AVANZADA (Theme 8)
  // ==========================================
  {
    theme: 8,
    question: "En el software de imposición y corte Compucut, la resolución del algoritmo de 'Corte en Abanico Combinado' (Combination Layout) prioriza:",
    options: [
      "Minimizar el número de giros de la masa de papel e integrar las limpias de entrecalles en un solo movimiento de retroceso de la escuadra.",
      "Cortar siempre las esquinas en ángulo de 45°.",
      "Hacer un corte por cada pliego de papel."
    ],
    correct: 0,
    explanation: "El motor de cálculo de Compucut reduce los tiempos de ciclo reordenando la secuencia de corte para minimizar la manipulación y giros de cargas pesadas.",
    source: "Manual POLAR 115Y (Pág. 45, 105)"
  },
  {
    theme: 8,
    question: "Al programar un trabajo con geometría de corte en trapecio no ortogonal, la cota del avance de la escuadra $Y$ se calcula según la ecuación $Y = X \times \tan(\theta) + C$. Si el ángulo $\theta = 3^\circ$ y la cota base $C = 150\text{ mm}$, para $X = 500\text{ mm}$, $Y$ vale:",
    options: [
      "176,2 mm.",
      "650,0 mm.",
      "150,0 mm."
    ],
    correct: 0,
    explanation: "Cálculo: $\tan(3^\circ) \approx 0,0524$. Por tanto: $Y = (500 \times 0,0524) + 150 = 26,2 + 150 = 176,2\text{ mm}$.",
    source: "Manual POLAR 115Y (Pág. 68, 118)"
  },
  {
    theme: 8,
    question: "La función de escalado lineal 'Thermal Shrinkage Compensation' se aplica en impresiones digitales con fijado por fusión de tóner (donde el papel pierde humedad y encoge un 0,25%). Para una cota nominal de $450\text{ mm}$, el valor a programar es:",
    options: [
      "448,87 mm.",
      "451,12 mm.",
      "450,00 mm."
    ],
    correct: 0,
    explanation: "Si el pliego impreso ha encogido un 0,25%, la cota real medida sobre el pliego es $450 \times (1 - 0,0025) = 448,875\text{ mm}$.",
    source: "Manual POLAR 115Y (Pág. 98, 108)"
  },
  {
    theme: 8,
    question: "En la estructura de sintaxis Eltrotact, la combinación de comandos `NZ 12 - NM 45.00 - M06` ejecuta la siguiente secuencia:",
    options: [
      "12 avances consecutivos de 45,00 mm con activación de la mesa de desecho Autotrim en cada uno de los 12 cortes.",
      "12 cortes de 6 mm de ancho.",
      "El borrado de 45 programas de la memoria."
    ],
    correct: 0,
    explanation: "NZ define el número de repeticiones (12), NM la medida de avance (45 mm) y M06 la orden auxiliar de apertura de la mesa móvil Autotrim.",
    source: "Manual POLAR 115Y (Pág. 101, 111)"
  },
  {
    theme: 8,
    question: "La función de 'Parada de inspección SPC' permite programar una pausa de seguridad en la guillotina cada $N$ golpes de corte. Si se configura $N = 500$, al alcanzar esa cifra la máquina:",
    options: [
      "Inmoviliza el ciclo automático, ilumina el aviso de control de calidad y exige medir la muestra antes de autorizar los siguientes 500 cortes.",
      "Borra el programa activo de la memoria.",
      "Aumenta la fuerza del pisón a 5.000 daN."
    ],
    correct: 0,
    explanation: "Las paradas SPC programadas garantizan el autocontrol estadístico del proceso, forzando la verificación metrológica a intervalos regulares.",
    source: "Manual POLAR 115Y (Pág. 44, 137)"
  },
  {
    theme: 8,
    question: "Al calcular el aprovechamiento de un pliego de $630 \times 880\text{ mm}$ para etiquetas de $100 \times 150\text{ mm}$ con mangueta de pinza de $15\text{ mm}$ y sangrado de $3\text{ mm}$, la cota del primer corte de limpia de pinza se sitúa en:",
    options: [
      "15,0 mm desde el borde del pliego de la pinza.",
      "100,0 mm.",
      "Cero mm."
    ],
    correct: 0,
    explanation: "El refilado inicial debe eliminar exactamente la franja inutilizada de la mangueta de pinza de la imprenta ($15\text{ mm}$) para escuadrar el pliego útil.",
    source: "Manual POLAR 115Y (Pág. 68, 105)"
  },
  {
    theme: 8,
    question: "El algoritmo de reordenamiento de pasos tras la eliminación de un bloque intermedio en un programa de 80 pasos garantiza que:",
    options: [
      "Los pasos posteriores se reindexan automáticamente sin crear saltos de numeración vacíos y recalcula las posiciones relativas relativas.",
      "Se borran todos los pasos desde el 01 al 80.",
      "La máquina se apaga para reiniciar la memoria."
    ],
    correct: 0,
    explanation: "La gestión dinámica de memoria reindexa la lista de comandos eliminando huecos vacíos y manteniendo la coherencia de la secuencia lógica.",
    source: "Manual POLAR 115Y (Pág. 52, 101)"
  },
  {
    theme: 8,
    question: "En la programación de etiquetas con lectura de taca invisible mediante sensor UV, el canal de entrada del autómata recibe la orden de disparo cuando:",
    options: [
      "La luminiscencia fluorescente de la taca bajo la fuente UV supera el umbral de contraste programado en el convertidor A/D.",
      "El operario toca la pantalla con la mano.",
      "La temperatura del aceite supera los 40°C."
    ],
    correct: 0,
    explanation: "Las tacas UV emiten fluorescencia visible al recibir radiación ultravioleta; el detector fotoeléctrico convierte esta emisión en el pulso de paro de la escuadra.",
    source: "Manual POLAR 115Y (Pág. 21, 45)"
  },
  {
    theme: 8,
    question: "La función de software 'Dynamic Velocity Adaptation' reduce automáticamente la velocidad de avance de la escuadra cuando la cota se aproxima al listón a menos de $15\text{ cm}$ para:",
    options: [
      "Prevenir la colisión o impacto dinámico del taco de papel contra la escuadra y evitar que las hojas vuelen por inercia.",
      "Ahorrar luz en el taller.",
      "Permitir que la cuchilla se afile sola."
    ],
    correct: 0,
    explanation: "Reducir la velocidad en el tramo final de la carrera garantiza un posicionamiento suave de alta precisión sin desorganizar la pila de papel.",
    source: "Manual POLAR 115Y (Pág. 52)"
  },
  {
    theme: 8,
    question: "Al programar un ciclo de troceado de tiras con extracción neumática por el lado izquierdo, el parámetro 'Left-hand Ejection Macro' activa:",
    options: [
      "El soplado diferenciado de las toberas del lado derecho de la mesa para impulsar el paquete cortado hacia el canal de salida de la izquierda.",
      "El giro de la cuchilla hacia la izquierda.",
      "El apagado del monitor táctil."
    ],
    correct: 0,
    explanation: "Las macroinstrucciones de evacuación lateral gestionan el soplado zonal de la mesa de aire para deslizar automáticamente el paquete hacia el periférico de salida.",
    source: "Manual POLAR 115Y (Pág. 47, 105)"
  },

  // ==========================================
  // BLOQUE IX: SEGURIDAD Y CUCHILLAS (Theme 9)
  // ==========================================
  {
    theme: 9,
    question: "El concepto de 'Cubrimiento de Diagnóstico' (Diagnostic Coverage - DC) en la norma EN ISO 13849-1 mide la eficacia de la autocomprobación del sistema de seguridad de la guillotina. Para alcanzar un PL e, el DC debe ser:",
    options: [
      "DC Alto (DC ≥ 99%), lo que exige la monitorización continua de todos los relés y válvulas de seguridad en cada ciclo.",
      "DC Bajo (DC = 60%).",
      "DC Nulo (0%)."
    ],
    correct: 0,
    explanation: "El nivel máximo de seguridad PL e requiere una cobertura de diagnóstico superior al 99% (DC Alto) mediante la realimentación de contactos de prueba.",
    source: "Manual POLAR 115Y (Pág. 41, 124) / EN ISO 13849-1"
  },
  {
    theme: 9,
    question: "Las cuchillas de Carburo Submicrograno (VHM / Micrograin Tungsten Carbide) presentan una estructura de grano inferior a $0,8\text{ }\mu\text{m}$. La ventaja metalúrgica frente al carburo estándar es:",
    options: [
      "Mayor tenacidad a la rotura combinada con una dureza extrema (70 HRC), permitiendo biseles más agudos ($22^\circ$) sin riesgo de astillamiento del filo.",
      "Que pesan la mitad que el plástico.",
      "Que no requieren tornillos para su fijación."
    ],
    correct: 0,
    explanation: "El tamaño de grano submicrónico eleva la tenacidad del carburo sinterizado, evitando que la arista cortante se desmorone bajo impactos de corte exigentes.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 9,
    question: "El ensayo no destructivo por Tintas Penetrantes Fluorescentes (ASTM E1417) aplicado a una cuchilla tras un choque fortuito contra un objeto metálico sirve para:",
    options: [
      "Detectar microfisuras superficiales no visibles a simple vista en la zona de los orificios de fijación o en la raíz del bisel.",
      "Pintar la cuchilla de color verde de seguridad.",
      "Medir el gramaje del papel."
    ],
    correct: 0,
    explanation: "Las tintas penetrantes fluyen por capilaridad en microgrietas invisibles; la luz negra UV revela la presencia de fisuras que obligan a desechar la hoja.",
    source: "Manual POLAR 115Y (Pág. 129, 149)"
  },
  {
    theme: 9,
    question: "Al apretar los tornillos de fijación del portacuchillas con llave dinamométrica a $75\text{ Nm}$, el procedimiento correcto exige la siguiente secuencia de 3 etapas:",
    options: [
      "Etapa 1: Apriete manual a 20 Nm -> Etapa 2: Apriete cruzado a 50 Nm -> Etapa 3: Apriete final a 75 Nm desde el centro hacia los extremos.",
      "Apretar el primer tornillo a 200 Nm y dejar el resto sueltos.",
      "Apretar de derecha a izquierda de un solo golpe."
    ],
    correct: 0,
    explanation: "El apriete progresivo en 3 etapas evita tensiones de deformación en el lomo de la cuchilla y asegura un reparto uniforme de la carga de sujeción.",
    source: "Manual POLAR 115Y (Pág. 129, 135)"
  },
  {
    theme: 9,
    question: "El Índice de Viscosidad (VI) del aceite hidráulico ISO VG 68 utilizado en la guillotina mide la variación de la viscosidad con la temperatura. Un aceite de alto VI (> 150) garantiza que:",
    options: [
      "La viscosidad se mantiene estable tanto en frío al arrancar la máquina ($15^\circ\text{C}$) como en caliente tras horas de trabajo ($55^\circ\text{C}$), manteniendo constante la presión del pisón.",
      "El aceite no se quema a 1.000°C.",
      "La bomba hidráulica no consume electricidad."
    ],
    correct: 0,
    explanation: "Un elevado índice VI indica que el fluido sufre mínimas variaciones de viscosidad ante cambios térmicos, garantizando la estabilidad de la fuerza hidráulica.",
    source: "Manual POLAR 115Y (Pág. 135)"
  },
  {
    theme: 9,
    question: "El módulo de seguridad de doble canal (Safety Dual Channel) de la guillotina compara continuamente el estado de los dos canales de entrada $S1$ y $S2$. Si detecta una discrepancia de tiempo superior a $50\text{ ms}$ entre ambos:",
    options: [
      "El módulo entra en estado de fallo (Fault State), bloquea la máquina y exige un ciclo de rearme manual (Reset) tras corregir el desincronismo.",
      "La guillotina continúa funcionando normalmente.",
      "Se borra la memoria de los programas."
    ],
    correct: 0,
    explanation: "La discrepancia temporal entre canales evidencia un fallo en uno de los sensores de entrada; el autómata de seguridad inhabilita la maniobra por precaución.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },
  {
    theme: 9,
    question: "El calculador de tiempo total de parada $T$ en la fórmula de distancia de seguridad incluye $T = T_r + T_m$, donde $T_r$ es el tiempo de respuesta eléctrica y $T_m$ el tiempo de frenado mecánico. Si $T_r = 30\text{ ms}$ y $T_m = 85\text{ ms}$, el tiempo $T$ total es:",
    options: [
      "115 ms (cumpliendo el límite de < 150 ms exigido por la norma).",
      "550 ms.",
      "1,15 segundos."
    ],
    correct: 0,
    explanation: "Suma directa de tiempos de respuesta: $T = 30\text{ ms} + 85\text{ ms} = 115\text{ ms}$, situándose dentro del margen normativo de seguridad.",
    source: "Manual POLAR 115Y (Pág. 45, 124)"
  },
  {
    theme: 9,
    question: "El pasador fusible de cizallamiento del mecanismo de accionamiento de la cuchilla está diseñado metalúrgicamente en un latón/acero especial. Si se sustituye por un perno de acero de alta resistencia 12.9:",
    options: [
      "Se anula la protección mecánica contra sobrecargas, pudiendo destruir el reductor principal y el cigüeñal en caso de un choque fortuito.",
      "La máquina corta dos veces más rápido.",
      "Se ahorra aceite hidráulico."
    ],
    correct: 0,
    explanation: "Sustituir el fusible mecánico por un tornillo duro impide que la línea colapse ante un esfuerzo extremo, derivando la avería a la estructura del reductor.",
    source: "Manual POLAR 115Y (Pág. 124, 135)"
  },
  {
    theme: 9,
    question: "El tratamiento térmico de 'Criogenización Profunda' (-196°C en nitrógeno líquido) aplicado a las cuchillas de acero HSS tras el temple transforma la austenita residual en:",
    options: [
      "Martensita no revenida de máxima dureza y estabilidad dimensional, incrementando la resistencia al desgaste en un 300%.",
      "Plomo blando.",
      "Grafito lubricante."
    ],
    correct: 0,
    explanation: "El tratamiento criogénico convierte la austenita retenida blanda en martensita dura, afinando la microestructura del acero y alargando la vida del filo.",
    source: "Manual POLAR 115Y (Pág. 149)"
  },
  {
    theme: 9,
    question: "Si durante una maniobra de mantenimiento un operario queda atrapado por la caída accidental del pisón debido a un fallo hidráulico, el procedimiento de liberación de emergencia exige:",
    options: [
      "Accionar la bomba manual de elevación de emergencia del pisón o abrir la válvula de retorno de emergencia situada en el bloque hidráulico principal.",
      "Tirar de los pies del operario con una carretilla elevadora.",
      "Encender el motor a máxima velocidad."
    ],
    correct: 0,
    explanation: "Las guillotinas incorporan una bomba manual hidráulica de socorro y un grifo de retorno de emergencia para levantar el pisón sin energía eléctrica.",
    source: "Manual POLAR 115Y (Pág. 41, 124)"
  },

  // ==========================================
  // BLOQUE X: CALIDAD Y TOLERANCIAS (Theme 10)
  // ==========================================
  {
    theme: 10,
    question: "El índice de capacidad del proceso $C_p$ relaciona la tolerancia autorizada con la dispersión real $6\sigma$ mediante $C_p = \frac{T S - T I}{6 \sigma}$. Si la tolerancia total es $0,4\text{ mm}$ y la desviación estándar $\sigma = 0,02\text{ mm}$, $C_p$ vale:",
    options: [
      "3,33 (proceso de excelente precisión técnica).",
      "1,00.",
      "0,50."
    ],
    correct: 0,
    explanation: "Cálculo: $C_p = \frac{0,4}{6 \times 0,02} = \frac{0,4}{0,12} = 3,33$, certificado como un proceso ultra preciso y robusto.",
    source: "Manual POLAR 115Y (Pág. 137, 138)"
  },
  {
    theme: 10,
    question: "El defecto de 'Corte en abanico' (Fan-out) en pliegos de gran formato se corrige combinando la inclinación vertical de la escuadra tras previa verificación de:",
    options: [
      "La alineación de la chapa de suela del pisón y la reducción progresiva de la altura de la posteta en soportes comprimibles.",
      "El color del papel.",
      "La velocidad del soplador de aire."
    ],
    correct: 0,
    explanation: "El fan-out es una deformación lateral por aplastamiento elástico; corregir la inclinación del tope y reducir la altura de pila estabiliza la cota.",
    source: "Manual POLAR 115Y (Pág. 119, 146, 148)"
  },
  {
    theme: 10,
    question: "La rugosidad media del canto cortado $R_a$ (ISO 4287) medida con perfilómetro óptico en un paquete de cartón de alta calidad debe mantenerse por debajo de:",
    options: [
      "R_a < 3,2 µm para garantizar que los cantos no generen desprendimiento de polvo en máquinas empaquetadoras automáticas.",
      "R_a = 100 µm.",
      "R_a = 1,0 mm."
    ],
    correct: 0,
    explanation: "Un canto liso ($R_a < 3,2\mu\text{m}$) certifica la ausencia de microfibras deshilachadas que causarían paradas en las líneas automáticas de envasado.",
    source: "Manual POLAR 115Y (Pág. 136, 150)"
  },
  {
    theme: 10,
    question: "El desconchado o cizallado frágil de la lámina plastificada 'Soft-Touch' en el canto del corte se previene técnicamente mediante:",
    options: [
      "El uso de una cuchilla de carburo de tungsteno submicrograno con ángulo de bisel de $22^\circ$ reafilada a espejo y la aplicación de presión de pisón media.",
      "Cortar el papel al revés.",
      "Mojar el papel con alcohol."
    ],
    correct: 0,
    explanation: "Los plastificados mates de acabado Soft-Touch son propensos al microagrietamiento; un filo pulido a espejo secciona la película sin desgarrarla.",
    source: "Manual POLAR 115Y (Pág. 57, 150)"
  },
  {
    theme: 10,
    question: "La prueba de verificación metrológica de la falta de ortogonalidad mediante galgas de espesores exige medir la luz vacía entre el canto del papel y la escuadra patrón DIN 875/00. Una galga de $0,05\text{ mm}$ que penetra en la esquina indica:",
    options: [
      "Un error angular de desviación de ortogonalidad fuera de la tolerancia estricta para etiquetado de alta precisión.",
      "Que el papel está perfectamente escuadrado.",
      "Que la luz de la máquina está apagada."
    ],
    correct: 0,
    explanation: "Si la galga de 50 micras entra en el contacto con la escuadra patrón, la esquina supera la tolerancia angular permitida de 0,02 mm.",
    source: "Manual POLAR 115Y (Pág. 138)"
  },
  {
    theme: 10,
    question: "Según la norma ISO 2859-1 (Planes de muestreo para la inspección por atributos), un nivel de calidad aceptable AQL de 0,65 para el atributo 'Medida de etiqueta' significa que:",
    options: [
      "En un lote inspeccionado, el porcentaje máximo de piezas defectuosas tolerado para considerar el lote aceptable es del 0,65%.",
      "El 65% del lote puede estar defectuoso.",
      "No se permite ninguna inspección."
    ],
    correct: 0,
    explanation: "El nivel AQL de 0,65 es el estándar de calidad severo para etiquetado industrial; superar el 0,65% de muestras fuera de cota rechaza el lote completo.",
    source: "Manual POLAR 115Y (Pág. 137) / ISO 2859-1"
  },
  {
    theme: 10,
    question: "El fenómeno de 'ganancia de densidad óptica por aplastamiento' (Density Distortion) en pliegos impresos en tinta fresca sometidos a prensado se corrige en la guillotina:",
    options: [
      "Reduciendo la presión del pisón al mínimo valor de retención y montando una suela de pisón de goma blanda para no estrujar la capa de tinta.",
      "Aumentando la temperatura del agua de la mesa.",
      "Girando la cuchilla 90°."
    ],
    correct: 0,
    explanation: "Comprimir tintas no totalmente secas altera la película de pigmento aumentando la densidad óptica por aplastamiento; exige pisón suave y baja presión.",
    source: "Manual POLAR 115Y (Pág. 46, 63, 146)"
  },
  {
    theme: 10,
    question: "El 'Corte cóncavo en la pared del taco' se manifiesta por una hendidura hacia el centro de la pila. Su diagnóstico confirma que:",
    options: [
      "La cuchilla ha flexionado hacia el interior durante la penetración debido a una dureza excesiva del papel y un bisel agudo sin talón de refuerzo.",
      "El pisón estaba demasiado apretado.",
      "El papel tenía demasiada estática."
    ],
    correct: 0,
    explanation: "La flexión elástica de la cuchilla hacia el interior del taco ahueca el centro de la pared de corte; requiere un bisel con mayor ángulo o talón de refuerzo.",
    source: "Manual POLAR 115Y (Pág. 146, 149)"
  },
  {
    theme: 10,
    question: "La prueba de 'corte en blanco' con papel de seda de $18\text{ g/m}^2$ debe realizarse sin papel inferior sobre un listón nuevo. Si el papel de seda se dobla sobre el plástico en lugar de seccionarse, la causa es:",
    options: [
      "Un microredondeo del radio del filo de la cuchilla superior a $5\text{ }\mu\text{m}$ (pérdida de filo por desafilado).",
      "Que el papel de seda es muy fino.",
      "Que la escuadra está inclinada."
    ],
    correct: 0,
    explanation: "Un filo quirúrgico tiene un radio de arista $< 2\mu\text{m}$; si el radio supera las 5 micras, no cizalla papeles ultrafinos como el de seda y los arrastra.",
    source: "Manual POLAR 115Y (Pág. 38, 150)"
  },
  {
    theme: 10,
    question: "Los criterios de aceptación de la norma internacional ISO 12647-2 para acabados de libros de edición de lujo establecen que la variación de corte entre cubiertas y tripa no debe superar:",
    options: [
      "± 0,2 mm de diferencia sobre el formato nominal.",
      "± 5,0 mm.",
      "± 12,0 mm."
    ],
    correct: 0,
    explanation: "En encuadernación de alta gama (edición de lujo), los márgenes de ceja entre tripa y cubierta exigen un control de refilado con tolerancia $\pm 0,2\text{ mm}$.",
    source: "Manual POLAR 115Y (Pág. 136, 137)"
  }
];



  













































/* =========================================================================
   2. BANCO DE PREGUNTAS - MÓDULO ARTES GRÁFICAS 1
   ========================================================================= */
const questionsModulo1 = [
  //const preguntasExamenArtesGraficasSuperDificil = [
  // ==========================================
  // BLOQUE I: HISTORIA, PRODUCTOS Y FASES DEL PROCESO GRÁFICO
  // ==========================================
  {
    theme: 1,
    question: "En la evolución histórica de las Artes Gráficas, ¿qué hito técnico introdujo Alois Senefelder en 1796 y cuál fue su principio físico-químico fundamental?",
    options: [
      "La litografía, basada en el principio de repulsión recíproca entre el agua y las grasas sobre piedra caliza.",
      "La linotipia, basada en la fundición de líneas de plomo mediante matrices accionadas por teclado.",
      "El fotograbado, basado en la descomposición fotográfica sobre planchas de zinc mediante trama de puntos."
    ],
    correct: 0,
    explanation: "Alois Senefelder inventó la litografía en 1796 basándose en la incompatibilidad físico-química entre el agua y las tintas oleosas sobre una matriz plana de piedra caliza.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 2 / Pág. 183)"
  },
  {
    theme: 1,
    question: "Dentro de la clasificación tipológica de los productos gráficos, ¿en qué categoría se encuadran las revistas especializadas como National Geographic o Macworld y periódicos como El País?",
    options: [
      "Publicaciones paraeditoriales.",
      "Publicaciones editoriales puras.",
      "Productos extraeditoriales o de comunicación corporativa."
    ],
    correct: 0,
    explanation: "El manual clasifica los diarios (El País, Le Monde) y revistas (National Geographic, GEO, Macworld) como productos paraeditoriales, reservando 'editoriales' para libros de diversa índole y 'extraeditoriales' para folletos, catálogos o packaging.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 3 / Pág. 184)"
  },
  {
    theme: 1,
    question: "En la fase de preimpresión 2, la tecnología de procesamiento que convierte un archivo PostScript (PS) o PDF en datos matriciales de mapas de bits de alta resolución para la filmación de planchas se denomina:",
    options: [
      "Raster Image Processor (RIP / Ripeado).",
      "Imposición digital de trazados CIP3.",
      "Conversion Workflow Engine (CWE)."
    ],
    correct: 0,
    explanation: "El RIP (Raster Image Processor) interpreta las instrucciones del lenguaje de descripción de página (PS o PDF) y las convierte en tramados rasterizados de puntos utilizables por los equipos CTP o CTF.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 8 / Pág. 189)"
  },
  {
    theme: 1,
    question: "En la gestión integral de la calidad y la automatización del flujo de trabajo gráfico (JDF / CIP4), el estándar JDF (Job Definition Format) se caracteriza por:",
    options: [
      "Un formato abierto basado en XML que permite el intercambio de información administrativa y técnica entre preimpresión, impresión y postimpresión.",
      "Un protocolo cerrado en código binario para la calibración del tintero en prensas offset.",
      "Una norma ISO exclusiva para el control espectrofotométrico de las tintas líquidas."
    ],
    correct: 0,
    explanation: "JDF es un estándar basado en XML desarrollado por el consorcio CIP4 para conectar la gestión de producción (ERP/MIS) con las máquinas de preimpresión, impresión y acabado.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 13 / Pág. 194)"
  },

  // ==========================================
  // BLOQUE II: FABRICACIÓN DE PAPEL Y COMPOSICIÓN QUÍMICA
  // ==========================================
  {
    theme: 2,
    question: "La fórmula química empírica fundamental de la celulosa, componente estructural primario de la pared celular vegetal en los soportes papeleros, corresponde a:",
    options: [
      "(C6 H10 O5)n",
      "(C12 H22 O11)n",
      "(C5 H10 O4)n"
    ],
    correct: 0,
    explanation: "La celulosa es un polisacárido lineal homopolímero de glucosa unida por enlaces $\\beta(1\\rightarrow4)$ cuya fórmula polimérica es $(C_6H_{10}O_5)_n$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "Analizando la composición química de las materias primas fibrosas, ¿qué porcentaje aproximado de celulosa pura contiene la fibra de algodón frente a la madera de coníferas?",
    options: [
      "Algodón > 90% de celulosa; Madera 40-50% (o 45-60%) de celulosa.",
      "Algodón 40-45% de celulosa; Madera > 90% de celulosa.",
      "Ambas fuentes vegetales poseen exactamente un 75% de celulosa cristalina."
    ],
    correct: 0,
    explanation: "Las fibras no madereras como el algodón presentan una pureza de celulosa superior al 90%, mientras que en la madera la celulosa representa entre el 40% y el 60%, estando acompañada de lignina y hemicelulosas.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "En la estructura anatómica vegetal de la madera, ¿cuál es la distribución morfológica celular característica de las especies frondosas (ej. eucalipto) frente a las resinosas (ej. pino)?",
    options: [
      "Frondosas: Fibras (61%), Vasos (26%) y Parénquima (13%). Resinosas: Traqueidas (95%) y Parénquima (5%).",
      "Frondosas: Traqueidas (95%) y Vasos (5%). Resinosas: Fibras (61%) y Parénquima (39%).",
      "Ambas maderas están compuestas en un 100% por vasos de conducción de savia."
    ],
    correct: 0,
    explanation: "Las resinosas son homogéneas y están formadas por un 95% de traqueidas. Las frondosas son más complejas, dividiéndose en fibras cortas (61%), vasos (26%) y parénquima (13%).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 22 / Pág. 202)"
  },
  {
    theme: 2,
    question: "En el proceso de cocción química al sulfato (método Kraft) para la obtención de pasta de papel, los reactivos químicos utilizados en el digestor para disolver la lignina son:",
    options: [
      "Hidróxido sódico (NaOH), Sulfuro sódico (Na2S) y Azufre (S).",
      "Bisulfito cálcico Ca(HSO3)2 con exceso de dióxido de azufre libre.",
      "Ácido sulfúrico concentrado (H2SO4) e Hipoclorito sódico (NaOCl)."
    ],
    correct: 0,
    explanation: "La pasta al sulfato o Kraft utiliza una lejía blanca alcalina compuesta por hidróxido de sodio (NaOH), sulfuro de sodio ($Na_2S$) y azufre ($S$) para eliminar la lignina preservando la resistencia de la fibra.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 24 / Pág. 204)"
  },
  {
    theme: 2,
    question: "Para evitar la contaminación por compuestos organoclorados y certificar un papel bajo la norma TCF (Totally Chlorine Free), el proceso de blanqueo utiliza:",
    options: [
      "Oxígeno (O2), Ozono (O3), Peróxido de hidrógeno (H2O2) y enzimas.",
      "Dióxido de cloro (ClO2) en combinación con cloro gas (Cl2).",
      "Ditionita de sodio (Na2S2O4) e Hipoclorito sódico purificado."
    ],
    correct: 0,
    explanation: "El blanqueo TCF (Totalmente Libre de Cloro) prescinde de cualquier compuesto cloradamente activo, empleando reactivos oxigenados como $O_2$, $O_3$, $H_2O_2$ y tratamientos enzimáticos.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 26 / Pág. 206)"
  },
  {
    theme: 2,
    question: "En la refinación de la pasta papelera, la diferencia entre una refinación 'magra' y una refinación 'grasa' estriba en que:",
    options: [
      "La refinación magra prima el corte de la fibra dando menor lisura, mientras que la refinación grasa produce una intensa fibrilación y frote, aumentando la hidratación y la hinchazón de la fibra.",
      "La refinación magra añade grasas sintéticas a la tina de mezcla y la grasa añade aceites vegetales.",
      "La refinación magra reduce la resistencia al rasgado y la grasa la aumenta indefinidamente."
    ],
    correct: 0,
    explanation: "La refinación grasa somete la fibra a frote prolongado aumentando la superficie específica y la capacidad de enlace de hidrógeno (hidratación), a diferencia del corte rápido o refinado magro.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 27 / Pág. 207)"
  },

  // ==========================================
  // BLOQUE III: MÁQUINA CONTINUADORA Y TRATAMIENTOS SUPERFICIALES
  // ==========================================
  {
    theme: 3,
    question: "En la caja de entrada (cabeza de máquina), la suspensión acuosa de fibras y aditivos químicos que se vierte sobre la mesa de fabricación posee una consistencia de sólidos aproximada de:",
    options: [
      "Alrededor del 1% de materia sólida y 99% de agua.",
      "Alrededor del 12% de materia sólida y 88% de agua.",
      "Alrededor del 50% de materia sólida y 50% de agua."
    ],
    correct: 0,
    explanation: "Para garantizar una distribución homogénea de las fibras en la lámina, la consistencia en la caja de entrada se diluye enormemente hasta valores cercanos al 1% de sólidos.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 30 / Pág. 210)"
  },
  {
    theme: 3,
    question: "Durante el paso de la hoja por la mesa de fabricación Fourdrinier, la eliminación de humedad (desgote inicial) reduce la presencia de agua alcanzando una extracción aproximada del:",
    options: [
      "20% de eliminación de humedad sobre la tela sin fin.",
      "95% de eliminación de humedad por gravedad.",
      "0,5% de eliminación de humedad."
    ],
    correct: 0,
    explanation: "El desgote dinámico en la mesa de fabricación (mediante racores, foiles y cajas aspirantes) extrae aproximadamente un 20% del agua libre de la suspensión.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 31 / Pág. 211)"
  },
  {
    theme: 3,
    question: "En la sección de sequería por cilindros calefactados con vapor de agua, las fibras de la hoja sufren una retracción o encogimiento físico asimétrico de aproximadamente:",
    options: [
      "Un 2% en sentido longitudinal (sentido de fibra) y un 20% en sentido transversal (contrafibra).",
      "Un 20% en sentido longitudinal y un 2% en sentido transversal.",
      "Un 10% idéntico en ambas direcciones de la hoja."
    ],
    correct: 0,
    explanation: "Debido a la tensión mecánica longitudinal de los cilindros y la orientación de las fibras, el encogimiento es de solo un 2% a lo largo pero alcanza un 20% en dirección transversal.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 33 / Pág. 213)"
  },
  {
    theme: 3,
    question: "En los tratamientos superficiales aplicados dentro de máquina continuadora (aprox. $10\\text{ g/m}^2$), la unidad 'Size-Press' o 'Speed-Sizer' tiene como objetivo primario:",
    options: [
      "Aplicar ligantes (almidón, APV, acetatos) para consolidar la superficie y mejorar la resistencia al arrancado.",
      "Blanquear la masa interna del papel con cloro gas.",
      "Grabar las líneas horizontales de puntizones y corondeles."
    ],
    correct: 0,
    explanation: "La Size-Press deposita una capa fina de ligantes (almidón, colas sintéticas) en la superficie de la hoja secada para sellar el poro y evitar el desprendimiento de fibras (arrancado).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 34 / Pág. 214)"
  },
  {
    theme: 3,
    question: "En el estucado fuera de máquina, ¿qué método de aplicación permite depositar capas de salsa de estuco de gran espesor ($20-40\\text{ g/m}^2$) controlando el exceso mediante una cortina de aire comprimido?",
    options: [
      "Método de Labio Soplador (Air Knife).",
      "Método de Rasqueta rígida (Blade Coater).",
      "Método de Bill-Blade de rodillo opuesto."
    ],
    correct: 0,
    explanation: "El sistema de labio soplador (Air Knife) dosifica el estuco mediante un chorro laminar de aire a alta presión, permitiendo recubrimientos pesados de entre 20 y 40 g/m².",
    source: "Curso Básico de Artes Gráficas (Diapositiva 35 / Pág. 215)"
  },

  // ==========================================
  // BLOQUE IV: TIPOLOGÍA DE SOPORTES, FORMATOS Y UNIDADES
  // ==========================================
  {
    theme: 4,
    question: "Para que un soporte papelero pueda comercializarse bajo el sello distintivo de 'Papel Reciclado', la normativa exige que el porcentaje mínimo de fibras secundarias utilizadas en su fabricación sea de:",
    options: [
      "Como mínimo el 75% de fibras secundarias.",
      "Como mínimo el 50% de fibras secundarias.",
      "El 100% estricto sin posibilidad de añadir ningún aditivo."
    ],
    correct: 0,
    explanation: "Un papel se considera técnicamente reciclado si al menos el 75% de sus fibras proceden de recuperaciones secundarias (desperdicios post-consumo o pre-consumo).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 42 / Pág. 222)"
  },
  {
    theme: 4,
    question: "Un papel se clasifica con la etiqueta medioambiental de 'Papel Ecológico' cuando el contenido de compuestos orgánicos halogenados (AOX) utilizados en el blanqueo es:",
    options: [
      "Inferior a 0,2 kg por tonelada de pasta de papel seca.",
      "Inferior a 5,0 kg por tonelada de pasta de papel seca.",
      "Exactamente igual a cero absoluto en cualquier prueba química."
    ],
    correct: 0,
    explanation: "La condición de papel ecológico requiere una tasa de AOX residual inferior al límite estricto de 0,2 kg/tn de pulpa seca.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 42 / Pág. 222)"
  },
  {
    theme: 4,
    question: "El papel verjurado se reconoce visualmente al trasluz por presentar una estructura de líneas continuas entrelazadas denominadas:",
    options: [
      "Puntizones (líneas horizontales muy juntas) y Corondeles (líneas verticales más separadas que las cortan).",
      "Fibras transversales y traqueidas longitudinales.",
      "Marcas de agua continuas de tipo sombra."
    ],
    correct: 0,
    explanation: "El papel verjurado muestra por transparencia las huellas del cedazo o forma: los puntizones (fines y juntos) y los corondeles (gruesos y perpendiculares).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 46 / Pág. 226)"
  },
  {
    theme: 4,
    question: "Según la norma DIN 476 y la serie de formatos normalizados ISO A, las dimensiones milimétricas exactas del pliego base A0 y del formato comercial A4 son:",
    options: [
      "A0 = 841 x 1189 mm; A4 = 210 x 297 mm.",
      "A0 = 800 x 1200 mm; A4 = 215 x 315 mm.",
      "A0 = 700 x 1000 mm; A4 = 200 x 300 mm."
    ],
    correct: 0,
    explanation: "El formato A0 posee una superficie exacta de $1\\text{ m}^2$ con proporciones $1:\\sqrt{2}$ ($841 \\times 1189\\text{ mm}$), derivando por sucesivos cortes a la mitad en el A4 ($210 \\times 297\\text{ mm}$).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 55 / Pág. 235)"
  },
  {
    theme: 4,
    question: "En las equivalencias del cómputo tradicional de resmas en la industria gráfica, ¿cuántos pliegos componen 1 Bala y cómo se desglosa 1 Mano?",
    options: [
      "1 Bala = 10 resmas (5.000 pliegos); 1 Mano = 5 cuadernillos (25 hojas).",
      "1 Bala = 20 resmas (10.000 pliegos); 1 Mano = 10 cuadernillos (50 hojas).",
      "1 Bala = 5 resmas (2.500 pliegos); 1 Mano = 2 cuadernillos (10 hojas)."
    ],
    correct: 0,
    explanation: "1 Resma = 500 pliegos = 20 manos. Por tanto: 1 Bala (10 resmas) = 5.000 pliegos. 1 Mano equivale a 5 cuadernillos de 5 hojas cada uno (25 hojas).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 57 / Pág. 237)"
  },
  {
    theme: 4,
    question: "En España, la numeración comercial del cartón en hojas (ej. Cartón del número 5) guarda una relación directa con su gramaje basada en la siguiente regla:",
    options: [
      "El número corresponde a la centésima parte del peso en gramos de un pliego de formato 75 x 105 cm (un N.º 5 pesa 500 g/pliego, equivalente a 635 g/m²).",
      "El número equivale al grosor directo expresado en milímetros enteros.",
      "El número expresa el número de pliegos por kilogramo de peso neto."
    ],
    correct: 0,
    explanation: "La numeración del cartón es la centésima parte del peso en gramos de una hoja patrón de $75 \\times 105\\text{ cm}$. El cartón N.º 5 pesa $500\\text{ g}$, lo que dividido entre $0,7875\\text{ m}^2$ da un gramaje de $635\\text{ g/m}^2$.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 61-62 / Págs. 241-242)"
  },

  // ==========================================
  // BLOQUE V: PROPIEDADES ÓPTICAS Y FÍSICO-MECÁNICAS
  // ==========================================
  {
    theme: 5,
    question: "La fórmula para calcular el peso total en kilogramos de una resma (500 pliegos) a partir del Ancho ($A$ en cm), Largo ($L$ en cm) y Gramaje ($G$ en $\\text{g/m}^2$) es:",
    options: [
      "Kg / resma = (A x L x G) / 20.000",
      "Kg / resma = (A x L x G) / 10.000",
      "Kg / resma = (A x L x G) / 1.000"
    ],
    correct: 0,
    explanation: "Superficie de 1 pliego en $\\text{m}^2 = \\frac{A \\times L}{10.000}$. Peso de 500 pliegos $= 500 \\times \\frac{A \\times L}{10.000} \\times \\frac{G}{1.000} = \\frac{A \\times L \\times G}{20.000}$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 71 / Pág. 251)"
  },
  {
    theme: 5,
    question: "La relación matemática entre la Densidad Aparente ($D_{ap}$ en $\\text{g/cm}^3$) y el Volumen Específico ($V_{esp}$ en $\\text{cm}^3/\\text{g}$) de un soporte papelero se define como:",
    options: [
      "Inversamente proporcionales: Vesp = 1 / Daparente (donde Daparente = Gramaje / Espesor).",
      "Directamente proporcionales: Vesp = Daparente x Gramaje.",
      "Constantes e independientes del proceso de calandrado o prensado."
    ],
    correct: 0,
    explanation: "El volumen específico es el recíproco o inverso de la densidad aparente ($V_{esp} = \\frac{1}{D_{ap}}$); papeles de alto volumen o mano tienen baja densidad aparente.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 73-74 / Págs. 253-254)"
  },
  {
    theme: 5,
    question: "La prueba normalizada de porosidad mide el tiempo que tarda un volumen determinado de aire en atravesar el papel. ¿Cuáles son los parámetros dimensionales estándar del ensayo?",
    options: [
      "Un volumen de 100 cm³ de aire a través de una superficie de 6,5 cm² de soporte papelero.",
      "Un volumen de 1.000 cm³ de aire a través de 1 m² de papel.",
      "Un caudal de 1 litro por segundo a través de 10 cm²."
    ],
    correct: 0,
    explanation: "La porosidad Gurley/Bendtsen establece el tiempo necesario para pasar $100\\text{ cm}^3$ de aire a través de una sección estándar de $6,5\\text{ cm}^2$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 75 / Pág. 255)"
  },
  {
    theme: 5,
    question: "El Grado de Blancura de un papel se determina midiendo la reflectancia difusa intrínseca a una longitud de onda óptica estandarizada de:",
    options: [
      "457 nanómetros (zona del azul-violeta, complementario del amarillo a 574 nm).",
      "550 nanómetros (zona del verde puro).",
      "700 nanómetros (zona del rojo lejano)."
    ],
    correct: 0,
    explanation: "El estándar internacional fija los $457\\text{ nm}$ debido a que el envejecimiento del papel genera amarilleamiento (absorción en $574\\text{ nm}$), registrándose con máxima sensibilidad en la longitud complementaria de $457\\text{ nm}$.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 64 y 94 / Págs. 244 y 274)"
  },
  {
    theme: 5,
    question: "El blanco patrón absoluto de referencia utilizado en los instrumentos de medición de reflectancia y colorimetría para calibrar la blancura (100%) es:",
    options: [
      "El Óxido de Magnesio (MgO).",
      "El Dióxido de Titanio (TiO2).",
      "El Carbonato Cálcico cristalizado (CaCO3)."
    ],
    correct: 0,
    explanation: "El espectro de reflectancia del óxido de magnesio ($MgO$) prensado sirve como patrón primario de blancura del 100% en fotometría.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 64-65 / Págs. 244-245)"
  },

  // ==========================================
  // BLOQUE VI: COMPORTAMIENTO FÍSICO-QUÍMICO Y RESISTENCIAS
  // ==========================================
  {
    theme: 6,
    question: "El ensayo de penetración de agua por encolado superficial mediante el método Cobb determina:",
    options: [
      "La cantidad de agua en gramos absorbida por 1 m² de papel durante un tiempo determinado (ej. Cobb 60).",
      "La resistencia al fuego del estuco.",
      "La masa de caucho sintético presente en el papel autoadhesivo."
    ],
    correct: 0,
    explanation: "El valor Cobb expresa la masa de agua en $\\text{g/m}^2$ absorbida por la superficie del papel durante un intervalo de tiempo expuesto bajo una columna líquida.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 87-88 / Págs. 267-268)"
  },
  {
    theme: 6,
    question: "En la impresión offset, un soporte papelero con un valor de pH excesivamente ácido (< 5) en su capa de estuco o masa provoca el siguiente problema grave:",
    options: [
      "Retraso extremo o inhibición del secado por oxidación de las tintas y emulsificación del agua de mojado.",
      "Aumento instantáneo de la resistencia mecánica al rasgado.",
      "Aparición de velo o engrase en las zonas no impresas de la plancha."
    ],
    correct: 0,
    explanation: "Un pH ácido neutra los secantes metálicos de la tinta offset e inhibe la polimerización por oxidosecado, volviendo la tinta permanentemente mordente.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 91 / Pág. 271)"
  },
  {
    theme: 6,
    question: "Al evaluar la resistencia al arrancado de la superficie del papel para evitar el repintado o picado, ¿qué instrumentos de ensayo estandarizados se utilizan comercialmente?",
    options: [
      "Las Ceras Dennison normalizadas o las tintas de tiro graduado IGT.",
      "El durómetro Shore D y el medidor Taber de rigidez.",
      "El aparato Mullen de estallido hidrostático."
    ],
    correct: 0,
    explanation: "La cohesión superficial frente a la tracción del tiro de la tinta se mide en laboratorio mediante la escala de Ceras de fusión progresiva Dennison o el aparato de estampación de prueba IGT.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 99 / Pág. 279)"
  },
  {
    theme: 6,
    question: "El fenómeno de ampollado o 'Blistering' en el secado de papeles estucados a dos caras procesados en rotativas Offset Heat-set se desencadena cuando:",
    options: [
      "El vapor de agua interno generado rápidamente en el horno de secado no puede escapar a través del recubrimiento impermeable de estuco.",
      "La velocidad de la máquina es excesivamente rápida superando los 2.000 m/min.",
      "El pH de la tinta es superior a 10."
    ],
    correct: 0,
    explanation: "El calor repentino del horno ($>150^\\circ\\text{C}$) evapora instantáneamente el agua interna; si la capa de estuco está muy cerrada, la presión de vapor revienta la superficie formando ampollas o blisters.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 95 / Pág. 275)"
  },
  {
    theme: 6,
    question: "Sometiendo un soporte papelero a elevadas temperaturas en el secado, ¿a partir de qué rango térmico las fibras sufren pérdida drástica de resistencia al rasgado y plegado, e inician su degradación?",
    options: [
      "A temperaturas de 130 °C a 150 °C.",
      "A temperaturas de 40 °C a 50 °C.",
      "Únicamente al alcanzar el punto de combustión a 450 °C."
    ],
    correct: 0,
    explanation: "Entre $95$ y $105^\\circ\\text{C}$ el agua libre se evapora; pero si la temperatura de la masa alcanza los $130-150^\\circ\\text{C}$, el agua constitucional de la celulosa se pierde, volviendo frágil la fibra.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 106 / Pág. 286)"
  },

  // ==========================================
  // BLOQUE VII: TIPOGRAFÍA, ANATOMÍA Y ESTILOS
  // ==========================================
  {
    theme: 7,
    question: "En la anatomía del tipo móvil tradicional, las tres divisiones horizontales de la cara o relieve del carácter se conocen como:",
    options: [
      "Ojo superior o cabeza (ascendentes), Ojo medio o altura-x (cuerpo de la letra) u Ojo inferior o pie (descendentes).",
      "Hombro superior, bisel de asta y talón de base.",
      "Caja alta, caja baja y versalitas."
    ],
    correct: 0,
    explanation: "El trazo impresor del tipo móvil se divide verticalmente en ojo superior (para astas ascendentes y mayúsculas), ojo medio (altura del cuerpo x de minúsculas) u ojo inferior (para astas descendentes).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 113 / Pág. 293)"
  },
  {
    theme: 7,
    question: "Dentro de la clasificación tipográfica de la familia de las letras Góticas, ¿cuáles son sus cuatro variantes estilísticas históricas fundamentales?",
    options: [
      "Gótica de forma (Gotisch o Textur), Gótica de fractura (Fraktur), Gótica cursiva (Schwabacher) y Gótica Redonda de transición (Rundgotisch).",
      "Gótica Clásica, Gótica Moderna, Gótica Egipcia y Gótica Incisa.",
      "Gótica Didona, Gótica Garalda, Gótica Mecana y Gótica Humanística."
    ],
    correct: 0,
    explanation: "Las cuatro clases góticas primarias son la Textur (forma rígida), Fraktur (quebrada alemana), Schwabacher (bastarda o cursiva) y Rundgotisch (redonda o de suma).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 116 / Pág. 296)"
  },

  // ==========================================
  // BLOQUE VIII: TIPOMETRÍA (DIDOT Y ANGLOAMERICANO)
  // ==========================================
  {
    theme: 8,
    question: "En el Sistema Tipográfico Europeo (Didot), las equivalencias métricas exactas del Punto Didot y de la Cícera corresponden a:",
    options: [
      "1 punto Didot = 0,376 mm (0,376065 mm); 1 Cícera = 12 puntos Didot = 4,512 mm (4,51278 mm).",
      "1 punto Didot = 0,351 mm; 1 Cícera = 10 puntos Didot = 3,510 mm.",
      "1 punto Didot = 0,500 mm; 1 Cícera = 20 puntos Didot = 10,00 mm."
    ],
    correct: 0,
    explanation: "El sistema Didot fija la cícera en 12 puntos. $1\\text{ pt Didot} = 0,376065\\text{ mm}$, por lo que $12 \\times 0,376065 = 4,51278\\text{ mm}$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 127 / Pág. 307)"
  },
  {
    theme: 8,
    question: "En el Sistema Tipográfico Angloamericano (Pica), ¿cuáles son las dimensiones métricas exactas del Punto de Pica y de la Pica?",
    options: [
      "1 punto de Pica = 0,351 mm (0,3514729 mm); 1 Pica = 12 puntos de Pica = 4,212 mm (4,21767 mm).",
      "1 punto de Pica = 0,376 mm; 1 Pica = 12 puntos = 4,512 mm.",
      "1 punto de Pica = 0,250 mm; 1 Pica = 10 puntos = 2,500 mm."
    ],
    correct: 0,
    explanation: "El sistema Angloamericano define $1\\text{ pt Pica} = 0,3514729\\text{ mm}$ y $1\\text{ Pica} (12\\text{ pt}) = 4,21767\\text{ mm}$, siendo inferior en tamaño al Didot.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 128 / Pág. 308)"
  },

  // ==========================================
  // BLOQUE IX: TIPOGRAFÍA DIGITAL Y FORMATOS
  // ==========================================
  {
    theme: 9,
    question: "Los tipos de letra escalables en formato PostScript Type 1 desarrollados por Adobe definen el contorno vectorial del carácter mediante:",
    options: [
      "Curvas polinómicas cúbicas de Bézier sustentadas por puntos de anclaje y manetas de control.",
      "Curvas cuadráticas compuestas tipo B-Spline.",
      "Matrices compuestas de píxeles bitmap independientes de resolución."
    ],
    correct: 0,
    explanation: "El formato PostScript Type 1 utiliza curvas Bézier de tercer grado (cúbicas) definidas mediante dos puntos de anclaje y dos puntos de control.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 133 / Pág. 313)"
  },
  {
    theme: 9,
    question: "El formato tipográfico digital OpenType (desarrollado conjuntamente por Adobe y Microsoft) presenta como ventaja tecnológica principal respecto al TrueType clásico:",
    options: [
      "Ser multiplataforma nativo (Mac/Windows), un único archivo de fuente de hasta 65.536 caracteres y soporte avanzado Unicode.",
      "Requerir la separación de archivos independientes para pantalla e impresora.",
      "Estar limitado a un máximo de 256 caracteres ASCII."
    ],
    correct: 0,
    explanation: "OpenType es una fuente de archivo único (.otf o .ttf) multiplataforma que amplía la tabla de glifos hasta 65.536 caracteres por archivo mediante codificación Unicode.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 135 / Pág. 315)"
  },

  // ==========================================
  // BLOQUE X: ORIGINALES Y SISTEMAS DE IMPRESIÓN
  // ==========================================
  {
    theme: 10,
    question: "Al clasificar los originales físicos según su transmisión de la luz antes de su digitalización por escáner, estos se dividen en:",
    options: [
      "Originales Opacos (copias en papel, impresos) u Originales Transparentes (diapositivas, negativos).",
      "Originales Vectoriales o Mapas de Bits.",
      "Originales Monocromáticos o RGB puro."
    ],
    correct: 0,
    explanation: "Los originales físicos se subdividen en opacos (la luz se refleja sobre la imagen) y transparentes (la luz atraviesa la película fotográfica).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 138 / Pág. 318)"
  },
  {
    theme: 10,
    question: "En la caracterización de papeles para la máquina de fotocopiar e impresoras láser en caliente, la propiedad física más crítica a mantener constante es:",
    options: [
      "Un contenido de humedad relativa ambiental constante de alrededor del 40% para evitar deformaciones e incendios en el fusor.",
      "Un gramaje superior a 300 g/m².",
      "Un encolado superficial de resinas reactivas al calor."
    ],
    correct: 0,
    explanation: "El calor del fusor de tóner ($180-200^\\circ\\text{C}$) evapora bruscamente la humedad; si el papel no está acondicionado al 40% H.R., sufre atascamientos por deformación térmica.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 110 / Pág. 290)"
  },
 // const preguntasExamenArtesGraficasModoDificil = [
  // ==========================================
  // BLOQUE I: HISTORIA, FASES DEL PROCESO Y GESTIÓN DE CALIDAD (1-10)
  // ==========================================
  {
    theme: 1,
    question: "¿En qué año e inventor se atribuye la invención de la litografía y cuál es su principio físico-químico fundamental?",
    options: [
      "Alois Senefelder en 1796, basándose en la repulsión mutua entre el agua y las grasas sobre piedra caliza.",
      "Johannes Gutenberg en 1450, basándose en la alineación de tipos móviles metálicos.",
      "Ottmar Mergenthaler en 1886, basándose en la fundición de líneas de plomo."
    ],
    correct: 0,
    explanation: "El manual recoge que Alois Senefelder inventó la litografía en 1796 apoyándose en la repulsión entre agua y grasas sobre piedra caliza[cite: 183].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 2 / Pág. 183)"
  },
  {
    theme: 1,
    question: "Dentro de la clasificación tipológica de los productos gráficos, ¿en qué categoría se sitúan las publicaciones periódicas como periódicos (El País, Le Monde) y revistas (National Geographic, Macworld)?",
    options: [
      "Paraeditoriales.",
      "Editoriales puras.",
      "Extraeditoriales o publicitarias."
    ],
    correct: 0,
    explanation: "El manual clasifica diarios y revistas dentro del grupo de productos paraeditoriales, diferenciándolos de los editoriales (libros) y extraeditoriales (folletos, etiquetas, packaging)[cite: 184].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 3 / Pág. 184)"
  },
  {
    theme: 1,
    question: "En la fase de Preimpresión 1, ¿cuáles son los tres subprocesos fundamentales previos al ensamblado final?",
    options: [
      "Composición de textos, digitalización de imágenes y montaje de página.",
      "Ripeado, pruebas de color y filmación CTP.",
      "Corte, plegado y encuadernación."
    ],
    correct: 0,
    explanation: "La fase de Preimpresión 1 engloba la entrada de texto, la digitalización/escaneado de imágenes y el montaje de página[cite: 188].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 7 / Pág. 188)"
  },
  {
    theme: 1,
    question: "En Preimpresión 2, la función del procesador RIP (Raster Image Processor) consiste en:",
    options: [
      "Convertir los archivos vectoriales y de descripción de página (PS, PDF) en un mapa de bits de alta resolución apto para CTP/CTF.",
      "Ajustar mecánicamente la presión de las mantas de caucho en la prensa offset.",
      "Realizar el cosido y alzado automatizado de los pliegos."
    ],
    correct: 0,
    explanation: "El RIP interpreta los datos en lenguaje de descripción de página (PS/PDF) para generar la trama de puntos rasterizada para filmación[cite: 189].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 8 / Pág. 189)"
  },
  {
    theme: 1,
    question: "Dentro de las operaciones de la fase de Postimpresión, ¿cuál es la secuencia estándar de acabado para la preparación de un folleto de varias páginas o revista?",
    options: [
      "Corte, plegado, alzado, embuchado y encuadernación.",
      "Ripeado, imposición, grabado de planchas y tirada.",
      "Entonación, registro, desilado y batido."
    ],
    correct: 0,
    explanation: "Las etapas de postimpresión indicadas en el esquema son corte, plegado, alzado, embuchado y encuadernación[cite: 191].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 10 / Pág. 191)"
  },
  {
    theme: 1,
    question: "En la gestión automatizada del flujo de trabajo gráfico, el consorcio CIP4 promueve el estándar JDF (Job Definition Format), el cual se define como:",
    options: [
      "Un formato abierto basado en XML que permite la comunicación de datos técnicos y administrativos entre preimpresión, impresión y postimpresión.",
      "Un software exclusivo para la calibración densitométrica de tintas UV.",
      "Un protocolo de transmisión por infrarrojos para maquinaria gráfica."
    ],
    correct: 0,
    explanation: "JDF es un estándar basado en XML apoyado por la organización CIP4 para conectar la información de gestión con la producción industrial[cite: 194].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 13 / Pág. 194)"
  },
  {
    theme: 1,
    question: "¿Qué desarrollo informático introducido en 1985 revolucionó las Artes Gráficas dando origen a la Autoedición profesional?",
    options: [
      "El lanzamiento del ordenador Apple Macintosh junto con el lenguaje de descripción de página Adobe PostScript.",
      "La invención del formato JPEG y las impresoras de chorro de tinta.",
      "La aparición del tambor magnético de rotograbado."
    ],
    correct: 0,
    explanation: "El manual destaca que en 1985 la combinación del Apple Mac y el lenguaje PostScript dio nacimiento a la autoedición[cite: 183].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 2 / Pág. 183)"
  },
  {
    theme: 1,
    question: "Según el esquema general del proceso gráfico, las operaciones de troquelado, hendido, gofrado y estampación se encuadran técnicamente en:",
    options: [
      "El bloque de acabados dentro de la fase de Postimpresión.",
      "La preparación de máquinas en la fase de Impresión.",
      "La filmación y pasado de planchas en Preimpresión."
    ],
    correct: 0,
    explanation: "El esquema general sitúa el troquelado, hendido, gofrado y estampación dentro de la sección de acabados de la postimpresión[cite: 195].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 15 / Pág. 195)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre una prueba de imposición y una prueba de contrato en el flujo de preimpresión?",
    options: [
      "La prueba de imposición verifica el correcto casado y orden de páginas, mientras que la prueba de contrato valida color y densidad con valor legal ante el cliente.",
      "La prueba de contrato se realiza en blanco y negro y la de imposición en cuatricromía.",
      "Ambas son idénticas y se imprimen siempre en la máquina offset definitiva."
    ],
    correct: 0,
    explanation: "La prueba de imposición controla la maquetación y plegado, mientras que la prueba de contrato garantiza la fidelidad cromática acordada con el cliente[cite: 189, 195].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 8 / Pág. 189)"
  },
  {
    theme: 1,
    question: "En la fase de Impresión, las variables operativas fundamentales a ajustar en máquina antes de la tirada son:",
    options: [
      "El registro de las imágenes/planchas y la entonación (balance agua-tinta).",
      "La maquetación tipográfica y el formateo de las fuentes.",
      "El empaquetado de palés y el etiquetado de distribución."
    ],
    correct: 0,
    explanation: "En la fase de ajuste de máquina de impresión se exige controlar el registro geométrico y la entonación cromática[cite: 195].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 15 / Pág. 195)"
  },

  // ==========================================
  // BLOQUE II: COMPOSICIÓN QUÍMICA Y ANATOMÍA DE LA MADERA (11-20)
  // ==========================================
  {
    theme: 2,
    question: "¿Cuál es el porcentaje de celulosa presente en las fibras madereras en comparación con las fibras de algodón?",
    options: [
      "Madera: 45-60% de celulosa; Algodón: > 90% de celulosa.",
      "Madera: > 90% de celulosa; Algodón: 45-60% de celulosa.",
      "Ambas materias primas presentan exactamente un 25% de celulosa."
    ],
    correct: 0,
    explanation: "El manual indica que la celulosa representa entre el 45% y el 60% en la madera, alcanzando más del 90% en el algodón[cite: 200].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "¿Qué componente de la madera actúa como aglomerante intercelular (20-30%) y es el responsable directo del amarilleamiento del papel ante la luz?",
    options: [
      "La lignina.",
      "La hemicelulosa.",
      "El almidón soluble."
    ],
    correct: 0,
    explanation: "La lignina une las fibras (20-30%) y causa el amarilleamiento característico del papel por degradación fotoquímica[cite: 200].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "Las hemicelulosas presentes en la madera (25-30%) desempeñan una función crucial en la fabricación del papel al:",
    options: [
      "Favorecer y consolidar la unión física entre las fibras de celulosa.",
      "Impedir la penetración de las tintas de impresión.",
      "Otorgar elasticidad gomosa al soporte frente al rasgado."
    ],
    correct: 0,
    explanation: "Las hemicelulosas actúan como agentes de enlace natural que favorecen la cohesión interfibrilar durante la formación de la hoja[cite: 200].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "En la estructura anatómica del tronco de un árbol, ¿cuáles son las zonas visibles en una sección transversal desde el centro hacia el exterior?",
    options: [
      "Médula, duramen, albura y corteza.",
      "Corteza, vasos, traqueidas y parénquima.",
      "Puntizones, corondeles, hilera y canal."
    ],
    correct: 0,
    explanation: "En el corte transversal se aprecian la médula central, el duramen, la albura y la corteza exterior[cite: 201].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 21 / Pág. 201)"
  },
  {
    theme: 2,
    question: "En la composición histológica de las maderas resinosas (coníferas), ¿qué elemento celular constituye el 95% de la estructura?",
    options: [
      "Las traqueidas.",
      "Los vasos de conducción.",
      "Las células del parénquima libre."
    ],
    correct: 0,
    explanation: "Las resinosas son estructuralmente homogéneas, compuestas por un 95% de traqueidas y un 5% de parénquima[cite: 202].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 22 / Pág. 202)"
  },
  {
    theme: 2,
    question: "A diferencia de las resinosas, la madera de frondosas (hoja ancha) se compone morfológicamente de:",
    options: [
      "Fibras (61%), Vasos (26%) y Parénquima (13%).",
      "Traqueidas (95%) y Parénquima (5%).",
      "Celulosa pura (100%) sin elementos conductores."
    ],
    correct: 0,
    explanation: "Las frondosas presentan mayor variedad celular: 61% de fibras cortas, 26% de vasos de savia y 13% de parénquima[cite: 202].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 22 / Pág. 202)"
  },
  {
    theme: 2,
    question: "Las cargas y pigmentos minerales (caolín, carbonato cálcico, talco, yeso) incorporados a la pasta de papel aportan las siguientes propiedades, EXCEPTO:",
    options: [
      "Aumentar el espesor y volumen específico a igualdad de gramaje.",
      "Aumentar la lisura superficial y la opacidad.",
      "Disminuir la porosidad y la absorción de tinta."
    ],
    correct: 0,
    explanation: "Las cargas minerales rellenan los huecos entre fibras, lo que reduce el espesor/volumen a igualdad de gramaje (aumenta la densidad)[cite: 198].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 18 / Pág. 198)"
  },
  {
    theme: 2,
    question: "Al añadir ligantes (almidón, látex, APV) en la formulación del papel, un exceso o defecto de los mismos provoca:",
    options: [
      "Ligante alto: baja absorción y repintado. Ligante bajo: arrancado y fallos de unión interfibrilar.",
      "Ligante alto: aumento del espesor. Ligante bajo: combustión espontánea.",
      "Ligante alto: amarilleamiento instantáneo. Ligante bajo: transparencia total."
    ],
    correct: 0,
    explanation: "Un nivel elevado de ligante cierra la superficie produciendo repintado por baja absorción, mientras que un nivel bajo debilita la cohesión provocando arrancado[cite: 198].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 18 / Pág. 198)"
  },
  {
    theme: 2,
    question: "¿Qué aditivos químicos se añaden al papel para mejorar su cohesión en presencia de agua durante su uso o impresión?",
    options: [
      "Resinas de resistencia en húmedo.",
      "Blanqueantes ópticos de azulaje.",
      "Antiespumantes de silicona."
    ],
    correct: 0,
    explanation: "Las resinas de resistencia en húmedo evitan que las uniones de hidrógeno se disuelvan totalmente en contacto con el agua[cite: 199].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 19 / Pág. 199)"
  },
  {
    theme: 2,
    question: "Entre las materias primas no madereras clasificadas como fibras secundarias o sintéticas se encuentran:",
    options: [
      "Fibras recuperadas de papel usado, lana (animal) y nylon (sintética).",
      "Pino silvestre y eucalipto glóbulus.",
      "Caolín, talco y carbonato cálcico."
    ],
    correct: 0,
    explanation: "El manual diferencia materias primas secundarias (reciclados), animales (lana) y artificiales/sintéticas (nylon)[cite: 197].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 17 / Pág. 197)"
  },

  // ==========================================
  // BLOQUE III: PASTAS, BLANQUEO Y REFINADO (21-30)
  // ==========================================
  {
    theme: 3,
    question: "En la clasificación de pastas mecánicas, las siglas TMP y CTMP corresponden respectivamente a:",
    options: [
      "Pasta Termomecánica y Pasta Químico-Termomecánica (o Semiquímica).",
      "Pasta Técnica de Madera y Pasta Clásica de Triturado.",
      "Pasta Totalmente Mecanizada y Pasta de Corte Térmico."
    ],
    correct: 0,
    explanation: "TMP identifica a la Pasta Termomecánica y CTMP a la Pasta Químico-Termomecánica[cite: 203].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 23 / Pág. 203)"
  },
  {
    theme: 3,
    question: "Los reactivos químicos empleados en el proceso de cocción al sulfato (Kraft) para la disolución de la lignina son:",
    options: [
      "Hidróxido sódico (NaOH), Sulfuro sódico (Na2S) y Azufre (S).",
      "Bisulfito cálcico y dióxido de azufre libre.",
      "Cloro gas y ácido clorhídrico concentrado."
    ],
    correct: 0,
    explanation: "La lejía de cocción del método al sulfato se compone de $NaOH$, $Na_2S$ y $S$[cite: 204].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 24 / Pág. 204)"
  },
  {
    theme: 3,
    question: "En el procesamiento de pastas recuperadas (recicladas), los métodos de destintado incluyen:",
    options: [
      "Lavado, flotación, combinación de lavado y flotación, y destintado por enzimas.",
      "Calcinación al horno y lavado ácido.",
      "Soplado de vapor a alta presión exclusivamente."
    ],
    correct: 0,
    explanation: "El destintado de fibras secundarias se realiza mediante lavado, flotación, lavado + flotación o enzimas[cite: 205].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 25 / Pág. 205)"
  },
  {
    theme: 3,
    question: "Un proceso de blanqueo de pasta clasificado como ECF (Elemental Chlorine Free) utiliza como agente principal:",
    options: [
      "Dióxido de cloro (ClO2), evitando el uso de cloro elemental (Cl2).",
      "Cloro gas (Cl2) e hipoclorito sódico.",
      "Exclusivamente agua destilada y luz ultravioleta."
    ],
    correct: 0,
    explanation: "El blanqueo ECF sustituye el cloro elemental por dióxido de cloro ($ClO_2$) para reducir dioxinas[cite: 206].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 26 / Pág. 206)"
  },
  {
    theme: 3,
    question: "Para certificar un papel como TCF (Totally Chlorine Free), la secuencia de blanqueo debe emplear:",
    options: [
      "Oxígeno (O2), Ozono (O3), Peróxido de hidrógeno (H2O2) y enzimas.",
      "Dióxido de cloro y reactivos clorados de baja concentración.",
      "Ditionita de sodio combinada con cloro molecular."
    ],
    correct: 0,
    explanation: "El blanqueo TCF prescinde totalmente de cualquier compuesto clorado, recurriendo a compuestos oxigenados y enzimas[cite: 206].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 26 / Pág. 206)"
  },
  {
    theme: 3,
    question: "En el blanqueo de fibras recicladas o pastas mecánicas para papeles autocopiativos, un reactivo reductor específico utilizado es:",
    options: [
      "Ditionita de sodio (Na2S2O4) o Ácido formamidín sulfínico.",
      "Sosa cáustica concentrada.",
      "Ácido sulfúrico industrial."
    ],
    correct: 0,
    explanation: "La ditionita sódica ($Na_2S_2O_4$) y el ácido formamidín sulfínico se aplican en destintados y pastas mecánicas/autocopiativas[cite: 206].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 26 / Pág. 206)"
  },
  {
    theme: 3,
    question: "Durante la refinación de la pasta, las acciones físicas mecánicas que sufre la fibra al pasar entre el estator y el rotor son:",
    options: [
      "Batido, frote y corte.",
      "Prensado, secado y calandrado.",
      "Centrifugado, flotación y evaporación."
    ],
    correct: 0,
    explanation: "Las tres fases o acciones del refinado son el batido, el frote y el corte de las fibras[cite: 207].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 27 / Pág. 207)"
  },
  {
    theme: 3,
    question: "¿Qué diferencia la refinación 'magra' de la refinación 'grasa' en las propiedades del papel?",
    options: [
      "La refinación magra prima el corte de fibras (menor lisura), mientras que la grasa produce mayor frote e hidratación (mayor densidad y resistencia).",
      "La refinación magra añade aceite de oliva y la grasa añade parafina.",
      "La refinación grasa destruye la impermeabilidad del papel."
    ],
    correct: 0,
    explanation: "El refino graso incrementa la fibrilación y la hidratación de la celulosa, mejorando enlaces y densidad a costa del corte limpio (refino magro)[cite: 207].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 27 / Pág. 207)"
  },
  {
    theme: 3,
    question: "Los equipos industriales utilizados para efectuar el refinado de la pasta papelera son:",
    options: [
      "Pilas holandesas, refinadores cónicos y refinadores de disco.",
      "Filtros de prensa, autoclaves y centrifugadoras.",
      "Calandras de cepillado y bobinadoras."
    ],
    correct: 0,
    explanation: "El refinado se lleva a cabo mediante pilas holandesas (históricas) y refinadores continuos cónicos o de disco[cite: 207].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 27 / Pág. 207)"
  },
  {
    theme: 3,
    question: "En la fase de depuración de la suspensión acuosa previa a la caja de entrada, ¿qué tipo de depurador se utiliza para eliminar partículas de alta densidad o pesadas?",
    options: [
      "Depuradores centrífugos o cleaners.",
      "Depuradores probabilísticos.",
      "Filtros de tamizado de malla gruesa."
    ],
    correct: 0,
    explanation: "Los depuradores centrífugos (cleaners) separan impurezas pesadas por fuerza centrífuga, mientras que los probabilísticos retienen partículas grandes[cite: 209].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 29 / Pág. 209)"
  },

  // ==========================================
  // BLOQUE IV: FORMACIÓN, PRENSADO Y SECADO EN MÁQUINA (31-40)
  // ==========================================
  {
    theme: 4,
    question: "¿Cuál es la consistencia aproximada de la suspensión de fibra al salir del labio de la caja de entrada hacia la mesa de fabricación?",
    options: [
      "Alrededor del 1% de fibra y 99% de agua.",
      "Alrededor del 10% de fibra y 90% de agua.",
      "Alrededor del 50% de fibra y 50% de agua."
    ],
    correct: 0,
    explanation: "Para asegurar una formación homogénea sin grumos, la consistencia en la cabeza de máquina se mantiene en torno al 1% de sólidos[cite: 210].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 30 / Pág. 210)"
  },
  {
    theme: 4,
    question: "En la mesa de fabricación (tela sin fin), el movimiento que orienta las fibras y determina las propiedades de la hoja se divide en:",
    options: [
      "Movimiento longitudinal (que da el sentido de fibra) y movimiento transversal o traqueo (que orienta las fibras cruzadas).",
      "Movimiento circular y movimiento ascendente.",
      "Rotación centrífuga y aspiración por aire."
    ],
    correct: 0,
    explanation: "El avance de la tela marca la dirección longitudinal (sentido de fibra), mientras que la agitación transversal (traqueo) entrelaza las fibras[cite: 211].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 31 / Pág. 211)"
  },
  {
    theme: 4,
    question: "Durante el paso por la mesa de fabricación (Fourdrinier), ¿qué porcentaje de humedad se elimina en la etapa de desgote primario?",
    options: [
      "Un 20% de eliminación de humedad.",
      "Un 80% de eliminación de humedad.",
      "Un 1% de eliminación de humedad."
    ],
    correct: 0,
    explanation: "El desgote sobre la tela sin fin consigue retirar aproximadamente un 20% de la humedad total[cite: 211].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 31 / Pág. 211)"
  },
  {
    theme: 4,
    question: "En la sección de prensado, la acción combinada de presión y fieltros logra eliminar un 20% adicional de agua, produciendo además los siguientes efectos:",
    options: [
      "Aumentar la densidad y disminuir la permeabilidad, porosidad y absorbencia.",
      "Disminuir la densidad y aumentar el espesor libre.",
      "Destruir los enlaces de hidrógeno del papel."
    ],
    correct: 0,
    explanation: "El prensado compacta la estructura, aumentando la densidad aparente y reduciendo porosidad, permeabilidad y capacidad absorbente[cite: 212].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 32 / Pág. 212)"
  },
  {
    theme: 4,
    question: "En la sección de secado mediante cilindros con vapor de agua, las fibras de la hoja experimentan un encogimiento asimétrico de:",
    options: [
      "2% en sentido longitudinal y 20% en sentido transversal.",
      "20% en sentido longitudinal y 2% en sentido transversal.",
      "10% uniforme en ambas direcciones."
    ],
    correct: 0,
    explanation: "La tensión de la banda limita la retracción a lo largo (2%), mientras que la anchura encoge libremente hasta un 20%[cite: 213].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 33 / Pág. 213)"
  },
  {
    theme: 4,
    question: "Un exceso de calor durante la fase de secado puede provocar en la hoja de papel los siguientes defectos, EXCEPTO:",
    options: [
      "Incremento de la resistencia al arrancado.",
      "Fragilidad de la hoja y electricidad estática.",
      "Inestabilidad dimensional, ampollas y abarquillado."
    ],
    correct: 0,
    explanation: "El sobrecalentamiento vuelve frágil la fibra y genera problemas térmicos/estáticos, pero no mejora la resistencia al arrancado[cite: 213].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 33 / Pág. 213)"
  },
  {
    theme: 4,
    question: "Para la aplicación de tratamientos superficiales dentro de máquina (alrededor de $10\\text{ g/m}^2$), se utilizan los siguientes sistemas:",
    options: [
      "Size-press, speed-sizer, gate-roll y bill-blade.",
      "Impresoras CTP y rodillos anilox.",
      "Pilas holandesas y batidores de hélice."
    ],
    correct: 0,
    explanation: "Los cuatro métodos de tratamiento en máquina citados son Size-press, Speed-sizer, Gate-roll y Bill-blade[cite: 214].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 34 / Pág. 214)"
  },
  {
    theme: 4,
    question: "En el estucado fuera de máquina, la aplicación mediante el método de 'Labio Soplador' se caracteriza por depositar una capa de salsa de estuco de:",
    options: [
      "20 a 40 g/m².",
      "10 a 20 g/m².",
      "1 a 5 g/m²."
    ],
    correct: 0,
    explanation: "El método de labio soplador (Air Knife) permite capas gruesas de 20 a 40 g/m², frente a los 10-20 g/m² de la rasqueta[cite: 215].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 35 / Pág. 215)"
  },
  {
    theme: 4,
    question: "Entre los procesos de acabado mecánico posteriores a la fabricación del papel se incluyen:",
    options: [
      "Rebobinadora, calandra, cepilladora, gofradora, acondicionadora y cortadora.",
      "Caja de entrada, manifold y mesa Fourdrinier.",
      "Digestor de cocción y tanque de destintado."
    ],
    correct: 0,
    explanation: "Los acabados finales del soporte engloban calandrado, cepillado, gofrado, acondicionado, cortado y embalaje[cite: 216].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 36 / Pág. 216)"
  },
  {
    theme: 4,
    question: "El acabado de estucado denominado 'Cast Coated' o de Alto Brillo se obtiene mediante:",
    options: [
      "El secado de la capa de estuco en contacto contra un cilindro secador cromado de gran diámetro con superficie espejada.",
      "El cepillado con ceras vegetales a alta velocidad.",
      "La inmersión del pliego en baños de barniz sintético."
    ],
    correct: 0,
    explanation: "El papel Cast Coated seca la salsa presionada contra un cilindro cromado a espejo de alto brillo[cite: 215].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 35 / Pág. 215)"
  },

  // ==========================================
  // BLOQUE V: TIPOS DE PAPELES Y CARTONES (41-50)
  // ==========================================
  {
    theme: 5,
    question: "Al utilizar papeles estucados industriales en rotativas de secado térmico Heat-set, el técnico debe prestar especial atención a:",
    options: [
      "La temperatura del horno de secado para evitar la aparición de ampollado (blistering).",
      "La dirección de las puntizones del papel.",
      "El gramaje de las resinas de pino en la masa."
    ],
    correct: 0,
    explanation: "En rotativas offset heat-set con papeles estucados 2/c, un calor excesivo evapora bruscamente el agua atrapada causando ampollas[cite: 218, 275].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 38 y 95 / Págs. 218 y 275)"
  },
  {
    theme: 5,
    question: "Para la confección de etiquetas de envases lavables o recuperables (como botellas de cerveza), se emplea un soporte estucado especial denominado:",
    options: [
      "Papel melaminado.",
      "Papel crespado.",
      "Papel de estraza."
    ],
    correct: 0,
    explanation: "Las etiquetas para envases reutilizables/recuperables requieren papel melaminado resistente al agua alcalina del lavado[cite: 218].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 38 / Pág. 218)"
  },
  {
    theme: 5,
    question: "Para considerar un soporte como 'Papel Reciclado', la normativa exige que contenga una proporción mínima de fibras secundarias del:",
    options: [
      "Como mínimo el 75%.",
      "Como mínimo el 50%.",
      "100% obligatorio sin aditivos."
    ],
    correct: 0,
    explanation: "El criterio oficial de clasificación exige al menos un 75% de fibras secundarias/recuperadas[cite: 222].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 42 / Pág. 222)"
  },
  {
    theme: 5,
    question: "Un papel se clasifica con la etiqueta medioambiental de 'Papel Ecológico' cuando durante el blanqueo el nivel de AOX es:",
    options: [
      "Inferior a 0,2 kg por tonelada de pasta seca.",
      "Inferior a 5,0 kg por tonelada de pasta seca.",
      "Cero absoluto sin presencia de agua."
    ],
    correct: 0,
    explanation: "Un papel ecológico exige una tasa de compuestos orgánicos halogenados (AOX) $< 0,2\\text{ kg/tn}$ de pasta seca[cite: 222].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 42 / Pág. 222)"
  },
  {
    theme: 5,
    question: "El papel verjurado se distingue por mostrar al trasluz unas líneas finas horizontales y otras más gruesas y separadas que las cortan, llamadas:",
    options: [
      "Puntizones (las horizontales juntas) y Corondeles (las separadas perpendiculares).",
      "Traqueidas y Vasos.",
      "Filigranas y Marcas de agua."
    ],
    correct: 0,
    explanation: "La huella de la verjurada forma los puntizones (líneas juntas) y los corondeles (líneas perpendiculares separadas)[cite: 226].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 46 / Pág. 226)"
  },
  {
    theme: 5,
    question: "Dentro de la gama de papeles de embalaje tipo Kraft, la variedad de mayor calidad fabricada con fibra larga de pastas de importación es el:",
    options: [
      "Kraft liner.",
      "Kraft tercera.",
      "Papel de estraza común."
    ],
    correct: 0,
    explanation: "El Kraft liner se elabora con pasta virgen de fibra larga de alta resistencia mecánica[cite: 227].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 47 / Pág. 227)"
  },
  {
    theme: 5,
    question: "Las cartulinas no estucadas (gramajes entre 250 y 450 g/m²) compuestas por tres capas unidas en húmedo se clasifican como:",
    options: [
      "Tríplex (ej. Cartulina Brístol).",
      "Dúplex (ej. Opalina).",
      "Cartoncillo gris."
    ],
    correct: 0,
    explanation: "Las cartulinas no estucadas de 3 capas son tríplex (como la Brístol), las de 2 capas son dúplex (Opalina) y de 1 capa Manila[cite: 229].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 49 / Pág. 229)"
  },
  {
    theme: 5,
    question: "En las cartulinas estucadas para envases tipo Folding, la estructura de capas se distribuye en:",
    options: [
      "Cara (A) de pasta química blanqueada, Tripa (B) de pasta mecánica (que da rigidez) y Reverso (C).",
      "Tres capas idénticas de papel prensa reciclado.",
      "Una cara de aluminio y dos de plástico."
    ],
    correct: 0,
    explanation: "El folding combina caras externas estucadas con una tripa gruesa de pasta mecánica que le aporta elevada rigidez[cite: 230].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 50 / Pág. 230)"
  },
  {
    theme: 5,
    question: "En la estructura del cartón ondulado, los dos elementos fundamentales que lo componen se denominan:",
    options: [
      "Liner (papel liso exterior/interior) y Medium o Flauta (papel ondulado central).",
      "Cara A y Reverso C.",
      "Capa vegetal y capa sintética."
    ],
    correct: 0,
    explanation: "El cartón ondulado consta de hojas lisas exteriores (liner) y la onda central troquelada (medium o material de flauta)[cite: 232].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 52 / Pág. 232)"
  },
  {
    theme: 5,
    question: "Según la frecuencia de la flauta, el cartón ondulado se comercializa según el número de ondas por metro, siendo los valores estandarizados:",
    options: [
      "118, 138, 167 y 315 ondas por metro.",
      "10, 20, 30 y 40 ondas por metro.",
      "1.000 ondas por metro exclusivamente."
    ],
    correct: 0,
    explanation: "El número normalizado de flautas en cartón ondulado comprende 118, 138, 167 y 315 ondas/m[cite: 233].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 53 / Pág. 233)"
  },

  // ==========================================
  // BLOQUE VI: FORMATOS, UNIDADES Y COMPRA DE PAPEL (51-60)
  // ==========================================
  {
    theme: 6,
    question: "Según la serie normalizada ISO A (norma DIN 476), las medidas exactas del formato base A0 y del formato común A4 son:",
    options: [
      "A0 = 841 x 1189 mm; A4 = 210 x 297 mm.",
      "A0 = 700 x 1000 mm; A4 = 215 x 315 mm.",
      "A0 = 1000 x 1400 mm; A4 = 200 x 300 mm."
    ],
    correct: 0,
    explanation: "El pliego A0 mide $841 \\times 1189\\text{ mm}$ ($1\\text{ m}^2$) y por sucesivas divisiones se llega al A4 de $210 \\times 297\\text{ mm}$[cite: 235].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 55 / Pág. 235)"
  },
  {
    theme: 6,
    question: "En el recuento de papel en resmas, ¿a cuántos pliegos equivale 1 Bala y cómo se desglosa 1 Mano?",
    options: [
      "1 Bala = 10 resmas (5.000 pliegos); 1 Mano = 5 cuadernillos (25 hojas).",
      "1 Bala = 20 resmas (10.000 pliegos); 1 Mano = 10 cuadernillos.",
      "1 Bala = 2 resmas; 1 Mano = 100 pliegos."
    ],
    correct: 0,
    explanation: "1 Resma = 500 pliegos = 20 manos. Por tanto 1 Bala (10 resmas) = 5.000 pliegos. 1 Mano son 5 cuadernillos de 5 hojas (25 hojas)[cite: 237].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 57 / Pág. 237)"
  },
  {
    theme: 6,
    question: "Al realizar pedidos de fabricación especial de papel en hojas, la tolerancia admisible en el gramaje suministrado es de:",
    options: [
      "± 4%.",
      "± 10%.",
      "± 0,1%."
    ],
    correct: 0,
    explanation: "Las condiciones comerciales de fabricación de papel aceptan una variación de gramaje de $\\pm 4\\%$ sobre lo especificado[cite: 238].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 58 / Pág. 238)"
  },
  {
    theme: 6,
    question: "Las tolerancias dimensionales en las medidas del pliego de papel cortado en fabricación son:",
    options: [
      "± 1,5 mm (<15 cm), ± 2 mm (15-60 cm) y ± 3 mm (>60 cm).",
      "± 10 mm en todos los formatos.",
      "Cero mm sin margen de error."
    ],
    correct: 0,
    explanation: "La tolerancia varía según el tamaño del pliego: $\\pm 1,5\\text{ mm}$ para pequeños, $\\pm 2\\text{ mm}$ medianos y $\\pm 3\\text{ mm}$ superiores a $60\\text{ cm}$[cite: 238].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 58 / Pág. 238)"
  },
  {
    theme: 6,
    question: "En España, la numeración comercial del cartón en hojas (ej. Cartón N.º 3) responde a la siguiente regla:",
    options: [
      "Representa la centésima parte del peso en gramos de un pliego de formato 75 x 105 cm (N.º 3 = 300 g/pliego = 380 g/m²).",
      "Equivale exactamente al grosor en milímetros.",
      "Representa el número de capas de cola vegetal."
    ],
    correct: 0,
    explanation: "El número comercial del cartón en España indica la centésima parte del peso en gramos de la hoja patrón de $75 \\times 105\\text{ cm}$[cite: 241, 242].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 61 y 62 / Págs. 241 y 242)"
  },
  {
    theme: 6,
    question: "La fórmula para calcular el peso en kg de una resma (500 pliegos) conociendo el Ancho (A cm), Largo (L cm) y Gramaje (G g/m²) es:",
    options: [
      "Kg / resma = (A x L x G) / 20.000",
      "Kg / resma = (A x L x G) / 1.000",
      "Kg / resma = (A x L x G) / 100"
    ],
    correct: 0,
    explanation: "La constante de conversión para calcular el peso de 500 pliegos en cm es dividir el producto de cotas y gramaje entre $20.000$[cite: 251].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 71 / Pág. 251)"
  },
  {
    theme: 6,
    question: "Los anchos de bobina más habituales en el suministro industrial de papel son:",
    options: [
      "63 cm, 90 cm y 120 cm.",
      "10 cm, 20 cm y 30 cm.",
      "200 cm, 300 cm y 500 cm."
    ],
    correct: 0,
    explanation: "El manual recoge como anchos estándar de bobinas las medidas de $63\\text{ cm}$, $90\\text{ cm}$ y $120\\text{ cm}$[cite: 236].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 56 / Pág. 236)"
  },
  {
    theme: 6,
    question: "Al comprar cartón en hojas de distribución comercial, un paquete de cartón del N.º 10 ($1000\\text{ g/pliego}$) se suministra habitualmente en paquetes de:",
    options: [
      "50 hojas por paquete.",
      "500 hojas por paquete.",
      "1.000 hojas por paquete."
    ],
    correct: 0,
    explanation: "Para pesos de resma superiores a $100\\text{ kg}$ (como el cartón N.º 10 de $500\\text{ kg/resma}$), los paquetes se reducen a 50 hojas[cite: 239]."
  },
  {
    theme: 6,
    question: "En la compra de papel en bobinas, la facturación por parte del fabricante se efectúa siempre en función de:",
    options: [
      "El peso real certificado de la bobina.",
      "El número teórico de metros lineales impresos.",
      "El color del mandril interior."
    ],
    correct: 0,
    explanation: "Las bobinas de papel y cartón se facturan estrictamente por su peso neto real en báscula[cite: 240]."
  },
  {
    theme: 6,
    question: "Para medir con precisión métrica el espesor o calibre individual de una hoja de papel o cartón se utiliza:",
    options: [
      "Un micrómetro o palmer de precisión para papel.",
      "Un espectrofotómetro de reflectancia.",
      "Un densitómetro de transmisión."
    ],
    correct: 0,
    explanation: "El calibre se mide en micras mediante un palmer/micrómetro especial provisto de platos para no deformar la muestra[cite: 252, 253]."
  },

  // ==========================================
  // BLOQUE VII: PROPIEDADES ÓPTICAS Y FÍSICO-MECÁNICAS (61-70)
  // ==========================================
  {
    theme: 7,
    question: "El patrón de referencia fotométrico que representa el 100% de blancura teórica en el calibrado de aparatos es:",
    options: [
      "El Óxido de Magnesio (MgO).",
      "El Dióxido de Titanio (TiO2).",
      "El Carbonato Cálcico (CaCO3)."
    ],
    correct: 0,
    explanation: "El estándar de calibración fotométrica para el 100% de blancura absoluta es el óxido de magnesio ($MgO$)[cite: 244, 245].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 64 y 65 / Págs. 244 y 245)"
  },
  {
    theme: 7,
    question: "La Grado de Blancura de un soporte se mide mediante la reflectancia difusa intrínseca a una longitud de onda de:",
    options: [
      "457 nanómetros (zona del azul-violeta, complementaria del amarillo a 574 nm).",
      "585 nanómetros (zona del amarillo-naranja).",
      "700 nanómetros (zona del rojo)."
    ],
    correct: 0,
    explanation: "Se eligen los $457\\text{ nm}$ por ser la longitud de onda complementaria del amarillo ($574\\text{ nm}$), detectando el amarilleamiento del papel[cite: 274].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 94 / Pág. 274)"
  },
  {
    theme: 7,
    question: "En la escala del espectro visible, las longitudes de onda correspondientes al color verde comprenden el rango de:",
    options: [
      "485 a 570 nm.",
      "400 a 430 nm.",
      "610 a 700 nm."
    ],
    correct: 0,
    explanation: "El espectro visible asigna al verde las longitudes entre $485$ y $570\\text{ nm}$[cite: 246].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 66 / Pág. 246)"
  },
  {
    theme: 7,
    question: "La relación entre la Densidad Aparente ($g/cm^3$) y el Volumen Específico ($cm^3/g$) de un papel se caracteriza por ser:",
    options: [
      "Inversamente proporcionales ($V_{específico} = 1 / D_{aparente}$).",
      "Directamente proporcionales.",
      "Iguales a la constante de Planck."
    ],
    correct: 0,
    explanation: "El volumen específico es el recíproco de la densidad aparente del papel[cite: 253].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 73 / Pág. 253)"
  },
  {
    theme: 7,
    question: "Para medir la porosidad del papel se evalúa el tiempo necesario para que un volumen de aire traviese el soporte bajo condiciones norma. Los valores estandarizados son:",
    options: [
      "100 cm³ de aire a través de 6,5 cm² de superficie de papel.",
      "1.000 cm³ de aire a través de 1 m² de papel.",
      "1 litro de aire a través de 1 cm²."
    ],
    correct: 0,
    explanation: "La porosidad estandarizada (Gurley) mide el tiempo que tardan $100\\text{ cm}^3$ de aire en pasar por $6,5\\text{ cm}^2$ de papel[cite: 255].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 75 / Pág. 255)"
  },
  {
    theme: 7,
    question: "El brillo de un papel (medido como porcentaje de luz reflejada con el mismo ángulo de incidencia) clasifica los papeles mates en el rango de:",
    options: [
      "5% al 20% de brillo.",
      "20% al 40% de brillo.",
      "40% al 80% de brillo."
    ],
    correct: 0,
    explanation: "Los papeles mates presentan un brillo de 5-20%, los satinados de 20-40% y los brillantes de 40-80%[cite: 250].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 70 / Pág. 250)"
  },
  {
    theme: 7,
    question: "Un refinado excesivo de la pasta de papel produce sobre la opacidad del soporte el siguiente efecto:",
    options: [
      "Disminuye la opacidad porque las fibras se hidratan y se vuelven más transparentes al unirse íntimamente.",
      "Aumenta la opacidad de forma ilimitada.",
      "No altera la transmisión de la luz."
    ],
    correct: 0,
    explanation: "La celulosa pura es transparente; al refinarse mucho (refino graso), desaparecen los poros de aire que dispersaban la luz, reduciendo la opacidad[cite: 249].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 69 / Pág. 249)"
  },
  {
    theme: 7,
    question: "¿Qué tipo de lisura superficial es irrelevante para la impresión offset pero crítica para la tipografía y el huecograbado?",
    options: [
      "La lisura de comportamiento (compresibilidad bajo presión de impresión).",
      "La lisura aparente u óptica.",
      "La lisura química de la matriz."
    ],
    correct: 0,
    explanation: "El caucho del offset se adapta a la rugosidad, pero el huecograbado y la tipografía exigen alta lisura de comportamiento para no dejar celdas sin transferir[cite: 258].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 78 / Pág. 258)"
  },
  {
    theme: 7,
    question: "Respecto al sentido de fibra del papel, las siguientes afirmaciones son correctas, EXCEPTO:",
    options: [
      "El papel ofrece mayor resistencia al rasgado en sentido de fibra que en contrafibra.",
      "El papel se dobla y rasga con mayor facilidad a favor de fibra.",
      "El papel presenta mayor estabilidad dimensional y rigidez en el sentido de fibra."
    ],
    correct: 0,
    explanation: "La resistencia al rasgado es mayor en CONTRAFIBRA porque el desgarro debe romper físicamente el cuerpo de las fibras cruzadas[cite: 262, 278].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 82 y 98 / Págs. 262 y 278)"
  },
  {
    theme: 7,
    question: "En la maquetación y confección de libros, ¿cómo debe disponerse el sentido de fibra del papel respecto al lomo?",
    options: [
      "El sentido de fibra debe ser siempre paralelo al lomo del libro.",
      "El sentido de fibra debe ser perpendicular al lomo.",
      "Es indiferente y no afecta a la apertura del libro."
    ],
    correct: 0,
    explanation: "Para garantizar la flexibilidad de hojeado y evitar arrugas en el cosido, la fibra debe discurrir paralela al lomo[cite: 262].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 82 / Pág. 262)"
  },

  // ==========================================
  // BLOQUE VIII: COMPORTAMIENTO FISICOQUÍMICO Y ENSAYOS (71-80)
  // ==========================================
  {
    theme: 8,
    question: "El agua absorbida por el papel a nivel de sus poros y huecos estructurales puede alcanzar un contenido de humedad de hasta:",
    options: [
      "Hasta un 300% de humedad.",
      "Un 4% de humedad máximo.",
      "Un 25% de humedad máximo."
    ],
    correct: 0,
    explanation: "El agua retenida en los macroporos intercelulares puede superar el 300% de la masa seca, a diferencia del agua química (<4%) o capilar (25%)[cite: 263].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 83 / Pág. 263)"
  },
  {
    theme: 8,
    question: "Cuando un pliego de papel cede humedad al ambiente seco se produce un efecto visual conocido como:",
    options: [
      "Abollamiento de la hoja (mientras que si gana humedad se ondula en los bordes).",
      "Transparencia cristalina.",
      "Aumento del gramaje."
    ],
    correct: 0,
    explanation: "La pérdida de agua encoge los bordes creando un abollado central, mientras que la ganancia dilata los bordes provocando ondulación[cite: 263].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 83 / Pág. 263)"
  },
  {
    theme: 8,
    question: "En los ensayos de estabilidad dimensional, el alargamiento máximo por humedad de un papel no debe superar:",
    options: [
      "El 2,5%.",
      "El 15,0%.",
      "El 50,0%."
    ],
    correct: 0,
    explanation: "Para evitar fallos graves de registro en imprenta, la dilatación higroscópica límite es del 2,5%[cite: 265].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 85 / Pág. 265)"
  },
  {
    theme: 8,
    question: "Un pH demasiado ácido del papel (< 7) genera en el proceso de impresión offset los siguientes problemas:",
    options: [
      "Emulsificación de la tinta con el agua, retraso del secado y envejecimiento prematuro del soporte.",
      "Engrases generalizados en la plancha.",
      "Corte cóncavo de las guillotinas."
    ],
    correct: 0,
    explanation: "La acidez inhibe los secantes de la tinta (retrasando el oxidosecado) y favorece la emulsificación con la solución de mojado[cite: 271].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 91 / Pág. 271)"
  },
  {
    theme: 8,
    question: "Por el contrario, un pH demasiado alcalino o básico del papel causa en máquina:",
    options: [
      "Engrases y velo en las zonas no impresas de la plancha offset.",
      "Secado instantáneo en los rodillos.",
      "Fragilidad e ignición de la hoja."
    ],
    correct: 0,
    explanation: "Valores alcalinos elevados reaccionan con la solución de mojado destruyendo la capa hidrófila de la plancha y produciendo engrases[cite: 271].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 91 / Pág. 271)"
  },
  {
    theme: 8,
    question: "Para medir la resistencia del papel al arrancado provocado por el tiro de las tintas viscosas se utilizan en laboratorio:",
    options: [
      "Las Ceras Dennison graduadas o los aparatos de prueba de estampación IGT.",
      "El medidor de porosidad Gurley.",
      "El densitómetro de reflexión de filtro polarizado."
    ],
    correct: 0,
    explanation: "El arranque de fibra/estuco se evalúa con la serie de Ceras Dennison de adhesividad creciente o con los equipos IGT[cite: 279].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 99 / Pág. 279)"
  },
  {
    theme: 8,
    question: "La Resistencia al Plegado de un papel (número de dobles pliegues que soporta antes de romper) presenta los siguientes comportamientos, EXCEPTO:",
    options: [
      "Disminuye al aumentar el refinado de la pasta.",
      "Es mayor en la dirección de contrafibra.",
      "Disminuye con el envejecimiento del papel y al aumentar la cantidad de cargas."
    ],
    correct: 0,
    explanation: "La resistencia al plegado AUMENTA con la refinación (mayor hidratación de fibras), por lo que es falso que disminuya al refinarse[cite: 280].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 100 / Pág. 280)"
  },
  {
    theme: 8,
    question: "Al someter el papel a elevadas temperaturas, ¿a partir de qué rango térmico las fibras pierden agua constitucional e inician su degradación física irreversible?",
    options: [
      "De 130 °C a 150 °C.",
      "De 40 °C a 50 °C.",
      "A más de 500 °C únicamente."
    ],
    correct: 0,
    explanation: "A temperaturas de $130-150^\\circ\\text{C}$ disminuye la resistencia al rasgado/plegado/arrancado por degradación celular[cite: 286].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 106 / Pág. 286)"
  },
  {
    theme: 8,
    question: "¿Qué propiedad de seguridad integrada en algunos papeles especiales permite su verificación al trasluz para impedir falsificaciones?",
    options: [
      "La marca de agua o filigrana.",
      "El calibre micrométrico.",
      "El grado de encolado Cobb 60."
    ],
    correct: 0,
    explanation: "La marca de agua o filigrana crea variaciones de espesor de fibra visibles al trasluz como elemento anticopia[cite: 287].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 107 / Pág. 287)"
  },
  {
    theme: 8,
    question: "En las impresoras láser y fotocopiadoras en caliente, para evitar atascamientos por deformación térmica se requiere mantener el papel acondicionando a una H.R. de:",
    options: [
      "Un 40% de Humedad Relativa constante.",
      "Un 90% de Humedad Relativa.",
      "Un 5% de Humedad Relativa."
    ],
    correct: 0,
    explanation: "Las fotocopiadoras e impresoras láser exigen un acondicionamiento del papel al 40% H.R. para soportar el calor del fusor[cite: 290].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 110 / Pág. 290)"
  },

  // ==========================================
  // BLOQUE IX: ANATOMÍA TIPOGRÁFICA Y TIPOMETRÍA (81-90)
  // ==========================================
  {
    theme: 9,
    question: "En la anatomía de un carácter tipográfico, las tres zonas verticales de la cara o relieve se denominan:",
    options: [
      "Ojo superior o cabeza, Ojo medio o altura-x y Ojo inferior o pie.",
      "Asta, remate y terminal.",
      "Cuerpo, blanco de trazo y rasgo."
    ],
    correct: 0,
    explanation: "La cara impresora se divide en ojo superior (ascendentes), ojo medio (altura-x de minúsculas) u ojo inferior (descendentes)[cite: 293].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 113 / Pág. 293)"
  },
  {
    theme: 9,
    question: "Según el perfil geométrico de su trazo, las astas de un tipo móvil pueden clasificarse en:",
    options: [
      "Rectas, curvas y mixtas.",
      "Ascendentes, medias y descendentes.",
      "Moduladas y uniformes."
    ],
    correct: 0,
    explanation: "Por su PERFIL, las astas son rectas, curvas o mixtas (mientras que por su altura son ascendentes/medias/descendentes)[cite: 294].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 114 / Pág. 294)"
  },
  {
    theme: 9,
    question: "Entre las formas estilísticas de remates o terminales tipográficos descritas en el manual se incluyen:",
    options: [
      "Mixtiforme (clásico), rectilindo, filiforme, cuadrangular, redondeado e insinuado.",
      "Trazo fino, trazo grueso y trazo medio.",
      "Gótico, romano y egipcio."
    ],
    correct: 0,
    explanation: "Los remates descritos son mixtiforme, rectilíneo, filiforme, cuadrangular/rectangular, redondeado/lobulado e insinuado[cite: 295].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 115 / Pág. 295)"
  },
  {
    theme: 9,
    question: "Las cuatro grandes familias históricas del estilo Gótico son:",
    options: [
      "Gótica de forma (Textur), Gótica de fractura (Fraktur), Gótica cursiva (Schwabacher) y Gótica Redonda (Rundgotisch).",
      "Gótica Didot, Gótica Bodoni, Gótica Garamond y Gótica Baskerville.",
      "Gótica Incisa, Gótica Neoclásica, Gótica Lineal y Gótica Fantasía."
    ],
    correct: 0,
    explanation: "Las cuatro variantes góticas clasificadas son Textur, Fraktur, Schwabacher y Rundgotisch[cite: 296].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 116 / Pág. 296)"
  },
  {
    theme: 9,
    question: "En el Sistema Tipográfico Europeo (Didot), la equivalencia exacta del Punto Didot y de la Cícera en milímetros es:",
    options: [
      "1 punto Didot = 0,376 mm (0,376065 mm); 1 Cícera = 12 puntos Didot = 4,512 mm.",
      "1 punto Didot = 0,351 mm; 1 Cícera = 10 puntos Didot = 3,510 mm.",
      "1 punto Didot = 0,500 mm; 1 Cícera = 20 puntos Didot = 10,000 mm."
    ],
    correct: 0,
    explanation: "1 punto Didot $= 0,376065\\text{ mm}$ y 1 Cícera ($12\\text{ pt Didot}$) $= 4,51278\\text{ mm}$[cite: 307].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 127 / Pág. 307)"
  },
  {
    theme: 9,
    question: "En el Sistema Tipográfico Angloamericano (Pica), la equivalencia exacta del Punto de Pica y de la Pica es:",
    options: [
      "1 punto de Pica = 0,351 mm (0,3514729 mm); 1 Pica = 12 puntos de Pica = 4,212 mm.",
      "1 punto de Pica = 0,376 mm; 1 Pica = 12 puntos = 4,512 mm.",
      "1 punto de Pica = 0,250 mm; 1 Pica = 10 puntos = 2,500 mm."
    ],
    correct: 0,
    explanation: "1 punto de Pica $= 0,3514729\\text{ mm}$ y 1 Pica ($12\\text{ pt Pica}$) $= 4,21767\\text{ mm}$[cite: 308].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 128 / Pág. 308)"
  },
  {
    theme: 9,
    question: "Para medir físicamente sobre papel el cuerpo tipográfico, la interlínea y el ancho de columna se utiliza la regla graduada denominada:",
    options: [
      "Tipómetro.",
      "Goniómetro.",
      "Micrómetro de contacto."
    ],
    correct: 0,
    explanation: "El tipómetro es la regla transparente graduada en puntos Didot, cíceras, picas y milímetros[cite: 308].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 128 / Pág. 308)"
  },
  {
    theme: 9,
    question: "El ajuste óptico o espacio lateral proporcional que se reduce entre dos caracteres adyacentes para lograr un blanco armónico se denomina:",
    options: [
      "Kerning o interlineado selectivo.",
      "Tracking global de bloque.",
      "Cuerpo de la mancha."
    ],
    correct: 0,
    explanation: "El Kerning compensa el espacio en blanco sobrante entre pares de letras conflictivas (ej. AV, WA)[cite: 306, 309].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 126 y 129 / Págs. 306 y 309)"
  },
  {
    theme: 9,
    question: "La línea imaginaria horizontal sobre la que reclinan y descansan las bases de las letras mayúsculas y el ojo medio de las minúsculas se denomina:",
    options: [
      "Línea base (Baseline).",
      "Línea de ascendentes.",
      "Línea de altura de caja baja."
    ],
    correct: 0,
    explanation: "La línea base soporta el cuerpo principal de los caracteres excluyendo los rasgos descendentes[cite: 306].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 126 / Pág. 306)"
  },
  {
    theme: 9,
    question: "Un tipo de letra en formato Bitmap de mapa de bits presenta las siguientes limitaciones técnicas en preimpresión:",
    options: [
      "No es escalable, produce bordes dentados de pixelado a alta resolución y está obsoleto en artes gráficas.",
      "Requiere procesadores Bézier de cuarto grado.",
      "Ocupa gigabytes de espacio por cada letra."
    ],
    correct: 0,
    explanation: "Las fuentes Bitmap están formadas por cuadrículas fijas de píxeles que pierden calidad al escalar, siendo inviables en CTP[cite: 312].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 132 / Pág. 312)"
  },

  // ==========================================
  // BLOQUE X: TIPOGRAFÍA DIGITAL Y ORIGINALES (91-100)
  // ==========================================
  {
    theme: 10,
    question: "Las fuentes escalables en formato PostScript Type 1 desarrolladas por Adobe definen matemáticamente sus contornos vectoriales mediante:",
    options: [
      "Curvas polinómicas cúbicas de Bézier con puntos de anclaje y manetas de control.",
      "Mapas de bits de 300 ppi fijados.",
      "Ecuaciones sinusoidales de onda corta."
    ],
    correct: 0,
    explanation: "PostScript define los trazos mediante vectores basados en curvas Bézier de tercer grado[cite: 313].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 133 / Pág. 313)"
  },
  {
    theme: 10,
    question: "El formato de fuente tipográfica digital TrueType desarrollado por Apple se caracteriza por emplear en sus trazados:",
    options: [
      "Un único archivo que sirve tanto para la representación en pantalla como para la salida en impresora.",
      "Dos archivos independientes obligatorios (uno de pantalla y otro de impresora).",
      "Listas de coordenadas binarias no vectoriales."
    ],
    correct: 0,
    explanation: "TrueType simplificó el uso tipográfico reuniendo en un solo archivo las fuentes de pantalla e impresión[cite: 314].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 134 / Pág. 314)"
  },
  {
    theme: 10,
    question: "El formato tipográfico OpenType (desarrollado conjuntamente por Adobe y Microsoft) ofrece como ventajas principales:",
    options: [
      "Compatibilidad multiplataforma nativa (Mac OS y Windows), archivo único y capacidad Unicode de hasta 65.536 caracteres.",
      "Obliga a usar tipómetros de madera en el servidor.",
      "Limitación estricta a 256 caracteres del código ASCII estándar."
    ],
    correct: 0,
    explanation: "OpenType destaca por su funcionamiento multiplataforma de archivo único y la extensión Unicode hasta 65.536 glifos[cite: 315].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 135 / Pág. 315)"
  },
  {
    theme: 10,
    question: "Entre los programas informáticos líderes dedicados profesionalmente a la maquetación y composición de páginas se encuentran:",
    options: [
      "Adobe InDesign y QuarkXPress.",
      "FontLab Studio y Fontographer.",
      "CorelDRAW y Adobe Illustrator exclusivamente."
    ],
    correct: 0,
    explanation: "InDesign y QuarkXPress son los softwares de maquetación editorial indicados en el manual[cite: 316].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 136 / Pág. 316)"
  },
  {
    theme: 10,
    question: "Por otro lado, si la tarea técnica requiere la edición vectorización y creación de nuevas fuentes tipográficas, las aplicaciones de referencia son:",
    options: [
      "FontLab Studio y FontLab Fontographer.",
      "Microsoft Word y Apple Pages.",
      "Adobe Acrobat y Distiller."
    ],
    correct: 0,
    explanation: "El manual cita FontLab Studio y Fontographer como aplicaciones especializadas en diseño tipográfico[cite: 317].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 137 / Pág. 317)"
  },
  {
    theme: 10,
    question: "Los originales físicos procesados en el taller de preimpresión se clasifican según su comportamiento frente a la luz en:",
    options: [
      "Originales opacos (fotografías impresas, ilustraciones) u originales transparentes (diapositivas, negativos).",
      "Originales de mapa de bits u originales vectoriales.",
      "Originales digitales u originales analógicos de disco."
    ],
    correct: 0,
    explanation: "Los originales físicos son opacos (reflejan la luz) o transparentes (dejan pasar la luz a su través)[cite: 318].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 138 / Pág. 318)"
  },
  {
    theme: 10,
    question: "En la clasificación cromática de los originales, un arte final impreso con una única tinta directa (ej. Pantone azul) o en escala de grises se denomina:",
    options: [
      "Original monocromático.",
      "Original policromático.",
      "Original transparente."
    ],
    correct: 0,
    explanation: "Los originales compuestos por un solo color o tono se clasifican como monocromáticos[cite: 319].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 139 / Pág. 319)"
  },
  {
    theme: 10,
    question: "Un original policromático es aquel que exige para su reproducción la separación en cuatricromía basada en los colores primarios sustractivos:",
    options: [
      "Cian, Magenta, Amarillo y Negro (CMYK).",
      "Rojo, Verde y Azul (RGB).",
      "Tinta blanca y barniz brillante."
    ],
    correct: 0,
    explanation: "La reproducción cromática completa utiliza la síntesis sustractiva CMYK[cite: 195, 319].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 139 / Pág. 319)"
  },
  {
    theme: 10,
    question: "¿Qué ventaja ofrecen los originales digitales vectoriales respecto a los originales en mapa de bits al enviarse a producción?",
    options: [
      "Son independientes de la resolución de salida, permitiendo ampliaciones infinitas sin pérdida de nitidez en los contornos.",
      "Contienen millones de píxeles individuales fotografiados.",
      "Solo pueden imprimirse en máquinas tipográficas manuales."
    ],
    correct: 0,
    explanation: "Las imágenes vectoriales se rigen por fórmulas matemáticas, lo que evita la pixelación al escalar[cite: 195, 313].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 15 y 133 / Págs. 195 y 313)"
  },
  {
    theme: 10,
    question: "El archivo en formato abierto PDF/X (Portable Document Format for Exchange) es el estándar de entrega de artes finales en la industria porque:",
    options: [
      "Incrusta tipografías, imágenes en alta resolución, perfiles de color ICC y marcas de corte en un único contenedor autocontenido.",
      "Inhabilita el ripeado en las filmadoras CTP.",
      "Borra automáticamente los sangrados e imposiciones del documento."
    ],
    correct: 0,
    explanation: "El estándar PDF/X empaqueta de forma segura todos los elementos necesarios para garantizar una filmación e impresión sin alteraciones[cite: 186, 189].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 5 y 8 / Págs. 186 y 189)"
  },
  //const preguntasExamenArtesGraficasModoDificil2 = [
  // ==========================================
  // BLOQUE I: HISTORIA, FLUJO DE TRABAJO Y PREIMPRESIÓN (1-10)
  // ==========================================
  {
    theme: 1,
    question: "¿Qué avance técnico patentado a finales del siglo XIX por Karl Klietsch permitió la reproducción fotomecánica de imágenes mediante huecograbado industrial?",
    options: [
      "El fotograbado en rotograbado mediante tramado de la imagen.",
      "La linotipia de matriz caliente.",
      "La litografía offset sobre chapa de aluminio."
    ],
    correct: 0,
    explanation: "Karl Klietsch descubrió a finales del siglo XIX el fotograbado, aplicando tramados fotográficos a cilindros de cobre para la impresión en huecograbado.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 2 / Pág. 183)"
  },
  {
    theme: 1,
    question: "Dentro de la clasificación de productos gráficos, ¿en qué categoría se incluyen los envases de vino, sellos de correos, catálogos comerciales o cajetillas de tabaco?",
    options: [
      "Productos extraeditoriales.",
      "Productos paraeditoriales.",
      "Productos editoriales."
    ],
    correct: 0,
    explanation: "El manual engloba bajo la denominación de extraeditoriales a todo el material impreso comercial, de empaquetado, etiquetas, sellos o catálogos.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 3 / Pág. 184)"
  },
  {
    theme: 1,
    question: "En la fase de Preimpresión 1, el tratamiento inicial de los insumos gráficos abarca los siguientes procesos primarios:",
    options: [
      "Composición de textos, digitalización de imágenes y montaje de página.",
      "Ripeado, pruebas de color y filmación en plancha.",
      "Entonación, registro y tirada de prueba."
    ],
    correct: 0,
    explanation: "La Preimpresión 1 engloba la entrada y composición de textos, el escaneado/digitalización de imágenes y el ensamblado en montaje de página[cite: 188].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 7 / Pág. 188)"
  },
  {
    theme: 1,
    question: "¿Qué diferencia existe entre las tecnologías de filmación CTF y CTP en la salida de Preimpresión 2?",
    options: [
      "CTF (Computer to Film) filmación en película fotográfica que requiere montaje manual y insolado de plancha, mientras que CTP (Computer to Plate) graba directamente la plancha de impresión.",
      "CTF graba directamente la plancha y CTP imprime sobre el soporte de papel.",
      "Ambas tecnologías graban exclusivamente cilíndros de caucho."
    ],
    correct: 0,
    explanation: "El sistema CTF produce películas intermediate que exigen pasado a plancha, mientras que el CTP genera la plancha directamente desde los datos digitales[cite: 189, 195].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 8 y 15 / Págs. 189 y 195)"
  },
  {
    theme: 1,
    question: "En el flujo digital de preimpresión, el estándar de archivo contenedor utilizado universalmente para la transferencia segura de datos hacia el RIP es:",
    options: [
      "PDF (y PostScript PS).",
      "TIFF no comprimido de 16 bits.",
      "DOCX de Microsoft Word."
    ],
    correct: 0,
    explanation: "Los lenguajes estandarizados para el intercambio de páginas hacia los procesadores RIP e imposición son el PostScript (PS) y el PDF[cite: 189, 195].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 8 y 15 / Págs. 189 y 195)"
  },
  {
    theme: 1,
    question: "En las operaciones de alzamiento y embuchado dentro de la fase de Postimpresión, la diferencia técnica entre ambas consiste en:",
    options: [
      "El alzado superpone pliegos uno sobre otro (para encuadernación en lomo pegado o cosido), mientras que el embuchado inserta pliegos unos dentro de otros (para encuadernación a grapa).",
      "El alzado se realiza con guillotina y el embuchado con plegadora de bolsas.",
      "El embuchado es para pliegos de cartón ondulado y el alzado para papel cebolla."
    ],
    correct: 0,
    explanation: "El alzado apila los cuadernillos ordenadamente en bloque, mientras que el embuchado mete unos cuadernillos dentro de otros para grapado central[cite: 191, 195].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 10 y 15 / Págs. 191 y 195)"
  },
  {
    theme: 1,
    question: "Dentro de los marcos normativos de gestión de la calidad aplicados a la industria gráfica expuestos en el manual se citan:",
    options: [
      "El modelo de excelencia EFQM y las certificaciones ISO de gestión de calidad.",
      "La normativa ambiental OSHA exclusivamente.",
      "Las directivas CE de etiquetado textil."
    ],
    correct: 0,
    explanation: "El manual recoge como referencias de gestión de calidad en imprentas los certificados de sistemas ISO y la membresía del modelo EFQM[cite: 194].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 13 / Pág. 194)"
  },
  {
    theme: 1,
    question: "Según el esquema general del proceso gráfico, antes de autorizar la tirada definitiva en la máquina de impresión se debe realizar:",
    options: [
      "El ajuste de máquina: comprobación de registro y entonación.",
      "El troquelado de las muestras.",
      "La compresión de los archivos TIFF en el servidor DMZ."
    ],
    correct: 0,
    explanation: "La fase de preparación de máquina exige el ajuste preciso de registro y entonación antes de dar paso a la tirada masiva[cite: 195].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 15 / Pág. 195)"
  },
  {
    theme: 1,
    question: "En la infraestructura de red y comunicaciones de una imprenta, el servidor situado entre el Firewall interno y la conexión a Internet se ubica en la zona denominada:",
    options: [
      "DMZ (Zona Desmilitarizada).",
      "Caja de cabeza.",
      "Subred CTP."
    ],
    correct: 0,
    explanation: "El esquema de comunicaciones de la imprenta dispone el servidor de intercambio de archivos en una zona perimetral protegida DMZ.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 11 / Pág. 192)"
  },
  {
    theme: 1,
    question: "En la etapa de Preimpresión 2, la función prioritaria de la 'Prueba de Contrato' es:",
    options: [
      "Servir de referencia cromática y legal vinculante aprobada por el cliente antes de la filmación y tirada.",
      "Comprobar el plegado físico del folleto.",
      "Calcular el consumo de fueloil de la secadora."
    ],
    correct: 0,
    explanation: "La prueba de contrato es la simulación certificada de color firmada por el cliente (Ok) que la imprenta debe reproducir fielmente[cite: 189, 195].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 8 y 15 / Págs. 189 y 195)"
  },

  // ==========================================
  // BLOQUE II: MATERIAS PRIMAS PAPELERAS Y QUÍMICA FIBRILAR (11-20)
  // ==========================================
  {
    theme: 2,
    question: "¿Qué contenido porcentual aproximado de celulosa pura poseen las fibras textiles no madereras de cáñamo y lino?",
    options: [
      "Alrededor del 80% de celulosa.",
      "Alrededor del 45% de celulosa.",
      "Menos del 20% de celulosa."
    ],
    correct: 0,
    explanation: "El manual especifica que mientras el algodón supera el 90% y la madera está entre 45-60%, el cáñamo y el lino contienen un 80% de celulosa.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "La fórmula química empírica $(C_6H_{10}O_5)_n$ corresponde al componente principal del papel denominado:",
    options: [
      "Celulosa.",
      "Lignina.",
      "Hemicelulosa."
    ],
    correct: 0,
    explanation: "La celulosa es el polisacárido estructural primario cuya fórmula química polimérica es $(C_6H_{10}O_5)_n$[cite: 200].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "Analizando la composición química de la madera, las proporciones medias de sus tres biopolímeros fundamentales son:",
    options: [
      "Celulosa (45-60%), Hemicelulosas (25-30%) y Lignina (20-30%).",
      "Celulosa (90%), Hemicelulosas (5%) y Lignina (5%).",
      "Celulosa (20%), Hemicelulosas (40%) y Lignina (40%)."
    ],
    correct: 0,
    explanation: "La madera vegetal seca se compone principalmente de celulosa (45-60%), hemicelulosas (25-30%) y lignina aglutinante (20-30%)[cite: 200].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 20 / Pág. 200)"
  },
  {
    theme: 2,
    question: "En la anatomía macroscópica del tronco de un árbol, la sección tangencial se distingue por ser:",
    options: [
      "Un corte paralelo a las hileras o anillos de crecimiento pero distante del centro.",
      "Un corte perpendicular al eje que muestra los anillos concéntricos.",
      "El punto central de tejido blando denominado médula."
    ],
    correct: 0,
    explanation: "El manual ilustra la sección tangencial como el corte longitudinal tangente a las capas de los anillos de crecimiento del tronco.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 21 / Pág. 201)"
  },
  {
    theme: 2,
    question: "Al contar los anillos concéntricos en una sección transversal de un tronco, cada anillo corresponde a:",
    options: [
      "El conjunto de fibras generadas durante un año de crecimiento del árbol.",
      "Un mes de desarrollo biológico.",
      "Una estación de sequía extrema."
    ],
    correct: 0,
    explanation: "Cada anillo de la sección transversal representa una banda de madera producida a lo largo de un período anual de vegetación[cite: 201].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 21 / Pág. 201)"
  },
  {
    theme: 2,
    question: "En las especies madereras frondosas (hoja caduca), las células encargadas de la circulación de la savia en el árbol se denominan:",
    options: [
      "Vasos (que constituyen el 26% del volumen de la madera).",
      "Traqueidas (95%).",
      "Colagénos sintéticos."
    ],
    correct: 0,
    explanation: "Los vasos son los conductos característicos de las frondosas para la savia, representando el 26% de su estructura celular.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 22 / Pág. 202)"
  },
  {
    theme: 2,
    question: "En las maderas resinosas (coníferas), las células del parénquima representan un 5% de la estructura y se disponen:",
    options: [
      "Perpendicularmente a las fibras, sirviendo para la circulación transversal de savia y almacenamiento de reservas.",
      "En el eje longitudinal formando canales de resina de gran diámetro.",
      "Formando las paredes externas de la corteza exclusivamente."
    ],
    correct: 0,
    explanation: "El parénquima se compone de células perpendiculares a las fibras que transportan savia en sentido radial y almacenan nutrientes[cite: 202].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 22 / Pág. 202)"
  },
  {
    theme: 2,
    question: "La incorporación de cargas minerales (caolín, carbonato cálcico, talco, yeso) en la pasta papelera produce sobre el soporte los siguientes efectos, EXCEPTO:",
    options: [
      "Aumentar el espesor de la hoja a igualdad de gramaje.",
      "Dar mayor lisura superficial y aumentar la opacidad.",
      "Disminuir la porosidad y aumentar la blancura y el brillo."
    ],
    correct: 0,
    explanation: "Al tener mayor densidad que la celulosa y rellenar los poros, las cargas disminuyen el espesor a igualdad de gramaje[cite: 198].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 18 / Pág. 198)"
  },
  {
    theme: 2,
    question: "Para evitar la formación de espumas indeseadas en las tinas de preparación de masa durante la fabricación de papel se añaden aditivos:",
    options: [
      "Antiespumantes.",
      "Floculantes.",
      "Fungicidas."
    ],
    correct: 0,
    explanation: "Los antiespumantes son aditivos químicos diseñados para eliminar la oclusión de aire y burbujas en las tinas de mezcla.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 19 y 28 / Págs. 199 y 208)"
  },
  {
    theme: 2,
    question: "Los productos químicos que se añaden para favorecer la retención de las fibras finas y cargas en la tela de formación se denominan:",
    options: [
      "Retentivos y floculantes.",
      "Blanqueantes ópticos.",
      "Resinas de hidrofugado superficial."
    ],
    correct: 0,
    explanation: "Los agentes retentivos y floculantes aglomeran los finos y cargas para evitar que se pierdan a través de los poros de la tela de formación[cite: 199, 208].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 19 y 28 / Págs. 199 y 208)"
  },

  // ==========================================
  // BLOQUE III: OBTENCIÓN DE PASTAS, BLANQUEO Y REFINADO (21-30)
  // ==========================================
  {
    theme: 3,
    question: "En la obtención de pasta mecánica, la variante clásica producida por desfibrado de troncos contra muelas rotativas se denomina:",
    options: [
      "Pasta mecánica clásica o SGW (Stone Groundwood).",
      "Pasta RMP (Refiner Mechanical Pulp).",
      "Pasta Kraft al sulfato."
    ],
    correct: 0,
    explanation: "El método tradicional que usa muelas de piedra para moler la madera se denomina SGW o pasta mecánica clásica.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 23 / Pág. 203)"
  },
  {
    theme: 3,
    question: "A diferencia del método SGW, la pasta RMP se produce desintegrando la madera mediante:",
    options: [
      "Astillas procesadas entre discos refinadores rotativos.",
      "Digestores a presión con hidróxido sódico.",
      "Acción hidrolítica de enzimas bacterianas."
    ],
    correct: 0,
    explanation: "La pasta RMP (Refiner Mechanical Pulp) utiliza astillas madereras desmenuzadas en refinadores de disco[cite: 203].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 23 / Pág. 203)"
  },
  {
    theme: 3,
    question: "En las pastas químicas, el proceso 'a la sosa' utiliza como reactivo de cocción básico:",
    options: [
      "Hidróxido sódico (NaOH).",
      "Bisulfito cálcico.",
      "Ácido sulfúrico."
    ],
    correct: 0,
    explanation: "El procedimiento químico a la sosa emplea una solución alcalina de hidróxido sódico ($NaOH$) para disolver la lignina.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 24 / Pág. 204)"
  },
  {
    theme: 3,
    question: "El método químico al bisulfito utiliza para la digestión de la madera:",
    options: [
      "Bisulfitos (de calcio, magnesio, sodio o amonio) con exceso de anhídrido sulfuroso libre.",
      "Sosa cáustica y azufre elemental.",
      "Hipoclorito sódico a 90°C."
    ],
    correct: 0,
    explanation: "Las pastas al bisulfito se obtienen mediante cocción ácida empleando soluciones de bisulfitos[cite: 204].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 24 / Pág. 204)"
  },
  {
    theme: 3,
    question: "En el reciclaje de papel, el mecanismo de destintado por flotación se basa en:",
    options: [
      "Inyectar aire a la suspensión con detergentes y espumantes para que las partículas de tinta adhieran a las burbujas y se retiren por la superficie.",
      "Filtrar la pasta con mallas de carbón activo.",
      "Hervir la pasta a 200°C hasta la evaporación de las pigmentaciones."
    ],
    correct: 0,
    explanation: "La flotación hace subir las partículas hidrófobas de tinta atrapadas en las burbujas de espuma generadas por reactivos tensioactivos.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 25 / Pág. 205)"
  },
  {
    theme: 3,
    question: "En los esquemas de blanqueo, la ditionita de sodio ($Na_2S_2O_4$) es un agente de blanqueo:",
    options: [
      "Reductor, utilizado frecuentemente en fibras recicladas.",
      "Oxidante, empleado para blanqueos ECF de alta viscosidad.",
      "Ácido, utilizado para degradar las hemicelulosas."
    ],
    correct: 0,
    explanation: "La ditionita de sodio actúa como reactivo reductor que blanquea la pasta sin destruir la estructura en fibras recicladas.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 26 / Pág. 206)"
  },
  {
    theme: 3,
    question: "El compuesto químico denominado Ácido Formamidín Sulfínico se aplica específicamente en el blanqueo de:",
    options: [
      "Pastas mecánicas, papeles de colores y papeles autocopiativos.",
      "Pastas Kraft de fibra larga para embalaje.",
      "Papeles de registro cartográfico."
    ],
    correct: 0,
    explanation: "El manual destaca el ácido formamidín sulfínico para el tratamiento de pastas mecánicas, papeles coloreados y químicos/autocopiativos[cite: 206].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 26 / Pág. 206)"
  },
  {
    theme: 3,
    question: "Durante el refinado de la pasta, la acción física de 'frote' produce sobre la fibra celulósica:",
    options: [
      "Una desfibrilación o peinado superficial que expone microfibrillas aumentando su capacidad de hidratación y enlace.",
      "La reducción drástica de la longitud por cizalladura limpia.",
      "La desintegración total de las moléculas de glucosa."
    ],
    correct: 0,
    explanation: "El frote desgasta la pared primaria deshilachando las fibras en microfibrillas, lo que incrementa los puntos de enlace de hidrógeno[cite: 207].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 27 / Pág. 207)"
  },
  {
    theme: 3,
    question: "En la tina de mezcla, el parámetro de proceso que debe regularse con extrema precisión antes de enviar la masa a depuración es:",
    options: [
      "La consistencia (porcentaje de sólidos en la suspensión acuosa).",
      "La tensión de bobinado.",
      "El índice de viscosidad Saybolt del agua."
    ],
    correct: 0,
    explanation: "La tina de mezcla debe controlar la consistencia de la masa para asegurar que el caudal de gramos por minuto sea estable[cite: 208].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 28 / Pág. 208)"
  },
  {
    theme: 3,
    question: "Los depuradores probabilísticos se instalan en la línea de preparación de pasta para retener:",
    options: [
      "Partículas de gran tamaño o astillas no desfibradas.",
      "Partículas pequeñas pero pesadas como arena o grapas.",
      "Bacterias y microorganismos celulolíticos."
    ],
    correct: 0,
    explanation: "Los depuradores probabilísticos interceptan impurezas de gran tamaño físico, mientras que los centrífugos retienen elementos densos/pesados[cite: 209].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 29 / Pág. 209)"
  },

  // ==========================================
  // BLOQUE IV: MÁQUINA CONTINUADORA, PRENSADO Y SECADO (31-40)
  // ==========================================
  {
    theme: 4,
    question: "En la caja de entrada (cabeza de máquina), el conducto distribuidor que reparte la suspensión de manera uniforme a todo lo ancho de la boca se denomina:",
    options: [
      "Manifold.",
      "Labio superior.",
      "Mármol vibratorio."
    ],
    correct: 0,
    explanation: "El manifold es la tubería colectora/difusora que transforma el flujo de la tubería en una lámina plana de ancho constante.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 30 / Pág. 210)"
  },
  {
    theme: 4,
    question: "Las velocidades de producción alcanzadas en las mesas de fabricación de las máquinas continuadoras modernas pueden llegar a:",
    options: [
      "1.300 metros por minuto.",
      "100 metros por hora.",
      "50.000 metros por segundo."
    ],
    correct: 0,
    explanation: "El manual cita velocidades de trabajo en la mesa de fabricación de hasta 1.300 m/min.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 31 / Pág. 211)"
  },
  {
    theme: 4,
    question: "Entre las funciones operativas de la tela de la mesa de fabricación se encuentran las siguientes, EXCEPTO:",
    options: [
      "Permitir que las fibras se adhieran permanentemente a su superficie sin poder lavarse.",
      "Impedir el paso de las fibras y eliminar el máximo de agua.",
      "Tener la máxima durabilidad y facilitar el lavado."
    ],
    correct: 0,
    explanation: "Una función esencial de la tela es que la hoja se desprenda con facilidad (no debe pegarse) y que sea fácil de lavar[cite: 211].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 31 / Pág. 211)"
  },
  {
    theme: 4,
    question: "En la sección de prensado, la prensa que utiliza un fieltro de succión especial para transferir la hoja húmeda desde la tela de formación se denomina:",
    options: [
      "Fieltro de succión pick-up.",
      "Prensa de zapata fría.",
      "Cilindro de calandrado blando."
    ],
    correct: 0,
    explanation: "El fieltro pick-up toma por aspiración de vacío la hoja húmeda a la salida de la mesa Fourdrinier y la introduce en la primera prensa.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 32 / Pág. 212)"
  },
  {
    theme: 4,
    question: "La consolidación mecánica por presión en la sección de prensas aumenta las uniones interfibrilares, produciendo los siguientes cambios físicas en la hoja:",
    options: [
      "Aumenta la densidad aparente y disminuye la porosidad, permeabilidad al aire y poder absorbente.",
      "Disminuye la densidad aparente y aumenta el volumen específico.",
      "Disminuye la resistencia a la tracción y al rasgado."
    ],
    correct: 0,
    explanation: "El prensado compacta el papel, incrementando la densidad y reduciendo el volumen de poros y su capacidad de absorción[cite: 212].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 32 / Pág. 212)"
  },
  {
    theme: 4,
    question: "La sección de secado de la máquina continuadora se estructura habitualmente en dos tramos separados por:",
    options: [
      "La prensa de encolado o Size-Press.",
      "La caja de entrada.",
      "La guillotina trilateral."
    ],
    correct: 0,
    explanation: "La sequería se divide en primera y segunda sequería, ubicando la Size-Press entre ambas para tratar la superficie a medio secar[cite: 213, 214].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 33 y 34 / Págs. 213 y 214)"
  },
  {
    theme: 4,
    question: "Entre los métodos de tratamiento superficial en máquina que aplican ligantes (10 g/m²) se incluyen:",
    options: [
      "Size-press, speed-sizer, gate-roll y bill-blade.",
      "Laminado térmico y Gofrado en seco.",
      "Troquelado rotativo y Hendido por rodillos."
    ],
    correct: 0,
    explanation: "El manual lista expresamente los cuatro métodos dentro de máquina: Size-press, Speed-sizer, Gate-roll y Bill-blade[cite: 214].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 34 / Pág. 214)"
  },
  {
    theme: 4,
    question: "En la máquina de estucar fuera de máquina, el sistema de dosificación por 'Rasqueta' (Blade Coater) deposita una capa de salsa de estuco de:",
    options: [
      "10 a 20 g/m².",
      "20 a 40 g/m².",
      "100 a 200 g/m²."
    ],
    correct: 0,
    explanation: "El método de rasqueta retira el exceso de salsa dejando una capa fina de gran lisura de entre 10 y 20 g/m²[cite: 215].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 35 / Pág. 215)"
  },
  {
    theme: 4,
    question: "El proceso de acabado mecánico que pasa la tira de papel entre un conjunto de rodillos metálicos y de fibra a alta presión para incrementar su lisura y brillo se denomina:",
    options: [
      "Calandrado.",
      "Gofrado.",
      "Batido."
    ],
    correct: 0,
    explanation: "La calandra comporsiona la superficie del papel alisando las asperezas mediante la fricción y presión entre rodillos[cite: 216].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 36 / Pág. 216)"
  },
  {
    theme: 4,
    question: "El acabado mecánico que graba un relieve superficial rugoso con dibujos o texturas en la hoja mediante rodillos grabados se llama:",
    options: [
      "Gofrado.",
      "Cepillado.",
      "Rebobinado."
    ],
    correct: 0,
    explanation: "La gofradora de papel transmite un relieve textil, granulado o de patrón comercial mediante rodillos grabados en relieve[cite: 216].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 36 / Pág. 216)"
  },

  // ==========================================
  // BLOQUE V: TIPOS DE PAPELES Y APLICACIONES (41-50)
  // ==========================================
  {
    theme: 5,
    question: "Los papeles estucados clasificables dentro de la gama de 'Estucados Arte', cepillados o triple capa se destinan principalmente a:",
    options: [
      "Libros de muy alta calidad y embalajes de alta gama.",
      "Prensa diaria y cuadernos escolares.",
      "Sacos de cemento y envoltorios de mostrador."
    ],
    correct: 0,
    explanation: "Los estucados arte o triple capa ofrecen las máximas prestaciones de reproducción gráfica para obras de arte y embalaje de lujo[cite: 217].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 37 / Pág. 217)"
  },
  {
    theme: 5,
    question: "Para la impresión de etiquetas destinadas a latas de conserva o cajetillas de tabaco se utiliza habitualmente:",
    options: [
      "Papel estucado 1 cara (1/c) calandrado normal.",
      "Papel cebolla de 20 g/m².",
      "Cartón aglomerado tríplex."
    ],
    correct: 0,
    explanation: "Las etiquetas de latas y empaquetado de tabaco usan papel estucado por una sola cara (1/c) de gran brillo[cite: 218].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 38 / Pág. 218)"
  },
  {
    theme: 5,
    question: "En la envoltura de productos alimenticios con presencia de grasas (mantequilla, fiambres, carnes) se emplean soportes específicos como:",
    options: [
      "Papel antigrasa, papel melaminado o pergamino vegetal.",
      "Papel prensa supercalandrado.",
      "Cartulina brístol de 3 capas."
    ],
    correct: 0,
    explanation: "Los envases alimentarios grasos requieren barreras impermeables como el papel antigrasa, melaminado o pergamino vegetal.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 38 y 47 / Págs. 218 y 227)"
  },
  {
    theme: 5,
    question: "Los papeles estucados de bajo gramaje conocidos industrialmente por las siglas LWC (Low Weight Coated) son el soporte estándar para:",
    options: [
      "Revistas de gran tirada, mailings y folletos publicitarios.",
      "Libros de edición limitada numerados.",
      "Fichas de archivo de oficina."
    ],
    correct: 0,
    explanation: "El papel LWC optimiza el peso para reducir costes postales en revistas, catálogos y folletos de gran difusión[cite: 219].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 39 / Pág. 219)"
  },
  {
    theme: 5,
    question: "Dentro de los papeles de prensa, la variedad tratada mecánicamente con calandra para aumentar la lisura y brillo se denomina:",
    options: [
      "Supercalandrado o SC.",
      "Papel verjurado.",
      "Papel registro de fibra corta."
    ],
    correct: 0,
    explanation: "Los papeles de prensa con acabado calandrado de mayor calidad se conocen como supercalandrados o SC[cite: 223].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 43 / Pág. 223)"
  },
  {
    theme: 5,
    question: "El 'Papel Registro' se caracteriza por incorporar un elevado porcentaje de fibra larga, utilizándose específicamente para:",
    options: [
      "Registros de la propiedad, cartografía y planos técnicos.",
      "Envolver botellas de vino y calzado.",
      "Servilletas y pañuelos desechables."
    ],
    correct: 0,
    explanation: "El papel registro exige máxima resistencia mecánica y estabilidad dimensional para documentos oficiales, registros y planos[cite: 223].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 43 / Pág. 223)"
  },
  {
    theme: 5,
    question: "El papel recubierto por una de sus caras con un adhesivo reactivable por agua (vegetal o animal) se conoce como:",
    options: [
      "Papel engomado (usado en sellos de correos y cintas de embalar).",
      "Papel autoadhesivo por presión.",
      "Papel crespado."
    ],
    correct: 0,
    explanation: "El papel engomado requiere humectación previa para activar su adhesivo, siendo la base de los sellos y cintas engomadas[cite: 224].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 44 / Pág. 224)"
  },
  {
    theme: 5,
    question: "El 'Papel Cebolla' se define por poseer un gramaje extremadamente liviano, situado en:",
    options: [
      "Un gramaje inferior a 25 g/m².",
      "Un gramaje de 100 a 150 g/m².",
      "Un gramaje de 300 g/m²."
    ],
    correct: 0,
    explanation: "El papel cebolla es un soporte translúcido muy liviano de gramaje $<25\\text{ g/m}^2$ usado para envolver objetos frágiles o patrones[cite: 225].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 45 / Pág. 225)"
  },
  {
    theme: 5,
    question: "El papel crespado posee un rizado mecánico que le aporta flexibilidad y alargamiento, empleándose para:",
    options: [
      "Papel higiénico, servilletas, toallas y reforzado del lomo en encuadernación.",
      "Etiquetas de botellas de champán.",
      "Listados de ordenador e impresos oficiales."
    ],
    correct: 0,
    explanation: "El crespado otorga elasticidad al papel para productos absorbentes de higiene y para refuerzo flexible de lomos de libros[cite: 226].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 46 / Pág. 226)"
  },
  {
    theme: 5,
    question: "Las cartulinas no estucadas formadas por dos capas de papel se denominan:",
    options: [
      "Dúplex (ej. Cartulina Opalina).",
      "Tríplex (ej. Brístol).",
      "Monolúcidas."
    ],
    correct: 0,
    explanation: "Las cartulinas de dos capas son dúplex (como la Opalina), mientras que las de tres capas son tríplex.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 49 / Pág. 229)"
  },

  // ==========================================
  // BLOQUE VI: CARTONES, FORMATOS Y REGLAS DE COMPRA (51-60)
  // ==========================================
  {
    theme: 6,
    question: "En la tipología de cartones estucados para envases, el 'Cartoncillo reciclado o gris' se compone de:",
    options: [
      "Cara (A) de pasta química blanqueada, y Tripa (B) y Reverso (C) de fibras secundarias.",
      "Tres capas idénticas de pasta virgen blanqueada.",
      "Una cara de papel aluminio y dos capas de polietileno."
    ],
    correct: 0,
    explanation: "El cartoncillo reciclado combina una cara imprimible de pasta virgen blanqueada con tripa y reverso de fibras recicladas/grises[cite: 230].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 50 / Pág. 230)"
  },
  {
    theme: 6,
    question: "El 'Cartón aglomerado' es un cartón denso y rígido utilizado principalmente para:",
    options: [
      "Encuadernación de libros en cartoné (tapa dura) y cajas de transporte de congelados.",
      "Impresión de periódicos diarios.",
      "Etiquetas flotantes de prendas de vestir."
    ],
    correct: 0,
    explanation: "El cartón aglomerado es la base estructural pesada empleada en cubiertas de encuadernación cartoné y empaquetado industrial[cite: 231].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 51 / Pág. 231)"
  },
  {
    theme: 6,
    question: "Entre los formatos comerciales más habituales de pliegos de papel en hojas (en cm) citados en el manual figuran:",
    options: [
      "45 x 64, 52 x 70, 65 x 90, 70 x 100 y 100 x 140 cm.",
      "10 x 10, 20 x 20 y 30 x 30 cm.",
      "50 x 50, 100 x 100 y 200 x 200 cm."
    ],
    correct: 0,
    explanation: "El manual detalla la lista normalizada de formatos de hoja de papel, incluyendo $45\\times64$, $52\\times70$, $65\\times90$, $70\\times100$, $100\\times140\\text{ cm}$, entre otros[cite: 234].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 54 / Pág. 234)"
  },
  {
    theme: 6,
    question: "En las medidas de formatos de cartón en hojas, los tamaños comerciales estandarizados (en cm) son:",
    options: [
      "46 x 64, 64 x 92, 70 x 100, 72 x 102 y 75 x 105 cm.",
      "21 x 29,7 y 42 x 59,4 cm.",
      "80 x 80 y 120 x 120 cm."
    ],
    correct: 0,
    explanation: "Los formatos estandarizados de cartón en pliegos son $46\\times64$, $64\\times92$, $70\\times100$, $72\\times102$ y $75\\times105\\text{ cm}$[cite: 236].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 56 / Pág. 236)"
  },
  {
    theme: 6,
    question: "Según la norma de envasado en la distribución de papel en hojas, una resma cuyo peso total esté entre 21 y 40 kg se sirve emparejada en paquetes de:",
    options: [
      "250 hojas por paquete.",
      "500 hojas por paquete.",
      "50 hojas por paquete."
    ],
    correct: 0,
    explanation: "Las resmas livianas ($<20\\text{ kg}$) van en paquetes de 500 hojas; entre 21 y 40 kg se fraccionan en paquetes de 250 hojas.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 59 / Pág. 239)"
  },
  {
    theme: 6,
    question: "Si el peso de la resma se sitúa en la franja de 41 a 80 kg, el distribuidor la sirve en paquetes de:",
    options: [
      "125 hojas.",
      "500 hojas.",
      "10 hojas."
    ],
    correct: 0,
    explanation: "El cuadro de suministro asigna paquetes de 125 hojas para pesos de resma de 41 a 80 kg[cite: 239].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 59 / Pág. 239)"
  },
  {
    theme: 6,
    question: "En la numeración comercial del cartón en España, ¿a qué gramaje equivale exactamente un 'Cartón del número 2'?",
    options: [
      "254 g/m² (peso del pliego de 75 x 105 cm = 200 g).",
      "200 g/m².",
      "1.000 g/m²."
    ],
    correct: 0,
    explanation: "El cartón N.º 2 pesa $200\\text{ g}$ por pliego de $75\\times105\\text{ cm}$ ($0,7875\\text{ m}^2$), correspondiendo a $200 / 0,7875 = 254\\text{ g/m}^2$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 62 / Pág. 242)"
  },
  {
    theme: 6,
    question: "Un 'Cartón del número 4' ($400\\text{ g/pliego}$) equivale a un gramaje metrológico de:",
    options: [
      "508 g/m².",
      "400 g/m².",
      "800 g/m²."
    ],
    correct: 0,
    explanation: "Un pliego N.º 4 de $400\\text{ g}$ entre $0,7875\\text{ m}^2$ arroja un gramaje normalizado de $508\\text{ g/m}^2$[cite: 242].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 62 / Pág. 242)"
  },
  {
    theme: 6,
    question: "El cartón pesado correspondiente al 'Número 20' ($2.000\\text{ g/pliego}$) presenta un gramaje equivalente de:",
    options: [
      "2.540 g/m².",
      "200 g/m².",
      "20.000 g/m²."
    ],
    correct: 0,
    explanation: "El cartón N.º 20 ($2.000\\text{ g/pliego}$) dividido entre $0,7875\\text{ m}^2$ equivale a $2.540\\text{ g/m}^2$[cite: 242].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 62 / Pág. 242)"
  },
  {
    theme: 6,
    question: "Al realizar la compra de papel en bobinas, los datos obligatorios a especificar en la orden de pedido son:",
    options: [
      "Número de kilos, gramaje, ancho de bobina, diámetro de bobina y diámetro del mandril.",
      "Puntizones por centímetro y color de la cola.",
      "Número de páginas del archivo PDF."
    ],
    correct: 0,
    explanation: "La especificación industrial de bobinas exige fijar peso, gramaje, ancho de banda, diámetro exterior de la bobina y diámetro del mandril interno[cite: 240].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 60 / Pág. 240)"
  },

  // ==========================================
  // BLOQUE VII: PROPIEDADES ÓPTICAS, DENSIDAD Y POROSIDAD (61-70)
  // ==========================================
  {
    theme: 7,
    question: "En la espectrometría de color, el rango de longitudes de onda del espectro visible asignado a la luz violeta es de:",
    options: [
      "400 a 430 nanómetros.",
      "570 a 585 nanómetros.",
      "610 a 700 nanómetros."
    ],
    correct: 0,
    explanation: "El manual acota la radiación violeta visible entre los $400$ y $430\\text{ nm}$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 66 / Pág. 246)"
  },
  {
    theme: 7,
    question: "El rango de longitudes de onda correspondiente al color rojo en el espectro visible comprende:",
    options: [
      "610 a 700 nanómetros.",
      "430 a 485 nanómetros.",
      "485 a 570 nanómetros."
    ],
    correct: 0,
    explanation: "La banda espectral del color rojo se ubica en el extremo de onda larga visible, entre $610$ y $700\\text{ nm}$[cite: 246].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 66 / Pág. 246)"
  },
  {
    theme: 7,
    question: "Analizando la reflectancia de los ingredientes del papel, la pasta química blanqueada al bisulfito alcanza un factor de blancura del:",
    options: [
      "92%.",
      "30%.",
      "100% perfecto."
    ],
    correct: 0,
    explanation: "La pasta al bisulfito blanqueada posee un elevado factor de blancura del 92% (frente al 30% de la Kraft sin blanquear).",
    source: "Curso Básico de Artes Gráficas (Diapositiva 65 / Pág. 245)"
  },
  {
    theme: 7,
    question: "La pasta Kraft sin blanquear presenta un factor de blancura extremadamente bajo de tan solo el:",
    options: [
      "30%.",
      "90%.",
      "78%."
    ],
    correct: 0,
    explanation: "Debido a la lignina residual no retirada, la pasta Kraft cruda/sin blanquear presenta una blancura de solo el 30%[cite: 245].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 65 / Pág. 245)"
  },
  {
    theme: 7,
    question: "El parámetro de 'Luminosidad' de un papel se define cuantitativamente como:",
    options: [
      "El porcentaje de reflectancia a una longitud de onda de 457 nanómetros.",
      "El peso del estuco dividido entre el espesor.",
      "La transparencia medida a 700 nm."
    ],
    correct: 0,
    explanation: "La luminosidad mide el porcentaje de luz reflejada difusamente a la longitud de onda patrón de $457\\text{ nm}$[cite: 247].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 67 / Pág. 247)"
  },
  {
    theme: 7,
    question: "La Densidad Aparente de los papeles estucados se sitúa habitualmente en el rango de:",
    options: [
      "1,00 a 1,30 g/cm³.",
      "0,30 a 0,40 g/cm³.",
      "5,00 a 10,00 g/cm³."
    ],
    correct: 0,
    explanation: "Debido al empaquetamiento de minerales de la salsa de estuco, la densidad aparente sube a $1,00-1,30\\text{ g/cm}^3$.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 74 / Pág. 254)"
  },
  {
    theme: 7,
    question: "Por el contrario, el Volumen Específico de los papeles estucados es bajo, con valores de:",
    options: [
      "0,8 a 1,0 cm³/g.",
      "2,5 a 3,3 cm³/g.",
      "10 a 15 cm³/g."
    ],
    correct: 0,
    explanation: "Al ser inversamente proporcional a la densidad aparente, el volumen específico del estucado cae a $0,8-1,0\\text{ cm}^3/\\text{g}$[cite: 254].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 74 / Pág. 254)"
  },
  {
    theme: 7,
    question: "En los papeles no satinados (sin calandrar), el Volumen Específico alcanza sus valores más elevados, situados entre:",
    options: [
      "2,5 y 3,3 cm³/g.",
      "0,8 y 1,0 cm³/g.",
      "0,1 y 0,2 cm³/g."
    ],
    correct: 0,
    explanation: "Los soportes porosos sin satinar conservan volumen de aire, ofreciendo un volumen específico de $2,5-3,3\\text{ cm}^3/\\text{g}$[cite: 254].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 74 / Pág. 254)"
  },
  {
    theme: 7,
    question: "A nivel microscópico, se considera que un papel es muy poroso cuando el diámetro medio de sus poros oscila entre:",
    options: [
      "40 y 50 micras (y poco poroso si es inferior a 1 micra).",
      "1 y 2 milímetros.",
      "100 y 200 nanómetros."
    ],
    correct: 0,
    explanation: "Un tamaño de poro de 40 a 50 micras caracteriza a papeles de alta porosidad, mientras que por debajo de $1\,\\mu\\text{m}$ se consideran cerrados.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 76 / Pág. 256)"
  },
  {
    theme: 7,
    question: "Al someter un papel a un proceso de calandrado fuerte, la porosidad total del soporte se reduce de un valor del 60% (sin calandrar) a:",
    options: [
      "35%.",
      "99%.",
      "0%."
    ],
    correct: 0,
    explanation: "La tabla de refinado/calandrado muestra que un calandrado fuerte aplasta los poros reduciendo la porosidad total del 60% al 35%[cite: 257].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 77 / Pág. 257)"
  },

  // ==========================================
  // BLOQUE VIII: RESISTENCIA MECÁNICA, QUÍMICA Y ENSAYOS (71-80)
  // ==========================================
  {
    theme: 8,
    question: "Para determinar experimentalmente el sentido de fibra de una hoja de papel en el taller se pueden emplear los siguientes ensayos empíricos:",
    options: [
      "El rasgado (más fácil a favor de fibra), el mojado de una cara (se curva en contrafibra) o el doblado manual.",
      "La inmersión en ácido clorhídrico concentrado.",
      "La exposición a radiación de rayos X."
    ],
    correct: 0,
    explanation: "El manual ilustra la determinación del sentido de fibra observando la curva de tiras humedecidas o la resistencia al rasgado[cite: 261, 291].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 81 y 111 / Págs. 261 y 291)"
  },
  {
    theme: 8,
    question: "En las máquinas de impresión de pliegos, el papel debe alimentarse orientando el sentido de fibra de manera que sea:",
    options: [
      "Paralelo al eje de los cilindros de la máquina (para evitar problemas de registro de color).",
      "Perpendicular al eje de los cilindros.",
      "Diagonal a 45°."
    ],
    correct: 0,
    explanation: "La fibra paralela al eje del cilindro minimiza la deformación transversal por humedad permitiendo ajustar el registro.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 82 / Pág. 262)"
  },
  {
    theme: 8,
    question: "En las máquinas rotativas de bobina, la orientación del sentido de fibra del papel debe discurrir:",
    options: [
      "Coincidiendo con el desarrollo longitudinal de la banda de papel.",
      "Transversal al avance de la banda.",
      "Cruzado en zigzag."
    ],
    correct: 0,
    explanation: "En rotativa la fuerza de tiro longitudinal exige que el sentido de fibra coincida con la dirección de marcha de la banda[cite: 262].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 82 / Pág. 262)"
  },
  {
    theme: 8,
    question: "Las fibras de la celulosa absorben agua a nivel físico por capilaridad reteniendo una masa equivalente al:",
    options: [
      "25% del peso total del papel.",
      "4% del peso total.",
      "300% del peso total."
    ],
    correct: 0,
    explanation: "El agua fijada físicamente por acción capilar entre microfibrillas representa un 25% del peso del soporte[cite: 263].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 83 / Pág. 263)"
  },
  {
    theme: 8,
    question: "En la evaluación del grado de encolado superficial o interno del papel, la resistencia a la penetración de agua se expresa habitualmente mediante el ensayo:",
    options: [
      "Cobb (medido en g/m² de agua absorbida).",
      "Bendtsen de caudal de aire.",
      "Taber de momento de flexión."
    ],
    correct: 0,
    explanation: "El método Cobb mide la masa de agua en $\\text{g/m}^2$ retenida por la superficie durante un tiempo estandarizado[cite: 267, 268].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 87 y 88 / Págs. 267 y 268)"
  },
  {
    theme: 8,
    question: "Las consecuencias de un encolado superficial excesivo en el soporte papelero son:",
    options: [
      "Problemas de ajado en el plegado y disminución de la opacidad y blancura.",
      "Rotura instantánea en las prensas.",
      "Aumento de la permeabilidad al aire."
    ],
    correct: 0,
    explanation: "Un exceso de película de encolado rigida la cara provocando ajado al plegar y reduce opacidad y blancura.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 89 / Pág. 269)"
  },
  {
    theme: 8,
    question: "En el papel prensa, el grado de encolado interno se mantiene intencionadamente muy bajo para lograr que:",
    options: [
      "La penetración y secado de la tinta de impresión sea extremadamente rápida.",
      "El papel repinte en las plegadoras.",
      "Aumente la resistencia a la intemperie."
    ],
    correct: 0,
    explanation: "El papel prensa no lleva apenas encolado para que las tintas mineralizadas se absorban instantáneamente por porosidad[cite: 269].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 89 / Pág. 269)"
  },
  {
    theme: 8,
    question: "La acidez o basicidad de un papel se mide mediante la escala de pH. Las fibras celulósicas puras son químicamente neutras (pH 7), siendo la acidez provocada por:",
    options: [
      "Los aditivos y reactivos (como el sulfato de alúmina) añadidos durante el proceso de fabricación.",
      "La luz solar del taller.",
      "El aire comprimido del alimentador."
    ],
    correct: 0,
    explanation: "La desviación de pH es causada por los productos auxiliares de fabricación (sales de aluminio, encolantes ácidos o cargas alcalinas)[cite: 271].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 91 / Pág. 271)"
  },
  {
    theme: 8,
    question: "Los soportes papeleros con poca absorbencia ofrecen en la impresión el siguiente comportamiento positivo sobre el color:",
    options: [
      "Un rendimiento y densidad de color más elevado porque el pigmento permanece retenido en la superficie.",
      "Una pérdida total de contraste.",
      "Un secado inmediato sin necesidad de polvos."
    ],
    correct: 0,
    explanation: "Al no penetrar el barniz hacia el interior, la película de tinta forma una capa uniforme de máxima intensidad cromática y brillo.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 92 / Pág. 272)"
  },
  {
    theme: 8,
    question: "La velocidad de penetración de la tinta en el papel se puede medir en laboratorio evaluando:",
    options: [
      "La longitud de la mancha de penetración en milímetros.",
      "El peso del residuo seco al horno.",
      "La refracción del ángulo de incidencia."
    ],
    correct: 0,
    explanation: "El ensayo de penetración expresa la absorbencia calculando la longitud del trazo de mancha en mm[cite: 273].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 93 / Pág. 273)"
  },

  // ==========================================
  // BLOQUE IX: RESISTENCIAS FÍSICAS Y EXIGENCIAS POR SISTEMA (81-90)
  // ==========================================
  {
    theme: 9,
    question: "El defecto denominado 'Blistering' (ampollado) en rotativas Offset Heat-set se corrige técnicamente en máquina mediante:",
    options: [
      "Disminuir la temperatura del horno de secado o aumentar la velocidad de paso de la máquina.",
      "Aumentar la presión del agua de mojado.",
      "Aplicar ceras de pulido al papel."
    ],
    correct: 0,
    explanation: "El manual indica explícitamente que la solución al blistering exige reducir el calor del horno o acelerar la banda.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 95 / Pág. 275)"
  },
  {
    theme: 9,
    question: "La falta de planicidad en los pliegos de papel provoca en la máquina de impresión los siguientes defectos graves:",
    options: [
      "Problemas de entrada en marcador, fallos de registro, doble impresión y remosqueo.",
      "Desgaste de los piñones de arrastre.",
      "Aumento del pH del agua."
    ],
    correct: 0,
    explanation: "Los pliegos abarquillados o abollados tropiezan en la marquesina provocando mal registro, dobles impresiones y remosqueos.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 96 / Pág. 276)"
  },
  {
    theme: 9,
    question: "La Resistencia al Rasgado de un papel es superior cuando el esfuerzo se aplica en la dirección:",
    options: [
      "Contrafibra (perpendicular al sentido de máquina).",
      "Sentido de fibra.",
      "Diagonal a 45° de la fibra."
    ],
    correct: 0,
    explanation: "En contrafibra el desgarro exige romper mecánicamente el cuerpo de las fibras celulósicas transversales[cite: 278].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 98 / Pág. 278)"
  },
  {
    theme: 9,
    question: "Los defectos en el impreso derivados de una baja resistencia al arrancado de la superficie del papel se clasifican como:",
    options: [
      "Picoteado, repelado y arrancado.",
      "Remosqueo, doble imagen y velo.",
      "Cizalladura, pandeo y aplastamiento."
    ],
    correct: 0,
    explanation: "La falta de cohesión produce el desprendimiento de fibras o estuco en forma de picoteado, repelado o arrancado[cite: 279].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 99 / Pág. 279)"
  },
  {
    theme: 9,
    question: "La medición del desgaste por fricción en papeles para billetes de banco (papel moneda) y embalaje se efectúa mediante:",
    options: [
      "Abrasímetros de disco giratorio con ruedas abrasivas graduadas.",
      "Péndulos de impacto Izod.",
      "Galgas de profundidad hidrostática."
    ],
    correct: 0,
    explanation: "El manual ilustra la prueba de fricción de papel moneda montando la muestra en un disco giratorio bajo ruedas abrasivas con pesas.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 101 / Pág. 281)"
  },
  {
    theme: 9,
    question: "La Resistencia al Alargamiento de la hoja de papel antes de su rotura por tracción aumenta al:",
    options: [
      "Aumentar la Humedad Relativa ambiental y en la dirección de contrafibra.",
      "Disminuir el gramaje a cero.",
      "Calentar el papel a 200°C."
    ],
    correct: 0,
    explanation: "La elasticidad del entrelazado celulósico en contrafibra y la hidratación por H.R. elevan el porcentaje de alargamiento[cite: 282].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 102 / Pág. 282)"
  },
  {
    theme: 9,
    question: "La 'Rigidez' o capacidad del soporte para resistir fuerzas que tienden a curvarlo se incrementa con los siguientes factores, EXCEPTO:",
    options: [
      "Aumentar el porcentaje de cargas minerales.",
      "Aumentar el espesor y el gramaje.",
      "Incrementar la refinación y el encolado interno."
    ],
    correct: 0,
    explanation: "Las cargas minerales sustituyen a la fibra debilidando la estructura interna, lo que DISMINUYE la rigidez del papel[cite: 284].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 104 / Pág. 284)"
  },
  {
    theme: 9,
    question: "Para la impresión en el sistema de Flexografía con tintas al agua, las características críticas exigidas al papel son:",
    options: [
      "Soportes bien encolados, buena calidad de bobinado y alta estabilidad dimensional.",
      "Papel cebolla sin encolar.",
      "Grosor constante de 10 cm."
    ],
    correct: 0,
    explanation: "Las tintas acuosas de flexografía exigen soportes fuertemente encolados para no desintegrar la superficie y buena estabilidad[cite: 289].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 109 / Pág. 289)"
  },
  {
    theme: 9,
    question: "En la impresión Offset de productos NO absorbentes (ej. plásticos o papeles sintéticos) las precauciones en máquina son:",
    options: [
      "Controlar al máximo el agua de mojado, no usar pulverizadores, hacer pilas pequeñas y usar polvos antimaculantes o tintas UV.",
      "Aumentar el agua de mojado al 100%.",
      "Imprimir a 150°C de temperatura de caucho."
    ],
    correct: 0,
    explanation: "Al no absorber el soporte, el secado depende del oxidosecado UV/físico; exige mínima agua, pilas bajas y aditivos antimaculantes[cite: 289].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 109 / Pág. 289)"
  },
  {
    theme: 9,
    question: "Las propiedades del papel requeridas específicamente por el sistema de Huecograbado son:",
    options: [
      "Elevada lisura superficial, compresibilidad, calidad de bobinado y estabilidad dimensional.",
      "Gran porosidad rugosa.",
      "Acidez de pH inferior a 2."
    ],
    correct: 0,
    explanation: "El huecograbado transfiere tinta desde alveolos grabados en el cilindro, requiriendo máxima lisura y compresibilidad[cite: 290].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 110 / Pág. 290)"
  },

  // ==========================================
  // BLOQUE X: TIPOGRAFÍA, SISTEMAS DE MEDIDA Y TIPOGRAFÍA DIGITAL (91-100)
  // ==========================================
  {
    theme: 10,
    question: "¿En qué año y por quién se introdujo la invención de la imprenta con tipos móviles metálicos en Europa?",
    options: [
      "Johannes Gutenberg hacia 1450.",
      "Alois Senefelder en 1796.",
      "Ottmar Mergenthaler en 1886."
    ],
    correct: 0,
    explanation: "Johannes Gutenberg revolucionó la imprenta con la invención de los tipos móviles fundidos hacia 1450.",
    source: "Curso Básico de Artes Gráficas (Diapositivas 2 y 113 / Págs. 183 y 293)"
  },
  {
    theme: 10,
    question: "En la clasificación de las astas de un tipo tipográfico según su FORMA, estas se dividen en:",
    options: [
      "Moduladas (con variaciones de grosor) y Uniformes (de grosor constante).",
      "Rectas, curvas y mixtas.",
      "Ascendentes, medias y descendentes."
    ],
    correct: 0,
    explanation: "Por su FORMA, el trazo de un asta es modulado (ancho variable como en las romanas) u uniforme (constante como en paloseco)[cite: 294].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 114 / Pág. 294)"
  },
  {
    theme: 10,
    question: "En las equivalencias del Sistema Tipográfico Europeo (Didot), ¿cuántos puntos Didot equivalen exactamente a 1 milímetro y a 1 centímetro?",
    options: [
      "1 mm = 2,66 puntos Didot; 1 cm = 26,6 puntos Didot.",
      "1 mm = 1 punto Didot; 1 cm = 10 puntos Didot.",
      "1 mm = 10 puntos Didot; 1 cm = 100 puntos Didot."
    ],
    correct: 0,
    explanation: "Dividiendo $1\\text{ mm}$ entre $0,376065\\text{ mm/punto}$ se obtienen exactamente $2,66\\text{ puntos Didot}$ por mm ($26,6\\text{ pt/cm}$)[cite: 307].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 127 / Pág. 307)"
  },
  {
    theme: 10,
    question: "En las equivalencias del Sistema Tipográfico Angloamericano (Pica), ¿cuántos puntos de Pica equivalen a 1 milímetro y a 1 centímetro?",
    options: [
      "1 mm = 2,85 puntos de Pica; 1 cm = 28,5 puntos de Pica.",
      "1 mm = 2,66 puntos de Pica; 1 cm = 26,6 puntos de Pica.",
      "1 mm = 5 puntos; 1 cm = 50 puntos."
    ],
    correct: 0,
    explanation: "Dividiendo $1\\text{ mm}$ entre $0,3514729\\text{ mm/punto}$ se obtienen $2,85\\text{ puntos de pica}$ por mm ($28,5\\text{ pt/cm}$)[cite: 308].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 128 / Pág. 308)"
  },
  {
    theme: 10,
    question: "En la proporción clásica de composición de la línea tipográfica, las alturas del ojo medio y de los rasgos descendentes/ascendentes se distribuyen en:",
    options: [
      "2/3 para el cuerpo/ojo medio y 1/3 para el espacio de astas/descendentes.",
      "1/2 y 1/2 exactamente.",
      "9/10 para el pie y 1/10 para la cabeza."
    ],
    correct: 0,
    explanation: "El esquema tipográfico distribuye proporcionalmente $2/3$ de la altura para la caja baja/ojo medio y $1/3$ para astas.",
    source: "Curso Básico de Artes Gráficas (Diapositiva 126 / Pág. 306)"
  },
  {
    theme: 10,
    question: "En la tipografía plomo o física, el cuerpo tipográfico comprende:",
    options: [
      "La dimensión total del bloque metálico que incluye la mancha del carácter y los blancos de los hombros superior e inferior.",
      "Únicamente el ancho del trazo de la letra.",
      "La longitud del asta horizontal."
    ],
    correct: 0,
    explanation: "El cuerpo del tipo es la medida vertical completa del paralepípedo metálico, no solo la mancha impresa[cite: 306, 309].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 126 y 129 / Págs. 306 y 309)"
  },
  {
    theme: 10,
    question: "El formato de fuente digital vectorial PostScript Type 1 requería originalmente para su funcionamiento en el sistema informático de:",
    options: [
      "Dos archivos independientes: uno para la visualización en pantalla (pantalla/bitmap) y otro para la salida a impresora/filmadora (contornos vectoriales).",
      "Tres CD-ROMs grabados.",
      "Una conexión por satélite."
    ],
    correct: 0,
    explanation: "PostScript Type 1 separaba la fuente en dos archivos independientes (fuente de pantalla y fuente de impresora)[cite: 313].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 133 / Pág. 313)"
  },
  {
    theme: 10,
    question: "A diferencia de PostScript Type 1, el formato TrueType integró sus prestaciones mediante:",
    options: [
      "Un único archivo indivisible que contiene los datos de representación en pantalla y de impresión de alta resolución.",
      "Mapas de bits estáticos no vectoriales.",
      "Archivos de texto plano sin formato."
    ],
    correct: 0,
    explanation: "TrueType unificó en un solo archivo las instrucciones para pantalla e impresora simplificando la gestión de fuentes[cite: 314].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 134 / Pág. 314)"
  },
  {
    theme: 10,
    question: "El estándar tipográfico OpenType destaca por utilizar el sistema de codificación de caracteres denominado:",
    options: [
      "Unicode (que permite incorporar más de 65.000 glifos y símbolos en un solo archivo de fuente).",
      "ASCII básico de 128 caracteres.",
      "Código Morse internacional."
    ],
    correct: 0,
    explanation: "OpenType aprovecha la tabla Unicode para albergar hasta 65.536 glifos, soportando múltiples idiomas y variantes tipográficas avanzadas[cite: 315].",
    source: "Curso Básico de Artes Gráficas (Diapositiva 135 / Pág. 315)"
  },
  {
    theme: 10,
    question: "Los originales digitales de tipo 'Mapa de Bits' (o imágenes raster) se diferencian de los originales vectoriales en que:",
    options: [
      "Están formados por una retícula fija de píxeles dependiente de la resolución de captura, perdiendo nitidez al escalarse.",
      "Se pueden ampliar infinitamente sin pixelar.",
      "No contienen datos de color."
    ],
    correct: 0,
    explanation: "Las imágenes matriciales (bitmaps) dependen de la cantidad fija de píxeles por pulgada, sufriendo acartonamiento/pixelado al ampliarse[cite: 195, 310].",
    source: "Curso Básico de Artes Gráficas (Diapositivas 15 y 130 / Págs. 195 y 310)"
  },
 // const preguntasExamenArtesGraficasModoSuperDificil3 = [
  // ==========================================
  // BLOQUE I: PREIMPRESIÓN, GESTIÓN DE COLOR Y FLUSOS DIGITALES (1-10)
  // ==========================================
  {
    theme: 1,
    question: "En la tecnología de tramado estocástico o de Frecuencia Modulada (FM) de segunda generación, ¿cómo se controla la gradación tonal a diferencia del tramado convencional de Amplitud Modulada (AM)?",
    options: [
      "Variando la cantidad y distribución de micro-puntos de tamaño fijo y constante en la matriz.",
      "Variando el tamaño del punto de trama manteniendo fija la distancia entre sus centros.",
      "Modificando el ángulo de trama exclusivamente para cada uno de los cuatro colores de cuatricromía."
    ],
    correct: 0,
    explanation: "En la trama FM (estocástica), los puntos tienen un tamaño diminuto microrregulada y constante, y la densidad o tono se consigue aumentando o disminuyendo el número de micro-puntos por unidad de superficie.",
    source: "Manual de Preimpresión y Gestión de Color ISO 12647"
  },
  {
    theme: 2,
    question: "En la arquitectura de gestión de color basada en perfiles ICC, ¿cuál es la función del Espacio de Conexión de Perfiles (PCS - Profile Connection Space)?",
    options: [
      "Servir de espacio de color intermedio independiente del dispositivo (basado en CIE L*a*b* o CIE XYZ) para traducir datos entre perfiles de entrada y salida.",
      "Convertir directamente los valores RGB de la pantalla en valores CMYK de la imprenta sin transformaciones matemáticas intermedias.",
      "Comprimir la gama cromática (gamut) para ajustarla al formato de archivo JPEG."
    ],
    correct: 0,
    explanation: "El PCS actúa como un 'traductor universal' independiente de los dispositivos hardware; transforma los valores dependientes (RGB/CMYK) al espacio CIE L*a*b* o XYZ y de ahí al perfil de salida.",
    source: "Especificación del Consorcio Internacional del Color (ICC)"
  },
  {
    theme: 3,
    question: "En el tratamiento técnico de objetos adyacentes en preimpresión, ¿qué diferencia existe entre el reventado por expansión ('Choke') y el reventado por contracción ('Spread') en la técnica de Trapping?",
    options: [
      "Spread dilata el objeto claro sobre un fondo oscuro, mientras que Choke reduce el fondo oscuro que penetra bajo un objeto claro.",
      "Spread expande la imagen de fondo hacia el exterior y Choke reduce el tamaño del pliego de impresión.",
      "Choke se aplica solo a textos vectoriales y Spread se aplica a mapas de bits rasterizados."
    ],
    correct: 0,
    explanation: "El 'Spread' expande los bordes del elemento más claro hacia el fondo más oscuro, mientras que el 'Choke' reduce la caladura del fondo oscuro introduciendo el color claro de la figura.",
    source: "Técnicas de Preimpresión y Tratamiento Digital de la Imagen"
  },
  {
    theme: 4,
    question: "En la filmación digital de planchas CTP, las fuentes de exposición láser infrarrojo térmico operan a una longitud de onda estándar de:",
    options: [
      "830 nm.",
      "405 nm.",
      "532 nm."
    ],
    correct: 0,
    explanation: "Los CTP térmicos trabajan típicamente en la banda del infrarrojo cercano a 830 nm (diodos láser de arseniuro de galio y aluminio), mientras que los CTP violeta operan a 405 nm.",
    source: "Sistemas de Grabación Directa a Plancha (CTP) y Fotopolímeros"
  },
  {
    theme: 5,
    question: "¿Qué ventaja clave aporta el estándar JDF (CIP4) respecto al antiguo estándar CIP3 (PPF) en el control de tinteros y flujo de trabajo?",
    options: [
      "JDF permite la comunicación bidireccional (feed-back de producción) entre el sistema MIS/ERP y las máquinas, mientras que CIP3 es una comunicación unidireccional de datos técnicos.",
      "CIP3 solo funciona con prensas de serigrafía y JDF con offset.",
      "JDF elimina la necesidad de procesar archivos PDF mediante el RIP."
    ],
    correct: 0,
    explanation: "Mientras CIP3 transmite pre-configuraciones de tinta e imposición desde la preimpresión hacia la máquina (unidireccional), JDF es un flujo interactivo que recoge tiempos, datos de producción y estado de la máquina en tiempo real.",
    source: "Consorcio CIP4 - Especificación Job Definition Format"
  },
  {
    theme: 6,
    question: "La Ganancia de Punto mecánica o Incremento del Valor Tonal (TVI) alcanzada durante la impresión offset se calcula mediante la fórmula de:",
    options: [
      "Murray-Davies.",
      "Kubelka-Munk.",
      "Beer-Lambert."
    ],
    correct: 0,
    explanation: "La ecuación de Murray-Davies calcula el área de punto aparente $A$ en base a las densidades del punto, de la masa sólida y del papel base, determinando la ganancia de punto.",
    source: "Estandarización de Procesos de Impresión Offset ISO 12647-2"
  },
  {
    theme: 7,
    question: "En el tramado Híbrido (XM), ¿cómo se combinan las tramas AM y FM en el rango tonal de una imagen?",
    options: [
      "Aplica trama FM estocástica en las altas luces y sombras profundas, y trama AM en los tonos medios.",
      "Aplica trama AM en el canal del Magenta y FM en los canales Cian y Negro.",
      "Utiliza trama estocástica en textos y trama convencional en fotografías."
    ],
    correct: 0,
    explanation: "El tramado XM mantiene la estructura estable de tono medio AM donde la máquina es más repetible, pero conmuta a FM en luces y sombras para evitar la pérdida de micropuntos o el cegado.",
    source: "Tecnología de Tramado en Preimpresión Digital"
  },
  {
    theme: 8,
    question: "En la impresión Offset de 4 colores, los ángulos de trama AM estandarizados para minimizar el efecto Moiré son:",
    options: [
      "Cian = 15°, Magenta = 75°, Negro = 45°, Amarillo = 0° (o 90°).",
      "Cian = 0°, Magenta = 30°, Negro = 60°, Amarillo = 90°.",
      "Cian = 45°, Magenta = 45°, Negro = 45°, Amarillo = 45°."
    ],
    correct: 0,
    explanation: "Los ángulos deben guardar una separación de 30° entre los colores oscuros visualmente dominantes (Cian 15°, Magenta 75°, Negro 45°), reservando los 0°/90° para el Amarillo de menor contraste.",
    source: "Manual de Fotomecánica y Tramado de la Imagen"
  },
  {
    theme: 9,
    question: "El fenómeno físico de Moiré estructural en la impresión de cuatricromía se produce principalmente por:",
    options: [
      "La interferencia geométrica entre dos o más tramas periódicas superpuestas con ángulos o frecuencias no ortogonales.",
      "La baja viscosidad de la tinta líquida al mezclarse sobre el papel.",
      "Un exceso de secante de cobalto en el tintero."
    ],
    correct: 0,
    explanation: "El moiré es una pauta de interferencia óptica repetitiva generada cuando se superponen dos tramas de puntos a ángulos o frecuencias que interfieren entre sí.",
    source: "Fundamentos de Fotomecánica e Impresión"
  },
  {
    theme: 10,
    question: "El formato de intercambio de datos preimpresión PDF/X-4 (ISO 15930-7) permite, a diferencia del estándar PDF/X-1a:",
    options: [
      "Admitir transparencias puras no acopladas (vivas) y espacios de color dependientes de CIELAB o con gestión de color basada en ICC.",
      "Garantizar que todo el documento esté convertido obligatoriamente a escala de grises.",
      "Eliminar el sangrado y las marcas de corte del archivo ejecutable."
    ],
    correct: 0,
    explanation: "PDF/X-1a exige que todas las imágenes estén en CMYK/tintas directas y las transparencias acopladas. PDF/X-4 permite mantener las transparencias nativas y perfiles de color integrados.",
    source: "Norma ISO 15930-7 - Especificaciones PDF/X-4"
  },

  // ==========================================
  // BLOQUE II: QUÍMICA Y FÍSICA PAPELERA AVANZADA (11-20)
  // ==========================================
  {
    theme: 11,
    question: "En la estructura supramolecular de la celulosa, los monómeros de D-glucosa se unen covalentemente mediante enlaces del tipo:",
    options: [
      "Enlaces beta (1 -> 4) glucosídicos.",
      "Enlaces alfa (1 -> 4) glucosídicos.",
      "Puentes disulfuro sencillos."
    ],
    correct: 0,
    explanation: "La celulosa es un polímero lineal condensado formado por unidades de anhidro-D-glucopiranosa unidas mediante enlaces covalentes $\\beta(1\\rightarrow4)$ glucosídicos.",
    source: "Química de la Celulosa y la Madera"
  },
  {
    theme: 12,
    question: "El grado de polimerización (GP) medio de las moléculas de celulosa nativa en la madera sin degradar oscila habitualmente entre:",
    options: [
      "7.000 y 10.000 unidades de glucosa.",
      "100 y 200 unidades de glucosa.",
      "1.000.000 y 5.000.000 de unidades de glucosa."
    ],
    correct: 0,
    explanation: "La celulosa de la madera nativa presenta un GP de alrededor de 7.000 a 10.000, aunque los procesos de digestión química reducen este valor a 1.000-2.000 en la pasta industrial.",
    source: "Estructura y Química de Polímeros Naturales"
  },
  {
    theme: 13,
    question: "En la comparación industrial de rendimientos en peso de fibra limpia seca, ¿cuál es el rendimiento medio de la Pasta Mecánica frente a la Pasta Química Kraft?",
    options: [
      "Pasta Mecánica: 90-95%; Pasta Química Kraft: 45-55%.",
      "Pasta Mecánica: 40-45%; Pasta Química Kraft: 90-95%.",
      "Ambas pastas obtienen exactamente un rendimiento idéntico del 70%."
    ],
    correct: 0,
    explanation: "La pasta mecánica no disuelve la lignina, logrando un rendimiento altísimo (90-95%). La pasta Kraft elimina la lignina y hemicelulosas, reduciendo su rendimiento al 45-55%.",
    source: "Tecnología de la Fabricación de Pastas papeleras"
  },
  {
    theme: 14,
    question: "En el ciclo de recuperación de reactivos del proceso Kraft, el 'licor negro' extraído del digestor se somete a concentración y combustión en la caldera de recuperación para obtener:",
    options: [
      "Licor verde (Carbonato sódico y Sulfuro sódico).",
      "Dióxido de cloro concentrado.",
      "Resina de colofonia refinada."
    ],
    correct: 0,
    explanation: "La quema del licor negro disuelve las cenizas inorgánicas en agua produciendo 'licor verde', que tras causticarse con cal viva se recicla en 'licor blanco' de cocción.",
    source: "Procesos Industriales Pulp & Paper"
  },
  {
    theme: 15,
    question: "Durante la cocción ácida al bisulfito, la lignina insoluble de la madera se transforma para su disolución en compuestos solubles denominados:",
    options: [
      "Lignosulfonatos.",
      "Mercaptanos de sodio.",
      "Ácidos grasos insaturados."
    ],
    correct: 0,
    explanation: "La reacción química de sulfonación añade grupos sulfónicos a la estructura de la lignina convirtiéndola en lignosulfonatos hidrófilos solubles en agua.",
    source: "Química de la Madera y Blanqueo de Pastas"
  },
  {
    theme: 16,
    question: "El grado de refinado y la aptitud de drenaje de la masa papelera se mide cuantitativamente en el laboratorio mediante el ensayo estandarizado de:",
    options: [
      "Schopper-Riegler (°SR) o Canadian Standard Freeness (CSF).",
      "Cobb 60.",
      "Mullen de estallido."
    ],
    correct: 0,
    explanation: "El método Schopper-Riegler (°SR) mide la velocidad de filtración de una suspensión acuosa diluida; a mayor refinado y fibrilación, mayor es el valor °SR.",
    source: "Ensayos Normalizados de Pastas y Papel ISO 5267"
  },
  {
    theme: 17,
    question: "En la preparación de pasta reciclada en el pulper, el intervalo de consistencia denominado 'Alta Consistencia' trabaja con un porcentaje de sólidos de:",
    options: [
      "12% a 18%.",
      "1% a 3%.",
      "40% a 50%."
    ],
    correct: 0,
    explanation: "El pulper de alta consistencia opera entre el 12% y el 18% de concentración de fibra seca, lo que favorece el frote fibra contra fibra ahorrando energía y reactivos.",
    source: "Reciclado y Destintado de Fibras Secundarias"
  },
  {
    theme: 18,
    question: "En la fase de encolado en medio neutro o alcalino (pH 7,0 - 8,5), los agentes sintéticos reactivos de encolado interno más empleados son:",
    options: [
      "Anhidrido Alquenil Succínico (ASA) y DÍmero de Alquil Ceteno (AKD).",
      "Colofonia de pino y Sulfato de Alúmina.",
      "Almidón catiónico de patata únicamente."
    ],
    correct: 0,
    explanation: "El encolado clásico con colofonia/alumbre requiere un pH ácido (4,5-5,0). Para trabajar con cargas de carbonato cálcico a pH neutro/alcalino se aplican reactivos sintéticos AKD o ASA.",
    source: "Química de Papel y Aditivos de Masa"
  },
  {
    theme: 19,
    question: "Entre las cargas minerales utilizadas en la formulación de la hoja de papel, el Carbonato Cálcico Precipitado (PCC) destaca frente al molido (GCC) por:",
    options: [
      "Presentar una morfología cristalina y tamaño de partícula controlados a medida, aportando mayor opacidad y blancura.",
      "Contener impurezas de cuarzo y abrasividad extrema.",
      "Reducir el pH de la suspensión a valores fuertemente ácidos (< 3)."
    ],
    correct: 0,
    explanation: "El PCC se sintetiza químicamente, permitiendo controlar la forma del cristal (escalenoédrica, aragonítica) y el tamaño de partícula para maximizar la dispersión de luz.",
    source: "Minerales y Cargas Papeleras"
  },
  {
    theme: 20,
    question: "La incorporación de agentes de Blanqueo Óptico (OBA / FWA) en la salsa de estuco o en masa mejora la percepción visual de blancura mediante el mecanismo de:",
    options: [
      "Absorber la radiación UV no visible (300-400 nm) y reemitirla por fluorescencia en el espectro visible azul (420-470 nm).",
      "Absorber la luz roja y reflejar luz verde pura.",
      "Reflejar el 100% de la radiación infrarroja térmica del entorno."
    ],
    correct: 0,
    explanation: "Los blanqueantes ópticos son moléculas fluorescentes que convierten los fotones UV invisibles en fotones de luz azul visible, neutralizando la tonalidad amarillenta del papel.",
    source: "Propiedades Ópticas del Papel y Colorimetría"
  },

  // ==========================================
  // BLOQUE III: MÁQUINA CONTINUADORA Y ACABADOS MECÁNICOS (21-30)
  // ==========================================
  {
    theme: 21,
    question: "En las cajas de entrada de alta velocidad de las máquinas papeleras modernas, el control de la orientación de las fibras se ajusta mediante:",
    options: [
      "La regulación precisa de la relación entre la velocidad del chorro de pasta y la velocidad de la tela (Jet-to-wire ratio).",
      "El aumento del caudal de agua de lavado de las bayetas.",
      "La inclinación manual del cilindro desgotador."
    ],
    correct: 0,
    explanation: "Ajustando el diferencial entre la velocidad de salida de la suspensión por el labio y la velocidad de la tela se controla la orientación preferred de las fibras en máquina.",
    source: "Ingeniería de la Máquina Continuadora Papelera"
  },
  {
    theme: 22,
    question: "En la mesa de formación, las máquinas provistas de 'Gap Formers' (doble tela de formación) ofrecen como ventaja estructural principal:",
    options: [
      "Desgote simétrico por ambas caras de la lámina, eliminando el descaro o diferencia de propiedades entre la cara tela y la cara fieltro.",
      "Generación de papeles de más de 2.000 g/m² en una sola etapa.",
      "Eliminación completa de la sección de secado por cilindros."
    ],
    correct: 0,
    explanation: "Al inyectar la masa entre dos telas sin fin que prensan y desgotan simultáneamente hacia ambos lados, se obtiene un pliego homogéneo sin descaro.",
    source: "Formación de la Hoja y Doble Tela"
  },
  {
    theme: 23,
    question: "El rodillo Dandy (o cilindro desgotador) ubicado sobre la mesa Fourdrinier cumple las funciones de:",
    options: [
      "Iguarlar la superficie superior de la hoja húmeda, consolidar la estructura y aplicar marcas de agua o verjurados.",
      "Secar el papel por combustión interna a gas natural.",
      "Bobinar el papel terminado antes de la calandra."
    ],
    correct: 0,
    explanation: "El rodillo Dandy aprieta suavemente la cara superior del papel cuando aún contiene un 85-90% de agua, mejorando la formación y grabando filigranas si lleva relieve.",
    source: "Mecanismo de la Mesa Fourdrinier"
  },
  {
    theme: 24,
    question: "En la sección de prensas, la tecnología de 'Prensa de Zapata Ancha' (Extended Nip Press - ENP) se caracteriza por:",
    options: [
      "Incrementar el tiempo de residencia bajo presión en la zona de contacto, logrando una mayor extracción de agua sin aplastar las fibras.",
      "Utilizar rodillos de acero estriado de muy pequeño diámetro.",
      "Aplicar vapor supercalentado directamente sobre las bandas de caucho."
    ],
    correct: 0,
    explanation: "La prensa de zapata cóncava hidrodinámica aumenta la anchura del contacto (nip) de 5 cm a más de 25 cm, incrementando el tiempo de desgotado y la sequedad de salida hasta el 50%.",
    source: "Tecnología de Prensado y Desgote Papelero"
  },
  {
    theme: 25,
    question: "En la sección de sequería de una máquina continuadora, el fenómeno de 'Iguarlado de Tensión' (Single-tier) se aplica para:",
    options: [
      "Guiar continuamente la hoja húmeda mediante fieltros de vacío sin tramos libres para evitar roturas por contracción.",
      "Elevar la humedad final del papel al 90%.",
      "Eliminar el encolado de la Size-Press."
    ],
    correct: 0,
    explanation: "La sequería de un solo piso sostiene la banda de papel apoyada contra el fieltro de transporte en todo su recorrido, suprimiendo las fluctuaciones de tensión y roturas de hoja.",
    source: "Operaciones de Secado en Máquina Continuadora"
  },
  {
    theme: 26,
    question: "A diferencia de la Size-Press tradicional de inmersión, la unidad 'Metered Size Press' o Prensa de Película dosifica la mezcla ligante mediante:",
    options: [
      "Un rodillo aplicador provisto de una barra ranurada o rasqueta que transfiere una película fina de volumen medido a la hoja.",
      "La inmersión total del pliego en un tanque de resina líquida a presión.",
      "Inyectores de aerosol ultrasónico instalados sobre la tela."
    ],
    correct: 0,
    explanation: "La prensa de película (Speed-Sizer) pre-dosifica una capa uniforme de almidón sobre la superficie del rodillo sintético antes de transferirla por presión al papel, evitando roturas.",
    source: "Tratamientos Superficiales de la Hoja"
  },
  {
    theme: 27,
    question: "En la calandradora blanda (Soft-Nip Calender), la combinación de un rodillo metálico calefactado con un rodillo de recubrimiento elástico permite:",
    options: [
      "Conseguir alta lisura y brillo con una compactación uniforme de la densidad, preservando el volumen y la opacidad del papel.",
      "Aumentar el espesor libre del papel en un 200%.",
      "Perforar microrranuras para el troquelado de sellos."
    ],
    correct: 0,
    explanation: "La deformación del rodillo blando adapta la presión al perfil local del papel, evitando aplastar las zonas gruesas (lo que causaría manchas de transparencia o matices de brillo).",
    source: "Calandrado y Acabados de Superficie"
  },
  {
    theme: 28,
    question: "Durante el bobinado del papel en la rebobinadora, el control del perfil de dureza de la bobina (Roll Hardness) exige que:",
    options: [
      "La dureza del bobinado sea máxima en el núcleo o mandril e vaya decreciendo paulatinamente hacia el exterior.",
      "La dureza sea blanda en el centro y extremadamente dura en las capas exteriores.",
      "La dureza sea totalmente variable e impredecible a lo largo del radio."
    ],
    correct: 0,
    explanation: "Un bobinado correcto exige tensión apretada en el mandril que disminuye exponencialmente hacia las capas externas para evitar desprendimientos internos, grietas o reventones (*bursts*).",
    source: "Tecnología de Bobinado y Rebobinado Industrial"
  },
  {
    theme: 29,
    question: "En las cortadoras transversales de pliegos de alta precisión, el sistema de corte de doble cuchilla rotativa síncrona ('Synchro-Fly') destaca por:",
    options: [
      "Mover ambas cuchillas a la misma velocidad lineal que la banda de papel en el instante exacto del corte, logrando bordes limpios sin polvo.",
      "Utilizar un rayo láser de $10\\text{ kW}$ para quemar la guillotina.",
      "Cortar pliegos exclusivamente en forma circular."
    ],
    correct: 0,
    explanation: "El corte síncrono sincroniza la velocidad periférica de los dos tambores portacuchillas con el avance del papel, realizando un corte perpendicular perfecto sin deformar los bordes.",
    source: "Acabados, Cortado y Empaquetado de Papel"
  },
  {
    theme: 30,
    question: "¿Qué función cumple el acondicionador de papel mediante climatización hídrica previa a la salida de fábrica?",
    options: [
      "Estabilizar la humedad relativa interna del papel en equilibrio higrométrico con la atmósfera estándar de las imprentas (45-55% HR).",
      "Elevar la temperatura del papel a 90°C para la desinfección biológica.",
      "Reducir el gramaje nominal para rebajar costes de flete."
    ],
    correct: 0,
    explanation: "Acondicionar el soporte evita que la hoja gane o pierda agua bruscamente al abrir los empaques en la imprenta, previniendo abarquillamientos, ondulaciones de bordes y mala entrada.",
    source: "Higrometría y Acondicionamiento de Papeles"
  },

  // ==========================================
  // BLOQUE IV: METROLOGÍA ÓPTICA Y ESPECTROFOTOMETRÍA (31-40)
  // ==========================================
  {
    theme: 31,
    question: "En la geometría de medición $45^\circ/0^\circ$ de un espectrofotómetro de reflexión para artes gráficas, la iluminación de la muestra se realiza a:",
    options: [
      "Un ángulo de 45° respecto a la normal de la superficie y la captura del flujo reflejado se efectúa a 0° (perpendicular).",
      "Un ángulo de 0° e iluminación mediante esfera de integración difusa a 8°.",
      "Un ángulo de 90° con captura a 180°."
    ],
    correct: 0,
    explanation: "La geometría $45^\circ/0^\circ$ elimina el brillo especular directo de la superficie, correlacionando mejor con la percepción visual humana de las muestras impresas.",
    source: "ISO 13655 - Medición Espectral para Artes Gráficas"
  },
  {
    theme: 32,
    question: "En la especificación colorimétrica CIE, el Iluminante Normalizado D50 representa:",
    options: [
      "La luz del día promedio con una temperatura de color correlacionada de aproximadamente 5.000 K (estándar para artes gráficas).",
      "La luz de un tubo fluorescente comercial de hospital (6.500 K).",
      "La radiación de una lámpara de tungsteno incandescente doméstica (2.856 K)."
    ],
    correct: 0,
    explanation: "El iluminante D50 ($5000\\text{ K}$) es el estándar oficial adoptado en las artes gráficas para la evaluación cromática, pruebas de color e inspección en cabinas de luz.",
    source: "ISO 3664 - Condiciones de Iluminación en Artes Gráficas"
  },
  {
    theme: 33,
    question: "En el espacio de color CIELAB ($L^*a^*b^*$), las coordenadas $a^*$ y $b^*$ representan respectivamente:",
    options: [
      "a*: Eje rojo (+a*) a verde (-a*); b*: Eje amarillo (+b*) a azul (-b*).",
      "a*: Eje de Luminosidad; b*: Eje de Saturación de color.",
      "a*: Eje azul a verde; b*: Eje amarillo a rojo."
    ],
    correct: 0,
    explanation: "$L^*$ mide la claridad ($0$ a $100$), $+a^*$ es rojo, $-a^*$ es verde, $+b^*$ es amarillo y $-b^*$ es azul.",
    source: "Sistemas de Espacios de Color CIELAB"
  },
  {
    theme: 34,
    question: "La fórmula de diferencia de color CIEDE2000 ($\\Delta E_00$) introduce correcciones matemáticas respecto a $\\Delta E^*{ab}$ para compensar:",
    options: [
      "La no uniformidad del ojo humano en la percepción del color en las zonas neutras, de croma elevado y el tono azul.",
      "La ganancia de punto producida por el tipo de caucho.",
      "El espesor micrométrico de la película de estuco."
    ],
    correct: 0,
    explanation: "CIEDE2000 añade ponderaciones para la luminosidad ($S_L$), croma ($S_C$), tono ($S_H$) y un término de rotación ($R_T$) para corregir la falta de uniformidad del espacio CIELAB original.",
    source: "Colorimetría Avanzada y Especificaciones CIE"
  },
  {
    theme: 35,
    question: "El fenómeno de Metamerismo cromático ocurre cuando dos muestras de color impresas:",
    options: [
      "Presentan el mismo aspecto bajo una fuente de luz determinada (ej. D50), pero se perciben diferentes al cambiar el iluminante (ej. Iluminante A).",
      "Tienen una densidad óptica superior a 3,00 D en todas las condiciones.",
      "Cambian de tamaño físico al variar la humedad relativa."
    ],
    correct: 0,
    explanation: "El metamerismo se produce cuando dos curvas de reflectancia espectral son diferentes pero sus valores triestímulo coinciden bajo un iluminante concreto, divergiendo al cambiar de luz.",
    source: "Estandarización y Control del Color"
  },
  {
    theme: 36,
    question: "La Densidad Óptica de Reflexión ($D$) se define matemáticamente como:",
    options: [
      "El logaritmo decimal del inverso del factor de reflectancia (D = log10 (1 / R)).",
      "El producto de la luminosidad por la transmitancia.",
      "El porcentaje directo de luz reflejada multiplicado por 100."
    ],
    correct: 0,
    explanation: "La densidad óptica mide la opacidad o absorción de luz en escala logarítmica: $D = \\log_{10}(1/R)$, donde $R$ es la reflectancia ($I_{reflejada}/I_{incidente}$).",
    source: "Densitometría de Reflexión ISO 5-3"
  },
  {
    theme: 37,
    question: "En la medición densitométrica, el filtro de respuesta de Estado T (Status T) se caracteriza por ser el estándar de calibración aplicado en:",
    options: [
      "Norteamérica para el control de la impresión de procesos cromáticos en pliego y rotativa.",
      "Europa exclusivamente bajo especificación DIN.",
      "Procesamiento de películas fotográficas médicas de rayos X."
    ],
    correct: 0,
    explanation: "La respuesta Status T es la norma densitométrica de banda ancha estándar en la industria gráfica americana para medir tintas de cuatricromía.",
    source: "Especificaciones Densitométricas ANSI/ISO Status T"
  },
  {
    theme: 38,
    question: "La modificación de Yule-Nielsen a la ecuación de Murray-Davies introduce el factor 'n' para corregir la ganancia de punto debida a:",
    options: [
      "La dispersión y penetración de la luz dentro del soporte de papel (ganancia de punto óptica).",
      "El aplastamiento mecánico del caucho contra el cilindro de presión.",
      "La evaporación del solvente en el horno de secado."
    ],
    correct: 0,
    explanation: "El factor $n$ de Yule-Nielsen (típicamente entre $1,5$ y $2,5$) modela la ganancia de punto óptica causada por la fotones atrapados y dispersados bajo el punto impreso.",
    source: "Modelos Matemáticos de Reproducción Tonal"
  },
  {
    theme: 39,
    question: "En la norma ISO 13655, los Modos de Medición Espectral M0, M1, M2 y M3 definen las condiciones de iluminación. ¿Qué caracteriza al Modo M1?",
    options: [
      "La fuente de luz de medición está adaptada al iluminante estándar CIE D50 conteniendo la proporción correcta de radiación UV para medir papeles con Blanqueantes Ópticos (OBA).",
      "Utiliza un filtro de polarización cruzada para eliminar el brillo de la tinta húmeda.",
      "Excluye totalmente cualquier radiación por debajo de los 400 nm."
    ],
    correct: 0,
    explanation: "M1 se diseñó para resolver las discrepancias de los blanqueantes fluorescentes; exige que la fuente de luz del espectrofotómetro concuerde estrictamente con el espectro UV del iluminante D50.",
    source: "ISO 13655 - Spectral Measurement and Emission Requirements"
  },
  {
    theme: 40,
    question: "El Modo de Medición M3 especificado en la ISO 13655 utiliza un filtro de polarización con el objetivo prioritario de:",
    options: [
      "Eliminar los reflejos de brillo especular sobre películas de tinta aún húmedas, igualando las lecturas densitométricas de tinta húmeda y seca.",
      "Activar la fluorescencia de las tintas invisibles de seguridad.",
      "Medir el calibre o espesor del soporte en micras mediante láser."
    ],
    correct: 0,
    explanation: "El modo M3 aplica polarizadores en la iluminación y la captura (polarización cruzada); así elimina el brillo superficial húmedo (*dry-back*), permitiendo medir igual en tirada que tras el secado.",
    source: "ISO 13655 - Measurement Conditions M3"
  },

  // ==========================================
  // BLOQUE V: REOLOGÍA DE TINTAS, SECADO Y OFSET (41-50)
  // ==========================================
  {
    theme: 41,
    question: "En la reología de las tintas offset de pliego, el parámetro denominado 'Tack' o Tiro mide:",
    options: [
      "La fuerza de cizallamiento e hidrodinámica requerida para romper o dividir la película de tinta entre dos superficies cilíndricas en rotación.",
      "La velocidad exacta de evaporación del vehículo mineral.",
      "El grado de acidez del pigmento en presencia de agua."
    ],
    correct: 0,
    explanation: "El Tiro o Tack representa la resistencia del flujo de la tinta a dividirse mecánicamente en la salida del contacto; un Tack excesivo provoca el arrancado de la superficie del papel.",
    source: "Reología de Tintas de Impresión y Metrología"
  },
  {
    theme: 42,
    question: "El fenómeno de Tixotropía en las tintas de impresión offset consiste en:",
    options: [
      "La disminución reversibilidad de la viscosidad de la tinta cuando se somete a un esfuerzo cortante agitación mecánica, recuperando su consistencia en reposo.",
      "La solidificación instantánea de la tinta al entrar en contacto con el aire.",
      "La pérdida permanente de la capacidad de pigmentación por temperatura."
    ],
    correct: 0,
    explanation: "La tinta tixotrópica se comporta como un gel espeso en la lata, pero al ser batida por los rodillos de la batería de entintado se fluidifica para fluir y transferirse correctamente.",
    source: "Físico-Química de Tintas y Oleorresinas"
  },
  {
    theme: 43,
    question: "El secado de las tintas convencionales de impresión offset en pliego se realiza mediante un proceso combinado de dos etapas primarias:",
    options: [
      "Penetración (absorción rápida del vehículo fluido en los poros) y Oxidopolimerización (reticulación lenta de aceites secantes con el oxígeno).",
      "Evaporación por infrarrojos y sublimación del pigmento.",
      "Liofilización al vacío y polimerización iónica."
    ],
    correct: 0,
    explanation: "Primero, los aceites minerales de baja viscosidad se absorben por capilaridad en el papel (fijado inicial en segundos); después, los aceites vegetales (linaza, teka) reaccionan con el $O_2$ polimerizando en horas.",
    source: "Mecanismos de Secado en Tintas Grasas"
  },
  {
    theme: 44,
    question: "En las tintas de Offset Rotativo Heatset, el secado del impreso se logra en los hornos de túnel mediante:",
    options: [
      "La evaporación rápida de los disolventes de hidrocarburos de punto de ebullición controlado (240-300 °C) mediante chorros de aire caliente.",
      "La congelación criogénica del aceite vegetal.",
      "El pasado de una descarga de alta frecuencia de microondas."
    ],
    correct: 0,
    explanation: "El horno Heatset evapora los aceites minerales volátiles a temperaturas de banda de 120-150 °C; la banda pasa inmediatamente a los rodillos refrigeradores (*chill rolls*) para solidificar las resinas.",
    source: "Offset Rotativo de Gran Tirada Heatset"
  },
  {
    theme: 45,
    question: "El proceso de curado de las tintas offset UV / LED-UV se desencadena por una reacción de polimerización instántea provocada por:",
    options: [
      "La excitación de moléculas de Fotoiniciadores que generan radicales libres al recibir la radiación ultravioleta, enlazando monómeros y oligómeros.",
      "La combustión directa del oxígeno sobre el barniz de la tinta.",
      "La absorción del vapor de agua del aire ambiental."
    ],
    correct: 0,
    explanation: "Los fotoiniciadores absorben fotones UV (ej. 365-395 nm en LED) rompiéndose en radicales libres, los cuales atacan los dobles enlaces acrílicos de los monómeros/oligómeros formando una red sólida instantly.",
    source: "Tecnología de Curado por Radiación UV y LED"
  },
  {
    theme: 46,
    question: "En la solución de mojado offset, el intervalo de pH técnicamente óptimo para mantener la hidrofilia de la plancha sin dañar el secado de la tinta oscila entre:",
    options: [
      "4,8 y 5,5.",
      "1,0 y 2,5.",
      "8,5 y 10,5."
    ],
    correct: 0,
    explanation: "Un pH por debajo de 4,8 ataca los secantes metálicos de la tinta e inhibe la oxidopolimerización; un pH alcalino (>5,5) ataca la capa arábiga/protectora y produce engrase.",
    source: "Química del Agua de Mojado e Interacción de Superficies"
  },
  {
    theme: 47,
    question: "La Conductividad Eléctrica de la solución de mojado (medida en $\\mu\\text{S/cm}$) es un indicador de control en máquina que sirve para:",
    options: [
      "Monitorizar la acumulación de sales disueltas, aditivos y contaminación de la solución (debiendo mantenerse idealmente entre 1.000 y 1.500 μS/cm).",
      "Medir el espesor de la capa de tinta sobre los rodillos de caucho.",
      "Determinar la velocidad mecánica de los cilindros."
    ],
    correct: 0,
    explanation: "A medida que el agua se contamina con papel, tinta y sales, la conductividad sube. Un exceso (>2.000 $\\mu\\text{S/cm}$) indica la necesidad de cambiar el baño por riesgo de emulsión o marcas.",
    source: "Parámetros de Control en Mojado Offset"
  },
  {
    theme: 48,
    question: "En el equilibrio agua-tinta de la prensa offset, la tasa de emulsión de agua en la tinta considerada como 'Emulsión Estable Óptima' debe situarse en un rango de:",
    options: [
      "15% a 20% de agua dispersa en la fase continua de tinta.",
      "80% a 90% de agua.",
      "0% de agua (ausencia absoluta de agua en la masa de tinta)."
    ],
    correct: 0,
    explanation: "La impresión offset requiere una micro-emulsión 'agua en aceite' del 15-20% para lubricar la plancha. Si la emulsión supera el 30% la tinta pierde tiro y densidad (*emulsificación excesiva*).",
    source: "Reología e Interacción Agua-Tinta en Prensa"
  },
  {
    theme: 49,
    question: "En las planchas offset CTP sin procesado (Processless) de tecnología por grabado térmico, la eliminación de la capa no expuesta se produce mediante:",
    options: [
      "El revelado directo en la propia máquina de imprimir por la acción combinada de la solución de mojado y la tinta en los primeros pliegos de arranque.",
      "El lavado con solventes aromáticos a 80 °C en una lavadora dedicada.",
      "El cepillado con cerdas de acero inoxidable."
    ],
    correct: 0,
    explanation: "Las planchas processless rompen el recubrimiento polimérico con el láser térmico; al montarse en la prensa, el agua y la tinta lavan el residuo pasándolo a las primeras hojas de maculatura.",
    source: "Sistemas CTP Processless de ÚLtima Generación"
  },
  {
    theme: 50,
    question: "El defecto de impresión offset conocido como 'Imagen Fantasma Mecánica' (Ghosting) está provocado por:",
    options: [
      "El agotamiento local de la película de tinta en los rodillos dadores debido a una distribución asimétrica del diseño en la forma impresora.",
      "Un fallo en la tensión de la pantalla CTP en la preimpresión.",
      "El exceso de calor en el túnel de secado infrarrojo."
    ],
    correct: 0,
    explanation: "Ocurre cuando zonas de masa densa anteriores 'vacián' de tinta el perímetro de los rodillos dadores, dejando sombras o siluetas reproducidas rítmicamente más adelante.",
    source: "Diagnóstico y Solución de Defectos en Offset"
  },

  // ==========================================
  // BLOQUE VI: FLEXOGRAFÍA, HUECOGRABADO Y OTROS SISTEMAS (51-60)
  // ==========================================
  {
    theme: 51,
    question: "En el sistema de impresión Flexográfico, el rodillo medidor cilíndrico cerámico grabado por láser que dosifica el caudal exacto de tinta se denomina:",
    options: [
      "Rodillo Anilox.",
      "Cilindro oscilador.",
      "Rodillo dandy."
    ],
    correct: 0,
    explanation: "El rodillo Anilox contiene celdas microscópicas (definidas por su lineatura en lpi y volumen celular en $\\text{cm}^3/\\text{m}^2$ o BCM) para aportar una película uniforme de tinta fluida.",
    source: "Tecnología de Impresión Flexográfica"
  },
  {
    theme: 52,
    question: "La capacidad de aporte de tinta de un rodillo Anilox se mide cuantitativamente en unidades de BCM, cuya sigla representa:",
    options: [
      "Billion Cubic Microns per square inch (Buscando la medida de volumen de celda).",
      "Basic Color Measurement.",
      "Barometric Cylinder Method."
    ],
    correct: 0,
    explanation: "BCM ($1\\text{ BCM} \\approx 1,55\\text{ cm}^3/\\text{m}^2$) mide el volumen total de tinta que pueden albergar las alvéolos microscópicos del anilox por pulgada cuadrada.",
    source: "Especificaciones Técnicas de Rodillos Anilox"
  },
  {
    theme: 53,
    question: "En Flexografía, el sistema de racla de 'Cámara Cerrada' (Chambered Doctor Blade) utiliza dos cuchillas con la función de:",
    options: [
      "Una cuchilla retiene/sella el fluido en la cámara (cuchilla de retención) y la otra rasca el exceso de tinta sobre la superficie del anilox (cuchilla dosificadora).",
      "Ambas cuchillas cortan el papel a la salida de la máquina.",
      "Proteger al operador de las radiaciones ultravioleta del secado."
    ],
    correct: 0,
    explanation: "La cámara estanca pressurizada mantiene la tinta aislada de la evaporación de solventes; la cuchilla dosificadora limpia el excedente de la superficie del anilox a ángulo inverso.",
    source: "Sistemas de Entintado en Flexografía de Alta Velocidad"
  },
  {
    theme: 54,
    question: "En la fabricación de los cilindros de Huecograbado industrial, la capa metálica superficial sobre la que se graba el diseño y que posteriormente se protege con cromo duro es de:",
    options: [
      "Cobre.",
      "Aluminio anodizado.",
      "Zinc recristalizado."
    ],
    correct: 0,
    explanation: "El cilindro base de acero se reboza con una capa gruesa de electro-cobre (donde se graban las celdas mediante buril de diamante o láser) y luego se croma para resistir el rozamiento de la racla.",
    source: "Grabado y Galvanoplastia de Cilindros de Huecograbado"
  },
  {
    theme: 55,
    question: "A diferencia del offset, las tintas empleadas en Huecograbado y Flexografía se caracterizan por presentar una viscosidad reológica de tipo:",
    options: [
      "Muy baja viscosidad (fluidas / líquidas), midiéndose su fluidez con copas de viscosidad (Copa Ford N.º 4 o Zahn N.º 2).",
      "Viscosidad pastosa similar a la manteca de cacao.",
      "Alta viscosidad termoplástica en estado sólido."
    ],
    correct: 0,
    explanation: "Al ser sistemas con entintado directo por inmersión o anilox, las tintas son líquidas basadas en agua o solventes volátiles, midiendo el tiempo de vaciado en segundos por copa de eflujo.",
    source: "Viscosimetría de Tintas Líquidas"
  },
  {
    theme: 56,
    question: "En la preparación de la pantalla de Serigrafía, la selección de una malla con una densidad de hilos de 150 hilos/cm frente a una de 43 hilos/cm está indicada para:",
    options: [
      "Impresiones de alta resolución, tramas finas y detalles sobre papeles o plásticos con depósitos de capa fina.",
      "Estampación textil con tintas cubrientes de purpurina o pigmentos hinchables.",
      "Aplicación de capas gruesas de cola adhesiva de encuadernación."
    ],
    correct: 0,
    explanation: "A mayor número de hilos por cm, menor es el diámetro del poro y la abertura de la malla, permitiendo reproducir detalles de trama finos y controlar el espesor de la película de tinta.",
    source: "Tecnología de Pantallas y Mallas de Serigrafía"
  },
  {
    theme: 57,
    question: "En Serigrafía, la dureza de la rasqueta de poliuretano se mide en grados Shore A. Una dureza alta (75-85 Shore A) es idónea para:",
    options: [
      "Impresiones de alta definición con bajo depósito de tinta sobre soportes rígidos y planos.",
      "Imprimir sobre superficies irregulares, baldosas o textiles rugosos.",
      "Limpiar los restos de tinta seca de la racla."
    ],
    correct: 0,
    explanation: "Las rasquetas duras flexionan menos bajo presión, manteniendo el ángulo de ataque y depositando capas delgadas y nítidas de tinta sobre soportes lisos.",
    source: "Procesos y Variables en Serigrafía Industrial"
  },
  {
    theme: 58,
    question: "En la impresión Digital Electrofotográfica de Tóner Líquido (tecnología HP Indigo ElectroInk), las partículas de pigmento suspendidas en aceite dieléctrico se transfieren al soporte mediante:",
    options: [
      "Atracción electrostática dirigida por campos eléctricos sobre un tambor fotoconductor y posterior transferencia por un mantilla calefactada.",
      "Cabezales piezoeléctricos de inyección directa de gotas.",
      "Impacto térmico de microagujas mecánicas."
    ],
    correct: 0,
    explanation: "ElectroInk combina el tamaño diminuto de pigmento líquido con la transferencia electrostática (fotoconductor de selenio/polímero) e impresión por manta de caucho térmica.",
    source: "Sistemas Digitales de Impresión y NIP (Non-Impact Printing)"
  },
  {
    theme: 59,
    question: "En la impresión digital por Inyección de Tinta (Inkjet), la tecnología Piezoeléctrica se distingue de la Térmica (Bubble-Jet) en que:",
    options: [
      "Expulsa la gota deformando un cristal piezoeléctrico mediante un pulso eléctrico sin calentar la tinta, admitiendo mayor variedad de tintas (UV, solvente, agua).",
      "Evapora una burbuja de vapor hirviendo la tinta a más de 300 °C.",
      "Utiliza cintas magnetizadas para transferir el color."
    ],
    correct: 0,
    explanation: "El piezoeléctrico aplica voltaje al cristal provocando un cambio mecánico que presiona la cámara de tinta e impulsa la gota; al no haber calor, no degrada los componentes de tintas UV o solventes.",
    source: "Cabezales e Ingeniería Inkjet Industrial"
  },
  {
    theme: 60,
    question: "El concepto de Cobertura Total de Tinta (TAC o TIK - Total Ink Limit) en los perfiles de separación de color representa:",
    options: [
      "El límite máximo acumulado de la suma de porcentajes de los cuatro colores CMYK en las sombras más profundas (ej. 300-320% en offset pliego).",
      "El porcentaje de agua permitido en la emulsión del tintero.",
      "El grosor total del pliego de papel sumando el cartón."
    ],
    correct: 0,
    explanation: "El TAC evita que la suma teórica máxima de $100\\% C + 100\\% M + 100\\% Y + 100\\% K = 400\\%$ genere repintado o falta de secado; los perfiles ICC limitan el TAC a $280-320\\%$.",
    source: "Estandarización de Separación de Color ISO 12647"
  },

  // ==========================================
  // BLOQUE VII: GUILLOTINADO, PLEGADO Y ACABADOS (61-70)
  // ==========================================
  {
    theme: 61,
    question: "En la cuchilla de una guillotina industrial para corte de papel, el ángulo de afilado (bisel) debe ajustarse según la dureza del material. Para cortar papeles blandos se requiere:",
    options: [
      "Un ángulo de afilado más agudo (21° a 24°).",
      "Un ángulo de afilado obtuso (30° a 35°).",
      "Un ángulo recto plano de 90°."
    ],
    correct: 0,
    explanation: "Materiales blandos o porosos exigen biseles agudos ($21-24^\circ$) para penetrar limpiamente; materiales duros o cartones densos requieren biseles más obtusos ($26-30^\circ$) para no mellar la cuchilla.",
    source: "Maquinaria de Guillotinado y Cortado de Papel"
  },
  {
    theme: 62,
    question: "En la guillotina de papel, la presión ejercida por el 'Pisón' antes del descenso de la cuchilla debe regularse para evitar el defecto de:",
    options: [
      "El deslazamiento de los pliegos superiores del taco produciendo una variación del tamaño de corte entre la parte arriba y abajo (corte fuera de escuadra o inclinado).",
      "El cegado de la trama en las imágenes CTP.",
      "El cambio de color de las tintas UV."
    ],
    correct: 0,
    explanation: "Si la presión del pisón es insuficiente, la fuerza de arrastre de la cuchilla empuja los pliegos superiores del taco produciendo pliegos de tamaño desigual en el fondo respecto al tope.",
    source: "Mecánica y Operación de Guillotinas Programables"
  },
  {
    theme: 63,
    question: "En las máquinas Plegadoras de bolsas (Buckle Folders), la formación del doblez en el pliego de papel se produce por:",
    options: [
      "El tope del papel en el fondo de la bolsa que fuerza el pandeo del pliego, siendo aprisionado y pinzado por los rodillos plegadores.",
      "El golpe vertical de una cuchilla mecánica sobre el pliego empujándolo entre dos rodillos.",
      "La aplicación de un chorro de aire comprimido a 50 bares."
    ],
    correct: 0,
    explanation: "El pliego avanza impulsado por rodillos hacia la bolsa hasta chocar con el tope ajustable; la hoja no puede avanzar más, se abolla en la garganta y los rodillos inferiores la atrapan doblándola.",
    source: "Técnicas de Plegado y Acabados de Editorial"
  },
  {
    theme: 64,
    question: "Las plegadoras combinadas de bolsa y cuchilla se utilizan preferentemente para la confección de folletos y cuadernillos porque:",
    options: [
      "La bolsa realiza los plegados en paralelo a alta velocidad y la cuchilla efectúa los plegados cruzados en ángulo recto para pliegos de elevado gramaje.",
      "La cuchilla seca la tinta mientras la bolsa engoma el lomo.",
      "Eliminan la necesidad de recortar la maculatura en la guillotina."
    ],
    correct: 0,
    explanation: "Las bolsas admiten alta velocidad para plegados paralelos sucesivos; cuando el cuadernillo se vuelve grueso por las múltiples capas, la cuchilla mecánica garantiza un plegado cruzado limpio.",
    source: "Sistemas de Plegado de Pliegos Editoriales"
  },
  {
    theme: 65,
    question: "En la encuadernación rústica fresada (Perfect Binding), la diferencia fundamental entre el adhesivo tradicional EVA y el adhesivo PUR (Poliuretano Reactivo) es:",
    options: [
      "El PUR reticula por reacción química con la humedad ambiente formando enlaces covalentes flexibles e insolubles que resisten disolventes y temperaturas extremas.",
      "El EVA se aplica a temperatura ambiente mientras que el PUR requiere fundirse a 500 °C.",
      "El EVA es un adhesivo líquido al agua y el PUR es una cinta autoadhesiva."
    ],
    correct: 0,
    explanation: "El EVA es un termoplástico (re-fundible por calor); el PUR es un polímero reactivo que cura con la humedad creando un enlace definitivo con altísima resistencia al tirado de hoja (*page pull test*).",
    source: "Tecnología de Adhesivos en Encuadernación"
  },
  {
    theme: 66,
    question: "En la fase de preparación del lomo en la encuadernación rústica fresada, la función del fresado y tallado de muescas (rascado) es:",
    options: [
      "Eliminar el lomo del cuadernillo y abrir micro-ranuras para aumentar la superficie de contacto física y la penetración del adhesivo.",
      "Coser con hilo de algodón los pliegos interiores.",
      "Aplicar pan de oro sobre los cantos del libro."
    ],
    correct: 0,
    explanation: "Las fresas cortan el lomo doblado dejando hojas sueltas alineadas, y los discos rascadores crean muescas donde el pegamento penetrates creando 'clavos' mecánicos de adhesivo.",
    source: "Encuadernación Industrial en Rústica"
  },
  {
    theme: 67,
    question: "En la encuadernación en tapa dura (Cartoné), el proceso denominado 'Alzamiento de Tapas' o confección de la cubierta consiste en pegado de:",
    options: [
      "Dos cartones para las tapas y un cartoncillo para el lomo (lomera) sobre el material de recubrimiento (papel, tela o piel) previamente encolado.",
      "Las hojas sueltas directamente sobre las tapas de madera.",
      "Las guardas al lomo de la tripa cosida únicamente."
    ],
    correct: 0,
    explanation: "La alzatapas coloca automáticamente los dos planos de cartón duro y la tira central flexible de la lomera sobre la cubierta engomada, doblando y pegando los dobladillos o vueltas.",
    source: "Procesos de Encuadernación en Tapa Dura"
  },
  {
    theme: 68,
    question: "En el diseño de troqueles planos para embalajes de cartón, los flejes metálicos de hendido se diferencian de los flejes de corte en que:",
    options: [
      "Tienen el borde superior redondeado u obtuso y una altura inferior a la de los flejes de corte para marcar la línea de dobles sin romper el cartón.",
      "Están fabricados en plástico flexible de color amarillo.",
      "Tienen dientes de sierra afilados para perforar micropuntos."
    ],
    correct: 0,
    explanation: "El fleje de corte rebasa la altura para atravesar el cartón contra la pletina; el fleje de hendido es más bajo y romo para aplastar localmente el cartón dentro de la contrahendidura (canaleta).",
    source: "Fabricación de Troqueles y Packaging"
  },
  {
    theme: 69,
    question: "El proceso de Estampación en Caliente (Hot Stamping) transfiere la capa metálica o pigmentada de la película 'Foil' al soporte mediante:",
    options: [
      "La acción combinada de presión mecánica y calor ejercida por un grabado térmico (cliché) que activa el adhesivo termofusible de la cinta.",
      "La inmersión del pliego en un baño electrolítico de sales de oro.",
      "La irradiación de radiación de electrones sin contacto."
    ],
    correct: 0,
    explanation: "El cliché caliente (100-150 °C) presiona la cinta foil contra el papel; el calor desprende la laca/aluminio de la cinta soporte de poliéster y funde el adhesivo pegándolo al soporte.",
    source: "Acabados Especiales y Estampación Térmica"
  },
  {
    theme: 70,
    question: "En el proceso de Plastificado o Laminado de impresos con películas de Polipropileno Biorientado (BOPP), el plastificado 'en seco' (Thermal Lamination) se aplica mediante:",
    options: [
      "Películas que incorporan una capa previa de adhesivo termofusible (EVA) que se activa por la presión y calor de un cilindro calandrador.",
      "La aplicación de cola sintética líquida al agua sobre el papel justo antes de unir el plástico.",
      "La fusión completa de la película plástica en un horno a 300 °C."
    ],
    correct: 0,
    explanation: "El film térmico ya viene pre-recubierto de resina EVA sólida; al pasar por el rodillo calandrador caliente (100-120 °C) el EVA se funde y adhiere instantáneamente a la hoja impresa.",
    source: "Laminación y Acabados de Protección Superficial"
  },

  // ==========================================
  // BLOQUE VIII: NORMATIVA ISO Y CONTROL DE CALIDAD (71-80)
  // ==========================================
  {
    theme: 71,
    question: "La norma internacional ISO 12647-2 define los estándares de control de proceso para la producción de impresos en el sistema:",
    options: [
      "Offset en pliego y rotativa Heatset.",
      "Prensa diaria en Coldset.",
      "Flexografía sobre empaques flexibles."
    ],
    correct: 0,
    explanation: "ISO 12647-2 es el estándar mundial de referencia que fija las tolerancias colorimétricas (CIELAB), incrementos de valor tonal (TVI) y tipos de papel para Offset proceso pliego y rotativa.",
    source: "ISO 12647-2 - Graphic Technology - Offset Lithographic Processes"
  },
  {
    theme: 72,
    question: "Según la norma ISO 12647-2, las tolerancias de diferencia de color ($\\Delta E^*{ab}$) admitidas para la desviación de los tonos sólidos CMYK en la tirada respecto a los valores objetivo son:",
    options: [
      "ΔE*ab <= 5,0 unidades.",
      "ΔE*ab <= 0,1 unidades.",
      "ΔE*ab <= 15,0 unidades."
    ],
    correct: 0,
    explanation: "La norma establece que la desviación aceptable ($\Delta E^*$) de la tirada frente a los valores estándar aprobados de los colores primarios sólidos no debe exceder de 5,0 unidades.",
    source: "ISO 12647-2 - Control de Tirada de Impresión"
  },
  {
    theme: 73,
    question: "En la especificación de pruebas de contrato digitales certificadas (ISO 12647-7), la tira de control de color estándar empleada obligatoriamente para la verificación espectrofotométrica es:",
    options: [
      "UGRA/FOGRA Media Wedge CMYK.",
      "Escala de grises Kodak Q-13.",
      "Tira IT8.7/2 para escáneres opacos."
    ],
    correct: 0,
    explanation: "La tira de control FOGRA Media Wedge contiene parches medibles representativos del espacio de color; su lectura espectral valida si la prueba cumple la norma de contrato.",
    source: "ISO 12647-7 - Proofing Processes Working Directly from Digital Data"
  },
  {
    theme: 74,
    question: "La norma ISO 3664 exige que la luminancia de la superficie de inspección en las mesas de control de impresos en imprenta sea de:",
    options: [
      "2.000 lux (+- 500 lux).",
      "100 lux.",
      "50.000 lux."
    ],
    correct: 0,
    explanation: "Para la evaluación precisa del color y la comparación entre prueba y pliego de tirada, la norma ISO 3664 fija una iluminación intensiva de $2.000\\text{ lux}$ con fuente D50.",
    source: "ISO 3664 - Viewing Conditions for Graphic Technology"
  },
  {
    theme: 75,
    question: "En el control estandarizado del proceso de impresión, el término FOGRA39 (o Characterization Data Set FOGRA39) se refiere a:",
    options: [
      "El conjunto de datos de caracterización estándar para impresión offset en papel estucado blanco (Tipo 1 y 2) bajo norma ISO 12647-2.",
      "Un perfil exclusivo para impresoras térmicas de tickets.",
      "Un software de compresión de fuentes OpenType."
    ],
    correct: 0,
    explanation: "FOGRA39 (y su actualización FOGRA51/PSO Coated v3) es la caracterización de referencia europea empleada para generar perfiles ICC de separación (ej. ISOCoated_v2).",
    source: "Estandarización Fogra y Perfiles de Caracterización"
  },
  {
    theme: 76,
    question: "El índice de reproducción cromática (CRI / Ra) exigido por la norma ISO 3664 a las tubos fluorescentes o fuentes LED de las cabinas de control es de:",
    options: [
      "Ra >= 95.",
      "Ra >= 50.",
      "Ra = 10."
    ],
    correct: 0,
    explanation: "El índice de rendimiento de color debe ser de 95 o superior sobre 100 para garantizar que la fuente lumínica no distorsione espectralmente la percepción de las tonalidades.",
    source: "ISO 3664 - Especificaciones de Iluminación"
  },
  {
    theme: 77,
    question: "En el análisis de fallos en el papel, el método de ensayo 'Taber' (ISO 2493) se utiliza para determinar:",
    options: [
      "La resistencia a la flexión y rigidez del papel y cartón.",
      "La masa de cenizas tras la calcinación a 900 °C.",
      "La permeabilidad al vapor de agua."
    ],
    correct: 0,
    explanation: "El durómetro Taber mide el momento de flexión (en mNm o unidades Taber) ejercido sobre una probeta sujeta por un extremo al desviarla un ángulo estandarizado ($15^\circ$).",
    source: "ISO 2493 - Paper and Board - Determination of Bending Resistance"
  },
  {
    theme: 78,
    question: "El ensayo estandarizado de resistencia al estallido (Bursting Strength Test / Método Mullen - ISO 2758/2759) mide:",
    options: [
      "La presión hidráulica máxima (en kPa) que soporta una probeta de papel antes de reventar al ser deformada por una membrana elástica.",
      "La fricción entre dos pliegos al deslizarse.",
      "El tiempo de secado de la tinta de serigrafía."
    ],
    correct: 0,
    explanation: "El Mullen aplica presión mediante un fluido que hincha un diafragma de goma contra el papel sujetado por un anillo rígido, registrando el punto de rotura por tensión multidireccional.",
    source: "ISO 2758 / ISO 2759 - Determination of Bursting Strength"
  },
  {
    theme: 79,
    question: "En la evaluación de la estabilidad dimensional del papel según normas ISO, el 'Coeficiente de Dilatación Higrométrica' expresa:",
    options: [
      "El porcentaje de variación dimensional de la longitud de una probeta por cada 1% de cambio en la Humedad Relativa del aire ambiente.",
      "El aumento de peso al sumergir el pliego en agua a 100 °C.",
      "El número de poros por milímetro cuadrado."
    ],
    correct: 0,
    explanation: "Indica cuánto se dilata o encoge porcentualmente el papel ante fluctuaciones de humedad; es crítico en la dirección de contrafibra para el registro en pasadas sucesivas.",
    source: "Propiedades Físicas e Higrométricas del Papel"
  },
  {
    theme: 80,
    question: "El concepto de 'Grama de Color' o Gamut de un sistema de impresión representa:",
    options: [
      "El volumen tridimensional total de sensaciones cromáticas que dicho sistema es capaz de reproducir físicamente.",
      "El gramaje de las tintas aplicado en la hoja.",
      "El número total de páginas imprimibles por hora."
    ],
    correct: 0,
    explanation: "El Gamut acota las fronteras geométricas dentro del espacio de color (ej. CIELAB) que una combinación específica de máquina, tinta y papel puede reproducir.",
    source: "Gestión de Color y Delimitación de Gamut"
  },

  // ==========================================
  // BLOQUE IX: TIPOMETRÍA, HISTORIA DE LA IMPRENTA Y FUENTES (81-90)
  // ==========================================
  {
    theme: 81,
    question: "En el siglo XI (hacia 1040), el inventor chino Bi Sheng desarrolló el primer sistema conocido de tipos móviles, los cuales estaban confeccionados de:",
    options: [
      "Arcilla cocida (cerámica).",
      "Plomo y antimonio fundido.",
      "Madera de cerezo tallada con buril de acero."
    ],
    correct: 0,
    explanation: "Bi Sheng moldeó caracteres individuales en arcilla blanda que posterior horneó para endurecerlos, fijándolos sobre una placa de hierro con resina y cera para imprimir.",
    source: "Historia Universal de la Imprenta y la Tipografía"
  },
  {
    theme: 82,
    question: "¿En qué año e imprenta Veneciana introdujo el impresor Aldus Manutius y el grabador Francesco Griffo por primera vez los tipos 'Cursivos' o 'Itálicos' en la impresión de libros de bolsillo?",
    options: [
      "En el año 1501.",
      "En el año 1450.",
      "En el año 1789."
    ],
    correct: 0,
    explanation: "Aldo Manuzio introdujo en 1501 la letra itálica o grifa (diseñada por Francesco Griffo) para ahorrar espacio en sus ediciones 'octavo' de clásicos grecolatinos.",
    source: "Historia del Diseño Gráfico y la Tipografía Renalcentista"
  },
  {
    theme: 83,
    question: "En la tipometría computacional moderna empleada por lenguajes como PostScript y software de maquetación, la equivalencia de 1 Punto DTP (PostScript Point) es:",
    options: [
      "1/72 de pulgada exacta (0,352777 mm).",
      "0,376065 mm (Punto Didot).",
      "0,351472 mm (Punto Pica tradicional)."
    ],
    correct: 0,
    explanation: "El punto digital DTP estandarizado por Adobe simplificó la tipometría angloamericana fijando exactamente 72 puntos por pulgada ($1\\text{ pt} = 25,4 / 72 = 0,352777\\text{ mm}$).",
    source: "Sistemas Tipométricos Digitales PostScript"
  },
  {
    theme: 84,
    question: "En la clasificación tipográfica de Vox-ATypI, la familia de las 'Didonas' o Neoclásicas (ej. Bodoni, Didot) se distingue morfológicamente por:",
    options: [
      "Contraste abrupto y extremo entre trazos gruesos y finos, remates rectilíneos horizontales filiformes sin cartela y eje de modulación totalmente vertical.",
      "Remates triangulares suaves y trazos modulados de inspiración caligráfica.",
      "Ausencia total de remates (Paloseco / Sans Serif)."
    ],
    correct: 0,
    explanation: "Las Didonas representan la cúspide de la tipografía neoclásica del siglo XVIII, caracterizadas por su geometrización, modulación vertical estricta y remates finos como hilos.",
    source: "Clasificación Tipográfica Vox-ATypI"
  },
  {
    theme: 85,
    question: "Las fuentes de la familia 'Mecanas' o Egipcias (ej. Clarendon, Rockwell) presentan como rasgo anatómico característico:",
    options: [
      "Remates rectangulares o cuadrangulares pesados de grosor similar al de las astas principales.",
      "Astas descendentes muy largas y terminaciones redondeadas en forma de gota.",
      "Letras con inclinación a la izquierda de 45°."
    ],
    correct: 0,
    explanation: "Surgidas en la Revolución Industrial para cartelería publicitaria, las Egipcias o Mecanas destacan por sus remates gruesos en bloque o losa (*Slab Serif*).",
    source: "Anatomía y Estilos Tipográficos"
  },
  {
    theme: 86,
    question: "En la tipografía digital, las instrucciones técnicas denominadas 'Hinting' integradas en los archivos de fuentes vectoriales sirven para:",
    options: [
      "Ajustar los contornos matemáticos de las letras a la rejilla discreta de píxeles del dispositivo a baja resolución o tamaños pequeños, evitando que se deformen.",
      "Aumentar el número de colores de la tipografía en pantalla.",
      "Cifrar el archivo de la fuente para evitar la piratería informática."
    ],
    correct: 0,
    explanation: "El hinting añade microinstrucciones para decidir qué píxeles específicos encender cuando un carácter vectorial se muestra en pantallas de baja densidad de píxeles.",
    source: "Tecnología de Fuentes Digitales TrueType y OpenType"
  },
  {
    theme: 87,
    question: "El estándar tecnológico de 'Tipografías Variables' (OpenType Font Variations - ISO/IEC 14496-22) permite:",
    options: [
      "Contener en un único archivo de fuente múltiples ejes de variación continua (como peso, ancho, inclinación o tamaño óptico) sin necesidad de archivos independientes por estilo.",
      "Convertir automáticamente texto en archivos audio MP3.",
      "Imprimir caracteres en relieve sin usar tinta."
    ],
    correct: 0,
    explanation: "Desarrollado por Adobe, Apple, Google y Microsoft, las Variable Fonts permiten interpolar dinámicamente infinitos pesos (bold/light) y anchos dentro del mismo archivo OTF/TTF.",
    source: "Especificación OpenType Font Variations"
  },
  {
    theme: 88,
    question: "En la composición tipográfica, la regla de legibilidad que determina la longitud óptima de una línea de texto corrido establece un promedio de:",
    options: [
      "De 50 a 75 caracteres por línea (alrededor de 9 a 12 palabras).",
      "De 200 a 300 caracteres por línea.",
      "De 5 a 10 caracteres por línea."
    ],
    correct: 0,
    explanation: "Líneas demasiado largas fatigan la vista en el salto de retorno; líneas demasiado cortas rompen el ritmo de lectura. El estándar óptico editorial es de 50-75 caracteres por renglón.",
    source: "Diseño Editorial y Ortotipografía"
  },
  {
    theme: 89,
    question: "El concepto ortotipográfico denominado ' Tracking' (o espacio entre letras global) se diferencia del 'Kerning' en que:",
    options: [
      "El Tracking ajusta el espaciado entre caracteres de forma uniforme a lo largo de un bloque de texto seleccionado, mientras que el Kerning ajusta la distancia entre pares específicos de letras.",
      "El Tracking modifica la distancia entre líneas y el Kerning modifica el margen de la página.",
      "El Kerning solo se aplica a números arábigos y el Tracking a mayúsculas."
    ],
    correct: 0,
    explanation: "El tracking altera la densidad general del bloque (proporcional); el kerning es una corrección óptica puntual entre pares de caracteres conflictivos (ej. 'AV', 'Yo', 'Ta').",
    source: "Manual de Typographic Design & Layout"
  },
  {
    theme: 90,
    question: "En la anatomía de un carácter tipográfico, la distancia vertical comprendida entre la línea base y la altura de la cabeza de las letras minúsculas sin astas ascendentes se denomina:",
    options: [
      "Altura del Ojo Medio (o Altura-x).",
      "Cuerpo Didot.",
      "Blanco de trazo."
    ],
    correct: 0,
    explanation: "La altura-x es la medida del cuerpo central de la minúscula (como la letra 'x'); determina la percepción visual de tamaño de una tipografía más allá de su cuerpo en puntos.",
    source: "Anatomía de la Letra y Diseño de Tipos"
  },

  // ==========================================
  // BLOQUE X: ECOLOGÍA, SEGURIDAD Y TENDENCIAS INDUSTRIALES (91-100)
  // ==========================================
  {
    theme: 91,
    question: "En las normativas europeas sobre impacto medioambiental de envases y embalajes, la prueba de biodegradabilidad exige que el soporte se descomponga en un porcentaje del:",
    options: [
      "90% en un plazo máximo de 6 meses bajo condiciones de compostaje industrial (Norma EN 13432).",
      "10% en un plazo de 50 años.",
      "100% de conversión instantánea en agua en 24 horas."
    ],
    correct: 0,
    explanation: "La norma europea EN 13432 exige que al menos el 90% del material se biodegrade en dióxido de carbono, agua y biomasa en 6 meses de compostaje.",
    source: "Norma EN 13432 - Envases Compostables y Biodegradables"
  },
  {
    theme: 92,
    question: "Las tintas ecológicas formuladas a base de Aceites Vegetales (Soja, Girasol) reducen drásticamente las emisiones contaminantes a la atmósfera de:",
    options: [
      "Compuestos Orgánicos Volátiles (COVs / VOCs).",
      "Dióxido de titanio sólido.",
      "Gas helio radioactivo."
    ],
    correct: 0,
    explanation: "Sustituir los disolventes derivados del petróleo por oleorresinas vegetales elimina las emisiones de COVs durante la impresión y secado, mejorando la sostenibilidad.",
    source: "Tintas Ecológicas y Normativas Medioambientales"
  },
  {
    theme: 93,
    question: "El distintivo medioambiental de la Cadena de Custodia certificado por la entidad PEFC o FSC en un producto de papel garantiza que:",
    options: [
      "La fibra de madera utilizada procede de bosques gestionados de forma sostenible y fuentes controladas a lo largo de toda la cadena de transformación.",
      "El papel ha sido fabricado exclusivamente sin usar agua.",
      "La imprenta no utiliza energía eléctrica en la producción."
    ],
    correct: 0,
    explanation: "Los sellos FSC y PEFC certifican la trazabilidad desde el origen forestal sostenible hasta el producto impreso final pasando por la pasta, la fábrica de papel y la imprenta.",
    source: "Certificación de Cadena de Custodia FSC y PEFC"
  },
  {
    theme: 94,
    question: "En la impresión de seguridad para billetes y pasaportes, la técnica de 'Intaglio' es el término equivalente a:",
    options: [
      "Calcografía o Huecograbado directo con plancha de acero en relieve que produce un depósito de tinta palpablemente relieve táctil.",
      "Offset seco sin agua.",
      "Flexografía mediante fotopolímeros blandos."
    ],
    correct: 0,
    explanation: "El Intaglio calcográfico prensa el papel húmedo a altísima presión dentro de los surcos de la matriz de acero, logrando una película de tinta gruesa con relieve reconocible al tacto.",
    source: "Técnicas de Impresión de Documentos de Seguridad"
  },
  {
    theme: 95,
    question: "Los pigmentos 'Termocromáticos' utilizados en tintas de seguridad o empaque interactivo se caracterizan por:",
    options: [
      "Cambiar de color o volverse transparentes de forma reversible al alcanzar una determinada temperatura umbral.",
      "Brillar en la oscuridad tras absorber radiación gamma.",
      "Conducir corrientes de electricidad de alta tensión."
    ],
    correct: 0,
    explanation: "Las tintas termocromáticas contienen microcápsulas con colorantes leuco que reaccionan con la temperatura, cambiando de estado/color al frotar con el dedo o enfriar.",
    source: "Tintas Especiales y Funcionales"
  },
  {
    theme: 96,
    question: "En las impresoras de producción industrial con tecnología 'Inkjet Single-Pass' (de pasada única), el sistema de cabezales funciona mediante:",
    options: [
      "Una barra fija de cabezales ensamblados que cubre todo el ancho de la banda o pliego mientras el soporte avanza a alta velocidad por debajo.",
      "Un único cabezal que se desplaza transversalmente de izquierda a derecha en múltiples pasadas.",
      "Un espejo giratorio galvanométrico de helio-neón."
    ],
    correct: 0,
    explanation: "A diferencia de las impresoras de escaneo (multi-pass), en Single-Pass la barra de cabezales es estática y cubre todo el ancho, alcanzando velocidades idénticas a las prensas offset tradicionales.",
    source: "Inyección de Tinta Industrial Single-Pass"
  },
  {
    theme: 97,
    question: "En la inspección automatizada de calidad en línea (In-line Inspection System) instalada en impresoras o plegadoras, las cámaras de visión artificial 'Line Scan' operan:",
    options: [
      "Capturando la imagen impreso línea a línea de píxeles a frecuencias ultraaltas, comparándola en tiempo real contra el archivo PDF máster de preimpresión.",
      "Tomando fotografías de baja resolución cada 10.000 pliegos.",
      "Midiendo el peso en gramos del palé terminado."
    ],
    correct: 0,
    explanation: "Las cámaras de barrido lineal leen el 100% de la tirada a máxima velocidad, detectando defectos diminutos (puntos de tinta, rayas, motas, erratas o variaciones de color) expulsando el pliego defectuoso.",
    source: "Sistemas de Inspección y Visión Artificial en Impresión"
  },
  {
    theme: 98,
    question: "El proceso de acabado digital denominado 'Nanografía' (tecnología Landa) utiliza tintas con pigmentos del tamaño de:",
    options: [
      "Docenas de nanómetros, que se proyectan sobre una manta de transferencia caliente formando una película ultra-fina de plástico seco que se transfiere al papel.",
      "Varias micras de diámetro flotando en aceite mineral.",
      "Dos milímetros de diámetro en estado semisólido."
    ],
    correct: 0,
    explanation: "La nanografía utiliza nano-pigmentos en base agua inyectados sobre una correa calentada donde el agua se evapora instantly; la fina película plástica flexible resultante se transfiere 100% seca al soporte.",
    source: "Tecnología Nanográfica Landa y Física de Partículas"
  },
  {
    theme: 99,
    question: "En la prevención de riesgos laborales (PRL) de un taller de artes gráficas, la exposición a vapores de disolventes y alcoholes requiere instalar en las máquinas:",
    options: [
      "Sistemas de extracción localizada de aire en la zona de tinteros y túneles de secado con tratamiento de COVs.",
      "Ventiladores de techo convencionales dirigidos hacia los operadores.",
      "Máscaras de polvo de papel únicamente."
    ],
    correct: 0,
    explanation: "Los productos químicos orgánicos volátiles de la limpieza e impresión exigen extracción en el punto de emisión para cumplir los límites de exposición profesional (VLA/TLV).",
    source: "Seguridad e Higiene Industrial en Artes Gráficas"
  },
  {
    theme: 100,
    question: "El concepto de 'Impresión Funcional' o Electrónica Impresa abarca la producción de dispositivos como:",
    options: [
      "Circuitos electrónicos, etiquetas RFID, pantallas OLED y sensores fotovoltaicos depositados mediante técnicas de serigrafía, flexografía o inkjet.",
      "Libros de texto impresos en relieve Braille.",
      "Catálogos comerciales barnizados en la portada."
    ],
    correct: 0,
    explanation: "La impresión funcional aprovecha la capacidad de deposición de tintas conductoras (plata, grafeno, polímeros semiconductores) para fabricar electrónica flexible a escala industrial masiva.",
    source: "Electrónica Impresa e Impresión Funcional"
  },








  

  


















  { theme: 1, question: "¿Quién inventó la impresión con tipos móviles metálicos hacia el año 1450?", options: ["Johannes Gutenberg", "Alois Senefelder", "Ottmar Mergenthaler"], correct: 0, explanation: "Johannes Gutenberg inventó la imprenta de tipos móviles de metal hacia 1450.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 1, question: "¿Qué inventor desarrolló el proceso de la Litografía en 1796?", options: ["Alois Senefelder", "Karl Klietsch", "Ottmar Mergenthaler"], correct: 0, explanation: "Alois Senefelder inventó la litografía en 1796 basándose en la inmiscibilidad entre agua y grasa.", source: "Manual Artes Gráficas 1 (Pág. 2)" },
  { theme: 1, question: "La Linotipia fue inventada en el año 1886 por:", options: ["Ottmar Mergenthaler", "Karl Klietsch", "Johannes Gutenberg"], correct: 0, explanation: "Ottmar Mergenthaler inventó la Linotipia en 1886, revolucionando la composición de textos mecanizados.", source: "Manual Artes Gráficas 1 (Pág. 2)" }





];


/* =========================================================================
   3. BANCO DE PREGUNTAS - MÓDULO ARTES GRÁFICAS 2: TINTAS Y PROCESOS
   ========================================================================= */
const questionsModulo2 = [
  { theme: 1, question: "Según el manual, ¿cómo se definen las dos fases fundamentales de la composición de una tinta de impresión?", options: ["Fase sólida (insoluble: pigmentos/cargas) y Fase líquida (continua: vehículo/resinas/aceites)", "Fase ácida (disolventes) y Fase neutra (agua de mojado)", "Fase volatilizable (fotopolímeros) y Fase inerte (polvos antirrepinte)"], correct: 0, explanation: "La tinta consta de una fase sólida insoluble (pigmentos y cargas) y una fase líquida o continua denominada vehículo (formada por resinas, aceites o disolventes).", source: "Manual Artes Gráficas 2 - Tintas (Pág. 2)" }
];


/* =========================================================================
   4. BANCO DE PREGUNTAS - TEST EXÁMENES ANTERIORES (FNMT 2022 - 2026)
   ========================================================================= */
const questionsExamenes = [
  // --- CONVOCATORIA 2022 ---
  {
    theme: 2022,
    question: "[FNMT 2022 - P1] A la hora de cortar un papel, ¿cuál de estos se mostrará más inestable y difícil de igualar?",
    options: ["Adhesivo", "Offset no estucado", "Estucado alto brillo"],
    correct: 0,
    explanation: "El papel adhesivo presenta inestabilidad por la elasticidad del liner siliconado y la fluidez de la masa adhesiva.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P2] Si al igualar una resma de papel fino de unos 80 grs. observamos que hay aire entre los pliegos, ¿qué deberíamos hacer en relación con el tiempo de prensado antes del corte?",
    options: ["Aumentarlo", "Reducirlo", "Para esta situación es indiferente"],
    correct: 0,
    explanation: "Aumentar el tiempo de prensado expulsa el colchón de aire antes del descenso de la cuchilla, evitando desplazamientos.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P3] ¿Cuál es el rango de presiones que admiten los modelos POLAR 115?",
    options: ["De 150-4.500 daN", "De 100-4.000 daN", "De 150-5.000 daN"],
    correct: 0,
    explanation: "El circuito hidráulico de las POLAR 115 admite una regulación continua de presión de 150 a 4.500 decanewtons.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P4] Si queremos introducir una medida teórica y que la escuadra avance o retroceda a esa posición, ¿qué debemos hacer tanto en los modelos X como los XT?",
    options: ["Pulsar la tecla igual (=) 2 veces", "Introducir el valor y pulsar la tecla Enter una vez", "Introducir el valor y poner Modo Automático"],
    correct: 0,
    explanation: "La confirmación de desplazamiento inmediato a la cota tecleada exige la doble pulsación de la tecla '='.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P5] ¿A qué nos referimos cuando hablamos de que el papel está 'tenso'?",
    options: [
      "Debido a la tensión interfibrilar del papel y a un cambio de humedad desde el almacén hasta el momento de cortarlo, se produce un aumento dimensional",
      "Debido a que los bordes de los pliegos tienen más humedad que el centro se produce un comportamiento llamado 'emplatado'",
      "Debido a que los bordes de los pliegos están más secos que el centro se produce un comportamiento llamado 'emplatado'"
    ],
    correct: 0,
    explanation: "La tensión en el soporte se debe a la absorción o pérdida de humedad ambiental que modifica las dimensiones de las fibras.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P6] Debido al uso de polvos antimaculantes durante la impresión de los pliegos, ¿qué efecto se produce y cómo podemos solventarlo?",
    options: [
      "La posteta se vuelve esponjosa debido a la presencia de polvos entre sus pliegos, haciendo que el papel se vuelva resbaladizo. Para evitar que el papel se desplace durante el prensado aumentaremos la fuerza del prensado",
      "La posteta se vuelve esponjosa debido a la presencia de polvos entre sus pliegos, haciendo que el papel se vuelva resbaladizo. Para evitarlo es conveniente hacer un prensado sin corte previo",
      "La posteta se vuelve esponjosa debido a la presencia de polvos entre sus pliegos, haciendo que el papel se vuelva resbaladizo. Para evitar que el papel se desplace durante el prensado disminuiremos la fuerza del prensado"
    ],
    correct: 0,
    explanation: "El polvo atrapado genera un efecto rodamiento entre hojas que se frena aumentando la presión de pisón para compactar la masa.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P7] ¿Para qué es conveniente el uso de la función 'Eltrotact'?",
    options: [
      "Para cortar medidas de productos que se repiten en una misma dirección",
      "Para que la retirada del desperdicio en algunos cortes se automatice y se deposite bajo la mesa de corte",
      "Para facilitar la colocación de los productos una vez cortados"
    ],
    correct: 0,
    explanation: "Eltrotact ejecuta secuencias programadas de avance repetitivo cuando se fraccionan tiras de medidas idénticas.",
    source: "Examen Oficial FNMT 2022 (Pág. 1)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P8] ¿Cuál es la protección en caso de rotura de la biela mediante el perno de rotura en los modelos POLAR 115?",
    options: ["13t", "10t", "15t"],
    correct: 0,
    explanation: "El perno fusible de rotura mecánica se cizalla al alcanzar un límite de esfuerzo de 13 toneladas sobre la biela.",
    source: "Examen Oficial FNMT 2022 (Pág. 2)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P9] ¿Qué ocurre cuando trabajamos con presiones mucho más elevadas de las recomendadas para un material?",
    options: [
      "La cuchilla se desvía de abajo hacia delante y los pliegos inferiores se alargarán",
      "La cuchilla queda bloqueada después de realizar el corte y es preciso reiniciar la máquina",
      "La cuchilla saca el material debajo del pisón y los primeros pliegos son más largos"
    ],
    correct: 0,
    explanation: "El exceso de compresión deprime en exceso la zona del pisón, flexionando el bisel de la cuchilla hacia afuera.",
    source: "Examen Oficial FNMT 2022 (Pág. 2)"
  },
  {
    theme: 2022,
    question: "[FNMT 2022 - P10] ¿Cómo podemos reconocer que una cuchilla está cortando sin filo?",
    options: [
      "Cuando observamos que la superficie de corte y/o los desperdicios se pegan entre sí después de cortar",
      "Con unos guantes de seguridad y mucha precaución deslizando el dedo de delante hacia atrás del filo",
      "Porque la máquina se para continuamente durante el corte debido a las fuertes presiones que debe soportar"
    ],
    correct: 0,
    explanation: "El calor friccional generado por un filo desafilado o embotado derrite o adhiere las aristas del papel cortado.",
    source: "Examen Oficial FNMT 2022 (Pág. 2)"
  },

  // --- CONVOCATORIA 2023 ---
  {
    theme: 2023,
    question: "[FNMT 2023] En una nota de numeración impresa de resta en la FNMT, ¿cuál es la característica de la pila resultante?",
    options: [
      "El último pliego que sale de la rotativa tiene la numeración más baja",
      "El primer pliego que sale de la rotativa tiene la numeración más baja",
      "El último pliego que sale de la rotativa tiene la numeración más alta"
    ],
    correct: 0,
    explanation: "En la numeración impresa de resta, los valores descienden correlativamente hacia abajo, quedando el número menor en el último pliego.",
    source: "Examen Oficial FNMT 2023 (Pág. 1)"
  },
  {
    theme: 2023,
    question: "[FNMT 2023] ¿Qué sucede si se interrumpe la barrera de luz de la guillotina durante un corte?",
    options: [
      "El pisón y la cuchilla se paran inmediatamente, suena señal acústica y aparece: CORTE INTERRUMPIDO - BARRERA DE LUZ INTERRUMPIDA",
      "La cuchilla se para inmediatamente pero el pisón no, sonando una señal acústica",
      "El pisón y la cuchilla se paran inmediatamente, suena señal acústica y aparece: IMPOSIBILIDAD DE CORTE"
    ],
    correct: 0,
    explanation: "Corta instantáneamente la hidráulica de ambos elementos activos notificando la causa exacta en la pantalla.",
    source: "Examen Oficial FNMT 2023 (Pág. 2)"
  },
  {
    theme: 2023,
    question: "[FNMT 2023] ¿A qué función corresponde la apertura de la ranura frontal en la mesa de trabajo de las guillotinas POLAR?",
    options: [
      "Mesa Autotrim para la evacuación automática de desperdicios de desbarbe",
      "Función Eltrotact para cortes repetitivos",
      "Función Fixomat para la alineación neumática"
    ],
    correct: 0,
    explanation: "El sistema Autotrim desplaza la mesa delantera creando una ranura para deshacerse automáticamente de las tiras de recorte sobrantes.",
    source: "Examen Oficial FNMT 2023 (Pág. 3)"
  },

  // --- CONVOCATORIA 2025 (100 PREGUNTAS BANCO COMPLETO) ---
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Cuál es el gramaje máximo considerado para que un soporte se considere papel?", options: ["250 gr/m²", "225 gr/m²", "400 gr/m²"], correct: 0, explanation: "Por convenio industrial en artes gráficas, la masa por unidad de superficie de hasta 250 g/m² se clasifica como papel, pasando a ser cartulina/cartón a partir de esa cifra.", source: "Examen Oficial FNMT 2025 (Pregunta 1)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", el papel estucado alto brillo (Cast Coated) se caracteriza por:", options: ["Nula uniformidad superficial.", "Capa de estuco entre 2 y 3 gr/m² por cara.", "Alta estabilidad dimensional."], correct: 2, explanation: "El soporte Cast Coated destaca por poseer una alta estabilidad dimensional unida a su cara lisa espejada.", source: "Examen Oficial FNMT 2025 (Pregunta 2)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", ¿qué tipo de papel se emplean comúnmente para albaranes y talonarios?", options: ["Papel prensa", "Papel autocopiativo", "Papel biblia"], correct: 1, explanation: "El papel autocopiativo permite la duplicación de escritura por presión física entre hojas CB, CFB y CF.", source: "Examen Oficial FNMT 2025 (Pregunta 3)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", el papel prensa presenta una muy alta proporción de:", options: ["Pasta química", "Pasta reciclada", "Pasta mecánica"], correct: 2, explanation: "El papel periódico se compone principalmente de pasta mecánica desfibrada, de menor coste y alta opacidad.", source: "Examen Oficial FNMT 2025 (Pregunta 4)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", ¿cuál de los siguientes, es impermeable a las grasas y a la humedad, cuyo uso es habitual en la envoltura de carnes y pescados?", options: ["Papel cristal", "Papel vegetal", "Papel tisú"], correct: 1, explanation: "El papel vegetal (o sulfurizado) ofrece alta barrera antigrasa e impermeabilidad hídrica.", source: "Examen Oficial FNMT 2025 (Pregunta 5)" },
  { theme: 2025, question: "El papel cebolla o seda tiene un gramaje aproximado de:", options: ["Más de 100 gr/m²", "50-70 gr/m²", "Menor a 25 gr/m²"], correct: 2, explanation: "Los papeles de seda o cebolla se encuadran en los papeles ultraligeros con peso inferior a 25 g/m².", source: "Examen Oficial FNMT 2025 (Pregunta 6)" },
  { theme: 2025, question: "¿Qué propiedad se relaciona con el índice Mullen (SR)?", options: ["Brillo", "Reventamiento", "Alargamiento"], correct: 1, explanation: "El ensayo y aparato Mullen determina la resistencia al estallido o reventamiento del soporte.", source: "Examen Oficial FNMT 2025 (Pregunta 7)" },
  { theme: 2025, question: "Los papeles verjurados se identifican por:", options: ["Una capa plástica superficial", "Presentar puntizones y corondeles", "Color negro opaco"], correct: 1, explanation: "La filigrana continua del verjurado muestra la huella de los alambres de la verjura: puntizones (finos) y corondeles (gruesos).", source: "Examen Oficial FNMT 2025 (Pregunta 8)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", las dimensiones del formato clásico de papel en España llamado folio son:", options: ["220 mm x 320 mm", "210 mm x 297 mm", "210 mm x 300 mm"], correct: 2, explanation: "El formato tradicional de folio comercial en España equivale a 210 × 300 mm.", source: "Examen Oficial FNMT 2025 (Pregunta 9)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", una bala equivale a:", options: ["10 resmas", "5 resmas", "3 resmas"], correct: 0, explanation: "Una bala de papel agrupa un total de 10 resmas (5.000 pliegos).", source: "Examen Oficial FNMT 2025 (Pregunta 10)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Qué es el gramaje?", options: ["Grosor total del papel o cartón por m² en condiciones normalizadas.", "Peso de un pliego estándar (70 cm x 100 cm) de papel o cartón.", "Masa por unidad de superficie del papel o cartón."], correct: 2, explanation: "Definición física normalizada del gramaje expresada habitualmente en g/m².", source: "Examen Oficial FNMT 2025 (Pregunta 11)" },
  { theme: 2025, question: "Según el libro \"Materiales de producción en artes gráficas\", ¿Con qué coincide la dirección de fibra que presentan los soportes papeleros?", options: ["Dirección en que el papel se corta", "Dirección de fabricación de la máquina de papel", "Dirección de plegado"], correct: 1, explanation: "Las fibras se orientan longitudinalmente en la dirección de avance de la tela de formación de la máquina continua.", source: "Examen Oficial FNMT 2025 (Pregunta 12)" },
  { theme: 2025, question: "¿Qué aparato se utiliza para medir la resistencia al estallido del papel?", options: ["Aparato Elmendorf", "Aparato Mullen", "Aparato Clark"], correct: 1, explanation: "El aparato Mullen mide la presión hidráulica límite que soporta el pliego antes del estallido.", source: "Examen Oficial FNMT 2025 (Pregunta 13)" },
  { theme: 2025, question: "¿Qué parámetro influye negativamente en la resistencia al plegado en contrafibra?", options: ["Aumento del refinado", "Aumento del encolado interno", "Aumento del satinado"], correct: 1, explanation: "Un nivel elevado de encolado interno rigidiza en exceso los enlaces restando flexibilidad mecánica al doblez.", source: "Examen Oficial FNMT 2025 (Pregunta 14)" },
  { theme: 2025, question: "¿Qué aparato mide la resistencia al plegado usando un movimiento de vaivén entre rodillos?", options: ["Aparato MIT", "Aparato Taber", "Aparato Schopper"], correct: 2, explanation: "El equipo Schopper somete la tira de papel a doblados alternativos de vaivén bajo tensión calibrada.", source: "Examen Oficial FNMT 2025 (Pregunta 15)" },
  { theme: 2025, question: "¿Qué hecho aumenta el alargamiento del soporte papelero?", options: ["La disminución de la humedad relativa", "Un mayor refinado", "Un aumento de la humedad relativa"], correct: 2, explanation: "Al humedecerse, las uniones interfibrilares ganan elasticidad permitiendo un mayor estiramiento antes de fracturarse.", source: "Examen Oficial FNMT 2025 (Pregunta 16)" },
  { theme: 2025, question: "¿Cuál es un tipo de rigidez del soporte papelero?", options: ["Rigidez al alargamiento", "Rigidez al tacto", "Rigidez al envejecimiento"], correct: 1, explanation: "La rigidez al tacto o subjetiva evalúa la sensación de cuerpo/consistencia al manipular el pliego.", source: "Examen Oficial FNMT 2025 (Pregunta 17)" },
  { theme: 2025, question: "¿Cuál no es un tipo de encolado se realiza durante la fabricación del papel?", options: ["Superficial", "Térmico", "Interno o en masa"], correct: 1, explanation: "Los dos métodos de encolado papelero son el encolado en masa (interno) y el superficial (size-press); el encolado 'térmico' no existe como método de fabricación.", source: "Examen Oficial FNMT 2025 (Pregunta 18)" },
  { theme: 2025, question: "¿Qué nombre recibe lo opuesto a la opacidad en el soporte papelero?", options: ["Reflexión", "Transparencia", "Absorción"], correct: 1, explanation: "La transparencia es la propiedad inversa a la opacidad visual.", source: "Examen Oficial FNMT 2025 (Pregunta 19)" },
  { theme: 2025, question: "¿Qué disminuye la opacidad del soporte papelero?", options: ["Colorear el soporte", "Añadir capas de estucado", "Añadir ceras o aceites"], correct: 2, explanation: "La incorporación de agentes grasos o ceras satura los micro-poros de aire, volviendo la hoja más translúcida.", source: "Examen Oficial FNMT 2025 (Pregunta 20)" },
  { theme: 2025, question: "¿Cómo se define el brillo en un soporte papelero?", options: ["La capacidad de absorber luz.", "La reflexión de un haz de luz con el mismo ángulo con el que incide en la superficie.", "La diferencia existente entre una superficie totalmente plana y la que presenta el soporte papelero."], correct: 1, explanation: "El brillo especular es la proporción de luz reflejada de forma simétrica al ángulo de incidencia.", source: "Examen Oficial FNMT 2025 (Pregunta 21)" },
  { theme: 2025, question: "¿Qué aparato se usa para medir el brillo del papel?", options: ["Brillómetro", "Densitómetro", "Espectrodensitómetro"], correct: 0, explanation: "El brillómetro o glossímetro es el instrumento fotométrico específico para este ensayo.", source: "Examen Oficial FNMT 2025 (Pregunta 22)" },
  { theme: 2025, question: "¿Cómo se llama el fenómeno contrario a la estabilidad dimensional?", options: ["Higroestabilidad", "Dilatación térmica", "Higroexpansividad"], correct: 2, explanation: "La higroexpansividad es la variación en las dimensiones físicas provocada por los cambios de humedad.", source: "Examen Oficial FNMT 2025 (Pregunta 23)" },
  { theme: 2025, question: "¿Qué provoca una mayor estabilidad dimensional del papel?", options: ["Fibras más cortas.", "Mayor humedad del ambiente respecto a la del soporte.", "Fibras más largas."], correct: 2, explanation: "Las fibras largas entrelazadas disminuyen proporcionalmente el número de uniones higroexpansivas.", source: "Examen Oficial FNMT 2025 (Pregunta 24)" },
  { theme: 2025, question: "¿Cuál es un sistema para medir la estabilidad dimensional?", options: ["Con una regla de precisión", "Por inmersión en agua y medición del alargamiento", "Pesando el papel antes y después de secarlo"], correct: 1, explanation: "Ensayo estándar mediante inmersión directa en agua para determinar el porcentaje de dilatación lineal.", source: "Examen Oficial FNMT 2025 (Pregunta 25)" },
  { theme: 2025, question: "¿Qué se define como: la longitud que puede alcanzar una banda de soporte papelero de anchura uniforme que, suspendida por uno de sus extremos, ¿llegaría a romper por su propio peso?", options: ["Longitud crítica", "Longitud de rotura", "Punto de flexión"], correct: 1, explanation: "La longitud de rotura expresa en metros/kilómetros la resistencia teórica a la tracción por masa propia.", source: "Examen Oficial FNMT 2025 (Pregunta 26)" },
  { theme: 2025, question: "¿Qué efecto tiene en la resistencia a la tensión del soporte papelero un aumento del gramaje por encima de los 110 gr/m²?", options: ["La incrementa", "La mantiene constante", "La disminuye"], correct: 1, explanation: "Superados los 110 g/m², la resistencia específica a la tensión no aumenta proporcionalmente y permanece prácticamente constante.", source: "Examen Oficial FNMT 2025 (Pregunta 27)" },
  { theme: 2025, question: "¿Qué relación existe entre el refinado de la pasta y la resistencia al rasgado inicial?", options: ["A mayor refinado, mayor resistencia, siempre.", "A mayor refinado, menor resistencia si disminuye la longitud de las fibras.", "El refinado no afecta esta propiedad."], correct: 1, explanation: "Un refinado excesivo acorta las fibras cortando su longitud, lo que disminuye la fuerza necesaria para iniciar el rasgado.", source: "Examen Oficial FNMT 2025 (Pregunta 28)" },
  { theme: 2025, question: "¿Qué define la permeabilidad al vapor de agua?", options: ["La cantidad de agua líquida absorbida en una hora a temperatura constante", "El agua que un soporte libera al calentarse durante un día", "El agua (en gramos) que atraviesa 1 m² a temperatura constante durante un día"], correct: 2, explanation: "Definición del índice de transmisión de vapor de agua expresado en g/m² en 24 horas.", source: "Examen Oficial FNMT 2025 (Pregunta 29)" },
  { theme: 2025, question: "¿Qué es la marca al agua o filigrana en papel?", options: ["Una marca fluorescente", "Una marca visible al tacto", "Una imagen visible al trasluz"], correct: 2, explanation: "Elemento de seguridad producido por variación de espesor de fibra visible por luz transmitida (al trasluz).", source: "Examen Oficial FNMT 2025 (Pregunta 30)" },
  { theme: 2025, question: "En una guillotina XT, ¿cómo se copia un programa desde Sinopsis de programas?", options: ["1. Accionar las teclas táctiles Procesar Conect. + Marcar 2. Seleccionar la memoria A o B a través de la tecla táctil selección memoria 3. Seleccionar (marcar) los programas a copiar o introducirlos a través del teclado numérico (p. ej.: 1+=, 3+=, etc.) 4. Accionar la tecla táctil Copiar 5. Seleccionar sector de memoria destino A o B <En el campo de entrada se indica la sinopsis de programas con el programa destino, a partir del cual se ha de insertar los programas a copiar> 6. Aceptar el programa destino pulsando la tecla de Enter o la tecla táctil Liberar función, o introducir otro programa destino a través del teclado numérico. <En el campo de entrada se indica la sinopsis de programas del sector de memoria seleccionado, con mensaje del estado del proceso de copiar y el número de los programas copiados>", "1. Accionar la tecla táctil Marcar 2. Seleccionar la memoria A o B a través de la tecla táctil selección memoria 3. Seleccionar (marcar) los programas a copiar o introducirlos a través del teclado numérico (p. ej.: 1+=, 3+=, etc.) 4. Accionar la tecla táctil Copiar 5. Seleccionar sector de memoria destino A o B <En el campo de entrada se indica la sinopsis de programas con el programa destino, a partir del cual se ha de insertar los programas a copiar> 6. Aceptar el programa destino pulsando la tecla de Enter o la tecla táctil Igual dos veces, o introducir otro programa destino a través del teclado numérico. <En el campo de entrada se indica la sinopsis de programas del sector de memoria seleccionado, con mensaje del estado del proceso de copiar y el número de los programas copiados>", "1. Accionar las teclas táctiles Procesar Conect. + Marcar 2. Seleccionar la memoria A o B a través de la tecla táctil selección memoria 3. Seleccionar (marcar) los programas a copiar o introducirlos a través del teclado numérico (p. ej.: 1+=, 3+=, etc.) 4. Accionar la tecla táctil Copiar 5. Seleccionar sector de memoria destino A o B <En el campo de entrada se indica la sinopsis de programas con el programa destino, a partir del cual se ha de insertar los programas a copiar> 6. Aceptar el programa destino pulsando la tecla de Igual o la tecla táctil Liberar función, o introducir otro programa destino a través del teclado numérico. <En el campo de entrada se indica la sinopsis de programas del sector de memoria seleccionado, con mensaje del estado del proceso de copiar y el número de los programas copiados>"], correct: 0, explanation: "Secuencia de mandos para el duplicado de secuencias de corte en la interfaz POLAR XT.", source: "Examen Oficial FNMT 2025 (Pregunta 31)" },
  { theme: 2025, question: "¿Qué grosor tiene el inserto de una cuchilla HSS (acero corte ultrarrápido)?", options: ["2.5 mm-3 mm", "3 mm-4 mm", "2 mm-4 mm"], correct: 1, explanation: "El espesor del inserto soldado en cuchillas HSS de guillotina oscila habitualmente entre 3 mm y 4 mm.", source: "Examen Oficial FNMT 2025 (Pregunta 32)" },
  { theme: 2025, question: "Según se describe en el manual de la guillotina, ésta cuenta con varias funciones, una de ellas es: programa de formato, ¿para qué sirve?", options: ["Para crear un programa automáticamente realizando solo la entrada algunos datos como: formato de pliego, formato final del producto, recortes de los bordes en los lados de aplicación, cortes intermedios sin necesidad de determinar el lado de aplicación.", "Para crear un programa automáticamente realizando solo la entrada algunos datos como: formato de pliego, formato final del producto, recortes de los bordes en los lados de aplicación, cortes intermedios y lado de aplicación.", "Para crear programas automáticamente, solamente con algunos datos como: formato de pliego, formato final del producto, recortes de los bordes en los lados de aplicación, cortes intermedios y lado de aplicación. El operador tendrá que determinar y programar todos los pasos del programa."], correct: 1, explanation: "Generador asistido de programas a partir de las dimensiones del pliego bruto y producto final indicando el lado de aplicación.", source: "Examen Oficial FNMT 2025 (Pregunta 33)" },
  { theme: 2025, question: "En los formatos ISO/DIN, se toleran desviaciones en las medidas:", options: ["de ±1 mm para medidas de hasta 150 mm, de ±2,5 mm para medidas de hasta 600 mm y de ±3.5 mm para medidas superiores.", "de ±1,5 mm para medidas de hasta 150 mm, de ±2 mm para medidas de hasta 500 mm y de +3 mm para superiores.", "de ±1,5 mm para medidas de hasta 150 mm, de ±2 mm para medidas de hasta 600 mm y de +3 mm para medidas superiores."], correct: 2, explanation: "Escala oficial de tolerancias dimensionales ISO/DIN para corte y acabado.", source: "Examen Oficial FNMT 2025 (Pregunta 34)" },
  { theme: 2025, question: "En cuchillas normales el inserto es.....", options: ["de acero para herramientas con contenido en carbono estándar.", "de acero rápido altamente aleado con un 18% de contenido en wolframio.", "es de metal duro con aleación de widia."], correct: 1, explanation: "Las cuchillas de acero rápido estándar emplean aleación HSS con un 18% de Wolframio/Tungsteno.", source: "Examen Oficial FNMT 2025 (Pregunta 35)" },
  { theme: 2025, question: "El objetivo que buscamos cuando aplicamos el método de corte desde el centro es:", options: ["Evitar los desbarbes inútiles, ahorrando tiempo.", "Evitar las tensiones entre las fibras internas y externas y viceversa.", "Solventar los posibles desequilibrios de grosor entre el centro y los bordes de la posteta."], correct: 2, explanation: "Se busca nivelar las diferencias de abombamiento o volumen central de la pila durante el corte.", source: "Examen Oficial FNMT 2025 (Pregunta 36)" },
  { theme: 2025, question: "¿Qué son las cruces de ajuste?", options: ["Son las marcas que nos permiten ajustar el corte", "Son las marcas donde se comprueba la coincidencia entre colores y/o entre anverso y reverso", "Son las marcas que nos indican si está bien resmado el papel en rotativas"], correct: 1, explanation: "Marcas impresas periféricas empleadas para verificar el registro exacto entre pasadas de color y caras del pliego.", source: "Examen Oficial FNMT 2025 (Pregunta 37)" },
  { theme: 2025, question: "En los tejuelos de tablero que acompañan al trabajo, entre otras, se puede encontrar las siguientes informaciones:", options: ["Taller, labor, orden de fabricación, nota no, resmas, lote papel", "Taller, labor, orden de fabricación, del nº... al nº, defectuosos, el nº de tablero", "Labor, orden de fabricación, nota nº, tablero nº lote de papel"], correct: 1, explanation: "Campos de identificación y trazabilidad del tejuelo oficial que acompaña las pilas en tablero.", source: "Examen Oficial FNMT 2025 (Pregunta 38)" },
  { theme: 2025, question: "Atendiendo a tabla de presiones publicada en el manual del curso de oficial de guillotinero. ¿Cuál es el nivel de presión para una posteta de altura media que ocupa más de dos tercios del ancho de corte, de papel cromo estucado?", options: ["3000-4000 daN", "3000-4000 kN", "3500-4000 daN"], correct: 0, explanation: "Ajuste hidráulico tabulado para estucados cromo en pilas de gran ancho.", source: "Examen Oficial FNMT 2025 (Pregunta 39)" },
  { theme: 2025, question: "Según se cita en el manual de oficial de guillotinero, si la cuchilla no tiene filo, hay que cambiarla. No hacer esto conlleva riesgo de grandes diferencias de corte. Al cortar un papel cromo estucado de aproximadamente 1 metro de ancho y 90g, podemos decir respecto a la carga que sufre la máquina que:", options: ["al usar una cuchilla bien afilada se origina una carga total de aproximadamente una tonelada. Si la cuchilla no tiene filo, se eleva en más del triple esta fuerza que se logra sin más con el accionamiento de la cuchilla.", "al usar una cuchilla bien afilada se origina una carga total de aproximadamente 1,5 toneladas. Si la cuchilla no tiene filo, se eleva en más de 4,5 veces esta fuerza que se logra sin más con el accionamiento de la cuchilla.", "Al usar una cuchilla bien afilada se origina una carga total de aproximadamente una tonelada. Si la cuchilla no tiene filo, se eleva en más de dos veces esta fuerza que se logra sin más con el accionamiento de la cuchilla."], correct: 0, explanation: "El desgaste del filo multiplica por más de tres la resistencia mecánica al corte pasando de 1 tonelada a más de 3 toneladas de esfuerzo.", source: "Examen Oficial FNMT 2025 (Pregunta 40)" },

  // --- CONVOCATORIA 2026 (100 PREGUNTAS BANCO COMPLETO) ---
  { theme: 2026, question: "Según el manual oficial del puesto de trabajo, ¿Cuál es la función de las mesas igualadoras-vibradoras?", options: ["Estas mesas nos ayudan al igualado del material después del corte.", "Estas mesas nos ayudan al igualado y al transporte del material antes del corte.", "Estas mesas nos ayudan a la estabilización del material almacenado cerca de la guillotina."], correct: 1, explanation: "Las mesas aireadoras/vibradoras permiten la alineación a taco y el desplazamiento de las postetas de papel antes del ciclo de corte.", source: "Examen Oficial FNMT 2026 (Pregunta 1)" },
  { theme: 2026, question: "Según el manual oficial del puesto de trabajo, ¿qué características tienen las cuchillas de corte ultrarrápido?", options: ["La duración útil de la cuchilla es de tres a cinco veces superior al de una cuchilla normal con sesga de acero para herramientas.", "Se utilizan casi exclusivamente para el corte de PVC.", "La vida útil de la cuchilla se reduce considerablemente debido a su delicadeza."], correct: 0, explanation: "Las cuchillas de acero rápido (HSS) prolongan la durabilidad del filo entre 3 y 5 veces respecto a las convencionales de acero al carbono.", source: "Examen Oficial FNMT 2026 (Pregunta 2)" },
  { theme: 2026, question: "Según el manual oficial del puesto de trabajo, ¿qué conlleva cortar con una cuchilla sin filo?", options: ["El ruido en cada uno de los cortes se incrementa, con la consiguiente molestia para el operario. Pero no existe ningún otro perjuicio.", "Implica irremisiblemente el riesgo de grandes diferencias de corte. Además, la cuchilla sufre y eventualmente la máquina también.", "Es imposible cortar con una cuchilla sin filo. Las cuchillas sin filo solo se utilizan el plegado."], correct: 1, explanation: "El desgaste del filo eleva la resistencia mecánica provocando desvíos dimensionales en el pliego y sobrecargas en la guillotina.", source: "Examen Oficial FNMT 2026 (Pregunta 3)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, ¿cuál de las siguientes opciones es un tipo de plegado?", options: ["Plegado en zigzag doble.", "Plegado paralelo al borde", "Plegado en puerta doble."], correct: 2, explanation: "El plegado en ventana o puerta doble es un esquema estándar de plegado en postimpresión.", source: "Examen Oficial FNMT 2026 (Pregunta 4)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, para realizar un trabajo digital, ¿cuál sería el flujo de los trabajos a realizar?", options: ["Imposición, maquetación, CTP, insolación y revelado.", "Imposición, maquetación, CTP, impresión.", "Maquetación, imposición, CTP, impresión."], correct: 2, explanation: "Secuencia lógica en preimpresión: maquetado de páginas, imposición del pliego, grabado CTP e impresión final.", source: "Examen Oficial FNMT 2026 (Pregunta 5)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, ¿qué características principales tiene un trabajo impreso en huecograbado?", options: ["Lisura, compresibilidad y estabilidad dimensional.", "Planeidad, no desprende polvillo, microporosidad adecuada para un secado rápido de las tintas", "Cotes bajos, posibilidad de multitud de soportes y secado instantáneo."], correct: 0, explanation: "Para transferir la tinta retenida en los alvéolos del cilindro se exigen soportes de máxima lisura, compresibilidad y estabilidad.", source: "Examen Oficial FNMT 2026 (Pregunta 6)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, ¿cómo se mide la resistencia a la abrasión en los soportes papeleros?", options: ["Con un densitómetro.", "Con abrasímetros.", "Con un micrómetro."], correct: 1, explanation: "Los abrasímetros cuantifican la pérdida de masa o fricción superficial sufrida por la muestra.", source: "Examen Oficial FNMT 2026 (Pregunta 7)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, ¿qué es la resistencia a la tensión en un papel?", options: ["Esfuerzo que puede soportar un papel antes de su rotura.", "Numero de plegados dobles que puede soportar un papel antes de su rotura.", "Es la resistencia que presenta un soporte papelero antes de que se inicie su rasgado o su reventamiento cuando se encuentra sometido a un esfuerzo."], correct: 0, explanation: "Fuerza máxima por unidad de ancho que aguanta la tira de papel sometida a tracción axial antes de fracturarse.", source: "Examen Oficial FNMT 2026 (Pregunta 8)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, ¿qué puede suceder en caso de falta de planicidad en un papel?", options: ["Pilas de papel inestables y corte en guillotina irregular.", "Se produce blistering.", "Problemas de registro, problemas a la entrada en máquina, doble impresión y remosqueo."], correct: 2, explanation: "Los ondulamientos o curvaturas del pliego alteran el registro de entrada en máquina y generan fallos de impresión.", source: "Examen Oficial FNMT 2026 (Pregunta 9)" },
  { theme: 2026, question: "Según el manual básico de artes gráficas, ¿cómo se define el grado de blancura?", options: ["El factor de reflectancia difusa intrínseca determinado a una longitud de onda determinada (457 nanómetros).", "La facultad de un papel para repeler todas las longitudes de onda del espectro de la luz.", "La característica de un papel para evitar el amarillamiento."], correct: 0, explanation: "Definición óptica normalizada del valor ISO de blancura espectral a 457 nm.", source: "Examen Oficial FNMT 2026 (Pregunta 10)" }
];


/* =========================================================================
   5. LÓGICA DE NAVEGACIÓN Y MOTOR DE EVALUACIÓN
   ========================================================================= */
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
        <button class="menu-main-btn" style="background-color: #8E44AD; border-color: #9B59B6;" onclick="showSubmenu('examenes')">🎯 TEST EXÁMENES ANTERIORES (${questionsExamenes.length} Preguntas)</button>
        <button class="menu-global-btn" onclick="showSubmenu('global')">🔀 TEST ALEATORIO GLOBAL (${questionsGuillotina.length + questionsModulo1.length + questionsModulo2.length + questionsExamenes.length} Preguntas)</button>
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
  } else if (testType === 'examenes') {
    activeBank = questionsExamenes;
    title = `🎯 Test Exámenes Anteriores (${questionsExamenes.length} Preguntas)`;
  } else if (testType === 'global') {
    activeBank = [...questionsGuillotina, ...questionsModulo1, ...questionsModulo2, ...questionsExamenes];
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
        <p style="margin-bottom: 1rem; font-size: 0.9rem; color: #DCDDE1;">Examen aleatorio con preguntas combinadas de todos los manuales y exámenes oficiales.</p>
        
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
    } else if (testType === 'examenes') {
      optionsHTML = `
        <option value="all" selected>Todas las Convocatorias (2022 - 2026)</option>
        <option value="2022">Examen Oficial FNMT 2022</option>
        <option value="2023">Examen Oficial FNMT 2023</option>
        <option value="2025">Examen Oficial FNMT 2025</option>
        <option value="2026">Examen Oficial FNMT 2026</option>
      `;
    }

    quizArea.innerHTML = `
      <div class="menu-card">
        <button class="btn-back" onclick="showMainMenu()">← Volver al Menú Principal</button>
        <h2>${title}</h2>
        
        <label class="menu-label" for="theme-filter-select">Selecciona la convocatoria / bloque:</label>
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
  
  timeLeft = selectedCount * 15;

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

function nextQuestion() {
  if (isPaused) return;
  currentQuestionIndex++;
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