var info = (req, res) => {
    res.status(200).json({ message: 'This is an user info end point. You can get info about user' });
}

module.exports = info;