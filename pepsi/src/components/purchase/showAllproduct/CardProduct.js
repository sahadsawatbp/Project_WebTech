

const CardProduct = (props)=>{
    const addData = () =>{
        const NewData = {
            name : props.name,
            picture : props.img,
            price : props.price,
            id : props.id,
            count : props.count,
            newPrice : props.price
        }
        props.getData(NewData)
    }

    return (
            <div className='col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-4'  
                style={{width: '250px'}}
            >
                    <div className='card h-100 shadow'  >
                        <img src={props.img} className="card-img-top img-fluid mb-3 mt-5" style={{height: '200px', width: '300px', objectFit: 'contain'}}></img>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.name}</h5>
                            <p>{props.price}</p>    
                            <button className='btn btn-primary' onClick={()=>addData(props)}>add</button>
                        </div>
                    </div>
                </div>
        )}
export default CardProduct