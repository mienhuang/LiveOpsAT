import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { } from 'rxjs/operators';


@Injectable()
export class MessageService {
    private messageSubject = new Subject();
    public message$ = this.messageSubject.asObservable();
    constructor() { }

    public sendMessage = (message: string, action = '') => {
        this.messageSubject.next({ message, action });
    }
}