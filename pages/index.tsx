import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button } from '@nextui-org/react';
import Navbar from '../layout/Navbar';

const Home: NextPage = () => {
  return (
    <Navbar></Navbar>
  )
}

export default Home
