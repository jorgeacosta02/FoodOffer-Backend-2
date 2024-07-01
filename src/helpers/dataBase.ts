import { WorkerModel } from "../models/ProjectModel";
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
            password: '1',
            active: true,
            consortium: 'elbosque',
            role: 'council',
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
            firstName: '1',
            lastName: '1',
            dni: '1',
            phone: '2646730581',
            email: '1@yahoo.com',
            password: '1',
            active: true,
            consortium: 'elbosque',
            role: 'council',
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
            firstName: '1',
            lastName: '1',
            dni: '1',
            phone: '2646730581',
            email: '1@yahoo.com',
            password: '1',
            active: true,
            consortium: 'admin',
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
