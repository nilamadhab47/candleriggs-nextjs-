const mustseelist = ({posts}) => {
    console.log(posts)
  return (
    <div>

        {posts.data.map((post, i)=> {
            return (

               <ul key={i}>
                   <li>{post._id}</li>

               </ul> 
            
            )
        })}
    </div>
  )
}

export default mustseelist

  

  export async function getStaticProps() {

    const res = await fetch('https://candleriggs-staging-73rkv.ondigitalocean.app/api/mustSee')
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
  