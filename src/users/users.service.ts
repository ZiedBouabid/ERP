import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Not, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  findOne(username: string) {
    throw new Error('Method not implemented.');
  }
  update(_id: string, arg1: { password: void; }) {
    throw new Error('Method not implemented.');
  }
  hashPassword(password: string) {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}
  async getUsers(user: User): Promise<User[]> {
    return await this.usersRepository.find();
  }
  async findOneByEmail(email): Promise<User> {
    return await this.usersRepository.findOne({ where: { email } });
  }
  async createUser(user: User): Promise<User> {
    
    //return this.usersRepository.create(user);
    console.log(user.id);
    return this.usersRepository.save(user);
  }

  async getUser(_id: number): Promise<User[]> {
    return await this.usersRepository.find({
      select: ['id', 'email', 'password'],
      where: [{ id: _id }],
    });
  }
  async updateUser(user: User) {
    this.usersRepository.save(user);
  }
   
  async getChplns(): Promise<User[]> {
    return await this.usersRepository.find({
      where: {
        secondeRole:Not('') ,
    },
    });
  }

}
