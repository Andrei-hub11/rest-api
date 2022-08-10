const { log } = require("console");
const uuid = require("uuid");

const members = [
  {
    id: 1,
    name: "Joana",
    email: "joana@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Julia",
    email: "Julia@gmail.com",
    status: "active",
  },
  {
    id: 3,
    name: "E'too",
    email: "etoo@gmail.com",
    status: "active",
  },
];

const getAllUsers = () => {
  return members;
};

const getUserById = (userId) => {
  return new Promise((resolve, reject) => {
    const user = members.find((member) => member.id === parseInt(userId));
    user
      ? resolve(user)
      : reject({ msg: `Usuário com id ${userId} não foi encontrado` });
  });
};

const addNewUser = (body) => {
  return new Promise((resolve, reject) => {
    const { name, email, status } = body;
    const newUser = {
      id: uuid.v4(),
      name: name,
      email: email,
      status: status,
    };

    if (!name || !email) {
      reject({
        msg: `Não foi possível realizar a solicitação. Por favor, verifique se preencheu os campos de nome e email.`,
      });
    } else {
      members.push(newUser);
      resolve(`Usuário adicionado com sucesso`);
    }
  });
};

const putUserById = (userId, body) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < members.length; i++) {
      if (members[i].id === parseInt(userId)) {
        const { name: nameUp, email: emailUp } = body;
        members[i].name = nameUp ? nameUp : members[i].name;
        members[i].email = emailUp ? emailUp : members[i].email;

        resolve(`Usuário atualizado com sucesso`);
      } else if (i === members.length - 1) {
        reject({ msg: `Usuário com id ${userId} não foi encontrado` });
      }
    }
  });
};

const deleteUserById = (userId) => {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < members.length; i++) {
      if (members[i].id === parseInt(userId)) {
        members.splice(i, 1);
        resolve(`Usuário deletado com sucesso`);
      } else if (i === members.length - 1) {
        reject({ msg: `Usuário com id ${userId} não foi encontrado` });
      }
    }
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  addNewUser,
  putUserById,
  deleteUserById,
};
