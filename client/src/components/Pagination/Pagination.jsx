import React from 'react';
import './Pagination.css'


export default function Pagination(props){

    const pageNumbers = [];
    for (var i=1; i <=Math.ceil(props.totalPosts/props.postsPerPage);i++){
        pageNumbers.push(i)
    }
    

    return(
      
        <div>
            <span className='pages'>{'Pages:    '}</span>
               {
                    <ul class="pagination">
                        <li><a href="#" >«</a></li>
                   {pageNumbers.map(number => <li><a href='#' onClick={()=>props.paginate(number)}>{number}</a></li>                     
                            
                    )}
                        <li><a href="#" >«</a></li>
                   </ul>
               }
    
           
        </div>

    )
}