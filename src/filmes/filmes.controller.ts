import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { FilmesService } from './filmes.service';
import { Filme } from './filme.entity';

@Controller('filmes')
export class FilmesController {
    constructor(private readonly filmesService: FilmesService) {}

    @Get()
    async findAll(): Promise<Filme[]> {
       return await this.filmesService.findall();
    }

    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Filme>{
      const filme = await this.filmesService.findOne(id);
      if(!filme) {
        throw new Error('Filme not found');
      } else { 
        return filme; 
      }
    }

    @Post()
    async create(@Body() filme: Filme): Promise<Filme> {
        return await this.filmesService.create(filme);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() filme: Filme): Promise<Filme> {
        return this.filmesService.update(id, filme)
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        const filme = await this.filmesService.findOne(id);
        if (!filme) {
            throw new Error('Filme not found');
        }
        return this.filmesService.delete(id);
    }
}
