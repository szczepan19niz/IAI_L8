import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-text',
  templateUrl: './blog-item-text.component.html',
  styleUrls: ['./blog-item-text.component.css']
})
export class BlogItemTextComponent implements OnInit {

  @Input() text: string;
  item: any;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;

    this.route.paramMap.subscribe(params => {
      id = params.get('id');
      });
      if (id) {
        this.item = this.dataService.getById(id);
        }
       else {
        this.item = 1;
      }

}}
