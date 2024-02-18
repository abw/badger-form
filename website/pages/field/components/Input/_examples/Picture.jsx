import badgerUrl  from '/images/animals/badger.jpg'
import kittenUrl  from '/images/animals/kitten.jpg'
import gorillaUrl from '/images/animals/gorilla.jpg'
{/* START */}
import React from 'react'
/* REAL */const URLS = { badger: badgerUrl, kitten: kittenUrl, gorilla: gorillaUrl }/* UNREAL */

const Picture = ({ animal, select, selected }) =>
  <div
    className={`animal ${selected ? 'selected' : ''}`}
    onClick={select}
  >
    <img
      /* REAL */src={URLS[animal]}/* UNREAL */// PRETEND: src={`/${animal}.jpg`}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default Picture