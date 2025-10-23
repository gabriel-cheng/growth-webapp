import EnvEnum from "./env.enum.js";

function envValidation() {
    for(const key of Object.values(EnvEnum)) {
        if (!process.env[key]) {
            console.warn(`Missing environment variable: ${key}`);
        }
    }
}

export default envValidation;