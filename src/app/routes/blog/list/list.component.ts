import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageInfo, PageParams } from '@core';
import * as lodash from 'lodash';
import { zip } from 'rxjs';

import { Label, LabelService } from '../../manage/label';
import { BlogService } from '../blog.service';
import { Blog } from '../model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private blogService: BlogService,
    private labelService: LabelService
  ) {}
  /** 是否加载中 */
  loading = false;
  /** 当前作者名称 */
  userName: string | null = null;
  /** 列表数据 */
  list: Blog[] = [];
  /** 分页信息 */
  pageInfo?: PageInfo;

  // 标签
  labels: Label[] = [{ id: 0, name: '全部' }];
  // 当前活跃标签
  activeLabels: number[] = [];

  changeCategory(status: boolean, idx: number): void {
    if (idx == 0) {
      this.activeLabels = [];
    } else {
      if (status) {
        this.activeLabels.push(idx);
      } else {
        lodash.remove(this.activeLabels, item => item == idx);
      }
    }
    this.getData(true);
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      this.userName = paramMap.get('userName');
    });
    this.getData(true);
  }

  getData(reset: boolean): void {
    this.loading = true;
    if (reset) {
      delete this.pageInfo;
      this.list = [];
    }
    let sort = 'updateTime,desc';
    let params: PageParams = this.pageInfo ? { page: this.pageInfo.number + 1, size: this.pageInfo.size, sort: sort } : { sort: sort };
    if (this.activeLabels.length > 0) {
      params['labels.idIn'] = lodash.join(this.activeLabels, ',');
    }
    if (null != this.userName) {
      params['userName'] = this.userName;
    }
    zip(this.blogService.page(params), this.labelService.list()).subscribe(
      ([page, labels]) => {
        this.list = this.list.concat(page.content);
        this.labels = [{ id: 0, name: '全部' }, ...labels];
        // 是否有更多数据
        this.pageInfo = page as PageInfo;
        this.loading = false;
        this.cdr.detectChanges();
      },
      e => {
        console.log(e);
      }
    );
  }
}
