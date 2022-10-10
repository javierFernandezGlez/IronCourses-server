const isEducator = (req, res, next) => {
    console.log(req.user);
    const isEducator = req.user && req.user.educator;

    if(!isEducator) {
        return res.status("403").json({
            error: "User is not an educator"
        })
    }

    next();
}

module.exports = isEducator;