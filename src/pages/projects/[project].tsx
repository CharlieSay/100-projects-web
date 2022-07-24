import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('context.params.name:', params) // route1
  return {
    revalidate: 10,
    props: {
      id: 12345,
      address: 'Maxingstrasse 5',
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking', //indicates the type of fallback
  }
}

// SERVER + CLIENT EXECUTION:
// Next function will be executed on the server to get the props
// AND on the client, of course, to render on the browser.
export default function GetStaticPathsIndex(props: any) {
  const router = useRouter()
  function backToHome() {
    router.push('/')
  }

  console.log('pr0ps', props)

  // fallback: true, you can use:
  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div>
      <h1>hi</h1>
    </div>
  )
}
