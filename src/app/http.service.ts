import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  posts: any;
  post: any;

  constructor(private http: HttpClient) { 

  }

/*   getData(): Observable<any[]>{
    const url = 'https://tv8.md/wp-json/wp/v2/posts?_embed&per_page=18';
    const url1 = 'https://tv8.md/wp-json/wp/v2/posts';

    let response = this.http.get<any[]>(url)
    let response1 = this.http.get<any[]>(url1);
    return forkJoin([response, response1]);} */
  
    public getPosts(): Observable<any> {
      return new Observable<any>(observer => {
          this.loadPosts().subscribe(response => {
                  if (response) {
                      this.posts = response;
                      observer.next(this.posts);
                      observer.complete();
                  } else {
                      observer.error(response);   
                  }
              },
              error => {
                observer.error(error);
              }
          )
      });
  }

loadPosts(): Observable<any[]> {
  let url = "https://tv8.md/wp-json/wp/v2/posts?_embed&per_page=72&fields=categories, title, source_url, date, name";
  return this.http.get<any[]>(url);
}





public getPost(slug: string): Observable<any[]> {
  return new Observable<any[]>(observer => {
      this.loadPost(slug).subscribe(response => {
              if (response) {
                  this.post = response[0];
                  observer.next(this.post);
                  observer.complete();
              } else {
                  observer.error(response);   
              }
          },
          error => {
              observer.error(error);
          }
      )
  });
}
loadPost(slug: string): Observable<any[]>{
  let url = "https://tv8.md/wp-json/wp/v2/posts?_embed&&slug=" + slug;
  return this.http.get<any[]>(url);
}
}
