const express = require('express');

let users = [];

class UserController {

    SignUp(req, res) {
        let error = [];

        const user = users.find(user => user.userName === req.body.userName);
        
        if (!user) {
            
            if (req.body.userName && req.body.password) {
                let user = {
                    userName: req.body.userName,
                    password: req.body.password
                };
    
                users.push(user);
    
                return res.send(user);
            }

            error.push({ message: 'Not Validate!' });

            return res.send(error);
        }

        return res.send({ message: 'Not Created!' });
    }
}

module.exports = new UserController();