import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import * as lodash from 'lodash';
import { BlogService } from 'src/app/routes/blog/blog.service';
import { Blog } from 'src/app/routes/blog/model';

import { Label, LabelService } from '../../label';

@Component({
  selector: 'app-manage-blog-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.less']
})
export class ManageBlogAddComponent implements OnInit {
  constructor(private http: _HttpClient, private router: Router, private blogService: BlogService, private labelService: LabelService) {}

  /** 表单数据 */
  data: Blog = { labels: [] };
  // 标签
  labels: Label[] = [];

  ngOnInit(): void {
    this.labelService.list().subscribe(labels => {
      this.labels = labels;
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
    this.blogService.add(this.data).subscribe(
      data => {
        this.router.navigate(['blog', data.id]);
      },
      e => {
        console.log(e);
      }
    );
  }
}
