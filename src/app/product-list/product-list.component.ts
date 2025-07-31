import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product: any; // Product object to store the selected product details
  products$!: Observable<any[]>; 

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.product = this.getProductById(Number(productId)); // Find product by ID
    }
  }

  // Modify this to fetch the products from your store
getProductById(id: number): any {
  const products = [
    {
      id: 1,
      name: 'UltraVision 4K Monitor',
      price: 9999.99,
      image: '../assets/images/ultravision-monitor.jpg',
      category: 'monitors',
      description: '27-inch 4K UHD monitor with HDR10, 144Hz refresh rate, and ultra-thin bezels.',
      stock: 15,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 2,
      name: 'QuantumX Mechanical Keyboard',
      price: 999.99,
      image: '../assets/images/quantumx-keyboard.jpg',
      category: 'keyboards',
      description: 'Hot-swappable mechanical keyboard with customizable RGB lighting and PBT keycaps.',
      stock: 20,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 3,
      name: 'HyperStream Wireless Mouse',
      price: 399.99,
      image: '../assets/images/hyperstream-mouse.jpg',
      category: 'mice',
      description: 'Ergonomic gaming mouse with adjustable DPI, ultra-lightweight design, and Bluetooth 5.0.',
      stock: 30,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 4,
      name: 'NeonGlow RGB Headset',
      price: 699.99,
      image: '../assets/images/neonglow-headset.jpg',
      category: 'headsets',
      description: '7.1 surround sound gaming headset with noise-canceling microphone and RGB effects.',
      stock: 25,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 5,
      name: 'Titan Pro Gaming Chair',
      price: 2499.99,
      image: '../assets/images/titanpro-chair.jpg',
      category: 'furniture',
      description: 'Ergonomic gaming chair with memory foam padding, adjustable armrests, and lumbar support.',
      stock: 10,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 6,
      name: 'NanoCore SSD 1TB',
      price: 599.99,
      image: '../assets/images/nanocore-ssd.jpg',
      category: 'storage',
      description: '1TB NVMe SSD with read speeds up to 7000MB/s and 5-year warranty.',
      stock: 40,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 7,
      name: 'AeroStream WiFi Router',
      price: 1249.99,
      image: '../assets/images/aerostream-router.jpg',
      category: 'networking',
      description: 'Tri-band WiFi 6 router with up to 5400 Mbps speed, ideal for gaming and 4K streaming.',
      stock: 15,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 8,
      name: 'CyberGlass Smart Glasses',
      price: 499.99,
      image: '../assets/images/cyberglass-smart.jpeg',
      category: 'wearables',
      description: 'Augmented reality smart glasses with voice control, Bluetooth, and UV protection.',
      stock: 8,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 9,
      name: 'PowerCore 20000mAh Power Bank',
      price: 249.99,
      image: '../assets/images/powercore-bank.jpg',
      category: 'accessories',
      description: 'High-capacity power bank with fast charging, dual USB ports, and LED battery indicator.',
      stock: 50,
      isFeatured: false,
      showQuickView: false
    },
    {
      id: 10,
      name: 'Vortex RTX 4080 Graphics Card',
      price: 24999.99,
      image: '../assets/images/vortex-rtx4080.jpg',
      category: 'components',
      description: 'NVIDIA RTX 4080 GPU with 16GB GDDR6X memory, ray tracing, and DLSS 3.0 support.',
      stock: 1,
      isFeatured: true,
      showQuickView: false
    }
  ];
  return products.find(product => product.id === id);
}
}
