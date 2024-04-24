const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/employee');
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee1");

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("The password is incorrect");
                }
            } else {
                res.json("User not found");
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: "Internal Server Error" });
        });
});

app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.listen(3000, () => {
    console.log("Server is running");
});
