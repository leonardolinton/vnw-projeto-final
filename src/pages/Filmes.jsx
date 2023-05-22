import React from 'react'
import BannerFilmes from '../components/BannerFilmes'
import ListaFilmes from '../components/ListaFilmes'
import MenuGenero from '../components/MenuGenero'
import CarrosselFilmes from '../components/CarrosselFilmes'

const Filmes = () => {
  return (
    <>
        <BannerFilmes/>
        <MenuGenero/>
        <CarrosselFilmes/>
        <ListaFilmes/>
    </>
  )
}

export default Filmes