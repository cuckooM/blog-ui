import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingsService, User } from '@delon/theme';

import { BlogService } from '../blog.service';
import { Blog } from '../model';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class BlogDetailComponent implements OnInit {
  /**
   * 当前用户
   */
  get user(): User {
    return this.settings.user;
  }
  /** 博客数据 */
  data: Blog | undefined;
  // 加载状态
  loading: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private settings: SettingsService) {}

  ngOnInit(): void {
    // 获取 ID
    this.loading = true;
    this.activatedRoute.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if (null == id) {
        this.loading = false;
        return;
      }
      this.blogService.find(id).subscribe(
        data => {
          this.data = data;
          this.loading = false;
        },
        e => {
          console.log(e);
          this.loading = false;
        }
      );
    });
  }
}
