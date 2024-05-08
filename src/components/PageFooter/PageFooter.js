import React from 'react'

const PageFooter = () => {
  return (
    <footer className="page-footer">
        
        <div className="footer-section">
          <div className="footer-container">
            <div className="footer-content-wrapper">
                <div className="logo-wrapper">
                    <img className="logo" src="/A U.svg" alt="AU Logo"></img>
                    <img className="logo-name" src="/AWESOME UI.svg" alt="AWESOME" srcset=""></img>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat non</p>
                <p className="footer-copyright">
                    &copy; Copyright 2018 Huddle. 
                </p>
                <p>All rights reserved.</p>
            
                <div className="footer-socials-wrapper">
                    <ul className="footer-list footer-socials-list">
                      <li className="footer-list-item">
                        <a href="#" className="footer-link">
                          <img src="/Path.svg" alt="" className="footer-social-image"></img>
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a href="#" className="footer-link">
                          <img src="/Dribbble.svg" alt="" className="footer-social-image"></img>
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a href="#" className="footer-link">
                          <img src="/Twitter.svg" alt="" className="footer-social-image"></img>
                        </a>
                      </li>
                      <li className="footer-list-item">
                        <a href="#" className="footer-link">
                          <img src="/Youtube.svg" alt="" className="footer-social-image"></img>
                        </a>
                      </li>
                    </ul>
                </div>
            </div>

            <div className="footer-menu-wrapper">
                <div className="company">
                    <span className="footer-tittle">Company</span>
                    <ul className="footer-list footer-menu-list">
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">lorem ipdum 1</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">lorem 2</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 3</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 4</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 5</a>
                        </li>
                    </ul>
                </div>
                <div className="support">
                    <span className="footer-tittle">Support</span>
                    <ul className="footer-list footer-menu-list">
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 6</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 7</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 8</a>
                        </li>
                        <li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 9</a>
                        </li><li className="footer-list-item">
                            <a href="#" className="footer-link">Lorem 10</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="message">
                <span className="mesage-tittle">Send message</span>
                <textarea name="your email addres" id="" cols="30" rows="10"></textarea>
                <div className="button button-lg ">
                    <a href="#">get started</a>
                    <img src="/Vector.svg" alt="" srcset=""></img>
                </div>
            </div>   

          </div>
        </div>
    
    </footer>
  )
}

export default PageFooter