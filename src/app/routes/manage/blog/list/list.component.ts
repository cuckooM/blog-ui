import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageInfo, PageParams } from '@core';
import { _HttpClient } from '@delon/theme';
import * as lodash from 'lodash';
import { zip } from 'rxjs';

import { Label, LabelService } from '../../label';
import { BlogService } from '../blog.service';
import { Blog } from '../model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BlogListComponent implements OnInit {
  constructor(
    private http: _HttpClient,
    private cdr: ChangeDetectorRef,
    private blogService: BlogService,
    private labelService: LabelService
  ) {}
  q = {
    ps: 5,
    categories: [],
    owners: ['zxx'],
    user: '',
    rate: ''
  };
  /** 是否加载中 */
  loading = false;
  /** 列表数据 */
  list: Blog[] = [];
  /** 分页信息 */
  pageInfo?: PageInfo;

  // 标签
  labels: Label[] = [{ id: 0, name: '全部' }];
  // 当前活跃标签
  activeLabels: number[] = [];
  // endregion

  // region: owners
  owners = [
    {
      id: 'wzj',
      name: '我自己'
    },
    {
      id: 'wjh',
      name: '吴家豪'
    },
    {
      id: 'zxx',
      name: '周星星'
    },
    {
      id: 'zly',
      name: '赵丽颖'
    },
    {
      id: 'ym',
      name: '姚明'
    }
  ];

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
    this.getData();
  }

  setOwner(): void {
    this.q.owners = [`wzj`];
    setTimeout(() => this.cdr.detectChanges());
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.loading = true;
    let sort = 'updateTime,desc';
    let params: PageParams = this.pageInfo ? { page: this.pageInfo.number + 1, size: this.pageInfo.size, sort: sort } : { sort: sort };
    if (this.activeLabels.length > 0) {
      params['labels.idIn'] = lodash.join(this.activeLabels, ',');
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
