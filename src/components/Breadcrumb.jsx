const Breadcrumb = ({ title, desc }) => {
  return (
    <section
      className="breadcrumb bg_img ul_li"
      style={{ backgroundImage: "url('/assets/img/bg/breadcrumbs.webp')" }}
    >
      <div className="container">
        <div className="breadcrumb__content text-center">
          <h2 className="breadcrumb__title">{title}</h2>
          <p className="breadcrumb__desc">{desc}</p>
        </div>
      </div>
    </section>
  )
}

export default Breadcrumb
