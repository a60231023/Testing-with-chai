const hello = (req, res) => {
    res.status(200).json({
        message: "welcome"
    })
}

module.exports = {
    hello,
}