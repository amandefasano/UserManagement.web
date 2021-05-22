export default function BoxHeader (props) {

    return (
        <div className="boxHeader">
          <p>Liste des utilisateurs</p>
          <form action="#">
              <input type="text" name="name"/>
              <button type="submit">
                  <i className="fas fa-search"/>
              </button>
          </form>
        </div>
    )
}