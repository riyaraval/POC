import { Component, OnInit } from '@angular/core';
import { TestService } from '../services/test.service';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';
import {filter, map} from 'rxjs/operators'
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  state$
  constructor(private test:TestService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    // this.state$ =  this.router.events.pipe(
    //   filter(e => e instanceof NavigationStart),
    //   map(() => this.router.getCurrentNavigation().extras.state.userid)
    // )
    this.state$ = this.activatedRoute.paramMap
      .pipe(map(() => this.test.test.next(window.history.state.userid)))

      this.test.test.subscribe(data=>console.log(data))
  }

}
