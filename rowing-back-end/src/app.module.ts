import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { EntrainementsModule } from './entrainements/entrainements.module';
import { CategoriesModule } from './categories/categories.module';



@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'rowing',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        UsersModule,
        RolesModule,
        EntrainementsModule,
        CategoriesModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {

}
