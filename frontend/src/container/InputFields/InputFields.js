import React, { useState } from 'react';
import {Grid, Paper, TextField, Button, ButtonGroup, Typography} from '@mui/material';
import {sendDecode , sendEncode} from '../../store/actions/actions'
import {useDispatch, useSelector} from "react-redux";
import {ArrowLeft, ArrowRight} from "@mui/icons-material";

const InputFields = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.text.data)
    const [input, setInput] = useState({
        encode: '',
        decode: '',
        password: '',
    });

    // useEffect( () => {
    //     return dispatch(sendEncode())
    // }, [dispatch]);

    
    const onInputChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        setInput(prev => ({
            ...prev,
            [name]: value
        }));
    };
    console.log(input);
    const decode = async e => {
        e.preventDefault();
            await dispatch(sendDecode({
                password: input.password,
                decode: input.decode
            }));
        setInput({
            encode: data,
            decode: '',
            password: '',
        })
    };
    
    const encode = async e => {
        e.preventDefault();
            await dispatch(sendEncode({password: input.password, encode: input.encode}));
            setInput({
                encode: '',
                decode: data,
                password: '',
            })
    };
const Log = () => {
    console.log(data);
    console.log(input)
}
    return (
        <Grid container direction="column" spacing={2}  mt={3} >
            <Grid item container direction="row"  alignItems="center" sx={{ justifyContent: 'center'}}>
                <Button onClick={Log}>jokokki</Button>
                <Grid item>
                    <Paper sx={{margin: '2rem'}}>
                        <Typography p={1}>
                            Decoded message
                        </Typography>
                        <TextField
                            label="Decode"
                            multiline
                            rows={3}
                            type="text"
                            name='decode'
                            value={input.decode}
                            onChange={onInputChange}  
                            sx={{ margin: '15px' }}
                        />
                    </Paper>
                </Grid>
                <Grid item >
                    <Paper>
                        <Grid item container direction="column" alignItems="center">
                            <Typography p={1}>
                                Password
                            </Typography>
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="text"
                                name='password'
                                value={input.password}
                                onChange={onInputChange} 
                                sx={{ margin: '0 15px' }}
                            />
                            <ButtonGroup disableElevation variant="contained" sx={{ margin: '15px 0'}}>
                                <Button onClick={decode}>
                                    <ArrowLeft />
                                </Button>
                                <Button onClick={encode}>
                                    <ArrowRight />
                                </Button>
                            </ButtonGroup>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper sx={{margin: '2rem'}}>
                        <Typography p={1}>
                            Encoded message
                        </Typography>
                        <TextField
                            label="Encode"
                            multiline
                            rows={3}
                            type="text"
                            name='encode'
                            value={input.encode}
                            onChange={onInputChange} 
                            sx={{ margin: '15px' }}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default InputFields;
