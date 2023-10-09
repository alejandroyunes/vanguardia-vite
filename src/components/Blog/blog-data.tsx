import linuxWindowsArticle from './BlogArticle/images/linux-windows.webp'

import datasetImg from './BlogArticle/images/dataset.webp'
import HTML5Img from './BlogArticle/images/html5blog.webp'
import dialogHtmlImg from './BlogArticle/images/dialogHtml.webp'
import typeFile from './BlogArticle/images/typeFile.webp'
import webDev from './BlogArticle/images/webdev.webp'

export type BlogArticleType = {
  id: number
  title: string
  meta: string
  image: string
  alt: string
  blogPageSummary: string
  articleSummary: string
  time: string
  related: string[]
  shared: string[]
  date: string
  step: StepType[]
}

export type StepType = {
  title?: string
  step?: string
  description?: string
  list?: string[]
  code?: string
  img?: string
  imgAlt?: string
  imgWidth?: string
  imgHeight?: string
  resource?: string | undefined
}

export interface BlogDataTypes {
  author: string
  description: string
  blog: BlogArticleType[]
}

export const spanish: BlogDataTypes = {
  author: "Alejandro Cano",
  description: "Un diseñador independiente y desarrollador front-end dedicado a mejorar la experiencia de todos en la web, con un enfoque centrado en la mejora progresiva y el perfeccionamiento constante.",
  blog: [
    {
      id: 1,
      title: "¿Cómo instalar Linux Mint junto con Windows 11?",
      meta: "Aprende cómo instalar Linux Mint junto a Windows 11.",
      image: linuxWindowsArticle,
      alt: "Pinguino de Linux y fondo de Windows",
      blogPageSummary: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC.",
      articleSummary: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC. Los pasos mencionados sirven para las distribuciones de Linux Mint. Bueno, veamos cómo arrancar Linux de forma dual en un sistema Windows.",
      time: "5",
      related: ["Windows", "Linux"],
      shared: ["Twitter", "LinkedIn"],
      date: "Octubre 3, 2023",
      step: [
        {
          title: "Haz una copia de seguridad [opcional]",
          step: "Paso 1:",
          description: "Siempre es bueno tener una copia de seguridad, por si acaso pasa algo. Descarga la imagen ISO según tu sistema operativo de Windows.",
          resource: "https://www.microsoft.com/en-us/software-download/"
        },
        {
          title: "Descarga la distribución de Linux Mint",
          step: "Paso 2:",
          description: "Ingresa al sitio oficial de Linux Mint y navega hacia la sección de descargas. Busca la distribución que más te guste y descárgala. Posiblemente tomará un poco de tiempo dependiendo de tu conexión a Internet.",
          resource: "https://linuxmint.com/"
        },
        {
          title: "Descarga Rufus para crear unidades de arranque USB",
          step: "Paso 3:",
          description: "Haz clic derecho sobre el instalador de Rufus y ejecútalo como administrador. Luego, en 'Dispositivo', selecciona la USB y en 'Seleccionar' busca la imagen ISO de Linux.  En 'Esquema de partición', es importante seleccionar 'GPT' si el sistema de destino es UEFI.  Haz clic en 'Empezar' y luego en 'OK' en el modo 'Imagen ISO (recomendado)'.",
          resource: "https://rufus.ie/es/"
        },
        {
          title: "Arranque desde el BIOS",
          step: "Paso 4:",
          description: "Para acceder a nuestro BIOS depende de nuestro equipo, pero si al iniciar el equipo y presionando F2, F12 o F10 no funciona, debemos buscar con que botón permite ingresar al BIOS."
        },
        {
          title: "Instalación de Linux Mint",
          step: "Paso 5:",
          description: "El instalador de Linux Mint nos permite particionar nuestro disco duro. Debemos seleccionar 'OEM install' (for manufacturers), elegimos nuestros ajustes, y seguimos los pasos de instalación. Luego, seleccionamos 'Instalar Linux Mint junto a Windows Boot Manager. Ajustamos nuestro espacio de almacenamiento y continuamos."
        },
        {
          title: "Seleccionar sistema operativo al iniciar",
          step: "Paso 6:",
          description: "Ya solo nos queda reiniciar y seleccionar el sistema operativo que deseamos usar y disfrutar. 🍾🎉"
        }
      ]
    },
    {
      id: 2,
      title: "Explorando algunas Etiquetas HTML5 Poderosas para una Web Moderna",
      meta: "Descubre el potencial de las etiquetas HTML5 para transformar tu web en una experiencia moderna e interactiva",
      image: HTML5Img,
      alt: "Logo HTML 5 para la web moderna",
      blogPageSummary: "Descubre las Innovadoras Etiquetas HTML que Simplifican Nuestra Vida en la Web.",
      articleSummary: "Me sorprende cuántas etiquetas desconocía; algunas de ellas ya las había explorado de manera superficial, mientras que otras apenas las había utilizado. A continuación, echaremos un vistazo a algunas de ellas.",
      time: "4",
      related: ["HTML"],
      shared: ["Twitter", "LinkedIn"],
      date: "Octubre 9, 2023",
      step: [
        {
          title: "Comenzaremos nuestra lista con el elemento 'Dataset'",
          step: "1:",
          description: "Para crear una entrada de datos y una lista, utilizamos tanto la etiqueta 'input' como 'datalist'. La propiedad 'list' del elemento 'input' hace referencia al 'datalist', lo que nos permite tener una entrada donde podemos ingresar datos.",
          code: "<label for='languages'>language:</label>\n<input list='languages' id='language-choice' name='language-choice'>\n\n<datalist id='languages'>\n    <option value='Javascript'>\n    <option value='Java'>\n    <option value='Swift'>\n    <option value='Go'>\n    <option value='PHP'>\n</datalist>",
          img: datasetImg,
          imgAlt: "Ejemplo de elemento dataset de html",
          imgWidth: "640",
          imgHeight: "230"
        },
        {
          title: "Inputs para capturar imagen, videos y audio",
          step: "2:",
          description: "Este código HTML representa un formulario que permite a los usuarios cargar imágenes o videos en un servidor web.  El atributo capture nos permite acceder a la cámara de los dispositivos móviles.",
          img: typeFile,
          imgAlt: "código HTML para enviar fotos y videos al servidor nativo",
          imgWidth: "566",
          imgHeight: "310"
        },
        {
          title: "La etiqueta <dialog> en HTML para Cuadros de Diálogo Modales",
          step: "3:",
          description: "La etiqueta <dialog> en HTML se utiliza para crear un cuadro de diálogo modal en una página web. Un cuadro de diálogo modal es una ventana emergente que bloquea la interacción con el resto de la página hasta que el usuario interactúa con él o lo cierra.",
          img: dialogHtmlImg,
          imgAlt: "Código de ejemplo para un dialog en html",
          imgWidth: "646",
          imgHeight: "503"
        },
        {
          title: "Uso de las Etiquetas <details> y <summary> en HTML para Contenido Colapsable",
          step: "4:",
          description: "`<details>` y `<summary>` en HTML crean secciones colapsables. El contenido en `<details>` está oculto inicialmente y se expande al hacer clic en `<summary>`. Son útiles para mostrar información adicional de manera ordenada y permiten a los usuarios controlar qué contenido ver, mejorando la usabilidad web."
        },
        {
          title: "Propiedad de HTML Popover nos muestra elemento flotable",
          step: "5:",
          description: "Un popover es una ventana emergente que muestra información extra o opciones al interactuar con un elemento en una aplicación o sitio web. Se utiliza para ofrecer detalles adicionales y se puede cerrar haciendo clic en cualquier parte fuera de él.",
          code: "<button id='popoverButton'>Mostrar Popover</button>\n<div id='popoverContent' class='popover'>This is an example.\n</div>"
        },
        {
          title: "Definiendo Elementos de Búsqueda",
          step: "6:",
          description: "El elemento <search> nos permite definir elementos que forman parte de una búsqueda, proporcionando una estructura para agrupar y organizar los componentes relacionados con la búsqueda.",
          code: "<search>\n<form>\n<label for='search'>Buscar:</label>\n<input type='search' id='search' name='search' placeholder='Ingrese su búsqueda'>\n<button type='submit'>Buscar</button>\n</form>\n</search>"
        },
        {
          description: "Si has llegado hasta aquí, te agradezco por tu atención. Espero que alguno de estos consejos de HTML te haya resultado útil."
        }
      ]
    },
    {
      id: 3,
      title: "Guía de Carrera en Desarrollo Web",
      meta: "Descubre habilidades esenciales y perspectivas para una exitosa carrera en desarrollo web en nuestra guía integral.",
      image: webDev,
      alt: "Computadora con alusión al desarrollo web",
      blogPageSummary: "Descubre habilidades esenciales y perspectivas para una exitosa carrera en desarrollo web en nuestra guía integral.",
      articleSummary: "Te presentamos nuestra Guía de Carrera en Desarrollo Web: un recurso completo diseñado para personas interesadas en embarcarse en una carrera en desarrollo web. Adéntrate en las perspectivas de la industria y descubre las habilidades y herramientas esenciales necesarias para destacar en este campo dinámico.",
      time: "10",
      related: ["JavaScript", "Node"],
      shared: ["Twitter", "LinkedIn"],
      date: "Octubre 9, 2023",
      step: [
        {
          title: "Diseñador UI/UX",
          description: "Un Diseñador UI/UX crea interfaces digitales amigables para el usuario, enfocándose en mejorar la usabilidad, estética y satisfacción general del usuario en sitios web y aplicaciones. Combina la creatividad con la funcionalidad para crear experiencias agradables e intuitivas. Aquí tienes algunos puntos clave:",
          list: [
            "Principios de Diseño: incluyendo color, contraste, espaciado, tipografía, etc.",
            "Software de Diseño: dominio de herramientas como Figma, Sketch y productos de Adobe.",
            "Creación de Wireframes y Prototipos: planificación del diseño de las pantallas de la aplicación.",
            "Investigación de Usuarios: identificación y validación de las necesidades de los usuarios.",
            "Pruebas de Usuario: evaluación y validación de diseños.",
            "HTML y CSS Básicos: facilitando la colaboración fluida."
          ]
        },
        {
          title: "Desarrollador de Aplicaciones de Página Única (SPA) - Front-end",
          description: "Especializado en el desarrollo de aplicaciones de página única que se cargan una vez desde el servidor y actualizan dinámicamente el contenido sin necesidad de recargar la página.",
          list: [
            "Frameworks de JavaScript: experiencia en React, Angular, Vue, Svelte, etc.",
            "Enrutamiento: implementación de enrutamiento del lado del cliente, vistas y componentes.",
            "Gestión de Estado: utilización de bibliotecas como Redux, Vuex, etc.",
            "Integración de API: habilidades en Rest APIs y GraphQL.",
            "Carga Tardía (Lazy Loading): optimización del rendimiento para activos y componentes.",
            "Seguridad: garantizar la protección contra vulnerabilidades como XSS y CSRF."
          ]
        },
        {
          title: "Desarrollador del Lado del Servidor - Full Stack",
          description: "Especializado en la creación de aplicaciones web que generan contenido en el servidor antes de enviarlo al cliente.",
          list: [
            "Lenguajes y Tecnologías del Lado del Servidor: Node, Python, PHP, C#.",
            "Frameworks del Backend: Express, Django, Laravel, Rails.",
            "Frameworks de SSR (Renderización en el Lado del Servidor): Next.js, Nuxt.js, Remix.",
            "Bases de Datos y ORM (Mapeo Objeto-Relacional): MySQL, Postgres, MongoDB, Prisma.",
            "Motores de Plantillas: Blade, Pug, EJS, Handlebars, Twig.",
            "Autenticación y Autorización: JWT, Sesiones, Cookies, OAuth."
          ]
        },
        {
          title: "Desarrollador de API y Microservicios",
          description: "Un desarrollador backend especializado en el diseño, desarrollo y mantenimiento de microservicios y APIs, con un fuerte énfasis en el manejo de lógica compleja.",
          list: [
            "Lenguajes y Tecnologías del Lado del Servidor: Node, Python, PHP, C#.",
            "Arquitectura de Microservicios: Descubrimiento de servicios, equilibrio de carga, etc.",
            "Diseño de API: API REST, GraphQL.",
            "Contenedorización: Empaquetado para microservicios.",
            "Pasarelas de API: Implementación de pasarelas para enrutamiento.",
            "Autenticación y Autorización: Asegurar las APIs con mecanismos de autenticación.",
            "Escalabilidad: Manejo de cargas de trabajo variables."
          ]
        },
        {
          title: "Ingeniero DevOps",
          description: "Se enfoca en la implementación y operaciones de la aplicación.",
          list: [
            "Proveedores de Nube: AWS, Azure, Google Cloud.",
            "Infraestructura como Código: Terraform, CloudFormation.",
            "Contenedorización: Docker, Kubernetes.",
            "Serverless: AWS Lambda, Azure Functions.",
            "Integración Continua: CircleCI, Github Actions.",
            "Despliegue Continuo: AWS CodeDeploy, Azure DevOps.",
            "Monitoreo, Registro y Alertas: DataDog, Loggly, OpsGenie."
          ]
        },
        {
          title: "Desarrollador Móvil",
          description: "Se enfoca en la implementación de aplicaciones móviles.",
          list: [
            "iOS: Swift y Objective-C.",
            "Android: Kotlin y Java.",
            "Plataformas Cruzadas: Utiliza tecnologías web como React Native y Flutter.",
            "Desarrollo de API: Crea APIs para que tu aplicación móvil interactúe con ellas.",
            "Pruebas Móviles: Realiza pruebas con herramientas como Jest y Appium.",
            "Herramientas de Compilación Nativas: XCode y Android Studio."
          ]
        },
        {
          title: "Especialista en Seguridad Web",
          description: "En este rol, las responsabilidades incluyen garantizar la seguridad y protección de las aplicaciones web, lo que implica abordar y corregir vulnerabilidades.",
          list: [
            "Vulnerabilidades Web: Proteger e identificar la inyección SQL, XSS, CSRF.",
            "Herramientas de Seguridad Web.",
            "Pruebas de Penetración.",
            "Auditorías de Seguridad.",
            "Cumplimiento de Seguridad: Comprender el cumplimiento y las regulaciones."
          ]
        },
        {
          title: "Desarrollador de Juegos Web y Móviles",
          description: "Los Desarrolladores de Juegos Web y Móviles crean juegos cautivadores para plataformas en línea y móviles. Codifican mecánicas de juego, gráficos y optimizan el rendimiento para brindar experiencias de juego agradables en diferentes dispositivos.",
          list: [
            "Lógica y Diseño de Juegos: Dominio de la física y los principios de diseño de juegos.",
            "Motores de Juegos: Phaser, Unity.",
            "WebGL: Renderización de gráficos 3D en el navegador.",
            "Compatibilidad entre Navegadores: Funcionamiento fluido en distintos navegadores y dispositivos.",
            "Rendimiento de Juegos: Optimización con herramientas como Lighthouse."
          ]
        },
        {
          title: "Desarrollador de Blockchain",
          description: "Un Desarrollador de Blockchain se especializa en diseñar e implementar soluciones tecnológicas basadas en blockchain. Crean aplicaciones y contratos inteligentes seguros, transparentes y descentralizados utilizando diversas plataformas y lenguajes de programación blockchain.",
          list: [
            "Desarrollo de Contratos Inteligentes: Solidity y Rust.",
            "Plataformas Blockchain: Ethereum, Binance Smart Chain.",
            "Desarrollo de DApps: Creación de aplicaciones descentralizadas.",
            "DeFi: Finanzas Descentralizadas.",
            "Web3.js: Biblioteca para interactuar con redes y aplicaciones blockchain.",
            "Seguridad Blockchain: Aprender mejores prácticas."
          ]
        },
        {
          title: "Desarrollador de AR y VR",
          description: "Un Desarrollador de AR y VR se especializa en crear experiencias inmersivas de realidad aumentada (AR) y realidad virtual (VR). Diseñan y desarrollan aplicaciones interactivas, juegos y simulaciones que combinan contenido digital con el mundo real o crean entornos virtualmente completos.",
          list: [
            "Frameworks de AR/VR: Unity 3D, A-Frame.",
            "Modelado 3D.",
            "Computación Espacial.",
            "Reconocimiento de Gestos: Seguimiento de manos para la interacción del usuario.",
            "Diseño Inmersivo: Creación de una experiencia de usuario inmersiva y amigable.",
            "Desarrollo Multiplataforma: Ejecución en diversos dispositivos."
          ]
        },
        {
          title: "Desarrollador de PWA Web",
          description: "Un Desarrollador de PWA (Progressive Web App) Web se especializa en construir aplicaciones web que ofrecen una experiencia fluida y similar a la de una aplicación en todos los dispositivos. Utilizan tecnologías web modernas para crear aplicaciones capaces de funcionar sin conexión, responsivas y de carga rápida que pueden ser accedidas a través de navegadores web y instaladas en dispositivos de los usuarios.",
          list: [
            "Service Workers: Funcionalidad sin conexión y sincronización en segundo plano.",
            "Manifiesto de la Aplicación Web: Define el comportamiento de la aplicación, pantalla de inicio, etc.",
            "Diseño Responsivo: El diseño debe adaptarse a todos los dispositivos.",
            "Estrategias de Caché: Aumentar el rendimiento y reducir los tiempos de carga.",
            "Notificaciones Push: Reenganchar a los usuarios.",
            "Arquitectura de App-Shell: Proporcionar una experiencia inicial rápida."
          ]
        },
        {
          title: "Desarrollador de Internet de las Cosas (IoT)",
          description: "Un Desarrollador de Internet de las Cosas (IoT) se especializa en diseñar, desarrollar e implementar soluciones de IoT. Crean dispositivos interconectados, sensores y sistemas de software que permiten a los dispositivos recopilar y compartir datos, haciendo que el mundo físico esté más conectado y sea más eficiente.",
          list: [
            "Protocolos de IoT: Protocolos de comunicación como MQTT, CoAP y HTTP.",
            "Integración de Hardware: Sensores, actuadores y microcontroladores.",
            "Servicios de IoT en la Nube: AWS IoT, Google Cloud IoT.",
            "Transmisión de Datos: Configuración de canalización de datos.",
            "Aplicaciones de Control Móvil: Uso y pruebas a distancia.",
            "Aprendizaje Automático: Aplicación de modelos de aprendizaje automático."
          ]
        },
        {
          title: "Desarrollador de Chatbots",
          description: "Un Desarrollador de Chatbots se especializa en crear agentes conversacionales inteligentes para diversas aplicaciones. Diseñan, desarrollan y optimizan chatbots utilizando tecnologías de procesamiento de lenguaje natural y aprendizaje automático para mejorar el soporte al cliente, automatizar tareas y mejorar las interacciones de los usuarios en diversas plataformas.",
          list: [
            "Procesamiento de Lenguaje Natural: NLTK, SpaCy, Tensorflow.",
            "Frameworks de Chatbots: DialogFlow, Microsoft Bot Framework.",
            "Integraciones: Slack, Discord, WhatsApp.",
            "Asistentes de Voz: Amazon Alexa, Google Assistant.",
            "Comprensión Contextual: Mantener la participación del usuario.",
            "Pruebas y Análisis."
          ]
        }
      ]
    }
  ]
}

