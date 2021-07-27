
import React from 'react'
import Image from "next/image"

import {
    Heading,
    Text,
    SimpleGrid
  } from "@chakra-ui/react"

const Characters = ({characters}) => {
    return (
        <SimpleGrid columns={[1,2,3]} spacing="40px">
            {characters.map(char=>{
                return(
                    <div key={char.id}>
                        <Image src={char.image} width={300} height={300} />

                        <Heading as="h4" size="md" align="center">
                            {char.name}
                        </Heading>

                        <Text align="center">
                            Origin: {char.origin.name}
                        </Text>

                        <Text align="center">
                            Location: {char.location.name}
                        </Text>
                    </div>
                )
            })}
        </SimpleGrid>
    )
}

export default Characters
