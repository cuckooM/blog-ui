import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import * as lodash from 'lodash';
import { BlogService } from 'src/app/routes/blog/blog.service';
import { Blog } from 'src/app/routes/blog/model';

import { Label, LabelService } from '../../label';

@Component({
  selector: 'app-manage-blog-add-rich-text',
  templateUrl: './add-rich-text.component.html',
  styleUrls: ['./add-rich-text.component.less']
})
export class ManageBlogAddRichTextComponent implements OnInit {
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

  // 编辑器配置
  editorConfig = {
    base_url: './assets/tinymce',
    height: 500, // 编辑器的高度
    menubar: false,
    // 菜单栏配置，这里设置决定了你需要向用户提供哪些功能的icon，具体功能的实现还是得plugins中实现
    toolbar:
      'code undo redo restoredraft | cut copy | forecolor backcolor bold italic underline strikethrough link | alignleft aligncenter alignright alignjustify | formatselect fontselect fontsizeselect | table image media charmap hr fullscreen',
    language: 'zh-Hans',
    language_url: '/assets/tinymce/langs/zh-Hans.js',
    branding: false, // 是否展示右下角tiny支持字样
    autosave_ask_before_unload: false, // 不关闭的话，每次上传了图片之后再刷新都会提示是否重新加载页面
    // 自定义字体大小选择内容
    fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    // 自定义字体的中英文难对照关系，默认英文
    font_formats:
      '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;'
  };

  tagClick(checked: boolean, label: Label) {
    if (checked) {
      this.data.labels?.push({ id: label.id });
    } else if (this.data.labels) {
      lodash.remove(this.data.labels, item => item.id === label.id);
    }
  }

  submit() {
    this.http.post('/api/manage/blog', this.data).subscribe(() => {});
    this.blogService.add(this.data).subscribe(
      data => {
        this.router.navigate(['manage', 'blog', data.id]);
      },
      e => {
        console.log(e);
      }
    );
  }
}
