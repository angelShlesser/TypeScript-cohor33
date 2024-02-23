// С помощью пакета uuid мы будем использовать v4, для уникальной id
import {v4} from 'uuid';

import './styles.css';

function Homeworks20 (){
    //let firstName = "John", let lastName = "Doe", let job = "Software Engineer", let isManager = false, let experience = 5, let email = "john.doe@google.com" let programLangs = ["JavaScript", "Python", "Machine Learning"]
    let firstName: string = "John";
    let lastName: string = "Doe";
    let job: string = "Software Engineer";
    let isManager: boolean = false;
    let experience: number = 5;
    let email: string = "john.doe@google.com";
    let programLangs: string[] = ["JavaScript", "Python", "Machine Learning"]
    let position: string = isManager ? "Manager" : "Employee";

    return (
      <div className='homeworks20-wrapper'>
        <div className="card">
        <img src='https://wallpaperaccess.com/full/5673721.jpg' alt="Image" />
          <h2>{`${firstName} ${lastName}`}</h2>
          <p><strong>Job:</strong> {job}</p>
          <p><strong>Status:</strong> {position}</p>
          <p><strong>Experience:</strong> {experience} years</p>
          <p><strong>Email:</strong> {email}</p>
          <div>
            <strong>Programming Languages:</strong>
            <ul>
            {programLangs.map((lang: string) => {
              const uniqueKey = v4();
              return <li key={uniqueKey}>{lang}</li>;
            })}
            </ul>
          </div>
        </div>
        </div>
      ); 
}

export default Homeworks20;