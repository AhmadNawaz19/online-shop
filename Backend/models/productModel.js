import sql from 'mysql2/promise'

const connection = await sql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root123',
    database : 'company'
});

export const InsertData = async (id, title, picture, price) => {
    try{
        const [row] = await connection.query('select * from product where id = ?', [id])
        if(row.length === 0){
            connection.query('insert into product values (?, ?, ?, ?)', [id, title, picture, price]);
            return {msg : 'the selected prodcut inserted'}
        }else{
            return {msg : "the item already added into cart."}
        }
    }catch(err){
        return err;
    }
}

export const GetItem = async () => {
    try{
        let [item] = await connection.query('select * from product')
        return item;
    }catch(err){
        return err
    }
}
export const RemoveItem = async (id) => {
    try{
        await connection.query('DELETE from product where id = ?', [id]);
        return {msg : 'product removed'}
    }catch(err){
        return err
    }
}