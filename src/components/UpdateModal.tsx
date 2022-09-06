import { SaveOutlined } from '@mui/icons-material';
import { Button, Checkbox, FormControlLabel, IconButton, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../store';
import { openCloseModal } from '../store/slices/updateModalSlice';
import { useForm } from '../hooks/useForm';

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

export const UpdateModal = () => {

  const { isModalOpen, message } = useAppSelector( state => state.modalUpdate );
  const dispatch = useAppDispatch();

  const handleClose= () => {

    dispatch( openCloseModal('') );

  }

  // Formulario
  const { completed, description, title, onChange, state } = useForm({
    title: '',
    description: '',
    completed: false,
  });

  return (


    <Modal
      open={ isModalOpen }
      onClose={ () => handleClose() }
    >
      <Box sx={ style }>
        <Typography variant="h4" textAlign="center" sx={{ marginBottom: 1 }}>{ message }</Typography>
        <form>
          <TextField
            fullWidth
            label="Título"
            name="title"
            onChange={ ({ target }) => onChange( target.value, 'title' ) }
          />

          <FormControlLabel
            sx={{ width: '100%' }}
            label="¿Completado?"
            control={ <Checkbox
              name="completed"
              onChange={ ({ target }) => onChange( target.checked, 'completed' ) }
            /> }
            
          />

          <TextField
            fullWidth
            label="Descripción"
            name="description"
            onChange={ ({ target }) => onChange( target.value, 'description' )}
          />

          <pre>{ JSON.stringify( state ) }</pre>

          <Button variant="outlined" startIcon={ <SaveOutlined /> } fullWidth sx={{ marginTop: 2 }}>
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