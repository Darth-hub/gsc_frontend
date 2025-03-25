import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize with your API key
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export const generateResponse = async (prompt) => {
  try {
    // Using the latest Gemini 2.0 Flash model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-2.0-flash",  // Latest lightweight model
      generationConfig: {
        temperature: 0.9,          // More creative responses
        topP: 1,                   // Broad sampling
        maxOutputTokens: 2048      // Longer responses
      }
    });
    
    const result = await model.generateContent(prompt);
    return result.response.text();
  } catch (error) {
    console.error("Full API Error:", error);
    
    // User-friendly error messages
    let errorMessage = "Service unavailable. Please try again later.";
    if (error.message.includes("quota")) {
      errorMessage = "API quota exceeded. Try again later or upgrade your plan.";
    } else if (error.message.includes("safety")) {
      errorMessage = "Query blocked for safety reasons. Please rephrase.";
    }
    
    throw new Error(errorMessage);
  }
};