import Image from "next/image";


export default function Home() {
  return (
    <div>
       <nav className="container mx-auto xl:widt-[1440px] py-9 grid grid-cols-2">
      <div className="logo"><img src="/Group 11.png" alt="" /></div>
      <div className="nav-links">
        <ul className="flex justify-between">
          <li><a href="#!">MAIN</a></li>
          <li><a href="#1">GALLERY</a></li>
          <li><a href="#1">PROJECTS</a></li>
          <li><a href="#1">CERTIFICATIONS</a></li>
          <li><a href="#1">CONTACTS</a></li>
        </ul>
      </div>
    </nav>
    <section className="container xl:width-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 items-center mb-20">
      <div className="hero-heading">
        <h1 className="xl:text-[64px] text-[32px] md:text-[50px] leading-[50px] text-center md:text-start  text-[#BDBDBD] font-light">
          PROJECT <br />
          <span className="text-black font-bold">Lorem</span>
        </h1>
        <br />
      </div>
      <div className="hero-img">
        <img src="/Rectangle 6.png" alt="" />
      </div>
    </section>
    <section className="container xl:width-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-x-4 mt-10">
      <div className="grid grid-cols-2 gap-x-2"><div className=""><img  src="/Rectangle 8.png" alt=""/><img className="py-3" src="/Rectangle 10.png" alt=""/></div><div className="mt-8"><img src="/Rectangle 9.png" alt=""/></div></div>
      <div className="">
        <h1 className="xl:text-[64px] text-[32px] md:text-[50px] text-[#BDBDBD] font-light text-center md:text-start mt-5 md:mt-0">About</h1>
        <p className="xl:pe-44 mt-5 md:mt-3 xl:mt-5 text-center md:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className=" w-[100%] mx-auto  md:w-[222px] h-[71px] bg-gray-50 mt-14 md:mt-3 xl:mt-14">READ MORE</button>
      </div>
    </section>

    <section className="container xl:width-[1440px] mx-auto my-10 "><h1 className="xl:text-[64px] text-[32px] md:text-[50px] text-center text-start  font-light text-[#BDBDBD]">Main Focus/Mission Statement</h1>
    <div className="grid grid-cols-2 mt-5"><div className=" xl:grid grid-cols-6"><img className="xl:col-span-1" src="/1 (1).png" alt=""/><p className="xl:col-span-2 xl:leading-[38px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.</p></div>
    <div className=" xl:grid grid-cols-6"><img className="xl:col-span-1" src="/2 (1).png" alt=""/><p  className="xl:col-span-3 xl:ms-9 xl:leading-[38px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna mauris porttitor tortor, a auctor est felis ut nisl.</p></div></div>
        </section>


         {/* Projects section  */}
         <section className="container xl:width-[1440px] mx-auto my-10">
          <h1 className="xl:text-[64px] text-[32px] md:text-[50px] text-center md:text-start font-light text-[#BDBDBD]">Our Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 mt-10"><div className="md:col-span-2 relative"><img className="w-full hover:brightness-75" src="/Rectangle 12.png" alt=""/><div className="absolute top-4">asd</div></div>
          <div className="md:col-span-2 "><img className="w-full" src="/image 15.png" alt=""/></div>
          <div className="md:col-span-1"><img className="w-full h-[80%]" src="/image 16.png" alt=""/></div>
          <div className="md:col-span-2"><img className="w-full  h-[80%]" src="/image 17.png" alt=""/></div>
          <div className="md:col-span-1"><img className="w-full h-[80%]" src="/image 18.png" alt=""/></div></div>
         </section>


         <section className="container xl:width-[1440px] mx-auto">
          <h1 className="xl:text-[64px] text-[32px] md:text-[50px] text-center md:text-start text-[#BDBDBD] font-light">Contact Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-3 mt-5"><div><form className="grid grid-cols-1 gap-y-4" action=""><input className="h-12 bg-[#F3F3F3] ps-6" type="text" placeholder="Name"/><input className="h-12 bg-[#F3F3F3] ps-6" type="number" name="" id="" placeholder="Phone Number*" required/><input className="h-12 bg-[#F3F3F3] ps-6" type="email" name="" id="" placeholder="E-mail*" required/><input className="h-12 bg-[#F3F3F3] ps-6 " type="text" name="" id="" placeholder="Interested-In"/><textarea className="bg-[#F3F3F3] ps-6 pt-5 resize-none h-[200px]  md:h-[160%]  xl:h-[160px]" name="" id="" placeholder="Message*" required></textarea></form><button className="bg-[#333333] w-[100%] mx-auto  md:w-[222px] h-[71px] mt-20 text-white">SEND EMAIL</button></div>
          <div className="col-span-2"><img className="col-span-1 w-full " src="/image 12.png" alt=""/></div></div>
          
         </section>


         <footer className=" xl:width-[1440px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-20 mt-10 text-white bg-[#333333] ps-9 py-20">
<img className="" src="/Group 11 1.png" alt="logo"/>
<ul className="grid gap-y-4"><li><h2 className="pb-5">Information</h2></li>
<li>Main</li>
<li>Gallery</li>
<li>Projects</li>
<li>Certifications</li>
<li>Contacts</li></ul>
<ul className="grid gap-y-4"><li><h2 className="pb-5">Contacts</h2></li>
<li>1234 Sample Street <br />
  Austin Texas 78704</li>
<li>512.333.2222</li>
<li>sampleemail@gmail.com</li></ul>
<ul className=""><li><h2 className=" pb-5">Social Media</h2></li>
<li><img className="inline-block " src="/icons/facebook.svg" alt=""/> <img className="inline-block ps-5" src="/icons/Shape.svg" alt=""/><img className="inline-block ps-5" src="/icons/Linked In.svg" alt=""/><img className="inline-block ps-5" src="/icons/pininterest.svg" alt=""/></li></ul>
        </footer>


    </div>
  );
}
