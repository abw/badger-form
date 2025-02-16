import badgerUrl  from '/images/animals/badger.jpg'
import kittenUrl  from '/images/animals/kitten.jpg'
import gorillaUrl from '/images/animals/gorilla.jpg'
const URLS: Record<string, string> = {
  badger: badgerUrl,
  kitten: kittenUrl,
  gorilla: gorillaUrl
}
{/* START */}
// PRETEND: const URLS: Record<string, string> = {
// PRETEND:   badger: '/images/badger.jpg',
// PRETEND:   kitten: '/images/kitten.jpg',
// PRETEND:   gorilla: '/images/gorilla.jpg'
// PRETEND: }

interface PictureProps {
  animal: string,
  select: () => void
  selected: boolean
}

const Picture = ({
  animal, select, selected
}: PictureProps) =>
  <div
    className={`animal ${selected ? 'selected' : ''}`}
    onClick={select}
  >
    <img
      src={URLS[animal]}
      width="120" height="120"
      alt={animal}
    />
  </div>

export default Picture