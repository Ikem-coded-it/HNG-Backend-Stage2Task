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
    if (op == "addition" || op == "+") {
        const result = x + y;
        return result;
    } else if (op == "subtraction" || op == "-") {
        const result = x - y;
        return result;
    } else if (op == "multiplication" || op == "*") {
        const result = x * y;
        return result;
    } else {
        return "Invalid Operation type."
    }
}

module.exports = router;