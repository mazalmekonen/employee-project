import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const employees = [
      { id: 12768733, fname: 'John', lname: 'Tucker', dateofbirth: '31/12/77', salary: 5400, email: 'john@gmail.com'  },
      { id: 12768734, fname: 'Adi', lname: 'Ashkenazi', dateofbirth: '30/11/79', salary: 6400, email: 'adi@gmail.com' },
      { id: 12768735, fname: 'Zion', lname: 'Turgeman', dateofbirth: '4/11/73', salary: 5600, email: 'zion@gmail.com' },
      { id: 12768736, fname: 'Paul', lname: 'Rudd', dateofbirth: '6/1/80', salary: 5600, email: 'paul@gmail.com' },
      { id: 12768737, fname: 'Maggi', lname: 'Berko', dateofbirth: '30/6/56', salary: 10400, email: 'maggib@gmail.com' },
      { id: 12768738, fname: 'Ruth', lname: 'Glik', dateofbirth: '30/7/59', salary: 7300, email: 'glick23@gmail.com' },
      { id: 12768739, fname: 'David', lname: 'Duhov', dateofbirth: '1/1/88', salary: 7200, email: 'david@gmail.com'},
      { id: 12768740, fname: 'Meir', lname: 'Alul', dateofbirth: '1/12/87', salary: 3400, email: 'meir@gmail.com' },
      { id: 12768741, fname: 'Mor', lname: 'Sharon', dateofbirth: '11/10/88', salary: 5600, email: 'morsharon@gmail.com' },
      { id: 12768742, fname: 'Tim', lname: 'Dodge', dateofbirth: '1/5/97', salary: 7400, email: 'tim@gmail.com' },
      { id: 12768743, fname: 'Noam', lname: 'Tor', dateofbirth: '8/3/90', salary: 5400, email: 'noam1234@gmail.com' }
    ];
    return {employees};
  }

  
  genId(employees: Employee[]): number {
    return employees.length > 0 ? Math.max(...employees.map(employee => employee.id)) + 1 : 12768733;
  }
}