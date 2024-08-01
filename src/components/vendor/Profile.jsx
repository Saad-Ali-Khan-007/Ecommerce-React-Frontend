const Profile = () => {
  return (
    <div className="flex flex-col items-center  justify-center gap-6">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold mt-16 mb-3">Profile Settings</h1>
      </div>

      <form
        method="POST"
        action="#"
        className="flex flex-col gap-2 max-lg:w-[40%] max-md:w-[40%] max-sm:w-[65%] w-[30%]"
      >
        <label>Name</label>
        <input
          type="text"
          name="name"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Contact</label>
        <input
          type="text"
          name="contact"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <label>Image</label>
        <input
          type="file"
          name="img"
          className="p-3 rounded-md bg-gray-100 focus:outline-gray-500"
        />
        <div>
          <img width="100%" height="100%" src="" />
        </div>
        <button className="bg-black text-white p-3 rounded-md mt-4 w-[100%]">
          Update
        </button>
      </form>
    </div>
  );
};

export default Profile;
