const bannerlist = ({posts}) => {
    console.log(posts)
  return (
    <div>

        {posts.bannerData.map((post, i)=> {
            return (

                  
                  
                <ul key={i}>
                  <li>{post.bannerName}</li>
                </ul>
            
            )
        })}
    </div>
  )
}

export default bannerlist

  

  export async function getStaticProps() {

    const res = await fetch('https://candleriggs-staging-73rkv.ondigitalocean.app/api/getAllBanner')
    const posts = await res.json()
    // console.log(posts)
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  