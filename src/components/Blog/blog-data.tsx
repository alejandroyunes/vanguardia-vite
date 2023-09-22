import linuxWindows from "../../assets/blog/linux-windows.jpg"
import wordpress from "../../assets/blog/wordpress.jpg"
import css from "../../assets/blog/css.jpg"
import react from "../../assets/blog/react.jpg"
import wordpressPlugin from "../../assets/blog/wordpress-plugins.jpg";
import figma from "../../assets/blog/figma-xd.jpg"
import bitbucket from "../../assets/blog/githubbitbucket.jpg"
import htmlcssjs from "../../assets/blog/htmlcssjs.jpg"

export interface BlogDataTypes {
  id: number
  title: string
  url: string
  blogSummary: string
  articleSummary: string
  time: string
  related: string[]
  shared: string[]
  date: string
  step: {
    title: string
    step: string
    description: string
  }[]
}

export const blogData: BlogDataTypes[] = [
  {
    id: 1,
    title: "Cómo instalar Linux junto con Windows 10 u 8 en modo UEFI de arranque dual.",
    url: linuxWindows,
    blogSummary: "Esta guía te mostrará cómo correr Linux y Windows 10 juntos en un solo sistema operativo",
    articleSummary: "Esta guía te mostrará cómo correr Linux y Windows 10 juntos en un solo sistema operativo. Los pasos mencionados aquí sirven para otras distribuciones de Linux basadas en Ubuntu, como Linux Mint, Manjaro, Deepin OS, etc. Cortando la charla, veamos cómo arrancar Linux de forma dual en un sistema Windows 10/8 habilitado para arranque seguro UEFI.",
    time: "13",
    related: ["CSS", "Tools", "Workflow"],
    shared: ["Twitter", "LinkedIn", "Facebook"],
    date: "Febrero 1, 2021",
    step: [
      {
        title: "Haz una copia de seguridad [opcional]",
        step: "Paso 1:",
        description: "Siempre es bueno hacer una copia de seguridad, por si acaso pasa algo."
      },
      {
        title: "Crear un disco o USB de arranque o booteable del sistema operativo Windows",
        step: "Paso 2:",
        description: "Lo siguiente que debe hacer es crear un disco o USB de arranque del sistema operativo Windows. Recomiendo la herramienta de creación de medios de Windows (Media Creation Tool). Una vez que inicie la herramienta, ésta te guiará a través de los pasos necesarios para crear los medios de Windows en un USB o DVD-R. Nota: Incluso si ya tiene Windows 10 instalado, es una buena idea crear un dispositivo de arranque de todos modos, en caso de que algo salga mal y necesite re-instalarlo. [Enlace](https://www.microsoft.com/en-us/software-download/windows10)"
      },
      {
        title: "Medios de instalación para Ubuntu",
        step: "Paso 3:",
        description: "Descarga la imagen ISO de kde neon, o cualquier distribución de Linux que desees. [Enlace](https://neon.kde.org/download)"
      },
      {
        title: "Software Linux",
        step: "Paso 4:",
        description: "Software Linux Live (para hacer una unidad USB de arranque de Linux). Para crear discos de arranque para cualquier distribución de Linux, recomiendo Live Linux. Cuando lo tengas instalado simplemente busca la imagen ISO y listo. [Enlace](http://www.linuxliveusb.com/en/download)"
      },
      {
        title: "Crear una partición en disco duro",
        step: "Paso 5:",
        description: "Crear una partición sin formato del disco duro (tanto espacio como desees para su sistema operativo Linux). Haz clic derecho sobre Mi PC > Administrar > Almacenamiento > Administración del disco - luego darle clic en reducir al disco duro C o si lo tienes particionado busca la partición donde quieras instalar Linux. Si tienes más de 100 GBs, esto sería el equivalente a 100,000 MBs. Nota: No formatees el espacio de almacenamiento recién creado."
      },
      {
        title: "USB booteable",
        step: "Paso 6:",
        description: "Cuando ya tengas la USB lista con Linux de arranque, insértala en un puerto USB. Debes reiniciar el equipo y según la marca del equipo es F10 o F12 para entrar al BIOS. Debes elegir la versión de Linux que correrá directamente desde la USB. Se correrá el Linux y podrás ver en el escritorio un ícono que dice 'instalar Linux'. Deberás seguir con los pasos de configuración, pero el que vamos a mirar aquí es el paso de los discos."
      },
      {
        title: "Particionar disco de Windows primero",
        step: "Paso 7:",
        description: "Hay que crear tres particiones del espacio particionado en Windows. El primero vamos a crear la partición donde irá Linux que sería el 80% del espacio. Es decir si es de 100 GBs haremos una partición de 80 GBs. Este será nuestro disco principal. Primero le darás a crear partición y elegiremos el 80 % del espacio de nuestro disco y el punto de montaje será '/'. Del espacio que quedó vamos a crear un swap file. Elegirás la mitad de la RAM para el espacio de partición y eligirás en 'Utilizar como: área de intercambio' o swap file."
      },
      {
        title: "Cómo formatear la memoria",
        step: "Tips:",
        description: "En ocasiones esto sería suficiente, pero para kde neon es necesario crear un espacio EFI, de igual manera crearás un espacio de partición y seleccionamos EFI sistema de partición. Si tienes problema formateando tu USB puedes seguir los pasos a continuación para formatear la USB y dejarla lista para instalar Linux en ella."
      },
      {
        title: "",
        step: "1.",
        description: "cmd > diskpart > list disk > select disk 1 (Importante)."
      },
      {
        title: "",
        step: "2.",
        description: "List partition (Inspeccionar que todo esté bien) > clean > list partition (No debe de haber ninguna)."
      },
      {
        title: "",
        step: "3.",
        description: "Create partition primary > list partition (Debería de haber una) > format fs=fat32 quick > list partition (Debería de haber una) > exit."
      }
    ]
  },
  {
    id: 2,
    title: "Cómo instalar un sitio web en menos de 20 minutos.",
    url: wordpress,
    blogSummary: "Si ya tienes un dominio y hosting en SiteGround es más sencillo, pero si no, no te preocupes.",
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
    blogSummary: "Hoy aprenderemos varias cosas útiles que puedes hacer hoy con CSS moderno.",
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
    blogSummary:
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
    blogSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
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
    blogSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
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
    blogSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
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
    blogSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
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
    blogSummary: "Si ya tienes un dominio y hosting en SiteGround, es más sencillo, pero si no, no te preocupes.",
    articleSummary: "Si ya tienes un dominio y hosting en SiteGround, realmente lo podemos hacer en menos de 5 minutos, pero si no, no te preocupes, vamos a instalarlo en nuestro equipo local.",
    time: "12",
    related: ["HTML", "CSS", "JavaScript", "Wordpress", "Herramientas", "Marketing"],
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
