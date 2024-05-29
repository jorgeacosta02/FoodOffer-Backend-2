import { WorkerModel } from "../models/WorkerModel";
import { UserModel } from "../models/UserModel";
import bcrypt from 'bcrypt';

const dataBase = async () => {

    const users = [
        {
            firstName: '1',
            lastName: '1',
            dni: '1',
            phone: '2646730581',
            email: '1@yahoo.com',
            password: '123',
            active: true,
            role: 'user',
        },
    ]


    const hashedUsers = await Promise.all(users.map(async (user) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(user.password, salt);
        return {
            ...user,
            password: hash
        };
    }));

    const insertedUsers:any = await UserModel.bulkCreate(hashedUsers);
    
    console.log(insertedUsers);

    const workers = [
        {
            firstName: 'Juan',
            lastName: 'Acosta',
            dni: '48858198',
            phone: '2646730581',
            email: 'juan@yahoo.com',
            password: '123456',
            healtPlan: 'One',
            active: true,
            role: 'prof',
        },
    ]

    const hashedWorkers = await Promise.all(workers.map(async (worker) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(worker.password, salt);
        return {
            ...worker,
            password: hash
        };
    }));


    const insertedWorkers:any = await WorkerModel.bulkCreate(hashedWorkers);

    console.log(insertedWorkers)

    const admins = [
        {
            firstName: 'Jorge',
            lastName: 'Acosta',
            dni: '23616110',
            phone: '2646730581',
            email: 'jorgeacostadeleon@yahoo.com',
            password: '123456',
            healtPlan: 'One',
            active: true,
            role: 'admin',
        },
    ]


    const hashedAdmins = await Promise.all(admins.map(async (admin) => {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(admin.password, salt);
        return {
            ...admin,
            password: hash
        };
    }));

    const insertedAdmins:any = await UserModel.bulkCreate(hashedAdmins);
    
    console.log(insertedAdmins);

};

export default dataBase;
