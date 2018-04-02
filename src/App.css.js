const styles = {
  titleContainer: {
    paddingBottom: 30,
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    lineHeight: 1
  },
  by: {
    fontSize: 20,
    lineHeight: 1,
    fontStyle: 'italic'
  },
  subtitleContainer: {
    paddingBottom: 40,
  },
  filters: {
    display: 'flex',
    flexDirection: 'row'
  },
  filter: {
    display: 'flex',
    flexDirection: 'row',
    padding: '40 0 40 0',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    marginRight: 60,
    alignItems: 'stretch'
  },
  input: {
    flex: 10
  },
  ico: {
    alignSelf: 'flex-end'
  },
  filterTitle: {
    width: 400,
  },
  filterAuthor: {
    width: 150,
  },
  filterGenre: {
    width: 110,
  },
  underline: {
    paddingBottom: 0,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1
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
    width: '100%'
  },
  results: {
    paddingTop: 40,
    paddingBottom: 40,
    display: 'flex',
    flexDirection: 'column'
  }
}

export default styles;
