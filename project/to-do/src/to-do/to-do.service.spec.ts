import { Test, TestingModule } from '@nestjs/testing';
import { ToDoService } from './to-do.service';

describe('ToDoService', () => {
  let service: ToDoService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ToDoService],
    }).compile();

    service = module.get<ToDoService>(ToDoService);
  });

  beforeEach(() => {
    /*
      This is used only to reset the private constant from the
      class so that tests would not influence each other.
    */
    service['toDoDatabase'] = {};
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should return create to do', () => {
    const createToDoInput = { name: 'test', description: 'test' };

    const expectedResult = { name: 'test', description: 'test' };

    const result = service.create(createToDoInput);

    expect(result).toEqual(expectedResult);
  });

  it('Should not be able to create another to do with the same name', () => {
    const createToDoInput = { name: 'test', description: 'test' };
    service['toDoDatabase'] = { [createToDoInput.name]: createToDoInput };

    const expectedResult = new Error('Resource already exists');

    expect(() => {
      service.create(createToDoInput);
    }).toThrow(expectedResult);
  });

  it('Should return the to do list formatted', () => {
    const toDo = { name: 'test', description: 'test' };
    service['toDoDatabase'] = { [toDo.name]: toDo };

    const expectedResult = [toDo];

    const result = service.findAll();

    expect(result).toEqual(expectedResult);
  });

  it('Should return only the requested to do by it is name', () => {
    const inputName = 'test';
    const toDo = { name: inputName, description: 'test' };
    service['toDoDatabase'] = { [toDo.name]: toDo };

    const expectedResult = toDo;

    const result = service.findOne(inputName);

    expect(result).toEqual(expectedResult);
  });

  it('Should update to do by it is name', () => {
    const inputName = 'test';
    const toDoToUpdate = { name: inputName, description: 'my test' };
    const toDo = { name: inputName, description: 'test' };
    service['toDoDatabase'] = { [toDo.name]: toDo };

    const expectedResult = { name: inputName, description: 'my test' };

    const result = service.update(inputName, toDoToUpdate);

    expect(result).toEqual(expectedResult);
  });

  it('Should update to do by it is name', () => {
    const inputName = 'test';
    const toDo = { name: inputName, description: 'test' };
    service['toDoDatabase'] = { [toDo.name]: toDo };

    const expectedResult = toDo;
    const expectedDatabaseContent = {};

    const result = service.remove(inputName);

    expect(result).toEqual(expectedResult);
    expect(service['toDoDatabase']).toEqual(expectedDatabaseContent);
  });
});
