import { Button } from '@radix-ui/themes'
import Link from 'next/link'
import React from 'react'

const TicketsPage = () => {
  return (
    <Button>
        <Link href={'/tickets/new'}>
            New Issue
        </Link>
    </Button>
  )
}

export default TicketsPage