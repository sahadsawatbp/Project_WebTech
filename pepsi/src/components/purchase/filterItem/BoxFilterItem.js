import './BoxFilterItem.css'
import NavFilterItem from './navFIlterItem'
const BoxFilterItem = (props)=>{
    const getSearchText = (data) =>{
       props.getText(data)
    }
    return(
        <div className="boxfilter">
           <NavFilterItem getSearch={getSearchText}></NavFilterItem>
        </div>
    )
}
export default BoxFilterItem