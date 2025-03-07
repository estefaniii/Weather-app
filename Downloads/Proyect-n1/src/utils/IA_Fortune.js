// import { GoogleGenerativeAI } from "@google/generative-ai";

// // Usamos la clave de API de Gemini desde las variables de entorno
// const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// // Función para generar la fortuna
// const IA_Fortune = async () => {
//   const prompt = "Genera una frase de galleta de la fortuna";
  
//   try {
//     const result = await model.generateContent({ contents: [{ parts: [{ text: prompt }] }] });
//     return result.response.text();  // Regresamos el texto generado por Gemini
//   } catch (error) {
//     console.error("Error al obtener la fortuna:", error);
//     return "Lo siento, no pudimos obtener tu fortuna en este momento.";  // Mensaje de error
//   }
// };

// export default IA_Fortune;
