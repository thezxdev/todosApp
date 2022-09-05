import { Grid } from '@mui/material';
import { TodoCard } from './components/TodoCard';
import { UpdateModal } from './components/UpdateModal';
import { useAppSelector } from './store';

export const TodoApp = () => {

  const { isModalOpen } = useAppSelector( state => state.modalUpdate );

  return (
    <Grid
      container
      margin='0 auto'
      spacing={3}
      width='80%'
    >
      {
        [1, 2, 3, 4, 5, 6, 7, 8, 9].map(val => (
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
            key={val}
          >
            <TodoCard
              id={val}
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