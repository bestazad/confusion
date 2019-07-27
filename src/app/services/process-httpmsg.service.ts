import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { throwError } from 'rxjs';

@Injectable() export class ProcessHTTPMsgService {

    constructor() { }
    
    public extractData(res: HttpResponse<any> | any) { 
        let body = res//.json(); 
        return body || { }; 
    }
    
    public handleError (error: HttpResponse<any> | any) { 
        // In a real world app, you might use a remote logging infrastructure 
        let errMsg: string; 
        if (error instanceof HttpResponse) { 
            const body = error//.json() || ''; 
            const err = body//.error || JSON.stringify(body); 
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`; 
        } 
        else { 
            errMsg = error.message ? error.message : error.toString(); 
        }
    return throwError(errMsg);
    
    }
}