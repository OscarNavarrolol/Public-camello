const db = require('./db');

const Publication = {
  getAll: (callback) => {
    db.query('SELECT * FROM publication', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO publication (title, body, id_user) VALUES (?, ?, ?)', [data.title, data.body, data.id_user], callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM publication WHERE id_publication = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE publication SET title = ?, body = ?, id_user = ? WHERE id_publication = ?', [data.title, data.body, data.id_user, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM publication WHERE id_publication = ?', [id], callback);
  }
};

module.exports = Publication;