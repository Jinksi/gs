import React from 'react'
import { serialize } from 'dom-form-serializer'

import Select from './Select'
import { ICONUpload } from './Icons'
import './EnquiryForm.css'

// const fetch = window.fetch


class Form extends React.Component {
  static defaultProps = {
    name: 'Application Form',
    subject: '', // optional subject of the notification email
    action: '',
    hidden: false,
    successMessage: 'Thanks for your submission, we will get back to you soon',
    errorMessage:
      'There is a problem, your message has not been sent, please try contacting us via email'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleUpload = (event, target) => {
    const fileNames = []

    const file = event.target.files
      ? Array.from(event.target.files).forEach(file => {
        fileNames.push(file.name)
      })
      : this.state[target]

    this.setState({
      [target]: !!fileNames.length ? fileNames.join(', ') : file
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const formTarget = e.target

    if (this.state.disabled) return
    const form = e.target
    const data = serialize(form)

    if (!data['resume']) {
      return this.setState({
        alert: 'Please attach Resume'
      })
    } else {
      this.setState({ 
        filesUploading: true 
      }, () => {
        formTarget.submit()
      })
    }
  }

  render () {
    const { name, subject, action, hidden } = this.props
    const { filesUploading } = this.state


    return (
      <form
        className='ApplicationForm EnquiryForm-controlled'
        name={this.state['form-name']}
        ref={form => {
          this.form = form
        }}
        action={this.state.action}
        onSubmit={this.handleSubmit}
        data-netlify=''
        data-netlify-honeypot='_gotcha'
      >
        {this.state.alert && (
          <div className='EnquiryForm--Alert'>{this.state.alert}</div>
        )}

        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="text"
            placeholder="Your Name"
            name="name"
            required
          />
        </label>
        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="text"
            placeholder="Phone"
            name="phone"
          />
        </label>
        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
        </label>
        <label className="EnquiryForm--Label">
          <input
            className="EnquiryForm--Input"
            type="text"
            placeholder="Preferred Role"
            name="role"
            required
          />
        </label>
        <Select
          placeholder='Preferred Centre'
          name='type'
          options={[
            'Mildura Early Learning Centre',
            'Mildura Central Early Learning Centre',
            'East Malvern Learning Centre'
          ]}
        />
        <Select
        placeholder='Joining as'
          name='type'
          options={[
            'option 1',
            'option 2',
            'option 3'
          ]}
        />
        <label className="EnquiryForm--Label full-width">
          <input
            className="EnquiryForm--Input"
            type="text"
            placeholder="Qualifications"
            name="qualifications"
            required
          />
        </label>
        <label className="EnquiryForm--Label full-width">
          <input
            className="EnquiryForm--Input EnquiryForm--Textarea"
            placeholder="Why do you want to work for Great Start?"
            name="message"
            rows="10"
            required
          />
        </label>
        <div className='file-download'>
          <div className='file-download-item'>
            <label className='EnquiryForm--Label title'>
              <input
                className='EnquiryForm--Input'
                type='file'
                placeholder='Resume and Cover Letter'
                name='resume'
                onChange={event => this.handleUpload(event, 'resume')}
                multiple
              />
              Resume and Cover Letter <ICONUpload/>
            </label>
            {this.state.resume && <p className='results'>{this.state.resume}</p>}
          </div>
        </div>

        <div className='form--footer'>
          <input type='text' name='_gotcha' style={{ display: 'none' }} />
          {!!subject && <input type='hidden' name='subject' value={subject} />}
          <input type='hidden' name='form-name' value={name} />
          <input
            className='Button hasShadowHover EnquiryForm--SubmitButton'
            type='submit'
            value={!filesUploading ? 'Apply Now' : 'Uploading Files...'}
          />
        </div>
      </form>
    )
  }
}

export default Form