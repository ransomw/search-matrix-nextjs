const pg = require('pg');
const { Client, Pool} = pg

async function seedUser(client) {
    const email = "b@b.org";
    try {
    await client.query(`
    CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
  );`);
    } catch (err) {
        console.error("couldn't create table")
        console.error(err);
        return null;
    }

    console.log("checking for existing user");

    const res = await client.query("SELECT * FROM users WHERE email = $1",
        [email,]);
    
    if (res.rows.length > 1) {
        console.error("duplicate emails");
        return null;   
    } else if (res.rows.length === 1) {
        return res.rows[0].id;
    }


    console.log("creating new user");

    const ins_res = await client.query(
        "INSERT INTO users(email, password) VALUES($1, $2) RETURNING id",
    [email, "password"]);
    return ins_res.rows[0].id;
}

async function main() {
 
    const client = new Client({
      user: 'postgres',
      host: 'localhost',
      port: 5433,
      database: 'search-matrix',
    })
    
    await client.connect()
    
    const user_id = await seedUser(client);
    console.log("got user id");
    console.log(user_id);

    await client.end()
    
    }
    
    main().catch((err) => {
        console.error(
          'An error occurred while attempting to seed the database:',
          err,
        );
      });