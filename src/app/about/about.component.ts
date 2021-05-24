import { Component, OnInit, Self, Optional, SkipSelf, Host } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
