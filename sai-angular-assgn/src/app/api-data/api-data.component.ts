import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-api-data',
  imports: [CommonModule],
  templateUrl: './api-data.component.html',
  styleUrl: './api-data.component.css',
})
export class ApiDataComponent implements OnInit {
  products: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getProducts().subscribe((data) => {
      this.products = data
        .filter((product) => product.images && product.images[0])
        .slice(1, 25);
    });
  }
}
