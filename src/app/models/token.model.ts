import { UserDto } from "./utilisateur.model";

export interface TokenDto {
  token: string;
  userDto: UserDto;
}