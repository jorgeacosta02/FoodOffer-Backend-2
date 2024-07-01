import { ConsortiumModel } from "../models/ConsortiumModel";
import { MinuteModel } from "../models/MinuteModel";
import { ProjectModel } from "../models/ProjectModel";
import { UserModel } from "../models/UserModel";
import bcrypt from 'bcrypt';

const dataBase = async () => {

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


    // Consortiums
    const consortiums = [
        {
            name: 'c1',
            address: 'address1',
            active: true,
        },
    ]

    const insertedConsortiums:any = await ConsortiumModel.bulkCreate(consortiums);

    console.log(insertedConsortiums);

    const consortiumsFromDB:any = await ConsortiumModel.findAll();


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

    // const insertedMinutes:any = await MinuteModel.bulkCreate(minutes);
    
    // console.log(insertedMinutes);

};

export default dataBase;
