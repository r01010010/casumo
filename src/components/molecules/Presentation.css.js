import deviceInfo from '../../lib/deviceInfo.helper';
const isMobile = deviceInfo.isMobileSize();


const styles = {
  titleContainer: {
    paddingBottom: isMobile ? 30 : 30,
  },
  title: {
    fontSize: isMobile ? 50 : 70,
    fontWeight: 'bold',
    lineHeight: 1
  },
  by: {
    fontSize: isMobile ? 15 : 20,
    lineHeight: 1,
    fontStyle: 'italic',
    paddingTop: 5
  },
  subtitleContainer: {
    paddingBottom: isMobile ? 30 : 40,
  },
  underline: {
    textDecoration: 'underline'
  },
  logo: {
    width: isMobile ? 40 : 55,
    marginRight: 15,
    // display: isMobile ? 'none' : 'inline-block'
  }
}

export default styles;
