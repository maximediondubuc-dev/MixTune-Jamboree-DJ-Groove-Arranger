import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistSelectionComponent } from './playlist-selection.component';

describe('PlaylistSelectionComponent', () => {
  let component: PlaylistSelectionComponent;
  let fixture: ComponentFixture<PlaylistSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistSelectionComponent]
    });
    fixture = TestBed.createComponent(PlaylistSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
