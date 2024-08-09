
// Interface for saving user on db
export interface IUserData extends Document {
    id: string,
    title: string;
    description: string;
    price: string;
    attributes: string;
    image: string;
    deleteDate: string;
   
}

// Interface user from db
export interface IUserDataFromDB {
    id: string,
    title: string;
    description: string;
    price: string;
    attributes: string;
    image: string;
    deleteDate: string;
}

// Interface for register user
export interface IRegisterData {
    title: string;
    description: string;
    price: string;
    attributes: string;
    image: string;
    deleteDate: string;
}

// LOGIN
export interface ILoginData {
    dni: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    user: IUserData;
    message: string;
}

// tokenInterface 'user'
export interface ITokenUserData {
    id: string;
    title: string;
    description: string;
    price: string;
    attributes: string;
    image: string;
    deleteDate: string | boolean;
}
  