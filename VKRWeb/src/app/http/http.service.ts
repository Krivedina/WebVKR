import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { publishReplay, refCount, map } from "rxjs/operators";
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {
  private _listStudentsCache;

  constructor(private http: HttpClient) {}

  private _cache = {};
  public requestGet(url: string): any {
    return this.http.get(url);
  }

  public requestListStudents(): Observable<any> {
    if (!this._listStudentsCache) {
      this._listStudentsCache = this.requestGet(
        "http://localhost:5000/user/1f4a0cc8b33c43c3beddfe6181c1b8c5"
      ).pipe(
        publishReplay(1),
        refCount()
      )
    }
    return this._listStudentsCache;
  }

  public getListStudents() {
    let a = null;
    this.requestListStudents().subscribe(data =>{a = data});
    return a;
  }
}
