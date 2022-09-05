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

interface Props {
  id: number;
  handleUpdate: ( id: number ) => void;
}

export const TodoCard: FC<Props> = ({ id, handleUpdate }) => {
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
        <IconButton onClick={ () => handleUpdate( id )}>
          <AutorenewOutlined color="info" />
        </IconButton>
        <IconButton>
          <DeleteForeverOutlined color='error' />
        </IconButton>
      </CardActions>
    </Card>
  )
}
