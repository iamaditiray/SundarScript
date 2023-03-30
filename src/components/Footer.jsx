import React from 'react'
import { Box, styled } from '@mui/material';

export default function Footer() {
    const Container = styled(Box)`
    height: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #73bae7;
    font-size: 12px
    `
    return (
    <Container>
      <p><b>SundarScript </b>Created by <b>Aditi Ray</b> © February 2023</p>
    </Container>
  )
}

