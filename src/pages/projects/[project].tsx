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

// export const getStaticPaths: GetStaticPaths = async () => {
//   // HERE you can access all node.js methods: db, fs, etc...
//   return {
//     // [name]:
//     paths: [
//       { params: { name: 'route1' } },
//       { params: { name: 'route2' } },
//       { params: { name: 'route3' } },
//     ],
//     fallback: false, // WON'T CONTINUE in case of WRONG ROUTE!
//     // TRUE: Rendering would continue and the return
//     // of GetStaticPathsIndex() would be rendered for any route!
//   }
// }

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
