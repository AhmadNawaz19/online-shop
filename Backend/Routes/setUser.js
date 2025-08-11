export function UserLogin (req, res) {
    const token = req.cookies?.token
    const data = req.body;
    console.log(data)
    console.log(req.user)
    res.send({msg : 'successfully'})
}