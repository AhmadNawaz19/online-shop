import jwt from  'jsonwebtoken'

export function CreateToken(req, res, next) {
    const email = req.body.email;
    console.log(email)
    const token = jwt.sign({
        email
    },
    'ahmadnawaz'
)
    res.cookie('token',token)
    next();
}

export function VerifyToken (req, res, next) {
    const token = req.cookies?.token;
    jwt.verify(token, 'ahmadnawaz', (err, decoded) => {
        if(err) return console.log('invalid token');
        req.user = decoded;
    })
    console.log('varify function called')
}