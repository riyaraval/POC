import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { SearchPipe } from '../Pipes/search.pipe';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductService } from '../services/product.service';
import { IProduct } from '../models/IProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() collectionSize = 100;
  @Input() pageSize = 10;
  @Input() page = 1;
  @Input() idname;
  items: Observable<any[]>;
  productdata:IProduct[]=[];
  showdata:IProduct[];
  suppliersArray = [];
  categoriesArray = [];
  selectedSupplier;
  selectedCategory;

  constructor(public db: ProductService, private angularFireDatabase: AngularFireDatabase,private search: SearchPipe, private modalService: NgbModal) {}

  ngOnInit(): void {

    this.db.getProductList().subscribe(data => {
      this.collectionSize = data.length;
      this.productdata = data
      this.showdata = this.productdata;
      console.log(this.productdata);
      this.get_selected_supplier_category();
    });
  }

  get_selected_supplier_category(){
    this.productdata.filter(data => { 
      // this.db.addProduct(data);
      if (!this.suppliersArray.includes(data.supplier)) {
       return this.suppliersArray.push(data.supplier);
      }
    });
    this.productdata.filter(data => {
      if (!this.categoriesArray.includes(data.category)) {
        return this.categoriesArray.push(data.category);
      }
    });
  }

  open(content) {
    this.modalService.open(content);
  }

  check_category(event){
    if(event.target.value!='Category'){
      this.selectedCategory=event.target.value;
      this.Search();
    }else{
      this.selectedCategory='';
      this.Search();
    }
  }

  check_supplier(event){
    if(event.target.value!='Supplier'){
      this.selectedSupplier=event.target.value;  
      this.Search();
    }else{
      this.selectedSupplier='';
      this.Search();
    }
  }

  Search() {
    this.showdata = this.search.transform(this.productdata, this.idname,this.selectedSupplier,this.selectedCategory);
    this.collectionSize = this.showdata.length;
  }
}
