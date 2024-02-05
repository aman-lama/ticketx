'use client';

import { Button, TextField } from '@radix-ui/themes'
import React from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import "easymde/dist/easymde.min.css"


const NewTicketPage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title' />
        </TextField.Root>
        <SimpleMdeReact placeholder='Description' />
        <Button>Submit New Ticket</Button>
    </div>
  )
}

export default NewTicketPage