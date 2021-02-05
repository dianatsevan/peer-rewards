import React, { useCallback, useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import GiveAwardForm from './give-award-form';

const MatGiveAwardModal = () => {
  const [open, setOpen] = useState(false);
  const toggleModal = useCallback(() => setOpen(!open), [open]);

  return (
    <>
      <Button
        variant="contained"
        onClick={toggleModal}
        className="bg-white"
      >
        Give a bonus
      </Button>

      <Dialog open={open} onClose={toggleModal} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Give a bonus</DialogTitle>

        <DialogContent>
          <GiveAwardForm onClick={toggleModal} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MatGiveAwardModal;
