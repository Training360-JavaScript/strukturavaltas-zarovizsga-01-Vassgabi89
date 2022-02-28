import { Construction } from 'src/app/model/construction';
import { Component } from '@angular/core';
import { ConstructionService } from './service/construction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-3';

  constructionKeys = Object.keys(new Construction())
  constructionList$ = this.cService.getAll()

  constructor(
    private cService: ConstructionService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onDelete(construction: Construction): void {
    if (!confirm('Are you sure')) return
    this.cService.delete(construction.id).subscribe(
      data => {
        //console.log(data)
        location.reload()
      }
    )
  }

}
