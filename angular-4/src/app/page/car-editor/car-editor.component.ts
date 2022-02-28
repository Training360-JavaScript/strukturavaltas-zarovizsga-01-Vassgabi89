import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car!: Car

  constructor(
    private ar: ActivatedRoute,
    private cService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.ar.params.subscribe(param => {
      this.cService.get(param['id']).forEach(car => {
        this.car = car
      })
    })
  }

  onSubmit(car = this.car): void {
      const data = this.cService.update(car).subscribe(
        //datas => console.log(datas)
      )
      this.router.navigateByUrl('car')
    }

}
