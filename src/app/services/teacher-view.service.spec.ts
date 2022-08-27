import { TestBed } from '@angular/core/testing';

import { TeacherViewService } from './teacher-view.service';

describe('TeacherViewService', () => {
  let service: TeacherViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeacherViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
