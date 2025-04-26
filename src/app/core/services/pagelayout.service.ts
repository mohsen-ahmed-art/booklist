import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pagelayout } from '../Enums/pagelayout';
import path from 'node:path/win32';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PagelayoutService {
public layoutSubject= new Subject<Pagelayout>();

layoutes$ = this.layoutSubject.asObservable();

setLayout(value:Pagelayout){
this.layoutSubject.next(value);
}

constructor(){}

}
