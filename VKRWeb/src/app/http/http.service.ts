import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}
  private _cache = {};

  public postRequest(url: string, data: any, options: any = {}) {
    this.http
      .post(url, data, options)
      .subscribe(response => console.log(response));
  }

  public getRequest(url: string, cacheName: string, options: any = {}) {
    if (!this._cache[cacheName]) {
      this.http
        .get(url, options)
        .subscribe(response => (this._cache[cacheName] = response));
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
