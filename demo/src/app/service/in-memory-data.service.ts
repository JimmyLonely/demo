import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService{
  createDb(): any{
    const studentes = [
      { id: 0,  name: '学生1', age: 12 },
      { id: 11,  name: '学生2', age: 13 },
      { id: 23,  name: '学生3', age: 21 },
      { id: 3,  name: '学生4', age: 15 },
      { id: 4,  name: '学生5', age: 25 }
    ];

    return {studentes};
  }
}