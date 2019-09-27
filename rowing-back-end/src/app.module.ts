import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { EntrainementsModule } from './entrainements/entrainements.module';
import { CategoriesModule } from './categories/categories.module';
import {APP_INTERCEPTOR} from '@nestjs/core';
import {DataInterceptor} from './util/data.interceptor';
import { ExercicesModule } from './exercices/exercices.module';
import { TypeExercicesModule } from './type-exercices/type-exercices.module';
import { SeasonModule } from './season/season.module';


@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'etcsoft',
            database: 'rowing',
            entities: [__dirname + '/**/*.entity{.ts,.js}'],
            synchronize: true,
        }),
        UsersModule,
        RolesModule,
        EntrainementsModule,
        CategoriesModule,
        ExercicesModule,
        TypeExercicesModule,
        SeasonModule],
    controllers: [AppController],
    providers: [AppService, {
        provide: APP_INTERCEPTOR,
        useClass: DataInterceptor,
    }],
})
export class AppModule {

}
