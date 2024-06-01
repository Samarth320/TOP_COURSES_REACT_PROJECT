import React from 'react'
import {FcLike , FcLikePlaceholder} from "react-icons/fc"
import {toast} from "react-toastify";

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandler()
  {
    //checking if course is already liked ? , if yes then we remove it from likedCourses array by filtering
    if(likedCourses.includes(course.id))
      {
        setLikedCourses( (prev)=> prev.filter( (cid)=> (cid !== course.id) ))

        toast.warning("Liked Removed")
      }

      else  //pehle se like nahi hai
      {
        //if likedCourses array is empty
        if(likedCourses.length === 0)
        {
          setLikedCourses([course.id]);
        }  
        else  // array is non-empty
        {
          setLikedCourses((prev)=> [...prev , course.id])
        }
        
        toast.success("Liked Successfully");
      }
  }

  return (
    <div className='bg-bgDark w-[300px] rounded-md overflow-hidden bg-opacity-80'>

      <div className='relative'>

        <img src={course.image.url} />

        <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>

               <button onClick={clickHandler}>
                {
                   likedCourses.includes(course.id) ?  ( <FcLike font-size="1.75rem"/> ) :
                        ( <FcLikePlaceholder fontSize={"1.75rem"} /> )  
                }
              </button>
        </div>


      </div>

      <div className='p-4'>
        <p className='text-white font-semibold text-lg leading-6' >{course.title}</p>

        <p className='mt-2 text-white'>
           {
             course.description.length > 100 ? (course.description.substr(100)) + "..." : (course.description)
           }
        </p>
      </div>


    </div>
  )
}

export default Card