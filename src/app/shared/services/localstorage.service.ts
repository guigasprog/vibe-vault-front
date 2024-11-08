import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  static getLocalStorage(key: string): string {
    return localStorage.getItem(key)!;
  }

  static getLocalStorageJsonParse(key: string): string {
    return JSON.parse(localStorage.getItem(key)!);
  }

  static setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  static setLocalStorageJsonStringify(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
