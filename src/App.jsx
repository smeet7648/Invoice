import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main />
        <Table />
        <Footer />
      </div>
    </>
  );
}
const date = new Date().toLocaleDateString();

function Header() {
  return (
    <header>
      <div>
        <h1 class="title">Ted's</h1>
        <p class="change">Small Business</p>
      </div>
      <div class="side2">
        <p class="p1">Date : {date}</p>
        <p class="p2">Estimated Number : 354545</p>
        <p class="p3">Estimated For : 343574</p>
      </div>
    </header>
  );
}

function Main() {
  return (
    <main>
      <div class="from">
        <p class="fgreen">from</p>
        <p class="ad1">
          <span class="bd1">: Tod's Small Business</span> 1324 Alameda St Los
          Angelos, Califomia 90015 (213) 123-4567
        </p>
      </div>
      <div class="to">
        <p class="tgreen">to</p>
        <p class="ad2">
          <span class="bd2"> : Sally Yesler</span> 301 W Spring St LOS united
          States 9001S (213) 567-1234
        </p>
      </div>
    </main>
  );
}

function Table() {
  return(
      <div class="table">
        <table border={1} class="table1">
            <thead>
          <tr>
              <th>Description</th>
              <th>Unit count</th>
              <th>Rate</th>
              <th>Total</th>
          </tr>
            </thead>
          <tbody>
            <tr>
              <td>Item 1</td>
              <td>2</td>
              <td>$10.00</td>
              <td>$20.00</td>
            </tr>
            <tr class="tr2">
              <td>Item 2</td>
              <td>3</td>
              <td>$15.00</td>
              <td>$45.00</td>
            </tr>
            <tr>
              <td>Item 3</td>
              <td>1</td>
              <td>$25.00</td>
              <td>$25.00</td>
            </tr>
            <tr class="tr4">
              <td>Item 4</td>
              <td>5</td>
              <td>$8.00</td>
              <td>$40.00</td>
            </tr>
          </tbody>
        </table>
      </div>
  );
}

function Footer() {
  return;
  <footer></footer>;
}

export default App;
