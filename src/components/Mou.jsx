import { FiFileText } from 'react-icons/fi'
import { mouDocs } from '../data/academics.js'

const Mou = () => {
  function openFile(path) {
    window.open(encodeURI(path), '_blank')
  }

  return (
    <section className="mou pb-120">
      <div className="container">
        <div className="section-title text-center mb-25">
          <h2 className="title">MoUs</h2>
        </div>
        <div className="row mt-none-30 justify-content-center">
          {mouDocs.map((doc) => (
            <div className="col-lg-4 col-md-6 mt-30" key={doc.label}>
              <button
                className="mou-tile"
                onClick={() => openFile(doc.file)}
                type="button"
              >
                <span className="mou-tile__icon">
                  <FiFileText />
                </span>
                <span className="mou-tile__name">{doc.label}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Mou
