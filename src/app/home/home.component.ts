import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { RandomService } from '../random.service';

const serviceFactory = () => {
  if (true) {
    return new RandomService()
  } else {
    return new MyServiceService();
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private myService: MyServiceService) { }

  ngOnInit(): void {
    this.myService.log();
  }

}
