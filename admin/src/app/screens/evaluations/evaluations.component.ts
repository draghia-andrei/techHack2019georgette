import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { EvaluatedPersonsService } from 'src/app/services/evaluated-persons.service';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  public title = "Evaluations";
  public evaluatedPersons: Person[];

  constructor(private evaluatedPersonsService: EvaluatedPersonsService) {
  }

  public ngOnInit(): void {
    this.evaluatedPersons = this.evaluatedPersonsService.get();
  }

}
