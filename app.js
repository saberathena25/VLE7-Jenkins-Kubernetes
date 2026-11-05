const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>VLE 7 - CI/CD Pipeline Successful!</h1>
        <p>Application deployed using Jenkins, Docker and Kubernetes.</p>
    `);
});

app.listen(3000, '0.0.0.0', () => {
    console.log('Application running on port 3000');
});
