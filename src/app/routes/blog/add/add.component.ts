import { Component, OnInit } from '@angular/core';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-blog-add',
  templateUrl: './add.component.html'
})
export class BlogAddComponent implements OnInit {
  constructor(private http: _HttpClient) {}

  ngOnInit(): void {
    console.log('Hello World!');
  }

  content: string = '';

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
  editorConfig1 = {
    base_url: '/tinymce', // 设置编辑器的目录，指定一些自定义的文件的目录
    height: 500, // 编辑器的高度
    menubar: false, //
    // 需要用到的插件，可以根据自己的需要进行选择，对应关系可以前往官网查看
    plugins:
      'print preview searchreplace autolink fullscreen image media imagetools link code codesample table charmap hr pagebreak nonbreaking anchor advlist lists textpattern help autosave', // 当前版本这四个插件用不了bdmap indent2em formatpainter axupimgs，想要用需要单独去下载相关包
    // 菜单栏配置，这里设置决定了你需要向用户提供哪些功能的icon，具体功能的实现还是得plugins中实现
    toolbar:
      'code undo redo restoredraft | cut copy | forecolor backcolor bold italic underline strikethrough link | alignleft aligncenter alignright alignjustify | bullist numlist blockquote subscript superscript removeformat | formatselect fontselect fontsizeselect | table image media charmap hr fullscreen',
    // 设置语言，另外默认的是英文包，需要自己卸载中文语言包放在项目目录下，后续会展开说明
    // language: 'zh_CN',
    // language_url: '/tinymce/lang/zh_CN.js',
    toolbar_mode: 'wrap', // 当菜单栏的总宽度超过编辑器的总宽度时，会折叠按钮，要想全部展示，设置为wrap换行展示，设置为scrolling在同一行滑动展示
    branding: false, // 是否展示右下角tiny支持字样
    autosave_ask_before_unload: false, // 不关闭的话，每次上传了图片之后再刷新都会提示是否重新加载页面
    // 自定义字体大小选择内容
    fontsize_formats: '12px 14px 16px 18px 24px 36px 48px 56px 72px',
    // 自定义字体的中英文难对照关系，默认英文
    font_formats:
      '微软雅黑=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;苹果苹方=PingFang SC,Microsoft YaHei,sans-serif;宋体=simsun,serif;仿宋体=FangSong,serif;黑体=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;',
    media_live_embeds: true, // 网上说开启该设置，视频上传后会自动播放，目测暂时不生效
    file_picker_types: 'media' // 指定文件上传类型 参数可为media(媒体)、image(图片)、file(文件)
  };
}
