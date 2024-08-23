
const Contact = () => {
  return (
    <div>
      <h1 className="text-xl font-bold m-4 p-4">Contact Us Page</h1>
      <h2 className="text-xl font-bold m-4 p-4">sub heading</h2>
  
      <form>
          <input className="border border-black m-2 p-2"type="text" placeholder="name"></input>
          <input className="border border-black m-2 p-2"type="text" placeholder="message"></input>
          <button className="border border-black rounded m-2 p-2 bg-green-500 text-white"type="submit">submit</button>
        </form>
    </div>
  );
};

export default Contact;