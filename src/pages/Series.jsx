import React from 'react'
import BannerSeries from '../components/BannerSeries'
import ListaSeries from '../components/ListaSeries'
import MenuGenero from '../components/MenuGenero'
import CarrosselSeries from '../components/CarrosselSeries'

const Series = () => {
  return (
    <>
        <BannerSeries/>
        <MenuGenero/>
        <CarrosselSeries/>
        <ListaSeries/>
    </>
  )
}

export default Series