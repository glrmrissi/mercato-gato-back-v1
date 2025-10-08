import { Module } from '@nestjs/common';
import { WatchlistService } from './watchlist.service';
import { WatchlistController } from './watchlist.controller';
import { Watchlist } from './entities/watchlist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [WatchlistController],
  providers: [WatchlistService],
  imports: [TypeOrmModule.forFeature([Watchlist])],
})
export class WatchlistModule {}
