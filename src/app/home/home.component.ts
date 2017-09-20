import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    const path = this.activatedRoute.snapshot.queryParams['path'];

    console.log(path);
  }

}
