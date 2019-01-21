import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public items = [
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


  getAll(){
    return this.items;
  }

  getById(id){
    return this.items[id];
  }
}
