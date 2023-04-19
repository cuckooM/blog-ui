import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { SettingsService, User } from '@delon/theme';

@Component({
  selector: 'header-user',
  template: `
    <div *ngIf="!user['id']" class="alain-default__nav-item d-flex align-items-center px-sm">
      <!-- 登录 -->
      <a (click)="logout()">{{ 'app.login.login' | i18n }}</a>
    </div>
    <div
      *ngIf="user['id']"
      class="alain-default__nav-item d-flex align-items-center px-sm"
      nz-dropdown
      nzPlacement="bottomRight"
      [nzDropdownMenu]="userMenu"
    >
      <nz-avatar [nzSrc]="user.avatar" nzSize="small" class="mr-sm"></nz-avatar>
      {{ user.name }}
    </div>
    <nz-dropdown-menu #userMenu="nzDropdownMenu">
      <div nz-menu class="width-sm">
        <!-- <div nz-menu-item routerLink="/pro/account/center">
          <i nz-icon nzType="user" class="mr-sm"></i>
          {{ 'menu.account.center' | i18n }}
        </div>
        <div nz-menu-item routerLink="/pro/account/settings">
          <i nz-icon nzType="setting" class="mr-sm"></i>
          {{ 'menu.account.settings' | i18n }}
        </div>
        <div nz-menu-item routerLink="/exception/trigger">
          <i nz-icon nzType="close-circle" class="mr-sm"></i>
          {{ 'menu.account.trigger' | i18n }}
        </div> -->
        <!-- 我的博客 -->
        <div nz-menu-item (click)="mineBlog()">
          <i class="mr-sm"></i>
          <span>{{ 'blog.mine' | i18n }}</span>
        </div>
        <!-- 发布博客 -->
        <div nz-menu-item (click)="addBlog()">
          <i class="mr-sm"></i>
          <span>{{ 'blog.publish' | i18n }}</span>
        </div>
        <li nz-menu-divider></li>
        <!-- 退出登录 -->
        <div nz-menu-item (click)="logout()">
          <i nz-icon nzType="logout" class="mr-sm"></i>
          {{ 'menu.account.logout' | i18n }}
        </div>
      </div>
    </nz-dropdown-menu>
  `,
  styles: [
    `
      a,
      a:hover {
        color: white;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderUserComponent {
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService, private router: Router, @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService) {}

  /**
   * 退出登录
   */
  logout(): void {
    this.tokenService.clear();
    this.settings.setUser({});
    this.router.navigateByUrl(this.tokenService.login_url!);
  }

  /**
   * 跳转“我的博客”页面
   */
  mineBlog() {
    this.router.navigate(['blog', 'list']);
  }

  /**
   * 跳转“发布博客”页面
   */
  addBlog() {
    this.router.navigate(['manage', 'blog', 'add']);
  }
}
