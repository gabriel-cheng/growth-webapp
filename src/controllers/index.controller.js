import EnvEnum from "../helpers/env.enum.js";
import { generateToken } from "../services/generate_token.sv.js";

class IndexController {
    constructor() {
        this.baseUrl = process.env[EnvEnum.API_BASE_URL]
    }

    index(req, res) {
        return res.json(
            { "message": "Hello, world!" }
        );
    }

    async generateTokenEndpoint(req, res) {
        const token = await generateToken();

        return res.json(token)
    }
}

export default IndexController;