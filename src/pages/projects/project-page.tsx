import { PostMatter } from '../../api/get-posts'

export const ProjectPage = (props: PostMatter) => {
  const { data, content, language, matter } = props
  return (
    <section>
      <section>
        <h1>{data.title ? data.title : ''}</h1>
        <h5>{data.tags}</h5>
        <p>{data.description}</p>
        <p>{data.expertise}</p>
      </section>
      <section>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </section>
    </section>
  )
}

export default ProjectPage
