import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Filme } from './filme.entity';

@Injectable()
export class FilmesService {
    constructor(
        @InjectRepository(Filme)
        private filmesRepository: Repository<Filme>,
    ) {}

    async findall(): Promise<Filme[]> {
        return await this.filmesRepository.find();
    }

    async findOne(id: number): Promise<Filme> {
        return await this.filmesRepository.findOne({ where: { id }}); 
    } 

    async create(filme: Filme): Promise<Filme> {
        const newFilme = this.filmesRepository.create(filme);
        return await this.filmesRepository.save(newFilme);
    }
    
    async update(id: number, filme: Filme): Promise<Filme> {
        await this.filmesRepository.update(id, filme);
        return await this.filmesRepository.findOne( { where : { id } });
    }

    async delete(id: number): Promise<void> {
        await this.filmesRepository.delete(id);
    } 
}
