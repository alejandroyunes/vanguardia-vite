const linuxWindowsArticle = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377830/blog/vb8hiwp1l43tscwoye3q.webp'

const datasetImg = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377830/blog/m2yyvr6jft0a8j1ws8rj.webp'
const HTML5Img = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/kkc4eb4flw5qgmjpmdro.webp'
const dialogHtmlImg = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/y8ilxs7nfswjoshlij4z.webp'
const typeFile = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/vhgqvp2jx4bt90tcrrof.webp'
const webDev = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/o8uhw4gqb4wdjj6nrnef.webp'
const NodeExpressServer = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698957906/blog/mcygclsb4g0jj5jrchuj.webp'
const NodeExpressServerPackage = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698969420/blog/articles/express-apollo-server/yfhq2ar29havuwrqkkvm.webp"
const NodeExpressServerNodemon = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698969281/blog/articles/express-apollo-server/cb6ipencimfoidlji9st.webp"
const NodeExpressServerTsConfig = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698982069/blog/articles/express-apollo-server/cnya3ezkbt2nig1chalj.webp"
const NodeExpressServerIndex = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698969281/blog/articles/express-apollo-server/uetfdarc7lpqdbqfxvjb.webp"
const NodeExpressServerGraphQL = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698982347/blog/articles/express-apollo-server/bnyl6josz6cm2llcxeah.webp"
const NodeExpressServerGraphQLResolver = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698983929/blog/articles/express-apollo-server/qdgulxunkh6sck7q7857.webp"
const NodeExpressServerGraphQLServices = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698984511/blog/articles/express-apollo-server/kxyolrs7qkmgnwa7ey3r.webp"
const NodeExpressServerGraphQLExtract = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698986621/blog/articles/express-apollo-server/fjnyzh4gedjsn0kwx4wi.webp"
const NodeExpressServerGraphQLTypeDefs = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698988912/blog/articles/express-apollo-server/xdrmg8oq3grvkszwdjt4.webp"
const NodeExpressServerPrisma = "https://res.cloudinary.com/dcpdkock3/image/upload/v1698990416/blog/articles/express-apollo-server/bchrvctdzhaf6iye6l8c.webp"
const NextStyleX = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702595741/blog/tfco6gqkkqrvwer8xhns.webp"
const NextStyleXDependencies = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702598521/blog/articles/next-app-style-x/a6d9i37uatdhabgmjxkx.webp"
const NextStyleXBabel = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599012/blog/articles/next-app-style-x/ikeujy9dxxqepiscn9jg.webp"
const NextStyleXTsConfig = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599163/blog/articles/next-app-style-x/vj5nd8ewqsfvp94n9cjy.webp"
const NextStyleXEslint = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599324/blog/articles/next-app-style-x/jpp9emuygb4zv6xv52ah.webp"
const NextStyleXNextConfig = "https://res.cloudinary.com/dcpdkock3/image/upload/v1702599513/blog/articles/next-app-style-x/cxy3zobcgsgxmp6iue3l.webp"



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
  resource?: string
}

export interface BlogDataTypes {
  author: string
  description: string
  blog: BlogArticleType[]
}

