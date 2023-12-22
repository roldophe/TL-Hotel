import { inject } from '@angular/core';
import { CanActivateChildFn } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

export const RoomGuard: CanActivateChildFn = (_childRoute, state) => {
  const loginService = inject(LoginService);
  if(loginService.isAdmin){
    return true;
  }
  return false;
};
