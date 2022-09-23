import Image from 'next/image';
import React, { Component } from 'react'


export class DetailsThumb extends Component {
    render() {
        const {images, tab, myRef} = this.props;
        return (
            <div className="flex flex-col cursor-pointer pt-2" ref={myRef}>
                {
                images.map((img, index) =>(
                
                    // onClick={() => tab(index)}
                    <figure className='w-20 h-32 max-h-32' key={index}> 
                        <Image className='block' src={img} width={70} height={110} objectFit="cover" alt="thumbnail photo" />
                    </figure>
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb