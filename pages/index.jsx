import Layout from "../components/Layout"
import utilStyles from "../styles/utils.module.css"

export default function Home() {
  return (
    <Layout title="Home | Next.js" description="this is the home" home>
      <section className={utilStyles.headingMd}>
        <p>This is a Blog Site made with Next Js &#129297;</p>
        <p> The info that populates the posts is being build using JSONPLACEHOLDER. &#128510;</p>
      
      </section>
    </Layout>

  )
}


