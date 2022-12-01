import dynamic from "next/dynamic"



const allevents = ({posts}) => {
    console.log(posts)
  return (

 
    <div>

        {posts.eventData.map((post, i)=> {
            return (

              <div key={i}>
                <p>{post.title}</p>

              </div>
            
            )
        })}
    </div>
  )
}

export default allevents

  

  export async function getStaticProps() {

    const res = await fetch('https://candleriggs-staging-73rkv.ondigitalocean.app/api/getAllEvent')
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
  



