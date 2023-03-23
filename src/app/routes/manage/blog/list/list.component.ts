import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PageInfo, PageInfoEmpty } from '@core';
import { _HttpClient } from '@delon/theme';
import { zip } from 'rxjs';

import { LabelService } from '../../label/label.service';
import { Label } from '../../label/model';
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
  activeLabelIndex = 0;
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
    this.activeLabelIndex == idx;
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
    let params = this.pageInfo ? { page: this.pageInfo.number + 1, size: this.pageInfo.size } : {};
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
