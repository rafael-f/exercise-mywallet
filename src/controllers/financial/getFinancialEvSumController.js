async function getFinancialEvSumController(req, res) {
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
  
      const sum = events.rows.reduce(
        (total, event) =>
          event.type === "INCOME" ? total + event.value : total - event.value,
        0
      );
  
      res.send({ sum });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };

  export default getFinancialEvSumController;