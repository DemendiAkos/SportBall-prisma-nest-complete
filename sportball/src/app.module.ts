import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlayerModule } from './player/player.module';
import { TeamModule } from './team/team.module';

@Module({
  imports: [PlayerModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
