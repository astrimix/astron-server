import { Router } from "express";
import RoleController from "#app/controllers/guild/role.controller.js";

export default () => {
    const api = Router({
        mergeParams: true
    });

    api.get("/roles", RoleController.getRoles)

    api.post("/roles", RoleController.createRole)

    api.patch("/roles", RoleController.updatePositions)

    api.patch("/roles/:id", RoleController.updateRole)

    api.delete("/roles/:id", RoleController.deleteRole)

    return api;
}