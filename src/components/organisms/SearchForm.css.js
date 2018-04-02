import deviceInfo from '../../lib/deviceInfo.helper';
const isMobile = deviceInfo.isMobileSize();

const styles = {
  filters: {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row'
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    padding: isMobile ? 0 : '40 0 40 0',
    marginRight: isMobile ? 0 : 60,
    alignItems: 'stretch'
  },
  input: {
    flex: 10
  },
  ico: {
    alignSelf: 'flex-end'
  },
  filterTitle: {
    width: isMobile ? '100%' : 400,
  },
  filterAuthor: {
    width: isMobile ? '100%' : 150,
  },
  inputText: {
    fontSize: 18,
    border: 'none',
    background: 'transparent',
    caretColor: '#abf',
    backgroundColor: '#000',
    opacity: 0.7,
    padding: 7,
    color: '#abf',
    width: '100%',
    borderBottom: '2px solid #fff'
  },
}

export default styles;
