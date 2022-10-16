import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sketch from './sketch'

export default function Home() {
  return (
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">
      <Head>
        <title>W0NYV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sketch />
    </div>
  )
}
