import { Inject, Injectable } from "@nestjs/common";
import { Repository } from "typeorm/repository/Repository";
import { Users } from "./usersModel.entity";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<Users>,
      ) {}

      async findAll(): Promise<Users[]> {
        return this.userRepository.find();
      } 
}