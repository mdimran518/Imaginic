import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    private apiUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) { }

    // Test connection to the server
    testConnection(): Observable<any> {
        return this.http.get<any>(`${this.apiUrl}/test`).pipe(
            catchError(this.handleError)
        );
    }

    askGemini(query: string): Observable<any> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });

        const body = { query: query };

        return this.http.post<any>(`${this.apiUrl}/ask-gemini`, body, {
            headers: headers
        }).pipe(
            timeout(30000), // 30 second timeout
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse): Observable<never> {
        let errorMessage = 'An unknown error occurred';

        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Client Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Server Error Code: ${error.status}\nMessage: ${error.message}`;
        }

        console.error('ChatService Error:', errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}