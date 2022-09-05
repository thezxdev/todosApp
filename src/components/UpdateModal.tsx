import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../store';
import { openCloseModal } from '../store/slices/updateModalSlice';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const UpdateModal = () => {

  const { isModalOpen } = useAppSelector( state => state.modalUpdate );
  const dispatch = useAppDispatch();

  const handleClose= () => {

    dispatch( openCloseModal() );

  }

  return (
    <Modal
      open={ isModalOpen }
      onClose={ () => handleClose() }
    >
      <Box sx={ style }>
        <Typography>
          lkasdlkjasd
        </Typography>
      </Box>
    </Modal>
  )
}
