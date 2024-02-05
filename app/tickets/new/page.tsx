'use client';

import { Button, TextField } from '@radix-ui/themes'
import React from 'react';
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
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async (data) => {
      axios.post('/api/tickets', data);
      router.push('/tickets')
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
  )
}

export default NewTicketPage