import Head from 'next/head'
// import { QueryCache } from 'react-query'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import PeopleManagementTable from '@/components/people-management-page'
// import { dehydrate } from 'react-query/hydration';
// import { QueryCache, ReactQueryCacheProvider, hydrate } from 'react-query/hydration'
import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Head>
        <title>People Management Table App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <PeopleManagementTable />
      </main>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(['people'], async () => {
    const res = await fetch('https://fakerapi.it/api/v1/persons?_seed=12456')
    const data = await res.json()
    return data
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}


