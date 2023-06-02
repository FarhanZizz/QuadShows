import React from "react"
import "./Modal.css"

const Modal = ({ setIsOpen, name }) => {
  const handleBooking = (event) => {
    event.preventDefault()
    const form = event.target
    const movieName = form.movieName.value
    const name = form.name.value
    const amount = form.amount.value
    const date = form.date.value

    // Create an object to hold the data
    const bookingData = {
      movieName: movieName,
      name: name,
      amount: amount,
      date: date,
    }

    // Convert the object to a JSON string
    const bookingDataJSON = JSON.stringify(bookingData)

    // Save the data to the localStorage
    localStorage.setItem("bookingData", bookingDataJSON)

    setIsOpen(false)
  }

  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <form onSubmit={handleBooking} className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Book Tickets</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <p style={{ marginBottom: "-3px" }}>x</p>
          </button>
          <div className="modalContent">
            Are you sure you want to delete the item?
            <div className="input-group">
              <input
                required
                type="text"
                name="movieName"
                readOnly
                defaultValue={name}
              />
              <input required type="text" name="name" placeholder="Your Name" />
              <input
                required
                type="number"
                name="amount"
                placeholder="How Many tickets"
              />
              <input required type="date" name="date" />
            </div>
          </div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="cancelBtn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                type="submit"
                className="deleteBtn"
                // onClick={() => setIsOpen(false)}
              >
                Book Tickets
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Modal
