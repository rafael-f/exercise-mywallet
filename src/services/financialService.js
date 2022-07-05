
async function postFinancialEv(token) {

      const events = await connection.query(
        `SELECT * FROM "financialEvents" WHERE "userId"=$1 ORDER BY "id" DESC`,
        [user.id]
      );
  
      res.send(events.rows);
}

const financialService = {
    postFinancialEv
}