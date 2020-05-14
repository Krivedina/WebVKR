import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { map, delay, switchAll, switchMap, switchMapTo } from "rxjs/operators";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  private _cache = {};

  public postRequest(url: string, data: any, options: any = {}) {
    this.http
      .post(url, data, options)
      .subscribe((response) => console.log(response));
  }

  public getRequest(url: string, cacheName: string, options: any = {}) {
    if (!this._cache[cacheName]) {
      return this.http.get(url, options).pipe(
        switchMap((response) => {
          this._cache[cacheName] = response;
          return of(response);
        })
      );
    } else {
      return of(this._cache[cacheName]);
    }
  }

  /**
   * Вернет занчения из кэша
   */
  public getCacheData(name: string) {
    return this._cache[name];
  }

  public clearCache() {
    this._cache = {};
  }
}
