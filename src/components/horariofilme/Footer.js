import 'animate.css';

export default function Footer({dataFilme, infofilme}){
    return (
        <div className="footer">
            <div className="contimg animate__animated animate__fadeInRightBig">
                <img src={infofilme.posterURL} alt={infofilme.title}/>
            </div>
            <div className="data animate__animated animate__fadeInRightBig">
                <div>
                    <p className='animate__animated animate__fadeInRightBig'>{infofilme.title}</p>
                    {dataFilme ? (
                    <>
                        <p className='animate__animated animate__fadeInRightBig'>{`${dataFilme[0]} - ${dataFilme[1]}`}</p>
                    </>
                
                ) : ("")}
                </div>
            </div>
        </div>
    )
}