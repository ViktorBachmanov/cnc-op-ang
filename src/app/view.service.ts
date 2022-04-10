import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ViewService {
  constructor() {}
}

@Injectable({
  providedIn: 'root',
})
export class ViewServiceXY extends ViewService {
  constructor() {
    super();
  }

  getContent() {
    return '<rect x="50" y="50" width="150" height="50" stroke-width="2" stroke="black" fill="none"></rect>';
  }
}

@Injectable({
  providedIn: 'root',
})
export class ViewServiceXZ extends ViewService {
  constructor() {
    super();
  }

  getContent() {
    return '<rect x="50" y="50" width="150" height="120" stroke-width="2" stroke="black" fill="none"></rect>';
  }
}
