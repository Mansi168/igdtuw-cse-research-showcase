import './Speakers.css';
import Heading from '../Heading';

const Speakers = () => {
  return (
    <section id="team">
        <div className="container my-3 py-5 text-center">
            <div className="row mb-5">
                
            <Heading tag="" title="Speakers" />
                    
            </div>
            <div className="flex flex-row justify-center gap-10">
                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fluid rounded w-55 mb-3 p-5"
                                src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=333&q=80"
                                alt="Sophie" />
                            <h3>Sophie Johnson</h3>
                            <h5>Software Engineer</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fluid rounded w-55 mb-3 p-5"
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
                                alt="Lucy" />
                            <h3>Lucy Sanchez</h3>
                            <h5>FrontEnd Developer</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fluid rounded w-55 mb-3 p-5"
                                src="https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8aHVtYW4lMjBtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Brad" />
                            <h3>Brad Smith</h3>
                            <h5>Scrum Master</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 pt-1">
                    <div className="card h-100">
                        <div className="card-body">
                            <img className="img-fluid rounded w-55 mb-3 p-5"
                                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGh1bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                alt="Tom" />
                            <h3>Tom Rogers</h3>
                            <h5>Software Engineer</h5>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi, recusandae.</p>
                            <div className="d-flex flex-row justify-content-center">
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </div>
                                <div className="p-4">
                                    <a href="#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Speakers;