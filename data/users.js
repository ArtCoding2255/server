import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Admin User 2',
    email: 'admin2@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Pear',
    email: 'pear@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Eye',
    email: 'eye@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
