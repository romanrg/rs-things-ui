import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Thing } from 'src/DTO';

import { map } from 'rxjs/operators';

const API_VERSION = 'v1';

@Injectable({
  providedIn: 'root',
})
export class ThingsService {
  constructor(private httpClient: HttpClient) {}

  public getThings() {
    return this.httpClient.get<Thing[]>(`/api/${API_VERSION}/things`);
  }

  public addThings(thing: Thing) {
    return this.httpClient.post(`/api/${API_VERSION}/things`, thing, { responseType: 'text' }).pipe(
      map(data => {
        console.log(data);
        return data;
      }),
    );
  }
}
