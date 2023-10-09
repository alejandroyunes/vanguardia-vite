import linuxWindowsArticle from './BlogArticle/images/linux-windows.webp'


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
  title: string
  step: string
  description: string
  list?: string[]
  code?: string
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


