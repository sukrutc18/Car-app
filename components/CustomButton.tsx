"use client";
import Image from 'next/image';
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,
    containerStyles, handleClick, btnType,textStyles,rightIcon}: CustomButtonProps) => {
  return (
    <button
    disabled={ false }
    type={btnType || "button"}
    // className={"bg primary-blue text-white rounded-full mt-10"
    // }
    onClick={handleClick}>
      <span className= {`flex-1 ${textStyles}`}>
        {title}
      </span> 
      {rightIcon &&(
      <div className="relative h-6 w-6">
        <Image alt="right icon" src={rightIcon} fill className='object-contain'/>
        </div>
      )
        }
    </button>
  )
}

export default CustomButton