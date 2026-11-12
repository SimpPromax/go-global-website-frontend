export const formConfigs = {
  'university-admission': {
    title: 'University Admission Application',
    description: 'Please provide your academic details and study preferences.',
    sections: [
      {
        title: '01. Personal Information',
        fields: [
          { name: 'firstName', label: 'First Name', type: 'text', required: true, placeholder: 'John' },
          { name: 'lastName', label: 'Last Name', type: 'text', required: true, placeholder: 'Doe' },
          { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
          { name: 'gender', label: 'Gender', type: 'select', required: true, options: ['Male', 'Female', 'Other', 'Prefer not to say'] },
        ]
      },
      {
        title: '02. Contact Information',
        fields: [
          { name: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: '+254 700 000 000' },
          { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'john@example.com' },
        ]
      },
      {
        title: '03. Academic Background',
        fields: [
          { name: 'qualification', label: 'Highest Qualification', type: 'text', required: true, placeholder: 'e.g., High School Diploma, BSc Computer Science' },
          { name: 'institution', label: 'Institution Attended', type: 'text', required: true },
          { name: 'gradYear', label: 'Year of Completion', type: 'number', required: true, placeholder: '2023' },
        ]
      },
      {
        title: '04. Study Preferences',
        fields: [
          { name: 'destination', label: 'Preferred Destination', type: 'select', required: true, options: ['UK', 'Canada', 'USA', 'Germany', 'Australia', 'Other'] },
          { name: 'course', label: 'Intended Course', type: 'text', required: true, placeholder: 'e.g., MSc Data Science' },
          { name: 'intake', label: 'Preferred Intake', type: 'select', required: true, options: ['January', 'May', 'September', 'Not sure yet'] },
        ]
      },
      {
        title: '05. Supporting Documents',
        fields: [
          { name: 'certificates', label: 'Academic Certificates', type: 'file', required: true, hint: 'PDF or JPG (Max 5MB)' },
          { name: 'transcripts', label: 'Academic Transcripts', type: 'file', required: true, hint: 'PDF (Max 5MB)' },
          { name: 'passport', label: 'Passport Copy', type: 'file', required: true, hint: 'PDF or JPG (Max 5MB)' },
        ]
      }
    ]
  },
  'visa-assistance': {
    title: 'Student Visa Assistance',
    description: 'Tell us about your visa requirements.',
    sections: [
      {
        title: '01. Personal Information',
        fields: [
          { name: 'firstName', label: 'First Name', type: 'text', required: true },
          { name: 'lastName', label: 'Last Name', type: 'text', required: true },
          { name: 'email', label: 'Email Address', type: 'email', required: true },
          { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
        ]
      },
      {
        title: '02. Visa Details',
        fields: [
          { name: 'destination', label: 'Destination Country', type: 'select', required: true, options: ['UK', 'Canada', 'USA', 'Germany', 'Australia'] },
          { name: 'status', label: 'Current Visa Status', type: 'select', required: true, options: ['Need to apply', 'Previously rejected', 'Renewal', 'Other'] },
          { name: 'notes', label: 'Additional Information', type: 'textarea', required: false, placeholder: 'Any details we should know...' },
        ]
      }
    ]
  }
  // Note: You can quickly copy/paste the structure above to add 'scholarship', 'education-financing', and 'english-preparation'
}