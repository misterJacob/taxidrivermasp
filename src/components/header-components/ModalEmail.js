

export default function ModalEmail(){
  
  function closeSms(){
    const modalEmail = document.querySelector('.modal-email')
    modalEmail.classList.remove('modal-open')
  }

    return (
      <div className="modal-email">
        <div className="modal-box">
          <div className="modal-body">
            <h2>contact me</h2>
            <form action="#">
              <div className="form-group">
                <input type="text" name="name" placeholder="Enter your name" />
                <i className="icon fas fa-user"></i>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                />
                <i className="icon fas fa-envelope"></i>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter your phone"
                />
                <i className="icon fas fa-phone-alt"></i>
              </div>
              <div className="form-group message">
                <textarea
                  placeholder="Write your message"
                  name="message"
                ></textarea>
              </div>
              <input type="hidden" name="_honeypot" value="" />

              <div className="btn-container form-group">
                <button type="submit">Send Message</button>
                <span></span>
              </div>
            </form>
            <div className="modal-close">
              <button className="close-btn btn" onClick={closeSms}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
}