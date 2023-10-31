import './CV.css';
export const CV = () => {
    return (
        <main>
        <h1>CV PERSONEL</h1><br></br>
            <h3>Nom:</h3>
            <p id="nom">El Maslouhi</p>
            <h3>Prenom:</h3>
            <p id="prenom">Mouad</p>
            <h3>Age:</h3>
            <p id="age">20 ans</p>
            <br></br><hr></hr><br></br>
            <h3>Tel:</h3>
            <p id="tel">0689878546</p>
            <h3>Email:</h3>
            <p id="email">mouad.elmaslouhi.2003@gmail.com</p>
            <h3>Adresse:</h3>
            <p id="adresse">Hay El Jadid Rue 16 Tanger</p>
            <br></br><hr></hr><br></br>
            <h3>Titre de CV:</h3>
            <p id="titre">Eleve ingénieur officier de réserve</p>
            <br></br><hr></hr><br></br>
            <h3>Objectif professionnel : </h3>
            <p id="objprf">
            <p>
            Je souhaite appliquer mes compétences techniques et mes connaissances en informatique afin de participer à des projets. Mon but est de créer des solutions technologiques et de travailler efficacement au sein d'équipes performantes.
            </p><br></br>    
            </p>
            <hr></hr><br></br>
            <h3>Formation et Diplomes: </h3>
            <p id="dip">
            <li>2021-2023: Classes préparatoires aux grandes écoles d'ingénieurs, filière MP au lycée MOULAY AL HASSAN, à Tanger.</li>
            <li> 2023-2026: Cycle d'ingénieurs, à l'Ecole Mohammadia d'Ingénieurs à Rabat.</li><br></br>
            </p>
            <hr></hr><br></br>
            <h3>Compétences Techniques: </h3>
            <p id="tec">
            <li>
            Programmation <progress className='border' value="98" max="100"></progress>
            </li>
            <details>
            Maîtrise de langages tels que Java, Python, C++, JavaScript, etc.
            </details>
            <li>
            Développement web: <progress className='border' value="90" max="100"></progress>
            </li>
            <details>
            Compétence dans HTML5, CSS3, JavaScript, et des frameworks comme Angular ou React.
            </details>
            <li>
            Bases de données: <progress className='border' value="95" max="100"></progress>
            </li>
            <details>
            Connaissance des systèmes relationnels (SQL) et NoSQL (MongoDB, Cassandra, etc.)
            </details>
            <li>
            Architecture web: <progress className='border' value="100" max="100"></progress>
            </li>
            <details>
            Expérience dans la conception de systèmes d'information et l'architecture microservices
            </details>
            </p>
            <br></br><hr></hr><br></br>            
            <h3>Compétences linguistiques: </h3>
            <p id="lin">
            <li>français: maîtrise.</li>
            <li>Arabe: langue maternelle.</li>
            <li>Anglais: assez bon niveau.</li>
            </p>
            <hr></hr>
        <footer>
        <h2>Edite par: MOUAD EL MASLOUHI & ANAS SMAIKI</h2>
        <h2>Derniere Mise a jour: 03/10/2023</h2>
        <h2>Copyright  &#169;</h2>
        </footer>
        </main>
    
    )
}