import { Injectable } from '@nestjs/common';

import { LoggerService } from '../logger/logger.service';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly carsService: PostsService,
    private readonly logger: LoggerService,
  ) {}

  public async create(): Promise<any> {
    this.carsService.create({});
    this.logger.log('This is a test message');
    throw new Error('This is a test error');
    return 'This action adds a new user';
  }

  public async findAll(): Promise<any> {
    return `This action returns all users`;
  }

  public async findMe(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }

  public async updateMe(id: number): Promise<any> {
    return `This action updates a #${id} user`;
  }

  public async removeMe(id: number): Promise<any> {
    return `This action removes a #${id} user`;
  }

  public async findOne(id: number): Promise<any> {
    return `This action returns a #${id} user`;
  }
}
