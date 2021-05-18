import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Becario } from '@core/models/becario';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BecariosService {

  public _becarios$: BehaviorSubject<Becario[]> = new BehaviorSubject<Becario[]>([]);

  private _path = "api/becarios";

  constructor(
    private _http: HttpClient
  ) { }

  /**
   * Retrieves a collection of "becarios" from the server and stores it.
   *
   * @async
   * @memberof BecariosService
   */
  public async retrieveBecarios(): Promise<void> {
    this._becarios$.next(await this._http.get<Becario[]>(this._path).toPromise());
  }

  /**
   * Returns a collection of previously stored "becarios", if it doesn't exists, the collection is retrieved first.
   *
   * @async
   * @return {Promise<Becario[]} 
   * @memberof BecariosService
   */
  public async getBecarios(): Promise<Becario[]> {
    let becarios = this._becarios$.getValue();

    if (!becarios || becarios.length <= 0) {
      await this.retrieveBecarios();
      becarios = this._becarios$.value;
    }

    return becarios;
  }
}
