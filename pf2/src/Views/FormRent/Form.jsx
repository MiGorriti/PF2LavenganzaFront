import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {
   
    getCategory, postProperty,
}from '../../Redux/action/actions.js'

const Form = () =>{
    const dispatch = useDispatch();
    const category = useSelector((state)=> state.category)
    useEffect(()=>{
        dispatch(getCategory())
    },[])
    const [file, setFile] = useState([]);
    const [image, setImage] = useState([]);
    const [property, setProperty] = useState([]);
    const [postForm, setPostForm] = useState ({
        title: '',
        image: [],
        description: '',
        numBeds: '',
        numBaths: '',
        nightPrice: '',
        homeCapacity: '',
        category: []
    })
    const changeHandler = (e) =>{
        const {name, value} = e.target
        setPostForm({
            ...postForm,
            [name]: value
        })
    }

    const handleImage = (e) =>{
        const files = e.target.files;
        const fileList = [];
        let loadedCount = 0;
        for(let i = 0 ; i < files.length; i++){
            const reader = new FileReader();
            reader.onload = (event) =>{
                const imageData = event.target.result;
                fileList.push(imageData);
                loadedCount++;
                if(loadedCount === files.length){
                    setFile(fileList);
                    setImage(fileList)
                    previewFiles(fileList)
                }
            }
            reader.readAsDataURL(files[i]);
        }
    }

    const previewFiles = (files) =>{
        const imagePreviews = [];
        const readers = [];
        for (let i = 0; i < files.length; i++){
            const reader = new FileReader();
            readers.push(reader)
            reader.readAsDataURL(files[i])
            reader.onloadend = () =>{
                imagePreviews.push(reader.result);
                if(imagePreviews.length === files.length){
                    setImage(imagePreviews)
                }
            }
        }
    }

    const selectCategory = (e) => {
        const categoryValue = e.target.value;
        setPostForm({
            ...postForm,
            category: [categoryValue]
        })
    }
    
    const submitHandler = async (e) =>{
        e.preventDefault();
        
        if(postForm.category.length > 0){
            const newProperty = {
                title: postForm.title,
                image: file,
                description: postForm.description,
                numBeds: postForm.numBeds,
                numBaths: postForm.numBaths,
                nightPrice: postForm.nightPrice,
                homeCapacity: postForm.homeCapacity,
                Category: postForm.category
            };
            setFile(file);
            setProperty([...property, newProperty])
            dispatch(postProperty(newProperty))

        setPostForm({
            title: '',
            image: [],
            description: '',
            numBeds: '',
            numBaths: '',
            nightPrice: '',
            homeCapacity: '',
            category: []
        });
        console.log('dispatch', newProperty);
        alert('Your property has been sucessfully published')
        }else{
            alert(`There's a Error`)
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='primer div'>

                <div className='Div'>
                    <input type="text" name="title" value={postForm.title} placeholder='Title For Your Property'onChange={changeHandler} />
                    </div> 

                    <div className='Div'>
                    <input type="text" name="description" value={postForm.description} placeholder='Description of Your Property' onChange={changeHandler}/>
                    </div> 

                    <div className='Div'>
                    <input type="text" name="numBeds" value={postForm.numBeds}  onChange={changeHandler}/>
                    </div> 

                    <div className='Div'>
                    <input type="text" name="numBaths" value={postForm.numBaths} placeholder='Number of Baths From Your Property'onChange={changeHandler} />
                    </div> 

                    <div className='Div'>
                    <input type="text" name="nightPrice" value={postForm.nightPrice} placeholder='Mount Per Night' onChange={changeHandler}/>
                    </div> 

                    <div className='Div'>
                    <input type="file" name="image" onChange={handleImage}/>
                    </div> 
                    <div>
                    <select name="category" value={postForm.category} onChange={changeHandler} >
                    <option value="">Select a Category</option>
                    {category && category?.map((cat)=> (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                    </select>
                    </div>
                    <div>
                 {image && image.map((img, index) => (
                <img key={index} src={img} alt={`Preview ${index}`} />
             ))}
                </div>
                </div>
            </form>
        </div>
    )
}

export default Form