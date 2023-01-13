import React from "react";
import "./css/blog.css";

export default function Blog() {
  return (
    <div>
      <div className="blog-container">
        <div className="blog-title">
          <h1>BLOG</h1>
          <p>_____________</p>
        </div>
        {/* pics and data */}
        <div className="article-container">
          <div className="article-div">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550__340.jpg"
              alt=""
            />

            <h2>
              Breaking your coders <br /> block
            </h2>
            <h5>April,2021 </h5>
            <h6>_____________</h6>
            <div>
              At one time or another,
              <br /> as a developer, we'v all found ourselves hopelessly <br />
              stuck on a coding issue
              <a href="https://www.geeksforgeeks.org/">...</a>
            </div>
          </div>
          <div className="article-div">
            <img
              src="https://cdn.pixabay.com/photo/2016/04/13/19/20/binary-1327493__340.jpg"
              alt=""
            />
            <h2>
              !awake:this is your <br />
              barain on caffeine
            </h2>
            <h5>june,2021 </h5>
            <p>_____________</p>
            <div>
              At one time or another,
              <br /> as a developer, we'v all found ourselves hopelessly <br />
              stuck on a coding issue <a href="https://www.geeksforgeeks.org/">...</a>
            </div>
          </div>{" "}
          <div className="article-div">
            <img
              src="https://cdn.pixabay.com/photo/2017/07/31/11/31/laptop-2557468__340.jpg"
              alt=""
            />
            <h2>
              {/* Breaking your coders <br /> block */}
              Getting a handle on <br />
              handlebars
            </h2>
            <h5>April,2022 </h5>
            <p>_____________</p>
            <div>
              At one time or another,
              <br /> as a developer, we'v all found ourselves hopelessly <br />
              stuck on a coding issue<a href="https://www.geeksforgeeks.org/">...</a>
            </div>
          </div>{" "}
          <div className="article-div">
            <img
              src="https://cdn.pixabay.com/photo/2017/09/24/11/59/password-2781614__340.jpg"
              alt=""
            />
            <h2>
              5 Exetensions for your <br /> chrome toolbelt
            </h2>
            <h5>august,2022 </h5>
            <p>_____________</p>
            <div>
              At one time or another,
              <br /> as a developer, we'v all found ourselves hopelessly <br />
              stuck on a coding issue<a href="https://www.geeksforgeeks.org/">...</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
