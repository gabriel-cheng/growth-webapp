class IndexController {
    index(req, res) {
        return res.json(
            { "message": "Hello, world!" }
        );
    }
}

export default IndexController;