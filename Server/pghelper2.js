const { Pool } = require('pg');
app.pool = new Pool({
    user: 'dtyomypiqjajmu',
    host: 'ec2-174-129-233-123.compute-1.amazonaws.com',
    database: 'df68ogu3e03bnu',
    password: 'fc80ec7fac2c4c83b84befb4186df6bc0907f6ff6fb6afad5952ba11ce7701f7', // Password is empty be default
    port: 5432, // Default port
  });