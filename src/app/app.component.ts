import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartCount } from './store/cart/cart.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nexora Tech';
  cartItemsCount$: Observable<number>;

  constructor(private store: Store) {
    // Initializing the observable after 'store' is injected
    this.cartItemsCount$ = this.store.select(selectCartCount);
  }
  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
}
