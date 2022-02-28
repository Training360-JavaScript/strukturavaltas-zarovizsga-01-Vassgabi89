import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  car!: Car

  //próbáltam átírni reaktívra, mert nem ment át a teszten, de már nicns időm
  carFormGroup: FormGroup = new FormGroup({
    ID: new FormControl(''),
    model: new FormControl('', [Validators.required, Validators.pattern('^[A-Z0-9][a-zA-Z0-9 ]{1,14}$')]),
    make: new FormControl('', [Validators.required, Validators.pattern('[A-Z][a-zA-Z]{2,19}')]),
    year: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    price: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    stock: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)])
  })


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
