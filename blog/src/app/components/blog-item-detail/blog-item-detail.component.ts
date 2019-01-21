import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-item-detail',
  templateUrl: './blog-item-detail.component.html',
  styleUrls: ['./blog-item-detail.component.css']
})
export class BlogItemDetailComponent implements OnInit {
  
  image = 'http://brandz.com/admin/uploads/brands/Google.png';
  text = 'Google info??';

  public item;
  public id;
  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
      this.getId();
      this.item = this.dataService.getById(this.id);
  }

  getId() {
    this.route.queryParams.subscribe(params => {
      this.id = params['id'];
  });
  }

}
