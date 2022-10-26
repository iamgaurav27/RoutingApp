import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  routes: ActivatedRoute | null | undefined;

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
  }
  

}
