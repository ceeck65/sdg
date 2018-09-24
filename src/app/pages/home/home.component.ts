import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../../_models/users';
import { UsersServicesService } from '../../_services/users/users-services.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['Nombre', 'Apellido', 'Edad', 'Generero'];
  users: User[] = [];
  totalMembers: any = 0;
  totalMale = 0;
  totalFemale = 0;
  totalNew = 0;
  dataSource: any;
  constructor(private userService: UsersServicesService) { }

  ngOnInit() {
    this.userService.getUsers().pipe(first()).subscribe(users => {
      this.users = users;
      this.dataSource = users;
    });
    this.totalMember();
  }

  totalMember() {
    this.userService.getUsers().pipe(first()).subscribe(users => {
      this.users = users;
      this.totalMembers = this.users.length;
      this.users.forEach(user => {
        if (user.gender === 1) {
          this.totalMale = this.totalMale + 1;
        }

        if (user.gender === 2) {
          this.totalFemale = this.totalFemale + 1;
        }

      });
    });
  }

  totalFamele() {
    this.userService.getUsers().pipe(first()).subscribe(users => {
      this.users = users;
      console.log(this.users);
    });
  }



}
