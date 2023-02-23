/**
 * 博客实体
 */
export interface Blog {
  id?: number;
  title?: string;
  content?: string;
  authorId?: number;
  createTime?: Date;
  updateTime?: Date;
}
