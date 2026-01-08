import express from "express";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/my", authMiddleware, (req, res) => {
    const userId = req.user.id;

    const chats = [
        {
            _id: "ap8uB",
            user1: {
                _id: "ap8uB",
                firstname: "Cristiano",
                lastname: "Ronaldo",
                profileImage: {
                    url: "assets/profile.png",
                    publicId: "",
                }
            },
            user2: {
                _id: "696009b8a9fc3267d7c41d0b",
                firstname: "Talha",
                lastname: "Rafat",
                profileImage: {
                    url: "assets/profile.png",
                    publicId: "",
                }
            },
            createdAt: new Date().toISOString(),
        },
        {
            _id: "8HjpG",
            user1: {
                _id: "696009b8a9fc3267d7c41d0b",
                firstname: "Talha",
                lastname: "Rafat",
                profileImage: {
                    url: "assets/profile.png",
                    publicId: "",
                }
            },
            user2: {
                _id: "8HjpG$s",
                firstname: "Steve",
                lastname: "Smith",
                profileImage: {
                    url: "assets/profile.png",
                    publicId: "",
                }
            },
            createdAt: new Date().toISOString(),
        },
        {
            _id: "0$ly6",
            user1: {
                _id: "0$ly6",
                firstname: "Max",
                lastname: "Verstappen",
                profileImage: {
                    url: "assets/profile.png",
                    publicId: "",
                }
            },
            user2: {
                _id: "696009b8a9fc3267d7c41d0b",
                firstname: "Talha",
                lastname: "Rafat",
                profileImage: {
                    url: "assets/profile.png",
                    publicId: "",
                }
            },
            createdAt: new Date().toISOString(),
        },
    ];

    res.json(chats);
});

export default router;
