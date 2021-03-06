import Head from 'next/head'
import Image from 'next/image'
import {useState} from "react"
import {
  ApolloClient,
  InMemoryCache,
  // ApolloProvider,
  // useQuery,
  gql
} from "@apollo/client";

import {
  Heading,
  Box,
  Flex,
  Input,
  Stack,
  IconButton,
  useToast
} from "@chakra-ui/react"
import styles from '../styles/Home.module.css'

export default function Home(results) {
  const initState=results;
  const [chars,setChars]=useState(initState.characters)

  console.log(initState)

  return (
    <Flex direction="column" align="center" justify="center">

      <Head>
        <title>NextJS Apollo Crash Course</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box mb={4} flexDirection="column" align="center" justify="center" py={8}>
        <Heading as="h1" size="2xl" mb={8}>
          Rick and Morty
        </Heading>
      </Box>

      
      <footer className={styles.footer}>
        Powered by comprehensive SaaS solution producty by &copy;BILLZ
      </footer>
    </Flex>
  )
}


export async function getStaticProps(){
  const client= new ApolloClient({
    uri:"https://rickandmortyapi.com/graphql",
    cache: new InMemoryCache()
  })
  const {data}=await client.query({
    query:gql`
      query{
        characters(page:1){
          info{
            count
            pages
          }
          results{
            name
            id
            location{
              id
              name
            }
            origin{
              id
              name
            }
            episode{
              id
              episode
              air_date
            }
            image
          }
        }
      }
    `
  })
  return{
    props:{
      characters:data.characters.results,

    }
  }
}