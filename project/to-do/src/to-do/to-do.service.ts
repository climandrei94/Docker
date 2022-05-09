import { Injectable } from '@nestjs/common';
import { ToDoDto } from './dto/to-do.dto';
import { ToDo } from './entity/to-do.entity';

@Injectable()
export class ToDoService {
  private toDoDatabase: ToDo = {};

  create(createToDoDto: ToDoDto) {
    const existingToDo = this.findOne(createToDoDto.name);
    if (existingToDo) {
      throw new Error('Resource already exists');
    }
    this.toDoDatabase[createToDoDto.name] = { ...createToDoDto };

    return createToDoDto;
  }

  findAll() {
    return Object.values(this.toDoDatabase);
  }

  findOne(toDoName: string) {
    return this.toDoDatabase[toDoName];
  }

  update(toDoName: string, updateToDoDto: ToDoDto) {
    this.toDoDatabase[toDoName] = { ...updateToDoDto };

    return this.toDoDatabase[toDoName];
  }

  remove(toDoName: string) {
    const toDoToRemove = this.toDoDatabase[toDoName];
    delete this.toDoDatabase[toDoName];

    return toDoToRemove;
  }
}
