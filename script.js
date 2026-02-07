const productos = [

{ id: 1, nombre: "Abecedario personalizado", precio: 40000, categoria: "material", imagen: "img/materiales/Abecedario personalizado.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 2, nombre: "Alfabeto mayúsculas y minúsculas 3D sensorial", precio: 24000, categoria: "material", imagen: "img/materiales/Alfabeto mayúsculas y minúsculas en 3D sensorial..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 3, nombre: "Alfabeto móvil para iniciación de la lectura", precio: 32000, categoria: "material", imagen: "img/materiales/Alfabeto móvil para iniciación de la lectura.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 4, nombre: "Alfabeto móvil sistema decimal", precio: 24000, categoria: "material", imagen: "img/materiales/Alfabeto móvil y los diez dígitos del sistema de numeración decimal.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 5, nombre: "Alfabeto móvil clásico", precio: 13000, categoria: "material", imagen: "img/materiales/Alfabeto móvil.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 6, nombre: "Alfabeto y Números Bloques Creativos", precio: 22000, categoria: "material", imagen: "img/materiales/Alfabeto y Números Bloques de Rompecabezas Creativos..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 7, nombre: "Andamiaje educativo matemáticas", precio: 12000, categoria: "material", imagen: "img/materiales/andamiaje educativo de matemáticas.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 8, nombre: "Andamiaje modular números educación temprana", precio: 15000, categoria: "material", imagen: "img/materiales/Andamiaje modular de números para educación temprana.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 9, nombre: "Andamiaje modular Montessori números", precio: 18000, categoria: "material", imagen: "img/materiales/Andamiaje modular Montessori de números para educación temprana.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 10, nombre: "Andamiaje numérico", precio: 6000, categoria: "material", imagen: "img/materiales/Andamiaje numérico.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 11, nombre: "Andamiaje para afianzar fracciones", precio: 14000, categoria: "material", imagen: "img/materiales/Andamiaje para afianzar fracciones.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 12, nombre: "Andamiaje para afianzar la hora", precio: 16000, categoria: "material", imagen: "img/materiales/Andamiaje para afianzar la hora.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 13, nombre: "Andamiaje campo numérico hasta 100", precio: 10000, categoria: "material", imagen: "img/materiales/Andamiaje para extender el campo numérico hasta el 100.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 14, nombre: "Andamiaje multiplicación", precio: 12000, categoria: "material", imagen: "img/materiales/Andamiaje para la multiplicación.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 15, nombre: "Ángulos ayuda didáctica matemática", precio: 6000, categoria: "material", imagen: "img/materiales/Ángulos - Ayuda didáctica para la enseñanza de matemáticas.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 16, nombre: "Percepción y análisis del color", precio: 25000, categoria: "material", imagen: "img/materiales/Ayuda a desarrollar la percepción y el análisis del color.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 17, nombre: "Bingo de multiplicación", precio: 15000, categoria: "material", imagen: "img/materiales/Bingo de multiplicación.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 18, nombre: "Caja 4 operaciones básicas", precio: 10000, categoria: "material", imagen: "img/materiales/Caja para afianzar las 4 operaciones básicas.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 19, nombre: "Clasificador de formas", precio: 6000, categoria: "material", imagen: "img/materiales/Clasificador de formas.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 20, nombre: "Contenedor bloques suma Montessori", precio: 8000, categoria: "material", imagen: "img/materiales/Contenedor para bloques de suma Montessori.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 21, nombre: "Cubilete de Clavijas Montessori", precio: 6000, categoria: "material", imagen: "img/materiales/Cubilete de Clavijas Montessori.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 22, nombre: "Descomposición números hasta 10", precio: 8000, categoria: "material", imagen: "img/materiales/Descomposición de Números Dentro de Diez.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 23, nombre: "Ejercicio visoespacial", precio: 12000, categoria: "material", imagen: "img/materiales/Ejercicio visoespacial.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 24, nombre: "Cubo base 10 Montessori", precio: 18000, categoria: "material", imagen: "img/materiales/el cubo de 1, la barra de 10, la placa de 100 y el cubo de 1000.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 25, nombre: "Entrenador para atar cordones modelo 1", precio: 5000, categoria: "material", imagen: "img/materiales/Entrenador para aprender a atar cordones..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 26, nombre: "Entrenador para atar cordones modelo 2", precio: 8000, categoria: "material", imagen: "img/materiales/Entrenador para atar cordones..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 27, nombre: "Fichas suma y resta", precio: 8000, categoria: "material", imagen: "img/materiales/Fichas de Aprendizaje para la Suma y Resta.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 28, nombre: "Giratorio de matemáticas", precio: 16000, categoria: "material", imagen: "img/materiales/Giratorio de Matemáticas..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 29, nombre: "Herramientas geometría sólida", precio: 6000, categoria: "material", imagen: "img/materiales/Herramientas didácticas de geometría sólida, se pueden ensamblar libremente para construir figuras de forma intuitiva..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 30, nombre: "Juego apilar formas", precio: 8000, categoria: "material", imagen: "img/materiales/Juego de apilar formas (Edad 18+ meses).jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 31, nombre: "Juego apilar números matemático", precio: 26000, categoria: "material", imagen: "img/materiales/Juego de apilar números - Para aprender suma, resta, multiplicación y división.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 32, nombre: "Juego aprendizaje de números", precio: 14000, categoria: "material", imagen: "img/materiales/Juego de aprendizaje de números.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 33, nombre: "Juego números Montessori 2 dígitos", precio: 14000, categoria: "material", imagen: "img/materiales/Juego de números Montessori de 2 dígitos para niños.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 34, nombre: "Juego números clásico", precio: 8000, categoria: "material", imagen: "img/materiales/Juego de números.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 35, nombre: "Juego educativo matemáticas", precio: 16000, categoria: "material", imagen: "img/materiales/Juego educativo de matemáticas para niños - Conjunto de aprendizaje.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 36, nombre: "Juguetes inserción Montessori", precio: 12000, categoria: "material", imagen: "img/materiales/Juguetes de inserción Montessori.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 37, nombre: "Kit longitudes Montessori completo", precio: 25000, categoria: "material", imagen: "img/materiales/Kit completo de materiales para trabajar las longitudes (comparar, clasificar, ordenar...).jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 38, nombre: "Kit estimulación símbolos números letras", precio: 27000, categoria: "material", imagen: "img/materiales/Kit de estimulación de símbolos, números y letras.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 39, nombre: "Kit para afianzar cantidades", precio: 16000, categoria: "material", imagen: "img/materiales/Kit para afianzar cantidades.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 40, nombre: "Kit longitudes progresivas", precio: 30000, categoria: "material", imagen: "img/materiales/Kit de longitudes - del más pequeño al más grande.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 41, nombre: "Letras divertidas alfabeto", precio: 18000, categoria: "material", imagen: "img/materiales/Letras divertidas del alfabeto para niños.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 42, nombre: "Material didáctico Lengua y Matemática", precio: 14000, categoria: "material", imagen: "img/materiales/Material didactico LENGUA - MATEMATICA.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 43, nombre: "Material didáctico números decimales", precio: 28000, categoria: "material", imagen: "img/materiales/Material didáctico para ayudar a los estudiantes a practicar números con decimales, así como a comprender las unidades de medida..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 44, nombre: "Material para afianzar números", precio: 6000, categoria: "material", imagen: "img/materiales/Material para afianzar los números.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 45, nombre: "Montessori tabla motricidad colores", precio: 9000, categoria: "material", imagen: "img/materiales/Montessori tabla motricidad  y aprendizaje colores.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 46, nombre: "Números del 0 al 10 ficha matemática", precio: 6000, categoria: "material", imagen: "img/materiales/Números del 0 al 10, para matemáticas, ficha.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 47, nombre: "Números monedas combinables", precio: 5000, categoria: "material", imagen: "img/materiales/Números de monedas para combinar y formar infinitos números..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 48, nombre: "Organizador escritorio didáctico", precio: 8000, categoria: "material", imagen: "img/materiales/Organizador de escritorio para tarjetas didácticas y calculadora..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 49, nombre: "Panel del tiempo escritorio", precio: 18000, categoria: "material", imagen: "img/materiales/Panel del tiempo para escritorio.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 50, nombre: "Plato caracol alfabeto", precio: 6000, categoria: "material", imagen: "img/materiales/Plato de caracol del alfabeto.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 51, nombre: "Recursos didácticos 3D números 0-5", precio: 8000, categoria: "material", imagen: "img/materiales/Recursos didácticos 3D – números del 0 al 5.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 52, nombre: "Regletas matemáticas 1 al 10", precio: 8000, categoria: "material", imagen: "img/materiales/Regletas Matemáticas del 1 al 10 para introducción a la suma..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 53, nombre: "Rompecabezas Triceratops alfabeto", precio: 6000, categoria: "material", imagen: "img/materiales/Rompecabezas de alfabeto de Triceratops.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 54, nombre: "Rompecabezas fracciones", precio: 10000, categoria: "material", imagen: "img/materiales/Rompecabezas de Aprendizaje de Fracciones.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 55, nombre: "Rompecabezas números hasta 100", precio: 28000, categoria: "material", imagen: "img/materiales/Rompecabezas de números para extender el campo numérico hasta el 100.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 56, nombre: "Rompecabezas conteo Montessori", precio: 16000, categoria: "material", imagen: "img/materiales/Rompecabezas de números y bandeja de conteo Montessori.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 57, nombre: "Rompecabezas rinoceronte", precio: 7000, categoria: "material", imagen: "img/materiales/Rompecabezas de rinoceronte..jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 58, nombre: "Rompecabezas educativo números y figuras", precio: 9000, categoria: "material", imagen: "img/materiales/Rompecabezas Educativo de Números y Figuras.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 59, nombre: "Rompecabezas elefante", precio: 9000, categoria: "material", imagen: "img/materiales/Rompecabezas elefante.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 60, nombre: "Rompecabezas matemático clásico", precio: 25000, categoria: "material", imagen: "img/materiales/Rompecabezas matemático.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 61, nombre: "Serpiente Alfabeto", precio: 18000, categoria: "material", imagen: "img/materiales/Serpiente Alfabeto.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 62, nombre: "Tabla matemática niños", precio: 35000, categoria: "material", imagen: "img/materiales/Tabla matemática para niños.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 63, nombre: "Tabla emociones educativa", precio: 8000, categoria: "material", imagen: "img/materiales/Tabla para aprender y expresar las emociones.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 64, nombre: "Tabla pitagórica modelo regularidades", precio: 7000, categoria: "material", imagen: "img/materiales/Tabla pitagórica para afianzar las regularidades de la multiplicación.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 65, nombre: "Tabla pitagórica clásica", precio: 14000, categoria: "material", imagen: "img/materiales/Tabla pitagórica.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 66, nombre: "Tablero GeoMatemático", precio: 18000, categoria: "material", imagen: "img/materiales/Tablero de Clavijas GeoMatemático – Tablero de Goma Educativo.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 67, nombre: "Tablero Multiplicación Matemática", precio: 25000, categoria: "material", imagen: "img/materiales/Tablero de Multiplicación Matemática.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 68, nombre: "Tablero números 1 al 5 con formas", precio: 8000, categoria: "material", imagen: "img/materiales/Tablero de números del 1 al 5 con formas.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 69, nombre: "Tablero contar y ordenar números", precio: 12000, categoria: "material", imagen: "img/materiales/Tablero para contar y ordenar números y cantidades hasta el 10.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 70, nombre: "Tableros números Montessori", precio: 8000, categoria: "material", imagen: "img/materiales/Tableros de números Montessori.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },
{ id: 71, nombre: "Puzzle de números", precio: 18000, categoria: "material", imagen: "img/materiales/Puzzle de números.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 72, nombre: "Contar con los dedos", precio: 18000, categoria: "material", imagen: "img/materiales/Contar con los dedos.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{ id: 73, nombre: "Dados de práctica de matemáticas", precio: 3000, categoria: "material", imagen: "img/materiales/Dados de práctica de matemáticas.jpeg", mayorista: "A partir de 5 unidades consultar precio por mayor" },

{
  id: 74,
  nombre: "“Majestuoso” Hidroponía",
  precio: 42000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/“Majestuoso” Hidroponía.jpeg",
  descripcion: "Majestuoso” Hidroponía – donde la deslumbrante elegancia de estilo marroquí se encuentra con la inteligencia hidropónica. Un sutil flujo diagonal corta a través del ornamentado patrón como una diadema audaz, elevando cada alféizar de la ventana de lo mediocre a lo majestuoso.¿Bajo el capó? Una elegante cámara interior con función de autoriego e indicador de nivel de agua – su planta permanece hidratada sin drama. Simplemente coloque su leca, plante su diva verde, y déjela florecer en una opulencia minimalista"
},
{
  id: 75,
  nombre: "Bandeja de siembra inicial",
  precio: 38000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Bandeja de siembra inicial con base de autorriego.jpeg",
  descripcion: "Diseñada para albergar 49 alveolos individuales, cada uno con unas dimensiones de 20 mm x 20 mm x 27 mm, esta bandeja ofrece amplio espacio para cultivar una variada gama de plantas —hierbas aromáticas, flores o robustas verduras— todo en una unidad compacta. La profundidad de los alveolos asegura un robusto desarrollo radicular, mientras que su ingenioso diseño desplegable permite separar cada alvéolo sin esfuerzo para un trasplante sin estrés, manteniendo intactas las raíces de las plántulas. ​Lo que hace verdaderamente especial a esta bandeja es su base integrada de autorriego. La bandeja inferior recoge el exceso de agua y la devuelve a los alveolos mediante capilaridad, manteniendo la tierra constantemente húmeda sin la molestia del riego manual constante. Pequeños orificios de drenaje en cada alvéolo evitan la sobresaturación, logrando el equilibrio perfecto para un crecimiento saludable. Esta característica es ideal para jardineros ocupados o para cualquiera que busque optimizar su rutina de siembra."
},
{
  id: 76,
  nombre: "Conjunto de plantas hidropónicas",
  precio: 64000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Conjunto de plantas hidropónicas.jpeg",
  descripcion: "Kit completo para iniciar cultivo hidropónico en casa."
},
{
  id: 77,
  nombre: "Globo de riego emblemático",
  precio: 14000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/globo de riego en forma del emblemático diseño.jpeg",
  descripcion: "¡Potencia tus plantas con un guiño gamer! Descubre nuestro original globo de riego en forma del emblemático Súper Champiñón de Mario. 🍄💧🆙Este accesorio, modelado en 3D con precisión y mimo, no solo hidrata eficazmente tus plantas, sino que aporta personalidad y estilo a cada rincón. Ideal para quienes buscan combinar utilidad y creatividad en el cuidado de su jardín o decoración interior."
},
{
  id: 78,
  nombre: "HydroGrow Solo 1L",
  precio: 18000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/HydroGrow Solo 1L es un sistema hidroponico.jpeg",
  descripcion: "HydroGrow Solo 1L es un sistema hidropónico de cultivo minimalista con luz LED integrada para plantas; ideal para ventanas, escritorios o pequeños huertos interiores.Con una sola ranura, resulta idóneo para cultivar hierbas o lechugas, garantizando un crecimiento exitoso incluso en lugares oscuros gracias a su luz integrada."
},
{
  id: 79,
  nombre: "Jardinera de dos pisos",
  precio: 14000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/jardinera de dos pisos para brotes y berros.jpeg",
  descripcion: "Esta jardinera de dos pisos para brotes y berros ¡aprovecha al máximo el espacio de tu alféizar! Cultivar tus propios brotes o berros es divertido y es un gran complemento para ensaladas y otras comidas. Simplemente desmenuza un poco de algodón y extiéndelo dentro de las bandejas, reparte generosamente tus semillas y mantenlo húmedo. En unos días estarán listos…El diseño de dos pisos con agujeros en la base de la bandeja permite que el exceso de agua gotee y riegue los brotes que crecen debajo. Un espacio adicional debajo de la bandeja inferior evita que el agua se acumule y 'ahogue' los brotes (aunque verás que eso es difícil de lograr de todos modos). 14 mil"
},
{
  id: 80,
  nombre: "Maceta con indicador de nivel de agua",
  precio: 65000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Maceta con indicador de nivel de agua.jpeg",
  descripcion: "Maceta con indicador de nivel de agua:Este ingenioso macetero autorriego es la solución ideal para quienes desean mantener sus plantas hidratadas sin riesgo de exceso o defecto de agua. Su inteligente diseño incorpora un depósito inferior que libera paulatinamente la humedad al sustrato mediante un sistema de autorriego."
},
{
  id: 81,
  nombre: "Maceta de auto riego cuadrada",
  precio: 14000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Maceta de auto riego cuadrada.jpeg",
  descripcion: "Maceta de auto riego cuadrada: Una sencilla maceta cuadrada autorriego está diseñada para configuraciones semi-hidropónicas. Funciona mejor con sustratos como turba, arcilla expandida, piedra pómez, etc.  Para usarla, plante su planta en un sustrato adecuado y vierta agua desde la parte superior. El agua fluye fácilmente, y el indicador en la parte inferior muestra el nivel del agua.  No recomiendo usar tierra regular. Sin embargo, si agrega algo de sustrato semi-hídrico hasta el nivel del agua, puede intentar cubrirlo con tierra regular. Precio "
},
{
  id: 82,
  nombre: "Macetero para hidroponía en pecera",
  precio: 7000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Macetero para hidroponía en pecera, tipo flotante.jpeg",
  descripcion: "Accesorio para integrar plantas en peceras."
},
{
  id: 83,
  nombre: "Soporte para plantas en el borde del acuario",
  precio: 5000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Soporte para plantas en el borde del acuario.jpeg",
  descripcion: "Soporte para plantas en el borde del acuarioCompatible con vidrios de 4 a 10 mm de grosor.El sistema utiliza collares de neopreno empleados en hidroponía, que permiten adaptarse a tallos de distintos diámetros y garantizan un anclaje seguro. En caso de no contar con estos collares, también es posible utilizar un trozo de esponja de filtro gruesa como alternativa. El diámetro estándar de los collares es de 50 mm.El soporte se coloca y retira fácilmente gracias a su pinza flexible."
},
{
  id: 84,
  nombre: "Torre de Hidroponía Modular V2",
  precio: 70000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Torre de Hidroponía Modular V2.jpeg",
  descripcion: "Tapa y ducha rediseñadas para una mejor distribución del agua y evitar fugas.• Incluye robustas macetas de 48 mm con abundantes espacios para el crecimiento de las raíces.• Diseño en relieve a lo largo de la torre.• Utiliza tornillos autorroscantes M3 x 8 mm en lugar de inserciones a presión para unir los módulos y proporcionar un soporte adicional.• Incluye un separador opcional para elevar la zona de cultivo por encima del depósito de agua.• Incluye una maceta ciega para reducir los derrames en los agujeros que aún no se utilizan para el cultivo."
},

{
  id: 85,
  nombre: "Maceta personalizada compatible con los sistemas de riego Autopot",
  precio: 15000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/maceta personalizada compatible con los sistemas de riego Autopot.jpeg",
  descripcion: "Esta es una maceta personalizada compatible con los sistemas de riego Autopot. Con un volumen de 8.5 litros y dimensiones de 228x228x196mm, está hecha como un contenedor alternativo para el cultivo hidropónico utilizando el sistema de riego Autopot"
},

{
  id: 86,
  nombre: "Maceta para hidroponía",
  precio: 8000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Maceta para hidroponía.jpeg",
  descripcion: "Maceta para hidroponía (vaso para hidroponía) ."
},

{
  id: 87,
  nombre: "Hidroponía “Órbita”",
  precio: 38000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Hidroponía “Órbita”.jpeg",
  descripcion: "Hidroponía “Órbita” – Elegante, Limpio, InteligenteEl sembrador hidropónico “Órbita” demuestra que el diseño moderno y la funcionalidad inteligente pueden ir de la mano Con su forma fluida y orgánica y su llamativo patrón de líneas, no solo aporta estilo a su espacio, sino que también proporciona el hogar perfecto para sus plantas hidropónicasEspecialmente práctico  El inserto es extraíble, lo que facilita enormemente el montaje y la limpieza –sin complicaciones, sin frustraciones, solo un manejo sin esfuerzo."
},

{
  id: 88,
  nombre: "Inserción Lechuza MINI-CUBI ",
  precio: 20000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Inserción Lechuza MINI-CUBI.jpeg",
  descripcion: "Inserción Lechuza MINI-CUBI "
},
{
  id: 89,
  nombre: "ZenRain ",
  precio: 35000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/ZenRain.jpeg",
  descripcion: " ZenRain: Maceta de autorriego con efecto piedra."
},

{
  id: 90,
  nombre: "Maceta de riego automático",
  precio: 25000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Maceta de riego automático.jpeg",
  descripcion: "Maceta de riego automático hidropónico por goteo"
},

{
  id: 91,
  nombre: "Maceta hidropónica con luz LED",
  precio: 80000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Maceta hidropónica con luz LED.jpeg",
  descripcion: "Maceta hidropónica con luz LED para crecimiento rápido. "
},

{
  id: 92,
  nombre: "Recipiente de cultivo hidropónico / Grow Container",
  precio: 38000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Recipiente de cultivo hidropónico  Grow Container.jpeg",
  descripcion: "Recipiente de cultivo hidropónico / Grow Container"
},

{
  id: 93,
  nombre: "Maceta de riego automático",
  precio: 25000,
  categoria: "botanico",
  imagen: "img/diseño botanico avanzado/Maceta de riego automático.jpeg",
  descripcion: "Maceta de riego automático hidropónico por goteo"
},
];

function formatoARS(precio) {
  return precio.toLocaleString("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0
  });
}

