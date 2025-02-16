import { useState } from "react";

function FeedbackForm() { // feedback webpage
  
  const [feedback, setFeedback] = useState(""); // State to store feedback

  const handleInputChange = (event) => {
    setFeedback(event.target.value); // Update feedback state with input value
  };

  const handleSubmit = () => {
    alert(`Feedback submitted: ${feedback}`); // Display feedback on submit
    setFeedback(""); // Clear the input field after submission
  };

  return (
    <div style={styles.container}>
      <div style={styles.modal}>
        <h2 style={styles.title}>Feedback</h2>
        <input
          type="text"
          placeholder="Send Feedback"
          style={styles.input}
        />
        <button style={styles.submitButton}>Submit</button>
      </div>
    </div>
  );
}

//css style sheet
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f2f2f2",
  },
  modal: {
    width: "400px",
    padding: "20px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    borderRadius: "8px",
  },
  title: {
    color: "#4CAF50",
    marginBottom: "20px",
    fontFamily: "Arial, sans-serif",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    border: "1px solid #ddd",
    borderRadius: "4px",
  },
  submitButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default FeedbackForm;
