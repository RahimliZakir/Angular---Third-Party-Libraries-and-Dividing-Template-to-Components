import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }

  message(msg: string): void {
    alertify.message(msg);
  }

  success(msg: string): void {
    alertify.success(msg);
  }

  error(msg: string): void {
    alertify.error(msg);
  }

  warning(msg: string): void {
    alertify.warning(msg);
  }
}
