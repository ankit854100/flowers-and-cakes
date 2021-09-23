import React,{useState} from 'react'
import './App.css'
export const Navbar = () => {

    const [show,setShow]=useState(false);

    return (
        <div>
            <section className="navbar-bg">
            <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#">Shop Here</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show?"show":""}`}>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="google.com">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="google.com">Items</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="google.com">Contact</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="google.com">Cart</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class=" btn-style" type="submit">Login</button>
        <button class=" btn-style btn-style-border" type="submit">SignUp</button>
      </form>
    </div>
  </div>
</nav>
</section>
        </div>
    )
}

export default Navbar; 