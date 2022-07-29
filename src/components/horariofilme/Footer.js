export default function Footer({infofilme}){
    return (
        <div className="footer">
            <div className="contimg">
                <img src={infofilme.posterURL} alt={infofilme.title}/>
            </div>
            <p>{infofilme.title}</p>
        </div>
    )
}