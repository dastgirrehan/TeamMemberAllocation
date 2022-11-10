const Footer = () => {

  var today = new Date();
  return (
    <footer className="container">
      <div className="row justify-content-center mt-4 mb-4">
        <div className="col-8">
          <h5>Team Allocation APP - {today.getFullYear()}</h5>
        </div>
      </div>
    </footer>
  )
}

export default Footer