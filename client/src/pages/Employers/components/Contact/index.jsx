import './styles.scss';

const Contact = () => {
  return (
    <>
      <div className='employers-contact'>
        <div className='container'>
          {/* Title-title */}
          <div className='text-title'>
            <h1 className='title'>Let&apos;s find your IT Talents</h1>
            <p>Leave your contact so our Customer Love team can support you</p>
          </div>

          {/* FORM */}
          <div className='form-container'>
            {/* LEFT */}
            <div className='form-left'>
              <div className='section-wrapper'>
                <form className='background'>
                  <div className='user-contact'>
                    <h3>Your contact information</h3>
                    <form className='flex-box-field'>
                      {/* First Row */}
                      <div className='first-row'>
                        <div
                          className='flex-box-item'
                          style={{ marginRight: '24px' }}
                        >
                          <div className='left-input'>
                            <input
                              id='full-name'
                              type='text'
                              placeholder='Full name'
                            />
                            <label htmlFor='full-name'>
                              *Please let us know your name
                            </label>
                          </div>
                        </div>
                        <div className='flex-box-item'>
                          <div className='right-input'>
                            <input type='text' placeholder='Work title' />
                            <label htmlFor='full-name'>
                              * Please let us know your title
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Second Row */}
                      <div className='second-row'>
                        <div
                          className='flex-box-item'
                          style={{ marginRight: '24px' }}
                        >
                          <div className='left-input'>
                            <input
                              id='work-email'
                              type='text'
                              placeholder='Work email'
                            />
                            <label htmlFor='work-email'>
                              *Please provide your work email address
                            </label>
                          </div>
                        </div>
                        <div className='flex-box-item'>
                          <div className='right-input'>
                            <input
                              id='phone-number'
                              type='tel'
                              placeholder='Phone number'
                            />
                            <label htmlFor='phone-number'>
                              *Please provide your phone number
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* Third Row */}
                      <div className='third-row'>
                        <select placeholder='How did you know ITviec'>
                          <option value='1'>Google</option>
                          <option value='2'>Facebook</option>
                          <option value='3'>Linkedin</option>
                          <option value='4'>ITviec&apos;s Sales Team</option>
                        </select>
                      </div>
                    </form>
                  </div>

                  <div className='company-contact'>
                    <h3>Company information</h3>
                    {/* COMPANY NAME */}
                    <div className='name-com-input'>
                      <input
                        id='company-name'
                        type='text'
                        placeholder='Company Name'
                      />
                      <label htmlFor='company-name'>
                        *Please let us know your company name
                      </label>
                    </div>

                    {/* COMPANY LOCATION */}
                    <div className='location-com-input'>
                      <input
                        id='company-location'
                        type='text'
                        placeholder='Company Location'
                      />
                      <label htmlFor='company-name'>
                        *Please let us know your company name
                      </label>
                    </div>

                    {/* WEBSITE URL */}
                    <div className='website-url'>
                      <input
                        id='website-url'
                        type='text'
                        placeholder='Website URL'
                      />
                      <label htmlFor='company-name'>
                        URL includes a protocol (https), e.g: https://itviec.com
                      </label>
                    </div>
                  </div>
                  <button type='submit'>Submit</button>
                </form>
              </div>
            </div>
            {/* RIGHT */}

            <div className='form-right'></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
