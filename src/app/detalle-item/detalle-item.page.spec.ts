import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalleItemPage } from './detalle-item.page';

describe('DetalleItemPage', () => {
  let component: DetalleItemPage;
  let fixture: ComponentFixture<DetalleItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
