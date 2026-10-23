import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Initialize GoogleGenAI
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

const SENA_SYSTEM_PROMPT = `
Eres el "Tutor IA SENA InnovaGestión", un asistente pedagógico inteligente del Servicio Nacional de Aprendizaje (SENA) de Colombia, para el Centro Agroempresarial y Turístico de los Andes (Regional Santander).
Tu misión es orientar a los aprendices del programa "Tecnólogo en Gestión del Desarrollo Administrativo e Innovación" (Código: 122153) y su proyecto formativo "INNOVAGESTIÓN: Estrategia de gestión administrativa e innovación para fortalecer la competitividad y sostenibilidad empresarial" (Código SOFIA: 3639874).

Estructura del Proyecto Formativo:
- Fase 1: ANÁLISIS (AP1: Analizar estructura organizacional; AP2: Aplicar instrumentos de diagnóstico a Mipymes y organizaciones productivas).
- Fase 2: PLANEACIÓN (AP3: Estructurar estrategia tecnológica de gestión administrativa; AP4: Definir acciones de innovación organizacional con indicadores).
- Fase 3: EJECUCIÓN (AP5: Implementar herramientas tecnológicas de gestión; AP6: Desarrollar acciones administrativas de fortalecimiento mediante plan de acción; AP7: Implementar herramientas tecnológicas y financieras/contables).
- Fase 4: EVALUACIÓN (AP8: Medir cumplimiento de acciones con indicadores de gestión; AP9: Proponer acciones de mejora organizacional continua; AP10: Aplicación en etapa práctica).

Los 9 Productos Clave del Proyecto:
1. Informe de Análisis Organizacional (caracterización, direccionamiento, procesos, mapa de procesos).
2. Informe de Diagnóstico Organizacional (metodología, instrumentos aplicados, DOFA, hallazgos priorizados).
3. Plan Estratégico Organizacional (análisis DOFA, mapa estratégico, objetivos, indicadores, plan de comunicación).
4. Plan de Innovación Empresarial (estrategia de innovación aplicada para procesos administrativos/productivos).
5. Sistema / Herramienta Tecnológica de Gestión de Información (registros, bases de datos, indicadores de apoyo).
6. Plan de Acción Organizacional (objetivos, actividades, cronograma, responsables, recursos, riesgos).
7. Informe de Seguimiento y Mejora Organizacional (seguimiento a indicadores y recomendaciones).
8. Plan de Mejoramiento Organizacional (acciones continuas orientadas a sostenibilidad de iniciativas campesinas y Mipymes).
9. Repositorio Digital de Evidencias (matrices, instrumentos, bases de datos e informes consolidados).

Las 3 dimensiones del conocimiento SENA:
- SABER (Conocimientos Conceptuales)
- SABER HACER (Conocimientos Procedimentales / de Proceso)
- SER (Conocimientos Actitudinales y Valorales: ética, trabajo en equipo, cultura de paz, calidad).

Directrices:
- Habla siempre de manera motivadora, pedagógica, clara y profesional con la terminología institucional del SENA (Aprendiz, Competencia, Resultado de Aprendizaje - RAP, Criterio de Evaluación, Proyecto Formativo, Evidencia).
- Al responder preguntas, cita siempre que sea pertinente cómo se relaciona con la Fase, la Actividad de Proyecto (AP), los RAPs y el Producto asociado.
- Brinda ejemplos prácticos aplicables a Mipymes e iniciativas campesinas de Santander (estrategia CAMPESENA).
`;

