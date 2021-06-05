import { strings } from "../constants/consoleStrings.js";
import { app } from "../main.js";
import express from "express";
import cors from "cors";

export default {
	use() {
		app.use(express.json({ limit: "30mb" }));
		app.use(express.urlencoded({ limit: "30mb", extended: "true" }));
		app.use(cors());

		return console.log(`[${strings.date}] ${strings.express_middlewares}`);
	}
};