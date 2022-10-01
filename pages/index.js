import { useEffect, useState } from "react";

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("https://hubblesite.azurewebsites.net/images/tags/star")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //       setLoading(false);
  //     });
  // }, []);
  return (
    <div>
      {/* <div className="bg-red-500">hello</div>
      {data &&
        data.map((elem, key) => (
          <div key={key} className="bg-red-500 h-screen">
            {elem.imgWithRes.map((image, id) => (
              <div key={id}>
                <img src={image[0]} />
              </div>
            ))}
          </div>
        ))} */}
    </div>
  );
}
