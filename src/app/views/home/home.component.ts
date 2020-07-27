import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  operations: string[] = ['Create', 'Read', 'Update', 'Delete']

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Home',
      icon: 'home',
      routeUrl: '/'
    }
  }

  ngOnInit(): void {
  }

}
