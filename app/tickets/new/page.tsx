'use client';

import { Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import {useForm, Controller} from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from 'next/navigation';


interface TicketForm {
  title: string;
  description: string;
}


const NewTicketPage = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<TicketForm>();

  const [error, setError] = useState('');

  return (
    <div className='max-w-xl'>
      {
        error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
        )
        }
      <form className='space-y-3' onSubmit={handleSubmit(async (data) => {
        try {
          axios.post('/api/tickets', data);
          router.push('/tickets');
        } catch (error) {
          setError('An unexpected error occured.')
        }
        
      })}>
          <TextField.Root>
              <TextField.Input placeholder='Title' {...register('title')} />
          </TextField.Root>
          <Controller 
            name='description'
            control={control}
            render={({field}) => <SimpleMdeReact placeholder='Description' {...field} />}
          /> 
          <Button>Submit New Ticket</Button>
      </form>
    </div>
  )
}

export default NewTicketPage