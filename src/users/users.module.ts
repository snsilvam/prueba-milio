import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { UserProviders } from "./users.providers";
import { UserService } from "./users.service";

@Module({
    imports: [DatabaseModule],
    providers: [
      ...UserProviders,
      UserService,
    ],
  })
export class UsersModule {}