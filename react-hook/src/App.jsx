import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const { register, handleSubmit, getValues, watch, formState: { errors } } = useForm();

  function onSubmit(data) {

    console.log(data)
  }
  useEffect(() => {
    console.log(getValues())
  },
    [watch(getValues())]
  )

  
  return (
    <>
      <div className='App'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("campo1")} /><br />
          <input {...register("campo2", { required: true })} /><br />
          {errors.campo2 && <span>El campo es requerido</span>}<br />

          <input type='submit' />

        </form>

      </div>
    </>
  )
}

export default App
