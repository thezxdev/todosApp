import { AddOutlined } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { TodoCard } from './components/TodoCard';
import { UpdateModal } from './components/UpdateModal';
import { useAppDispatch, useAppSelector } from './store';
import { openCloseModal } from './store/slices/updateModalSlice';

export const TodoApp = () => {

  const { isModalOpen } = useAppSelector(state => state.modalUpdate);
  const { todos } = useAppSelector(state => state.todos);

  const dispatch = useAppDispatch();

  const handleAddTodo = () => {
    dispatch( openCloseModal( 'Crear Todo' ) );
  }

  return (
    <>

      <IconButton
        onClick={ () => handleAddTodo() }
        size="large"
        sx={{
          color: 'white',
          backgroundColor: '#c43743',
          ':hover': { backgroundColor: '#d93d4a', opacity: .9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

      <Grid
        container
        margin='0 auto'
        spacing={3}
        width='80%'
      >
        {
          todos.map(({ id }) => (
            <Grid
              item
              sx={{
                width: {
                  xs: '100%',
                  sm: '50%',
                  md: '50%',
                  lg: '33.3%',
                  xl: '25%'
                }
              }}
              key={id}
            >
              <TodoCard
              />
            </Grid>
          ))
        }


        {/* Mostrar modal */}
        {
          isModalOpen && <UpdateModal />
        }
      </Grid>
    </>

  )
}