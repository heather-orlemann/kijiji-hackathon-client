import React from 'react';
import "./PostMingaForm.scss";

const PostMingaForm = ({ adDetails, handleInputChange, handleFileChange, handleSubmit }) => {
  return (
    <div className="form-container">
        <div className="form-header">
            <h1>Post Your Ad it's fast and easy</h1>
            <p className="tips">Tips: An event cannot be longer than 7 days. If your event lasts more than 7 days, please make multiple postings.</p>
        </div>
    <form className="post-ad-form">
      <div className="form-section">
        <h2 className="form-heading">1. Ad Details</h2>
        <hr />
        <div className="form-group">
            <div>
                <label>Select Category:</label>
                <select name="category" value={adDetails.category} onChange={handleInputChange}>
                <option value="Minga">Minga</option>
                </select>
            </div>
            <div>
                <label>Event Type:</label>
                <select name="eventType" value={adDetails.eventType} onChange={handleInputChange}>
                <option value="">Select</option>
                </select>
            </div>

            <div>
                <label>Date & Time:</label>
                <input type="date" name="startDate" value={adDetails.startDate} onChange={handleInputChange} />
                to
                <input type="date" name="endDate" value={adDetails.endDate} onChange={handleInputChange} />
            </div>

            <div>
                <label>Ad title:</label>
                <input type="text" name="title" value={adDetails.title} onChange={handleInputChange} />
            </div>

            <div>
                <label>Description:</label>
                <textarea name="description" value={adDetails.description} onChange={handleInputChange} />
            </div>

            <div>
                <label>Tags:</label>
                <input type="text" name="tags" value={adDetails.tags} onChange={handleInputChange} />
            </div>
        </div>
      </div>

      <div className="form-section">
        <h2 className="form-heading">2. Media</h2>
        <hr />
        <div className="form-group">
            <div>
                <label>Add photos:</label>
                <input type="file" multiple onChange={handleFileChange} />
            </div>

            <div>
                <label>YouTube Video:</label>
                <input type="text" name="videoUrl" value={adDetails.videoUrl} onChange={handleInputChange} />
            </div>

            <div>
                <label>Website URL:</label>
                <input type="text" name="websiteUrl" value={adDetails.websiteUrl} onChange={handleInputChange} />
            </div>

        </div>
      </div>

      <div className="form-section">
        <h2 className="form-heading">3. Location</h2>
        <hr />
        <div className="form-group">
            <div>
                <label>Location:</label>
                <input type="text" name="location" value={adDetails.location} onChange={handleInputChange} />
            </div>
        </div>
      </div>

      <div className="form-section">
        <h2 className="form-heading">4. Price</h2>
        <hr />
        <div className="form-group">
            <div>
                <label>Price:</label>
                <select name="price" value={adDetails.price} onChange={handleInputChange}>
                    <option value="Free">Free</option>
                    <option value="Please Contact">Please Contact</option>
                    <option value="Swap/Trade">Swap/Trade</option>   
                </select>
            </div>
        </div>
      </div>

      <div className="form-section">
        <h2 className="form-heading">5. Contact Information</h2>
        <hr />
        <div className="form-group">
            <div>
                <label>Phone number:</label>
                <input type="tel" name="phoneNumber" value={adDetails.phoneNumber} onChange={handleInputChange} />
            </div>

            <div>
                <label>Email:</label>
                <input type="email" name="email" value={adDetails.email} onChange={handleInputChange} />
            </div>
        </div>
      </div>

      <div className="form-buttons">
        <button type="submit" onClick={handleSubmit} className="submit-button">Post Your Ad</button>
        <button type="submit" className="preview-button">Preview</button>
      </div>
    </form>
  </div>
);
};
export default PostMingaForm;
