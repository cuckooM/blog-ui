import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { PageParams } from 'src/app/core/net/model/params';

import { Page } from '../../../core';
import { Blog } from './model/blog';

/**
 * 博客 Service
 */
@Injectable({ providedIn: 'root' })
export class BlogService {
  constructor(private http: _HttpClient) {}

  /**
   * 分页查询列表
   *
   * @returns 结果
   */
  page(params: PageParams): Observable<Page<Blog>> {
    return this.http.get('/api/manage/blog', params);
  }
}
