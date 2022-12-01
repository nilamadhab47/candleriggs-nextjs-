const subscriptionlist = ({posts}) => {
    console.log(posts)
  return (
    <div>

        {posts.Events.map((post, i)=> {
            return (

               <ul key={i}>
                   <li>{post.email}</li>

               </ul> 
            
            )
        })}
    </div>
  )
}

export default subscriptionlist

  

  export async function getStaticProps() {

    const res = await fetch('https://candleriggs-staging-73rkv.ondigitalocean.app/api/getEmailSubscribers')
    const posts = await res.json()
    console.log(posts)
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }