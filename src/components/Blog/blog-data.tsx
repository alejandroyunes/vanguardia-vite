import linuxWindows from "../../assets/blog/linux-windows.jpg"
import wordpress from "../../assets/blog/wordpress.jpg"
import css from "../../assets/blog/css.jpg"
import react from "../../assets/blog/react.jpg"
import wordpressPlugin from "../../assets/blog/wordpress-plugins.jpg";
import figma from "../../assets/blog/figma-xd.jpg"
import bitbucket from "../../assets/blog/githubbitbucket.jpg"
import htmlcssjs from "../../assets/blog/htmlcssjs.jpg"
import linuxWindowsArticle from './BlogArticle/images/linux-windows.webp'

export interface BlogDataTypes {
  id: number
  title: string
  url: string
  blogPageSummary: string
  articleSummary: string
  time: string
  related: string[]
  shared: string[]
  date: string
  image?: string
  imageSmall?: string
  alt?: string
  step: {
    title: string
    step: string
    description: string
    resource?: string
  }[]
}

export const blogData: BlogDataTypes[] = [
  {
    id: 1,
    title: "¿Cómo instalar Linux Mint junto con Windows 11?",
    url: linuxWindows,
    blogPageSummary: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC",
    articleSummary: "Esta guía te mostrará cómo correr Linux Mint y Windows juntos en un mismo PC. Los pasos mencionados sirven para las distribuciones de Linux Mint. Bueno, veamos cómo arrancar Linux de forma dual en un sistema Windows.",
    time: "5",
    related: ["Windows", "Linux", "Systems"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Octubre 3, 2023",
    image: linuxWindowsArticle,
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
    title: "Cómo instalar un sitio web en menos de 20 minutos.",
    url: wordpress,
    blogPageSummary: "Si ya tienes un dominio y hosting en SiteGround es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes vamos a instalarlo en nuestro equipo local.",
    time: "10",
    related: ["Wordpress", "Tools", "Marketing"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Abril 1, 2021",
    step: [
      {
        title: "Instalar Bitnami",
        step: "Paso 1:",
        description: "Vamos a instalar Bitnami para instalar todo con un solo instalador. Con Bitnami vamos a instalar todo el Stack necesario para correr WordPress en nuestro equipo local. [Enlace](https://bitnami.com/stack/wamp/installer)"
      },
      {
        title: "Seguir los pasos de instalación",
        step: "Paso 2:",
        description: "Seguir los pasos de instalación y cuando llegues a la parte si quieres correr Bitnami en la nube puedes quitar la opción. Dependiendo de tu equipo esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress también dejaré el [enlace](https://bitnami.com/stack/wordpress/installer)."
      },
      {
        title: "Local Host",
        step: "Paso 3:",
        description: "Seguir los pasos hasta que la instalación comience. Cuando haya terminado la instalación se abrirá en el explorador por defecto un puerto, normalmente el 127.0.0.1:81. Haz clic en 'ir a WordPress' y ya tendremos nuestro primer sitio web de WordPress."
      },
      {
        title: "Local Admin",
        step: "Paso 4:",
        description: "En la URL puedes poner http://127.0.0.1:81/wordpress/wp-admin para ingresar con las credenciales que creamos en la instalación."
      },
    ]
  },
  {
    id: 3,
    title: "¿Cosas que puedes hacer con CSS hoy?",
    url: css,
    blogPageSummary: "Hoy aprenderemos varias cosas útiles que puedes hacer hoy con CSS moderno.",
    articleSummary: "Hoy aprenderemos varias cosas útiles que puedes hacer hoy con CSS moderno. Si adoptamos un enfoque pragmático y progresivo para nuestro CSS, las cosas seguirán mejorando cada vez más en nuestros proyectos.",
    time: "12",
    related: ["Wordpress", "Tools", "Marketing"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Abril 15, 2021",
    step: [
      {
        title: "Pseudo-selección is() en CSS",
        step: "Paso 1:",
        description: "La pseudo-selección :is() en CSS nos permite escribir selectores compuestos de manera más directa. Por ejemplo, este CSS de abajo se puede simplificar enormemente."
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Seguir los pasos de instalación y, si quieres correr Bitnami en la nube, puedes omitir esa opción. Dependiendo de tu equipo, esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress. Aquí tienes el [enlace](https://bitnami.com/stack/wordpress/installer)."
      }
    ]
  },
  {
    id: 4,
    title: "¿Cómo instalar React?",
    url: react,
    blogPageSummary:
      "Primero que nada necesitamos tener NodeJs instalado para poder correr paquetes npm.",
    articleSummary:
      "Primero que nada necesitamos tener NodeJs instalado para poder correr paquetes npm. Debemos configurar nuestro entorno de desarrollo para que pueda utilizar las últimas funciones de JavaScript, Si no lo tenemos instalado, aquí podemos descargarlo e instalarlo. https://nodejs.org/en/download/.",
    time: "12",
    related: ["CSS, Tools, Workflow"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Haz una copia de seguridad [opcional]",
        step: "Paso 1:",
        description:
          "Siempre es bueno hacer una copia de seguridad, por si acaso pasa algo. ",
      },
      {
        title:
          "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description:
          "Lo siguiente que debe hacer es crear un disco o USB de arranque del sistema operativo Windows.. Recomiendo la herramienta de creación de medios de Windows (Media Creation Tool).   Una vez que inicie la herramienta, ésta te guiará a través de los pasos necesarios para crear los medios de Windows en un USB o DVD-R. Nota: Incluso si ya tiene Windows 10 instalado, es una buena idea crear un dispositivo de arranque de todos modos, en caso de que algo salga mal y necesite re-instalarlo. ",
      },
    ],
  },
  {
    id: 5,
    title: "¿Cuáles son los mejores plugins para un sitio en WordPress?",
    url: wordpressPlugin,
    blogPageSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround, realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes, vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: ["WordPress", "Tools", "Marketing"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Instalar Bitnami",
        step: "Paso 1:",
        description: "Vamos a instalar Bitnami para instalar todo con un solo instalador. Con Bitnami, vamos a instalar todo el stack necesario para correr WordPress en nuestro equipo local. [Enlace de descarga](https://bitnami.com/stack/wamp/installer)",
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Sigue los pasos de instalación y cuando llegues a la parte donde puedes elegir correr Bitnami en la nube, puedes omitir esa opción. Dependiendo de tu equipo, esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress. Aquí tienes el enlace: [Instalador de WordPress](https://bitnami.com/stack/wordpress/installer)",
      }
    ]
  },
  {
    id: 6,
    title: "¿Cuáles son los mejores programas para diseñar?",
    url: figma,
    blogPageSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround, realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes, vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: ["Diseño", "Herramientas", "Marketing"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Instalar Bitnami",
        step: "Paso 1:",
        description: "Vamos a instalar Bitnami para instalar todo con un solo instalador. Con Bitnami, vamos a instalar todo el stack necesario para correr WordPress en nuestro equipo local. [Enlace de descarga](https://bitnami.com/stack/wamp/installer)",
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Sigue los pasos de instalación y cuando llegues a la parte donde puedes elegir correr Bitnami en la nube, puedes omitir esa opción. Dependiendo de tu equipo, esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress. Aquí tienes el enlace: [Instalador de WordPress](https://bitnami.com/stack/wordpress/installer)",
      }
    ]
  },
  {
    id: 7,
    title: "Mejores recursos para aprender a programar",
    url: wordpressPlugin,
    blogPageSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround, realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes, vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: ["Aprendizaje", "Herramientas", "Marketing"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Instalar Bitnami",
        step: "Paso 1:",
        description: "Vamos a instalar Bitnami para instalar todo con un solo instalador. Con Bitnami, vamos a instalar todo el stack necesario para correr WordPress en nuestro equipo local. [Enlace de descarga](https://bitnami.com/stack/wamp/installer)",
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Sigue los pasos de instalación y cuando llegues a la parte donde puedes elegir correr Bitnami en la nube, puedes omitir esa opción. Dependiendo de tu equipo, esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress. Aquí tienes el enlace: [Instalador de WordPress](https://bitnami.com/stack/wordpress/installer)",
      }
    ]
  },
  {
    id: 8,
    title: "Github & Bitbucket",
    url: bitbucket,
    blogPageSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround, realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes, vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: ["GitHub", "Bitbucket", "Herramientas", "Marketing"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Instalar Bitnami",
        step: "Paso 1:",
        description: "Vamos a instalar Bitnami para instalar todo con un solo instalador. Con Bitnami, vamos a instalar todo el stack necesario para correr WordPress en nuestro equipo local. [Enlace de descarga](https://bitnami.com/stack/wamp/installer)",
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Sigue los pasos de instalación y cuando llegues a la parte donde puedes elegir correr Bitnami en la nube, puedes omitir esa opción. Dependiendo de tu equipo, esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress. Aquí tienes el enlace: [Instalador de WordPress](https://bitnami.com/stack/wordpress/installer)",
      }
    ]
  },
  {
    id: 9,
    title: "Mejores recursos para aprender a programar",
    url: htmlcssjs,
    blogPageSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround, realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes, vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: ["HTML", "CSS", "JavaScript"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Instalar Bitnami",
        step: "Paso 1:",
        description: "Vamos a instalar Bitnami para instalar todo con un solo instalador. Con Bitnami, vamos a instalar todo el stack necesario para correr WordPress en nuestro equipo local. [Enlace de descarga](https://bitnami.com/stack/wamp/installer)",
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Sigue los pasos de instalación y cuando llegues a la parte donde puedes elegir correr Bitnami en la nube, puedes omitir esa opción. Dependiendo de tu equipo, esto puede tardar entre 10 a 15 minutos. Después de tener instalado Bitnami, vamos a instalar la aplicación de WordPress. Aquí tienes el enlace: [Instalador de WordPress](https://bitnami.com/stack/wordpress/installer)",
      }
    ]
  }
];
