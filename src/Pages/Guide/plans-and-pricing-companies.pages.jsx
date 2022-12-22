import Footer from "../../Components/Footer/footer.component";
import Header from "../../Components/header/header";
import Nav from "../../Components/NavBar/nav.component";
import { ReactComponent as IconPack4 } from "./../../Assets/icons/Icons-01.svg";
// import Crown from "../../Assets/images/crown-image.jpeg";
export default function PlansAndPricingCompanies(props) {
  props.setShowNavBar(true);
  return (
    <>
      <Nav />
      <div className="wrapper bg-[#f2f2f2]  ">
        <div className="flex flex-col md:py-10 sm:py-4  gap-8">
          <div className=" sm:justify-center font-semibold gap-2 text-5xl flex-col flex">
            <h3 className="">Plans & Pricing </h3>
            <h3 className=" text-[#69C080]">Companies & Organizations</h3>{" "}
          </div>
        </div>
      </div>
      <div className="wrapper   ">
        <div className=" flex w-full my-6 gap-6 md:flex-row sm:flex-col">
          <div className=" md:w-4/12 sm:12/12 flex flex-col">
            <h3 className="text-3xl font-semibold  ">
              Headline for regular plans
            </h3>
            <h3 className="text-xl">
              Description of these plans – who are they best suited for? Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
              molestie massa. Ut mollis neque tellus, in tristique libero auctor
              sit amet. Ut at tincidunt tellus, sodales ullamcorper turpis.
              Donec fermentum ligula et vestibulum vulputate.
            </h3>
          </div>
          <div className="shadow-xl md:w-4/12 sm:12/12 flex  flex-col justify-around text-center h-auto rounded-xl ">
            <h3 className="text-3xl font-semibold text-[#69C080] " >Name of plan</h3>
            <h3 className="text-xl py-3" >Feature 1</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 2</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 3</h3>
            <div className="bg-[#f2f2f2] flex-col ">
              <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md">GHS</h3>
           
                <h3 className="text-2xl  ">60.00</h3>
              </div>
              <h3 className="text-xl py-2">Access for 7 Days</h3>
            </div>
            <div className=" bg-[#69C080] flex items-center justify-center rounded-b ">
              <h3 className="text-3xl p-3 uppercase font-semibold text-white ">
                Select plan
              </h3>
            </div>
          </div>

          <div className="shadow-xl md:w-4/12 sm:12/12 flex  flex-col justify-around text-center h-auto rounded-xl ">
            <h3 className="text-3xl font-semibold text-[#69C080] " >Name of plan</h3>
            <h3 className="text-xl py-3" >Feature 1</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 2</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 3</h3>
            <div className="bg-[#f2f2f2] flex-col ">
              <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md">GHS</h3>
           
                <h3 className="text-2xl  ">300.00</h3>
              </div>
              <h3 className="text-xl py-2">Access for 30 Days</h3>
            </div>
            <div className=" bg-[#69C080] flex items-center justify-center rounded-b ">
              <h3 className="text-3xl p-3 uppercase font-semibold text-white ">
                Select plan
              </h3>
            </div>
          </div>
        </div>
      </div>


      <div className="wrapper mt-20  ">
        <div className=" flex w-full my-6 gap-6 md:flex-row sm:flex-col">
        <div className=" md:w-4/12 sm:12/12 flex flex-col">
            <h3 className="text-3xl font-semibold  ">
            Headline for
pro plans
            </h3>
            <h3 className="text-xl">
              Description of these plans – who are they best suited for? Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id
              molestie massa. Ut mollis neque tellus, in tristique libero auctor
              sit amet. Ut at tincidunt tellus, sodales ullamcorper turpis.
              Donec fermentum ligula et vestibulum vulputate.
            </h3>
          </div>
          <div className="shadow-xl md:w-4/12 sm:12/12 flex relative pt-7 flex-col justify-around text-center h-auto rounded-xl ">
          <div className="p-1 w-fit flex absolute right-2  top-0 gap-2 rounded-md  bg-[#FFBE24] ">
                  <IconPack4 fill="#000000" className="h-5 my-auto" />
                  <h4 className=" text-md  "> PRO</h4>{" "}
                </div>
            <h3 className="text-3xl font-semibold text-[#69C080] " >Name of plan</h3>
            <h3 className="text-xl py-3" >Feature 1</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 2</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 3</h3>
            <div className="bg-[#f2f2f2] flex-col ">
            <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md  ">GHS</h3>
           
                <h3 className="text-2xl line-through ">2500.00</h3>
                <h3 className="text-md">SAVE 28%</h3>
              </div>
              <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md">GHS</h3>
           
                <h3 className="text-2xl  ">1800.00</h3>
              </div>
              <h3 className="text-xl py-2">Access for 7 Days</h3>
            </div>
            <div className=" bg-[#69C080] flex items-center justify-center rounded-b ">
              <h3 className="text-3xl p-3 uppercase font-semibold text-white ">
                Select plan
              </h3>
            </div>
          </div>

             <div className="shadow-xl md:w-4/12 sm:12/12 flex relative pt-7 flex-col justify-around text-center h-auto rounded-xl ">
          <div className="p-1 w-fit flex absolute right-2  top-0 gap-2 rounded-md  bg-[#FFBE24] ">
                  <IconPack4 fill="#000000" className="h-5 my-auto" />
                  <h4 className=" text-md  "> PRO</h4>{" "}
                </div>
            <h3 className="text-3xl font-semibold text-[#69C080] " >Name of plan</h3>
            <h3 className="text-xl py-3" >Feature 1</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 2</h3>
            <hr></hr>
            <h3 className="text-xl py-3">Feature 3</h3>
            
            <div className="bg-[#f2f2f2] flex-col ">
            <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md  ">GHS</h3>
           
                <h3 className="text-2xl line-through ">35000.00</h3>
                <h3 className="text-md">SAVE 40%</h3>
              </div>
              <div className="flex justify-center items-end p-2 font-semibold text-[#69C080]   gap-2  ">
                <h3 className="text-md">GHS</h3>
           
                <h3 className="text-2xl  ">3000.00</h3>
              </div>
              <h3 className="text-xl py-2">Access for 30 Days</h3>
            </div>
            <div className=" bg-[#69C080] flex items-center justify-center rounded-b ">
              <h3 className="text-3xl p-3 uppercase font-semibold text-white ">
                Select plan
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
