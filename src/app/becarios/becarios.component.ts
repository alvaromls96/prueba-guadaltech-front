import { AfterViewInit, Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Becario } from '../core/models/becario';
import { BecariosService } from './services/becarios.service';

@Component({
  selector: 'app-becarios',
  templateUrl: './becarios.component.html',
  styleUrls: ['./becarios.component.scss']
})
export class BecariosComponent implements AfterViewInit {
  public displayedColumns = ['id', 'name', 'role', 'dischargeDate'];
  public dataSource: MatTableDataSource<Becario>;

  constructor(
    private _becariosService: BecariosService
  ) { }

  async ngAfterViewInit(): Promise<void> {
    this.dataSource = new MatTableDataSource(await this._becariosService.getBecarios());
  }
}
