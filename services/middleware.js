import express from "express";
import cors from "cors";

export default {
    use(app) {
        app.use(express.json({ limit: "30mb", extended: true }));
        app.use(express.urlencoded({ limit: "30mb", extended: true }));
        app.use(cors());
    }
}