import { Component, OnInit, ViewChild } from '@angular/core';
import { Person } from 'src/app/models/person';
import { EvaluatedPersonsService } from 'src/app/services/evaluated-persons.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-evaluations',
  templateUrl: './evaluations.component.html',
  styleUrls: ['./evaluations.component.css']
})
export class EvaluationsComponent implements OnInit {
  public title = "Evaluated Persons";
  displayedColumns: string[] = ['index', 'id', 'rules', 'score', 'evaluatedTime'];
  dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public evaluatedPersons: Person[];

  constructor(private evaluatedPersonsService: EvaluatedPersonsService) {
  }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.evaluatedPersonsService.get());
    this.dataSource.sort = this.sort;
  }
}
