import {StyleSheet} from 'react-native';
import colors from '../components/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.background,
  },
  textInput: {
    height: 50,
    borderRadius: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighgray,
    marginBottom: 10,
    paddingHorizontal: 40,
    color: 'black',
  },
  textInputIcon: {
    position: 'absolute',
    bottom: 25,
    left: 10,
  },
  button: {
    backgroundColor: colors.purple,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '800',
  },
  leadIMG: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  text: {
    fontFamily: 'SourceSansPro-Regular',
    color: 'black',
  },
  textLink: {
    color: colors.lightPurple,
    fontWeight: '800',
  },
  shortLine: {
    borderWidth: 1,
    borderColor: colors.lighgray,
    width: '10%',
    alignSelf: 'center',
    marginVertical: 40,
  },
  longLine: {
    borderWidth: 1,
    borderColor: colors.lighgray,
    width: '100%',
    alignSelf: 'center',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  subHeading: {
    fontFamily: 'SourceSansPro-Regular',
    color: colors.lightPurple,
    fontSize: 18,
    fontWeight: '800',
  },
});

export default styles;
