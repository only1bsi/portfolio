import React from 'react'

function ProfileDetails() {
  return (
    <div className="w-[290.72px] h-[231.09px] px-[74px] py-[30px] bg-gradient-to-br from-zinc-800 to-zinc-800 shadow border border-black justify-start items-center inline-flex">
  <div className="flex flex-col items-center"> {/* Use flexbox to align items vertically */}
  <div className="w-[90px] h-[90px] relative rounded-[45px]"> {/* Image container */}
    <img className="w-full h-full rounded-[45px]" src="https://via.placeholder.com/90x90" alt="Profile" /> {/* Image */}
  </div>
  <div className="text-center mt-2"> {/* Text container */}
    <div className="text-gray-50 text-sm font-semibold font-poppins">Artur Carter</div> {/* Name */}
    <div className="text-neutral-400 text-[13px] font-normal font-poppins mt-1">Front-end Developer<br/>UI/UX Designer</div> {/* Role */}
  </div>
</div>
</div>
     

  )
}

export default ProfileDetails