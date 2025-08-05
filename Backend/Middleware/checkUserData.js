export function CheckData (req, res, next)  {
    const {username, age} = req.body;
    if(!username) return res.send("username is missing..");
    next();
}