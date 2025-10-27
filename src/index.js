import app from "./app.js";
import EnvEnum from "./helpers/env.enum.js";

function main() {
    const port = 5000 || process.env[EnvEnum.APP_PORT];

    app.listen(port, () => {
        console.log(`Server os running on port ${port}!`);
    });
}

main();