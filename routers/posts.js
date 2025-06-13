// import
const express = require("express");
const controllerRouter = require("../controllers/controllerRouter");

const router = express.Router();

// router
router.get(`/`, controllerRouter.index);
router.get("/:id", controllerRouter.show);
router.post(`/`, controllerRouter.store);
router.put("/:id", controllerRouter.update);
router.patch("/:id", controllerRouter.modify);
router.delete("/:id", controllerRouter.destroy);

// export
module.exports = router;
