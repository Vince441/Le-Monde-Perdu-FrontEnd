export interface UserDto {
    idUser: string;
    email : string;
    password : string;
    pseudo?: string;
    genre?: string;
    role : Role;
}


export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN'
}