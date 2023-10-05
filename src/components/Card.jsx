import starImage from '../assets/star.svg'

const Card = ({elemento, item}) => {

    const bed = elemento.beds === null ? "" : " " + elemento.beds + " beds" ;
    //console.log(bed);

    const superHost = elemento.superHost === false ? "" : "SUPER HOST" ;
    //console.log(superHost);

    return (
        <>
            <div className='row'>
                <ul className='cardSites'>
                    <li className="listSites">
                        <div>
                            <img className="imageApartment" src={elemento.photo}></img>
                        </div>

                        <div>
                            <table>
                                <tr>
                                    <td>
                                        {superHost === "SUPER HOST" ? (
                                            <>
                                                <button disabled className="textSuperHost" key={item}>
                                                    {superHost}
                                                </button>
                                            </>
                                        ): ""}
                                    </td>

                                    <td>
                                        <h6 className="textType" key={item}>
                                            {elemento.type}. 
                                            {bed}
                                        </h6>
                                    </td>
                                    <td>
                                        <h6 className="textRating" key={item}>
                                            <img src={starImage} className="logo" />
                                            {elemento.rating}
                                            . {elemento.city}
                                        </h6> 
                                    </td>
                                </tr>
                            </table>
                            
                        </div>

                        <div>
                            <p className="textTitle" key={item}>{elemento.title}</p>  
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Card;