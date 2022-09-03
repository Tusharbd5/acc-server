const users = require("../public/user.json");

module.exports.getRandomUser = (req, res, next) => {
  const randomUsers = users.sort(() => Math.random() - 0.5);
  res.send(randomUsers.slice(0, 1));
};

module.exports.getAllUsers = (req, res, next) => {
  const { limit } = (req.query);
  res.send(users.slice(0, limit));
}

module.exports.saveAUser = (req, res) => {
  const user = req.body;
  if (Object.keys(user).length < 6) {
    const validUser = ['id', 'gender', 'name', 'contact', 'address', 'photoUrl'];
    const missing = validUser.filter(u => !Object.keys(user).includes(u));
    res.send(`You didn't fill the ${missing} element`);
  }
  users.push(user);
  res.send(users);
};

module.exports.viewUser = (req, res, next) => {
  const { id } = req.params;
  const newData = users.find(user => user.id === Number(id));
  res.send(newData);
}

module.exports.updateUser = (req, res) => {
  // const newData = req.body;
  const { id } = req.params;
  if (id !== NaN) {
    const newData = users.find(user => user.id === Number(id));

    newData.id = Number(id);
    newData.gender = req.body.gender;
    newData.name = req.body.name;
    newData.contact = req.body.contact;
    newData.address = req.body.address;
    newData.photoUrl = req.body.photoUrl;

    res.send(newData);

  }
  res.send('User id is not a number');

};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  console.log(+id);
  if (+(id) !== NaN) {
    restUser = users.filter(user => user.id !== Number(id));

    res.send(restUser);
  }
  else if (+(id) === NaN) {
    res.send('Your user id is not a number');
  }
};