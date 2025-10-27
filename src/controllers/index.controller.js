import EnvEnum from "../helpers/env.enum.js";

class IndexController {
    constructor() {
        this.baseUrl = process.env[EnvEnum.API_BASE_URL];
        this.appToken = process.env[EnvEnum.APP_TOKEN]
    }

    index = async(req, res) => {
        try {
            const { date } = req.params;
            const authHeader = req.headers["authorization"];
            const token = authHeader && authHeader.split(" ")[1];
            const url = `${this.baseUrl}/${date}`;

            const response = await fetch(url, {
                "method": "GET",
                "headers": {
                    "Authorization": `Bearer ${token}`,
                    "app-token": this.appToken
                }
            });

            const responseData = await response.json();

            if(response.status == 200) {
                return res.status(200).json(responseData);
            }

            return res.status(response.status).json({
                "ok": false,
                "response_message": responseData.error,
                "response_status": response.status
            });
        } catch (error) {
            console.log(`Error to search items ====> ${error}`);

            return res.status(500).json({
                ok: false,
                error_message: "Internal server error, please try again later!",
                error_status: 500
            });
        }
    }
}


export default IndexController;