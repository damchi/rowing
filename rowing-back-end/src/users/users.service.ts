import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Users} from "./users.entity";
import { UpdateResult, DeleteResult } from  'typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
    ) { }

    async  findAll(): Promise<Users[]> {
        return await this.userRepository.find();
    }

    async  create(user: Users): Promise<Users> {
        return await this.userRepository.save(user);
    }

    async update(user: Users): Promise<UpdateResult> {
        return await this.userRepository.update(user.id, user);
    }

    async delete(id): Promise<DeleteResult> {
        return await this.userRepository.delete(id);
    }
}
