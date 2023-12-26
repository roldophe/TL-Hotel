import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentComponent } from './comment.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentComponent],
      imports:[HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: () => 'mockId' }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
