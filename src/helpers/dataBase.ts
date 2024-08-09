import { ConsortiumModel } from "../models/ConsortiumModel";
import { MinuteModel } from "../models/MinuteModel";
import { ProjectModel } from "../models/ProjectModel";
import { UserModel } from "../models/UserModel";
import { ConsortiumUserModel } from "../models/ConsortiumUserModel";
import bcrypt from 'bcrypt';
import { AdvertisingModel } from "../models/AdvertisingModel";

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



    // Advertisings
    const advertisings = [
        {
            title: 'Oferta 1',
            description: 'Descripción 1',
            price: '1000',
            images: "https://www.cocinacaserayfacil.net/wp-content/uploads/2020/03/Recetas-faciles-de-cocinar-y-sobrevivir-en-casa-al-coronavirus_2.jpg",
        },
        {
            title: 'Oferta 2',
            description: 'Descripción 2',
            price: '2000',
            images: "https://www.penaestrada.blog.br/wp-content/uploads/2020/12/IMG_9595.jpg",
        },
        {
            title: 'Oferta 3',
            description: 'Descripción 3',
            price: '3000',
            images: "https://static.itdg.com.br/images/1200-630/d042c867d621701a4633d37f9d873bc8/receitas-de-comidas-italianas.jpg",
        },
        {
            title: 'Oferta 4',
            description: 'Descripción 4',
            price: '4000',
            images: "https://conteudo.imguol.com.br/c/entretenimento/57/2023/05/05/o-tradicional-bauru-do-ponto-chic-em-sao-paulo-1683321900395_v2_1170x540.jpg",
        },
        {
            title: 'Oferta 5',
            description: 'Descripción 5',
            price: '5000',
            images: "https://fotografias.larazon.es/clipping/cmsimages01/2023/11/16/080445F5-DC20-409E-A8B9-498C90C12C90/dieta-mexicana-reduce-inflamacion-colesterol-malo-debido-sus-componentes_98.jpg?crop=1280,720,x0,y0&width=1900&height=1069&optimize=low&format=webply",
        },
        {
            title: 'Oferta 6',
            description: 'Descripción 6',
            price: '6000',
            images: "https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg",
        },
    ]

    const insertedAdvertisings:any = await AdvertisingModel.bulkCreate(advertisings);
    
    console.log(insertedAdvertisings);

};

export default dataBase;
