import { useState } from "react";

function FeedbackForm({ onSubmit, loading }) {

  const [formData, setFormData] = useState({

    name: "",

    email: "",

    phone: "",

    message: ""

  });

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    onSubmit(formData);

    setFormData({

      name: "",

      email: "",

      message: ""

    });

  };

  return (

    <form
      className="feedback-form"
      onSubmit={handleSubmit}
    >

      <div className="input-group">

        <label>Name</label>

        <input

          type="text"

          name="name"

          placeholder="Enter your name"

          value={formData.name}

          onChange={handleChange}

          required

        />

      </div>

      <div className="input-group">

        <label>Email</label>

        <input

          type="email"

          name="email"

          placeholder="Enter your email"

          value={formData.email}

          onChange={handleChange}

          required

        />
        <div className="input-group">

        <label>Phone</label>

        <input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  value={formData.phone}
  onChange={handleChange}
  required
/>
</div>

      </div>

      <div className="input-group">

        <label>Feedback</label>

        <textarea

          rows="6"

          name="message"

          placeholder="Write your feedback..."

          value={formData.message}

          onChange={handleChange}

          required

        />

      </div>

      <button
    className="submit-btn"
    disabled={loading}
>

    {loading
        ? "Submitting..."
        : "Submit Feedback"}

</button>

    </form>

  );

}

export default FeedbackForm;