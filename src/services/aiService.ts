
import { GoogleGenAI, Type } from "@google/genai";
import { SYSTEM_PROMPT } from "../constants";
import { IntentAnalysis } from "../types";

export async function analyzeIntent(userIntent: string, metadata?: any): Promise<IntentAnalysis> {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
  
  const prompt = `
    User Intent: "${userIntent}"
    User Background: ${JSON.stringify(metadata || {})}
    
    Current Date: March 2024.
    Reason over the mobility pathways for Germany, Canada, UK, and Australia.
  `;

  const response = await ai.models.generateContent({
    model: 'gemini-3-flash-preview',
    contents: prompt,
    config: {
      systemInstruction: SYSTEM_PROMPT,
      responseMimeType: 'application/json',
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          fieldOfInterest: { type: Type.STRING },
          intentStages: { type: Type.ARRAY, items: { type: Type.STRING } },
          constraints: {
            type: Type.OBJECT,
            properties: {
              budget: { type: Type.STRING },
              educationLevel: { type: Type.STRING },
              timeHorizon: { type: Type.STRING }
            },
            required: ['budget', 'educationLevel', 'timeHorizon']
          },
          priorities: { type: Type.ARRAY, items: { type: Type.STRING } },
          pathways: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                country: { type: Type.STRING },
                entryStage: { type: Type.STRING },
                transitionSteps: {
                  type: Type.ARRAY,
                  items: {
                    type: Type.OBJECT,
                    properties: {
                      title: { type: Type.STRING },
                      duration: { type: Type.STRING },
                      description: { type: Type.STRING },
                      requirements: { type: Type.ARRAY, items: { type: Type.STRING } }
                    },
                    required: ['title', 'duration', 'description', 'requirements']
                  }
                },
                totalDuration: { type: Type.STRING },
                riskLevel: { type: Type.STRING, description: 'low | medium | high' },
                riskDescription: { type: Type.STRING },
                whyItWorks: { type: Type.STRING },
                potentialRoadblocks: { type: Type.ARRAY, items: { type: Type.STRING } },
                fallbackOptions: { type: Type.STRING }
              },
              required: ['country', 'entryStage', 'transitionSteps', 'totalDuration', 'riskLevel', 'whyItWorks', 'potentialRoadblocks', 'fallbackOptions']
            }
          }
        },
        required: ['fieldOfInterest', 'intentStages', 'constraints', 'priorities', 'pathways']
      }
    }
  });

  if (!response.text) {
    throw new Error("No response from AI");
  }

  return JSON.parse(response.text) as IntentAnalysis;
}
