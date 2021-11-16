const ContributeList = (props) => {
    console.log(props.responseAPIDataSkatepark);
    return (
        <div className="profile-contribution">
            <h2 className="profile-contribution-title">Mes contributions</h2>
            <h2 className="profile-add-title">Ajout de Spot</h2>
            <div className="profile-contribution-articles">
                <h3 className="profile-articles-title">Titre de l'annonce</h3>
                <button className="button button-articles" type="button">Consulter</button>
                <button className="button button-articles" type="button">Modifier</button>
                <button className="button button-articles" type="button">Supprimer</button>
            </div>
            <h2 className="profile-add-title">Matos à vendre</h2>
            <div className="profile-contribution-articles">
                <h3 className="profile-articles-title">Titre de l'annonce</h3>
                <button className="button button-articles" type="button">Consulter</button>
                <button className="button button-articles" type="button">Modifier</button>
                <button className="button button-articles" type="button">Supprimer</button>
            </div>
            <h2 className="profile-add-title">Ajout d'évènement</h2>
            <div className="profile-contribution-articles">
                <h3 className="profile-articles-title">Titre de l'annonce</h3>
                <button className="button button-articles" type="button">Consulter</button>
                <button className="button button-articles" type="button">Modifier</button>
                <button className="button button-articles" type="button">Supprimer</button>
            </div>
        </div>
    );
};
export default ContributeList;
