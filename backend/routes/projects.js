import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/my", authMiddleware, (req, res) => {
  const userId = req.user.id;

  const projects = [
    {
      _id: "all-tasks",
      name: "All Tasks",
      projectImage: {
        url: "assets/alltasks.png",
        publicId: "",
      },
      createdAt: new Date().toISOString(),
    },
    {
      _id: "ap8uB",
      name: "BlackRock",
      projectImage: {
        url: "assets/project.png",
        publicId: "",
      },
      createdAt: new Date().toISOString(),
    },
    {
      _id: "8HjpG",
      name: "Berkshire",
      projectImage: {
        url: "assets/project.png",
        publicId: "",
      },
      createdAt: new Date().toISOString(),
    },
    {
      _id: "0$ly6",
      name: "Strategy",
      projectImage: {
        url: "assets/project.png",
        publicId: "",
      },
      createdAt: new Date().toISOString(),
    }
  ];

  res.json(projects);
});

export default router;
