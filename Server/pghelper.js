var pg = require('pg'),
    databaseURL = 'postgres://dtyomypiqjajmu:fc80ec7fac2c4c83b84befb4186df6bc0907f6ff6fb6afad5952ba11ce7701f7@ec2-174-129-233-123.compute-1.amazonaws.com:5432/df68ogu3e03bnu?ssl=true';
    pg.defaults.ssl = true;


const { Client } = require('pg')

/**
 * poatgreSQLに接続してSQLを実行する
 * @param sql 実行したいSQL
 * @param values SQLに指定するパラメータ
 * @param callback SQL実行後、処理するイベント
 */
exports.query = function(sql, values, callback) {
  console.log(sql, values);
  var pool = new pg.Pool(
    {connectionString: databaseURL}
  )
  pool.connect(function(err, conn, done) {
    if (err) {
      return callback(err);
    }
    try {
      conn.query(sql, values, function(err, res) {
        done();
        if (err) {
          callback(err);
        } else {
          callback(null, res.rows);
        }
      });
    } catch(e) {
      done();
      callback(e);
    }
  });
  pool.end()

};
exports.query2 = function(sql) {
  const client = new Client({
    connectionString:'postgres://dtyomypiqjajmu:fc80ec7fac2c4c83b84befb4186df6bc0907f6ff6fb6afad5952ba11ce7701f7@ec2-174-129-233-123.compute-1.amazonaws.com:5432/df68ogu3e03bnu?ssl=true'
  })
  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected');
      client.query(sql).then(result => {
        console.log(result.rows);
        return result.rows;
      });
    }
  })
};