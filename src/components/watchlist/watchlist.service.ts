import { Injectable } from '@nestjs/common';
import { CreateWatchlistDto } from './dto/create-watchlist.dto';
import { UpdateWatchlistDto } from './dto/update-watchlist.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Watchlist } from './entities/watchlist.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WatchlistService {

  constructor(
    @InjectRepository(Watchlist)
    private watchlistRepository: Repository<Watchlist>
  ) { }

  async create(createWatchlistDto: CreateWatchlistDto[]): Promise<Watchlist[]> {
    const watchlist = this.watchlistRepository.create(createWatchlistDto);
    return await this.watchlistRepository.save(watchlist);
  }

  findAll() {
    return this.watchlistRepository.find();
  }

  findOne(id: number) {
    return this.watchlistRepository.findOneBy({ id });
  }

  update(id: number, updateWatchlistDto: UpdateWatchlistDto) {
    return this.watchlistRepository.update(id, updateWatchlistDto);
  }

  remove(id: number) {
    return this.watchlistRepository.delete(id);
  }
}