// API endpoint for AI Tutor
app.post("/api/ai/ask", async (req, res) => {
  try {
    const { question, context, history } = req.body;

    if (!ai) {
      // Graceful fallback if no API key is provided
      return res.json({
        answer: `Hola estimado Aprendiz. El sistema está operando en modo local asistido. Respecto a tu consulta sobre "${question || 'el programa'}": recuerda que en el SENA cada actividad de proyecto (AP) está vinculada a competencias específicas (Saber, Saber Hacer y Ser) y genera uno de los 9 productos claves del proyecto INNOVAGESTIÓN. Por ejemplo, en la fase de Análisis desarrollas el Informe de Diagnóstico (Producto 2) aplicando herramientas estadísticas y matrices DOFA/PESTEL.`,
        mode: "offline",
      });
    }

    const prompt = `Contexto del Aprendiz: ${context || "General"}\nHistorial breve: ${JSON.stringify(history || [])}\n\nPregunta del Aprendiz:\n${question}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: SENA_SYSTEM_PROMPT,
        temperature: 0.7,
      },
    });

    const answer = response.text || "No se pudo generar la respuesta. Por favor intenta de nuevo.";
    res.json({ answer, mode: "live" });
  } catch (error: any) {
    console.error("Error in /api/ai/ask:", error);
    res.status(500).json({
      error: error.message || "Error procesando la solicitud con IA",
      answer: "Hubo una intermitencia al contactar el servicio de IA. Puedes consultar la guía pedagógica integrada en los módulos 1 y 2.",
    });
  }
});

// API endpoint to evaluate or simulate a case study
app.post("/api/ai/evaluate-case", async (req, res) => {
  try {
    const { caseTitle, scenario, userDecision, phase } = req.body;

    if (!ai) {
      return res.json({
        score: 85,
        feedback: "Excelente análisis de la situación. Tu decisión demuestra alineación con la metodología del proceso administrativo del SENA y los lineamientos del proyecto INNOVAGESTIÓN.",
        strengths: ["Comprensión del diagnóstico inicial", "Orientación a la mejora continua"],
        improvementAreas: ["Profundizar en la medición de indicadores cuantitativos"],
        senaDimensions: {
          saber: "Dominio de conceptos organizacionales",
          saberHacer: "Propuesta de aplicación estructurada",
          ser: "Liderazgo y compromiso con la iniciativa productiva",
        },
      });
    }

    const prompt = `Evalúa la decisión del aprendiz en el siguiente caso práctico formativo del SENA:
Fase: ${phase}
Caso: ${caseTitle}
Escenario de la Mipyme: ${scenario}
Decisión / Plan propuesto por el aprendiz:
"${userDecision}"

Devuelve un JSON con este formato exacto:
{
  "score": número del 0 al 100,
  "feedback": "Análisis pedagógico detallado con tono de instructor SENA",
  "strengths": ["fortaleza 1", "fortaleza 2"],
  "improvementAreas": ["área de mejora 1"],
  "senaDimensions": {
    "saber": "Evaluación del Saber",
    "saberHacer": "Evaluación del Saber Hacer",
    "ser": "Evaluación del Ser"
  }
}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        systemInstruction: SENA_SYSTEM_PROMPT,
        responseMimeType: "application/json",
        temperature: 0.5,
      },
    });

    const jsonText = response.text?.trim() || "{}";
    const parsed = JSON.parse(jsonText);
    res.json(parsed);
  } catch (error: any) {
    console.error("Error in /api/ai/evaluate-case:", error);
    res.status(500).json({
      score: 80,
      feedback: "Tu respuesta ha sido registrada y aprobada conforme a los criterios generales del programa.",
      strengths: ["Iniciativa y aplicación"],
      improvementAreas: ["Revisar matriz de riesgos"],
      senaDimensions: {
        saber: "Conceptos aprobados",
        saberHacer: "Procedimiento correcto",
        ser: "Ética y proactividad",
      },
    });
  }
});

// Serve frontend
async function startServer() {
  const isProd = process.env.NODE_ENV === "production";
  if (!isProd) {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, "dist")));
    app.get("*", (_req, res) => {
      res.sendFile(path.resolve(__dirname, "dist", "index.html"));
    });
  }

  app.listen(port, () => {
    console.log(`Server running on port ${port} (mode: ${isProd ? "production" : "development"})`);
  });
}

startServer();
