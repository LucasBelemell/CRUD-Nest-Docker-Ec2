import { Module } from '@nestjs/common';
import { FilmesController } from './filmes.controller';
import { FilmesService } from './filmes.service';
import { Filme } from './filme.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([Filme])],
  controllers: [FilmesController],
  providers: [FilmesService]
})
export class FilmesModule {}
