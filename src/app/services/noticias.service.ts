import { Injectable } from '@angular/core';
import  { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadLines()
  {
    return (this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/everything?q=apple&from=2022-10-24&to=2022-10-24&sortBy=popularity&apiKey=86c19702c9e24af9888bcb56c23e1ee5'));
  }

}
