import db from '../db/database.js';

class UserModel {
  static getByEmail(email) {
    return new Promise((resolve, reject) => {
      db.get('SELECT * FROM users WHERE email = ?', [email], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static getById(id) {
    return new Promise((resolve, reject) => {
      db.get('SELECT id, name, email, createdAt, avatarPath FROM users WHERE id = ?', [id], (err, row) => {
        if (err) reject(err);
        else resolve(row);
      });
    });
  }

  static updateAvatar(id, avatarPath) {
    return new Promise((resolve, reject) => {
      db.run('UPDATE users SET avatarPath = ? WHERE id = ?', [avatarPath, id], function (err) {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  static create(user) {
    return new Promise((resolve, reject) => {
      const { id, name, email, passwordHash, createdAt } = user;
      db.run(
        'INSERT INTO users (id, name, email, passwordHash, createdAt) VALUES (?, ?, ?, ?, ?)',
        [id, name, email, passwordHash, createdAt],
        function (err) {
          if (err) reject(err);
          else resolve({ id, name, email, createdAt });
        }
      );
    });
  }
}

export default UserModel;
