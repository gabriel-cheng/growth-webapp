import EnvEnum from "../helpers/env.enum.js";

class IndexController {
    constructor() {
        this.baseUrl = process.env[EnvEnum.API_BASE_URL]
    }

    index(req, res) {
        return res.status(200).json(
            { "message": "Hello, world!" }
        );
    }
}

export default IndexController;