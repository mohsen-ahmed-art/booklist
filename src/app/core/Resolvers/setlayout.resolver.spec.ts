import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { setlayoutResolver } from './setlayout.resolver';

describe('setlayoutResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => setlayoutResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
