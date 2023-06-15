import { Users } from "./usersModel.entity";
import { DataSource } from 'typeorm';

export const UserProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
        inject: ['DATA_SOURCE'],
      },
];