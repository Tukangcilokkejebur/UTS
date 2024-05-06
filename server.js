const express = require('express');
const path = require('path');
const app = express();

// Middleware untuk melayani file statis dari direktori 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Middleware untuk parsing JSON dan form-urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint GET untuk jalur root, mengarahkan ke 'login.html'
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// Endpoint POST untuk login
app.post('/login', (req, res) => {
  const { uname, psw } = req.body;

  // Logika autentikasi dasar (ganti dengan logika yang lebih kompleks sesuai kebutuhan)
  if (uname === 'admin' && psw === 'password123') {
    res.send('Login berhasil');
  } else {
    res.status(401).send('Login gagal');
  }
});

// Jalankan server pada port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
