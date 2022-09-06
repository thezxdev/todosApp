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

// interface Props {
//   id: number;
// }

export const TodoCard: FC = () => {

  const { isModalOpen } = useAppSelector( state => state.modalUpdate );
  const { isLoading, message, todos, selectedTodo } = useAppSelector( state => state.todos );
  const dispatch = useAppDispatch();

  const handleModal = () => {
    dispatch( openCloseModal() );
  }

  return (
    <Card>
      <CardHeader
        sx={{
          textAlign: 'center'
        }}
        title="skksksks"
        action={
          <IconButton aria-label="settings">
            <MoreVertOutlined />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2">
          Consequat eu anim reprehenderit cupidatat cupidatat magna.
          Consequat eu anim reprehenderit cupidatat cupidatat magna.
          Consequat eu anim reprehenderit cupidatat cupidatat magna.
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <IconButton onClick={ () => handleModal() }>
          <AutorenewOutlined color="info" />
        </IconButton>
        <IconButton>
          <DeleteForeverOutlined color='error' />
        </IconButton>
      </CardActions>
    </Card>
  )
}
