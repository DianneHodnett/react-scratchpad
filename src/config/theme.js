import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
          red500, blue500
    } from 'material-ui/styles/colors'

export default getMuiTheme({
  palette: {
    textColor: blue500,
  },
  appBar: {
    height: 50,
  },
  appbar: {
    title: red500
  }
});