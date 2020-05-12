import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  
  constructor(
    // private http: HttpClient,
    // private router: Router,
    private angularFireDatabase: AngularFireDatabase
  ) { }

  getProductList():Observable<IProduct[]> {
    return this.angularFireDatabase.list<IProduct>('/products',ref=>ref.orderByChild('id')).valueChanges()
  }

  addProduct(product){
    this.angularFireDatabase.object('/products/' + (product.id - 1)).set(product)
  }

  updateProduct(product){
    this.angularFireDatabase.object('/products/'+(product.id-1)).set(product)
  }
}