export const spanish: BlogDataTypes = {
  author: "Alejandro Cano",
  description: "Un diseñador independiente y desarrollador front-end dedicado a mejorar algo de la experiencia en la web, con un enfoque centrado en la mejora progresiva y el perfeccionamiento constante.",
  blog: [
    {
      id: 1,
      title: "Next 14 app con Style X",
      meta: "Una guía paso a paso para configurar la aplicación Next 14 con Style X. En el mundo siempre cambiante de la tecnología, mantenerse al día significa adoptar las últimas innovaciones.",
      image: NextStyleX,
      alt: "Next 14 app con Style X",
      blogPageSummary: "Una guía paso a paso para configurar la aplicación Next 14 con Style X. En el mundo siempre cambiante de la tecnología, mantenerse al día significa adoptar las últimas innovaciones.",
      articleSummary: "Una de esas innovaciones es Next 14, un framework poderoso que promete transformar tu aplicación web. Instalaremos también Style X para nuestros estilos. En esta guía, te guiaremos a través del proceso de instalación de la Next App y Style X.",
      time: "10",
      related: ["React"],
      shared: ["Twitter", "LinkedIn"],
      date: "14 de diciembre de 2023",
      step: [
        {
          title: "Configuración del entorno: Configuración inicial",
          description: "Primeros pasos: Asegúrate de tener Node y un administrador de paquetes como npm, pnpm o yarn instalados en tu sistema. Una vez confirmado, ejecuta el comando 'npm init -y' en el directorio elegido desde la terminal. Esto establecerá una configuración básica del proyecto. En el siguiente paso, nos centraremos en instalar las dependencias necesarias para nuestra aplicación.",
          resource: "https://nodejs.org/en",
        },
        {
          title: "Instalación de dependencias",
          description: "Primero y ante todo, tienes el enlace al repositorio de GitHub con todo el código en el enlace a continuación. En este paso, instalaremos las dependencias necesarias para nuestro servidor. Comenzaremos instalando tanto dependencias regulares como de desarrollo.",
          resource: "https://github.com/alejandroyunes/stylex-next-app",
          list: [
            "Next 14",
            "Style X",
            "Babel",
            "Typescript",
            "Eslint"
          ],
          img: NextStyleXDependencies,
          imgAlt: "Next 14 app con Style X",
          imgHeight: "895",
          imgWidth: "570"
        },
        {
          title: "Configuración de Babel",
          description: "Babel es un compilador de JavaScript popular que permite a los desarrolladores escribir código en la última versión de ECMAScript (el nombre oficial de la especificación del lenguaje JavaScript) y luego transformarlo o transpilarlo a una versión anterior de JavaScript compatible con la mayoría de los navegadores y entornos:",
          img: NextStyleXBabel,
          imgAlt: "Configuración de Babel para la próxima aplicación y Style X",
          imgHeight: "621",
          imgWidth: "483"
        },
        {
          title: "Agregar tsconfig.json",
          description: "Esta configuración define opciones del compilador para un proyecto TypeScript, incluyendo detalles como la versión de destino, el soporte para decoradores experimentales, el sistema de módulos y otras configuraciones relacionadas con la comprobación estricta de tipos. También establece las rutas de inclusión de archivos y directorios para el compilador TypeScript. Me gusta establecer el src/app porque estará bajo la carpeta de node_modules.",
          img: NextStyleXTsConfig,
          imgAlt: "Configuración de tsconfig",
          imgHeight: "1032",
          imgWidth: "688"
        },
        {
          title: "Agregar eslintrc.js",
          description: "ESLint es una herramienta ampliamente utilizada y de código abierto para el análisis estático de código en JavaScript. Ayuda a los desarrolladores a identificar y corregir problemas en su código mediante la aplicación de un conjunto de normas o reglas de codificación.",
          img: NextStyleXEslint,
          imgAlt: "Configuración de Eslint",
          imgHeight: "265",
          imgWidth: "597"
        },
        {
          title: "Agregar next.config.js",
          description: "next.config.js es un archivo de configuración utilizado en Next.js. Este archivo nos permite personalizar varios aspectos del proceso de construcción y del comportamiento en tiempo de ejecución de Next.js.",
          img: NextStyleXNextConfig,
          imgAlt: "Configuración de next config",
          imgHeight: "265",
          imgWidth: "597"
        },
        {
          title: "Crear page.tsx y el diseño",
          description: "Esta sección es bastante extensa, así que puedes copiar la página, el diseño y globalTokens.stylex.ts para completar la instalación de una aplicación Next limpia con Style X desde el repositorio de GitHub.",
        },
        {
          description: "Si has llegado hasta aquí, te agradezco tu atención. Espero que esta plantilla te sea útil."
        }
      ]
    },
    {
      id: 2,
      title: "Arquitectura de servidor moderno y de alto rendimiento",
      meta: "Este servidor está construido utilizando Node.js y Express.  Utilizando GraphQL con Apollo Server como el servidor GraphQL. Los datos se almacenan en una base de datos PostgreSQL y se acceden a través de Prisma.",
      image: NodeExpressServer,
      alt: "Diagrama de Arquitectura del Servidor con Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL y Prisma",
      blogPageSummary: "Guía para crear un Servidor con Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL y Prisma.",
      articleSummary: "Este servidor será construido utilizando Node.js y Express para manejar las solicitudes HTTP. Utiliza TypeScript para agregar tipado estático a todo el código. La API se implementa utilizando GraphQL con Apollo Server como el servidor GraphQL. Los datos se almacenan en una base de datos PostgreSQL y se acceden a través de Prisma, un ORM (Object-Relational Mapping) para Node.js.",
      time: "15",
      related: ["Node"],
      shared: ["Twitter", "LinkedIn"],
      date: "Noviembre 02, 2023",
      step: [
        {
          title: "Preparando el Entorno: Instalación de Node y Configuración Inicial",
          description: "Para comenzar, es esencial asegurarse de tener Node y un gestor de paquetes como npm, pnpm o yarn instalados en tu sistema. Una vez confirmada su instalación, puedes ejecutar el comando 'npm init -y' en la carpeta de tu elección desde la terminal. Esto establecerá una configuración básica para tu proyecto. En el siguiente paso, nos enfocaremos en la instalación de las dependencias necesarias para nuestro servidor.",
          resource: "https://nodejs.org/",
        },
        {
          title: "Instalación de Dependencias",
          description: "Antes que nada tienes el link al repo de github con todo el código en el link inferior. En este paso, instalaremos las dependencias necesarias para nuestro servidor. Comenzaremos instalando las dependencias y dependencias de desarrollo.",
          resource: "https://github.com/alejandroyunes/express-apollo-postgres-prisma",
          list: [
            "npm i @apollo/server @apollo/client cors dotenv express graphql",
            "npm i -D @types/cors @types/express @types/node nodemon prisma ts-node typescript",
            "Asegúrate de crear los scripts de npm para ejecutar el servidor y el cliente."
          ],
          img: NodeExpressServerPackage,
          imgAlt: "Paquetes de Node.js para el servidor",
          imgHeight: "553",
          imgWidth: "311"
        },
        {
          title: "Configuración de Nodemon",
          description: "Nodemon es una herramienta que nos permite reiniciar automáticamente el servidor cuando se detectan cambios en el código. Para configurarlo, creamos un archivo nodemon.json en la raíz del proyecto y agregamos el siguiente código:",
          img: NodeExpressServerNodemon,
          imgAlt: "Configuración de Nodemon para el servidor",
          imgHeight: "112",
          imgWidth: "283"
        },
        {
          title: "Agregar tsconfig.json",
          description: "Esta configuración define las opciones del compilador para un proyecto TypeScript, incluyendo detalles como la versión de destino, el soporte para decoradores experimentales, el sistema de módulos, y otras configuraciones relacionadas con la estricta comprobación de tipos. Además, establece las rutas de inclusión de archivos y directorios para el compilador TypeScript.",
          img: NodeExpressServerTsConfig,
          imgAlt: "Configuración de tsconfig",
          imgHeight: "382",
          imgWidth: "400"
        },
        {
          title: "Servidor web utilizando Express.js con GraphQL",
          description: "Este código configura un servidor web Express habilitado para GraphQL en la ruta '/graphql' y proporciona una ruta raíz que responde con un mensaje ' hello world' para rutas HTTP. Al ejecutarse, el servidor se inicia en el puerto 4000 y queda listo para atender solicitudes.",
          img: NodeExpressServerIndex,
          imgAlt: "Configuración de Index en expressjs",
          imgHeight: "565",
          imgWidth: "507",
          list: [
            "El código importa bibliotecas como Express, CORS, dotenv y Apollo Server.",
            "Configura un servidor Express en un puerto (4000 o definido por variable de entorno).",
            "Define un servidor GraphQL con tipos y resolvers.",
            "Configura middleware para manejar CORS y solicitudes JSON y URL codificadas.",
            "Inicia el servidor Express y muestra mensajes en la consola con las URL del servidor web y GraphQL cuando está listo."
          ]
        },
        {
          title: "Agregar configuración de GraphQL",
          description: "Este código importa módulos, como el sistema de archivos 'fs' y 'path' de Node, y resuelve tipos GraphQL definidos en archivos. Luego, combina estos tipos en una sola definición 'typeDefs' y configura los resolvers para consultas y mutaciones relacionadas con usuarios y publicaciones.",
          img: NodeExpressServerGraphQL,
          imgAlt: "Configuración de GraphQL",
          imgHeight: "273",
          imgWidth: "700"
        },
        {
          title: "Agregar resolvers para consultas y mutaciones",
          description: "Este código define resolvers para consultas y mutaciones relacionadas con usuarios y publicaciones. Los resolvers son funciones que se ejecutan cuando se realiza una consulta o mutación GraphQL. Cada resolver recibe argumentos, realiza una operación y devuelve un resultado.",
          img: NodeExpressServerGraphQLResolver,
          imgAlt: "Configuración de GraphQL resolvers",
          imgHeight: "273",
          imgWidth: "700"
        },
        {
          title: "Funciones de resolución y gestión de usuarios en GraphQL con Prisma",
          description: "Este código importa módulos relacionados con Prisma y GraphQL, y define funciones para interactuar con la base de datos y realizar operaciones relacionadas con usuarios. Estas operaciones incluyen obtener usuarios, obtener un usuario por ID y crear un nuevo usuario en la base de datos a través de Prisma. El código también incluye la extracción de selecciones GraphQL para determinar si se deben incluir detalles adicionales, como publicaciones, al obtener usuarios o un usuario específico.",
          img: NodeExpressServerGraphQLServices,
          imgAlt: "Configuración de servicios para GraphQL",
          imgHeight: "827",
          imgWidth: "620"
        },
        {
          title: "Gestión de selecciones de campos en consultas GraphQL",
          description: "Este código ofrece funciones para gestionar selecciones de campos en consultas GraphQL. Aprovecha la información de resolución GraphQL para extraer y procesar las selecciones de campos, lo que resulta valioso para determinar qué datos deben recuperarse de la base de datos en función de la consulta GraphQL. Además, en caso de que el campo no exista, proporciona un resultado vacío, mejorando el desempeño del sistema.",
          img: NodeExpressServerGraphQLExtract,
          imgAlt: "Gestión de selecciones de campos en consultas GraphQL",
          imgHeight: "286",
          imgWidth: "482"
        },
        {
          title: "Adicionalmente, agregamos los typesDefs para usuario y publicación",
          description: "Esto describe los types y mutations de GraphQL con tres tipos principales: 'User,' 'UserInput,' 'Query,' y 'Mutation.' El tipo 'User tiene campos como 'id,' 'email,' 'username,' y 'posts,' y se utiliza para representar usuarios y sus relaciones con publicaciones. 'UserInput' se utiliza para ingresar información de usuario en mutaciones. 'Query' proporciona operaciones para recuperar usuarios o un usuario específico. 'Mutation' ofrece operaciones para crear, actualizar y eliminar usuarios en la base de datos a través de GraphQL.",
          img: NodeExpressServerGraphQLTypeDefs,
          imgAlt: "Types y mutaciones de GraphQL",
          imgHeight: "294",
          imgWidth: "500"
        },
        {
          title: "Esquema Prisma para Usuarios y Publicaciones en PostgreSQL",
          description: "Este fragmento de código define un esquema Prisma que representa modelos de datos para usuarios y publicaciones en una base de datos PostgreSQL. También configura la generación del cliente de Prisma para interactuar con la base de datos.  Agregamos nuestra base de datos en el archivo .env, y luego ejecutamos el comando 'npx prisma generate' para generar el cliente de Prisma.",
          img: NodeExpressServerPrisma,
          imgAlt: "Schema de Prisma para usuarios y publicaciones",
          imgHeight: "294",
          imgWidth: "500"
        },
        {
          description: "Si has llegado hasta aquí, te agradezco por tu atención. Espero que esta plantilla te pueda resultar útil."
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
    },
    {
      id: 4,
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
          description: "Para crear una entrada de datos y una lista, utilizamos tanto la etiqueta 'input' como 'datalist'. La propiedad 'list' del elemento 'input' hace referencia al 'datalist', lo que nos permite tener una entrada donde podemos ingresar datos.",
          code: "<label for='languages'>language:</label>\n<input list='languages' id='language-choice' name='language-choice'>\n\n<datalist id='languages'>\n    <option value='Javascript'>\n    <option value='Java'>\n    <option value='Swift'>\n    <option value='Go'>\n    <option value='PHP'>\n</datalist>",
          img: datasetImg,
          imgAlt: "Ejemplo de elemento dataset de html",
          imgWidth: "640",
          imgHeight: "230"
        },
        {
          title: "Inputs para capturar imagen, videos y audio",
          description: "Este código HTML representa un formulario que permite a los usuarios cargar imágenes o videos en un servidor web.  El atributo capture nos permite acceder a la cámara de los dispositivos móviles.",
          img: typeFile,
          imgAlt: "código HTML para enviar fotos y videos al servidor nativo",
          imgWidth: "566",
          imgHeight: "310"
        },
        {
          title: "La etiqueta <dialog> en HTML para Cuadros de Diálogo Modales",
          description: "La etiqueta <dialog> en HTML se utiliza para crear un cuadro de diálogo modal en una página web. Un cuadro de diálogo modal es una ventana emergente que bloquea la interacción con el resto de la página hasta que el usuario interactúa con él o lo cierra.",
          img: dialogHtmlImg,
          imgAlt: "Código de ejemplo para un dialog en html",
          imgWidth: "646",
          imgHeight: "503"
        },
        {
          title: "Uso de las Etiquetas <details> y <summary> en HTML para Contenido Colapsable",
          description: "`<details>` y `<summary>` en HTML crean secciones colapsables. El contenido en `<details>` está oculto inicialmente y se expande al hacer clic en `<summary>`. Son útiles para mostrar información adicional de manera ordenada y permiten a los usuarios controlar qué contenido ver, mejorando la usabilidad web."
        },
        {
          title: "Propiedad de HTML Popover nos muestra elemento flotable",
          description: "Un popover es una ventana emergente que muestra información extra o opciones al interactuar con un elemento en una aplicación o sitio web. Se utiliza para ofrecer detalles adicionales y se puede cerrar haciendo clic en cualquier parte fuera de él.",
          code: "<button id='popoverButton'>Mostrar Popover</button>\n<div id='popoverContent' class='popover'>This is an example.\n</div>"
        },
        {
          title: "Definiendo Elementos de Búsqueda",
          description: "El elemento <search> nos permite definir elementos que forman parte de una búsqueda, proporcionando una estructura para agrupar y organizar los componentes relacionados con la búsqueda.",
          code: "<search>\n<form>\n<label for='search'>Buscar:</label>\n<input type='search' id='search' name='search' placeholder='Ingrese su búsqueda'>\n<button type='submit'>Buscar</button>\n</form>\n</search>"
        },
        {
          description: "Si has llegado hasta aquí, te agradezco por tu atención. Espero que alguno de estos consejos de HTML te haya resultado útil."
        }
      ]
    },
    {
      id: 5,
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
          description: "Siempre es bueno tener una copia de seguridad, por si acaso pasa algo. Descarga la imagen ISO según tu sistema operativo de Windows.",
          resource: "https://www.microsoft.com/en-us/software-download/"
        },
        {
          title: "Descarga la distribución de Linux Mint",
          description: "Ingresa al sitio oficial de Linux Mint y navega hacia la sección de descargas. Busca la distribución que más te guste y descárgala. Posiblemente tomará un poco de tiempo dependiendo de tu conexión a Internet.",
          resource: "https://linuxmint.com/"
        },
        {
          title: "Descarga Rufus para crear unidades de arranque USB",
          description: "Haz clic derecho sobre el instalador de Rufus y ejecútalo como administrador. Luego, en 'Dispositivo', selecciona la USB y en 'Seleccionar' busca la imagen ISO de Linux.  En 'Esquema de partición', es importante seleccionar 'GPT' si el sistema de destino es UEFI.  Haz clic en 'Empezar' y luego en 'OK' en el modo 'Imagen ISO (recomendado)'.",
          resource: "https://rufus.ie/es/"
        },
        {
          title: "Arranque desde el BIOS",
          description: "Para acceder a nuestro BIOS depende de nuestro equipo, pero si al iniciar el equipo y presionando F2, F12 o F10 no funciona, debemos buscar con que botón permite ingresar al BIOS."
        },
        {
          title: "Instalación de Linux Mint",
          description: "El instalador de Linux Mint nos permite particionar nuestro disco duro. Debemos seleccionar 'OEM install' (for manufacturers), elegimos nuestros ajustes, y seguimos los pasos de instalación. Luego, seleccionamos 'Instalar Linux Mint junto a Windows Boot Manager. Ajustamos nuestro espacio de almacenamiento y continuamos."
        },
        {
          title: "Seleccionar sistema operativo al iniciar",
          description: "Ya solo nos queda reiniciar y seleccionar el sistema operativo que deseamos usar y disfrutar. 🍾🎉"
        }
      ]
    }
  ]
}

