
const preguntas = [
  {
    titulo: "¿Cuál de las siguientes afirmaciones es correcta acerca de las capacidades de Oracle Cloud Infrastructure (OCI)?",
    opciones: [
      { textoRespuesta: "OCI solo admite máquinas virtuales, no instancias de computación bare metal.", isCorrect: false },
      { textoRespuesta: "OCI no permite la interconexión directa con su centro de datos local.", isCorrect: false },
      { textoRespuesta: "OCI permite la implementación de redes virtuales definidas por software (VPC) con control total sobre la configuración de subredes.", isCorrect: true }
     
    ],
    filtro:"¿Utiliza usted Oracle Cloud Infrastructure (OCI)?",
    explicacion: "OCI proporciona capacidades de red virtual, permitiendo a los clientes crear y administrar redes privadas virtuales con control total sobre la configuración de subredes, lo que incluye direcciones IP privadas, tablas de rutas, reglas de seguridad de red y gateways de Internet."
  },
  {
    titulo: "¿Cuál de las siguientes es una característica clave de NetSuite?",
    opciones: [
      { textoRespuesta: "Gestión de relaciones con los clientes,", isCorrect: false },
      { textoRespuesta: "Gestión de la cadena de suministro,", isCorrect: false },
      { textoRespuesta: "Todas las anteriores", isCorrect: true }
    ],
    filtro:"¿Utiliza usted NetSuite?",
    explicacion: "NetSuite es una solución completa de ERP en la nube que proporciona una amplia gama de funcionalidades, incluyendo la gestión de relaciones con los clientes y la gestión de la cadena de suministro. Esto permite a las empresas tener una visión unificada de sus operaciones y tomar decisiones informadas."
  },
  {
    titulo: "¿Cuál de las siguientes es una característica clave de MySQL?",
    opciones: [
      { textoRespuesta: "Es un sistema de gestión de bases de datos no relacional", isCorrect: false },
      { textoRespuesta: "Es un sistema de gestión de bases de datos relacional", isCorrect: true },
      { textoRespuesta: "Solo admite el lenguaje de programación SQL", isCorrect: false }
    ],
    filtro:"¿Utiliza usted MySQL?",
    explicacion: ""
  },
  {
    titulo: "Oracle Autonomous Database tiene una característica que permite a la base de datos funcionar con un mínimo de intervención humana. ¿Puede identificar cuál de las siguientes opciones es esa característica?",
    opciones: [
      { textoRespuesta: "Auto-administración", isCorrect: true },
      { textoRespuesta: "Auto-optimización", isCorrect: false },
      { textoRespuesta: "Auto-segmentación", isCorrect: false }
    ],
    filtro:"¿Es usted cliente de Oracle?",
    explicacion: "La característica de auto-administración permite a Oracle Autonomous Database gestionar y mantener la base de datos con un mínimo de intervención humana."
  },
  {
    titulo: "Oracle va a inaugurar una Región Cloud Soberana. ¿Sabía que la Región Soberana de Oracle en Madrid es una región de nube aislada que cumple con las normativas de residencia de datos y soberanía?",
    opciones: [
      { textoRespuesta: "Verdadero", isCorrect: true },
      { textoRespuesta: "Falso", isCorrect: false }
      
    ],
    filtro:"¿Está al tanto de la nueva Región Soberana de Oracle en Madrid, España?",
    explicación: "La Región Soberana de Oracle en Madrid es una región de nube aislada que cumple con las normativas de residencia de datos y soberanía. Esto significa que los datos almacenados en esta región nunca salen de la región, lo que puede ser crucial para las empresas que manejan datos sensibles y deben cumplir con estrictas regulaciones de privacidad y seguridad."
  }
];

export default preguntas;