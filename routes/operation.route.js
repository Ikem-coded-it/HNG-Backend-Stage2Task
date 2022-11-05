const express = require("express");
const router = express.Router();


router.route("/").post(async(req, res) => {
    console.log(req.body)
    const answer = await arithmetics(
                        req.body.operation_type,
                        req.body.x,
                        req.body.y
                    )
    res.send({
        slackUsername: "6tendev",
        operation_type: req.body.operation_type,
        result: answer
    })                
})


const arithmetics = (op, x, y) => {
    if (op == "addition") {
        const result = x + y;
        return result;
    } else if (op == "subtraction") {
        const result = x - y;
        return result;
    } else {
        const result = x * y;
        return result;
    }
}

module.exports = router;