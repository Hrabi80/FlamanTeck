import { Component, OnInit } from '@angular/core';
interface Country {
  name: string;
  flag: string;
  mail: string;
  tel: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'client1',
    flag: 'f/f3/Flag_of_Russia.svg',
    mail: "client1@gmail.com",
    tel: +21627797794
  },
  {
    name: 'client2',
    flag: 'c/cf/Flag_of_Canada.svg',
    mail: "client1@gmail.com",
    tel: 21627797794
  },
  {
    name: 'client3',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    mail: "client1@gmail.com",
    tel: 21627797794
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    mail: "client1@gmail.com",
    tel: 1409517397
  }
];
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  countries = COUNTRIES;
  constructor() { }

  ngOnInit(): void {
  }

}
