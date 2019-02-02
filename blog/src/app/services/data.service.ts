import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items = [
    {
      id: 1,
      image: 'http://brandz.com/admin/uploads/brands/Google.png',
      text: 'Google'
    },
    {
      id: 2,
      image: 'http://brandz.com/admin/uploads/brands/2_Apple.png',
      text: 'Apple'
    },
    {
      id: 3,
      image: 'https://pngimg.com/uploads/amazon/amazon_PNG13.png',
      text: 'Amazon'
    }, 
    {
      id: 4,
      image: 'http://brandz.com/admin/uploads/brands/4_Microsoft.png',
      text: 'Microsoft'
    }, 
    {
      id: 5,
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


  getAll(){
    return this.items;
  }

  getById(id){
    return this.items[id];
  }
}
