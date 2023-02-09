import { useState } from "react";
import "./App.css";

interface IPersonType {
  name: string;
}
interface IPerson {
  name: string;
  items: IPersonType[];
}
const newfiles: IPerson[] = [
  {
    name: "People",
    items: [{ name: "David" }, { name: "Sam" }, { name: "Jane" }],
  },
  {
    name: "Animals",
    items: [{ name: "Aardvark" }, { name: "Kangaroo" }, { name: "Snake" }],
  },
];

function App() {
  const [count, setCount] = useState(0);
  const [usedata, setuseData] = useState(newfiles);
  const [show, setShow] = useState(false);

  console.log(usedata[0].items, "====");
  return (
    <div className="App">
      <h2>
        {usedata?.map((daa: IPerson) => (
          <div key={daa.name}>
            <button onClick={()=>setShow(!show)}><p>+{daa.name}</p></button>
           {show&&
             <p key={daa.items[0].name} >
             {daa.items.map((mw: IPersonType) => (
               <p>{mw.name}</p>
             ))}
           </p>
           }
          </div>
        ))}
      </h2>
    </div>
  );
}

export default App;
