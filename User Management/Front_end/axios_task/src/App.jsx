import { ThemeProvider, createTheme } from '@mui/material/styles';
import { green, orange, purple, red, yellow } from '@mui/material/colors';
import { CssBaseline } from '@mui/material';
import UserList from './UserList'

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: red[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <UserList />
    </ThemeProvider>
  )
}

export default App