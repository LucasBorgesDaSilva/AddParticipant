import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
  },

  containerWrapper: {
    marginTop: 60,
    marginLeft: 20,
    marginRight: 20,
  },

  eventName: {
    color: '#FFFFFF',  
    fontSize: 24,
    fontWeight: 'bold'
  },

  eventDate: {
    color: '#6B6B6B',
    fontsize: 16,
  },

  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },

  input: {
    flex: 1,
    marginRight: 12,

    fontSize: 16,
    color: '#FFFFFF',
    
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    
    height: 56,
    padding: 16,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
  },

  listEmptyText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  }
});