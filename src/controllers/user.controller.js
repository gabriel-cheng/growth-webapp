import { generateToken } from "../services/generate_token.sv.js";

class UserController {
    async login(req, res) {
        const { email, password } = req.body;

        const accessToken = await generateToken(email, password);

        return res.status(accessToken.response_status).json(accessToken);
    }
}

export default UserController;