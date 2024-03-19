import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-2.png'

const Footer = () => {
  return (
    <Box mt='80px' bgcolor='#fff3f4'>
      <Stack gap="20px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt='logo' width="200px" height="40px"/>
        <Typography variant='h5' pb="30px" mt="10px">
          Made by Ben Price
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer