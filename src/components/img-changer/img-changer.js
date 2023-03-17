import './img-changer.css'
import Button from '../button/button'
import { useState } from 'react'
import parrot from '../../images/parrot.jpeg'
import kingfisher from '../../images/kingfisher.jpeg'

export default function ImgChanger () {

    const [currentImageIndex , setCurrentImageIndex] = useState(0)

    // using some image links and some images are downloaded and added in images folder in 
    //  our react project and using that by importing here ...
    //  here you get to know both way to import image in our project : 1) by saving in react project 2) by using direct link
    
    const images = [
        'https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg?auto=compress&cs=tinysrgb&w=800' ,
        'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=800' ,
        parrot,
        kingfisher
    ]

    function handleChnagePicture () {

        // LOGIC 1
        if(currentImageIndex+1 === images.length){
            setCurrentImageIndex(0)
            return
        }
         setCurrentImageIndex(currentImageIndex+1)

        //  LOGIC 2
        // const newCurrentImageIndex = currentImageIndex + 1
        // setCurrentImageIndex(newCurrentImageIndex%images.length)
    }

    return (
        <div className='wrapper'>
            <div className='leftSec'>
                <img 
                    src = {images[currentImageIndex]}
                    height = '300px'
                    width = '300px'
                />
                
            </div>
            <div className='rightSec'>
                <Button 
                    buttonText = 'Change Pic'
                    customClassName = 'changePicBtn'
                    onClickAction = {handleChnagePicture}
                />
            </div>

        </div>
    )
}