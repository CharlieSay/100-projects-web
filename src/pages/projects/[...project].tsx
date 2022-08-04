import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useRouter } from 'next/router'
import { ParsedUrlQuery } from 'querystring'
import { getPostBySlug, PostMatter } from '../../api/get-posts'

import hljs from 'highlight.js'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/vs2015.css'
import { useEffect } from 'react'

const components = {}

interface IParams extends ParsedUrlQuery {
  project: string[]
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { project } = params as IParams

  if (project === undefined) return { props: {} }

  const grayMatter = getPostBySlug(project)
  const sourceContent = await serialize(grayMatter.content)

  return {
    props: {
      content: grayMatter.content,
      data: grayMatter.data,
      matter: grayMatter.matter || '',
      language: grayMatter.language || '',
      source: sourceContent,
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
  useEffect(() => {
    hljs.highlightAll()
  }, [])

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
    <>
      <section>
        <h1>{props.data.title ? props.data.title : ''}</h1>
        <h5>{props.data.tags}</h5>
        <p>{props.data.description}</p>
        <p>{props.data.expertise}</p>
      </section>
      <hr style={{ borderTop: `1.5px solid white` }} />
      <MDXRemote {...props.source} components={components} />
    </>
  )
}
