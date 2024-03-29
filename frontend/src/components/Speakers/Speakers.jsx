import "./Speakers.css";
import Heading from "../Heading";
import { socials, speakers } from "../../constants";


const Speakers = () => {
  return (
    <section id="team">
      <div className="container my-3 py-5 text-center">
        <div className="row mb-5">
          <Heading tag="" title="Speakers" />
        </div>
        <div className="flex flex-row justify-center gap-10">
          {speakers.map((speaker) => (
            <div className="col-lg-3 col-md-6 pt-1" key={speaker.id}>
              <div className="card h-100">
                <div className="card-body">
                  <img
                    className="img-fluid rounded w-55 mb-3 p-5"
                    src={speaker.imageUrl}
                    alt={speaker.name}
                  />
                  <h3>{speaker.name}</h3>
                  <h5>{speaker.role}</h5>
                  <p>{speaker.text}</p>

                  <div className="flex items-center justify-center ">
                    {speaker.socials.map((social) => (
                      <div className="p-4" key={social.id}>
                        <a href={social.url}
                          className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6" target="_blank" rel="noreferrer"
                        >
                        <img src={social.icon} width={16} height={16} alt={social.title} />
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
