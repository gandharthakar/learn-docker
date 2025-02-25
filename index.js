const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const respData = [
        {
            userid: 1,
            username: "Satish Kaushik",
            age: 45,
            gender: "Male"
        },
        {
            userid: 2,
            username: "Kalpana Patil",
            age: 36,
            gender: "Female"
        },
        {
            userid: 3,
            username: "Arvind Tiwari",
            age: 26,
            gender: "Male"
        },
        {
            userid: 4,
            username: "Sushma Shinde",
            age: 43,
            gender: "Female"
        },
        {
            userid: 5,
            username: "Tejas Parab",
            age: 88,
            gender: "Male"
        }
    ];

    res.send(respData);
});

app.listen(48256, () => {
    console.log("Server is started on port number -> 48256.");
});