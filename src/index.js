import app from "./app.js";

function main() {
    const port = 5000 || process.env.PORT;

    app.listen(port, () => {
        console.log(`Server os running on port ${port}!`);
    });
}

main();