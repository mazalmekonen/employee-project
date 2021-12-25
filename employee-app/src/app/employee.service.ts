import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from './list-employees';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  //getEmployees(): Employee[] {
  //return EMPLOYEES;
  //employees: Employee[] = [];

  //}

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  
  getEmployees(): Observable<Employee[]> {
    //const employees = of(EMPLOYEES);
    this.messageService.add('Employee Service message: all employees were updated!');
    //return employees;
    return this.http.get<Employee[]>(this.employeesUrl)
      .pipe(
        tap(_ => this.log('fetched employees')),
        catchError(this.handleError<Employee[]>('getEmployees', []))
        );
    }
    private log(message: string) {
      this.messageService.add(`Employee Service message: ${message}`);
    }

    private employeesUrl = 'api/employees';  // URL to web api
    
    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    getEmployee(id: number): Observable<Employee> {   
      //const employee = EMPLOYEES.find(h => h.id === id)!;
       //return of(employee);
      this.messageService.add(`Employee Service: fetched employee id=${id}`);
      const url = `${this.employeesUrl}/${id}`; //get url of employee
      return this.http.get<Employee>(url).pipe(
        tap(_ => this.log(`fetched employee id=${id}`)),
        catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
     
    }         
  
    updateEmployee(employee: Employee): Observable<any> {
      return this.http.put(this.employeesUrl, employee, this.httpOptions).pipe(
        tap(_ => this.log(`updated employee id=${employee.id}`)),
        catchError(this.handleError<any>('updateEmployee'))
      );
    }

    httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    addEmployee(employee: Employee): Observable<Employee> {
      return this.http.post<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
        tap((newEmployee: Employee) => this.log(`added Employee w/ id=${newEmployee.id}`)),
        catchError(this.handleError<Employee>('addEmployee'))
      );
    }

    deleteEmployee(id: number): Observable<Employee> {
      const url = `${this.employeesUrl}/${id}`;
    
      return this.http.delete<Employee>(url, this.httpOptions).pipe(
        tap(_ => this.log(`deleted Employee id=${id}`)),
        catchError(this.handleError<Employee>('deleteEmployee'))
      );
    }

    searchEmployees(term: string): Observable<Employee[]> {
      if (!term.trim()) {
        // if not search term, return empty employee array.
        return of([]);
      }
      return this.http.get<Employee[]>(`${this.employeesUrl}/?fname=${term}`).pipe(
        tap(x => x.length ?
           this.log(`found Employees matching "${term}"`) :
           this.log(`no Employees matching "${term}"`)),
        catchError(this.handleError<Employee[]>('searchEmployees', []))
      );
    }
}
