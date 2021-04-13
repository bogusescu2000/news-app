
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { HttpService } from '../http.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})


export class HomeComponent implements OnInit {
  dataPost:any;
  pageOfItems: Array<any>;
  
  constructor(private http: HttpService, private sanitizer: DomSanitizer) { }

  totalLength:any;
  page:number = 1;
  currentPage: any;
  newData = [];
  myArray = [];

  pageSize = 10;

  ngOnInit(): void {
    /* this.getPosts(); */
    this.loadPosts();    
  }
  sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
}
  

/*   getPosts(){
    this.http.getData().subscribe(dataList =>{
      this.dataPost = dataList[0];
      console.log(this.dataPost);
    });
  } */
  

  
  onPageChange(page: number) {
    this.currentPage = page;
    window.scrollTo(0, 0);
 }

  posts: Array<any>;
   loadPosts(){
       this.http.loadPosts().subscribe(
           response => {
               this.posts = response;

               this.totalLength = response.length;
               console.log(this.posts);
           }
       );
   }
}
