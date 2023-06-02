import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Configuration } from '../layout/models/configuration.model';



@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  static configurationEnvironment: Configuration = { api: { baseUrl: '' } };
}