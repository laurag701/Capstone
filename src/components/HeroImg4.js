import "./HeroImg4.css";
import React from 'react'

const HeroImg4 = () => {
  return (
    <div className="hero-img">
        <div className="heading">

        <div className="hero2">
          <h1 className="hero-heading">Contact Me!</h1>
        </div>
        <form>
          <div className ="input-group">
            <input type ="text" id ="name" required/>
            <label for ="name"> Name</label>
      </div>
       
          <div className ="input-group">
            <input type ="text" id ="number" required/>
            <label for ="number"> Phone Number</label>
      </div>
          <div className ="input-group">
            <input type ="email" id ="email" required/>
            <label for ="email"> Email</label>
      </div>
           <div className ="input-group">
            <textarea id ="comments" row ="8"></textarea>
            <label for ="comments"> Comments</label>
    </div>
             <button type ="Submit">Submit</button>
        </form>
        </div>
      </div>
  )
}

export default HeroImg4;