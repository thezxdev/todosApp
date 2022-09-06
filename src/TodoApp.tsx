import { Grid } from '@mui/material';
import { TodoCard } from './components/TodoCard';
import { UpdateModal } from './components/UpdateModal';
import { useAppSelector } from './store';

export const TodoApp = () => {

  const { isModalOpen } = useAppSelector( state => state.modalUpdate );
  const { todos } = useAppSelector( state => state.todos );

  return (
    <Grid
      container
      margin='0 auto'
      spacing={3}
      width='80%'
    >
      {
        todos.map(({ id  }) => (
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
            key={ id }
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

  )
}