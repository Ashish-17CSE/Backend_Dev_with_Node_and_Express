
const User = require('../models/userModel');

// Get all users from the database
exports.getAllUsers = (req, res, next) => {
  User.findAll()
    .then(users => {
      res.json(users); // Send the users as JSON
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    });
}

exports.createUser = (req, res, next) => {
  const UserName = req.body.UserName;
  const PhoneNumber = req.body.PhoneNumber;
  const Email = req.body.Email;

  if (!UserName || !PhoneNumber || !Email) {
    return res.redirect('/');
  }
  User.create({
    UserName: UserName,
    PhoneNumber: PhoneNumber,
    Email: Email
  })
    .then(result => {
      console.log('New User Added');
      // res.send('Your data has been added successfully');
      res.redirect('/');
    })
    .catch(err => {
      console.log("Error from creatUser : \n", err);
      res.status(500).json({ message: 'Internal server error' });
    });
}

/*
exports.getEditUser = (req, res, next) => {
  const editUser = req.query.edit;
  if (!editUser) {
    return res.redirect('/');
  }
  const usersId = req.params.id;
  User.findById(usersId)
    .then(user => {
      if (!user) {
        return res.redirect('/');
      }
      res.render('index', {
        pageTitle: "Edit Product",
        path: '/',
        editing: editUser,
        user: user
      });
    })
    .catch(error => {
      console.log("Error from getEditUser : \n",error);
    })

}

exports.postEditUser = (req, res, next) => {
  const usersId = req.body.userId;
  const updatedName = req.body.UserName;
  const updatedNumber = req.body.PhoneNumber;
  const updatedEmail = req.body.Email;
  User.findById(usersId)
    .then(users => {
      users.UserName = updatedName;
      users.PhoneNumber = updatedNumber;
      users.Email = updatedEmail;
      return users.save();
    })
    .then(result => {
      console.log('UPDATED USER !');
      res.redirect('/')
    })
    .catch(err => {
      console.log("Error From postEditUser : \n", err);
    })


}

exports.deleteUser = (req, res, next) => {
  const usersId = req.body.userId;
  console.log("This User ID Is From delete User in controller file : ", usersId);
  User.findById(usersId)
  .then(user => {
    return user.destroy();
  })
  .then(result => {
    console.log("DESTROYED USER DATA");
    res.redirect('/');
  })
  .catch(err => console.log("Error form deleteUser : \n", err))
}*/

exports.editUser = (req, res, next) => {
  const userId = req.params.id; // Assuming you pass the user ID in the URL parameter

  const updatedUser = {
    UserName: req.body.UserName,
    PhoneNumber: req.body.PhoneNumber,
    Email: req.body.Email
  };

  User.update(updatedUser, {
    where: { id: userId }
  })
    .then(() => {
      console.log('User Updated');
      res.redirect('/');
    })
    .catch(err => {
      console.error("Error from editUser: \n", err);
      res.status(500).json({ message: 'Internal server error' });
    });
}


exports.deleteUser = (req, res, next) => {
  const userId = req.params.id; // Assuming you pass the user ID in the URL parameter

  User.destroy({
    where: { id: userId }
  })
    .then(() => {
      console.log('User Deleted');
      res.redirect('/');
    })
    .catch(err => {
      console.error("Error from deleteUser: \n", err);
      res.status(500).json({ message: 'Internal server error' });
    });
}

