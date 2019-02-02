import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {

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
  }
}

