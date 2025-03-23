import React, { useState } from "react";

export default function ProblemForm({ onSubmit }) {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // onSubmit will handle posting to the backend
    onSubmit({ category, description, photo });
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 max-w-md">
      <label>
        Category:
        <select
          className="block w-full border p-2 rounded"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          <option value="pothole">Pothole</option>
          <option value="streetlight">Broken Streetlight</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Description:
        <textarea
          className="block w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <label>
        Photo:
        <input
          type="file"
          className="block w-full border p-2 rounded"
          onChange={(e) => setPhoto(e.target.files[0])}
        />
      </label>
      <button className="bg-blue-500 text-white py-2 rounded" type="submit">
        Report Problem
      </button>
    </form>
  );
}