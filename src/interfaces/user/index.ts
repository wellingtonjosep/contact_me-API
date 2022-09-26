export interface IUser {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IUserUpdate extends IUser {
  id: string;
}

export interface IErrors {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
}
