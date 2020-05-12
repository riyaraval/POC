import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'search'
})
@Injectable({
  providedIn:'root'
})
export class SearchPipe implements PipeTransform {

  transform(items:any , idname, supplier, category): any[] {
    if(!items){
      return [];
    }
    if(!idname && !supplier && !category){
      return items;
    }
    return items.filter(item => {
      if(idname && !supplier && !category){
        if(isNaN(idname)){
          if(item['name'].toString().toLowerCase().includes(idname.toLowerCase()) ) {
            return items
            }
          } else if(item['id'].toString().toLowerCase().includes(idname.toLowerCase()) ) {
          return items
          }
      } 
      if(!idname && supplier && !category) {
        if(item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase()) ) {
          return items
          }
      }
      if(!idname && !supplier && category){
        if(item['category'].toString().toLowerCase().includes(category.toLowerCase()) ) {
          return items
          }
      }
      if(idname && supplier && !category){
        if(isNaN(idname)){
          if(
            item['name'].toString().toLowerCase().includes(idname.toLowerCase()) &&
            item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase())
            ) {
            return items
            }
          } else if(
          item['id'].toString().toLowerCase().includes(idname.toLowerCase()) &&
          item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase())
          ) {
          return items
          }
      }
      if(idname && !supplier && category){
        if(isNaN(idname)){
          if(
            item['name'].toString().toLowerCase().includes(idname.toLowerCase())  &&
            item['category'].toString().toLowerCase().includes(category.toLowerCase())
            ) {
            return items
            }
          } else if(
          item['id'].toString().toLowerCase().includes(idname.toLowerCase()) &&
          item['category'].toString().toLowerCase().includes(category.toLowerCase())
          ) {
          return items
          } 
      }
      if(!idname && supplier && category){
        if(
          item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase()) &&
          item['category'].toString().toLowerCase().includes(category.toLowerCase())
          ) {
          return items
          }   
      }
      if(idname && supplier && category){
        if(isNaN(idname)){
          // return (String(item['name']).toLowerCase()).includes(String(idname).toLowerCase()) ? true:(item['supplier']).toLowerCase().includes(String(supplier).toLowerCase())? true :(String(item['category']).toLowerCase()).includes(String(category).toLowerCase()) ? true : false;
          if(
            item['name'].toString().toLowerCase().includes(idname.toLowerCase()) &&
            item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase()) &&
            item['category'].toString().toLowerCase().includes(category.toLowerCase())
            ) {
            return items
            }
          } else if(
          item['id'].toString().toLowerCase().includes(idname.toLowerCase()) &&
          item['supplier'].toString().toLowerCase().includes(supplier.toLowerCase()) &&
          item['category'].toString().toLowerCase().includes(category.toLowerCase())
          ) {
          return items
          }
      }
    });
  }

}
