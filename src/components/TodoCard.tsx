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
import { deleteTodo } from '../store/slices/todosSlice';

interface Props {
  id: string;
  title: string;
  description: string;
}

export const TodoCard: FC<Props> = ({ description, id, title }) => {

  const { isModalOpen } = useAppSelector( state => state.modalUpdate );
  const { isLoading, message, todos, selectedTodo } = useAppSelector( state => state.todos );

  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch( openCloseModal('Modificar Todo') );
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
        <IconButton onClick={ () => handleModal() }>
          <AutorenewOutlined color="info" />
        </IconButton>
        <IconButton onClick={ () => handleDelete( id ) }>
          <DeleteForeverOutlined color='error' />
        </IconButton>
      </CardActions>
    </Card>
  )
}
