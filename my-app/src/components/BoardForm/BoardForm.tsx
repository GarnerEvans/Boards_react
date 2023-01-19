import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseName, chooseLength, chooseWidth, choosewaveType} from '../../redux/slices/rootslice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface BoardFormProps {
  id?:string;
  data?:{}
};

interface BoardState {
  name: string;
  boardLength: string;
  width: string;
  waveType: string;
  
};

export const BoardForm = (props:BoardFormProps) => {

  const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
  const store = useStore();
  const name = useSelector<BoardState>(state => state.name);
  const { register, handleSubmit } = useForm({ })

  const onSubmit = (data:any, event:any) => { //handle our data when we submit
      console.log(props.id)
      // The ! is for strictly typed Typescript stuff
      if(props.id!){ //if props.id exists
          server_calls.update(props.id!, data);
          console.log(`Updated:${data} ${props.id}`);
          console.log(data);
          setTimeout( () => {window.location.reload()}, 1000);
          event.target.reset();
      } else {
          // Dispatch basically updates our state / Redux store
          dispatch(chooseName(data.name));
          dispatch(chooseLength(data.boardLength));
          dispatch(chooseWidth(data.width));
          dispatch(choosewaveType(data.waveType));
          server_calls.create(store.getState());
          setTimeout( () => {window.location.reload()}, 1000)
      }
  }
  return (
    <div>
        <form onSubmit = {handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Name</label>
                <Input {...register('name')} name="name" placeholder='Name'/>
            </div>
            <div>
                <label htmlFor="boardLength">boardLength</label>
                <Input {...register('board')} name="boardLength" placeholder='Length'/>
            </div>
            <div>
                <label htmlFor="width">Width</label>
                <Input {...register('width')} name="width" placeholder='Width'/>
            </div>
            <div>
                <label htmlFor="waveType">waveType </label>
                <Input {...register('waveType')} name="waveType" placeholder='waveType'/>
            </div>
            
            <Button type='submit'>Submit</Button>
        </form>
    </div>
)}