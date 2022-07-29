export default function Footer({dataFilme, infofilme}){
    return (
        <div className="footer">
            <div className="contimg">
                <img src={infofilme.posterURL} alt={infofilme.title}/>
            </div>
            <div className="data">
                <div>
                    <p>{infofilme.title}</p>
                    {dataFilme ? (
                    <>
                        <p>{`${dataFilme[0]} - ${dataFilme[1]}`}</p>
                    </>
                
                ) : ("")}
                </div>
            </div>
        </div>
    )
}