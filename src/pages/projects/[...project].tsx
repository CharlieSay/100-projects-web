import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getPostBySlug, PostMatter } from '../../api/get-posts'
import { ProjectPage } from './project-page'

interface IParams extends ParsedUrlQuery {
  project: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = params as IParams

  if (project === undefined) return { props: {} }

  const grayMatter = getPostBySlug(project)

  return {
    props: {
      content: grayMatter.content,
      data: grayMatter.data,
      matter: grayMatter.matter || '',
      language: grayMatter.language || '',
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

export default function GetStaticPathsIndex(props: PostMatter) {
  const router = useRouter()
  function backToHome() {
    router.push('/')
  }

  // fallback: true, you can use:
  if (router.isFallback) {
    backToHome()
  }

  if (!props.data || !props.content) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <ProjectPage
      data={props.data}
      content={props.content}
      language={props.language}
      matter={props.matter}
    />
  )
}
