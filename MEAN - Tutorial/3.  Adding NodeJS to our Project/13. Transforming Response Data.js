getPosts() {
    this.http
    .get<{message: String; posts: any}>(
        'http://localhost:300/api/posts'
        ).pipe(map((postData)=> {
        return postData.posts.map(post => {
            return {
                title: post.title,
                constent: post.constent,
                id: post._id
            }
        })
    })).subscrib(transformdPosts => {
        this.posts = transformdPosts;
        this.postsUpdated.next([...this.posts]);
    })
}