function mostrarProductos() {

  const contMaterial = document.getElementById("contenedorMaterial");
  const contBotanico = document.getElementById("contenedorBotanico");

  contMaterial.innerHTML = "";
  contBotanico.innerHTML = "";

  productos.forEach(prod => {

    const tarjeta = `
      <div class="col-md-4 col-lg-3 mb-4">
        <div class="card position-relative h-100">

          <input type="checkbox" class="selector-producto" value="${prod.id}">

          <img src="${prod.imagen}" class="card-img-top"
            onclick="abrirModal('${prod.imagen}','${prod.descripcion || ""}')">

          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${prod.nombre}</h5>
            <p class="fw-bold text-success">${formatoARS(prod.precio)}</p>

            <button class="btn btn-success mt-auto"
              onclick="comprarIndividual(${prod.id})">
              Comprar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    `;

    if (prod.categoria === "material") {
      contMaterial.innerHTML += tarjeta;
    }

    if (prod.categoria === "botanico") {
      contBotanico.innerHTML += tarjeta;
    }

  });
}

function abrirModal(imagen, descripcion) {
  document.getElementById("modalImagen").style.display = "block";
  document.getElementById("imagenAmpliada").src = imagen;
  document.getElementById("descripcionModal").innerText = descripcion || "";
}

document.querySelector(".cerrar").onclick = function() {
  document.getElementById("modalImagen").style.display = "none";
}

function comprarIndividual(id) {

  const producto = productos.find(p => p.id === id);

  let mensaje = `Hola, quiero comprar:\n\n${producto.nombre}\nPrecio: ${formatoARS(producto.precio)}`;

  window.open(`https://wa.me/5492323364355?text=${encodeURIComponent(mensaje)}`);
}

function comprarSeleccionados() {

  const seleccionados = document.querySelectorAll(".selector-producto:checked");

  if (seleccionados.length === 0) {
    alert("Seleccioná al menos un producto");
    return;
  }

  let mensaje = "Hola, quiero comprar:\n\n";

  seleccionados.forEach(check => {
    const producto = productos.find(p => p.id == check.value);
    mensaje += `• ${producto.nombre} - ${formatoARS(producto.precio)}\n`;
  });

  window.open(`https://wa.me/5492323364355?text=${encodeURIComponent(mensaje)}`);
}

function buscarProductos() {
  const texto = document.getElementById("buscador").value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const nombre = card.querySelector(".card-title").innerText.toLowerCase();
    card.parentElement.style.display =
      nombre.includes(texto) ? "block" : "none";
  });
}

mostrarProductos();

