import Request, { api } from 'utils/request';
import PostProps from './types/post';

class PostApi extends Request {
  async postsNew(data: PostProps): Promise<{}> {
    return this.post<{}>(api, {
      action: 'posts',
      ...data,
    }).then((r) => r.data);
  }

  async editArticle(data: { post: PostProps; id: number }): Promise<{}> {
    return this.patch<{}>(api, {
      action: `posts/${data.id}`,
      ...data,
    }).then((r) => r.data);
  }
}

const postApi = new PostApi();
export default postApi;
