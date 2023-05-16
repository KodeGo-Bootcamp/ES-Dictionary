import React from "react";
import Dictionary from "./dictionary/dictionary";

export function Content_dictionary(){
    return(
        <div className="content_dictionary">
        <div className="recent-search">
          <h2>Recent Search</h2>
          <ul className="search-list">
            <li>
              <a href="#0">APPLE</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
            <li>
              <a href="#0">item</a>
            </li>
          </ul>
        </div>
        <div className="dictionary">
           <Dictionary />
        </div>
      </div>

    )
}