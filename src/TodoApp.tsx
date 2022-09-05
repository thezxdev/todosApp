import { useState } from 'react';
import { Grid } from '@mui/material';
import { TodoCard } from './components/TodoCard';

export const TodoApp = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
              handleUpdate={handleOpen}
              id={val}
            />
          </Grid>
        ))
      }

    </Grid>
  )
}
