import EnvEnum from "../helpers/env.enum.js";

export async function generateToken(email, password) {
    const url = process.env[EnvEnum.API_BASE_URL];
    const appToken = process.env[EnvEnum.APP_TOKEN];

    try {
        const response = await fetch(url, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "app-token": appToken,
            },
            "body": JSON.stringify({
                "email": email,
                "senha": password,
                "tipo": "senha",
                "principal": false
            })
        })

        const responseData = await response.json();

        if(response.status == 200) {
            return {
                "accessToken": responseData.token.accessToken,
                "refreshToken": responseData.token.refreshToken,
                "response_status": response.status
            }
        }

        return {
            "ok": false,
            "error_message": responseData.error,
            "response_status": response.status
        };
    } catch(error) {
        console.log(`Generate token error ====> ${error}`);

        return {
            "ok": false,
            "error_message": "Internal server error, please try again later!",
            "response_status": 500
        };
    }
}