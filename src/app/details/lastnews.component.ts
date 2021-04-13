import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HttpService } from '../http.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lastnews',
  templateUrl: './lastnews.component.html',
  styleUrls: ['./lastnews.component.scss']
})


export class LastnewsComponent implements OnInit {


  activeRoute:any;
  route:any;
  post: any;
  sanitizePost;
  public slug: string = "";
  safeSrc;
  displayURL;
  constructor(private http: HttpService, private router: Router, private sanitizer: DomSanitizer) {
   // this.safeSrc =  sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/watch?v=_Y5VScoq3ZY&ab_channel=TV8"); 
    //this.displayURL = sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/watch?v=0G383538qzQ&list=RD0G383538qzQ&start_radio=1&ab_channel=BlackPumasVEVO');
    
  }



  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  loadPost(slug) {
    this.http.getPost(this.slug).subscribe(
        response => {
            this.post = response;
            this.sanitizePost = this.sanitizer.bypassSecurityTrustResourceUrl(this.post);
            console.log(this.sanitizePost);
        }
    )
}

  ngOnInit(): void {
    this.slug = this.router.url;
    this.loadPost(this.slug)
}

 /*  getPost(){
    this.http.getData().subscribe(dataList => {
      this.singlePost = dataList[1];
      console.log(this.singlePost);
    });
  } */
}
