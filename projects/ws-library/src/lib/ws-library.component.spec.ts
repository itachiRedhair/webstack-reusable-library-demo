import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WsLibraryComponent } from './ws-library.component';

describe('WsLibraryComponent', () => {
  let component: WsLibraryComponent;
  let fixture: ComponentFixture<WsLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WsLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WsLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
