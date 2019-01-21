import {Component, Input, OnInit} from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() filterText: string;

  public items;

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.items = this.dataService.getAll();
  }

}