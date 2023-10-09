import linuxWindowsArticle from './BlogArticle/images/linux-windows.webp'

import datasetImg from './BlogArticle/images/dataset.webp'
import HTML5Img from './BlogArticle/images/html5blog.webp'
import dialogHtmlImg from './BlogArticle/images/dialogHtml.webp'

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
  description: string
  list?: string[]
  code?: string
  img?: string
  imgAlt?: string
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
          imgAlt: "Ejemplo de elemento dataset de html"
        },
        {
          title: "Inputs para capturar imagen, videos y audio",
          step: "2:",
          description: "Este código HTML representa un formulario que permite a los usuarios cargar imágenes o videos en un servidor web.  El atributo capture nos permite acceder a la cámara de los dispositivos móviles.",
          code: "<form action='upload.php' method='POST' enctype='multipart/form-data'>\n<label for='fileUpload'>Select Image/Video:</label>\n<input type='file' id='fileUpload' name='fileUpload' accept='image/*,video/*' capture='user'>\n<input type='file' id='fileUpload' name='fileUpload' accept='image/*,video/*' capture='environment'>\n<input type='submit' value='Upload'>\n</form>",
        },
        {
          title: "La etiqueta <dialog> en HTML para Cuadros de Diálogo Modales",
          step: "3:",
          description: "La etiqueta <dialog> en HTML se utiliza para crear un cuadro de diálogo modal en una página web. Un cuadro de diálogo modal es una ventana emergente que bloquea la interacción con el resto de la página hasta que el usuario interactúa con él o lo cierra.",
          img: dialogHtmlImg,
          imgAlt: "Código de ejemplo para un dialog en html"
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
      id: 3,
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


