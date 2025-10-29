import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
    res.send({
        message: "ok",
        status: 200,
        type: "get product"
    });
})

export default route;