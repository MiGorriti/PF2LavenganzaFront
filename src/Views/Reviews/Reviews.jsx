import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../Redux/action/actions';

const Reviews = ({id}) => {

    const dispatch= useDispatch()

    useEffect(()=>{
        dispatch(getReviews(id));
    }, [dispatch])

    const reviews=useSelector((state)=> state.reviews)
  return (
    <div>
        <h2>Reviews:</h2>
        <div>
            {
                !reviews.length 
                ? <h4>No hay comentarios</h4>
                : <li>
                    {
                        reviews?.map((rev)=>{
                            return <ul>
                                <p>{rev.pushDate}</p>
                                <p>{rev.description}</p>
                            </ul>
                        })
                    }
                </li>
            }
        </div>
    </div>
  )
}

export default Reviews