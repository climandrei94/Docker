import { Module } from '@nestjs/common';
import { ToDoModule } from './to-do/to-do.module';

@Module({
  imports: [ToDoModule],
  providers: [],
})
export class AppModule {}
