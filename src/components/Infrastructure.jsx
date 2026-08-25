import { useState, useEffect } from 'react'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const labs = [
  {
    name: 'Biomechanics Lab',
    image: '/assets/img/infrastructure/labs/Biomechanic lab.jpg',
  },
  {
    name: 'Orthopaedic Lab',
    image: '/assets/img/infrastructure/labs/Orthopaedic lab.jpg',
  },
  {
    name: 'Cardio-Respiratory Lab',
    image: '/assets/img/infrastructure/labs/Cardio lab.jpg',
  },
  {
    name: 'Electrotherapy Lab',
    image: '/assets/img/infrastructure/labs/Electrotherapy lab.jpg',
  },
  {
    name: 'Exercise Therapy Lab',
    image: '/assets/img/infrastructure/labs/Exercise therapy lab.jpg',
  },
]

const Infrastructure = () => {
  const [previewIndex, setPreviewIndex] = useState(null)

  const closePreview = () => setPreviewIndex(null)
  const showPrev = () =>
    setPreviewIndex((i) => (i + labs.length - 1) % labs.length)
  const showNext = () => setPreviewIndex((i) => (i + 1) % labs.length)

  useEffect(() => {
    if (previewIndex === null) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closePreview()
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [previewIndex])

  return (
    <section className="infrastructure pb-120">
      <div className="container">
        <div className="section-title text-center mb-25">
          <span className="sub-title">Infrastructure</span>
          <h2 className="title">Our Labs</h2>
        </div>
        <div className="row mt-none-30 justify-content-center">
          {labs.map((lab, index) => (
            <div className="col-lg-4 col-md-6 mt-30" key={lab.name}>
              <figure
                className="lab-tile"
                onClick={() => setPreviewIndex(index)}
              >
                <div className="lab-tile__img">
                  <img src={lab.image} alt={lab.name} loading="lazy" />
                </div>
                <figcaption className="lab-tile__name">{lab.name}</figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>

      {previewIndex !== null && (
        <div className="lab-lightbox" onClick={closePreview}>
          <button
            className="lab-lightbox__close"
            onClick={closePreview}
            aria-label="Close preview"
          >
            <FiX />
          </button>
          <button
            className="lab-lightbox__nav lab-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous image"
          >
            <FiChevronLeft />
          </button>
          <figure
            className="lab-lightbox__figure"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={labs[previewIndex].image}
              alt={labs[previewIndex].name}
            />
            <figcaption>{labs[previewIndex].name}</figcaption>
          </figure>
          <button
            className="lab-lightbox__nav lab-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next image"
          >
            <FiChevronRight />
          </button>
        </div>
      )}
    </section>
  )
}

export default Infrastructure
