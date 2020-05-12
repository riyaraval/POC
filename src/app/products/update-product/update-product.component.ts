import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { IProduct } from 'src/app/models/IProduct';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent implements OnInit {


  constructor(private _productService: ProductService, private fb: FormBuilder, private angularFireDatabase: AngularFireDatabase) { }

  @Input() public product:IProduct;
  productLength: number;
  suppliers;
  categories;
  data:IProduct;
  productId: number;
  showDiscount: boolean=true;
  id: number;

  productForm = this.fb.group({
    name: ["", Validators.required],
    supplier: ["", Validators.required],
    category: ["", Validators.required],
    price: ["", Validators.required],
    discounted: ["", Validators.required],
    discount: [""]
  })
  ngOnInit() {
    if(this.product){
      console.log(this.product);
      this.productForm.patchValue({
        name:this.product.name,
        supplier:this.product.supplier,
        category:this.product.category,
        price:this.product.price,
        discounted:this.product.discounted,
        discount:this.product.discount
      })
      if(this.product.discounted=='No'){
        this.showDiscount=false;
      }
    }
    else{
      this.showDiscount = false
    }
  }

  isShowDiscount(event) {
    console.log(event.target.value);
    if (event.target.value == 'Yes') {
      this.showDiscount = true
    }
    else {
      this.showDiscount = false;
      this.productForm.patchValue({
        name: this.productForm.controls['name'].value,
        supplier: this.productForm.controls['supplier'].value,
        category: this.productForm.controls['category'].value,
        price: this.productForm.controls['price'].value,
        discounted: this.productForm.controls['discounted'].value,
        discount:0
      })
    }
  }

  onSubmit() {
    if(this.product){
      let data={
        id:this.product.id,
        name: this.productForm.controls['name'].value,
        supplier: this.productForm.controls['supplier'].value,
        category: this.productForm.controls['category'].value,
        price: this.productForm.controls['price'].value,
        discounted: this.productForm.controls['discounted'].value,
        discount: this.productForm.controls['discount'].value,
      }
      this._productService.updateProduct(data);

    }else{
      let sub = this.angularFireDatabase.list('/products').valueChanges().subscribe(prodcuts => {
        this.data = {
          id: prodcuts.length + 1,
          name: this.productForm.controls['name'].value,
          supplier: this.productForm.controls['supplier'].value,
          category: this.productForm.controls['category'].value,
          price: this.productForm.controls['price'].value,
          discounted: this.productForm.controls['discounted'].value,
          discount: this.productForm.controls['discount'].value,
        }
        this._productService.addProduct(this.data);
        sub.unsubscribe()
      })
    }
  }


}
