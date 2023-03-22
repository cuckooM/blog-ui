import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';

import { Label } from './model';

/**
 * 标签 Service
 */
@Injectable({ providedIn: 'root' })
export class LabelService {
  constructor(private http: _HttpClient) {}

  /**
   * 查询列表
   *
   * @returns 结果
   */
  list(): Observable<Label[]> {
    return this.http.get('/api/label');
  }
}
