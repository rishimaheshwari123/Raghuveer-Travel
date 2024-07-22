const { contactUsEmail } = require("../template/contactFormRes2");
const mailSender = require("../utils/mailSenderr");

const contactCtrl = async (req, res) => {
    const { name, email, message } = req.body;

    try {
        const emailRes = await mailSender(
            "rishimaheshwari040@gmail.com",
            "Your Data send successfully",
            contactUsEmail(name, email, message)
        )
        res.status(200).send({
            message: "Email send successfully.Our team will contact you soon!",
            emailRes,
            success: true
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Error in sending email",
        })
    }
}

module.exports = { contactCtrl }