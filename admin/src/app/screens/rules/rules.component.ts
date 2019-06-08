import { Component, OnInit } from '@angular/core';
import { Rule } from 'src/app/models/rule';
import { RulesService } from 'src/app/services/rules.service';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {
  title = "Manage your rules";
  public rules: Rule[];

  constructor(private rulesService: RulesService) {
  }

  public ngOnInit(): void {
    this.rules = this.rulesService.get();
  }

}