export const english: BlogDataTypes = {
  author: "Alejandro Cano",
  description: "A freelance designer and dedicated front-end developer committed to enhancing everyone's web experience, with a focus on progressive improvement and constant refinement.",
  blog: [
    {
      id: 1,
      title: "How to Install Linux Mint Alongside Windows 11?",
      meta: "Learn how to install Linux Mint alongside Windows 11.",
      image: linuxWindowsArticle,
      alt: "Linux penguin and Windows background",
      blogPageSummary: "This guide will show you how to run Linux Mint and Windows together on the same PC.",
      articleSummary: "This guide will show you how to run Linux Mint and Windows together on the same PC. The steps mentioned are applicable to Linux Mint distributions. Well, let's see how to dual boot Linux on a Windows system.",
      time: "5",
      related: ["Windows", "Linux"],
      shared: ["Twitter", "LinkedIn"],
      date: "October 3, 2023",
      step: [
        {
          title: "Make a Backup [Optional]",
          step: "Step 1:",
          description: "It's always good to have a backup, just in case. Download the ISO image according to your Windows operating system.",
          resource: "https://www.microsoft.com/en-us/software-download/"
        },
        {
          title: "Download the Linux Mint Distribution",
          step: "Step 2:",
          description: "Go to the official Linux Mint website and navigate to the downloads section. Find the distribution you like the most and download it. It may take some time depending on your internet connection.",
          resource: "https://linuxmint.com/"
        },
        {
          title: "Download Rufus to Create USB Boot Drives",
          step: "Step 3:",
          description: "Right-click on the Rufus installer and run it as an administrator. Then, under 'Device,' select the USB and under 'Select,' locate the Linux ISO image. In 'Partition scheme,' it's important to select 'GPT' if the target system is UEFI. Click 'Start,' and then 'OK' in 'ISO Image mode (recommended).'",
          resource: "https://rufus.ie/es/"
        },
        {
          title: "Boot from the BIOS",
          step: "Step 4:",
          description: "Accessing the BIOS depends on your computer, but if pressing F2, F12, or F10 during startup doesn't work, you should look for the key that allows you to enter the BIOS."
        },
        {
          title: "Linux Mint Installation",
          step: "Step 5:",
          description: "The Linux Mint installer allows us to partition our hard drive. We should select 'OEM install' (for manufacturers), choose our settings, and follow the installation steps. Then, select 'Install Linux Mint alongside Windows Boot Manager.' Adjust your storage space and proceed."
        },
        {
          title: "Select Operating System at Startup",
          step: "Step 6:",
          description: "All that's left is to restart and select the operating system you want to use and enjoy. 🍾🎉"
        }
      ]
    },
    {
      id: 2,
      title: "Exploring Powerful HTML5 Tags for a Modern Web",
      meta: "Discover the potential of HTML5 tags to transform your website into a modern and interactive experience.",
      image: HTML5Img,
      alt: "HTML 5 logo for the modern web",
      blogPageSummary: "Explore Innovative HTML Tags That Simplify Our Lives on the Web.",
      articleSummary: "I'm amazed at how many tags I didn't know; some of them I had explored only superficially, while others I had barely used. Next, we'll take a look at some of them.",
      time: "4",
      related: ["Windows", "Linux"],
      shared: ["Twitter", "LinkedIn"],
      date: "October 9, 2023",
      step: [
        {
          title: "We'll start our list with the 'Dataset' element",
          step: "1:",
          description: "To create a data input and list, we use both the 'input' and 'datalist' tags. The 'list' attribute of the 'input' element refers to the 'datalist', allowing us to have an input where we can enter data.",
          code: "<label for='languages'>language:</label>\n<input list='languages' id='language-choice' name='language-choice'>\n\n<datalist id='languages'>\n    <option value='Javascript'>\n    <option value='Java'>\n    <option value='Swift'>\n    <option value='Go'>\n    <option value='PHP'>\n</datalist>",
          img: datasetImg,
          imgAlt: "Example of HTML dataset element",
          imgWidth: "640",
          imgHeight: "230"
        },
        {
          title: "Inputs for Capturing Images, Videos, and Audio",
          step: "2:",
          description: "This HTML code represents a form that allows users to upload images or videos to a web server. The 'capture' attribute allows us to access the cameras on mobile devices.",
          img: typeFile,
          imgAlt: "HTML code for uploading photos and videos to the native server",
          imgWidth: "566",
          imgHeight: "310"
        },
        {
          title: "The HTML <dialog> Element for Modal Dialog Boxes",
          step: "3:",
          description: "The HTML <dialog> element is used to create a modal dialog box on a web page. A modal dialog box is a popup window that blocks interaction with the rest of the page until the user interacts with it or closes it.",
          img: dialogHtmlImg,
          imgAlt: "Example code for an HTML dialog",
          imgWidth: "646",
          imgHeight: "503"
        },
        {
          title: "Using <details> and <summary> Tags in HTML for Collapsible Content",
          step: "4:",
          description: "`<details>` and `<summary>` in HTML create collapsible sections. The content in `<details>` is initially hidden and expands when clicking `<summary>`. They are useful for displaying additional information neatly and allowing users to control what content they see, improving web usability."
        },
        {
          title: "HTML Popover Property Displays Floating Element",
          step: "5:",
          description: "A popover is a popup window that displays additional information or options when interacting with an element in an application or website. It is used to provide additional details and can be closed by clicking anywhere outside of it.",
          code: "<button id='popoverButton'>Show Popover</button>\n<div id='popoverContent' class='popover'>This is an example.\n</div>"
        },
        {
          title: "Defining Search Elements",
          step: "6:",
          description: "The <search> element allows us to define elements that are part of a search, providing a structure to group and organize components related to the search.",
          code: "<search>\n<form>\n<label for='search'>Search:</label>\n<input type='search' id='search' name='search' placeholder='Enter your search'>\n<button type='submit'>Search</button>\n</form>\n</search>"
        },
        {
          description: "If you've made it this far, thank you. I hope you found some of these HTML tips useful."
        }
      ]
    },
    {
      id: 3,
      title: "Web Development Career Guide",
      meta: "Discover essential skills and insights for a successful web development career in our comprehensive guide.",
      image: webDev,
      alt: "Computer with with web development allusion",
      blogPageSummary: "Discover essential skills and insights for a successful web development career in our comprehensive guide.",
      articleSummary: "Introducing our Web Development Career Guide—a comprehensive resource designed for individuals eager to embark on a journey in web development. Delve into industry insights and discover the essential skills and tools necessary to excel in this dynamic field.",
      time: "10",
      related: ['JavaScript', 'Node'],
      shared: ["Twitter", "LinkedIn"],
      date: "October 9, 2023",
      step: [
        {
          title: "UI/UX Designer",
          description: "A UI/UX Designer crafts user-friendly digital interfaces, with a focus on enhancing usability, aesthetics, and overall user satisfaction in websites and applications. They combine creativity with functionality to create enjoyable and intuitive experiences. Here are some key points:",
          list: [
            "Design Principles: including color, contrast, whitespace, typography, etc.",
            "Design Software: proficiency in tools like Figma, Sketch, and Adobe products.",
            "Wireframing and Prototyping: planning the layout of app screens.",
            "User Research: identifying and validating user needs.",
            "User Testing: testing and validating designs.",
            "Basic HTML and CSS: facilitating smooth collaboration."
          ]
        },
        {
          title: "Single Page App (SPA) Developer - Front End",
          description: "Specializes in the development of single-page applications that load once from the server and dynamically update content without the need for page reloading.",
          list: [
            "Javascript Frameworks: expertise in React, Angular, Vue, Svelte, etc.",
            "Routing: implementation of client-side routing, views, and components.",
            "State Management: utilization of libraries like Redux, Vuex, etc.",
            "API Integration: proficiency with Rest APIs and GraphQL.",
            "Lazy Loading: optimizing performance for assets and components.",
            "Security: ensuring protection against vulnerabilities like XSS and CSRF."
          ]
        },
        {
          title: "Server-Side Developer - Full Stack",
          description: "Specializes in the creating web apps that generate content in the server before sending it to the client.",
          list: [
            "Server-Side Languages and Technologies: Node, Python, PHP, C#.",
            "Backend Frameworks: Express, Django, Laravel, Rails.",
            "SSR Frameworks: Next.js, Nuxt.js, Remix ",
            "Database and ORM: MySQL, Postgres, MongoDB, Prisma",
            "Template Engines: Blade, Pug, EJS, Handlebars, Twig.",
            "Authentication and Authorization: JWT, Sessions, Coogies, OAuth."
          ]
        },
        {
          title: "API and Microservices Developer",
          description: "A specialized backend developer focused on designing, developing, and maintaining microservices and APIs, with a strong emphasis on handling complex logic.",
          list: [
            "Server-Side Languages and Technologies: Node, Python, PHP, C#.",
            "Microservices Arquitecture: Service Discovery, load balancing, etc.",
            "API Design: REST API, GraphQL.",
            "Containerization: Packaging for microservices.",
            "API Gateways: Implement gateways for routing.",
            "Authentication and Authorization: Secure APIs with auth mechanisms.",
            "Scalability: Handle varying workloads."
          ]
        },
        {
          title: "Dev Ops Engineer",
          description: "Focuses in the deployment and operations of the application.",
          list: [
            "Cloud Providers: AWS, Azure, Google Cloud.",
            "Infrastructure as Code: Terraform, CloudFormation.",
            "Containerization: Docker, Kubernetes.",
            "Serverless: AWS Lambda, Azure Fuctions.",
            "Continuous Integration: CircleCI, Github Actions.",
            "Continuous Deployment: AWS, CodeDeploy, Azure DevOps.",
            "Monitoring, Logging and Alerting: DataDog, Loggly, OpsGenie."
          ]
        },
        {
          title: "Mobile Developer",
          description: "Focuses in the deployment of Mobile applications.",
          list: [
            "iOS: Swift and Objective-C.",
            "Android: Kotlin and Java.",
            "Cross-Platform: Use web technologies like React Native and Flutter.",
            "API Development: Create APIs for your mobile app to interact with.",
            "Mobile Testing: Test with tools like Jest and Appium.",
            "Native Build Tools: XCode and Andriod Studios.",
          ]
        },
        {
          title: "Web Security Specialist",
          description: "In this role, responsibilities include ensuring the security and protection of web applications, which involves addressing and fixing vulnerabilities.",
          list: [
            "Web Vulnerabilities: Protect and identify SQL injection, XSS, CSRF.",
            "Web Security Tools",
            "Penetration Testing.",
            "Security Audits.",
            "Security Compliance: Understand compliance and regulations.",
          ]
        },
        {
          title: "Web and Mobile Game Developer",
          description: "Web and Mobile Game Developers create captivating games for online and mobile platforms, coding gameplay mechanics, graphics, and optimizing performance for enjoyable gaming experiences across different devices.",
          list: [
            "Game Logic and Design: Master game physics and design principles.",
            "Game Engines: Phaser, Unity.",
            "WebGL: Render 3D graphics in the browser.",
            "Cross-Browswer Capability: Work smooth across browsers/devices.",
            "Game Performance: Optimize with tools like Lighthouse.",
          ]
        },
        {
          title: "Blockchain Developer",
          description: "A Blockchain Developer specializes in designing and implementing blockchain technology solutions. They create secure, transparent, and decentralized applications and smart contracts using various blockchain platforms and programming languages.",
          list: [
            "Smart Contract Development: Solidity and Rust.",
            "Blockchain Platforms: Ethereum, Binance Smart Chain.",
            "DApp Development: Create decentralized applications.",
            "DeFi: Decentralized Finance.",
            "Web3.js: Library to interact with blockchain networks and apps.",
            "Blockchain Security: Learn best practices"
          ]
        },
        {
          title: "AR and VR Developer",
          description: "An AR and VR Developer specializes in creating immersive augmented reality (AR) and virtual reality (VR) experiences. They design and develop interactive applications, games, and simulations that merge digital content with the real world or create entirely virtual environments.",
          list: [
            "AR / VR Frameworks: Unity 3D, A-Frame.",
            "3D Modeling.",
            "Spatial Computing.",
            "Gesture Recognition: Hand tracking for user input.",
            "Immersive Design: Create immersive and friendly UX.",
            "Cross-Platform Development: Run on various devices."
          ]
        },
        {
          title: "PWA Web Developer",
          description: "A PWA (Progressive Web App) Web Developer specializes in building web applications that offer a seamless and app-like experience across devices. They employ modern web technologies to create offline-capable, responsive, and fast-loading applications that can be accessed through web browsers and installed on users' devices.",
          list: [
            "Service Workers: Offline functionality and background sync.",
            "Web App Manifest: Define app behavior, home screen, etc.",
            "Responsive Design: Design should respond across all devices.",
            "Caching Strategies: Increase performance and reduce load times.",
            "Push Notification: Re-engage users.",
            "App-Shell Arquitecture: Provide a fast initial experience."
          ]
        },
        {
          title: "Internet of things (IoT) Developer",
          description: "An IoT (Internet of Things) Developer specializes in designing, developing, and implementing IoT solutions. They create interconnected devices, sensors, and software systems, enabling devices to collect and exchange data, making the physical world more connected and efficient.",
          list: [
            "IoT Protocols: Communication protocols like MQTT, CoAP and HTTP.",
            "Hardware Integration: Sensors, actuators, and microcontrollers",
            "Cloud IoT Services: AWS IoT, Google Cloud IoT.",
            "Data Streaming: Setup data pipelines",
            "Mobile Control Apps: Use and test remotely",
            "Machine Learning: Apply machine learning models"
          ]
        },
        {
          title: "ChatBot Developer",
          description: "A Chatbot Developer specializes in creating intelligent conversational agents for various applications. They design, develop, and optimize chatbots using natural language processing and machine learning technologies to enhance customer support, automate tasks, and improve user interactions across platforms.",
          list: [
            "Natural Language Processing: NLTK, SpaCy, Tensorflow.",
            "ChatBot Frameworks: DialogFlow, Microsoft Bot Framework.",
            "Integrations: Slack, Discord, WhatsApp.",
            "Voice Assistants: Amazon Alexa, Google Assistant.",
            "Contextual Understanding: Maintain engagement.",
            "Testing and Analytics."
          ]
        }
      ]
    },
  ]
}


