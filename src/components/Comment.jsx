
import React from 'react'
import { useEffect } from "react";
import { useSelector } from "react-redux";
import to_slug from "../utils/helper";
function Comment() {
    const item = useSelector((state) => state.item);

    useEffect(() => {
        if (window.FB) {
            window.FB.XFBML.parse();
        }
      }, []);
  return (
    <div className="facebookComment">
            

            <div
                className="fb-comments"
                data-href={"https://wine-hourse.vercel.app/"}
                data-width="100%"
                data-numposts="5"
            ></div>
        </div>
  )
}

export default Comment