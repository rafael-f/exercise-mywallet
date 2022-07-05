import jwt from 'jwt';
import bcrypt from 'bcrypt';
import 'dotenv/config';

async function postSignIn(email,password) {
        if (!email || !password) {
          throw { type:'invalidReq', message:'invalid'};
        }
    
        const { rows } = await connection.query(
          `SELECT * FROM "users" WHERE "email"=$1`,
          [email]
        );
        const [user] = rows;
    
        if (!user || !bcrypt.compareSync(password, user.password)) {
          throw { type:'notFound', message:'user not found'}
        }
    
        const token = jwt.sign(
          {
            id: user.id,
          },
          process.env.JWT_SECRET
        );
    
        return {token};

}
async function postSignUp(name,email,password) {

    if (!name || !email || !password) {
        throw { type:'invalidReq', message:'invalid'};
      }
  
      const existingUsers = await connection.query(
        `SELECT * FROM "users" WHERE "email"=$1`,
        [email]
      );
  
      if (existingUsers.rowCount > 0) {
        throw { type:'conflict', message:'user exist'};
      }
  
      const hashedPassword = bcrypt.hashSync(password, 12);
  
      await connection.query(
        `INSERT INTO "users" ("name", "email", "password") VALUES ($1, $2, $3)`,
        [name, email, hashedPassword]
      );

}
const authService = {
    postSignIn,
    postSignUp
};

export default authService;