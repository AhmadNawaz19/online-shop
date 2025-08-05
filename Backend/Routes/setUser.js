export function UserLogin (req, res) {
    const data = req.body;
    console.log(data)
    res.send({msg : 'successfully'})
}