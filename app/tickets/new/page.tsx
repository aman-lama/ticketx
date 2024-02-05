'use client';

import { Button, Callout, Text, TextField } from '@radix-ui/themes'
import React, { useState } from 'react';
import SimpleMdeReact from 'react-simplemde-editor';
import {useForm, Controller} from "react-hook-form";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTicketSchema } from '@/app/validationSchemas';
import { z } from 'zod';
import ErrorMessage from '@/app/components/ErrorMessage';
import Spinner from '@/app/components/Spinner';

type TicketForm = z.infer<typeof createTicketSchema>;

const NewTicketPage = () => {
  const router = useRouter();
  const {register, control, handleSubmit, formState: { errors } } = useForm<TicketForm>({
    resolver: zodResolver(createTicketSchema)
  });

  const [error, setError] = useState('');

  const [isSubmiting, setSubmiting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmiting(true);
      axios.post('/api/tickets', data);
      router.push('/tickets');
    } catch (error) {
      setSubmiting(false);
      setError('An unexpected error occured.')
    }
    
  })

  return (
    <div className='max-w-xl'>
      {
        error && (
        <Callout.Root color='red' className='mb-5'>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
        )
        }
      <form className='space-y-3' onSubmit={onSubmit}>
          <TextField.Root>
              <TextField.Input placeholder='Title' {...register('title')} />
          </TextField.Root>
          <ErrorMessage>
            {errors.title?.message}
          </ErrorMessage>
          <Controller 
            name='description'
            control={control}
            render={({field}) => <SimpleMdeReact placeholder='Description' {...field} />}
          /> 
          <ErrorMessage>
            {errors.description?.message}
          </ErrorMessage>
          <Button disabled={isSubmiting}>Submit New Ticket {isSubmiting && <Spinner />}</Button>
      </form>
    </div>
  )
}

export default NewTicketPage