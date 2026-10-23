export type Language = 'es' | 'en';

export const translations = {
  es: {
    appName: "SENA InnovaAprende",
    programSubtitle: "Gestión del Desarrollo Administrativo e Innovación • Ficha 3639874",
    regional: "SERVICIO NACIONAL DE APRENDIZAJE SENA • REGIONAL SANTANDER",
    center: "Centro Agroempresarial y Turístico de los Andes",
    strategy: "Estrategia CAMPESENA & Mipymes",
    
    // Navbar
    streak: "días racha",
    level: "Nivel",
    badges: "Insignias",
    progress: "Progreso Global",
    certificateBtn: "Certificado",
    profileBtn: "Perfil",
    shareBtn: "Compartir Enlace",

    // Tabs
    tabMap: "1. Brújula & Mapa del Proyecto",
    tabMapShort: "Brújula & Mapa",
    tabCurriculo: "2. Matriz Curricular & 9 Productos",
    tabCurriculoShort: "Currículo & 9 Prod.",
    tabSimulaciones: "3. Simulador de Casos Mipymes",
    tabSimulacionesShort: "Simulador Casos",
    tabEvaluaciones: "4. Retos, Trivia & Evaluaciones",
    tabEvaluacionesShort: "Retos & Trivia",
    tabTutor: "5. Tutor IA Pedagógico",
    tabTutorShort: "Tutor IA",
    tabGamif: "6. Progreso & Certificado Oficial",
    tabGamifShort: "Certificado & Logros",

    // Landing Role Selector
    landingTitle: "Selecciona tu Rol para Ingresar al Prototipo",
    landingSubtitle: "Elije tu perfil de acceso para garantizar una experiencia formativa guiada, con el rol de Instructor o el registro de Aprendiz.",
    instructorRoleTitle: "Rol Instructor(a)",
    instructorRoleDesc: "Para orientar la formación, evaluar evidencias, consultar la matriz curricular y generar enlaces para los estudiantes.",
    instructorBtn: "Ingresar como Instructor",
    instructorKeyTitle: "Acceso de Instructor SENA",
    instructorKeyPrompt: "Ingresa la clave institucional asignada para instructores del programa (Clave: Tomas0816).",
    instructorKeyPlaceholder: "Ingresa la clave...",
    instructorKeySubmit: "Acceder al Prototipo (Instructor)",
    
    aprendizRoleTitle: "Rol Aprendiz",
    aprendizRoleDesc: "Para desarrollar las misiones, resolver simuladores Mipymes, participar en la trivia y obtener tu certificado a tu nombre.",
    aprendizBtn: "Registrarme como Aprendiz",
    aprendizFormTitle: "Caracterización del Aprendiz",
    aprendizFormPrompt: "Ingresa tus datos personales. Al finalizar el recorrido y aprobar los retos, tu Certificado Oficial saldrá expedido automáticamente a tu nombre.",
    nameLabel: "Nombre Completo del Aprendiz *:",
    docTypeLabel: "Tipo de Documento:",
    docNumLabel: "Número de Documento:",
    ficheLabel: "Ficha de Caracterización SOFIA:",
    aprendizSubmit: "Ingresar al Prototipo (Aprendiz)",

    // Certificate
    certTitle: "Certificación de Apropiación Integral del Programa de Formación SENA",
    certGrant: "OTORGA LA PRESENTE",
    certConst: "Se hace constar que el (la) Aprendiz:",
    certIssued: "Fecha de Expedición:",
    certVerify: "Certificación Verificada • Sello Digital SENA",
    printBtn: "Imprimir / Guardar como PDF",
    editNameBtn: "Editar",
    saveBtn: "Guardar",

    // AI Tutor
    tutorTitle: "Tutor IA Pedagógico SENA",
    tutorSubtitle: "Especializado en Diseño Curricular 122153 & Proyecto INNOVAGESTIÓN",
    tutorPlaceholder: "Pregunta sobre fases, RAPs, Saber, Hacer, Ser, los 9 productos o evidencias...",
    askBtn: "Preguntar",
    quickConsult: "Consultas rápidas:",
  },
  en: {
    appName: "SENA InnovaAprende",
    programSubtitle: "Administrative Development & Innovation Management • Fiche 3639874",
    regional: "NATIONAL LEARNING SERVICE SENA • SANTANDER REGIONAL",
    center: "Agroindustrial and Tourism Center of the Andes",
    strategy: "CAMPESENA Strategy & SMEs",

    // Navbar
    streak: "day streak",
    level: "Level",
    badges: "Badges",
    progress: "Global Progress",
    certificateBtn: "Certificate",
    profileBtn: "Profile",
    shareBtn: "Share Link",

    // Tabs
    tabMap: "1. Compass & Project Map",
    tabMapShort: "Compass & Map",
    tabCurriculo: "2. Curriculum Matrix & 9 Products",
    tabCurriculoShort: "Curriculum & 9 Prods",
    tabSimulaciones: "3. SME Case Simulator",
    tabSimulacionesShort: "Case Simulator",
    tabEvaluaciones: "4. Challenges, Trivia & Quizzes",
    tabEvaluacionesShort: "Quizzes & Trivia",
    tabTutor: "5. AI Pedagogical Tutor",
    tabTutorShort: "AI Tutor",
    tabGamif: "6. Progress & Official Certificate",
    tabGamifShort: "Certificate & Badges",

    // Landing Role Selector
    landingTitle: "Select Your Role to Enter the Prototype",
    landingSubtitle: "Choose your access profile to ensure a guided educational experience, either as an Instructor or Learner.",
    instructorRoleTitle: "Instructor Role",
    instructorRoleDesc: "To guide training, evaluate evidence, consult the curriculum matrix, and generate links for students.",
    instructorBtn: "Enter as Instructor",
    instructorKeyTitle: "SENA Instructor Access",
    instructorKeyPrompt: "Enter the institutional key assigned for program instructors (Key: Tomas0816).",
    instructorKeyPlaceholder: "Enter key...",
    instructorKeySubmit: "Access Prototype (Instructor)",

    aprendizRoleTitle: "Learner Role",
    aprendizRoleDesc: "To complete missions, solve SME simulators, participate in trivia, and obtain your certificate in your name.",
    aprendizBtn: "Register as Learner",
    aprendizFormTitle: "Learner Characterization",
    aprendizFormPrompt: "Enter your personal details. Upon completing the journey and passing the challenges, your Official Certificate will be automatically issued in your name.",
    nameLabel: "Learner Full Name *:",
    docTypeLabel: "Document Type:",
    docNumLabel: "Document Number:",
    ficheLabel: "SOFIA Fiche Number:",
    aprendizSubmit: "Enter Prototype (Learner)",

    // Certificate
    certTitle: "Comprehensive Appropriation Certification of SENA Training Program",
    certGrant: "HEREBY GRANTS",
    certConst: "This is to certify that the Learner:",
    certIssued: "Issue Date:",
    certVerify: "Verified Certification • SENA Digital Seal",
    printBtn: "Print / Save as PDF",
    editNameBtn: "Edit",
    saveBtn: "Save",

    // AI Tutor
    tutorTitle: "SENA AI Pedagogical Tutor",
    tutorSubtitle: "Specialized in Curriculum Design 122153 & INNOVAGESTIÓN Project",
    tutorPlaceholder: "Ask about phases, learning outcomes, Know, Know-How, Be, the 9 products...",
    askBtn: "Ask",
    quickConsult: "Quick queries:",
  }
};
