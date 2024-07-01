import { ConsortiumModel } from "../models/ConsortiumModel";
import { MinuteModel } from "../models/MinuteModel";
import { ProjectModel } from "../models/ProjectModel";
import { UserModel } from "../models/UserModel";
import { ConsortiumUserModel } from "../models/ConsortiumUserModel";
import bcrypt from 'bcrypt';

const dataBase = async () => {
    
    
        // Consortiums
        const consortiums = [
            {
                name: 'c1',
                address: 'address1',
                active: true,
            },
            {
                name: 'c2',
                address: 'address2',
                active: true,
            },
        ]
    
        const insertedConsortiums:any = await ConsortiumModel.bulkCreate(consortiums);
    
        console.log(insertedConsortiums);
    
        const consortiumsFromDB:any = await ConsortiumModel.findAll();


    // Users
    const users = [
        {
            firstName: 'admin',
            lastName: 'admin',
            dni: '1',
            phone: '2646730581',
            email: '1@yahoo.com',
            plot: '',
            password: '1',
            role: 'admin',
            active: true,
        },
        {
            firstName: '2',
            lastName: '2',
            dni: '22',
            phone: '2222',
            email: '2@yahoo.com',
            plot: '2',
            password: '2',
            role: 'user',
            active: true,
        },
        {
            firstName: '3',
            lastName: '3',
            dni: '33',
            phone: '3333',
            email: '3@yahoo.com',
            plot: '1',
            password: '3',
            role: 'user',
            active: true,
        },
        {
            firstName: '4',
            lastName: '4',
            dni: '44',
            phone: '4444',
            email: '4@yahoo.com',
            plot: '4',
            password: '4',
            role: 'user',
            active: true,
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


    // Associate users with consortiums
    const consortiumUserAssociationsOne = insertedUsers.slice(0,2).map((user: any) => ({
        consortiumId: consortiumsFromDB[0].id,
        userId: user.id,
    }));

    const insertedConsortiumUsersOne: any = await ConsortiumUserModel.bulkCreate(consortiumUserAssociationsOne);
    console.log(insertedConsortiumUsersOne);

    const consortiumUserAssociationsTwo = insertedUsers.slice(2).map((user: any) => ({
        consortiumId: consortiumsFromDB[1].id,
        userId: user.id,
    }));

    const insertedConsortiumUsersTwo: any = await ConsortiumUserModel.bulkCreate(consortiumUserAssociationsTwo);
    console.log(insertedConsortiumUsersTwo);


    // Projects
    const projects = [
        {
            proposalDate: '01-06-2024',
            title: 'Proyect 1',
            description: 'descripción 1',
            startDate: '15-07-2024',
            endDate: '20-07-2024',
            consortiumId: consortiumsFromDB[0].id,
            active: true,
        },
    ]

    const insertedProjects:any = await ProjectModel.bulkCreate(projects);
    
    console.log(insertedProjects);


    // Minutes
    const minutes = [
        {
            date: '01-07-2024',
            title: 'Acta 1',
            text: 'texto del acta 1',
            consortiumId: consortiumsFromDB[0].id,
            active: true,
        },
    ]

    const insertedMinutes:any = await MinuteModel.bulkCreate(minutes);
    
    console.log(insertedMinutes);

};

export default dataBase;
