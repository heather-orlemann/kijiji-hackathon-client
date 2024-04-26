import React from 'react';
import './PostMingaForm.scss';

const PostMingaForm = ({ adDetails, handleInputChange, handleFileChange, handleSubmit }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <h1>Post Your Ad: it's fast and easy</h1>
        <p className="tips">Tips: An event cannot be longer than 7 days. If your event lasts more than 7 days, please make multiple postings.</p>
      </div>
      <form className="post-ad-form" onSubmit={handleSubmit}>
        {/* Ad Details Section */}
        <div className="form-section">
          <h2 className="form-heading">1. Ad Details</h2>
          <hr />
          <div className="form-group">
            {/* Category Selection */}
            <div>
              <label>Select Category:</label>
              <select name="category" value={adDetails.category} onChange={handleInputChange}>
                <option value="Minga">Minga</option>
              </select>
            </div>
            {/* Event Type Selection */}
            <div>
              <label>Event Type:</label>
              <select name="eventType" value={adDetails.eventType} onChange={handleInputChange}>
                <option value="">Select</option>
              </select>
            </div>
            {/* Date and Time Inputs */}
            <div>
              <label>Date & Time:</label>
              <input type="date" name="startDate" value={adDetails.startDate} onChange={handleInputChange} />
              to
              <input type="date" name="endDate" value={adDetails.endDate} onChange={handleInputChange} />
            </div>
            {/* Ad Title Input */}
            <div>
              <label>Ad title:</label>
              <input type="text" name="title" value={adDetails.title} onChange={handleInputChange} />
            </div>
            {/* Description Textarea */}
            <div>
              <label>Description:</label>
              <textarea name="description" value={adDetails.description} onChange={handleInputChange} />
            </div>
            {/* Tags Input */}
            <div>
              <label>Tags:</label>
              <input type="text" name="tags" value={adDetails.tags} onChange={handleInputChange} />
            </div>
          </div>
        </div>
        {/* More form sections would continue similarly */}
        <div className="form-buttons">
          <button type="submit" className="submit-button">Post Your Ad</button>
          <button type="button" className="preview-button">Preview</button>
        </div>
      </form>
    </div>
  );
};

export default PostMingaForm;
