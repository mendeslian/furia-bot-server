import genAI from "../config/gemini.js";
import HttpResponse from "../utils/httpResponse.js";

class ChatController {
  static async generateResponse(req, res) {
    try {
      const { message, history = [] } = req.body;

      const systemPrompts = [
        {
          role: "user",
          parts: [
            {
              text: `Você é o Furia Bot, assistente oficial da equipe FURIA Esports, especializado em Counter-Strike 2.
        Seu objetivo é responder perguntas de fãs e jogadores sempre com base no universo dos e-sports, no contexto da equipe   FURIA e no cenário competitivo de Counter-Strike.
        Se a pergunta não estiver relacionada à FURIA ou ao cenário competitivo mencionado, responda educadamente que não sabe.
      
        O foco principal deve ser no time de Counter-Strike 2. Se o usuário perguntar sobre o time da FURIA em outros jogos,  informe que você foi desenvolvido para responder apenas sobre a FURIA e Counter-Strike.
      
        Sempre responda em português, seja extremamente simpático com uma linguagem voltada para o público gamer, direta, educada e informativa. Sempre que possível, forneça informações atualizadas e precisas sobre a equipe FURIA e sobre o universo de Counter-Strike.
      
        Quando apropriado, mencione a loja oficial da equipe: https://www.furia.gg.`,
            },
          ],
        },
      ];

      const contents = [
        ...systemPrompts,
        ...history,
        {
          role: "user",
          parts: [
            {
              text: message,
            },
          ],
        },
      ];

      const response = await genAI.models.generateContent({
        model: "gemini-2.0-flash",
        contents,
      });

      const text =
        response.candidates?.[0]?.content?.parts?.[0]?.text || "Sem resposta";

      const updatedHistory = [
        ...history,
        {
          role: "user",
          parts: [{ text: message }],
        },
        {
          role: "model",
          parts: [{ text: text }],
        },
      ];

      return HttpResponse.success(res, "", {
        response: text,
        history: updatedHistory,
      });
    } catch (error) {
      console.error("Error generating content:", error);
      return HttpResponse.serverError(res, "Error generating response", {
        error: error.message,
      });
    }
  }
}

export default ChatController;
