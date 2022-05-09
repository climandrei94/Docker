import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ToDoService } from './to-do.service';
import { ToDoDto } from './dto/to-do.dto';

@Controller('to-do')
export class ToDoController {
  constructor(private readonly toDoService: ToDoService) {}

  @Post()
  create(@Body() createToDoDto: ToDoDto) {
    return this.toDoService.create(createToDoDto);
  }

  @Get()
  findAll() {
    return this.toDoService.findAll();
  }

  @Get(':toDoName')
  findOne(@Param('toDoName') toDoName: string) {
    return this.toDoService.findOne(toDoName);
  }

  @Put(':toDoName')
  update(@Param('toDoName') toDoName: string, @Body() updateToDoDto: ToDoDto) {
    return this.toDoService.update(toDoName, updateToDoDto);
  }

  @Delete(':toDoName')
  remove(@Param('toDoName') toDoName: string) {
    return this.toDoService.remove(toDoName);
  }
}
