var logout = (req, res) => {
    res.status(200).json({ message: 'This is an login end point. It destroy users session' });

}

module.exports = logout;