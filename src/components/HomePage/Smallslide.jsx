import {Slidecss} from './BigSlidesExamplecss'
export const Smallslide = ({image,para})=>{
    return <Slidecss>
        <div>
            <img src={image} alt="" />
        </div>
        <div>
            <p>
       {para}
            </p>
        </div> 
    </Slidecss>
}