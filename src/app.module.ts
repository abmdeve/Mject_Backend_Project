import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormationModule } from './formation/formation.module';
import { RoleModule } from './role/role.module';
import { StatusModule } from './status/status.module';
import { UsersModule } from './users/users.module';
import { NewsModule } from './news/news.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [FormationModule, RoleModule, StatusModule, UsersModule, NewsModule, ServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
