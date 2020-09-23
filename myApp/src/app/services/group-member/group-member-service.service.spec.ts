import { TestBed } from '@angular/core/testing';

import { GroupMemberServiceService } from './group-member-service.service';

describe('GroupMemberServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GroupMemberServiceService = TestBed.get(GroupMemberServiceService);
    expect(service).toBeTruthy();
  });
});
