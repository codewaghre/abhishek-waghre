
import './App.css'
import Index from './routes/Index'
import { ThemeProvider } from './hooks/theme-context'
import { ScrollProvider } from './hooks/scroll-context'
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>

      <ScrollProvider>
        <ThemeProvider>
          <Index />
          <Toaster position="bottom-center" reverseOrder={true} />
        </ThemeProvider>
      </ScrollProvider>


    </>
  )
}

export default App
