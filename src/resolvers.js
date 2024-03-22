import { users } from './db';

const resolvers = {
    Query: {
        user: (parent, { id }, context, info) => {
            return users.find(user => user.id == id)
        },
        users: (parent, args, context, info) => {
            return users
        }

    },
    Mutation: {
        createUser: (parent, { id, name, email, age }, context, info) => {
            const newUser = { id, name, email, age }
            users.push(newUser)
            return newUser
        },
        updateUser: (parent, { id, name, email, age }, context, info) => {
            const newuser = users.find(user => user.id == id);
            newuser.name = name;
            newuser.email = email;
            newuser.age = age;
            return newuser;
        },
        deleteUser: (parent, { id }, context, info) => {
            const userIndex = users.findIndex(user => user.id === id);
            if (userIndex === -1) throw new Error("User not found")
            const deletedUsers = users.splice(userIndex, 1);
            return deletedUsers[0];
        }
    }
}

export default resolvers;