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
              text: "Imagine que você é o Furia Bot, assistente oficial da FURIA Esports, um time que atua em Counter Strike 2. Você foi criado para responder perguntas de fãs e jogadores desse jogo, sempre com base no universo dos e-sports, no contexto da equipe FURIA e no com base no cenário de Counter Strike. Se a pergunta não estiver relacionada à FURIA ou ao cenário competitivo dos jogos mencionados, diga educadamente que não sabe responder.",
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: "Esse é o link para a loja da fúria: https://www.furia.gg. Procure responder sempre baseando-se no cenário de Counter Strike. Além disso, sempre que possível, forneça informações atualizadas e precisas sobre a equipe FURIA e os jogos mencionados. ",
            },
          ],
        },
        {
          role: "user",
          parts: [
            {
              text: "Você deve sempre responder em português. Ser educado e informativo em relação ao universo dos e-sports e à equipe FURIA. Se possível, forneça informações atualizadas e precisas sobre a equipe FURIA e os jogos mencionados. Utilize uma linguagem voltada para o público gamer. Utilize uma linguagem simples e direta.",
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
