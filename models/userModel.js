const db = require('./db');

const User = {
  getAll: (callback) => {
    db.query('SELECT * FROM users', callback);
  },
  create: (data, callback) => {
    db.query('INSERT INTO users (name_user, email, phone) VALUES (?, ?, ?)', [data.name_user, data.email, data.phone], callback);
  },
  getById: (id, callback) => {
    db.query('SELECT * FROM users WHERE id_user = ?', [id], callback);
  },
  update: (id, data, callback) => {
    db.query('UPDATE users SET name_user = ?, email = ?, phone = ? WHERE id_user = ?', [data.name_user, data.email, data.phone, id], callback);
  },
  delete: (id, callback) => {
    db.query('DELETE FROM users WHERE id_user = ?', [id], callback);
  }
};

module.exports = User;