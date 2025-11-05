import prisma from '../prismaClient.js';

//Create User
export const createUser = async (req, res) => {
    const {name, email} = req.body;
    const newUser = await prisma.user.create({
        data: {
            name,
            email
        }
    });
    res.status(201).json(newUser);    
}
// Get All Users

export const getAllUsers = async (req, res) => {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
}
// Get user By Id

export const getUserById = async (req, res) => {    
    const {id} = req.params;
    const user = await prisma.user.findUnique({
        where: {
            id: parseInt(id)}
    });
    res.status(200).json(user);
}
//update user

export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {name, email} = req.body;
    const updatedUser = await prisma.user.update({      
        where: {id: parseInt(id)},
        data: {name, email}
    });
    res.status(200).json(updatedUser);
}
// Delete User

export const deleteUser = async (req, res) => {
    const {id} = req.params;
    await prisma.user.delete({
        where: {id: parseInt(id)}
    });
    res.status(204).send();
}