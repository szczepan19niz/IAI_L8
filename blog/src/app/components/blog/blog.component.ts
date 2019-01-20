import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input() filterText: string;

  items = [
    {
      image: 'http://brandz.com/admin/uploads/brands/Google.png',
      text: 'Google'
    },
    {
      image: 'http://brandz.com/admin/uploads/brands/2_Apple.png',
      text: 'Apple'
    },
    {
      image: 'https://pngimg.com/uploads/amazon/amazon_PNG13.png',
      text: 'Amazon'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/4_Microsoft.png',
      text: 'Microsoft'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/14_Tencent.png',
      text: 'Tencent'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/Facebook.png',
      text: 'Facebook'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/7_Visa.png',
      text: 'Visa'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/McDonalds.png',
      text: 'McDonald'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/Alibaba.png',
      text: 'Alibaba'
    }, 
    {
      image: 'http://brandz.com/admin/uploads/brands/8_ATandT.png',
      text: 'AT&T'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

}