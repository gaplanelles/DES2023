
const preguntasNoClientes = [
    {
      titulo: "¿Cuáles son los factores más importantes al elegir un proveedor de servicios en la nube?",
      opciones: [
        { textoRespuesta: "Precio.", isCorrect: false },
        { textoRespuesta: "Seguridad de datos", isCorrect: false },
        { textoRespuesta: "Escalabilidad", isCorrect: false },
        { textoRespuesta: "Soporte al cliente", isCorrect: false },
        { textoRespuesta: "Ubicación de los centros de datos.", isCorrect: false },
        { textoRespuesta: "Todas", isCorrect: true }
       
       
      ],
      filtro:"¿Utiliza usted Oracle Cloud Infrastructure (OCI)?",
      explicacion: "OCI es conocido por su escalabilidad automática, lo que permite a las empresas ajustar sus recursos de cómputo y almacenamiento según las necesidades cambiantes. Esto puede ayudar a las empresas a manejar las demandas pico sin tener que pagar por recursos no utilizados durante los periodos de baja demanda."
    },
    {
      titulo: "¿Sabía que NetSuite, como solución de ERP en la nube, puede adaptarse a las necesidades de empresas de diferentes tamaños y sectores? ¿Puede identificar cuál de las siguientes opciones es una característica que permite a NetSuit adaptarse a las necesidades de empresas de diferentes tamaños y sectores?",
      opciones: [
        { textoRespuesta: "Personalización y configuración de módulos según las necesidades del negocio", isCorrect: true },
        { textoRespuesta: "Capacidad para soportar un número ilimitado de usuarios simultáneos", isCorrect: false },
        { textoRespuesta: "Integración nativa con todas las bases de datos del mercado", isCorrect: false }
      ],
      filtro:"¿Utiliza usted NetSuite?",
      explicacion: "NetSuite permite a las empresas personalizar y configurar módulos según sus necesidades específicas. Esto incluye la capacidad de adaptar la funcionalidad del sistema a los procesos de negocio únicos de la empresa, lo que permite a NetSuite adaptarse a empresas de diferentes tamaños y sectores."
    },
    {
      titulo: "¿Sabía que MySQL es uno de los sistemas de gestión de bases de datos más populares y ampliamente utilizados en el mundo?",
      opciones: [
        { textoRespuesta: "Si", isCorrect: true },
        { textoRespuesta: "No", isCorrect: false },
      ],
      filtro:"¿Utiliza usted MySQL?",
      explicacion: "MySQL es un sistema de gestión de bases de datos relacional, lo que significa que organiza los datos en tablas y permite a los usuarios establecer relaciones entre diferentes tablas. Esto puede facilitar la gestión de los datos y permitir a los usuarios realizar consultas complejas de manera eficiente."
    },
    {
      titulo: "¿En el contexto de Oracle Autonomous Database, ¿qué significa la característica de 'auto-reparación'?",
      opciones: [
        { textoRespuesta: "La base de datos se optimiza automáticamente para mejorar el rendimiento", isCorrect: false },
        { textoRespuesta: "La base de datos se protege automáticamente de los fallos y garantiza la disponibilidad de los datos", isCorrect: true },
        { textoRespuesta: "La base de datos se actualiza automáticamente con las últimas características y parches de seguridad", isCorrect: false }
      ],
      filtro:"¿Es usted cliente de Oracle?",
      explicacion: "La característica de 'auto-reparación' se refiere a la capacidad de la base de datos para protegerse automáticamente de los fallos y garantizar la disponibilidad de los datos."
    },
    {
      titulo: "Oracle va a inaugurar una Región Cloud Soberana. ¿Cuál de las siguientes es una característica clave de la Región Soberana?",
      opciones: [
        { textoRespuesta: "Los datos nunca salen de la región", isCorrect: false },
        { textoRespuesta: "Los datos pueden ser transferidos a otras regiones de Oracle", isCorrect: false },
        { textoRespuesta: "Los datos no se almacenan con redundancia en múltiples ubicaciones dentro de la región", isCorrect: false }
      ],
      filtro:"¿Está al tanto de la nueva Región Soberana de Oracle en Madrid, España?",
      explicación: "Una de las características clave de la Región Soberana es que los datos nunca abandonan la región, lo que es crucial para cumplir con las regulaciones de residencia de datos y soberanía."
    }
  ];
  
  export default preguntasNoClientes;