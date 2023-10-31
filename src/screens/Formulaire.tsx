import './Formulaire.css';
export const Formulaire = () => {
    return (
        <main>
        <h1>Formulaire</h1>
        <form method='get' action='' className="mt-5 ">
            <div className="mb-3">
                <label className=" block text" htmlFor="nom">Nom:</label>
                <input type='text' name="nom" id="nom" placeholder='Entrez votre nom'/>
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="prenom">Prenom:</label>
                <input type='text' name="prenom" id="prenom" placeholder='Entrez votre prenom'/>
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="email">Email:</label>
                <input className="border" type='email' name="email" id="email" placeholder='Votre Email'/>
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="telephone">Telephone:</label>
                <input type='adress' name="telephone" id="telephone" placeholder='Entrez votre telephone'/>
            </div>
            <div className="mb-3">
                <label className="block text" htmlFor="titre">Titre de CV:</label>
                <input type='text' name="titre" id="titre" placeholder='Entrez le titre de CV'/>
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="adress">Adress:</label>
                <textarea  rows={7} className="resize-none" name="adress" id="adress" />
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="obj">Objectif professionnel:</label>
                <textarea name="obj" id="obj" />
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="compl">Compètences Linguistiques:</label>
                <textarea name="compl" id="compl" />
            </div>
            <div className="mb-3">
                <label className="block" htmlFor="compt">Compètences Techniques:</label>
                <textarea name="compt" id="compt" />
            </div>
            <button id="submit" type="submit" className="block bg-[blue] text-[white] py-1 px-1 hover:bg-[black]">valider</button>
        </form>
        
    </main>
    )
}