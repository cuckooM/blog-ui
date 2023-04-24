import { Injectable } from '@angular/core';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';
import { PageParams } from 'src/app/core/net/model/params';

import { Page } from '../../core';
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
    return this.http.get('/api/blog', params);
  }

  /**
   * 根据 ID 查询实体
   *
   * @param id ID
   * @returns 结果
   */
  find(id: number | string): Observable<Blog> {
    return this.http.get(`/api/blog/${id}`);
  }

  /**
   * 增加实体
   *
   * @param data 待增加数据
   * @returns 结果
   */
  add(data: Blog): Observable<Blog> {
    return this.http.post('/api/manage/blog', data);
  }

  /**
   * 编辑实体
   * @param id ID
   * @param data 待编辑数据
   * @returns 结果
   */
  update(id: number | string, data: Blog): Observable<Blog> {
    return this.http.put(`/api/manage/blog/${id}`, data);
  }
}
