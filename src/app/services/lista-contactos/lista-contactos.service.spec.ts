import { TestBed } from '@angular/core/testing';

import { ListaContactosService } from './lista-contactos.service';

describe('ListaContactosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaContactosService = TestBed.get(ListaContactosService);
    expect(service).toBeTruthy();
  });
});
