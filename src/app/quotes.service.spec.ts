import { TestBed } from '@angular/core/testing';
import { QuotesService } from './quotes.service';

describe('QuoteService', () => {
  let service: QuotesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuotesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});