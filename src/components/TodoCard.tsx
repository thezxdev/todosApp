import { FC } from 'react';
import {
  AutorenewOutlined,
  DeleteForeverOutlined,
  MoreVertOutlined
} from '@mui/icons-material';
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store';
import { openCloseModal } from '../store/slices/updateModalSlice';
import { deleteTodo, setActiveTodo } from '../store/slices/todosSlice';

interface Props {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

interface todosInterface {
  id: string;
  completed: boolean;
  description: string;
  title: string;
}

export const TodoCard: FC<Props> = ({ description, id, title, completed }) => {

  const { isModalOpen } = useAppSelector( state => state.modalUpdate );
  const { isLoading, message, todos, selectedTodo } = useAppSelector( state => state.todos );

  const dispatch = useAppDispatch();

  const handleUpdate = ( todo: todosInterface ) => {

    dispatch( openCloseModal('Modificar Todo') );
    dispatch( setActiveTodo( todo ) );
  }

  const handleDelete = ( id: string ) => {
    dispatch( deleteTodo( id ) );
  }

  return (
    <Card>
      <CardHeader
        sx={{
          textAlign: 'center'
        }}
        title={ title }
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2">
          { description }
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={ () => handleUpdate({ completed, id, description, title }) }>
          <AutorenewOutlined color="info" />
        </IconButton>
        <IconButton onClick={ () => handleDelete( id ) }>
          <DeleteForeverOutlined color='error' />
        </IconButton>
      </CardActions>
    </Card>
  )
}
