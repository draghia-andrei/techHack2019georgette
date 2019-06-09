import { Component, OnInit, ViewChild } from '@angular/core';
import { Rule } from 'src/app/models/rule';
import { RulesService } from 'src/app/services/rules.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  title = "Manage your rules";
  displayedColumns: string[] = ['index', 'code', 'description', 'score', 'isActive', 'actions'];
  dataSource: any;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  public evaluatedPersons: Rule[];

  constructor(private rulesService: RulesService) {
  }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.rulesService.get());
    this.dataSource.sort = this.sort;
  }
}
