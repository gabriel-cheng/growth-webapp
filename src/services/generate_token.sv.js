import EnvEnum from "../helpers/env.enum.js";

export async function generateToken() {
    const url = process.env[EnvEnum.API_BASE_URL];
    const appToken = process.env[EnvEnum.APP_TOKEN];
    const email = process.env[EnvEnum.USER_EMAIL];
    const pass = process.env[EnvEnum.USER_PASS];

    try {
        const response = await fetch(url, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "app-token": appToken,
            },
            "body": JSON.stringify({
                "email": email,
                "senha": pass,
                "tipo": "senha",
                "principal": false
            })
        })
        .then(e => e.json());

        return {
            "accessToken": response.token.accessToken
        }
    } catch(error) {
        console.log(`Generate token error => ${error}`);

        return {};
    }

}