import Article from "./Article"

function ArticleList( { posts }) {
    console.log(posts)
    let articles = posts.map(eachPost=> {
        return (
        <Article
        title = {eachPost.title}
        date = {eachPost.date}
        preview = {eachPost.preview}
        key = {eachPost.id}
        />
    )})
    return (
        <main>
            {articles}
        </main>
    )
  }



export default ArticleList;