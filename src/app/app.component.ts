import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {
    const path = this.activatedRoute.snapshot.queryParams['path'];
    console.log('path ->', path);
    const navigateTo = '/' + path;

    if (path) {
      this.router.navigate([navigateTo]);
    }
  }


}
