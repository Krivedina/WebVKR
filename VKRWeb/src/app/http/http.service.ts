import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType } from "@angular/common/http";
import { publishReplay, refCount, map } from "rxjs/operators";
import { Subject } from "rxjs/Subject";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  public sub = new Subject<any>();
  private _cache = {};
  public requestGet(url: string): any {
    return this.http.get(url);
  }

  public requestListStudents(): void {
    if (!this._cache["ListStudents"]) {
      this.http
        .get(
          "http://localhost:5000/user/profile/1f4a0cc8b33c43c3beddfe6181c1b8c5"
        )
        .subscribe(data => {
          this.sub.next(data);
          this.sub.complete();
          this._cache["ListStudents"] = data;
        });
    }
  }

  public signIn(data: any): void {
    this.http
      .post("http://localhost:5000/signIn", data, { withCredentials: true })
      .subscribe(data => console.log(data));
  }

  public signUp(data: any) {
    this.http
      .post("http://localhost:5000/signUp", data)
      .subscribe(data => console.log(data));
  }

  public getUserData() {
    this.http
      .get(
        "http://localhost:5000/user/profile/4c53f1ba-e3e4-45c0-96d2-01e7be8e21fb"
      )
      .subscribe(data => console.log(data));
  }

  public getListStudents() {
    return this._cache["ListStudents"];
  }
}
