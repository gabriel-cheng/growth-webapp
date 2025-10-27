import EnvEnum from "../helpers/env.enum.js";

export async function getAllData() {
    const url = process.env[EnvEnum.API_BASE_URL];
    const app_token = process.env[EnvEnum.APP_TOKEN];

    const response = await fetch(url, {
        "method": "GET",
        "headers": {
            "app-token": app_token,
            // "Authorization":
        }
    });
}