import { Component, OnInit } from '@angular/core';
import { IProducto } from 'src/app/models/producto.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})

export class ProductsListComponent implements OnInit {

  productos: IProducto[] = [
    {
      id: 1,
      nombre: "Leche deslactosada",
      precio: 23.5,
      cantidad: 5,
      descripcion: "Leche de vaca deslactosada marca Tres Pinos",
      origen: "Costa Rica",
      url: "producto/lechedeslactosada",
      fechaVencimiento: new Date("01/12/2021")
    },
    {
      id: 2,
      nombre: "Mantequilla de mani",
      precio: 50,
      cantidad: 2,
      descripcion: "Mantequilla de mani marca Reese",
      origen: "Mexico",
      url: "producto/mantequillamani",
      fechaVencimiento: new Date("23/01/2022")
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
