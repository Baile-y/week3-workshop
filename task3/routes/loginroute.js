module.exports = {
    route: (app) => {
      const users = [
        { email: 'email1@com.au', password: '123' },
        { email: 'email2@com.au', password: '456' },
        { email: 'email3@com.au', password: '789' }
      ];
  
      app.post('/login', (req, res) => {
        const { email, password } = req.body;
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
          res.json({ valid: true });
        } else {
          res.json({ valid: false });
        }
      });
    }
  };
  