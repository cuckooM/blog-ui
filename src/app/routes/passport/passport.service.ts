import { HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ALLOW_ANONYMOUS } from '@delon/auth';
import { _HttpClient } from '@delon/theme';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassportService {
  constructor(private http: _HttpClient) {}

  /**
   * 登录
   *
   * @param username 用户名
   * @param passwd 密码
   * @returns 结果
   */
  login(username: string | undefined, passwd: string | undefined): Observable<any> {
    return this.http.post(
      '/api/authenticate?_allow_anonymous=true',
      {
        username: username,
        password: passwd
      },
      null,
      // {
      //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      // }
      {
        context: new HttpContext().set(ALLOW_ANONYMOUS, true)
      }
    );
  }
}
