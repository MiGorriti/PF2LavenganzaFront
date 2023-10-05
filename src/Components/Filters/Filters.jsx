import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterCat, filterLocation, getCategory, getLocations } from "../../Redux/action/actions";

 const Filters = () => {
 const dispatch = useDispatch();
 const category = useSelector((state)=> state.category)
 const location = useSelector((state)=> state.location)
 useEffect(()=>{
dispatch(getCategory())
dispatch(getLocations())
 },[])

 const handleSelector = (e) =>{
   const event  = e.target.value
   dispatch(filterCat(event))
 }

 const handleSelector2 = (e) =>{
   const event = e.target.value
   dispatch(filterLocation(event))
 }


  return (
    <div className='bg-black w-10 h-10'>
<select onChange={handleSelector} >
   <option value="default">Default</option>
   {category&& category.map((cat)=>(
    <option key={cat.id} value={cat.name}>{cat.name}</option>
   ))}  
</select>
<select onChange={handleSelector2}>
   <option value="default">Default</option>
   {location&& location?.map((location)=>(
    <option key={location.id} value={location.direction}>{location.direction}</option>
   ))}  
</select>
    </div>


  )
}
export default Filters;
