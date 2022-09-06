import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { v4 as uuidv4 } from 'uuid';

import { SaveOutlined } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../store';
import { openCloseModal } from '../store/slices/updateModalSlice';

import { setTodo } from '../store/slices/todosSlice';

// import { useForm } from '../hooks/useForm';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#ffffff',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IFormInput {
  title: string;
  description: string;
  completed: boolean;
}

export const UpdateModal = () => {

  const { isModalOpen, message: modalMessage } = useAppSelector( state => state.modalUpdate );
  const dispatch = useAppDispatch();

  const handleClose= () => {

    dispatch( openCloseModal('') );

  }

  const schema = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    completed: yup.boolean().notRequired()
  })

  // Formulario
  const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
    resolver: yupResolver( schema )
  });



  const onSubmit: SubmitHandler<IFormInput> = ( data ) => {

    if( modalMessage === 'Crear Todo' ) {      
      const todo = {
        ...data,
        id: uuidv4()
      }
      dispatch( setTodo(todo ) );
      reset();
      dispatch( openCloseModal('') );
      return;
    }

    // if( modalMessage === 'Modificar Todo' ) {

    //   dispatch();
    //   reset();
    //   return;
    // }

  }

  // const handleSubmit = ( e: SyntheticEvent ) => {
  //   e.preventDefault();
  //   console.log( e );
  // }

  return (

    <Modal
      open={ isModalOpen }
      onClose={ () => handleClose() }
    >
      <Box sx={ style }>
        <Typography variant="h4" textAlign="center" sx={{ marginBottom: 1 }}>{ modalMessage }</Typography>
        <form onSubmit={ handleSubmit( onSubmit ) }>
          <TextField
            fullWidth
            label="Título"
            { ...register('title')}
            // onChange={ ({ target }) => onChange( target.value, 'title' ) }
          />
          { errors.title && <Typography color="red">El título es requerido</Typography> }

          <FormControlLabel
            sx={{ width: '100%' }}
            label="¿Completado?"
            control={ <Checkbox
              { ...register('completed') }
              // onChange={ ({ target }) => onChange( target.checked, 'completed' ) }
            /> }
            
          />

          <TextField
            fullWidth
            label="Descripción"
            { ...register('description') }
            // onChange={ ({ target }) => onChange( target.value, 'description' )}
          />
          { errors.description && <Typography color="red">El título es requerido</Typography> }

          <Button type="submit" variant="outlined" startIcon={ <SaveOutlined /> } fullWidth sx={{ marginTop: 2 }}>
            Guardar
          </Button>


        </form>
      </Box>
    </Modal>
  )
}

// interface todosInterface {
//   id?: string;
//   completed: boolean;
//   description: string;
//   title: string;
// }