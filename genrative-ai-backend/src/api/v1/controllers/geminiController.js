import { initialise } from "../../../config/initializeGemini.js";
export const askGemini = async (req, res) => {
    let {question} = req.body;
    try{
        const result = await initialise();
        var responseData = await result.sendMessage(question);
        const response = responseData.response;
        return res.status(200).json({ output: response.text()});
    }catch(err){
        return res.status(500).json({ message: err.message });
    }
}
