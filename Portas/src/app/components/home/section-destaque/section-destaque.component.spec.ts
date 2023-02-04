import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionDestaqueComponent } from './section-destaque.component';

describe('SectionDestaqueComponent', () => {
  let component: SectionDestaqueComponent;
  let fixture: ComponentFixture<SectionDestaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionDestaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
