const gallerylist = ({posts}) => {
    console.log(posts)
  return (
    <div>

        {posts.gallery.map((post, i)=> {
            return (

               <ul key={i}>
                   <li>{post._id}</li>

               </ul> 
            
            )
        })}
    </div>
  )
}

export default gallerylist

  

  export async function getStaticProps() {

    const res = await fetch('https://candleriggs-staging-73rkv.ondigitalocean.app/api/getGallery')
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
  