import exprees from 'express';

const router = exprees.Router();

router.get("/send", (req, res) => {
    res.send("Send message endpoint");
});

router.get("/receive", (req, res) => {
    res.send("Receive message endpoint");
});

export default router;