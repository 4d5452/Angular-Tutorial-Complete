import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
      { id: 1, type: 'TV' },
      { id: 2, type: 'Remote' },
      { id: 3, type: 'Keyboard' },
      { id: 4, type: 'Controller' },
      { id: 5, type: 'Laptop' },
      { id: 6, type: 'Watch' }
    ];
    return {items};
  }
}