export const english: BlogDataTypes = {
  author: "Alejandro Cano",
  description: "A freelance designer and dedicated front-end developer committed to enhance something in web experience, with a focus on progressive improvement and constant refinement.",
  blog: [
    {
      id: 1,
      title: "Next 14 app with Style X",
      meta: "A Step-by-Step Guide to configure Next 14 App with Style X. In the ever-evolving world of technology, staying ahead means embracing the latest innovations.",
      image: NextStyleX,
      alt: "Next 14 app with Style X",
      blogPageSummary: "A Step-by-Step Guide to configure Next 14 App with Style X. In the ever-evolving world of technology, staying ahead means embracing the latest innovations.",
      articleSummary: "One such innovation is the Next 14 app, a powerful framework that promises to transform your web app. To add a the newest technology, we'll be installing it with Style X. In this guide, we'll walk you through the process of installing the Next App and elevating it with Style X.",
      time: "10",
      related: ["React"],
      shared: ["Twitter", "LinkedIn"],
      date: "December 14, 2023",
      step: [
        {
          title: "Setting Up the Environment: Initial Configuration",
          description: "Getting Started: Ensure you have Node and a package manager like npm, pnpm, or yarn installed on your system. Once confirmed, run the 'npm init -y' command in your chosen directory from the terminal. This will establish a basic project configuration. In the next step, we'll focus on installing the necessary dependencies for our app.",
          resource: "https://nodejs.org/en",
        },
        {
          title: "Dependency Installation",
          description: "First and foremost, you have the link to the GitHub repo with all the code in the link below. In this step, we'll install the necessary dependencies for our server. We'll start by installing both regular and development dependencies.",
          resource: "https://github.com/alejandroyunes/stylex-next-app",
          list: [
            "Next 14",
            "Style X",
            "Babel",
            "Typescript",
            "Eslint"
          ],
          img: NextStyleXDependencies,
          imgAlt: "Next 14 app with Style X",
          imgHeight: "895",
          imgWidth: "570"
        },
        {
          title: "Setting up Babel",
          description: "Babel is a popular JavaScript compiler that allows developers to write code in the latest version of ECMAScript (the official name for the JavaScript language specification) and then transform or transpile it into an older version of JavaScript that is compatible with most browsers and environments:",
          img: NextStyleXBabel,
          imgAlt: "Babel configuration for the next app and style x",
          imgHeight: "621",
          imgWidth: "483"
        },
        {
          title: "Add tsconfig.json",
          description: "This configuration defines compiler options for a TypeScript project, including details like the target version, support for experimental decorators, the module system, and other settings related to strict type checking. It also sets the file and directory inclusion paths for the TypeScript compiler. I like to set the src/app because it will be under the node_modules folder.",
          img: NextStyleXTsConfig,
          imgAlt: "tsconfig configuration",
          imgHeight: "1032",
          imgWidth: "688"
        },
        {
          title: "Add eslintrc.js",
          description: "ESLint is a widely used open-source tool for static code analysis in JavaScript. It helps developers identify and fix problems in their code by enforcing a set of coding standards or rules.",
          img: NextStyleXEslint,
          imgAlt: "Eslint configuration",
          imgHeight: "265",
          imgWidth: "597"
        },
        {
          title: "Add next.config.js",
          description: "next.config.js is a configuration file used in Next.js, This file allows us to customize various aspects of the Next.js build process and runtime behavior.",
          img: NextStyleXNextConfig,
          imgAlt: "next config configuration",
          imgHeight: "265",
          imgWidth: "597"
        },
        {
          title: "Create the page.tsx and the layout",
          description: "This section is quite large, so you can go ahead and copy the page, layout and globalTokens.stylex.ts to complete the installattion of a clean Next app with Style X from the github repo.",
        },
        {
          description: "If you've made it this far, I thank you for your attention. I hope this template can be helpful to you."
        }
      ]
    },
    {
      id: 2,
      title: "Modern and High-Performance Server Architecture",
      meta: "Server built using Node.js and Express to handle HTTP requests. Implemented using GraphQL with Apollo Server as the GraphQL server. Data is stored in a PostgreSQL database and accessed through Prisma.",
      image: NodeExpressServer,
      alt: "Server Architecture Diagram with Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL, and Prisma",
      blogPageSummary: "Guide to Creating a Server with Node.js, Express, TypeScript, GraphQL, Apollo Server, PostgreSQL, and Prisma.",
      articleSummary: "This server is built using Node.js and Express to handle HTTP requests. It uses TypeScript to add static typing to the entire codebase. The API is implemented using GraphQL with Apollo Server as the GraphQL server. Data is stored in a PostgresSQL database and accessed through Prisma, an Object-Relational Mapping (ORM) for Node.js.",
      time: "15",
      related: ["Node"],
      shared: ["Twitter", "LinkedIn"],
      date: "November 02, 2023",
      step: [
        {
          title: "Setting Up the Environment: Installing Node and Initial Configuration",
          description: "Getting Started: Ensure you have Node and a package manager like npm, pnpm, or yarn installed on your system. Once confirmed, run the 'npm init -y' command in your chosen directory from the terminal. This will establish a basic project configuration. In the next step, we'll focus on installing the necessary dependencies for our server.",
          resource: "https://nodejs.org/",
        },
        {
          title: "Dependency Installation",
          description: "First and foremost, you have the link to the GitHub repo with all the code in the link below. In this step, we'll install the necessary dependencies for our server. We'll start by installing both regular and development dependencies.",
          resource: "https://github.com/alejandroyunes/express-apollo-postgres-prisma",
          list: [
            "npm i @apollo/server @apollo/client cors dotenv express graphql",
            "npm i -D @types/cors @types/express @types/node nodemon prisma ts-node typescript",
            "Make sure to create npm scripts for running the server and the client."
          ],
          img: NodeExpressServerPackage,
          imgAlt: "Node.js packages for the server",
          imgHeight: "553",
          imgWidth: "311"
        },
        {
          title: "Setting up Nodemon",
          description: "Nodemon is a tool that allows us to automatically restart the server when code changes are detected. To configure it, we create a nodemon.json file in the project's root directory and add the following code:",
          img: NodeExpressServerNodemon,
          imgAlt: "Nodemon configuration for the server",
          imgHeight: "112",
          imgWidth: "283"
        },
        {
          title: "Add tsconfig.json",
          description: "This configuration defines compiler options for a TypeScript project, including details like the target version, support for experimental decorators, the module system, and other settings related to strict type checking. It also sets the file and directory inclusion paths for the TypeScript compiler.",
          img: NodeExpressServerTsConfig,
          imgAlt: "tsconfig configuration",
          imgHeight: "382",
          imgWidth: "400"
        },
        {
          title: "Creating a Web Server Using Express.js with GraphQL",
          description: "This code configures an Express web server enabled for GraphQL at the '/graphql' endpoint and provides a root route that responds with a 'hello world' message for HTTP requests. When executed, the server starts on port 4000 and is ready to handle requests.",
          img: NodeExpressServerIndex,
          imgAlt: "expressjs index configuration",
          imgHeight: "565",
          imgWidth: "507",
          list: [
            "The code imports libraries such as Express, CORS, dotenv, and Apollo Server.",
            "It configures an Express server on a port (either 4000 or as defined by an environment variable).",
            "It defines a GraphQL server with types and resolvers.",
            "It sets up middleware to handle CORS, JSON requests, and URL encoding.",
            "It starts the Express server and displays messages in the console with the URLs for the web server and GraphQL when it's ready."
          ]
        },
        {
          title: "Adding GraphQL Configuration",
          description: "This code imports modules, such as the Node 'fs' (file system) and 'path,' and resolves GraphQL types defined in files. It then combines these types into a single 'typeDefs' definition and configures resolvers for queries and mutations related to users and posts.",
          img: NodeExpressServerGraphQL,
          imgAlt: "GraphQL configuration",
          imgHeight: "273",
          imgWidth: "700"
        },
        {
          title: "Adding Resolvers for Queries and Mutations",
          description: "This code defines resolvers for queries and mutations related to users and posts. Resolvers are functions that are executed when a GraphQL query or mutation is made. Each resolver receives arguments, performs an operation, and returns a result.",
          img: NodeExpressServerGraphQLResolver,
          imgAlt: "Resolvers configuration for GraphQL",
          imgHeight: "273",
          imgWidth: "700"
        },
        {
          title: "User Resolution and Management Functions in GraphQL with Prisma",
          description: "This code imports modules related to Prisma and GraphQL and defines functions to interact with the database and perform user-related operations. These operations include getting users, fetching a user by ID, and creating a new user in the database using Prisma. The code also includes the extraction of GraphQL selections to determine whether additional details, such as posts, should be included when fetching users or a specific user.",
          img: NodeExpressServerGraphQLServices,
          imgAlt: "Setting up services for GraphQL",
          imgHeight: "827",
          imgWidth: "620"
        },
        {
          title: "Managing Field Selections in GraphQL Queries",
          description: "This code provides functions for managing field selections in GraphQL queries. It leverages GraphQL resolution information to extract and process field selections, which is valuable for determining what data should be retrieved from the database based on the GraphQL query. Additionally, if the field doesn't exist, it provides an empty result, improving system performance.",
          img: NodeExpressServerGraphQLExtract,
          imgAlt: "Managing Field Selections in GraphQL Queries",
          imgHeight: "286",
          imgWidth: "482"
        },
        {
          title: "Additionally, we add the typeDefs for user and post.",
          description: "This describes the GraphQL types and mutations with three main types: 'User,' 'UserInput,' 'Query,' and 'Mutation.' The 'User' type has fields like 'id,' 'email,' 'username,' and 'posts,' and it's used to represent users and their relationships with posts. 'UserInput' is used for entering user information in mutations. 'Query' provides operations to fetch users or a specific user. 'Mutation' offers operations to create, update, and delete users in the database through GraphQL.",
          img: NodeExpressServerGraphQLTypeDefs,
          imgAlt: "GraphQL Types and Mutations",
          imgHeight: "294",
          imgWidth: "500"
        },
        {
          title: "Prisma Schema for Users and Posts in PostgreSQL",
          description: "This code snippet defines a Prisma schema that represents data models for users and posts in a PostgreSQL database. It also configures the generation of the Prisma client to interact with the database. We add our database connection information in the .env file, and then run the 'npx prisma generate' command to generate the Prisma client.",
          img: NodeExpressServerPrisma,
          imgAlt: "Prisma Schema for Users and Posts",
          imgHeight: "294",
          imgWidth: "500"
        },
        {
          description: "If you've made it this far, I thank you for your attention. I hope this template can be helpful to you."
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
    {
      id: 4,
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
          description: "To create a data input and list, we use both the 'input' and 'datalist' tags. The 'list' attribute of the 'input' element refers to the 'datalist', allowing us to have an input where we can enter data.",
          code: "<label for='languages'>language:</label>\n<input list='languages' id='language-choice' name='language-choice'>\n\n<datalist id='languages'>\n    <option value='Javascript'>\n    <option value='Java'>\n    <option value='Swift'>\n    <option value='Go'>\n    <option value='PHP'>\n</datalist>",
          img: datasetImg,
          imgAlt: "Example of HTML dataset element",
          imgWidth: "640",
          imgHeight: "230"
        },
        {
          title: "Inputs for Capturing Images, Videos, and Audio",
          description: "This HTML code represents a form that allows users to upload images or videos to a web server. The 'capture' attribute allows us to access the cameras on mobile devices.",
          img: typeFile,
          imgAlt: "HTML code for uploading photos and videos to the native server",
          imgWidth: "566",
          imgHeight: "310"
        },
        {
          title: "The HTML <dialog> Element for Modal Dialog Boxes",
          description: "The HTML <dialog> element is used to create a modal dialog box on a web page. A modal dialog box is a popup window that blocks interaction with the rest of the page until the user interacts with it or closes it.",
          img: dialogHtmlImg,
          imgAlt: "Example code for an HTML dialog",
          imgWidth: "646",
          imgHeight: "503"
        },
        {
          title: "Using <details> and <summary> Tags in HTML for Collapsible Content",
          description: "`<details>` and `<summary>` in HTML create collapsible sections. The content in `<details>` is initially hidden and expands when clicking `<summary>`. They are useful for displaying additional information neatly and allowing users to control what content they see, improving web usability."
        },
        {
          title: "HTML Popover Property Displays Floating Element",
          description: "A popover is a popup window that displays additional information or options when interacting with an element in an application or website. It is used to provide additional details and can be closed by clicking anywhere outside of it.",
          code: "<button id='popoverButton'>Show Popover</button>\n<div id='popoverContent' class='popover'>This is an example.\n</div>"
        },
        {
          title: "Defining Search Elements",
          description: "The <search> element allows us to define elements that are part of a search, providing a structure to group and organize components related to the search.",
          code: "<search>\n<form>\n<label for='search'>Search:</label>\n<input type='search' id='search' name='search' placeholder='Enter your search'>\n<button type='submit'>Search</button>\n</form>\n</search>"
        },
        {
          description: "If you've made it this far, thank you. I hope you found some of these HTML tips useful."
        }
      ]
    },
    {
      id: 5,
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
  ]
}
