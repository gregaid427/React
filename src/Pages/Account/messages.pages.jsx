import Footer from "../../Components/Footer/footer.component";
import MessagingPane from "../../Components/Messages/message-recipient.component";
import SmilingWoman from "./../../Assets/images/applicant.jpeg";

import { Link } from "react-router-dom";
import { ReactComponent as IconPack1 } from "./../../Assets/icons/Icons-20.svg";
import { ReactComponent as IconPack2 } from "./../../Assets/icons/Icons-22.svg";
import { ReactComponent as IconPack3 } from "./../../Assets/icons/Icons-21.svg";
import Nav from "../../Components/NavBar/nav.component";
import HeaderCompany from "../../Components/header/headercompany";
function MessageList(props) {
  props.setShowNavBar(true);

  let messages = [{}, {}, {}, {}, {}, {}];
  return (
    <>
      <Nav />
      <HeaderCompany
        title={"Welcome,"}
        subtitle={"CompanyName"}
        amount={"25.0"}
      />
      <div className="wrapper  my-8">
        <div className="rounded-xl  shadow-xl p-2 gap-5 border border-slate-200 flex ">
          <div className="flex md:w-4/12 sm:w-12/12 sm:pr-2  flex-col">
            <div className="w-full py-3 flex m-2 justify-between">
              <h3 className="text-xl">Messaging</h3>
              <div className="flex gap-2 justify-between items-center ">
                <IconPack2 className="h-5" />
                <IconPack3 className="h-5 fill-[#69C080] " />
              </div>
            </div>
            <hr></hr>

            <input
              className="w-full  p-2 m-2  text-xl text-black   bg-slate-200 rounded-md"
              placeholder="Search Messages"
            ></input>
            {/* <IconPack1 className="h-5  absolute top-3 left-0" />{" "} */}

            <hr></hr>
            <div className="w-full border-l-4 bg-[#f2f2f2] sm:flex-col md:flex-row border-[#69C080] p-2 flex m-2 gap-3 justify-between">
              <div className="flex gap-2 ">
                <img src={SmilingWoman} className="rounded-full w-3/12 "></img>
                <div className="flex w-9/12 flex-col  gap-1 ">
                  <div className="flex justify-between">
                    <h3 className="text-xm font-semibold ">
                      Christiana Mensah
                    </h3>
                    <h3>5 oct</h3>
                  </div>
                  <h3>previous message goes here</h3>
                </div>
              </div>

              <div className="md:hidden bg-white sm:flex-col flex rounded-md h-fit gap-2 p-2">
                <h3>
                  previous message goes here message goes here message goes here
                  message goes here message goes here
                </h3>
                <hr></hr>
                <div className="relative w-full bottom-0  align-bottom ">
                  <input
                    type="text"
                    placeholder="Type a message here... "
                    className=" w-full  p-1  text-md    bg-slate-200 rounded-md "
                    name=""
                  />
                  <IconPack1 className="h-5 fill-[#69C080] absolute right-2 top-2 " />{" "}
                </div>
              </div>
            </div>

            <div className="w-full border-l-4 border-white  p-2 flex m-2 gap-3 justify-between">
              <img src={SmilingWoman} className="rounded-full w-3/12 "></img>
              <div className="flex w-9/12 flex-col  gap-1 ">
                <div className="flex justify-between">
                  <h3 className="text-xm font-semibold ">Christiana Mensah</h3>
                  <h3>5 oct</h3>
                </div>
                <h3>previous message goes here</h3>
              </div>
            </div>

            <div className="w-full border-l-4 border-white  p-2 flex m-2 gap-3 justify-between">
              <img src={SmilingWoman} className="rounded-full w-3/12 "></img>
              <div className="flex w-9/12 flex-col  gap-1 ">
                <div className="flex justify-between">
                  <h3 className="text-xm font-semibold ">Christiana Mensah</h3>
                  <h3>5 oct</h3>
                </div>
                <h3>previous message goes here</h3>
              </div>
            </div>

            <div className="w-full border-l-4 border-white  p-2 flex m-2 gap-3 justify-between">
              <img src={SmilingWoman} className="rounded-full w-3/12 "></img>
              <div className="flex w-9/12 flex-col  gap-1 ">
                <div className="flex justify-between">
                  <h3 className="text-xm font-semibold ">Christiana Mensah</h3>
                  <h3>5 oct</h3>
                </div>
                <h3>previous message goes here</h3>
              </div>
            </div>

            <div className="w-full border-l-4 border-white  p-2 flex m-2 gap-3 justify-between">
              <img src={SmilingWoman} className="rounded-full w-3/12 "></img>
              <div className="flex w-9/12 flex-col  gap-1 ">
                <div className="flex justify-between">
                  <h3 className="text-md font-semibold ">Christiana Mensah</h3>
                  <h3>5 oct</h3>
                </div>
                <h3>previous message goes here</h3>
              </div>
            </div>
          </div>
          <div className="flex w-8/12 sm:hidden md:flex px-4 border-l-2 flex-col">
            <div className="w-full flex m-2 justify-between">
              <div className="flex w-full justify-between items-center">
                <div className="flex flex-col">
                  {" "}
                  <h3 className="text-2xl  text-[#69C080] font-semibold">
                    Search Messages
                  </h3>{" "}
                  <h3 className="text-md">job title</h3>{" "}
                </div>
                <IconPack2 className="h-5" />{" "}
              </div>
            </div>
            <hr></hr>

            <div className="flex gap-3 flex-row h-full justify-between my-5 ">
              <img
                src={SmilingWoman}
                className=" p-1 rounded-full w-2/12 h-[110px] "
              ></img>
              <div className="flex w-10/12  flex-col h-full justify-between">
                <div className=" flex flex-col ">
                  <div className="flex justify-between w-full">
                    <div className="flex gap-2 ">
                      {" "}
                      <h3 className="text-md font-semibold ">
                        Christiana Mensahgg
                      </h3>
                      <h3>8:35 AM</h3>
                    </div>
                    <h3>5 oct</h3>
                  </div>
                  <h3 className="text-md   ">
                    Searc Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </h3>
                </div>

                <div className="relative w-full bottom-0  align-bottom ">
                  <input
                    type="text"
                    placeholder="Type a message here... "
                    className=" w-full  p-2 px-5 text-xl text-black   bg-slate-200 rounded-xl "
                    name=""
                  />
                  <IconPack1 className="h-7 fill-[#69C080] absolute right-3 top-3 " />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default MessageList;
