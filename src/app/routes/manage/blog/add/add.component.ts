import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as lodash from 'lodash';
import { Observable, zip, map } from 'rxjs';
import { BlogService } from 'src/app/routes/blog/blog.service';
import { Blog } from 'src/app/routes/blog/model';

import { Label, LabelService } from '../../label';

@Component({
  selector: 'app-manage-blog-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class ManageBlogAddComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private labelService: LabelService
  ) {}

  /** 表单数据 */
  data: Blog = { labels: [] };
  // 标签
  labels: Label[] = [];

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe().subscribe(paramMap => {
      let id = paramMap.get('id');
      let requests: Observable<any>;
      if (id) {
        requests = zip(this.labelService.list(), this.blogService.find(id));
      } else {
        requests = zip(this.labelService.list());
      }
      requests.subscribe(([labels, blog]) => {
        this.labels = labels;
        this.data = blog;
      });
    });
  }

  tagClick(checked: boolean, label: Label) {
    if (checked) {
      this.data.labels?.push({ id: label.id });
    } else if (this.data.labels) {
      lodash.remove(this.data.labels, item => item.id === label.id);
    }
  }

  submit() {
    let request: Observable<Blog>;
    if (this.data.id) {
      request = this.blogService.update(this.data.id, this.data);
    } else {
      request = this.blogService.add(this.data);
    }
    request.subscribe(
      data => {
        this.router.navigate(['blog', data.id]);
      },
      e => {
        console.log(e);
      }
    );
  }
}
