import { Label } from '../../label';
import { User } from '../../user/model';

/**
 * 博客实体
 */
export interface Blog {
  /** ID */
  id?: number;
  /** 标题 */
  title?: string;
  /** 内容 */
  content?: string;
  /** 作者 ID */
  authorId?: number;
  /** 作者 */
  author?: User;
  /** 创建时间 */
  createTime?: Date;
  /** 修改时间 */
  updateTime?: Date;
  /** 标签 ID 集合 */
  labelIds?: number[];
  /** 标签 */
  labels?: Label[];
}
