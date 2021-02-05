import React, { useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { requestEmployees } from '../../../../store/actions/employees';
import { addNewReward } from '../../../../store/actions/rewards';
import { decreaseGiveAmount } from '../../../../store/actions/user';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const GiveAwardForm = ({ onClick }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const employeesData = useSelector(({ employeesData: { employees } }) => employees);
  const userData = useSelector(({ userData: { user } }) => user);
  const [employee, setEmployee] = useState('');
  const [rewardAmount, setRewardAmount] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => dispatch(requestEmployees()), [dispatch]);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    if (!(employee && rewardAmount && message)) {
      alert('Please, fill the form');
      return;
    }

    if (Number.isNaN(+rewardAmount)) {
      alert('Reward should be a number');
      return;
    }

    const newReward = {
      giving: `${userData.firstName} ${userData.lastName}`,
      givingId: +userData.id,
      recipient: employee,
      message,
      rewardAmount,
      date: (new Date()).toLocaleString(),
      avatar: userData.avatar,
    };

    dispatch(addNewReward(newReward));
    dispatch(decreaseGiveAmount(rewardAmount));

    onClick();
  }, [
    dispatch,
    employee,
    message,
    rewardAmount,
    userData.avatar,
    userData.firstName,
    userData.id,
    userData.lastName,
    onClick,
  ]);

  const handleEmployeeChange = useCallback((e) => {
    setEmployee(e.target.value);
  }, []);

  const handleRewardAmountChange = useCallback((e) => {
    setRewardAmount(e.target.value.trim());
  }, []);

  const handleMessageChange = useCallback((e) => {
    setMessage(e.target.value);
  }, []);

  return (
    <form onSubmit={onSubmit}>
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel id="employee">To</InputLabel>

          <Select
            labelId="employee"
            id="employee"
            value={employee}
            onChange={handleEmployeeChange}
            displayEmpty
            className={classes.selectEmpty}
          >
            <MenuItem value="">
              <em> </em>
            </MenuItem>
            {employeesData
              .filter((data) => data.id !== userData.id)
              .map(({ firstName, lastName }) => (
                <MenuItem
                  value={`${firstName} ${lastName}`}
                  key={firstName + Math.random()}
                >
                  {firstName} {lastName}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>

      <div>
        <TextField
          className={classes.formControl}
          value={rewardAmount}
          onChange={handleRewardAmountChange}
          id="reward"
          label="Reward"
        />
      </div>

      <div>
        <TextField
          className={classes.formControl}
          value={message}
          onChange={handleMessageChange}
          id="message"
          label="Why?"
          multiline
          rows={4}
        />
      </div>

      <Button
        variant="contained"
        type="submit"
        color="primary"
        className={classes.formControl}
      >
        Reward
      </Button>
    </form>
  );
};

GiveAwardForm.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default GiveAwardForm;
