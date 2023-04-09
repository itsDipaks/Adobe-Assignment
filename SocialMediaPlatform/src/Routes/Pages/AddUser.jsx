import React from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AddnewUser} from "../../Redux/Users/User.action";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
const AddUser = () => {
  let [name, setname] = useState("");
  let [email, setimail] = useState("");
  let [bio, setbio] = useState("");
  let [error, seterror] = useState("");
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let {loading, data} = useSelector((store) => store.user);

  let nameinput = (e) => {
    let data = e.target.value;
    if (data.length <= 50) {
      setname(e.target.value);
    } else {
      seterror("enter correct");
    }
  };

  let bioinput = (e) => {
    let data = e.target.value;
    if (data.length <= 200) {
      setbio(e.target.value);
    } else {
      seterror("enter correct format");
    }
  };

  let emailinput = (e) => {
    let data = e.target.value;
    setimail(e.target.value);
  };

  let handeldsubmituser = () => {
    console.log(name.length);
    if ((name.length > 0, email, bio)) {
      if (email.includes("@" && ".com")) {
        seterror("");
        dispatch(AddnewUser({name, email, bio}));

        setTimeout(() => {
          if (!loading && data) {
            Swal.fire({
              position: "top",
              icon: "success",
              title: "User Added ",
              showConfirmButton: false,
              timer: 1500,
            });

            navigate("/");
          }
        }, 2000);
      } else {
        seterror("Enter right Email");
      }
    } else {
      seterror("Please Enter all the fields");
    }
  };

  return (
    <div>
      <div class="lg:w-1/3 md:w-1/2 sm:w-4/5 xs:w-4/5 bg-white flex flex-col md:ml-auto w-full m-auto md:py-8 mt-8 md:mt-0">
        <h2 class="text-gray-500 text-4xl mb-1 font-medium title-font text-center">
          Add User
        </h2>
        {error && error ? (
          <div
            class="bg-red-100 border border-red-400 text-red-700 px-2 py-1 rounded absolute"
            role="alert"
          >
            <span class="block sm:inline">{error}</span>
          </div>
        ) : (
          ""
        )}
        <div class="relative">
          <label for="name" class="leading-7 text-sm text-gray-600 mt-14">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={name}
            onChange={(e) => nameinput(e)}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <p className="text-right">{name.length}/50</p>
        </div>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            onChange={(e) => emailinput(e)}
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Bio
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={bio}
            onChange={(e) => bioinput(e)}
            placeholder="Contetnt should between  0-200 Charector "
            class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          >
            gg
          </textarea>
          <p className="text-right">{bio.length}/200</p>
        </div>
        <button
          onClick={handeldsubmituser}
          class="text-white bg-indigo-500 border-0 py-2  w-full m-auto  focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {loading ? "Loading" : "Add"}
        </button>

        {/* </form> */}
      </div>
    </div>
  );
};

export default AddUser;
