import React from 'react'
import { useAxios } from "use-axios-client";

const Test = () => {
    // Axios Hooks 2021 - https://www.freecodecamp.org/news/how-to-use-axios-with-react/
    // Login form w Bootstrap - https://www.positronx.io/build-react-login-sign-up-ui-template-with-bootstrap-4/

    const { data, error, loading } = useAxios({
        url: "https://jsonplaceholder.typicode.com/posts/1"
      });
    
      if (loading || !data) return "Loading...";
      if (error) return "Error!";
      if (!loading && data) console.log(data)

    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    )
}

export default Test
