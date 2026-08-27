import Breadcrumb from '../components/Breadcrumb.jsx'
import BptProgramme from '../components/BptProgramme.jsx'
import { bosDocs, curriculumDocs, regulationDocs } from '../data/academics.js'

const Bpt = () => {
  function openFile(path) {
    window.open(encodeURI(path), '_blank')
  }

  return (
    <div>
      <Breadcrumb title="Bachelor of Physiotherapy (BPT)" />
      <BptProgramme showbutton={false} />
      <div className="container card-dops">
        <h3 className="card-dops__heading">Curriculum and Syllabus</h3>
        {curriculumDocs.map((doc) => (
          <button key={doc.label} onClick={() => openFile(doc.file)}>
            {doc.label}
          </button>
        ))}
      </div>
      <div className="container card-dops">
        <h3 className="card-dops__heading">Regulations</h3>
        {regulationDocs.map((doc) => (
          <button key={doc.label} onClick={() => openFile(doc.file)}>
            {doc.label}
          </button>
        ))}
      </div>
      <div className="container card-dops">
        <h3 className="card-dops__heading">BoS</h3>
        {bosDocs.map((doc) => (
          <button key={doc.label} onClick={() => openFile(doc.file)}>
            {doc.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Bpt
