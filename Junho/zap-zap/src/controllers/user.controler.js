import { User } from "..models/User.model.js"

let listUser = []

// CRUD


export const createUser = (username, phone) => {
    const newUser = new User
}

export const getAllUser = () => {
    return listUser
}

export const updateStatus = (id) => {
    const userAlreadyExist = listUser.find(user => user.id == id)

    if(userAlreadyExist) {
        let indexUser = listUser.findIndex(user => user.id == id);
        listUser[indexUser].statusOn = true;
        return listUser[indexUser];
    }else {
        return "Não existe um usuario com este id"
    }
}

function changeOn(param){
    return (param) ? false : true;
}