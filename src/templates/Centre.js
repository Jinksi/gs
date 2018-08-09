import React from 'react'
import Helmet from 'react-helmet'

import Image from '../components/Image'
import Meta from '../components/Meta'
import Button from '../components/Button'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import BreakoutBox from '../components/BreakoutBox'
import PopoutBanner from '../components/PopoutBanner'
import Testimonials from '../components/Testimonials'
import Gallery from '../components/Gallery'
import CentreMap from '../components/CentreMap'


import './Centre.css'

// Export Template for use in CMS preview
export const CentreTemplate = ({
  title,
  subtitle,
  featuredImage,
  downloadBanner,
  logo,
  centreIntro,
  centreDetails,
  contentColumns,
  classroomsSection,
  testimonials,
  directorStatement,
  gallery = [],
  additionalInfoBoxes = [],
  body,
  meta,
  footerSettings
}) => {
  const { openingHours, location, latitude, longitude, phone, email } = centreDetails

  return (
    <main className="Centre">
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Meta {...meta} />
      <PageHeader title={title} subtitle={subtitle} />

      <section className="section Centre--Intro background-dots">
        <div className="container content">
          <Image className="Centre--Intro--Logo" src={logo} alt={title} />
          <h3 className="Centre--Intro--Title">{centreIntro}</h3>
        </div>
      </section>

      <section className="section Centre--MainSection background-clouds">
        <div className="container content">
          <BreakoutBox className="Centre--Details" title="Centre Details">
            {openingHours && (
              <p>
                <strong>Open Hours</strong>
                <br />
                {openingHours}
              </p>
            )}
            {location && (
              <div className='location'>
                <p>
                  <strong>Centre Location</strong>
                 <br />
                 {location}
                </p>
                <CentreMap lat={parseFloat(latitude)} lng={parseFloat(longitude)} styles={'[{"featureType": "all", "elementType": "labels", "stylers": [{"visibility": "off"}]},{"featureType": "administrative", "elementType": "all", "stylers": [{"visibility": "off"},{"color": "#efebe2"}]},{"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.attraction", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.business", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.government", "elementType": "all", "stylers": [{"color": "#dfdcd5"}]},{"featureType": "poi.medical", "elementType": "all", "stylers": [{"color": "#D9CBAA"}]},{"featureType": "poi.park", "elementType": "all", "stylers": [{"color": "#f1f1f1"}]},{"featureType": "poi.place_of_worship", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.school", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "poi.sports_complex", "elementType": "all", "stylers": [{"color": "#efebe2"}]},{"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]},{"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]},{"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [{"color": "#ffffff"}]},{"featureType": "road.arterial", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]},{"featureType": "road.local", "elementType": "geometry.fill", "stylers": [{"color": "#fbfbfb"}]},{"featureType": "road.local", "elementType": "geometry.stroke", "stylers": [{"visibility": "off"}]},{"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]},{"featureType": "water", "elementType": "all", "stylers": [{"color": "#a5d7e0"}]}]'} />
              </div>
            )}
            {(email || phone) && (
              <div>
                <strong>Contact Info</strong>
                <br />
                {phone && <div>T: {phone}</div>}
                {email && <div>E: {email}</div>}
              </div>
            )}
            <br />
            <Button to={'/'}>Enrol Now</Button>
          </BreakoutBox>
          <Content source={body} />
          {contentColumns.length && 
            <div className='column-section'>
              {contentColumns.map((column, index) => {
                const { image, content } = column

                return <div className='column-content'>   
                    {image && <Image src={image} alt='centre image' />}
                    {content && <Content src={content} />}
                  </div>
              })}
            </div>
          }
        </div>
      </section>

      {footerSettings && <PopoutBanner image={footerSettings.exceedLogo} title={footerSettings.exceedTextLong} />}

      {classroomsSection && (
        <section className="section secondary Centre--ClassroomsSection">
          <div className="container skinny taCenter">
            <h3>{classroomsSection.title}</h3>
          </div>
          <div className="container taCenter">
            {classroomsSection.items && (
              <div className="Centre--ClassroomsSection--Items">
                {classroomsSection.items.map(item => (
                  <div
                    className="Centre--ClassroomsSection--Item"
                    key={item.title}
                  >
                    <Image
                      className="Centre--ClassroomsSection--Item--Icon"
                      src={item.icon}
                      alt={item.title}
                    />
                    <h6 className="Centre--ClassroomsSection--Item--Title">
                      {item.title}
                    </h6>
                    <p>{item.subtitle}</p>
                  </div>
                ))}
              </div>
            )}
            <div className="Centre--ClassroomsSection--Subtitle">
              {classroomsSection.subtitle}
              <Button to="/">Enrol Now</Button>
            </div>
          </div>
        </section>
      )}

      {/*testimonials && <Testimonials items={testimonials} />*/}

      {directorStatement && (
        <section className="section Centre--DirectorStatement">
          <div className="container content">
            <h5 className="Centre--DirectorStatement--Title">
              {directorStatement.title}
            </h5>
            {directorStatement.image && (
              <Image
                className="Centre--DirectorStatement--Image"
                src={directorStatement.image}
                alt={directorStatement.title}
              />
            )}
            <Content src={directorStatement.content} />
          </div>
        </section>
      )}

      {gallery.length && (
        <section className="section thin Centre--Gallery">
          <div className="container taCenter content">
            <h3 className="Centre--Gallery--Title">Centre Gallery</h3>
            <Gallery images={gallery.map(item => item.image)} />
          </div>
        </section>
      )}

      <section className="section thin Centre--InfoBoxes">
        <div className="container content">
          {additionalInfoBoxes.map((box, index) => {
            const cols = [3, 4, 5]
            const color = cols[index % cols.length]
            return (
              <BreakoutBox
                className="Centre--InfoBox"
                title={box.title}
                key={box.title}
                color={color}
                noShadow
              >
                <p>{box.content}</p>
                {box.buttonTitle && (
                  <Button to={box.buttonLinkTo}>{box.buttonTitle}</Button>
                )}
              </BreakoutBox>
            )
          })}
        </div>
      </section>
    </main>
  )
}

const Centre = ({ data: { page, footerSettings } }) => (
  <CentreTemplate
    {...page}
    {...page.frontmatter}
    body={page.html}
    footerSettings={footerSettings}
  />
)

export default Centre

export const pageQuery = graphql`
  query Centre($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        logo {
          ...FluidImage
        }
        centreIntro
        centreDetails {
          openingHours
          location
          latitude
          longitude
          phone
          email
        }
        contentColumns {
          content
          image {
            ...MediumImage
          }
        }
        classroomsSection {
          title
          subtitle
          items {
            icon {
              ...SmallImage
            }
            title
            subtitle
          }
        }
        testimonials {
          name
          testimonial
        }
        directorStatement {
          image {
            ...MediumImage
          }
          title
          content
        }
        gallery {
          image {
            ...FluidImage
          }
        }
        additionalInfoBoxes {
          title
          content
          buttonTitle
          buttonLinkTo
        }
      }
    }
    footerSettings: settingsYaml(id: { regex: "/footer.yml/" }) {
      exceedText
      exceedTextLong
      exceedLogo
    }
  }
`
