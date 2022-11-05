function Natbar (props){
return(
    
<nav className="navbar navbar-expand-sm navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="javascript:void(0)">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="mynavbar">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link 2</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="javascript:void(0)">Link 3</a>
        </li>
      
      
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/>
            
        <button className="btn btn-primary" type="button">Search</button>
      </form>
      </ul>
    </div>
  </div>
</nav>
);



}

export default Natbar;