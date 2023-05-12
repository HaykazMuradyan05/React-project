import React from 'react'
import {useForm} from 'react-hook-form'
import Input from '../../component/Input/Input'
import './RegisterPage.css'

export default function RegisterPage(){
    const{handleSubmit, control}=useForm()
    const onSubmit = (data) => console.log(data);
    const InpMap=[
        {
            id:1,
            name:'firstName',
            type:'text',
            pl:"Firs Name"
        },
        {
            id:2,
            name:'lasttName',
            type:'text',
            pl:"Last Name"
        },
        {
            id:3,
            name:'email',
            type:'email',
            pl:"Email"
        },
        {
            id:4,
            name:'password',
            type:'password',
            pl:"Password"
        }
    ]
    return(
        <div className='formheader'>
            <form onSubmit={handleSubmit(onSubmit)}>
                {InpMap?.map((e)=>(
                    <Input key={e.id} name={e.name} control={control} type={e.type} placeholder={e.pl}/>
                ))}
                {/* <Input name='firstName' control={control} type='text' placeholder='first name'/>
                <Input name='lastName' control={control} type='text' placeholder='last name'/>
                <Input name='email' control={control} type='email' placeholder='email'/>
                <Input name='password' control={control} type='password' placeholder='password'/> */}
                <input type='submit' value={'Submit'}/>
            </form>
        </div>
    )
}