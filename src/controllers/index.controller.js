import EnvEnum from "../helpers/env.enum.js";

class IndexController {
    constructor() {
        this.baseUrl = process.env[EnvEnum.API_BASE_URL]
    }

    index(req, res) {
        return res.json(
            { "message": "Hello, world!" }
        );
    }

    teste() {
        
    }
}

export default IndexController;