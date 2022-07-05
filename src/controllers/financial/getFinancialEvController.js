async function getFinancialEvController(req, res) {
    try {
      const authorization = req.headers.authorization || "";
      const token = authorization.replace("Bearer ", "");
  
      if (!token) {
        return res.sendStatus(401);
      }
  
      let user;
  
      try {
        user = jwt.verify(token, process.env.JWT_SECRET);
      } catch {
        return res.sendStatus(401);
      }
  
      const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
      );
  
      res.send(events.rows);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

export default getFinancialEvController;